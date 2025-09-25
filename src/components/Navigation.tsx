import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTruck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

interface Link {
    name: string;
    direction: string;
}





export default function NavigationBar( props: { links: Link[] } ) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FaTruck className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Kenya ProHaul Logistics</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {
                    props.links && props.links.length > 0 && props.links.map((link: Link, index) => (
                        <Link href={link.direction} className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium" key={index}>{link.name}</Link>
                    ))
                }
                
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {mobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white ">
              
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {
                    props.links && props.links.length > 0 && props.links.map((link: Link, index) => (
                        <Link href={link.direction} className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium" key={index} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{link.name}</Link>
                    ))
                }
            
            </div>
          </div>
        )}
      </nav>    
    );
  }