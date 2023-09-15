import React from "react";
import { useState } from "react";

// a modal created to display information when user clicks on the button
export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <button
          className=" uppercase "
          //   className=" uppercase bg-pink-500 text-white active:bg-pink-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
            <a href="#_" className="relative inline-block px-4 py-2 font-medium group mb-6 mt-4">
             <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
          Tech Data
          </span>
          </a>
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Technical Data
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-4 flex-auto">
                    <p className="my-0 text-slate-500 text-lg leading-relaxed">
                    Powertrain: Electric
      <br />
      Power: 250 kW (340 hp)
      <br />
      Torque: 400 Nm
      <br />
      Transmission: 1-speed, automatic
      <br />
      Drivetrain: Rear-wheel drive
      <br />
      Nominal Power (30 minutes): 105 kW (143 hp)
      <br />
      Acceleration (0–62 mph): 6 seconds
      <br />
      Maximum Speed: 120 mph
      <br />
      Electric Top Speed: 119 mph
      <br />
      Energy Consumption (WLTP): 3.3 - 3.8 mi/kWh
      <br />
      Battery Capacity: 81.2 kWh
      <br />
      Maximum Charging Power (AC/DC): 11 kW (-) / 205 kW
      <br />
      Charging Time (DC 10–80%): 30 minutes
      <br />
      Charging Time (AC 0–100%): 8.25 hours (-)
      <br />
      Added Range after 10 Minutes of High-Power Charging: 156 miles
      <br />
      Length: 5,060 mm
      <br />
      Width: 1,900 mm
      <br />
      Height: 1,515 mm
      <br />
      Width incl. Mirrors (Driver/Passenger Side): 2,156 mm (1,081 / 1,075)
      <br />
      Maximum Weight: 2,740 kg
      <br />
      Permitted Load: 610 kg
      <br />
      Luggage Capacity: 490 liters

                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
  