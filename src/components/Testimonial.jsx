import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/testimonial.css"; // import CSS
import sampleImg from "../assets/couple1.png"; // replace with your image

const testimonials = [
  {
    id: 1,
    text: "Ecovite made our wedding invitations unforgettable. It was easy, elegant, and we got so many compliments from guests!",
    name: "Priya & Arjun",
    img: sampleImg,
  },
  {
    id: 2,
    text: "The process was smooth, eco-friendly and our guests loved it. Highly recommend Ecovite!",
    name: "Ananya & Rohan",
    img: sampleImg,
  },
  {
    id: 3,
    text: "Beautiful templates and easy customization. It saved us time and paper!",
    name: "Simran & Kunal",
    img: sampleImg,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="testimonial-section">
      <h2>Loved by Couples, Trusted by Guests</h2>
      <p>
        Real stories from people who made their special moments even more
        memorable, the eco-friendly way.
      </p>

      <div className="testimonial-card">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="testimonial-content">
          <img src={testimonials[index].img} alt={testimonials[index].name} />
          <p className="quote">“{testimonials[index].text}”</p>
          <h4>{testimonials[index].name}</h4>
          <div className="stars">★★★★★</div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
<Link to="/Couple">
  


      <button className="read-more">Read More Stories</button>
      </Link>
    </section>
  );
}
