import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#f6f6f5] px-4 py-4 shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Link to="/"><img src="/Logo/Logo2.png" alt="Samaj Setu" className="w-14 scale-125" /></Link>

                <ul className="hidden md:flex gap-x-10 text-medium">
                    <li><Link to="/" className="hover:text-[#8bc34a]">Home</Link></li>
                    <li><a href="#about" className="hover:text-[#8bc34a]">About</a></li>
                    <li><Link to="/services" className="hover:text-[#8bc34a]">Services</Link></li>
                    <li><Link to="/gallery" className="hover:text-[#8bc34a]">Gallery</Link></li>
                    <li><Link to="/contact" className="hover:text-[#8bc34a]">Contact</Link></li>
                    <li><Link to="/team" className="hover:text-[#8bc34a]">Our Team</Link></li>
                </ul>

                <Link
                    to="/donate"
                    className="hidden md:block bg-[#8bc34a] cursor-pointer text-white px-6 py-2 rounded-lg transition-all"
                >
                    Donate Now
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden mt-4 space-y-4 text-center">
                    <ul className="flex flex-col gap-4 text-lg font-medium">
                        <li><Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><a href="#about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><Link to="/services" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        <li><Link to="/team" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Our Team</Link></li>
                    </ul>
                    <Link
                        to="/donate"
                        className="bg-[#8bc34a] text-white px-6 py-2 rounded-lg transition-all"
                        onClick={() => setMenuOpen(false)}
                    >
                        Donate Now
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
