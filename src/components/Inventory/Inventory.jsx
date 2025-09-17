// Updated Inventory.jsx
import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";
import Product from "./Product";

const Inventory = () => {
    const inventory = useInventory()
    const [alertValue, setAlertValue] = useState(10)
    const [searchQuery, setSearchQuery] = useState("")
    const [showOnlyDepleted, setShowOnlyDepleted] = useState(false)

    const lowerCaseSearchQuery = searchQuery.toLowerCase()
    const filteredInventory = inventory.filter((product) => {
        const matchesSearchQuery = product.productName.toLowerCase().includes(lowerCaseSearchQuery);
        const isDepleted = product.stock < alertValue;
        return showOnlyDepleted ? (matchesSearchQuery && isDepleted) : matchesSearchQuery;
    })

    return (
        <div className="m-4 mb-6 flex flex-col items-center">
            <h1 className="font-bold text-2xl mb-6 text-gray-800">Inventory</h1>
            
            {/* Search and Filter Controls */}
            <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Search Input */}
                    <div className="flex-grow">
                        <input
                            type="text"
                            placeholder="Search inventory..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border border-gray-300 hover:border-gray-400 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                    
                    {/* Alert Value Input */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="alert-value" className="text-sm font-medium text-gray-700 whitespace-nowrap">Alert Value</label>
                        <input
                            id="alert-value"
                            className="border border-gray-300 p-2 hover:border-gray-400 rounded w-20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            value={alertValue}
                            type="number"
                            min="0"
                            onChange={(e) => setAlertValue(Number(e.target.value))}
                        />
                    </div>
                    
                    {/* Show Only Depleted Toggle */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="show-only-depleted" className="text-sm font-medium text-gray-700 whitespace-nowrap">Show Only Depleted</label>
                        <div className="relative inline-block w-12 h-6">
                            <input
                                className="absolute opacity-0 w-0 h-0"
                                id="show-only-depleted" 
                                type="checkbox" 
                                checked={showOnlyDepleted} 
                                onChange={() => setShowOnlyDepleted(!showOnlyDepleted)}
                            />
                            <span className={`slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition duration-300 ${showOnlyDepleted ? 'bg-blue-600' : 'bg-gray-300'} rounded-full`}></span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Products Grid */}
            {filteredInventory.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {filteredInventory.map((product) => (
                        <Product key={product.productName} product={product} alertValue={alertValue} />
                    ))}
                </div>
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <p className="text-gray-500 text-lg">No inventory items found.</p>
                </div>
            )}
        </div>
    );
};

export default Inventory;