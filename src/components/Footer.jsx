import React from 'react'
import Capture from '../assets/Capture.PNG'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
<>
<footer className='bg-gray-100 text-gray-800'>
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-">




        <div className="flex-1 p-2"><h3 className='text-lg font-semibold mb-4'>Quick links</h3>
            <ul className='space-y-2 '> 
                   <li><a href="#" className="text-gray-400 hover:text-blue-600">Learn E-Commerce & Digital Marketing with Erman</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">Get PyariWalls Franchise</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">Visit Physical Store in Lahore!</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">All Products</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">Wall Clocks</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">Featured Products</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">Affiliate</a></li>
            </ul>
            

        </div>
        <div className="flex-1 p-2">
           <h3 className='text-lg font-semibold mb-4'>Policies</h3>
            <ul className='space-y-2'> 
                <li><a href="#" className="hover:text-blue-600 text-gray-400">Return & Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600 text-gray-400">Privacy Policy</a></li>
            </ul>
        </div>

        <div className="flex-1 p-2">
          <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <ul className='space-y-2'>  
            <li className=''><span className="font-medium">WhatsApp:</span> <span className='text-gray-400'>+923124153047</span></li>
              <li><span className="font-medium ">Email:</span><span className='text-gray-400'> pyariwalls@gmail.com</span></li>
              <li><span className="font-medium ">Outlet #1:</span><span className='text-gray-400'> Metro Cash n Carry Parking, Thokar Niaz Baig, Lahore</span></li>
              <li><span className="font-medium ">Outlet #2:</span> <span>1st floor, kiddyLand, Besides Al-Nassar-PIA Main Boulevard, Lahore</span></li>
              <li><span className="font-medium ">Outlet #3:</span> Tanki wali gali, Ichra Bazar, Lahore</li>
              <li><span className="font-medium ">Outlet #4:</span> Our Okara branch is located in HOME MART M A jinnah Road</li>
              <li><span className="font-medium ">Office Address:</span> 782-G4-JOHAR TOWN, LHR</li>
            </ul>
        </div>
        <div className="r-s p-2">
            <img src={Capture} alt="" />
        </div></div>
     <div className="mt-8 pt-6 border-t border-gray-300 flex justify-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-red-600">
            <FaYoutube size={24} />
          </a>
        </div>



    </div> 
</footer>
</>
  )
}

export default Footer