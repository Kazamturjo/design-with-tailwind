import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import group from "../assets/group-39.png"
import phone from "../assets/frame-81S.png"
import website from "../assets/frame.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16 h-[350px]">
      <div className="flex justify-between items-center ml-2 mr-11 text-[13px]  sm:mx-28 sm:text-lg">
        <div>
          <p>44, Big Building Roosevelt Street <br/>
Beach Gardens Florida 33410</p>
        </div>
        <div className='flex justify-start items-center space-x-3'>
          <div>
     
            <img src={phone} width={20} className=''/>
           
          </div>
          <div>
            <p> +00 123 584 124</p>
          </div>
          <div className='flex justify-start items-center space-x-1  absolute mt-16  '>
            <img src={website} width={20} alt='web'/>
            <div>
              <p>www.website.com</p>
            </div>
          </div>
        {/* <p><img src={website} width={20} className=''/>www.website.com</p> */}

        </div>  
      </div>
      <div className='flex justify-center mt-11'>
          <img src={group} alt='' width={250}/>

        </div> 
      <div className="mt-8 flex justify-between sm:mx-28 text-[13px] mx-2 sm:text-lg">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Unsubscribe</p>
      </div>
    </footer>
  );
};

export default Footer;
