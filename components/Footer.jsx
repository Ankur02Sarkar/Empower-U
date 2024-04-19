import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="">
            <h3 className="text-xl font-bold mb-4">EmpowerU</h3>
            <p className="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.
            </p>
            <div className="flex space-x-4">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul>
              <li>
                <a href="/" className="">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="">
                  Create a project
                </a>
              </li>
              <li>
                <a href="/" className="">
                  All Projects
                </a>
              </li>
              <li>
                <a href="/" className="">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact</h5>
            <p>
              <i className="fas fa-phone-volume"></i> +91 173314
            </p>
            <p>
              <i className="fas fa-envelope"></i> empoweru23@gmail.com
            </p>
            <p>
              <i className="fas fa-paper-plane"></i> Kalyani, Nadia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
