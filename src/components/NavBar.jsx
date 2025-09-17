// Updated NavBar.jsx with green gradient design
const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-teal-600 py-4 shadow-md">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-emerald-100 hover:text-white transition-colors duration-300 font-medium px-3 py-1 rounded-md hover:bg-emerald-700/50">
              Home
            </a>
            <a href="/cart" className="text-emerald-100 hover:text-white transition-colors duration-300 font-medium px-3 py-1 rounded-md hover:bg-emerald-700/50">
              Cart
            </a>
            <a href="/inventory" className="text-emerald-100 hover:text-white transition-colors duration-300 font-medium px-3 py-1 rounded-md hover:bg-emerald-700/50">
              Inventory
            </a>
            <a href="/sales" className="text-emerald-100 hover:text-white transition-colors duration-300 font-medium px-3 py-1 rounded-md hover:bg-emerald-700/50">
              Sales
            </a>
            <a href="/add-product" className="text-emerald-100 hover:text-white transition-colors duration-300 font-medium px-3 py-1 rounded-md hover:bg-emerald-700/50">
              Add Product
            </a>
          </div>
          <div className="flex items-center">
            <h2 className="text-white text-xl font-semibold mr-3">Inventory Management</h2>
            <div className="bg-emerald-100/20 p-1.5 rounded-full">
              <img className="w-8 h-8" src="/inventoryLogo.png" alt="LOGO" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;