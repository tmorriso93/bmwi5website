import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareTwitter, faYoutube, faSquareWhatsapp  } from '@fortawesome/free-brands-svg-icons';


// Footer section
function Footer() {
  return (
    <div className="">
      <div
        className="footer flex flex-col"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <div className="sb__footer section__padding p-4">
          <div className="sb__footer-links flex gap-8 mx-2 justify-center items-center max-md:flex-col max-sm:pt-20">
            <img src="https://www.policarobmw.ca/wp-content/uploads/2022/05/Proud-Member-of-PG-Logo-Darkblue-Colour.png" 
                 alt=""
                 className='w-1/4' />
            <div className="sb__footer-links-div font-serif text-sm flex flex-col  items-center ">
              <h4 className="font-bold ">Contact</h4>
              <a href="/">
                <p className="text-slate-800">Contact Us</p>
              </a>
              <a href="/">
                <p className="text-slate-800">Stay Connected</p>
              </a>
              <a href="/">
                <p className="text-slate-800">Request a Test Drive</p>
              </a>
            </div>
            <div className="sb__fotter-links_div font-serif text-sm">
              <h4 className="font-bold">Quick Links</h4>
              <a href="/">
                <p className="text-slate-800">BMW Shop</p>
              </a>
              <a href="/">
                <p className="text-slate-800">My BMW</p>
              </a>
              <a href="/">
                <p className="text-slate-800">BMW Recalls</p>
              </a>
            </div>
            <div className="sb__footer-links_div font-serif text-sm">
              <h4 className="font-bold">Experience</h4>
              <a href="/">
                <p className="text-slate-800">BMW i</p>
              </a>
              <a href="/">
                <p className="text-slate-800">Careers</p>
              </a>
              <a href="/">
                <p className="text-slate-800">Corporate Sales</p>
              </a>
            </div>
            <div className="sb__footer-links_div font-serif text-sm">
              <h4 className="font-bold">Legal</h4>
              <a href="/">
                <p className="text-slate-800">Cookies & Ads</p>
              </a>
              <a href="/">
                <p className="text-slate-800">Privacy Policy</p>
              </a>
              <a href="/">
                <p className="text-slate-800">Terms of Use</p>
              </a>
            </div>
            <div className="sb__footer-links_div flex flex-col justify-center items-center">
              <h4 className="font-bold">Social Media</h4>
              <div className="socialmedia flex gap-2 ">
                
                <a 
                  href="https://twitter.com/PolicaroBMW?lang=en"
                  target="_blank">
                     <FontAwesomeIcon icon={faSquareTwitter} />
                </a>
                <a 
                  href="https://www.facebook.com/PolicaroBMW"
                  target="_blank">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCSIpI3Hizbo5jic7htdFZag"
                  target="_blank">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a  
                  href="tel:416-981-9400"
                  target="_blank">
                    <FontAwesomeIcon icon={faSquareWhatsapp} />
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr></hr>

        <div className="sb__footer-below flex justify-center items-center">
          <div className="sb_footer-copyright font-sans text-sm py-2 text-slate-600">
            <p>
            &copy;{new Date().getFullYear()} Policaro BMW. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer