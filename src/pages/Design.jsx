import React from 'react'
import i5video from '../assets/bmwi5promo01.mp4'
import bmwlogo from '../assets/bmwmlogocloseup.png';
import bmwmirrors from '../assets/bmwmirrors.png';
import bmwlights from '../assets/bmwi5lights.png';


function Design() {
  return (
    <section id='designSection' className=' flex items-center justify-center h-full pt-6'>
      <div className='flex justify-center items-center flex-col'>

        {/* Title section */}
        <h4 className='font-light text-gray-500 mt-3 mb-4 uppercase'>Design</h4>
        <h2 className='text-4xl font-sans font-normal mb-4 uppercase'>Looks Like An M.</h2>

           {/* i5 Background Video */}
      <video
        src={i5video}
        autoPlay
        loop
        muted
        className="h-2/5 object-cover "
      />
      </div>

      {/* Three responsive cards that detail design features about the car, change colour on hover
      and show a promotional video */}
      <div className='flex flex-wrap -m-4 mt-1 mb-1 '>

        <div className='p-4 sm:w-1/2 lg:w-1/3 ' >
          <div className='h-full border-2 border-gray-200 border-pacity-60 rounded-lg overflow-hidden shadow-md'>
            <img src={bmwlights} alt="bmw i5 M logo" className='lg:h-72 md:h-48 w-full object-cover object-center' />
            <div className='p-6 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in'>
              <h3 className='text-base font-light mb-1 text-slate-700'>Even at night - unmistakably M.</h3>
              <p className='leading-relaxed'>
              The available BMW Illuminated Kidney Grille becomes an eye-catcher, especially in the dark. White light 
              highlights its contours when the vehicle is stationary and while driving. 
              </p>
            </div>
          </div>
        </div>

        <div className='p-4 sm:w-1/2 lg:w-1/3 ' >
          <div className='h-full border-2 border-gray-200 border-pacity-60 rounded-lg overflow-hidden shadow-md'>
            <img src={bmwmirrors} alt="bmw i5 M logo" className='lg:h-72 md:h-48 w-full object-cover object-center' />
            <div className='p-10 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in h-full mx-auto'>
              <h3 className='text-base font-light mb-1 text-slate-700'> Iconic hand-crafted exterior mirrors.</h3>
              <p className='leading-relaxed'>
              The available M Carbon Mirror Caps are produced meticulously by hand. 
              </p>
            </div>
          </div>
        </div>

        <div className='p-4 sm:w-1/2 lg:w-1/3 ' >
          <div className='h-full border-2 border-gray-200 border-pacity-60 rounded-lg overflow-hidden shadow-md'>
            <img src={bmwlogo} alt="bmw i5 M logo" className='lg:h-72 md:h-48 w-full object-cover object-center' />
            <div className='p-6 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in'>
              <h3 className='text-base font-light mb-1 text-slate-700'> M rear spoiler made of lightweight carbon.</h3>
              <p className='leading-relaxed'>
              The M Carbon Rear Spoiler is ideal for fast driving maneuvers. It increases the downforce on the rear axle.
              Your BMW is more stable at high speeds. 
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Design