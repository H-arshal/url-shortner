import React from 'react';
import '../styles.css';

const productsList = [
  {
    name: 'Resume Analyzer',
    description: 'Analyzes resumes for key information and metrics.',
    githubLink: 'https://github.com/gunjand01/Major-Project/',
    techStack:[ 
      'Machine Learning',
      'Python',
      'React.js',
      'Node.js',
    ]
  },
  {
    name: 'Online Contact Manager',
    description: 'Manages and organizes contacts online securely.',
    githubLink: 'https://github.com/H-arshal/Online-Contact-Manager'
  },
  {
    name: 'Billing Management System',
    description: 'Manages invoices, payments, and financial records.',
    githubLink: 'https://github.com/H-arshal/Billing-Management-System'
  },
  {
    name: 'Google Maps Clone',
    description: 'Replicates basic functionality of Google Maps.',
    githubLink: 'https://github.com/H-arshal/Google_Map_Clone'
  },
  {
    name: 'Digital Clock',
    description: 'Displays current time digitally.',
    githubLink: 'https://github.com/H-arshal/DigiClock'
  },
  {
    name: 'Rock Paper Scissors Game (Command Line)',
    description: 'Classic game playable via the command line interface.',
    githubLink: 'https://github.com/H-arshal/Rock_Paper_Scissor'
  }
];

function Products() {
  return (
    <div className="products">
      <h1>My Products</h1>
      <div className="product-list">
        {productsList.map((product, index) => (
          <div className="product" key={index}>
            <a href={product.githubLink} target="_blank" rel="noopener noreferrer">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
