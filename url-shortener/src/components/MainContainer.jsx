// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles.css';

// function MainContainer() {
//   const [longUrl, setLongUrl] = useState('');
//   const [shortUrl, setShortUrl] = useState('');
//   const [copied, setCopied] = useState(false);
//   const [loading, setLoading] = useState(false); // State to manage loading state

//   const handleShortenUrl = () => {
//     if (!isValidUrl(longUrl)) {
//       alert('Enter a valid URL');
//       return;
//     }

//     setLoading(true); // Set loading state before API call

//     axios.post('http://localhost:5000/api/create-short-url', { longurl: longUrl })
//       .then(response => {
//         setLoading(false); // Disable loading state after API response
//         if (response.data.status === 'ok') {
//           setShortUrl(`http://localhost:5000/${response.data.shortUrlId}`);
//         }
//       })
//       .catch(error => {
//         setLoading(false); // Disable loading state if there's an error
//         console.error('Error creating short URL:', error);
//         alert('Something went wrong');
//       });
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(shortUrl);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 4000);
//   };

//   const isValidUrl = (url) => {
//     // Basic URL validation regex (starts with http:// or https://)
//     return /^(http:\/\/|https:\/\/)/.test(url);
//   };

//   return (
//     <div className="main-container">
//       <div>
//         <div className="prd">
//           <div className="sub-container">
//             <p><i className="fa-solid fa-link"></i> Short URL</p>
//           </div>
//         </div>
//         <hr />
//         <div className="action">
//           <div className="short-url">
//             <h1>Shorten a long link</h1>
//             <label htmlFor="longurl">Paste a long URL</label>
//             <input
//               type="text"
//               id="longurl"
//               placeholder="Example: https://google.com/"
//               value={longUrl}
//               onChange={(e) => setLongUrl(e.target.value)}
//               className="infoPlaceholder"
//             />
//             <button className="btn" onClick={handleShortenUrl} disabled={loading}>
//               {loading ? 'Loading...' : 'Enter'}
//             </button>
//           </div>
//         </div>
//       </div>
//       {shortUrl && (
//         <div className="result">
//           <p id="short-url" onClick={() => window.open(shortUrl, '_blank')}>{shortUrl}</p>
//           <i className="fa-solid fa-copy copy-btn" onClick={handleCopy}></i>
//         </div>
//       )}
//       {copied && <h3 className="h3 show">Copied</h3>}
//     </div>
//   );
// }

// export default MainContainer;

import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

function MainContainer() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

  const handleShortenUrl = () => {
    if (!isValidUrl(longUrl)) {
      alert('Enter a valid URL');
      return;
    }

    setLoading(true);

    axios.post(`${apiBaseUrl}/api/create-short-url`, { longurl: longUrl })
      .then(response => {
        setLoading(false);
        if (response.data.status === 'ok') {
          setShortUrl(`${apiBaseUrl}/${response.data.shortUrlId}`);
        }
      })
      .catch(error => {
        setLoading(false);
        console.error('Error creating short URL:', error);
        alert('Something went wrong');
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  const isValidUrl = (url) => {
    return /^(http:\/\/|https:\/\/)/.test(url);
  };

  return (
    <div className="main-container">
      <div>
        <div className="prd">
          <div className="sub-container">
            <p><i className="fa-solid fa-link"></i> Short URL</p>
          </div>
        </div>
        <hr />
        <div className="action">
          <div className="short-url">
            <h1>Shorten a long link</h1>
            <label htmlFor="longurl">Paste a long URL</label>
            <input
              type="text"
              id="longurl"
              placeholder="Example: https://google.com/"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="infoPlaceholder"
            />
            <button className="btn" onClick={handleShortenUrl} disabled={loading}>
              {loading ? 'Loading...' : 'Enter'}
            </button>
          </div>
        </div>
      </div>
      {shortUrl && (
        <div className="result">
          <p id="short-url" onClick={() => window.open(shortUrl, '_blank')}>{shortUrl}</p>
          <i className="fa-solid fa-copy copy-btn" onClick={handleCopy}></i>
        </div>
      )}
      {copied && <h3 className="h3 show">Copied</h3>}
    </div>
  );
}

export default MainContainer;
