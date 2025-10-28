import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Couple from "./Pages/Testimonials";
import Contact from "./Pages/contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy"; 
import Blogs from "./Pages/Blogs";
import Faq from "./Pages/Faq";
import Demo from "./Pages/Demo";
import WeddingInvite from "./Pages/WeddingInvite";
import BlogPreview from "./Pages/BlogPreview";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Error404 from "./Pages/Error404";
import Hero from "./components/Hero";
import Templates from "./components/Templates";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import About from "./Pages/About"; // import the About page
import ChoosePlan from "./components/ChoosePlan";
import Refer from "./components/Refer";
import FAQ from "./components/FAQ";
import Caso from "./components/Caso";
import InvitationBanner from "./components/InvitationBanner";
 import Aboutus from "./components/Aboutus";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <Router>
      <Banner/>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
           
              <Hero />
              <Templates />
              <HowItWorks />
<Testimonial/>
        <InvitationBanner/>    
                <Gallery/>
              <ChoosePlan/>
              <Refer/>
              <FAQ/>
              
            
              < Aboutus/>
           
              
            
            </>
          }
        />

        {/* About Page */}
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/demo" element={<Demo />}/>
        <Route path="/weddinginvite" element={<WeddingInvite/>}/>
        
         <Route path="/privacypolicy" element={<PrivacyPolicy />}/>
        <Route path="/couple" element={<Couple />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error404" element={<Error404/>}/>
        <Route path="/blogpreview" element={<BlogPreview/>}/>
        
      </Routes>

      {/*contactpages*/}
      
      <Footer />
    </Router>
  );
}

export default App;
