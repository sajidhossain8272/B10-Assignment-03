import { useState } from "react";
import shoppingCart from "../public/shoppingcart.svg";
import searchIcon from "../public/searchicon.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className='Navigation font lg:overflow-hidden'>
        <div className='bg-gradient-to-b from-gray-100 to-white'>
          <div className='navbar w-full relative'>
            <div className='navbar-start mt-4 lg:ml-32'>
              <div className='dropdown'>
                <button className='btn h-full'>
                  <img className='w-6' src='arrow-up.png' alt='' />
                </button>
              </div>
              <h1 className='text-4xl font-extrabold ml-2'>Rinterio</h1>
            </div>
            <div className='navbar-center mt-4 hidden lg:flex lg:pr-32 sm:pl'>
              <ul className='menu menu-horizontal px-1 text-[16px]'>
                <li>
                  <a className='font-extrabold'>Home</a>
                </li>
                <li>
                  <a> Services</a>
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
                <button className='bg-white hover:bg-gray-100 rounded-full text-black w-10 h-10 ml-4 flex items-center justify-center'>
                  <img className='w-6' src={shoppingCart} alt='' />
                </button>
                <button className='bg-white hover:bg-gray-100 rounded-full text-black text-3xl w-10 h-10 ml-4 mr-4 flex items-center justify-center'>
                  <img className='w-6' src={searchIcon} alt='' />
                </button>
              </div>

              <a className='btn hidden md:flex font-extrabold text-[20px] w-56 h-16'>
                Book Consult
                <img
                  className='w-12 rounded-full border-lime-900'
                  src='right-upp.png'
                  alt=''
                />
              </a>
              <div className='dropdown'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost lg:hidden relative'
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
                </div>
                <ul className='menu menu-sm dropdown-content rounded-box z-[10000] shadow absolute top-full right-0 mt-1 bg-white'>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Services</a>
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
          <div className='hero '>
            <div className='hero-content text-center'>
              <div className='lg:mt-12'>
                <div className='flex items-center justify-center'>
                  <img src='banner.png' alt='house' />
                </div>
                <h1 className='text-black text-[28px] md:text-[64px] font-extrabold'>
                  A barn house of this{" "}
                  <span className='lg:hidden'>
                    <br />
                  </span>
                  design has a{" "}
                  <span className='hidden md:inline'>
                    {" "}
                    <br />{" "}
                  </span>{" "}
                  striking{" "}
                  <span className='lg:hidden '>
                    {" "}
                    <br />
                  </span>{" "}
                  appearance
                </h1>
                <p className='text-[16px] py-6'>
                  The barn house captivates with its blend of rustic charm and
                  modern sophistication, featuring weathered wood, sleek metal
                  accents, and large windows that flood the space with natural
                  light.
                </p>
                <button className='btn btn-secondary text-[20px]'>
                  View Details{" "}
                  <span className='bg-lime-300 rounded-full h-6 w-6 flex items-center justify-center'>
                    <img src='arrow-up.png' alt='' />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        
      <div className="hidden lg:flex bg-gray-200 pl-48 pt-10 pb-8 mt-12">
          <img src='Vector.png' alt='' />
          </div>
        <div className='bg-gray-200 lg:pl-32 pl-4 pt-6'>
        <div className="lg:flex lg:justify-around space-y-6 lg:space-y-0 pr-4">

          <div className="lg:w-[30vw] w-full">
            
          <div className="text-center lg:text-left">
          <button className='btn btn-neutral w-32 mx-auto lg:mx-0'>
            {" "}
            <span className='w-6'>
              {" "}
              <img src='right-arrow.png' alt='' />
            </span>{" "}
            About Us
          </button>
          <h1 className="font-bold text-[24px] lg:text-[40px] pt-4">We design thoughtful, liveable spaces</h1>
          <p className="font-medium text-[13px] lg:text-[16px] pt-6 pb-6">
            The barn house captivates with its blend of rustic charm and <br /> modern
            sophistication, featuring weathered wood, sleek metal accents.
          </p>

          <div className='card card-side bg-base-100 shadow-xl'>
            <figure className="m-4">
              <img className="mb-10 lg:mb-0"
                src='commercial.png'
                alt='Commercial Building'
              />
            </figure>
            <div className='card-body'>
              <h1 className='card-title'>Commercial</h1>
              <p className="text-[14px] text-start lg:text-[16px]">The barn house captivates with its blend of rustic charm and modern.</p>
              <div className='card-actions justify-end'>
              </div>

            </div>
          </div>

          <div className=' mt-6 card card-side bg-base-100 shadow-xl'>
            <figure className="m-4">
              <img className="mb-10 lg:mb-0"
                src='residential.png'
                alt='Residential Building'
              />
            </figure>
            <div className='card-body'>
              <h1 className='card-title'>Residential</h1>
              <p className="text-[14px] text-start lg:text-[16px]">The barn house captivates with its blend of rustic charm and modern.</p>
              <div className='card-actions justify-end'>
              </div>
              
            </div>
            </div>
          </div>
          </div>
          <div className="flex"> <img className="h-52 w-full lg:h-fit lg:w-fit lg:pt-16" src="Rectangle.png" alt="" /></div>
          </div>
          
        </div>
        
      </section>

      <section>
        <div className="bg-gray-200">
      

      
       
        <div className="bg-gray-200 text-center">
          <button className="btn btn-neutral mt-32 "> <span> <img className="w-6" src="right-arrow.png" alt="right-arrow" /></span> How we work</button>
          <h1 className="font-bold text-[24px] lg:text-[40px] mt-4">Our Works Process</h1>
          <p className="font-medium text-[14px] lg:text-[16px] mt-4">The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents.</p>
        </div>


        <div className="flex flex-col items-center lg:flex lg:flex-row justify-center gap-6 mt-8 pb-8">
        <div className="card card-side bg-pink-300 w-[275px]">
          <div>
            <div className="ml-6 pt-4">
            <img className="w-12 h-12" src="concept.png" alt="light-bulb" />
            </div>
          <div className= "card-body pt-4">
            <h1 className="card-tittle text-[20px] font-bold text-black">Concept</h1>
            <p className="text-[16px] font-medium text-[#494949]">The barn house captivates with its blend of rustic charm and modern.</p>
          </div>
          </div>
        </div>

        <div className="card card-side bg-yellow-300 w-[275px]">
          <div>
            <div className="ml-6 pt-4">
            <img className="w-12 h-12" src="flow-chart.png" alt="light-bulb" />
            </div>
          <div className= "card-body pt-4">
            <h1 className="card-tittle text-[20px] font-bold text-black">Design Process</h1>
            <p className="text-[16px] font-medium text-[#494949]">The barn house captivates with its blend of rustic charm and modern.</p>
          </div>
          </div>
        </div>

        <div className="card card-side bg-green-300 w-[275px]">
          <div>
            <div className="ml-6 pt-4">
            <img className="w-12 h-12" src="vision.png" alt="light-bulb" />
            </div>
          <div className= "card-body pt-4">
            <h1 className="card-tittle text-[20px] font-bold text-black">Supervision</h1>
            <p className="text-[16px] font-medium text-[#494949]">The barn house captivates with its blend of rustic charm and modern.</p>
          </div>
          </div>
        </div>

        <div className="card card-side bg-blue-300 w-[275px]">
          <div>
            <div className="ml-6 pt-4">
            <img className="w-12 h-12" src="budget-planning.png" alt="light-bulb" />
            </div>
          <div className= "card-body pt-4">
            <h1 className="card-tittle text-[20px] font-bold text-black">Budget Planning</h1>
            <p className="text-[16px] font-medium text-[#494949]">The barn house captivates with its blend of rustic charm and modern.</p>
          </div>
          </div>
        </div>
        </div>

        </div>
      </section>

      <section>


     
     
     <div className="bg-gray-200 lg:bg-white pb-10">
      

      
       
      <div className=" text-center">
        <button className="btn btn-green lg:mt-32 "> <span> <img className="w-6" src="right-arrow.png" alt="right-arrow" /></span> Explore our Latest works</button>
        <h1 className="font-bold text-[24px] lg:text-[40px] mt-4">Our Latest Portfolio</h1>
        <p className="font-medium text-[14px] lg:text-[16px] p-4">The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents.</p>
      </div>


      <div className="lg:flex flex-wrap items-center justify-center gap-0">

      <div className="bg-white rounded-2xl m-8 p-4 ">
      <div className='card card-side  lg:border-2'>
        <div className="flex lg:flex-row flex-col items-start ">

        
              <img className="mb-10 lg:mb-0 lg:mr-4 flex-shrink-0 w-full h-auto lg:h-[25vh] lg:w-1/3 lg:p-4"
                src='img1.png'
                alt='Commercial Building'
              />
            <div className='card-body p-0 lg:p-4 w-full lg:w-1/2'>
              <h1 className='card-title text-start text-[20px]'>Commercial</h1>
              <p className="text-[16px] text-start">The barn house captivates with its blend of rustic charm and modern.  </p>
              <div className='card-actions justify-start'>
              <button className='p-0 lg:p=4 btn btn-white text-[16px] text-black'>
                  View Details{" "}
                  <span className=' bg-lime-300 rounded-full h-6 w-6 flex items-center justify-center '>
                    <img className="h-4 w-4" src='arrow-up.png' alt='' />
                  </span>
                </button>
                </div>
              </div>


            </div>
          </div>
      </div>


      <div className="bg-white rounded-2xl m-8 p-4">
      <div className='card card-side lg:max-w-fit  lg:border-2'>
        <div className="flex">

        
              <img className=" lg:mb-0 lg:mr-4 flex-shrink-0 w-full lg:h-[25vh] h-[25vh] lg:p-4"
                src='img2.png'
                alt='Commercial Building'
              />
            


            </div>
          </div>
      </div>



      <div className="bg-white rounded-2xl m-8 p-4">
      <div className='card card-side lg:max-w-fit lg:border-2'>
        <div className="flex">

              <img className="lg:mb-0  lg:h-[25vh] flex-shrink-0 w-[40vh] lg:w-[40vh] h-full object-cover lg:p-4"
                src='img5.png'
                alt='Commercial Building'
              />
          


            </div>
          </div>
      </div>



      <div className="bg-white rounded-2xl m-8 p-4 ">
      <div className='card card-side  lg:border-2'>
        <div className="flex lg:flex-row flex-col items-start ">

        
              <img className="mb-10 lg:mb-0 lg:mr-4 flex-shrink-0 w-full h-[25vh] lg:h-[25vh] lg:w-1/2 lg:p-4"
                src='img4.png'
                alt='Commercial Building'
              />
            <div className='card-body p-0 lg:p-4 w-full lg:w-1/2'>
              <h1 className='card-title text-start text-[20px]'>Commercial</h1>
              <p className="text-[16px] text-start">The barn house captivates with spa <br className="hidden lg:flex" /> its blend of rustic charm and <br className="hidden lg:flex" /> modern.  </p>
              <div className='card-actions justify-start'>
              <button className='p-0 lg:p=4 btn btn-white text-[16px] text-black'>
                  View Details{" "}
                  <span className=' bg-lime-300 rounded-full h-6 w-6 flex items-center justify-center '>
                    <img className="h-4 w-4" src='arrow-up.png' alt='' />
                  </span>
                </button>
                </div>
              </div>


            </div>
          </div>
      </div>




      <div className="bg-white rounded-2xl m-8 p-4">
      <div className='card card-side lg:w-fit lg:border-2'>
        <div className="flex lg:flex-row flex-col items-start ">

        
              <img className="lg:mb-0 lg:mr-4 flex-shrink-0 w-full h-[30vh] lg:h-[25vh] lg:p-4"
                src='img3.png'
                alt='Commercial Building'
              />


            </div>
          </div>
      </div>



      <div className=" lg:hidden bg-white rounded-2xl m-8 p-4">
      <div className='card card-side  lg:border-2'>
        <div className="flex lg:flex-row flex-col items-start ">

        
              <img className="lg:mb-0 lg:mr-4 flex-shrink-0 w-full h-[30vh] lg:p-4"
                src='img5.png'
                alt='Commercial Building'
              />
          


            </div>
          </div>
      </div>


      </div>

      </div>  

      </section>

      <section>
        <div className="bg-[url('bg.jpg')] bg-cover bg-center h-auto w-auto lg:m-4 rounded-lg mt-1">

        <div className=" text-center">
        <button className="btn btn-green lg:mt-32 mt-4  "> <span> <img className="w-6" src="right-arrow.png" alt="right-arrow" /></span> Let’s Connect</button>
        <h1 className="font-bold text-[24px] lg:text-[40px] mt-4">Let’s Discuss Next Project</h1>
        <p className="font-medium text-[14px] lg:text-[16px] p-4">The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents.</p>
      </div>

      <div className="">
        <div className="grid grid-cols-1">
        <div className="flex flex-col items-center justify-center lg:grid grid-cols-2 lg:pl-60 lg:ml-20">
      <input className="input w-5/6 max-w-md rounded-full mb-4" type="text" id="First-Name" placeholder="First Name*" />
      <input className="input w-5/6 max-w-md rounded-full mb-4" type="text" id="Last-Name" placeholder="Last Name*" />
      </div>
      <div className="flex flex-col items-center justify-center lg:grid grid-cols-2 lg:pl-60 lg:ml-20">
      <input className="input w-5/6 max-w-md rounded-full mb-4" type="number" id="First-Name" placeholder="Phone Number*" />
      <input className="input w-5/6 max-w-md rounded-full mb-4" type="email" id="First-Name" placeholder="Email*" />
      </div>
      
      <div className="flex flex-col items-center justify-center">
      <textarea className="w-5/6 lg:w-8/12 h-48 px-4 py-2 border rounded-2xl mb-4" placeholder="Write your message here"></textarea>

      <button className='btn md:flex font-bold text-[20px] w-[40vh] lg:w-8/12 h-16 text-black'>
                Send Mail
                <img
                  className='w-12 rounded-full border-lime-900'
                  src='right-upp.png'
                  alt=''
                />
              </button>
              </div>
              </div>
      </div>




        </div>
      </section>
    </>
  );
}

export default App;
