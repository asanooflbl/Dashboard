import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-7 h-16 bg-[#0d0d0d] border-b border-[#2a2a2a] sticky top-0 z-50">

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00e676] to-[#4d79ff] flex items-center justify-center font-bold text-black text-sm">
                        S
                    </div>
                    <span className="text-white font-semibold text-sm">Sanoof</span>
                </div>

                <div className="hidden md:flex gap-6">
                    <a href="#" className="text-white font-semibold text-sm">Home</a>
                    <a href="#" className="text-[#8888aa] text-sm hover:text-white transition-colors">Customers</a>
                    <a href="#" className="text-[#8888aa] text-sm hover:text-white transition-colors">Settings</a>
                </div>
            </div>

            <input
                placeholder="Search..."
                className="hidden md:block bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white text-sm w-48 focus:outline-none focus:border-[#00e676] transition-colors"
            />
        </nav>
    );
};

export default Navbar;