// import "./Navbar.css";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import client from "../client";

// const Navbar = () => {
//   const [service, setService] = useState([]);
//   const [industries, setIndustries] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const query1 = `*[_type == "service"] { title, slug }`;
//       const result1 = await client.fetch(query1);
//       setService(result1);
//       const query2 = `*[_type == "industry"] { title, slug }`;
//       const result2 = await client.fetch(query2);
//       setIndustries(result2);
//     };

//     fetchData();
//   }, []);

//   return (
//     <nav className="navbar">
//       <ul className="navbar-items navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a href="/" className="active">
//             <img src="logoagc.png" alt="Logo" className="logo-image" />
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a href="#" className="dropbtn">
//             Industries
//           </a>
//           <div className="dropdown-content">
//             <div className="grid-container">
//               {industries.map(
//                 (industry, index) =>
//                   index % 5 === 0 && (
//                     <div key={industry.slug.current} className="grid-row">
//                       {industries.slice(index, index + 5).map((item) => (
//                         <a key={item.slug.current} href={`/${item.slug.current}`}>
//                           {item.title}
//                         </a>
//                       ))}
//                     </div>
//                   )
//               )}
//             </div>
//           </div>
//         </li>

//         <li className="nav-item dropdown">
//           <a href="#" className="dropbtn">
//             Services
//           </a>

//           <div className="dropdown-content">
//             {service.map((service) => (
//               <a key={service.slug.current} href={`/${service.slug.current}`}>
//                 {service.title}
//               </a>
//             ))}
//           </div>
//         </li>

//         <li className="nav-item dropdown">
//           <a href="#" className="dropbtn">
//             Carrier
//           </a>
//           <div className="dropdown-content">
//             <a href="/career">Home</a>
//             <a href="/courses">Students</a>
//             <a href="/job">Jobs</a>
//           </div>
//         </li>
//         <li className="nav-item">
//           <a href="/about">About</a>
//         </li>
//         <li className="nav-item">
//           <a href="#">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../createClient";
import "./Navbar.css";

const Navbar = () => {
  const [service, setService] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const query1 = `*[_type == "service"] { title, slug }`;
      const result1 = await client.fetch(query1);
      setService(result1);
      const query2 = `*[_type == "industry"] { title, slug }`;
      const result2 = await client.fetch(query2);
      setIndustries(result2);
    };

    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`toggle-icon ${isMenuOpen ? "open" : ""}`} />
      </div>
      <ul className={`navbar-items ${isMenuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="/" className="active">
            <img src="logoagc.png" alt="Logo" className="logo-image" />
          </a>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">
            Industries
          </a>
          <div className="dropdown-content">
            <div className="grid-container">
              {industries.map(
                (industry, index) =>
                  index % 5 === 0 && (
                    <div key={industry.slug.current} className="grid-row">
                      {industries.slice(index, index + 5).map((item) => (
                        <a key={item.slug.current} href={`/${item.slug.current}`}>
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )
              )}
            </div>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">
            Services
          </a>

          <div className="dropdown-content">
            {service.map((service) => (
              <a key={service.slug.current} href={`/${service.slug.current}`}>
                {service.title}
              </a>
            ))}
          </div>
        </li>

        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">
            Career
          </a>
          <div className="dropdown-content">
            <a href="/career">Home</a>
            <a href="/courses">Students</a>
            <a href="/job">Jobs</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
