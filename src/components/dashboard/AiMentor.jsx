import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// --- Gemini API Configuration ---
// IMPORTANT: Store your API Key securely using environment variables!
// Use Vite's `import.meta.env.VITE_GEMINI_API_KEY` or CRA's `process.env.REACT_APP_GEMINI_API_KEY`
const API_KEY = 'AIzaSyAviTssJXgKQoPimSP2LaTbE4zOZJhQyBw'; // Adjust prefix if using CRA
const MODEL_NAME = "gemini-1.5-flash-latest"; // Or other suitable model

let genAI;
let model;

if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
    model = genAI.getGenerativeModel({ model: MODEL_NAME });
} else {
    console.error("Gemini API Key not found. Please set VITE_GEMINI_API_KEY (or REACT_APP_GEMINI_API_KEY) in your .env file.");
    // Optionally, disable the AI mentor feature or show an error message prominently
}

// Safety settings - adjust as needed
const generationConfig = {
  temperature: 0.9, // Controls randomness (0=deterministic, 1=creative)
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048, // Adjust based on expected response length
};

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];
// --- End Gemini API Configuration ---

// --- Helper to format user context for the prompt ---
const formatUserContextForPrompt = (user) => {
    if (!user) return "The user has not provided profile information yet.";

    let context = `
    You are DigiAfrika AI Mentor, a helpful assistant for African entrepreneurs using the DigiAfrika platform.
    Your current user is ${user.name}.
    Business Name: ${user.businessName || 'Not specified'}
    Business Type: ${user.businessType || 'Not specified'}
    Current Business Stage: ${user.stage || 'Not specified'}
    Location: ${user.location || 'Not specified'}
    User's Goals: ${user.goals?.join(', ') || 'Not specified'}
    Modules Completed: ${user.learningModules?.filter(m => m.status === 'completed').map(m => m.title).join(', ') || 'None'}
    Modules In Progress: ${user.learningModules?.filter(m => m.status === 'in progress').map(m => m.title).join(', ') || 'None'}

    Keep your responses encouraging, practical, and relevant to an African context where possible.
    Be concise and ask follow-up questions to guide the user.
    Do not make up information if you don't know the answer.
    You are chatting with the user now.
    ---
    Previous conversation history will be provided. Your task is to respond to the latest user message.
    `;
    return context.trim();
}

