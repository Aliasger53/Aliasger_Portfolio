import React from "react";
import "./testimonials.css";
import AVTR1 from "../../Assets/avatar1.jpg";
import AVTR2 from "../../Assets/avatar2.jpg";
import AVTR3 from "../../Assets/avatar3.jpg";
import AVTR4 from "../../Assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: "B. J. Sims",
    review:
      "With Aliasger’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Aliasger!",
  },
  {
    avatar: AVTR2,
    name: "Brandon O’Brien",
    review:
      "I speak for the trolley district when I tell you how pleased we are with the web site you designed for us. The district needed a site that addressed varied aspects of our operation. You have met those needs and then some! We have had nothing but rave comments about the site from those who are closest to it and rely on it the most. I personally want to thank you and your staff for their patience and diligence in promptly meeting each of our requests for the site during its development.",
  },
  {
    avatar: AVTR3,
    name: "David McDurham",
    review:
      "Compared to the other companies we have used in the past, Aliasger has been far and above the best in every area. While building our new web site, the customer service has been prompt and straightforward and the actual services are well documented and logical to our needs. We are very excited to be working with Matt and the rest of the team at Aliasger. Over just a short period of time I can tell that we are going to be doing business with Aliasger for a long time and will gladly recommend them to anyone… except our competition.",
  },
  {
    avatar: AVTR4,
    name: "Eric Beich",
    review:
      "Aliasger Internet Marketing excels at turning your website dreams into reality. We are so proud of the work He have done for us that we have already recommended them to many of our partners. The Aliasger team is heads and shoulders above their competition, and we are very thankful that He call Downtown Arlington home.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <Swiper
        className="container testimonials__container mySwiper"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt={avatar} />
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
