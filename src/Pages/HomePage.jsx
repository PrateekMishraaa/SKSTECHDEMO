import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from "../assets/banner.jpg";
import First from "../assets/webfirst.webp";
import Second from "../assets/websecond.jpg";
import Third from "../assets/webThird.jpg";
import Circle from "../assets/circle.webp"
import Circle2 from "../assets/circle2.webp"
import Circle3 from "../assets/circle3.webp"
import SEO from "../assets/Seo.webp"

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='h-[70vh] w-full bg-black relative'>
          <img src={Banner} className='h-full w-full object-cover' alt='banner' />
          <p className='absolute bottom-72 text-6xl text-white w-[35%] ml-32 font-monospace font-bold'>
            DRIVE MORE TRAFFIC. FOR MORE SALES.
          </p>
        </div>
        <div className='py-16'>
          <p className='text-center text-5xl text-[#460d43] font-bold'>OUR SERVICES</p>
          <div className='flex justify-center mt-16 gap-10 h-96'>
            {/* Card 1 */}
            <div className='h-[400px] w-[500px] shadow-lg rounded-lg overflow-hidden bg-white relative'>
              <img src={First} alt="Web Design Services" className='h-48 w-full object-cover' />
              <div className='absolute top-36 left-1/2 transform -translate-x-1/2 bg-[#460d43] p-3 rounded-full'>
                <i className="text-white text-2xl fas fa-code"></i>
              </div>
              <div className='p-6 text-center w-[80%] ml-16'>
                <h3 className='text-3xl font-semibold text-[#460d43] mt-10'>Complete Web Design Services</h3>
              </div>
            </div>
            {/* Card 2 */}
            <div className='h-[400px] w-[500px] shadow-lg rounded-lg overflow-hidden bg-white relative'>
              <img src={Second} alt="Digital Marketing Services" className='h-48 w-full object-cover' />
              <div className='absolute top-36 left-1/2 transform -translate-x-1/2 bg-[#460d43] p-3 rounded-full'>
                <i className="text-white text-2xl fas fa-bullhorn"></i>
              </div>
              <div className='p-6 text-center w-[80%] ml-16'>
                <h3 className='text-3xl font-semibold text-[#460d43] mt-10'>Complete Digital Marketing Services</h3>
              </div>
            </div>
            {/* Card 3 */}
            <div className='h-[400px] w-[500px] shadow-lg rounded-lg overflow-hidden bg-white relative'>
              <img src={Third} alt="Mobile App Development" className='h-48 w-full object-cover' />
              <div className='absolute top-36 left-1/2 transform -translate-x-1/2 bg-[#460d43] p-3 rounded-full'>
                <i className="text-white text-2xl fas fa-mobile-alt"></i>
              </div>
              <div className='p-6 text-center w-[80%] ml-16'>
                <h3 className='text-3xl font-semibold text-[#460d43] mt-10 '>Mobile Application Development</h3>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div class="h-auto w-full bg-gray-100 py-10">
    <h1 class="text-center text-gray-800 text-4xl font-bold mb-6">Our Digital Marketing Services</h1>
    <p class="text-center text-xl text-gray-600 mx-auto w-3/4 mb-12">
        Your dependable partner for digital marketing services is SKS Tech Solution. Our team of professionals is well-versed in the realm of contemporary digital marketing, which explains why we are successful in helping our clients reach their objectives. These are our round-the-clock services:
    </p>
    <div class="flex flex-wrap justify-center gap-6 px-4">
      
        <div class="bg-white shadow-lg rounded-lg h-[40%] w-[300px] p-6">
            <div class="flex justify-center mb-4">
                <img src={Circle} alt="SEO Icon" class="h-16"/>
            </div>
            <h3 class="text-center text-xl font-semibold text-gray-800 mb-2">Search Engine Optimization</h3>
            <p class="text-center text-gray-600 text-sm mb-4">
                As an SEO company, we have all the tools and resources to get any business’s website ranking at the top. We can help you excel on the web whether you’re a small, large, or e-commerce business.
            </p>
            <a href="#" class="block text-center text-purple-600 font-medium hover:underline">Learn More &gt;</a>
        </div>
      
        <div class="bg-white shadow-lg rounded-lg w-[300px] p-6">
            <div class="flex justify-center mb-4">
                <img src={Circle2}alt="Social Media Icon" class="h-16"/>
            </div>
            <h3 class="text-center text-xl font-semibold text-gray-800 mb-2">Social Media Optimization</h3>
            <p class="text-center text-gray-600 text-sm mb-4">
                The significance of SEO and SMO has grown along with the acceptance of online commerce. Social media optimization is crucial in all facets of internet and digital marketing.
            </p>
            <a href="#" class="block text-center text-purple-600 font-medium hover:underline">Learn More &gt;</a>
        </div>
        
        <div class="bg-white shadow-lg rounded-lg w-[300px] p-6">
            <div class="flex justify-center mb-4">
                <img src={Circle3} alt="Web Development Icon" class="h-16"/>
            </div>
            <h3 class="text-center text-xl font-semibold text-gray-800 mb-2">Web Development</h3>
            <p class="text-center text-gray-600 text-sm mb-4">
                A website represents the concepts of a business at the forefront. SKS Tech Solution is a proficient web development partner for creating user-friendly online platforms.
            </p>
            <a href="#" class="block text-center text-purple-600 font-medium hover:underline">Learn More &gt;</a>
        </div>
    </div>
</div>
<div className='h-[70vh] w-full flex justify-between  '>
    <div className='ml-60 h-72 w-[40%]'>
    <img src={SEO} alt="" />
    </div>
    <div className='h-[70vh] w-[50%] ml-40'>
        <p className='text-6xl ml-20 text-[#2c3941] font-sans font-medium mt-28'>About Us</p>
        <p className='w-96 text-xl ml-14 mt-10 font-medium'>We’re a team of marketing strategists and scientists helping life science brands differentiate themselves, align internal teams, expand their digital footprint, and grow their business. Our creative team of designers and engineers are result-oriented and work. You can trust our team to deliver the goods. The internet of things, big data, machine learning, and data intelligence are stuff we learn today. Most of who we work with are business referrals by our existing clientele. It feels special to be recognized for our work.</p>
    </div>
</div>


    </>
  );
};

export default HomePage;
