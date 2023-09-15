import React, { useState } from 'react';



// An Array with all the page names on the site
function Navbar() {

  const isSmallScreen = window.innerWidth >= 400;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        "i5", "Tech Data", "Build", "Design",
        "Range & Charging", "Advice & Services"
                     ];
   
// an Array representing each page's Id
    const idOfPages = [
        "i5", "tech", "build", "design", "range", "advice"
    ];
    
// map through the navLinks array and display them inside a button tag
    const renderNavLink = (content, scrollToId) => {

        // this on click function will let you scroll down to the page that is clicked on the navbar
        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
            setIsMenuOpen(false); // Close the menu when a link is clicked
        }

        return (
            <ul key={content} className=''>
                <li>
                    {/* when button is clicked our function is activated */}
                    <button 
                        onClick={handleClickNav}
                        className='block bg-none text-base cursor-pointer max-lg:flex-col max-md:text-slate-900 border-none 
                                  hover:underline hover:ease-in hover:duration-200  '
                    >
                        {content}
                    </button>
                </li>
            </ul>
        )
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
      };

  return (
    <header
      className={`bg-gradient-to-r from-sky-700 to-indigo-500 fixed top-0 left-0 text-white p-3 w-full z-50 ${
        isMenuOpen ? "overflow-hidden" : ""
      }`}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="navContainer flex items-center justify-between">
          <h1 className="font-bold text-2xl cursor-pointer uppercase">
            Policaro BMW
          </h1>

          {/* Hamburger menu appears when screen is under 1020px */}
          <div className="lg:hidden">
            {isMenuOpen ? (
              <button
                onClick={handleCloseMenu}
                className="block text-white hover:text-white focus:outline-none ml-4"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="block text-white hover:text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            )}
          </div>

          {/* if menu is open style add the following styles here in the nav */}
          <nav
            className={`lg:flex lg:gap-8 gap-8 ${
              isMenuOpen
                ? "flex flex-col fixed inset-0 bg-slate-100 h-screen w-screen font-medium text-black p-6"
                : "hidden"
            }`}
          >
           
            {/* grab the array 'idOfPages' and add Section to the end to form the actual id of all files
             inside pages folder and link to each page so when clicked you scroll to the following page */}
            {navLinks.map((nav, index) =>
              renderNavLink(nav, idOfPages[index] + "Section")
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar

