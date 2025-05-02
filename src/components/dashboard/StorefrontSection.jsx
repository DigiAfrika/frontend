import React, { useState } from 'react';
import { FaStore, FaPlusCircle, FaCog, FaBoxOpen, FaDollarSign, FaChartLine, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StatCard = ({ icon, label, value, color }) => (
    <div className={`bg-white p-4 rounded-lg shadow border-l-4 ${color || 'border-gray-300'}`}>
        <div className="flex items-center mb-1">
            <div className={`mr-2 text-lg ${color ? color.replace('border-', 'text-') : 'text-gray-500'}`}>
                {icon}
            </div>
            <p className="text-sm text-gray-500">{label}</p>
        </div>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
    </div>
);


const StorefrontSection = ({ user, setUserData }) => { // Accept user and potentially setUserData
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });

   // Get storefront data, providing defaults if not present
   const storefront = user?.storefront || { products: [], stats: {}, status: 'setup needed', url: '' };
   const products = storefront.products || [];
   const stats = storefront.stats || {};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) {
      alert("Product Name and Price are required.");
      return;
    }
    const productToAdd = {
        id: `prod${Date.now()}`, // Simple unique ID for demo
        ...newProduct,
        price: parseFloat(newProduct.price) || 0,
        stock: parseInt(newProduct.stock) || 0,
    };

    console.log("Adding product:", productToAdd);
    alert(`Simulating adding product: ${productToAdd.name}`);
    // In a real app, update backend/global state
    // Example: Update local state if passed down
    // setUserData(prev => ({
    //     ...prev,
    //     storefront: {
    //         ...prev.storefront,
    //         products: [...(prev.storefront?.products || []), productToAdd]
    //     }
    // }));

    // Reset form and hide
    setNewProduct({ name: '', price: '', stock: '', category: '' });
    setShowAddForm(false);
  };

  if (storefront.status === 'setup needed') {
       return (
           <div className="bg-white p-6 rounded-lg shadow text-center">
                <FaStore className="text-4xl text-[#F69704] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#065A2F] mb-2">Setup Your Storefront</h3>
                <p className="text-gray-600 mb-4">Start selling online by setting up your digital store.</p>
                <button className="bg-[#F69704] text-white px-6 py-2 rounded-full hover:bg-opacity-90">
                    Start Setup Guide
                </button>
           </div>
       );
  }


  return (
    <div className="space-y-6">
      {/* Storefront Header & Stats */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                 <h3 className="text-lg md:text-xl font-semibold text-[#065A2F] mb-2 sm:mb-0 flex items-center">
                    <FaStore className="mr-2 text-[#F69704]" /> Your Storefront: {storefront.theme} Theme
                 </h3>
                 <a href={`//${storefront.url}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[#F69704] hover:underline flex items-center">
                    Visit Store <FaEye className="ml-1"/>
                 </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <StatCard icon={<FaDollarSign />} label="Total Revenue" value={`$${stats.totalRevenue?.toFixed(2) || '0.00'}`} color="border-green-500" />
                 <StatCard icon={<FaBoxOpen />} label="Total Orders" value={stats.totalOrders || 0} color="border-blue-500" />
                 <StatCard icon={<FaChartLine />} label="Conversion Rate" value={`${stats.conversionRate || 0}%`} color="border-orange-500" />
                 <StatCard icon={<FaEye />} label="Monthly Visitors" value={stats.monthlyVisitors || 0} color="border-purple-500" />
            </div>
        </div>

      {/* Product Management */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800">Your Products ({products.length})</h4>
          <div className="flex space-x-2">
            <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-[#065A2F] text-white px-3 py-1 rounded-full hover:bg-opacity-90 text-sm flex items-center"
            >
                <FaPlusCircle className="mr-1" /> Add Product
            </button>
             <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-50 text-sm flex items-center">
                <FaCog className="mr-1"/> Settings
            </button>
          </div>
        </div>

        {/* Add Product Form (Conditional) */}
        {showAddForm && (
            <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleAddProduct}
                className="mb-6 p-4 border border-gray-200 rounded-md space-y-3 bg-gray-50"
            >
                <h5 className="font-semibold text-md text-gray-700">Add New Product</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Product Name*" className="p-2 border rounded w-full text-sm" required/>
                     <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Category (e.g., Jewelry)" className="p-2 border rounded w-full text-sm"/>
                     <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price* (e.g., 25.00)" className="p-2 border rounded w-full text-sm" step="0.01" min="0" required/>
                     <input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} placeholder="Stock Quantity (e.g., 10)" className="p-2 border rounded w-full text-sm" min="0"/>
                </div>
                <div className="flex justify-end space-x-2">
                     <button type="button" onClick={() => setShowAddForm(false)} className="text-sm text-gray-600 px-3 py-1 rounded hover:bg-gray-200">Cancel</button>
                     <button type="submit" className="text-sm bg-[#F69704] text-white px-4 py-1 rounded-full hover:bg-opacity-90">Save Product</button>
                </div>
            </motion.form>
        )}

        {/* Product List */}
        <div className="overflow-x-auto">
             {products.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                        <th scope="col" className="px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                        <tr key={product.id}>
                        <td className="px-4 py-2 whitespace-nowrap text-gray-900">{product.name}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-gray-500">{product.category || '-'}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-gray-500">${product.price.toFixed(2)}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-gray-500">{product.stock}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-right">
                            <button className="text-[#065A2F] hover:text-[#F69704] mr-2">Edit</button>
                            <button className="text-red-600 hover:text-red-800">Delete</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500 py-4">You haven't added any products yet.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default StorefrontSection;