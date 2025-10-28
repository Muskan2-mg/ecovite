import React from "react";
import user1 from "../assets/couple1.png";
import { Link } from "react-router-dom";
import aboutImage from "../assets/about.png"; 
import "../styles/PrivacyPolicy.css"; 

const PrivacyPolicy = () => {
  return (
     

     <div className="about-page">
          {/* Hero Image */}
          <div className="about-hero">
            <img src={aboutImage} alt="About Ecovite" />
          </div>

    <div className="privacy-wrapper">
      <div className="privacy-header">
        <h2>Privacy Policy</h2>
        <p>
          Welcome to Ecovite your destination for beautifully customizable
          digital wedding templates. We’re honored to be part of your
          celebration and are committed to protecting the personal information
          you entrust to us. This Privacy Policy outlines what information we
          collect, how we use it, how we protect it, and the rights you have in
          relation to it. Please take a moment to read through it carefully.
        </p>
      </div>

      <div className="privacy-body">
        {/* Left Sidebar */}
        <aside className="privacy-sidebar">
          <button>What Personal Information Do We Collect?</button>
          <button>Why Do We Collect Personal Information?</button>
          <button>How Do We Share Your Personal Information?</button>
          <button>Where Do We Store and Process Your Information?</button>
          <button>Users-of-Users Information (Guests & RSVPs)</button>
          <button>Cookies and Third-Party Technologies</button>
          <button>Communications from Ecovite</button>
          <button>Your Rights</button>
          <button>Questions and Complaints</button>
          <button>Data Retention</button>
          <button>Security</button>
          <button>Third-Party Websites</button>
          <button>Job Applications</button>
          <button>Public Forums and User Content</button>
          <button>Updates and Interpretation</button>
          <button>Contacting Us</button>
          <button>Additional Information for Indian Residents</button>
        </aside>

        {/* Right Content */}
        <main className="privacy-main">
          <section className="privacy-section">
            <h3>1. What Personal Information Do We Collect?</h3>
            <h4>a. Information You Provide Directly:</h4>
            <ul>
              <li>Account details: Name, email address, phone number, password</li>
              <li>Payment & billing information: Name on card, billing address, etc.</li>
              <li>Wedding/event information: Couple names, wedding date, venue</li>
              <li>Photos & content: Gallery uploads, text input, personalized messages</li>
            </ul>

            <h4>b. Information Collected Automatically:</h4>
            <ul>
              <li>Device and usage data (IP, browser type, device, time zone)</li>
              <li>Cookies & tracking technologies</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>2. Why Do We Collect Personal Information?</h3>
            <ul>
              <li>To deliver a customized and smooth user experience</li>
              <li>To create, host, and customize wedding websites</li>
              <li>To save your preferences and content for easy access</li>
              <li>To facilitate RSVP tracking and guest management</li>
              <li>To provide customer support</li>
              <li>To send important notifications</li>
              <li>To analyze performance and improve services</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>3. How Do We Share Your Personal Information?</h3>
            <p>We do not sell or rent your data. We only share it with:</p>
            <ul>
              <li>Service providers (payment gateways, cloud storage, email)</li>
              <li>Legal authorities (if required by law)</li>
              <li>Business transfers (merger, acquisition, or asset sale)</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>4. Where Do We Store and Process Your Information?</h3>
            <ul>
              <li>Cloud-based secure servers (AWS, etc.)</li>
              <li>Data encrypted & backed up regularly</li>
              <li>Access limited to authorized staff only</li>
              <li>Compliance with data protection regulations</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>5. Users-of-Users’ Information (Guests & RSVPs)</h3>
            <ul>
              <li>Stored securely under your account</li>
              <li>Not used for marketing or external purposes</li>
              <li>Your responsibility to manage & share responsibly</li>
            </ul>
          </section>

         
          
          
         
          
          <section className="privacy-section">
            <h3>6. Cookies and Third-Party Technologies</h3>
            <ul>
              <li>Keep you logged in</li>
              <li>Remember preferences and design choices</li>
              <li>Help us analyze usage patterns</li>
            </ul>
          </section>
          <section className="privacy-section">
            <h3>7. Communications from Ecovite</h3>
            <p>We believe in keeping our communication thoughtful, relevant, and never overwhelming. As part of your journey with Ecovite, you may hear from us through the following channels:</p>
            <h1>a. Email</h1>
            <p>We’ll send you important information such as</p>
            <ul>
              <li>Account creation and confirmation messages</li>
              <li>Template updates or RSVP notification</li>
              <li>Feature tips, reminders, or support responses</li>
              <li>Occasional inspiration, design ideas, or promotional content (you can unsubscribe at any time)</li> </ul>
           <h1>b. SMS</h1>
      <p>For time-sensitive updates, such as:</p>
           <ul>
            <li>Login verifications or OTPs</li>
<li>RSVP status alerts (if enabled)</li>
<li>
Payment confirmations</li>
           </ul>
           <h1>c. WhatsApp</h1>
           <p>If you opt in, we may also reach out via WhatsApp for:
Personalized assistance or reminders related to your event
Quick responses to your support queries
Design tips, content upload follow-ups, or RSVP tracking help
Occasional curated inspiration or seasonal updates</p>
          </section>
          <section className="privacy-section">
            <h3>8. Your Rights</h3>
            <p>As a user of Ecovite, you have full control over your personal information. In line with Indian data protection laws, you have the right to:</p>
            <p>At Ecovite, we respect and uphold your right to control your personal information. As an Indian user, you are protected under the Information Technology Act, 2000 and related data protection rules.</p>
            <ul>
              Access your data: Request what information we hold about you.
Correct your data: Update or fix any inaccurate details.
Withdraw consent: Opt out of emails, WhatsApp, or any other optional communication at any time.
Delete your account: Ask us to erase all your data permanently.
Restrict processing: Pause how your data is used while we resolve any concerns.
Get a copy: Receive your data in a downloadable format.
File a complaint: Contact us or the authorities if you believe your privacy rights were violated.
            </ul>
            <h1>Grievance Officer (India)</h1>
            <p>In accordance with Indian IT Rules:Name: [Insert Name]Email: [Insert grievance email]Response Time: Within 15 working days
To exercise any of these rights, email us at [insert support email]. We’ll respond within 7 working days.</p>
          </section>
          <section className="privacy-section">
            <h3>9. Questions and Complaints</h3>
           <p>If you have any concerns about how we collect or use your data, we encourage you to contact us first. We aim to resolve all issues quickly and respectfully.
If you're unsatisfied with our response, you may contact the Data Protection Authority in your region.</p>
          </section>
          <section className="privacy-section">
            <h3>10. Data Retention</h3>
            <p>At Ecovite, we retain your personal information only as long as necessary to serve you, support your event, and meet our legal or operational requirements.</p>
            <h1>How long do we keep your data?</h1>
            <ul>
              <li>Keep you logged in</li>
              <li>Remember preferences and design choices</li>
              <li>Help us analyze usage patterns</li>
            </ul>
          </section>
          <section className="privacy-section">
            <h3>11. Security</h3>
            <p>At Ecovite, protecting your personal information is a top priority. We use SSL encryption (HTTPS) to keep your data secure during transfers, and sensitive details like passwords are stored using industry-standard encryption methods.
Our systems are protected by firewalls, access control, and regular security audits to detect and prevent vulnerabilities. Only authorized team members can access your data when absolutely necessary, such as for technical support.
Payments are handled securely through PCI-compliant gateways like Razorpay or Stripe—your financial information is never stored on our servers. We also perform automated backups to prevent data loss.
You can help keep your account secure by using a strong password, keeping login info private, and logging out of shared devices.
Though no system is 100% immune, we take every possible step to ensure your information is safe, and we will notify you promptly of any security concerns.</p>
          </section>
          <section className="privacy-section">
            <h3>12. Third-Party Websites</h3>
            <p>Ecovite may include links or integrations with third-party websites and services to enhance your experience—such as:</p>
            <ul>
              <li>Payment gateways (e.g., Razorpay, Stripe, etc.)



</li>
              <li>Map services (e.g., Google Maps for venue directions)</li>
              <li>Social sharing tools (e.g., WhatsApp or Instagram links)</li>
              <li>Fonts and design elements from providers like Google Fonts or Canva</li>
              <li>Vendor listings or resources you may explore from your dashboard</li>
            </ul>
            <h1>While we carefully select trusted partners, please note:</h1>
            <ul>
              <li>We do not control the content or data practices of these third-party websites.</li>
<li>Their collection and use of your data are governed by their own privacy policies, not ours.</li>
<li>We encourage you to read their privacy policies before submitting any personal information.</li></ul>
          </section>
          <section className="privacy-section">
            <h3>13. Job Applications</h3>
            <p>If you apply for a job at Ecovite, we collect your resume, contact information, and optional cover letter or portfolio. This data is used solely for recruitment purposes and deleted after the hiring process unless you agree to remain in our talent pool.</p>
          </section>
          <section className="privacy-section">
            <h3>14. Public Forums and User Content</h3>
            <p>At Ecovite, we love celebrating your love stories and creativity. Sometimes, you might share content with us—like a beautiful gallery, a heartfelt testimonial, or even a glowing review. Here’s how we handle that:</p>
            <h1>What This Includes:</h1>
            <p>Sharing your testimonial or feedback on our website or social media
Featuring your wedding website design or photos as inspiration for other couples
Publishing user-submitted tips or stories in our blog or newsletters</p>
          </section>

          <section className="privacy-section">
            <h3>14. Public Forums and User Content</h3>
            <p>Testimonials or stories shared publicly on our site or social media may include your name or photos—only with your explicit consent. You may request removal of any published content at any time.</p>
          </section>
          <section className="privacy-section">
            <h3>15. Updates and Interpretation</h3>
           <p>We may revise this policy occasionally for clarity, compliance, or new features. Updates will appear here with the effective date at the top. If changes are significant, we’ll notify you via email or in-app message.
By continuing to use Ecovite, you accept the terms of the latest Privacy Policy.</p>
             
          </section>

          <section className="privacy-section">
            <h3>16. Additional Information for Indian Residents</h3>
            <p>As an Indian-based service (or serving Indian users), we follow applicable local data protection rules, including:</p>
            <ul>
              <li>The Information Technology Act, 2000 and its associated rules
Your right to withdraw consent at any time
The right to lodge complaints with Indian consumer protection or cybercrime authorities

</li>
              <li>Remember preferences and design choices</li>
              <li>Help us analyze usage patterns</li>
            </ul>
            <p>All data handling within India is governed by Indian law and subject to Indian jurisdiction.</p>
          </section>
        </main>
      </div>
    </div>



 </div>
  );
};

export default PrivacyPolicy;
