// Updated Product.jsx (Inventory version)
import { useState } from "react";
import { useInventoryDispatch } from "../../context/InventoryContext";

const Product = ({ product, alertValue }) => {
    const [addStock, setAddStock] = useState(0)
    const inventoryDispatch = useInventoryDispatch()

    return (
        <div
            className={`border p-5 rounded-xl text-center flex flex-col items-center transition-all ${
                product.stock < alertValue 
                    ? "border-red-300 bg-red-50/70 shadow-red-100" 
                    : "border-gray-200 bg-white hover:shadow-md"
            } shadow-sm`}
        >
            <h1 className="font-bold text-xl text-gray-800 mb-3">{product.productName}</h1>
            <div className="w-48 h-48 overflow-hidden border border-gray-200 rounded-lg mb-4 shadow-inner">
                <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-lg font-semibold text-gray-700 mb-2">₹ {product.price.toFixed(2)}</p>
            
            <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    product.stock < alertValue 
                        ? "bg-red-100 text-red-800" 
                        : "bg-emerald-100 text-emerald-800"
                }`}>
                    Stock: {product.stock}
                </span>
            </div>
            
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">Add Stock:</label>
                <div className="flex items-center gap-2">
                    <input
                        onChange={(e) => setAddStock(Number(e.target.value))}
                        className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        value={addStock}
                        type="number"
                        min="0"
                        name="new-stock-qty"
                        id="new-stock-qty"
                    />
                    <button
                        onClick={() => {
                            if (addStock > 0) {
                                inventoryDispatch({
                                    type: "STOCK_ADDED",
                                    productName: product.productName,
                                    stock: addStock,
                                });
                                setAddStock(0);
                            }
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-medium transition shadow-sm hover:shadow-md"
                        disabled={addStock <= 0}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;