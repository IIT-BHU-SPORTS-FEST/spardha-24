import React, { useState, useEffect } from 'react';
import './Gallery.css';
import './Gallery_gradient.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [item, setItem] = useState(0);
  const [check, setCheck] = useState(false);
  
  useEffect(() => {
    if (check) {
      if (!modal) {
        toggle();
      }
      setItem(localStorage.getItem('index'));
      setCheck(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);

  return (
    <>

      <section id="gallery" className="ftco-section padSect">
              <h3
                className="subheading_gallery"
                style={{ color: '#760e53'  ,fontFamily: 'Poppins',
                fontSize: '30px',
                fontWeight: '900',
                lineHeight: '25px',
                letterSpacing: '0em',
                textDecoration:'underline',
                display:'flex'
                ,margin:'30px',
                justifyContent:'center'
               
                }}
              >
                Some Past Memories
              </h3>
        <div className="container_gallery gallery-container mb-5 pt-1">
          <div className="row_gallery justify-content-center pt-5">
            <div className="col-md-7 heading-section_gallery text-center">
              
            </div>
          </div>
          <div className="tz-gallery">
            <div className="row_gallery mb-3 gallery-heading boldClass"  style={{ color: '#760e53'}}>
              Opening Ceremony
            </div>

            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 0);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/43.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 1);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/44.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 2);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/45.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 3);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/46.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 4);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/opening/47.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass"  style={{ color: '#760e53'}}>
              Pre-Events:
            </div>
            <div
              className="row_gallery mb-3 mt-3 gallery-heading boldClass"
              style={{ fontSize: '19px' }}
            >
              &emsp;I. Mashaal Handover Ceremony
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 5);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/marshall/51.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 6);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/marshall/52.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 7);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/marshall/53.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div
              className="row_gallery mb-3 mt-3 gallery-heading boldClass"
              style={{ fontSize: '19px' }}
            >
              &emsp;II. Run for a Cause
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 8);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/run/54.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 9);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/run/55.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 10);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/run/56.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div
              className="row_gallery mb-3 mt-3 gallery-heading boldClass"
              style={{ fontSize: '19px' }}
            >
              &emsp;III. Saturnalia
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 11);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/saturnalia/57.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 12);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/saturnalia/58.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 13);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/saturnalia/59.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div
              className="row_gallery mb-3 mt-3 gallery-heading boldClass"
              style={{ fontSize: '19px' }}
            >
              &emsp;IV. Udbhav
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 14);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/udbhav/60.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 15);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/udbhav/61.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 16);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/udbhav/62.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 17);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/preevents/udbhav/63.jpeg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Closing Ceremony:
            </div>
            <div className="row_gallery">
              {/* <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 18);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/22.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div> */}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 19);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/23.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              {/* <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 20);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/24.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div> */}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 21);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/25.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              {/* <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 22);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/closing/26.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div> */}
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Aquatics:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 23);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/aquatics/1.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 24);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/aquatics/2.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 25);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/aquatics/80.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Athletics:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 26);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/athletics/3.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 27);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/athletics/4.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 28);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/athletics/81.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 29);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/athletics/82.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 30);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/athletics/83.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 31);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/athletics/84.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Badminton:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 32);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/badminton/5.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 33);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/badminton/6.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 34);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/badminton/7.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Basketball:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 35);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/8.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 36);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/9.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 37);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/10.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 38);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/11.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 39);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/12.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>

              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 41);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/85.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 42);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/86.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 43);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/87.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 44);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/basketball/88.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Boxing:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 45);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/boxing/13.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 46);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/boxing/14.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 47);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/boxing/15.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 48);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/boxing/89.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 49);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/boxing/90.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Carrom:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 50);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/carrom/16.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 51);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/carrom/17.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 52);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/carrom/18.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Chess:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 53);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/chess/19.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 54);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/chess/20.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 55);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/chess/21.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 56);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/chess/91.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>

            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Cricket:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 57);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/27.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 58);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/28.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 59);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/29.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 60);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/92.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 61);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/93.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>{' '}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 62);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/94.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>{' '}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 63);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/95.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>{' '}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 64);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/cricket/96.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Football:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 65);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/football/30.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 66);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/football/31.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 67);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/football/32.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 68);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/football/97.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>{' '}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 69);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/football/98.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>{' '}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 70);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/football/99.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Handball:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 71);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/handball/33.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 72);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/handball/34.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 73);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/handball/35.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 74);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/handball/100.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>{' '}
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 75);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/handball/101.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Hockey:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 76);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/hockey/36.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 77);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/hockey/37.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 78);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/hockey/38.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 79);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/hockey/102.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 80);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/hockey/103.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 81);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/hockey/104.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Kabaddi:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 82);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-kabaddi/71.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 83);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-kabaddi/72.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 84);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-kabaddi/73.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 85);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-kabaddi/111.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 86);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-kabaddi/112.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 87);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-kabaddi/113.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Kho-kho:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 88);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/khokho/39.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 89);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/khokho/40.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 90);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/khokho/41.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 91);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/khokho/42.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 92);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/khokho/105.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Powerlifting & Weightlifting:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 93);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/powerlifting/48.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 94);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/powerlifting/49.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 95);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/powerlifting/50.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Table Tennis:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 96);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tabletennis/74.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 97);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tabletennis/75.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 98);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tabletennis/76.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 99);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tabletennis/114.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 100);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tabletennis/115.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Taekwondo:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 101);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/taekwondo/64.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 102);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/taekwondo/65.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 103);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/taekwondo/66.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 104);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/taekwondo/106.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Tennis:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 105);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tennis/77.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 106);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tennis/78.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 107);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tennis/79.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 108);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/z-tennis/116.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
            <div className="row_gallery mb-3 mt-3 gallery-heading boldClass">
              Volleyball:
            </div>
            <div className="row_gallery">
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 109);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/67.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 110);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/68.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 111);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/69.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 112);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/70.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 113);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/107.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 114);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/108.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 115);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/109.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
              <div
                className="col-sm-6 col-md-4 imageMarginGallery"
                onClick={() => {
                  localStorage.setItem('index', 116);
                  setCheck(true);
                }}
              >
                <span className="lightbox_gallery image-popup_gallery">
                  <img
                    src="/gallery/images/volleyball/110.jpg"
                    alt="gallery_image_alt"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modal}
        toggle={toggle}
        contentClassName="height_gallery"
        size="lg"
      >
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            selectedItem={item}
            className="carousel_gallery"
          >
            <div>
              <img
                src="/gallery/images/opening/43.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/44.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/45.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/46.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/opening/47.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/marshall/51.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/marshall/52.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/marshall/53.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/run/54.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/run/55.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/run/56.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/saturnalia/57.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/saturnalia/58.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/saturnalia/59.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/udbhav/60.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/udbhav/61.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/udbhav/62.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/preevents/udbhav/63.jpeg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/22.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/23.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/24.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/25.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/closing/26.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/aquatics/1.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/aquatics/2.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/aquatics/80.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/athletics/3.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/athletics/4.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/athletics/81.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/athletics/82.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/athletics/83.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/athletics/84.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/badminton/5.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/badminton/6.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/badminton/7.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/8.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/9.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/10.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/11.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/12.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/85.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/85.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/86.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/87.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/basketball/88.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/boxing/13.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/boxing/14.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/boxing/15.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/boxing/89.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/boxing/90.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/carrom/16.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/carrom/17.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/carrom/18.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/chess/19.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/chess/20.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/chess/21.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/chess/91.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/27.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/28.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/29.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/92.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/93.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/94.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/95.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/cricket/96.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/football/30.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/football/31.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/football/32.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/football/97.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/football/98.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/football/99.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/handball/33.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/handball/34.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/handball/35.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/handball/100.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/handball/101.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/hockey/36.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/hockey/37.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/hockey/38.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/hockey/102.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/hockey/103.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/hockey/104.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-kabaddi/71.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-kabaddi/72.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-kabaddi/73.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-kabaddi/111.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-kabaddi/112.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-kabaddi/113.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/khokho/39.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/khokho/40.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/khokho/41.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/khokho/42.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/khokho/105.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/powerlifting/48.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/powerlifting/49.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/powerlifting/50.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tabletennis/74.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tabletennis/75.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tabletennis/76.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tabletennis/114.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tabletennis/115.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/taekwondo/64.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/taekwondo/65.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/taekwondo/66.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/taekwondo/106.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tennis/77.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tennis/78.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tennis/79.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/z-tennis/116.jpg"
                alt="gallery_modal_image"
              />
            </div>

            <div>
              <img
                src="/gallery/images/volleyball/67.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/68.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/69.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/70.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/107.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/108.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/109.jpg"
                alt="gallery_modal_image"
              />
            </div>
            <div>
              <img
                src="/gallery/images/volleyball/110.jpg"
                alt="gallery_modal_image"
              />
            </div>
          </Carousel>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Gallery;
