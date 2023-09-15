import React from 'react'
import redbmw from "../assets/bmwi5red.png";
import Modal from '../components/Modal';


function TechnicalData() {
  return (
    <section id='techSection' className=' flex items-center justify-center h-full'>
      <div className=''>
        <div className='flex flex-col items-center justify-center'>
        <h4 className=' font-sans text-gray-500 font-normal text-lg uppercase pt-4'>Technical Data</h4>
        <h1 className='font-normal text-8xl text-gray-300 font-sans pt-4'>i5 M60</h1>
        <img src={redbmw} alt="bmw i5 M logo" className='lg:h-72 md:h-52 w-full object-contain object-center pb-4' />
        </div>

        <div className='flex gap-2 pb-4 max-md:gap-2 max-md:flex-col '>
          <div className='mx-auto '>
          <h4 className='font-extralight text-gray-600'>Power</h4>
          <p className='text-gray-800 font-sans'>593 hp</p>
          </div>
          <div className='mx-auto '>
          <h4 className='font-extralight text-gray-600'>0-100 km/h</h4>
          <p className='text-gray-800 font-sans flex  justify-center'>3.8 s</p>
          </div>
          <div className='mx-auto items-center justify-center '>
          <h4 className='font-extralight text-gray-600'>Top Electric Speed</h4>
          <p className='text-gray-800 font-sans flex  justify-center'>230 km/h</p>
          </div>
          <div className='mx-auto items-center justify-center'>
          <h4 className='font-extralight text-gray-600'>Range (up to)</h4>
          <p className='text-gray-800 font-sans flex  justify-center'>412 km</p>
          </div>

         
          
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Modal />
          <div className='flex flex-col justify-center gap-4 pb-6 pt-2 px-4 md:w-4/5'>
        <p className='font-sans text-gray-700'>Performance metrics as reported by BMW AG.</p>
        <p className='font-sans text-gray-700'>Horsepower and acceleration performance metrics as reported by BMW AG. Output metrics are achieved with option code 840 – Increased Top Speed.</p>
        <p className='font-sans text-gray-700'>BMW predicted range (based on EPA methodology) with 19” wheels. Official EPA test results are not yet available. Range may vary based on driving habits and other factors.</p>
        </div>
        </div>

      </div>
  </section>
  )
}

export default TechnicalData