import { useCartDispatch } from "../../context/CartContext";
import { useCart } from "../../context/CartContext";

// Enhanced ProductCard for Catalog
export default function Product({ product }) {
  const cartItems = useCart();
  const dispatchToCart = useCartDispatch();

  const onCartToggle = () => {
    if (cartItems.some((item) => item.productName === product.productName)) {
      dispatchToCart({
        type: "removed",
        ...product,
      });
    } else {
      dispatchToCart({
        type: "added",
        ...product,
      });
    }
  };

  return (
    <div className="border border-gray-200 p-5 rounded-xl text-center flex flex-col items-center bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h1 className="font-bold text-xl text-gray-800 mb-3">{product.productName}</h1>
      <div className="w-56 h-56 overflow-hidden border border-gray-200 rounded-lg mt-2 shadow-inner">
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-lg mt-4 font-semibold text-gray-700">₹ {product.price.toFixed(2)}</p>
      <button
        onClick={onCartToggle}
        className={`mt-4 rounded-lg px-6 py-2 transition-all font-medium ${
          cartItems.some((item) => item.productName === product.productName)
            ? "bg-red-500 hover:bg-red-600 text-white shadow-md" 
            : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md hover:shadow-lg"
        }`}
      >
        {cartItems.some((item) => item.productName === product.productName)
          ? "Remove from Cart"
          : "Add to Cart"}
      </button>
    </div>
  );
}
