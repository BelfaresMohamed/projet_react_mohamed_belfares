import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faPinterestP, faSnapchat, faYoutube } from "@fortawesome/free-brands-svg-icons";


import foot1 from "../../assets/images/footer/paypal.png.webp"
import foot2 from "../../assets/images/footer/visa.png.webp"
import foot3 from "../../assets/images/footer/mastercard.png.webp"
import foot4 from "../../assets/images/footer/express.png.webp"
import foot5 from "../../assets/images/footer/discover.png.webp"

import about from "../../assets/images/about.jpg"


export const About = () => {
  return (
    <>
      <header className="header-about">

        <div className="imag-about">

          <h1>ABOUT</h1>

        </div>

      </header>

      <section className="pt-3 section-about d-flex justify-content-center gap-1">
        <div>
          <img src={about}></img>

        </div>
        <div className="text-about">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quidem aperiam dolores veritatis ullam illum accusamus vel.
            Nulla quisquam pariatur voluptatibus consectetur molestias eveniet.
            Necessitatibus, vero perferendis? Eligendi, tempora minima.
            Modi praesentium suscipit sapiente animi sed magnam aspernatur,
            asperiores accusantium eum minus ducimus dignissimos hic dolores.
            Unde, dolores, excepturi dolore labore totam sed quod, at deserunt rerum laborum eaque quidem?
            Id fugit adipisci corporis animi quae, vero perferendis nulla eveniet delectus tempore ipsum
            repellat enim laborum dicta quo quis, totam officia dolore vitae exercitationem accusamus.
            Aut fuga cumque quo quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia,
            hic eos, quibusdam dolores amet esse provident sit ut culpa labore tenetur cum atque architecto
            eaque autem libero in excepturi!</p>
          <div className="bor">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore numquam esse veniam
              magni nisi, dignissimos maxime at obcaecati voluptatem repellat non accusamus consequatur
              incidunt aspernatur ratione molestiae iste.</p>

            <p>- abbass llamba</p>
          </div>
        </div>
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