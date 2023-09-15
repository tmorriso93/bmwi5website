import React from 'react'
import chargeDistance from "../assets/chargedistance.png";
import chargeStation from "../assets/bmwi5chargestation.png";
import homeCharge from "../assets/bmwi5homecharge.png";

function RangeAndCharging() {
  return (
    <section id='rangeSection' className=' flex items-center justify-center h-full pt-6 max-sm:pb-10'>
    <div className='flex justify-center items-center flex-col'>

      {/* Title section */}
      <h4 className='font-light text-gray-500 mt-3 mb-4 uppercase'>Range & Charging</h4>
      <h2 className='text-4xl font-sans font-normal mb-4 uppercase flex justify-center items-center px-4'> REACH YOUR DESTINATION AT EASE: DRIVING & CHARGING WITH THE BMW i5 M60 xDRIVE.</h2>

      <div className='p-4 w-full' >
        <div className='h-full rounded-lg overflow-hidden'>
        <h4 className='font-extralight text-xs text-gray-400 mt-3 mb-4 uppercase items-center flex justify-center'>Example Route</h4>
          <img src={chargeDistance} alt="bmw i5 M logo" className=' w-full object-cover object-center ' />
          <div className='flex space-x-4 justify-center max-md:flex-col'>

          <div className='mt-2 flex flex-col justify-center items-center'>
          <h3 className='text-base font-semibold mb-1 text-slate-700 flex justify-center items-center'>1 Stop(s)</h3>
          <p className='font-light text-slate-600 flex justify-center items-center'>Charging stops required</p>
          </div>
          <div className='mt-4 flex flex-col justify-center items-center'>
          <h3 className='text-base font-semibold mb-1 text-slate-700 flex justify-center items-center'>0:36 h</h3>
          <p className='font-light text-slate-600 flex justify-center items-center'>Total charging time</p>
          </div>
          <div className='mt-4 flex flex-col justify-center items-center'>
          <h3 className='text-base font-semibold mb-1 text-slate-700 flex justify-center items-center'>5:55 h</h3>
          <p className='font-light text-slate-600 flex justify-center items-center'>Total travel time incl. charging</p>
          </div>
          </div>
          <div className='p-6 flex flex-col justify-center items-center'>
            <p className='leading-relaxed font-light text-slate-400 font-sans text-xs pb-6 w-3/4'>
            The charging capacity depends on the charge level, ambient temperature, individual driving profile and use of auxiliary devices as well as the actual vehicle selected. The charging
            times apply to ambient temperatures of 23 °C following a prior journey and may deviate according to usage characteristics. The values displayed are examples for the basic configuration
            of the model selected. The values may vary if the same vehicle has different equipment options.
            </p>
            <p className='font-light text-slate-400 font-sans text-xs w-3/4'>
            With the My BMW app, you stay on top of your range and charging status at any time and from anywhere. Easily plan charge-optimized routes and sent them to your vehicle. Download the
            app now and experience it in demo mode.
            </p>
          </div>

        </div>
      </div>

    </div>

    {/* Two responsive cards that detail Charging features about the car and Buttons made with TailwindCSS */}
    <div className='flex flex-wrap -m-4 mt-1 mb-1 justify-center items-center'>

      <div className='p-4 sm:w-1/2 lg:w-2/5' >
        <div className='h-full border-2 border-gray-200 border-pacity-60 rounded-lg overflow-hidden shadow-md'>
          <img src={chargeStation} alt="bmw i5 M logo" className='lg:h-72 md:h-48 w-full object-cover object-center' />
          <div className='p-6 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in'>
            <h3 className='text-base font-light mb-1 text-slate-700'>Charge easily and conveniently at home.</h3>
            <p className='leading-relaxed mb-2'>
            With the Flexible Fast Charger or a Wallbox, you can charge at home in a simple, safe and straightforward manner.
            Discover your individual charging solution. Discover your individual charging solution.
            </p>
            <a 
                href="https://www.policarobmw.ca/5-things-know-new-bmw-5-series-including-first-gen-electric-i5/"
                target="_blank"
              className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">Learn More</span>
              </a>
          </div>
        </div>
      </div>

      <div className='p-4 sm:w-1/2 lg:w-2/5' >
        <div className='h-full border-2 border-gray-200 border-pacity-60 rounded-lg overflow-hidden shadow-md'>
          <img src={homeCharge} alt="bmw i5 M logo" className='lg:h-72 md:h-48 w-full object-cover object-center' />
          <div className='p-6 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in'>
            <h3 className='text-base font-light mb-1 text-slate-700'>Connected Home Charging.</h3>
            <p className='leading-relaxed mb-2'>
            Thanks to intelligent control, you optimise your charging process at home, allowing you, for example, to use as much 
            of your own generated solar power as possible. 
            </p>
              <a
                href="https://www.policarobmw.ca/theres-something-everyone-2024-bmw-5-series-line-including-electric/"
                target="_blank"
                className="relative inline-block px-4 py-2 font-medium group max-sm:mb-10">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white ">Learn More</span>
              </a>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default RangeAndCharging