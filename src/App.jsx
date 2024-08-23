import { useState } from "react";
import shoppingCart from "../public/shoppingcart.svg";
import searchIcon from "../public/searchicon.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className='Navigation font lg:overflow-hidden'>
        <div className="bg-gradient-to-b from-gray-100 to-white">
        <div className='navbar w-full'>
          <div className='navbar-start mt-4 lg:ml-32'>
            <div className='dropdown'>
              <ul className='menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow '>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Services</a>
                  <ul className='p-2'>
                    <li>
                      <a>Commercial</a>
                    </li>
                    <li>
                      <a>Residential</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>Blogs</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
            <a className='btn btn-ghost text-xl'>🡥</a>
            <h1 className='text-4xl font-extrabold ml-2'>Rinterio</h1>
          </div>
          <div className='navbar-center mt-4 hidden lg:flex lg:pr-32 sm:pl'>
            <ul className='menu menu-horizontal px-1 text-[16px]'>
              <li>
                <a className='font-extrabold'>Home</a>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className='p-2'>
                    <li>
                      <a>Commercial</a>
                    </li>
                    <li>
                      <a>Residential</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='navbar-end mt-4 lg:pr-32'>
            <div className='hidden lg:flex'>
              <button className='bg-white rounded-full text-black w-10 h-10 ml-4 flex items-center justify-center'>
                <img className='w-6' src={shoppingCart} alt='' />
              </button>
              <button className='bg-white rounded-full text-black text-3xl w-10 h-10 ml-4 mr-4 flex items-center justify-center'>
                <img className='w-6' src={searchIcon} alt='' />
              </button>
            </div>

            <a className='btn hidden md:flex font-extrabold text-[20px] w-auto h-14'>
              Book Consult
              <span className='bg-black text-white p-2 ml-0 rounded-full'>
                {" "}
                🡭{" "}
              </span>
            </a>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
                <ul className='menu menu-sm dropdown-content rounded-box z-[1] shadow pt-48 mr-16'>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Services</a>
                    <ul className='p-2'>
                      <li>
                        <a>Commercial</a>
                      </li>
                      <li>
                        <a>Residential</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Portfolio</a>
                  </li>
                  <li>
                    <a>Blogs</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hero ">
  <div className="hero-content text-center">
    <div className="lg:mt-12">
    <div className="flex items-center justify-center">
      <img src="banner.png" alt="house" />
      </div>
      <h1 className=" text-black text-[28px] md:text-[64px] font-extrabold">A barn house of this <span className="lg:hidden"><br /></span>design has a <span className="hidden md:inline"> <br /> </span>  striking <span className="lg:hidden "> <br /></span> appearance</h1>
      <p className="text-[16px] py-6">
      The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents, and large windows that flood the space with natural light.
      </p>
      <button className="btn btn-secondary text-[20px]">View Details <span className="bg-lime-300 rounded-full h-6 w-6 flex items-center justify-center">🡥</span></button>
      
    </div>
  </div>
</div>
</div>

        
      </section>
    </>
  );
}

export default App;
