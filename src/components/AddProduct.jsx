import { useInventoryDispatch } from "../context/InventoryContext";
// Enhanced AddProduct form with elegant styling
export default function AddProduct() {
  const dispatchToInventory = useInventoryDispatch()

  const onAddProduct = (e) => {
    e.preventDefault()

    const newProduct = {
      productName: e.target.productName.value,
      imageUrl: e.target.imageUrl.value,
      price: parseFloat(e.target.price.value),
      tags: e.target.tags.value.split(",").map((tag) => tag.trim()),
      stock: e.target.stock.value,
    }

    dispatchToInventory({
      type: 'NEW_PRODUCT',
      ...newProduct,
    })

    e.target.reset()
    alert("Product added successfully!")
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-8 mb-6 border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl text-gray-800 mb-2">
          Add New Product
        </h1>
        <p className="text-gray-500">Fill in the details to add a new product to your inventory</p>
      </div>
      <form onSubmit={onAddProduct} className="space-y-6">
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter product name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Product Image URL
          </label>
          <input
            id="imageUrl"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price (₹)
            </label>
            <input
              id="price"
              type="number"
              step="0.01"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Stock
            </label>
            <input
              id="stock"
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter stock"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Tags (comma-separated)
          </label>
          <input
            id="tags"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter tags, separated by commas"
            required
          />
        </div>
        <div className="text-center pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-md hover:shadow-lg"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}