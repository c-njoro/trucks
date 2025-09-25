import React from 'react';
import { FaTruck, FaMapMarkerAlt, FaUsers, FaAward, FaShieldAlt, FaHandshake, FaLeaf, FaChartLine } from 'react-icons/fa';
import NavigationBar from './Navigation';

interface Link {
  name: string;
  direction: string;
}


const AboutPage = () => {

    const aboutLinks: Link[] = [
        {
            name: "Home",
            direction: "/"
        },
        
        {
            name: "History",
            direction: "#home"
        },
        {
            name: "Mission",
            direction: "#mission"
        },
        {
            name: "Values",
            direction: "#values"
        },
      
        {
            name: "Journey",
            direction: "#milestone"
        },
        {
            name: "Community",
            direction: "#community"
        },
        
    ]

  // Company milestones
  const milestones = [
    { year: '2008', event: 'Founded in Nairobi with 3 trucks', description: 'Started operations serving local businesses in Nairobi' },
    { year: '2012', event: 'Expanded to Mombasa route', description: 'Launched long-haul services between Nairobi and Mombasa' },
    { year: '2015', event: 'Fleet growth to 25 vehicles', description: 'Significant investment in modernizing our fleet' },
    { year: '2018', event: 'East Africa expansion', description: 'Began cross-border operations to Uganda and Tanzania' },
    { year: '2021', event: 'Digital transformation', description: 'Implemented real-time tracking and online booking' },
    { year: '2024', event: '50+ vehicle fleet', description: 'Currently serving major corporations across East Africa' },
  ];

  // Company values
  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Safety First',
      description: 'We prioritize the safety of our drivers, cargo, and the public. All our vehicles meet Kenyan safety standards.'
    },
    {
      icon: <FaHandshake />,
      title: 'Reliability',
      description: 'We deliver on our promises. Our clients trust us for timely and secure transportation across Kenya.'
    },
    {
      icon: <FaUsers />,
      title: 'Teamwork',
      description: 'Our Kenyan team works together to provide seamless logistics solutions from start to finish.'
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainability',
      description: 'We invest in eco-friendly vehicles and practices to reduce our environmental impact in Kenya.'
    },
    {
      icon: <FaChartLine />,
      title: 'Innovation',
      description: 'We embrace technology to improve efficiency and provide better service to our East African clients.'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'We strive for excellence in every delivery, maintaining the highest standards in the industry.'
    },
  ];

  // Management team
  const managementTeam = [
    {
      name: 'John Kamau',
      position: 'Founder & CEO',
      experience: '20+ years in logistics',
      bio: 'Former Kenya Transport Association board member with extensive experience in East African supply chain management.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      alt: 'John Kamau, Founder and CEO of Kenya ProHaul Logistics'
    },
    {
      name: 'Mary Wanjiku',
      position: 'Operations Director',
      experience: '15+ years in transportation',
      bio: 'Specialized in route optimization and fleet management across Kenyan terrain and urban centers.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      alt: 'Mary Wanjiku, Operations Director at Kenya ProHaul Logistics'
    },
    {
      name: 'David Omondi',
      position: 'Finance Director',
      experience: '12+ years in corporate finance',
      bio: 'Expert in logistics financing and investment strategies for East African markets.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      alt: 'David Omondi, Finance Director managing company finances'
    },
    {
      name: 'Grace Mwende',
      position: 'HR & Training Manager',
      experience: '10+ years in human resources',
      bio: 'Dedicated to developing Kenyan talent and maintaining our team of professional drivers.',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      alt: 'Grace Mwende, HR and Training Manager developing local talent'
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 pt-16">

        {/*Navigation*/}

        <NavigationBar links={aboutLinks} />
      {/* Hero Section */}
      <section id='home' className="relative py-20 bg-green-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg)' }}
          aria-label="Kenyan logistics operation with trucks and team members"
        ></div>


        <div className='absolute inset-0 bg-black opacity-60'></div>


        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Kenya ProHaul Logistics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over 15 years, we've been connecting businesses across Kenya and East Africa with reliable, efficient transportation solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section id='history' className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">Our Story</h2>
              <p className="text-lg mb-6">
                Founded in 2008 in Nairobi, Kenya ProHaul Logistics began with a simple mission: to provide reliable transportation 
                services that Kenyan businesses could depend on. What started as a small operation with three trucks has grown into 
                one of the most trusted logistics companies in East Africa.
              </p>
              <p className="text-lg mb-6">
                We understand the unique challenges of transportation in Kenya - from navigating Nairobi's busy streets to 
                traversing the long routes to Mombasa and beyond. Our deep local knowledge sets us apart and ensures your 
                goods arrive safely and on time.
              </p>
              <p className="text-lg">
                Today, we operate a modern fleet of 50+ vehicles and serve major corporations, small businesses, and 
                individual clients across Kenya, Uganda, and Tanzania.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/2698991/pexels-photo-2698991.jpeg" 
                alt="Kenya ProHaul Logistics truck on a scenic Kenyan road" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id='mission' className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTruck className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-900">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To provide exceptional transportation services that drive economic growth in Kenya by connecting businesses 
                and communities through reliable, efficient, and safe logistics solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-900">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be East Africa's leading logistics partner, recognized for innovation, reliability, and commitment to 
                sustainable transportation practices that benefit Kenya's economy and environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id='values' className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-900">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-green-600 text-4xl mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-green-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section id='milestone' className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-900">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-green-900">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold text-orange-500 mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Year marker */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                    <div className="text-3xl font-bold text-green-900 opacity-30">{milestone.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id='stats' className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-green-200">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-green-200">Vehicle Fleet</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-green-200">Satisfied Clients</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">3M+</div>
              <div className="text-green-200">Kilometers Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section id='community' className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/33960450/pexels-photo-33960450.jpeg" 
                alt="Kenya ProHaul Logistics team participating in community event" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">Community Commitment</h2>
              <p className="text-lg mb-6">
                As a Kenyan company, we believe in giving back to the communities we serve. We actively participate in 
                local initiatives and support various community development projects across Kenya.
              </p>
              <p className="text-lg mb-6">
                Our commitment extends beyond transportation - we're dedicated to creating positive impact through 
                job creation, skills development, and supporting local businesses in the communities where we operate.
              </p>
              <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
                <p className="text-green-900 font-semibold">
                  "We're not just moving goods; we're moving Kenya forward. Our success is intertwined with the 
                  prosperity of the communities we serve."
                </p>
                <p className="text-green-700 mt-2">- John Kamau, Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Kenya ProHaul Logistics for their transportation needs across East Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Get a Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-green-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kenya ProHaul Logistics</h3>
              <p className="text-green-100">Connecting Kenya through reliable transportation since 2008.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-green-100 hover:text-orange-400 transition duration-300">Home</a></li>
                <li><a href="/about" className="text-green-100 hover:text-orange-400 transition duration-300">About</a></li>
                <li><a href="/services" className="text-green-100 hover:text-orange-400 transition duration-300">Services</a></li>
                <li><a href="/contact" className="text-green-100 hover:text-orange-400 transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-green-100">
                <li>Nairobi Headquarters</li>
                <li>+254 700 123 456</li>
                <li>info@kenyaprohaul.co.ke</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-green-100 hover:text-orange-400 transition duration-300 text-xl">FB</a>
                <a href="#" className="text-green-100 hover:text-orange-400 transition duration-300 text-xl">TW</a>
                <a href="#" className="text-green-100 hover:text-orange-400 transition duration-300 text-xl">IG</a>
                <a href="#" className="text-green-100 hover:text-orange-400 transition duration-300 text-xl">IN</a>
              </div>
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

export default AboutPage;