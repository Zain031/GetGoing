"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export default function KarirSlider({ data }) {
    console.log(data,"AAAASSSSSSSSSSSSSSSSSSS")
  return (
    <>
      <div className="citi-slider-all comon-slider ">
        <Swiper {...swiperOptions}>
          {data?.map((karir, index) => (
            <SwiperSlide className="citie-box" key={index}>
              <div className="citie-box-img text-center">
                <img src={`${karir.image}`} alt="" className='tw-w-72 tw-h-40' />
              </div>
              <div className="citie-haddings">
                <div>
                  <div className="citie-hadding hadding2">
                    <h4 className="font-f-2 line-height-22 font-20 weight-500">
                      {karir.title}
                    </h4>
                    <div className="space10" />
                    <p className="font-f-2 font-16 line-height-16 weight-400">
                      Berakhir pada {karir.end_date}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="citie-bottom-btn">
                    <Link
                      className="font-f-2 font-16 weight-500"
                      href={`/karir#${karir.id}${karir.title}`}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="citie-box">
                        <div className="citie-box-img text-center">
                            <img src="/assets/img/image/citie-2.png" alt="" />
                        </div>
                        <div className="citie-haddings">
                            <div className="citie-hadding hadding2">
                                <h4 className="font-f-2 line-height-22 font-20 weight-500">
                                    Rome
                                </h4>
                                <div className="space10" />
                                <p className="font-f-2 font-16 line-height-16 weight-400">
                                    25,690 Listing Available.
                                </p>
                            </div>
                            <div className="citie-bottom-btn">
                                <Link className="font-f-2 font-16 weight-500" href="#">View Listing</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="citie-box">
                        <div className="citie-box-img text-center">
                            <img src="/assets/img/image/citie-3.png" alt="" />
                        </div>
                        <div className="citie-haddings">
                            <div className="citie-hadding hadding2">
                                <h4 className="font-f-2 line-height-22 font-20 weight-500">
                                    Bruges
                                </h4>
                                <div className="space10" />
                                <p className="font-f-2 font-16 line-height-16 weight-400">
                                    25,690 Listing Available.
                                </p>
                            </div>
                            <div className="citie-bottom-btn">
                                <Link className="font-f-2 font-16 weight-500" href="#">View Listing</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="citie-box">
                        <div className="citie-box-img text-center">
                            <img src="/assets/img/image/citie-4.png" alt="" />
                        </div>
                        <div className="citie-haddings">
                            <div className="citie-hadding hadding2">
                                <h4 className="font-f-2 line-height-22 font-20 weight-500">
                                    Amsterdam
                                </h4>
                                <div className="space10" />
                                <p className="font-f-2 font-16 line-height-16 weight-400">
                                    25,690 Listing Available.
                                </p>
                            </div>
                            <div className="citie-bottom-btn">
                                <Link className="font-f-2 font-16 weight-500" href="#">View Listing</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="citie-box">
                        <div className="citie-box-img text-center">
                            <img src="/assets/img/image/citie-2.png" alt="" />
                        </div>
                        <div className="citie-haddings">
                            <div className="citie-hadding hadding2">
                                <h4 className="font-f-2 line-height-22 font-20 weight-500">
                                    Paris
                                </h4>
                                <div className="space10" />
                                <p className="font-f-2 font-16 line-height-16 weight-400">
                                    25,690 Listing Available.
                                </p>
                            </div>
                            <div className="citie-bottom-btn">
                                <Link className="font-f-2 font-16 weight-500" href="#">View Listing</Link>
                            </div>
                        </div>
                    </SwiperSlide> */}
        </Swiper>
        <div className="owl-nav">
          <button type="button" role="presentation" className="owl-prev h1p">
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button type="button" role="presentation" className="owl-next h1n">
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </>
  );
}
