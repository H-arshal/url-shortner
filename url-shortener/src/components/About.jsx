import React from 'react';
import '../styles.css';

function About() {
  return (
        <div className="about">

      <h2>Welcome to our URL Shortener project!</h2>

      <h3>Purpose</h3>
      <p>
        Our URL Shortener provides a simple and efficient way to shorten long URLs into manageable links. Whether you're sharing links on social media, optimizing marketing campaigns, or just tidying up long URLs, our platform is designed to streamline your link management process.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Shorten URLs: Easily shorten any long URL with a click of a button.</li>
        <li>Customize Links: Customize your shortened links with meaningful aliases or keywords.</li>
        <li>Analytics: Track the performance of your links with built-in analytics, including click-through rates and geographic data.</li>
        <li>User Accounts: Register an account to manage your shortened links and access additional features.</li>
        <li>API Integration: Integrate our URL Shortener into your applications or services using our robust API.</li>
      </ul>

      <h3>Technology Stack</h3>
      <p>
        Our URL Shortener is built using modern web technologies:
      </p>
      <ul>
        <li>Frontend: Developed with React.js for a responsive and interactive user interface.</li>
        <li>Backend: Utilizes Node.js and Express for handling URL shortening requests, storing data, and managing user accounts.</li>
        <li>Database: Stores link data in a MongoDB database for scalability and performance.</li>
        {/* <li>Authentication: Implements JSON Web Tokens (JWT) for secure user authentication and session management.</li> */}
      </ul>

      <h3>About Us</h3>
      <p>
       I are <b>Harshal</b>, a passionate developers dedicated to creating tools that simplify everyday tasks. My mission is to provide users with a reliable and user-friendly URL shortening service that enhances their online experience.
      </p>

      <h3>Get Started</h3>
      <p>
        Explore our URL Shortener to start shortening and managing your URLs today! Whether you're a business looking to optimize your marketing links or an individual streamlining your online presence, our platform is here to help.
      </p>

      <p>
        Thank you for visiting our URL Shortener project! We look forward to helping you simplify and enhance your link management needs.
      </p>
        </div>
  );
}

export default About;
