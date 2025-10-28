import React from "react";
import "../styles/BlogPre.css";
import mainImg from "../assets/blog1.png"; // replace with your image
import sideImg1 from "../assets/blog2.png";
import sideImg2 from "../assets/blog3.png";
import sideImg3 from "../assets/blog4.png";
import { Router } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="blog-container">
      <div className="blog-main">
        <h1 className="blog-title">Planning Your Eco-Friendly Indian Wedding</h1>

        <p className="blog-meta">
          By <span className="author">Ecovite Team</span> • October 26, 2023 • Eco Tips • 8 min read
        </p>

        <img src={mainImg} alt="Eco Wedding" className="blog-main-image" />

        <div className="blog-content">
          <h2>Why Choose an Eco-Friendly Wedding?</h2>
          <p>
            Eco-friendly weddings minimize waste, reduce carbon footprints, and often save costs by focusing
            on sustainability rather than extravagance. In India, where weddings are vibrant and grand,
            integrating eco-conscious practices helps preserve cultural beauty without harming nature. By
            making small, thoughtful changes, you can honor traditions while creating a greener future.
          </p>

          <p>
            Eco-conscious weddings also foster community and mindfulness by using local vendors, natural
            materials, and minimizing excess. You not only contribute to the environment but also create an
            intentional, heartfelt experience for you and your guests.
          </p>
          <p>
            Planning a wedding is a joyous yet complex journey, especially when you want to honor tradition while caring for the environment. An eco-friendly Indian wedding not only celebrates your love but also respects the planet, ensuring your special day leaves a positive impact. This guide will help you plan a beautiful, sustainable wedding filled with meaningful rituals and conscious choices.
            </p>
            <h2>
                Sustainable Invitation Ideas
            </h2>
            <p>
                Digital invitations are a smart and eco-friendly alternative to traditional paper invites. At Ecovite, we offer beautifully designed templates that help you minimize waste and maximize convenience. Our digital platform allows for easy updates, instant sharing, and RSVP tracking, perfect for today’s connected world. You also avoid the environmental impact of printing, packaging, and postal delivery.
            </p>
            <p>
                What makes Ecovite unique is our blend of modern design and cultural richness. Our templates feature elegant Indian motifs, contemporary layouts, and customizable details to reflect your wedding theme and personality. Whether it’s a Marathi, Punjabi, or Tamil wedding, our digital invitations offer a meaningful and sustainable way to invite your loved ones with style and purpose.
            </p>
            <h2>
                Incorporating Indian Wedding Rituals Mindfully
            </h2>
            <p>
                Indian weddings are rich with rituals that symbolize love, commitment, and prosperity. From the vibrant haldi ceremony to the sacred pheras around the fire, every tradition carries deep emotional and cultural significance. While honoring these customs, couples today are also seeking ways to make their celebrations more sustainable without losing the essence of their heritage.
            </p>
            <img src={mainImg} alt="Eco Wedding" className="blog-main-image" />
<p>
    To keep these rituals meaningful while being eco-conscious, consider using biodegradable materials for decorations, organic flowers instead of synthetic ones, and minimizing the use of plastic. Incorporate eco-friendly diyas (oil lamps), natural rangoli powders, and reusable fabrics for mandap decor. These small, intentional choices not only reduce waste but also enhance the authenticity of the ceremonies, showing that tradition and sustainability can beautifully coexist.
     </p>
<h2>
    Eco-Friendly Decorations and Dress
</h2>
<p>
    Choosing sustainable attire and decorations for your wedding is a meaningful way to honor the earth while celebrating your love. Opt for fabrics like organic cotton, handloom silk, or linen—natural, breathable, and beautiful. Supporting local artisans by wearing handwoven sarees or dupattas dyed with plant-based colors not only preserves traditional crafts but also reduces the environmental impact of your wedding wardrobe.
</p>
<img src={mainImg} alt="Eco Wedding" className="blog-main-image" />

<p>
    When it comes to decor, think reusable and intentional. Use elements like fabric drapes, bamboo structures, clay pots, or lanterns that can be repurposed or rented. Fresh, locally-sourced flowers and foliage not only reduce carbon footprint but add a natural charm to your venue. These mindful choices bring personality to your celebration and reflect your values, making the event more heartfelt and memorable.
</p>
 <section className="comments-section">
      <h3>Comments (3)</h3>

      {/* Comment 1 */}
      <div className="comment">
        <img src="/user1.jpg" alt="User" className="avatar" />
        <div className="comment-content">
          <p className="comment-author">Priya S.</p>
          <p className="comment-date">January 16, 2025</p>
          <p className="comment-text">
            This was such a helpful read! I’ve been looking for sustainable ideas
            that still feel traditional, and this really struck a balance. Can’t
            wait to explore Ecovite’s invitation templates!
          </p>
        </div>
      </div>

      {/* Comment 2 */}
      <div className="comment">
        <img src="/user2.jpg" alt="User" className="avatar" />
        <div className="comment-content">
          <p className="comment-author">Ankit R.</p>
          <p className="comment-date">January 16, 2025</p>
          <p className="comment-text">
            Love the part about incorporating rituals mindfully. We’re planning a
            small wedding next spring and definitely want to reduce plastic and
            use local flowers. Thanks for the inspiration!
          </p>
        </div>
      </div>

      {/* Reply Comment */}
      <div className="comment reply">
        <img src="/team-icon.png" alt="Team" className="avatar" />
        <div className="comment-content">
          <p className="comment-author">Ecovite Team</p>
          <p className="comment-date">Reply to Ankit R. · January 16, 2025</p>
          <p className="comment-text">
            Hi Ankit! So glad to hear that you found the ideas helpful. We’d love
            to be a part of your special day—feel free to explore our customizable,
            eco-friendly invitation templates anytime. Wishing you a beautiful,
            sustainable celebration!
          </p>
        </div>
      </div>

      {/* Leave Comment Form */}
      <div className="leave-comment">
        <h4>Leave Comment</h4>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email (Optional)" />
          </div>
          <textarea placeholder="Your Comment" required></textarea>
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </section>
        </div>
      </div>

      {/* Right Side Section */}
      <aside className="blog-sidebar">
        <h3 className="sidebar-heading">You might also like...</h3>

        <div className="sidebar-card">
          <img src={sideImg1} alt="Wedding Venue" />
          <div className="sidebar-info">
            <p className="sidebar-title">Top 10 Eco-Friendly Wedding Venues in India</p>
            <p className="sidebar-date">March 18, 2025 • Wedding Planning</p>
          </div>
        </div>

        <div className="sidebar-card">
          <img src={sideImg2} alt="Personalized Invitation" />
          <div className="sidebar-info">
            <p className="sidebar-title">How to Personalize Your Wedding Invitation</p>
            <p className="sidebar-date">March 18, 2025 • DIY</p>
          </div>
        </div>

        <div className="sidebar-card">
          <img src={sideImg3} alt="Decor Ideas" />
          <div className="sidebar-info">
            <p className="sidebar-title">Sustainable Wedding Decor Ideas for Every Budget</p>
            <p className="sidebar-date">March 18, 2025 • Eco Tips</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;
