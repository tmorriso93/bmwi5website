// imported framer motion for animation and react icons for icons to use in the accordion
import React, { useState }  from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";


function AdviceAndServices() {

  const [activeQuestion, setActiveQuestion] = useState(null);

//questions and answers
const questions = [
  {
    id: 1,
    question: 'What is the output of the BMW i5 M60 xDrive?',
    answer: " The BMW i5 M60 xDrive has an output of 593 hp, up-to 605 lb-ft of torque and achieves a top speed of 230 km/h*. On the way to this target, it accelerates to 100 km/h in only 3.8 seconds. The model is 5,060 mm long, 1,505 mm high and 1,900 mm wide."
  }, {
    id: 2,
    question: 'What is the range of the battery?',
    answer: "Fully charged, the BMW i5 M60 xDrive has an estimated range of up to 412 km*. As is the case with combustion engines, this range does of course depend on many external factors and above all the driving style."
  }, {
    id: 3,
    question: 'Why do electric vehicles offer an especially sporty driving sensation?',
    answer: 
      " In an electric vehicle, the full range of performance and torque are available instantly. Pressing the accelerator is all that is needed for the vehicle to accelerate up to its top speed without any interruption due to gear shifts. This creates a very intense sensation and is reminiscent of motorsports. The sound composed especially for the i5 M60 xDrive by Hans Zimmer supports the perceived dynamics.  "
  }, {
    id: 4,
    question: 'How quickly can I charge the BMW i5 M60 xDrive?',
    answer: 
      " A fast-charging station using direct current (DC) is able to charge the vehicle with a maximum of 205 kW. With this option, it is possible to raise the available battery capacity from 10 to 80% in only 30 minutes. Using the standard Flexible Fast Charger with NEMA 14-50 Adapter or with an optional BMW Wallbox with 9.6 kW alternating current (AC), the charging time is 10 hours.  "
  },{
    id: 5,
    question: 'When is the car available?',
    answer: 
      "The BMW i5 M60 will begin to arrive to Canada in late 2023. "
  },{
    id: 6,
    question: 'Can I test drive a BMW i5 M60 now?',
    answer: 
      "The BMW i5 M60 will be available to test drive once it arrives to Retailers in late 2023. "
  },{
    id: 7,
    question: 'I have additional questions, who can I contact?',
    answer: 
      "You can contact Policaro BMW Retailer to discuss any questions you may have. visit www.policarobmw.ca/contact-us/ "
  },
];

  return (
    <section
    id='adviceSection'
      className="flex items-center justify-center w-screen bg-gray-200 max-w-[100%]"
    >
      <div className='w-[89%] m-auto max-w-[1000px] bg-gray-300 p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl mb-6 font-normal font-sans text-slate-800'> FREQUENTLY ASKED QUESTIONS ABOUT THE BMW i5 M60 xDRIVE. </h2>
        {questions.map((q) => (
          <div key={q.id} className='mb-4 last:mb-0'>
            <button
              className='w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg
                         shadow-md flex justify-between items-center'
              // set the active question to the id of the active question and if it equals the q.id then 
              // return null else return q.id which is question.id 
              onClick={() => 
                setActiveQuestion(activeQuestion === q.id ? 
                null : q.id)}
            >
              {/* inside the button render the react icons and return the minus icon else return the plus icon if its been clicked on */}
              {q.question}
              {activeQuestion === q.id ?
              (
                <FaMinusCircle />
              ) : <FaPlusCircle />}
            </button>
            {/* add our animation to the accordian when clicked */}
            {/* inside here we will set out animations */}
            {/* height is auto because the answer can be really large */}
            <AnimatePresence>
              {/* if the 1st half is true the second half will fire, if the 1st half is fals then the second half wont run */}
                {activeQuestion === q.id 
                && (
                 
                  <motion.div
                    initial={{opacity: 0,
                    height: 0}}
                    
                    animate={{opacity: 1,
                    height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    className='mt-2 text-gray-600 ml-4'
                    >
                      <p>{q.answer}</p>
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdviceAndServices;