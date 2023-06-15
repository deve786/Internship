import React from "react";
import "./Article.css"; 
import { useState } from "react";
import { useEffect } from "react";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

const Servicess = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "service"]{
          body, title,mainImage{
                asset ->{
                    _id,
                    url
                },
              },
        }`
      )
      .then((data) => setService(data))
      .catch(console.error);
  }, []);
  return (
    <div className="article">
      {service.map((service) => (
        <>
          <section className="banner">
            <img src="banner-image.jpg" alt="Banner" />
          </section>
          <header>
            <h1>
             {service.title}
            </h1>
            <p className="date">Published: May 30, 2023</p>
          </header>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan, lacus sed suscipit lobortis, lorem enim dapibus mauris,
              quis volutpat sapien quam in ante. Aliquam bibendum risus eget
              dictum facilisis. Morbi mollis fringilla varius. Vestibulum sit
              amet urna vehicula, rhoncus enim vel, lacinia enim. Vestibulum
              interdum, urna ut dapibus consectetur, diam ligula pulvinar
              tellus, eu cursus risus erat id nisl. Sed facilisis tortor non
              odio convallis, eu egestas ligula condimentum. Suspendisse
              potenti. Sed ullamcorper eleifend erat vitae posuere. Sed nec
              metus sed turpis consequat varius. Nullam varius ligula eu dui
              finibus consectetur. Curabitur vestibulum nunc a dui ullamcorper,
              eu posuere velit consequat. Duis sed convallis dui. Aliquam
              tincidunt nunc nec ex pulvinar, sed semper ante iaculis.
            
              In consectetur lobortis nibh, ut imperdiet enim placerat id. Proin
              malesuada est at odio efficitur, ac gravida lacus semper. Duis
              convallis est urna, sed euismod erat iaculis eget. Nulla vel
              consectetur nulla. Mauris id ligula purus. Suspendisse potenti.
              Nunc dignissim felis eu risus dictum tempus. Maecenas nec
              elementum mi. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Etiam sit amet sem ligula.
            
            <blockquote>
              "Digital transformation is not just about technology, it's about
              reimagining the way we do business and deliver value to our
              customers."
            </blockquote>
          
              Vestibulum at sollicitudin est, a vestibulum enim. Aliquam
              accumsan sed lectus ut pharetra. Proin non orci urna. Vivamus
              lacinia, est id vestibulum malesuada, arcu ligula feugiat ante, at
              lacinia dui odio eu tellus. Morbi dignissim lorem ac varius
              cursus. Suspendisse potenti. Donec vel justo non mi convallis
              eleifend a id urna. Proin fermentum tincidunt lacus eget
              scelerisque. Donec vitae facilisis urna, et egestas nisi. Fusce at
              tempus neque. Morbi tincidunt finibus elit, et porttitor nisl
              commodo in. Duis semper tortor a ligula congue, eu fermentum mi
              cursus. In sollicitudin sed tellus eget vestibulum.
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Servicess;
