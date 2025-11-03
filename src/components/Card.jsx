import React from "react";

export default function Card({ title, img, desc, link, className }) {
  return (
    <div className={`project-card ${className || ""}`}>
      <div className="card-img-wrap">
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} className="card-btn">Katso projekti</a>
    </div>
  );
}



