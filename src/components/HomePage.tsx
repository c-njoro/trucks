import React, { useState } from 'react';
import { FaTruck, FaMapMarkerAlt, FaClock, FaDollarSign, FaShieldAlt, FaUserTie, FaMapMarkedAlt, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaFacebook } from 'react-icons/fa6';
import NavigationBar from './Navigation';
import Image from 'next/image';
import ContactUs from './ContactUs';


interface Link {
  name: string;
  direction: string;
}

const TruckingHomepage = () => {
  const [activeServiceTab, setActiveServiceTab] = useState('local');
  const homeLinks: Link[] = [
   
    {
        name: "Top",
        direction: "#home"
    },
    {
        name: "Fleet",
        direction: "#fleet"
    },
    {
        name: "Services",
        direction: "#services"
    },
    {
        name: "Team",
        direction: "#staff"
    },
    {
        name: "Contact",
        direction: "#contact"
    },
    {
        name: "About Us",
        direction: "/about"
    },
]


  // Mock data for services
  const services = [
    { id: 'local', title: 'Local Delivery', icon: <FaMapMarkerAlt />, description: 'Efficient local delivery services across Nairobi and surrounding counties.' },
    { id: 'long-haul', title: 'Long-Haul Freight', icon: <FaTruck />, description: 'Cross-country transportation throughout East Africa with reliable scheduling.' },
    { id: 'construction', title: 'Construction Materials', icon: <FaShieldAlt />, description: 'Specialized handling of construction supplies for major Kenyan projects.' },
    { id: 'specialized', title: 'Specialized Cargo', icon: <FaUserTie />, description: 'Transportation for oversized, fragile, or high-value items across the region.' },
    { id: 'same-day', title: 'Same-Day Delivery', icon: <FaClock />, description: 'Urgent delivery solutions within Nairobi and major towns.' },
    { id: 'tracking', title: 'Real-Time Tracking', icon: <FaMapMarkedAlt />, description: 'Monitor your shipments with our advanced tracking system.' },
  ];

  // Staff members data
  const staffMembers = [
    { 
      name: 'James Mwangi', 
      position: 'Operations Director', 
      experience: '15+ years in logistics',
      description: 'Expert in East African supply chain management with extensive regional knowledge.',
      image: 'https://images.pexels.com/photos/20335884/pexels-photo-20335884.jpeg',
      alt: 'James Mwangi, Operations Director at Kenyan logistics company'
    },
    { 
      name: 'Sarah Akinyi', 
      position: 'Fleet Manager', 
      experience: '12+ years in transportation',
      description: 'Specialized in vehicle maintenance and route optimization across Kenya.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
      alt: 'Sarah Akinyi, Fleet Manager overseeing truck maintenance and operations'
    },
    { 
      name: 'David Ochieng', 
      position: 'Head of Safety', 
      experience: '10+ years in compliance',
      description: 'Ensures all operations meet Kenyan safety standards and regulations.',
      image: 'https://images.pexels.com/photos/3206114/pexels-photo-3206114.jpeg',
      alt: 'David Ochieng, Head of Safety ensuring compliance with Kenyan regulations'
    },
    { 
      name: 'Grace Wambui', 
      position: 'Customer Relations', 
      experience: '8+ years in client service',
      description: 'Dedicated to providing exceptional service to our Kenyan clients.',
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
      alt: 'Grace Wambui, Customer Relations manager assisting Kenyan clients'
    },
  ];

  return (
    <div className="font-poppins text-gray-800 bg-gray-50">
      {/* Navigation */}
      <NavigationBar links={homeLinks}/>

      {/* Hero Section */}
      <section id='home' className="relative h-screen flex items-center justify-center bg-gray-900 mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg)' }}
          aria-label="Truck traveling on a scenic Kenyan road with beautiful landscape"
        ></div>

        <div className='absolute inset-0 bg-black opacity-60'></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Reliable Transport Solutions Across Kenya</h1>
          <p className="text-xl mb-10">Serving Nairobi, Mombasa, Kisumu and beyond with precision and care</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Get Quote
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Track Shipment
            </button>
          </div>
        </div>
        
        {/* Tracking Widget */}
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-10 max-w-xs">
          <h3 className="font-bold text-green-800 mb-2">Track Your Shipment</h3>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Enter tracking number" 
              className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white p-2 rounded-r hover:bg-green-700 transition duration-300">
              Track
            </button>
          </div>
        </div>
      </section>

      {/* Fleet Showcase - Now Second Section */}
      <section id='fleet' className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-900">Our Modern Fleet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image 
                src="https://images.pexels.com/photos/2676842/pexels-photo-2676842.jpeg" 
                alt="Modern delivery truck with Kenyan registration plates on a Nairobi road" 
                className="w-full h-56 object-cover"
                width={600} height={224}
                priority
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-900">Standard Delivery Trucks</h3>
                <p className="text-gray-600">Versatile trucks for general freight and local deliveries across urban centers.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image 
                src="https://images.pexels.com/photos/29480559/pexels-photo-29480559.jpeg" 
                alt="Heavy-duty flatbed truck loading construction materials at a Kenyan site" 
                className="w-full h-56 object-cover"
                width={600} height={224}
                priority
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-900">Flatbed Trucks</h3>
                <p className="text-gray-600">Ideal for construction materials and oversized loads for Kenyan infrastructure projects.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image 
                src="https://images.pexels.com/photos/28767375/pexels-photo-28767375.jpeg" 
                alt="Temperature-controlled refrigerated transport vehicle for perishable goods" 
                className="w-full h-56 object-cover"
                width={600} height={224}
                priority
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-900">Refrigerated Trucks</h3>
                <p className="text-gray-600">Temperature-controlled transport for fresh produce and perishable goods.</p>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            <SwiperSlide>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://images.pexels.com/photos/28984263/pexels-photo-28984263.jpeg" 
                  alt="Modern delivery truck with company branding on a Kenyan highway" 
                  className="w-full h-56 object-cover"
                  width={600} height={224}
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-900">Urban Delivery Trucks</h3>
                  <p className="text-gray-600">Maneuverable trucks designed for Nairobi&apos;s busy streets.</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://images.pexels.com/photos/9895973/pexels-photo-9895973.jpeg" 
                  alt="Heavy-duty truck transporting goods on Mombasa Road" 
                  className="w-full h-56 object-cover"
                  width={600} height={224}
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-900">Heavy-Duty Trucks</h3>
                  <p className="text-gray-600">Powerful vehicles for long-haul routes across East Africa.</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://images.pexels.com/photos/32252461/pexels-photo-32252461.jpeg" 
                  alt="Specialized cargo truck with hydraulic lift system in industrial area" 
                  className="w-full h-56 object-cover"
                  width={600} height={224}
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-900">Specialized Vehicles</h3>
                  <p className="text-gray-600">Equipped with advanced features for unique cargo requirements in Kenya.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591719373530-7d56dedfe2d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
          aria-label="Professional logistics facility in Kenya with organized loading bays"
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-900">Our Services </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div 
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-green-500"
              >
                <div className="text-green-900 text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-green-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id='why' className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Our Logistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-500 flex justify-center"><FaMapMarkedAlt /></div>
              <h3 className="text-xl font-bold mb-2">24/7 Tracking</h3>
              <p className="text-green-100">Real-time updates on your shipments across Kenya and East Africa.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-500 flex justify-center"><FaShieldAlt /></div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-green-100">Fully compliant with Kenyan transportation regulations.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-500 flex justify-center"><FaUserTie /></div>
              <h3 className="text-xl font-bold mb-2">Experienced Drivers</h3>
              <p className="text-green-100">Kenyan drivers with extensive knowledge of local routes.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-500 flex justify-center"><FaDollarSign /></div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-green-100">Fair, transparent pricing in Kenyan Shillings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section - Replaced Testimonials */}
      <section id='staff' className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-900">Our Competent Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.alt}
                  className="w-full h-64 object-cover"
                  width={600} height={256}
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-900">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-1">{member.position}</p>
                  <p className="text-green-700 text-sm mb-3">{member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quote Calculator */}
      <section id='quote' className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-900">Get a Quick Quote</h2>
          <p className="text-center text-lg mb-12 text-gray-600">Fill out the form below to receive an estimated quote for your shipment in Kenya</p>
          
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 md:p-8 border border-green-200">
            <div className="flex border-b mb-6">
              <button 
                className={`py-2 px-4 font-medium ${activeServiceTab === 'local' ? 'border-b-2 border-green-500 text-green-900' : 'text-gray-500'}`}
                onClick={() => setActiveServiceTab('local')}
              >
                Local Delivery
              </button>
              <button 
                className={`py-2 px-4 font-medium ${activeServiceTab === 'long-haul' ? 'border-b-2 border-green-500 text-green-900' : 'text-gray-500'}`}
                onClick={() => setActiveServiceTab('long-haul')}
              >
                Long-Haul
              </button>
              <button 
                className={`py-2 px-4 font-medium ${activeServiceTab === 'specialized' ? 'border-b-2 border-green-500 text-green-900' : 'text-gray-500'}`}
                onClick={() => setActiveServiceTab('specialized')}
              >
                Specialized
              </button>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Pickup Location</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="e.g. Nairobi" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Delivery Location</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="e.g. Mombasa" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Cargo Type</label>
                <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>General Freight</option>
                  <option>Construction Materials</option>
                  <option>Agricultural Produce</option>
                  <option>Refrigerated Goods</option>
                  <option>Specialized Equipment</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Weight (approx.)</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="e.g. 5 tons" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Delivery Date</label>
                <input type="date" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              
              <div className="md:col-span-2 bg-green-50 p-4 rounded mt-4 border border-green-200">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Estimated Cost</div>
                    <div className="text-2xl font-bold text-green-900">KES 45,000 - 55,000</div>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Get Detailed Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactUs />



      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kenya ProHaul Logistics</h3>
              <p className="text-green-100">Providing reliable transportation services across Kenya for over 15 years.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#fleet" className="text-green-100 hover:text-orange-400 transition duration-300">Fleet</a></li>
                <li><a href="#services" className="text-green-100 hover:text-orange-400 transition duration-300">Services</a></li>
                <li><a href="#staff" className="text-green-100 hover:text-orange-400 transition duration-300">Our Team</a></li>
                <li><a href="#contact" className="text-green-100 hover:text-orange-400 transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-orange-400 transition duration-300">Local Delivery</a></li>
                <li><a href="#" className="text-green-100 hover:text-orange-400 transition duration-300">Long-Haul Freight</a></li>
                <li><a href="#" className="text-green-100 hover:text-orange-400 transition duration-300">Construction Materials</a></li>
                <li><a href="#" className="text-green-100 hover:text-orange-400 transition duration-300">Specialized Cargo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-green-100 hover:text-orange-400 transition duration-300 text-xl"><FaFacebook /></a>
                <a href="#" className="text-green-100 hover:text-orange-400 transition duration-300 text-xl"><FaTwitter /></a>
                <a href="#" className="text-green-100 hover:text-orange-400 transition duration-300 text-xl"><FaInstagram /></a>
                <a href="#" className="text-green-100 hover:text-orange-400 transition duration-300 text-xl"><FaLinkedin /></a>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition duration-300">
                Get Quote
              </button>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>© {new Date().getFullYear()} Kenya ProHaul Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TruckingHomepage;