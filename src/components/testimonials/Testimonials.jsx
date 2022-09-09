import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Avatar1.jpg";
import AVTR2 from "../../assets/Avatar2.jpg";
import AVTR3 from "../../assets/Avatar3.jpg";
import AVTR4 from "../../assets/Avatar4.png";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    avatar: AVTR1,
    name: "Monica Szőke-Manea",
    review:
      "Alexandru is my son and I love him very much. He knows alot of programming and I want you to know that this is not him writing this fake review in the name of his mom. He really knows his stuff :)",
  },

  {
    avatar: AVTR2,
    name: "Stefan Szőke-Manea",
    review:
      "Alex is my brother and i want to be like him when i grow up. He is alway my inspiration :D",
  },

  {
    avatar: AVTR3,
    name: "Pisu",
    review:
      "Meow Meow Meow Meow Meeeow. He also sometimes feeds me so i like that :). Meow meow meooww",
  },

  {
    avatar: AVTR4,
    name: "Bahar Saatçi",
    review:
      "Alex is sometimes nazik bir adam but also maniac fhfhfhfh so I wouldn't like him to design my websites. I appreciate about him that he looks the front not the back. CIAOOO <3",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img className="client__avatar-img" src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
