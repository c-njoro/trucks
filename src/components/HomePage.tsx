import React, { useState } from 'react';


import { FaTruck, FaMapMarkerAlt, FaClock, FaDollarSign, FaShieldAlt, FaUserTie, FaPhone, FaEnvelope, FaMapMarkedAlt, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaBars, FaCross, FaFacebook } from 'react-icons/fa6';

const TruckingHomepage = () => {
  const [activeServiceTab, setActiveServiceTab] = useState('local');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock data for services
  const services = [
    { id: 'local', title: 'Local Delivery', icon: <FaMapMarkerAlt />, description: 'Efficient local delivery services for businesses and individuals.' },
    { id: 'long-haul', title: 'Long-Haul Freight', icon: <FaTruck />, description: 'Cross-country transportation with reliable scheduling.' },
    { id: 'construction', title: 'Construction Materials', icon: <FaShieldAlt />, description: 'Specialized handling of construction supplies and materials.' },
    { id: 'specialized', title: 'Specialized Cargo', icon: <FaUserTie />, description: 'Transportation for oversized, fragile, or high-value items.' },
    { id: 'same-day', title: 'Same-Day Delivery', icon: <FaClock />, description: 'Urgent delivery solutions when time is critical.' },
    { id: 'tracking', title: 'Real-Time Tracking', icon: <FaMapMarkedAlt />, description: 'Monitor your shipments with our advanced tracking system.' },
  ];

  // Mock data for testimonials
  const testimonials = [
    { name: 'John Smith', company: 'BuildRight Construction', text: 'Their reliable delivery of materials has kept our projects on schedule for years.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Sarah Johnson', company: 'Fresh Foods Market', text: 'The refrigerated transport services are exceptional. Our goods always arrive in perfect condition.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Michael Torres', company: 'Premium Goods Inc.', text: 'Their specialized handling of our high-value products gives us complete peace of mind.', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
              {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FaTruck className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ProHaul Logistics</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Services</a>
                <a href="#fleet" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Fleet</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <FaCross className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Services</a>
              <a href="#fleet" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Fleet</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section id='home' className="relative h-screen flex items-center justify-center bg-gray-900 mt-16  ">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/33893512/pexels-photo-33893512.jpeg)' }}
          aria-label="Modern fleet of trucks transporting goods on a scenic highway at golden hour"
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Reliable Transport Solutions for Every Need</h1>
          <p className="text-xl mb-10">Local delivery, specialized goods, and construction materials transportation with precision and care</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Get Quote
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Track Shipment
            </button>
          </div>
        </div>
        
        {/* Tracking Widget */}
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-10 max-w-xs">
          <h3 className="font-bold text-blue-800 mb-2">Track Your Shipment</h3>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Enter tracking number" 
              className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 transition duration-300">
              Track
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600954700722-c6b7be8a0799?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
          aria-label="Professional logistics facility with organized loading bays and modern trucks"
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div 
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-orange-500"
              >
                <div className="text-blue-900 text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id='about' className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">About Our Company</h2>
              <p className="text-lg mb-6">
                With over 15 years of experience, we've built a reputation for reliability and excellence in the transportation industry. 
                Our team of professional drivers and logistics experts work tirelessly to ensure your goods arrive safely and on time.
              </p>
              <p className="text-lg">
                We pride ourselves on our commitment to safety, customer service, and innovative logistics solutions that meet the unique needs of each client.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
                <div className="text-gray-600">Years in Business</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">2M+</div>
                <div className="text-gray-600">Miles Covered</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
                <div className="text-gray-600">Fleet Size</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section id='fleet' className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">Our Modern Fleet</h2>
          
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
                <img 
                  src="https://images.pexels.com/photos/29571418/pexels-photo-29571418.jpeg" 
                  alt="Modern delivery truck with company branding" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Standard Delivery Trucks</h3>
                  <p className="text-gray-600">Versatile trucks for general freight and local deliveries.</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg" 
                  alt="Heavy-duty flatbed truck loading construction materials" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Flatbed Trucks</h3>
                  <p className="text-gray-600">Ideal for construction materials and oversized loads.</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/33897865/pexels-photo-33897865.jpeg" 
                  alt="Temperature-controlled refrigerated transport vehicle" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Refrigerated Trucks</h3>
                  <p className="text-gray-600">Temperature-controlled transport for perishable goods.</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/32252461/pexels-photo-32252461.jpeg" 
                  alt="Specialized cargo truck with hydraulic lift system" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Specialized Vehicles</h3>
                  <p className="text-gray-600">Equipped with advanced features for unique cargo requirements.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id='why' className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-500 flex justify-center"><FaMapMarkedAlt /></div>
              <h3 className="text-xl font-bold mb-2">24/7 Tracking</h3>
              <p className="text-blue-100">Real-time updates on your shipments anytime, anywhere.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-500 flex justify-center"><FaShieldAlt /></div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-blue-100">Full compliance with all regulations and comprehensive coverage.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-500 flex justify-center"><FaUserTie /></div>
              <h3 className="text-xl font-bold mb-2">Experienced Drivers</h3>
              <p className="text-blue-100">Professional drivers with extensive training and safety records.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-500 flex justify-center"><FaDollarSign /></div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-blue-100">Fair, transparent pricing without hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quote Calculator */}
      <section id='quote' className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-900">Get a Quick Quote</h2>
          <p className="text-center text-lg mb-12 text-gray-600">Fill out the form below to receive an estimated quote for your shipment</p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex border-b mb-6">
              <button 
                className={`py-2 px-4 font-medium ${activeServiceTab === 'local' ? 'border-b-2 border-orange-500 text-blue-900' : 'text-gray-500'}`}
                onClick={() => setActiveServiceTab('local')}
              >
                Local Delivery
              </button>
              <button 
                className={`py-2 px-4 font-medium ${activeServiceTab === 'long-haul' ? 'border-b-2 border-orange-500 text-blue-900' : 'text-gray-500'}`}
                onClick={() => setActiveServiceTab('long-haul')}
              >
                Long-Haul
              </button>
              <button 
                className={`py-2 px-4 font-medium ${activeServiceTab === 'specialized' ? 'border-b-2 border-orange-500 text-blue-900' : 'text-gray-500'}`}
                onClick={() => setActiveServiceTab('specialized')}
              >
                Specialized
              </button>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Pickup Location</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Delivery Location</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Cargo Type</label>
                <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>General Freight</option>
                  <option>Construction Materials</option>
                  <option>Refrigerated Goods</option>
                  <option>Specialized Equipment</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Weight (approx.)</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Delivery Date</label>
                <input type="date" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div className="md:col-span-2 bg-blue-50 p-4 rounded mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Estimated Cost</div>
                    <div className="text-2xl font-bold text-blue-900">$475 - $525</div>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Get Detailed Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">What Our Customers Say</h2>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div>
                      <div className="font-bold text-blue-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Contact Us</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea rows="5" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-blue-900">Company Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-orange-500 text-xl mr-4"><FaMapMarkerAlt /></div>
                    <div>
                      <div className="font-bold">Address</div>
                      <div className="text-gray-600">1234 Transportation Ave, Logistics City, LC 56789</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-orange-500 text-xl mr-4"><FaPhone /></div>
                    <div>
                      <div className="font-bold">Phone</div>
                      <div className="text-gray-600">(555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-orange-500 text-xl mr-4"><FaEnvelope /></div>
                    <div>
                      <div className="font-bold">Email</div>
                      <div className="text-gray-600">info@truckingcompany.com</div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="font-bold mb-2">Hours of Operation</div>
                    <div className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</div>
                    <div className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</div>
                    <div className="text-gray-600">Sunday: Emergency services only</div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="font-bold mb-2">Emergency Contact</div>
                    <div className="text-gray-600">After hours: (555) 789-0123</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Transport Solutions</h3>
              <p className="text-blue-100">Providing reliable transportation services for over 15 years.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300">Services</a></li>
                <li><a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300">Fleet</a></li>
                <li><a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300">About Us</a></li>
                <li><a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300">Local Delivery</a></li>
                <li><a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300">Long-Haul Freight</a></li>
                <li><a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300">Construction Materials</a></li>
                <li><a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300">Specialized Cargo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300 text-xl"><FaFacebook /></a>
                <a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300 text-xl"><FaTwitter /></a>
                <a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300 text-xl"><FaInstagram /></a>
                <a href="#" className="text-blue-100 hover:text-orange-400 transition duration-300 text-xl"><FaLinkedin /></a>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition duration-300">
                Get Quote
              </button>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>© {new Date().getFullYear()} Transport Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TruckingHomepage;