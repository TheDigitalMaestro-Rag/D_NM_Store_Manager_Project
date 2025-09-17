// Enhanced SaleRecord component
const SaleRecord = ({ sale, saleId }) => {
  return (
    <div className="border border-gray-200 shadow-sm rounded-xl p-5 bg-white hover:shadow-md transition">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Sale #{saleId + 1}</h2>
        <span className="text-sm text-gray-500 bg-blue-50 py-1 px-3 rounded-full">
          {new Date(sale.datetime).toLocaleString()}
        </span>
      </div>
      <p className="mb-3 text-lg">
        <strong className="text-gray-700">Total Sale Value:</strong> 
        <span className="ml-2 font-bold text-emerald-600">₹{sale.saleValue.toFixed(2)}</span>
      </p>
      <p className="mb-2 text-gray-700 font-medium">
        Cart Details:
      </p>
      <ul className="space-y-2 pl-2 text-gray-600">
        {sale.products.map((product) => (
          <li key={product.productName} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
            <span>{product.productName} ({product.quantity})</span>
            <span className="font-medium">₹{(product.price * product.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaleRecord;
