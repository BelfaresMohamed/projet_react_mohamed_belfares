import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faPinterestP, faSnapchat, faYoutube } from "@fortawesome/free-brands-svg-icons";


import foot1 from "../../assets/images/footer/paypal.png.webp"
import foot2 from "../../assets/images/footer/visa.png.webp"
import foot3 from "../../assets/images/footer/mastercard.png.webp"
import foot4 from "../../assets/images/footer/express.png.webp"
import foot5 from "../../assets/images/footer/discover.png.webp"



export const Contact = () => {
  return (
    <>
      <header className="header-about">

        <div className="imag-about">

          <h1>CONTACT</h1>

        </div>

      </header>

      <section className="sec-map d-flex justify-content-center gap-2" id="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0547376692634!2d-7.5338437!3d33.603884199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sar!2sma!4v1687432772344!5m2!1sar!2sma"
          width="28%"
          height={400}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <form action="">
          <h2>Send us your message</h2>
          <div>
            <input
              className="input naem"
              type="text"
              name="lastname"
              placeholder="Full Name"
            />
          </div>

          <div>
            <input
              className="input naem"
              type="number"
              name="Phone"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <input
              className="input subject"
              type="email"
              name="Email"
              placeholder="Email Address"
            />
          </div>
          <textarea
            className=" input textarea"
            name="textarea"
            rows={4}
            cols={50}
            placeholder="Message"
            defaultValue={""}
          />
          <br />
          <div className="sab">
            <input className="submit" type="submit" defaultValue="Send Message" />
          </div>
        </form>

      </section>

      {/* footer */}
      <footer >
        <div className="lob pt-4  d-flex" >

          <div >
            <h6 className="text-center"
            >GET IN TOUCH</h6>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, error?</p>
            <p className="text-center">Lorem ipsum dolor sit amet.</p>
            <div className="text-center d-flex justify-content-center gap-1 mt-2">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faPinterestP} />
              <FontAwesomeIcon icon={faSnapchat} />
              <FontAwesomeIcon icon={faYoutube} />

            </div>
          </div>

          <div>
            <h6>LINKS</h6>

            <p>Search</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Returns</p>
          </div>

          <div>
            <h6>LINKS</h6>

            <p>Search</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Returns</p>
          </div>

        </div>
        <div className="copy mt-2">
          <div>
            <img className="in" src={foot1} alt="" /><img className="in" src={foot2} alt="" />
            <img className="in" src={foot3} alt="" /><img className="in" src={foot4} alt="" />
            <img className="in" src={foot5} alt="" />
          </div>
          <p class="copy">Copyright &#169;<span></span>.All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};