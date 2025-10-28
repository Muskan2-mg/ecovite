import React, { useState } from "react";
import "../styles/Blogs.css";
import user1 from "../assets/couple1.png";
import user2 from "../assets/story2.png";
import user3 from "../assets/story3.png";

const testimonials = [
  {
    id: 1,
    name: "Priya & Arjun",
    text: "EccoVite made our wedding invitations unforgettable. It was easy, elegant, and we got so many compliments from guests!",
    image: user1,
  },
  {
    id: 2,
    name: "Riya & Aman",
    text: "The eco-friendly designs were stunning! We loved the customization options and smooth ordering process.",
    image: user2,
  },
  {
    id: 3,
    name: "Sneha & Rohan",
    text: "Highly recommended! The designs perfectly matched our wedding theme, and delivery was super fast.",
    image: user3,
  },
];

const blogs = [
  {
    id: 1,
    category: "DIY",
    title: "DIY Eco-Friendly Wedding Favors",
    date: "March 15, 2025",
    description:
      "Simple and heartfelt ideas for creating unique wedding favors that are both memorable, environmentally conscious, and full of personal meaning.",
    image:
      "https://images.unsplash.com/photo-1529634896761-9eb6c3e58936?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Eco Tips",
    title: "Planning Your Eco-Friendly Indian Wedding",
    date: "January 25, 2025",
    description:
      "Make your big day sustainable with our eco-conscious wedding planning tips and creative ideas.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Real Stories",
    title: "Real Stories: Green Weddings that Inspire",
    date: "February 12, 2025",
    description:
      "Be inspired by couples who tied the knot in eco-friendly style and made sustainability part of their celebration.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "DIY",
    title: "Creative Recycled Decor Ideas",
    date: "April 10, 2025",
    description:
      "Turn old materials into stunning wedding decorations with our DIY recycled decor ideas.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Wedding Planning",
    title: "Minimalist Indian Wedding Decor Ideas",
    date: "May 28, 2025",
    description:
      "Discover elegant minimalist wedding themes that balance tradition with simplicity and grace.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Indian Rituals",
    title: "The Significance of Haldi Ceremony",
    date: "June 5, 2025",
    description:
      "Explore the meaning and beauty behind the traditional Haldi ceremony and how to make it special.",
    image:
      "https://images.unsplash.com/photo-1604335399106-e3e8d8f9a8b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    category: "Eco Tips",
    title: "Sustainable Wedding Fashion Trends",
    date: "July 15, 2025",
    description:
      "From recycled fabrics to ethical jewelry, explore the top sustainable fashion choices for modern couples.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    category: "Real Stories",
    title: "Love Blooms Naturally: An Outdoor Green Wedding",
    date: "August 8, 2025",
    description:
      "A real-life love story set in nature’s embrace — see how this couple celebrated love and sustainability.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
  },
];

function Blogs() {
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const prevTestimonial = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  const nextTestimonial = () =>
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);

  const { name, text, image } = testimonials[index];

  const categories = [
    "All",
    "Wedding Planning",
    "Indian Rituals",
    "Eco Tips",
    "DIY",
    "Real Stories",
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <>
      {/* === STORIES SECTION === */}
      <section className="stories-section">
        <h2 className="stories-heading">
          Stories That Inspire Beautiful Celebrations
        </h2>
        <p className="stories-subheading">
          Explore trends, traditions, and eco-friendly wedding ideas.
        </p>

        <div className="testimonial-container">
          <button className="arrow left" onClick={prevTestimonial}>
            &#8249;
          </button>

          <div className="testimonial-card">
            <p className="testimonial-text">{text}</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="profile">
              <img src={image} alt={name} className="profile-img" />
              <h4 className="profile-name">{name}</h4>
            </div>
          </div>

          <button className="arrow right" onClick={nextTestimonial}>
            &#8250;
          </button>
        </div>
      </section>

      {/* === BLOG SECTION === */}
      <section className="blog-section">
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-date">
                  {blog.date} • {blog.category}
                </p>
                <p className="blog-description">{blog.description}</p>
                <button className="read-more">
                  Read More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
     <section className="community-section">
  <h3>Join Our Eco-Wedding Community</h3>
  <h4>Get the latest tips, trends, and exclusive offers delivered straight to your inbox.</h4>

  <div className="subscribe-row">
    <input type="email" placeholder="Enter your email" className="email-input" />
    <button className="subscribe-btn">Subscribe Now</button>
  </div>
</section>

    </>
  );
}

export default Blogs;
