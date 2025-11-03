import React from "react";

export default function SectionProjectDetail({ title, desc, img }) {
  return (
    <section
      className="project-detail"
      style={{ padding: "4rem 3rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h1>{title}</h1>
      <p>{desc}</p>

      {img && (
        <div
          style={{
            maxWidth: "800px",
            margin: "2rem auto 0",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
          }}
        >
          <img
            src={img}
            alt={title}
            style={{
              width: "100%",
              display: "block",
              objectFit: "cover",
              opacity: 1,
              transition: "none"
            }}
          />
        </div>
      )}
    </section>
  );
}
