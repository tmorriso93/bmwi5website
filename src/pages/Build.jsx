import React from 'react';
import { Carousel } from 'flowbite-react';
import bmwblack from "../assets/bmwi5black.png";
import bmwblue from "../assets/bmwi5blue.png";
import bmwgreen from "../assets/bmwi5green.png";
import bmwred from "../assets/bmwi5red02.png";
import bmwsilver from "../assets/bmwi5silver.png";
import bmwwhite from "../assets/bmwi5white.png";

function Build() {
  

  //For the Carousel I used a Library called Flowbite to quickly create a carousel/slider and use it
  // to show the vehicle in a few different colours

  return (
    <section id='buildSection' className='flex items-center justify-center h-screen  w-3/4'>
        <h4 className='font-light text-gray-500 mt-3 mb-4 uppercase'>Colours</h4>
        <h2 className='text-4xl font-sans font-normal mb-4 md:pb-8 uppercase'>BMW i5 M60 xDRIVE SEDAN.</h2>
      <Carousel className='font-bold text-6xl h-1/2 sm:pt-0'
      leftControl="<"
      rightControl=">">
      <img
        alt="..."
        src={bmwblack}
      />
      <img
        alt="..."
        src={bmwblue}
      />
      <img
        alt="..."
        src={bmwgreen}
      />
      <img
        alt="..."
        src={bmwred}
      />
      <img
        alt="..."
        src={bmwsilver}
      />
      <img
        alt="..."
        src={bmwwhite}
      />
    </Carousel>

    <div className='flex flex-col justify-center gap-4 '>
        <h2 className='font-normal text-lg text-gray-300 font-sans pt-4'>SUSTAINABILITY IN THE BMW i5 M60 xDRIVE.</h2>
        <p className='font-sans text-gray-700 flex w-full'>
          The BMW i5 M60 xDrive also makes a contribution on the way towards a more sustainable future. By employing secondary materials and
          making use of green electricity in the manufacturing process, we are already optimising the CO2 footprint of the BMW i5 M60 xDrive
          even before it is handed over to you. During the journey, the innovative technologies of EfficientDynamics ensure the perfect balance
           between efficiency and performance. Furthermore, the BMW i5 M60 xDrive offers the option of a vegan interior for the very first time.
       </p>
        </div>

    </section>
  )
}

export default Build