// --- Main Component ---
const AiMentor = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chatSession, setChatSession] = useState(null);
  const messagesEndRef = useRef(null);

  // Initialize chat session and greeting
  useEffect(() => {
    if (user && model && !chatSession) {
        setIsLoading(true);
        setError(null);
        try {
            // Start a new chat session with history and context
            const newChat = model.startChat({
                generationConfig,
                safetySettings,
                history: [], // Start with empty history for now
            });
            setChatSession(newChat);

            // Construct initial context prompt
            const initialContext = formatUserContextForPrompt(user);
            const initialPrompt = `${initialContext}\n\nUser: Hello!`; // Simulate user starting

            // Send initial context and greeting to get the first AI response
            newChat.sendMessage(initialPrompt).then(result => {
                const aiResponse = result.response.text();
                 setMessages([{ sender: 'ai', text: aiResponse }]);
            }).catch(err => {
                 console.error("Error getting initial AI response:", err);
                 setError("Sorry, I couldn't start our chat. Please try refreshing.");
                 setMessages([{ sender: 'ai', text: "I seem to be having trouble starting. Please refresh the page." }]);
            }).finally(() => {
                 setIsLoading(false);
            });

        } catch (err) {
            console.error("Error initializing Gemini chat:", err);
            setError("Failed to initialize AI Mentor. Please ensure your API key is valid.");
            setIsLoading(false);
        }
    } else if (!API_KEY) {
         setError("AI Mentor requires an API Key setup.");
         setMessages([{ sender: 'ai', text: "AI Mentor is currently unavailable. API Key is missing." }]);
    }

    // Cleanup chat session if component unmounts (optional)
    // return () => { setChatSession(null); }

  }, [user, chatSession]); // Re-run if user changes or chatSession needs init

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const handleSendMessage = async (e) => {
    e.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput || isLoading || !chatSession || error) return; // Prevent sending if loading, no session, or error

    const newUserMessage = { sender: 'user', text: trimmedInput };
    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
        // Construct prompt with context and latest message
        // Note: `startChat` manages history, so we just send the new message.
        // However, explicitly adding context *might* be needed if history alone isn't enough for complex flows.
        // For simplicity here, we rely on the history managed by `chatSession`.
        // A more robust approach might rebuild context + recent history for each turn.
        // const prompt = `${formatUserContextForPrompt(user)}\n\nUser: ${trimmedInput}`; // Example if explicit context needed each time

        const result = await chatSession.sendMessage(trimmedInput);
        const aiResponse = result.response.text();
        const newAiMessage = { sender: 'ai', text: aiResponse };
        setMessages((prev) => [...prev, newAiMessage]);

    } catch (err) {
      console.error("Error sending message to Gemini:", err);
      setError("Sorry, I couldn't get a response. Please check your connection or API key quota.");
      // Add error message to chat
      setMessages((prev) => [...prev, { sender: 'ai', text: "I encountered an issue. Please try asking again." }]);
    } finally {
      setIsLoading(false);
    }
  };

    // Render Error Message
    const renderError = () => {
        if (!error) return null;
        return (
             <div className="p-3 mb-4 bg-red-100 border border-red-300 text-red-800 rounded-md text-sm">
                <strong>Error:</strong> {error}
             </div>
        );
    }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow">
        {renderError()} {/* Display error prominently */}
        <h3 className="text-lg md:text-xl font-semibold text-[#065A2F] mb-4 flex items-center">
            <FaRobot className="mr-2 text-[#F69704]" /> AI Mentor
        </h3>
        <div className="h-80 overflow-y-auto mb-4 p-4 bg-gray-50 rounded border border-gray-200 flex flex-col space-y-4">
            <AnimatePresence>
            {messages.map((msg, index) => (
                <motion.div
                key={index} /* Using index is okay for demo, but consider unique IDs */
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                <div
                    className={`
                    max-w-[85%] p-3 rounded-lg text-sm shadow-sm
                    ${msg.sender === 'user' ? 'bg-[#F69704] text-white' : 'bg-gray-200 text-gray-800'}
                    `}
                >
                    {/* Basic markdown link handling (example) */}
                    {msg.text.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                         const match = part.match(/\[(.*?)\]\((.*?)\)/);
                         if (match) {
                            return <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">{match[1]}</a>;
                         }
                         return <span key={i}>{part}</span>;
                    })}
                </div>
                </motion.div>
            ))}
            </AnimatePresence>
            {isLoading && messages.length > 0 && ( // Show loading only after first message if needed
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
                >
                    <div className="bg-gray-200 text-gray-600 p-3 rounded-lg text-sm inline-flex items-center shadow-sm">
                        <span className="animate-pulse mr-2">● ● ●</span> thinking
                    </div>
                </motion.div>
            )}
            <div ref={messagesEndRef} /> {/* Anchor for scrolling */}
        </div>
        <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={error ? "AI Mentor unavailable" : "Ask your AI mentor..."}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F69704] disabled:bg-gray-100"
            disabled={isLoading || !!error || !chatSession} // Disable if loading, error, or no session
            />
            <button
            type="submit"
            className="bg-[#065A2F] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50 flex items-center justify-center"
            disabled={isLoading || !!error || !chatSession || !userInput.trim()}
            >
            <FaPaperPlane />
            </button>
        </form>
        {!API_KEY && <p className="text-xs text-red-600 mt-2">API Key not configured. AI Mentor is disabled.</p>}
    </div>
  );
};

export default AiMentor;