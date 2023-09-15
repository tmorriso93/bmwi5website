// import React from 'react';
// import bmwblack from "../assets/bmwi5black.png";
// import bmwblue from "../assets/bmwi5blue.png";
// import bmwgreen from "../assets/bmwi5green.png";
// import bmwred from "../assets/bmwi5red02.png";
// import bmwsilver from "../assets/bmwi5silver.png";
// import bmwwhite from "../assets/bmwi5white.png";

// function Build() {
  
//   let slides = [
//     bmwblack, bmwblue, bmwgreen, bmwred, bmwsilver, bmwwhite
//   ]

//   return (
//     <section id='buildSection' className='flex items-center justify-center outline'>
      
//     </section>
//   )
// }

// export default Build

//----------------

// // import React from 'react';
// import React, { useState } from 'react';
// import bmwblack from "../assets/bmwi5black.png";
// import bmwblue from "../assets/bmwi5blue.png";
// import bmwgreen from "../assets/bmwi5green.png";
// import bmwred from "../assets/bmwi5red02.png";
// import bmwsilver from "../assets/bmwi5silver.png";
// import bmwwhite from "../assets/bmwi5white.png";

// function Build() {

//   let slides = [
//     bmwblack, bmwblue, bmwgreen, bmwred, bmwsilver, bmwwhite
//   ]

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleSlideChange = (index) => {
//     setCurrentSlide(index);
//   };


//   // const slides = [
//   //   'https://via.placeholder.com/400x300?text=Slide%201',
//   //   'https://via.placeholder.com/400x300?text=Slide%202',
//   //   'https://via.placeholder.com/400x300?text=Slide%203',
//   //   'https://via.placeholder.com/400x300?text=Slide%204',
//   //   'https://via.placeholder.com/400x300?text=Slide%205',
//   // ];

//   return (
//     // <section id='buildSection' className='flex items-center justify-center outline'>
      
//     // </section>

//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <div className="relative w-72 h-48 overflow-hidden shadow-lg">
//         <div
//           className="flex transition-transform duration-300 ease-in-out"
//           style={{
//             transform: `translateX(-${currentSlide * 100}%)`,
//             width: `${slides.length * 100}%`,
//           }}
//         >
//           {slides.map((slide, index) => (
//             <div key={index} className="w-72 h-48">
//               <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </div>
//         <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleSlideChange(index)}
//               className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Build


//-------------------------

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