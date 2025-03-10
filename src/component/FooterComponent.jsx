import React from "react";
import logo from "../assets/images/MBLogo.png";
import { Avatar } from "antd";
import { MailOutlined, PhoneOutlined, YoutubeOutlined, FacebookOutlined } from '@ant-design/icons';
import { AiOutlineFacebook } from "react-icons/ai";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const FooterComponent = () => {
  return (
    <footer className="bg-[#292D77] border-t-2 py-2 text-white">
      <div className="max-w-full mx-[5px] sm:mx-[20px] md:mx-[50px] lg:mx-[150px] mt-[25px] h-auto bg-white-200 relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {/* section	logo (name monument Book) */}
          <section className="mb-6 grid justify-items-center text-center">
            <Link to="/" className="flex">
              <Avatar
                size={100}
                src={logo}
                className="bg-white p-4 h-0"
              />
            </Link>
            <p className="lg:-mt-10 mt-2">Monument Books was established in Phnom Penh in 1993 and has grown to become the largest chain of bookstores in Cambodia.</p>
          </section>
          {/* section menu */}
          <section>
            <h2 className="mb-2 pb-4 text-sm font-semibold text-white uppercase dark:text-white border-1 border-b border-dotted">
              Menu
            </h2>
            <div className="divide-dashed" />
            <ul className="text-white">
              <li className="">
                <Link to="/" className="hover:underline">
                  Home
                </Link></li>
              <li>
                <Link to="/book" className="hover:underline">
                  Books
                </Link>
              </li>
              <li className="">
                <Link to="/best-sale" className="hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:underline">
                  View Cart
                </Link>
              </li>
              <li>
                <Link to="/best-sale" className="hover:underline">
                  My Order
                </Link>
              </li>
              <li>
                <Link to="/best-sale" className="hover:underline">
                  My Favorite
                </Link>
              </li>
            </ul>
          </section>
          {/* section contact us */}
          <section>
            <h2 className="mb-2 pb-4 text-sm font-semibold text-white uppercase dark:text-white border-1 border-b border-dotted">
              Contact Us
            </h2>
            <div className="divide-dashed" />
            <ul className="dark:text-white">
              <li>
              {/* <PhoneOutlined className="mr-2" /> */}
                <a href="tel:(+855) 17 899 599" className="hover:underline hover:underline-offset-8">(+855) 17 899 599</a>
              </li>
              <li className="flex items-center">
              <MailOutlined className="mr-2" />
                <a href="sambo@monument-books.com" className="hover:underline hover:underline-offset-8">Email</a>
              </li>
              <li className="flex items-center">
              <YoutubeOutlined className="mr-2" />
                <a href="https://www.youtube.com/channel/UCaRmWh_w0O6nZlpPLRgnFQw"
                  className="hover:underline hover:underline-offset-8">YouTube</a>
              </li>
              <li className="flex items-center">
                
              <AiOutlineFacebook className="mr-2" />
                <a href="https://web.facebook.com/monumentbooksandtoys"
                  className="hover:underline hover:underline-offset-8">Facebook</a>
              </li>
            </ul>
          </section>
          {/* section location */}
          <section>
            <h2 className="mb-2 pb-4 text-sm font-semibold text-white uppercase dark:text-white border-1 border-b border-dotted">
              Address
            </h2>
            <div className="max-w-auto">
              <iframe className="w-full h-60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.59016861525!2d104.92130265908833!3d11.559202279381877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095139ffd8720b%3A0x214ebe2326526948!2sMonument%20Books!5e0!3m2!1sen!2skh!4v1708155008884!5m2!1sen!2skh" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </div>
        <hr className="my-2 border-white sm:mx-auto dark:border-white-700" />
        {/* copy right */}
        <p className="text-center">&copy; {new Date().getFullYear()} Monument Books. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
