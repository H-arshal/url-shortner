import React from 'react';
import '../styles.css';

function Techstack() {
  return (
    <div className="techstack">
      <h2>Technology Stack</h2>

      <h3>Frontend</h3>
      <ul>
        <li>
          React: A JavaScript library for building user interfaces. React is used for creating reusable UI components and managing the application state efficiently.
        </li>
        <li>
          Axios: A promise-based HTTP client for making AJAX requests. Axios is commonly used in React applications to communicate with backend APIs.
        </li>
        <li>
          CSS (styles.css): Cascading Style Sheets (CSS) is used for styling the frontend components.
        </li>
        <li>
          FontAwesome Icons: FontAwesome provides a library of scalable vector icons that can be easily customized using CSS. Icons from FontAwesome are used in your project for visual elements like the link icon and copy button.
        </li>
      </ul>

      <h3>Backend</h3>
      <ul>
        <li>
          Node.js: A JavaScript runtime environment that allows you to run JavaScript on the server-side. Node.js is the foundation for building scalable server applications in JavaScript.
        </li>
        <li>
          Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. Express.js is used in your project to handle HTTP requests, define routes, and manage middleware.
        </li>
        <li>
          MongoDB: A NoSQL database that stores data in flexible, JSON-like documents. MongoDB is used to store the mapping between long URLs and their corresponding short URLs. Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js, is used to interact with MongoDB in a schema-based manner.
        </li>
        <li>
          Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js. Mongoose simplifies interactions with MongoDB by providing a straightforward schema-based solution to model your application data.
        </li>
        <li>
          cors: A Node.js package for handling Cross-Origin Resource Sharing (CORS) which enables the frontend to make requests to the backend API from a different origin (e.g., different domain, port, or protocol).
        </li>
      </ul>

      <h3>Additional Tools and Libraries</h3>
      <ul>
        <li>
          npm: A package manager for Node.js, used for installing and managing project dependencies, scripts, and configurations.
        </li>
        <li>
          Git: A version control system used for tracking changes in source code during software development. Git enables collaboration, code review, and management of different versions of the project.
        </li>
        <li>
          VS Code (Visual Studio Code): A popular code editor that provides built-in support for JavaScript, React, and Node.js development. It offers features such as syntax highlighting, code completion, and debugging.
        </li>
      </ul>

      <h3>Workflow and Deployment</h3>
      <ul>
        <li>
          Local Development: Typically, developers would run the frontend and backend servers locally during development using tools like npm start to start the React development server and node server.js (or similar) to start the Express.js server.
        </li>
        <li>
          Deployment: The application would be deployed to a cloud platform such as AWS (Amazon Web Services), Heroku, or similar. Deployment involves configuring environments, setting up databases, and managing server instances to make the application accessible over the internet.
        </li>
      </ul>

      <h3>Summary</h3>
      <p>
        Your project involves a modern tech stack where React handles the frontend user interface, Axios facilitates communication with the backend API built using Node.js and Express.js. Data is stored and managed in MongoDB with the help of Mongoose for schema-based interactions. This setup ensures a scalable, efficient, and responsive application suitable for managing URL shortening and redirection.
      </p>
    </div>
  );
}

export default Techstack;
