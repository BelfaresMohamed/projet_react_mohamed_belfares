import img2 from "../../assets/images/kiran-ck-rnO8gRGia3s-unsplash.jpg"
import img3 from "../../assets/images/banner-05.jpg.webp"
import img4 from "../../assets/images/item-02.jpg"

//
import foot1 from "../../assets/images/footer/paypal.png.webp"
import foot2 from "../../assets/images/footer/visa.png.webp"
import foot3 from "../../assets/images/footer/mastercard.png.webp"
import foot4 from "../../assets/images/footer/express.png.webp"
import foot5 from "../../assets/images/footer/discover.png.webp"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {React} from "react";
import { faFacebook, faInstagram, faPinterestP, faSnapchat, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons"


export const Home = () => {
  return (
    <>
    {/*  */}
    <header id="header-home" className="d-flex flex-column">

    <div className="imag-header">
            
         <div className="text-img">
          <h1 className="mt-1">LEATHER BAGS</h1>
          <span></span>
          <h4>New Collection</h4>
          <button type="button" class=" btn btn-outline-light rounded-5 bg-white text-dark px-1" disabled>SHOP NEW</button>
         </div>
    </div>

  </header>

    {/*  */}
      <section className="home d-flex gap-2 ">
        <div className="card-home" >
          <img src={img3} alt="" /> <button type="button" class="btn btn-outline-secondary" disabled>COMING SOON</button>
        </div>
        <div className="card-home"  >
          <img src={img2} alt="" /><button type="button" class="btn btn-outline-secondary" disabled>COMING SOON</button>
        </div>
        <div className="card-home"  >
           <img src={img4} alt="" /><button type="button" class="btn btn-outline-secondary" disabled>COMING SOON</button>
        </div>
      </section>
    {/*************************************************** taps  **************************************************/}
    <section
  id="menu"
  style={{ marginTop: 60, width: "100%", textAlign: "center" }}
>
  <div className="men">
    <h6 className="text-center mt-5">MULTI STOR</h6>
    <h2 className="text-center mt-3">
      OUR PRODUCTS
    </h2>
  </div>
  <div className="div-mother ms-lg-1">
    <ul className="list-unstyled d-flex gap-3 justify-content-center mt-5">
      <li className="li-section5 ac one ">Best Selier</li>
      <li className="li-section5 two ">New</li>
      <li className="li-section5 three  ">Sale</li>
      <li className="li-section5 four">Old</li>
    </ul>
    <div className="content content1">
      <div>
        <div className="str">
          <p className="text-center mt-4">ARMOIRE</p>
          <h3 className="text-center">Best Selier</h3>
        </div>
        <div className="d-lg-flex justify-content-center gap-lg-5 pt-lg-2">
          <div className="div-child">
          <img
              className="img-tabs"
              width="250px"
              height="250px"
              src={img3}
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Magnam Tiste
            </p>
            <p className=" pre text-center fw-bolder">$5.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src={img3}
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1 ">Aut Luia</p>
            <p className="pre text-center fw-bolder">$14.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src={img4}
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              {" "}
              Est Eligendi
            </p>
            <p className=" pre text-center fw-bolder">$8.95</p>
          </div>
        </div>
        {/*  */}
        <div className="d-lg-flex justify-content-center gap-lg-5 pt-lg-2">
          <div className="div-child">
          <img
              className="img-tabs"
              width="250px"
              height="250px"
              src={img3}
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Eos Luibusdam
            </p>
            <p className=" pre text-center fw-bolder">$12.95</p>
          </div>
          <div className="div-child">
          <img
              className="img-tabs"
              width="250px"
              height="250px"
              src={img3}
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Eos Luibusdam
            </p>
            <p className=" pre text-center fw-bolder">$12.95</p>
          </div>
          <div className="div-child">
          <img
              className="img-tabs"
              width="250px"
              height="250px"
              src={img3}
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Laboriosam Direva
            </p>
            <p className=" pre text-center fw-bolder">$9.95</p>
          </div>
        </div>
      </div>
    </div>
    <div className="content content2 d-none">
      <div className="str">
        <p className="text-center mt-4">ARMOIRE</p>
        <h3 className="text-center">New</h3>
        <div className="d-lg-flex justify-content-center gap-lg-5 pt-lg-2">
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-3.png"
              alt=""
            />
            <p className=" tit text-center mt-lg-1 mt-1 mt-md-2">
              Magnam Tiste
            </p>
            <p className=" pre text-center fw-bolder">$5.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src={img3}
              alt=""
            />
            <p className=" tit text-center mt-lg-1 mt-1 mt-md-2">Aut Luia</p>
            <p className=" pre text-center fw-bolder">$14.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-1.png"
              alt=""
            />
            <p className=" tit text-center mt-lg-1 mt-1 mt-md-2">
              {" "}
              Est Eligendi
            </p>
            <p className=" pre text-center fw-bolder">$8.95</p>
          </div>
        </div>
        {/*  */}
        <div className="d-lg-flex justify-content-center gap-lg-5 pt-lg-2">
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src={img3}
              alt=""
            />
            <p className=" tit text-center mt-lg-1 mt-1 mt-md-2">
              Eos Luibusdam
            </p>
            <p className="pre text-center fw-bolder">$12.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-5.png"
              alt=""
            />
            <p className=" tit text-center mt-lg-1 mt-1 mt-md-2">
              Eos Luibusdam
            </p>
            <p className=" pre text-center fw-bolder">$12.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-4.png"
              alt=""
            />
            <p className=" tit text-center mt-lg-1 mt-1 mt-md-2 ">
              Laboriosam Direva
            </p>
            <p className=" pre text-center fw-bolder">$9.95</p>
          </div>
        </div>
      </div>
    </div>
    <div className="content content3 d-none">
      <div className="str">
        <p className="text-center mt-4">ARMOIRE</p>
        <h3 className="text-center">Sale</h3>
        <div className="d-lg-flex justify-content-center gap-lg-5 pt-lg-2">
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-1.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1 ">
              Magnam Tiste
            </p>
            <p className=" pre text-center fw-bolder">$5.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-2.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">Aut Luia</p>
            <p className=" pre text-center fw-bolder">$14.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-3.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              {" "}
              Est Eligendi
            </p>
            <p className=" pre text-center fw-bolder">$8.95</p>
          </div>
        </div>
        {/*  */}
        <div className="d-lg-flex justify-content-center gap-lg-5 pt-lg-2">
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-4.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Eos Luibusdam
            </p>
            <p className=" pre text-center fw-bolder">$12.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-5.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Eos Luibusdam
            </p>
            <p className=" pre text-center fw-bolder">$12.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-6.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Laboriosam Direva
            </p>
            <p className=" pre text-center fw-bolder ">$9.95</p>
          </div>
        </div>
      </div>
    </div>
    <div className="content content4 d-none">
      <div className="str">
        <p className="text-center mt-4">ARMOIRE</p>
        <h3 className="text-center">Old</h3>
        <div className="d-lg-flex justify-content-center gap-lg-5 pt-lg-1">
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-6.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Magnam Tiste
            </p>
            <p className=" pre text-center fw-bolder ">$5.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-5.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">Aut Luia</p>
            <p className=" pre text-center fw-bolder">$14.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-4.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              {" "}
              Est Eligendi
            </p>
            <p className=" pre text-center fw-bolder">$8.95</p>
          </div>
        </div>
        {/*  */}
        <div className="d-lg-flex justify-content-center gap-lg-5 pt-lg-2">
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-3.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Eos Luibusdam
            </p>
            <p className=" pre text-center fw-bolder">$12.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-2.png"
              alt=""
            />
            <p className=" tit text-center mt-1 mt-md-2 mt-lg-1">
              Eos Luibusdam
            </p>
            <p className="pre text-center fw-bolder">$12.95</p>
          </div>
          <div className="div-child">
            <img
              className="img-tabs"
              width="250px"
              height="250px"
              src="./public/img/menu/menu-item-1.png"
              alt=""
            />
            <p className="tit text-center mt-1 mt-md-2 mt-lg-1">
              Laboriosam Direva
            </p>
            <p className="pre text-center fw-bolder">$9.95</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* ******************************************************************************************************** */}
    
      <section className="sec-img">

<div className="hamham ">
    <div className="text-imges">
        <div>
            <h3>The Baeuty</h3>
            <h1>LOOKBOOK</h1>
            <p>video</p>
        </div>
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