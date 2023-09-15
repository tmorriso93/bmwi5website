import React from 'react'
import i5VideoBg from '../assets/bmwi5video02.mp4'
import bmwlogo from '../assets/bmwmainlogo.png'
import bmwmlogo from '../assets/bmwmlogo.png'


function I5Video() {
  return (
    <section
      id="i5Section"
      className=" flex items-center justify-center font-serif pt-6"
    >
        {/* i5 Background Video */}
      <video
        src={i5VideoBg}
        autoPlay
        loop
        muted
        className="h-full object-fill max-md:object-cover"
      />

        {/* structure of the page with all of the text and buttons over the video */}
      <div className="container flex flex-col justify-end pl-6 mt-2 text-white items-start max-sm:w-1/4 max-md:items-center max-md:pl-0 font-sans absolute w-full h-full top-0 pb-12 lg:pl-28">
        <div className="bmw-logo">
          <div className="">
            <img src={bmwlogo} width={84} height={84} alt="main bmw logo" />
            <h4 className="font-normal text-lg mt-4">THE NEW</h4>
            <h1 className="font-semibold text-[94px] drop-shadow-xl ">i5</h1>
            <div className="flex gap-2 items-center">
              <img src={bmwmlogo} width={32} height={32} alt="bmw m logo" />
              <p className="text-lg">BMW i5 M60 xDrive. FULLY ELECTRIC</p>
            </div>

            {/* simple styled buttons */}
            {/* <div className='buttons flex gap-5 mt-4'>
                    <a href="https://www.policarobmw.ca/contact-us/" target="_blank"><button className='font-medium outline outline-2 p-2'>Keep me informed</button></a>
                    <a href="https://www.policarobmw.ca/order-your-bmw/" target="_blank"><button className='font-medium outline outline-2 p-2'>Reserve Now</button></a>
                </div> */}

            {/* Buttons styled in TailWindCSS */}

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.policarobmw.ca/contact-us/"
                target="_blank"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Keep me informed
                </span>
              </a>

              <a
                href="https://www.policarobmw.ca/order-your-bmw/"
                target="_blank"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Reserve Now
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default I5Video