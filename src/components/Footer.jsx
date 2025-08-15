import React, { useState } from 'react';
import { FaYoutube, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    const [showQuickLinks, setShowQuickLinks] = useState(false);
    const [showServices, setShowServices] = useState(false);

    return (
        <footer className="bg-[#0b1120] text-white px-6 sm:px-12 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-sm">

                {/* About Section */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                        <img src="Logo/Logo.png" alt="Samaj Setu Logo" className="w-10 rounded-full" />
                        <p className="font-bold text-lg ml-3">Samaj Setu</p>
                    </div>
                    <p className="text-gray-300">
                        Empowering communities through holistic development initiatives since 2010. Together, we can create lasting change.
                    </p>

                    {/* Social Media (Desktop Only) */}
                    <div className="hidden sm:flex space-x-4 text-lg text-white">
                        <a href="https://youtube.com/@samajsetufoundation?si=EwiTOlQ3efGszK94"><FaYoutube /></a>
                        <a href="https://x.com/SamajSetu?t=vA13oFfhztaks4m2h9nnow&s=09"><FaXTwitter /></a>
                        <a href="https://www.instagram.com/samaj_setu_foundation"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/samaj-setu-foundation"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Quick Links (Desktop View) */}
                <div className="hidden sm:flex flex-col space-y-3">
                    <h3 className="text-white font-semibold">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="/" className="hover:text-[#8bc34a]">Home</Link></li>
                        <li><HashLink smooth to="/about#about" className="hover:text-[#8bc34a]">
  About Us
</HashLink></li>
                        <li><Link to="/services" className="hover:text-[#8bc34a]">Services</Link></li>
                        <li><a href="/gallery" className="hover:text-[#8bc34a]">Gallery</a></li>
                        <li><a href="/team" className="hover:text-[#8bc34a]">Our Team</a></li>
                        <li><Link to="/contact" className="hover:text-[#8bc34a]">Contact</Link></li>
                    </ul>
                </div>

                {/* Quick Links (Mobile Accordion) */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setShowQuickLinks(!showQuickLinks)}
                        className="w-full flex justify-between items-center text-white font-semibold border-b border-gray-700 py-2"
                    >
                        <span>Quick Links</span>
                        <span>{showQuickLinks ? "▲" : "▼"}</span>
                    </button>

                    {showQuickLinks && (
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-[#8bc34a]">Home</Link></li>
                            <li><Link to="/#about" className="hover:text-[#8bc34a]">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-[#8bc34a]">Services</Link></li>
                            <li><a href="/gallery" className="hover:text-[#8bc34a]">Gallery</a></li>
                            <li><a href="/team" className="hover:text-[#8bc34a]">Our Team</a></li>
                            <li><Link to="/contact" className="hover:text-[#8bc34a]">Contact</Link></li>
                        </ul>
                    )}
                </div>

                {/* Our Services (Desktop View) */}
                <div className="hidden sm:flex flex-col space-y-3">
                    <h3 className="text-white font-semibold">Our Services</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="/services" className="hover:text-[#8bc34a]">Health & Wellness</a></li>
                        <li><a href="/services" className="hover:text-[#8bc34a]">Education & Skills</a></li>
                        <li><a href="/services" className="hover:text-[#8bc34a]">Women Empowerment</a></li>
                        <li><a href="/services" className="hover:text-[#8bc34a]">Environment</a></li>
                        <li><a href="/services" className="hover:text-[#8bc34a]">Rural Development</a></li>
                        <li><a href="/services" className="hover:text-[#8bc34a]">View All Services</a></li>
                    </ul>
                </div>

                {/* Our Services (Mobile Accordion) */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setShowServices(!showServices)}
                        className="w-full flex justify-between items-center text-white font-semibold border-b border-gray-700 py-2"
                    >
                        <span>Our Services</span>
                        <span>{showServices ? "▲" : "▼"}</span>
                    </button>

                    {showServices && (
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li><a href="/services" className="hover:text-[#8bc34a]">Health & Wellness</a></li>
                            <li><a href="/services" className="hover:text-[#8bc34a]">Education & Skills</a></li>
                            <li><a href="/services" className="hover:text-[#8bc34a]">Women Empowerment</a></li>
                            <li><a href="/services" className="hover:text-[#8bc34a]">Environment</a></li>
                            <li><a href="/services" className="hover:text-[#8bc34a]">Rural Development</a></li>
                            <li><a href="/services" className="hover:text-[#8bc34a]">View All Services</a></li>
                        </ul>
                    )}
                </div>

                {/* Newsletter (Hidden on Mobile) */}
                <div className="hidden sm:flex flex-col space-y-4">
                    <h3 className="text-white font-semibold">Newsletter</h3>
                    <p className="text-gray-300">
                        Subscribe to our newsletter for updates on our work and impact.
                    </p>
                    <div className="flex w-full max-w-xs">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 w-full text-sm rounded-l-md bg-gray-800 text-neutral-400 focus:outline-none"
                        />
                        <button className="bg-[#8bc34a] hover:bg-[#7cb342] text-white font-semibold px-4 rounded-r-md text-sm">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-gray-500 text-xs">
                        By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a>.
                    </p>
                </div>
            </div>

            {/* ✅ Mobile Only: Social Media + Copyright */}
            <div className="sm:hidden mt-8 flex flex-col items-center space-y-4">
                <div className="flex space-x-4 text-lg text-white">
                    <a href="https://youtube.com/@samajsetufoundation?si=EwiTOlQ3efGszK94"><FaYoutube /></a>
                    <a href="https://x.com/SamajSetu?t=vA13oFfhztaks4m2h9nnow&s=09"><FaXTwitter /></a>
                    <a href="https://www.instagram.com/samaj_setu_foundation"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/company/samaj-setu-foundation"><FaLinkedinIn /></a>
                </div>
                <p className="text-gray-400 text-xs">© 2025 Samaj Setu</p>
            </div>
        </footer>
    );
};

export default Footer;
