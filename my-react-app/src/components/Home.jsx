import React from "react";


function DashboardLayout() {
    
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-1/4 bg-green-600 text-white flex flex-col justify-between px-6 py-8">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold mb-10">MyLogo</h1>

          {/* Menu */}
          <nav className="flex flex-col gap-4 text-lg">
            <a href="#" className="hover:bg-green-700 px-4 py-2 rounded-lg">
              Dashboard
            </a>
            <a href="#" className="hover:bg-green-700 px-4 py-2 rounded-lg">
              Profile
            </a>
            <a href="#" className="hover:bg-green-700 px-4 py-2 rounded-lg">
              Settings
            </a>
            <a href="#" className="hover:bg-green-700 px-4 py-2 rounded-lg">
              Reports
            </a>
          </nav>
        </div>

        {/* Login Button */}
        <div>
          <button 
        
          className="w-full bg-white text-green-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition">
            Login
          </button>
          
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="w-3/4 bg-white p-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Welcome 👋
        </h2>
        <p className="text-gray-600">
          This is the main content area. Your pages will appear here.
        </p>
      </main>

    </div>
  );
}

export default DashboardLayout;
