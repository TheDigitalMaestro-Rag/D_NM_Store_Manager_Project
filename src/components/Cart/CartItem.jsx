import { useCartDispatch } from "../../context/CartContext";
import { useInventory } from "../../context/InventoryContext";

// Enhanced CartItem component
export default function CartItem({ product }) {
  const dispatchToCart = useCartDispatch();
  const inventory = useInventory();
  const productInInventory = inventory.find(item => item.productName === product.productName);

  const stockAvailable = productInInventory ? productInInventory.stock : 0;

  return (
    <div className="border border-gray-200 m-2 p-5 rounded-xl text-center flex flex-col items-center bg-white shadow-md hover:shadow-lg transition">
      <h1 className="font-bold text-xl text-gray-800 mb-3">{product.productName}</h1>
      <div className="w-48 h-48 overflow-hidden border border-gray-200 rounded-lg shadow-inner">
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-lg mt-4 font-semibold text-gray-700">₹ {product.price.toFixed(2)}</p>
      <div className="flex items-center mt-3 space-x-3">
        {product.quantity > 1 ? (
          <button
            onClick={() => {
              dispatchToCart({
                type: 'DEC_QTY',
                ...product,
              });
            }}
            className="bg-red-100 text-red-600 hover:bg-red-200 rounded-lg p-2 w-10 h-10 flex items-center justify-center transition"
          >
            -
          </button>
        ) : (
          <button disabled className="bg-gray-100 text-gray-400 rounded-lg p-2 w-10 h-10 flex items-center justify-center">
            -
          </button>
        )}
        
        <span className="text-lg font-medium w-10">{product.quantity}</span>
        
        {product.quantity < stockAvailable ? (
          <button
            onClick={() => {
              dispatchToCart({
                type: 'INC_QTY',
                ...product,
              });
            }}
            className="bg-emerald-100 text-emerald-600 hover:bg-emerald-200 rounded-lg p-2 w-10 h-10 flex items-center justify-center transition"
          >
            +
          </button>
        ) : (
          <button disabled className="bg-gray-100 text-gray-400 rounded-lg p-2 w-10 h-10 flex items-center justify-center">
            +
          </button>
        )}
      </div>
      <button
        onClick={() => {
          dispatchToCart({
            type: 'removed',
            ...product,
          });
        }}
        className="mt-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-lg px-4 py-2 font-medium transition shadow-md hover:shadow-lg"
      >
        Remove Item
      </button>
    </div>
  );
}
