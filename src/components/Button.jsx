import React from "react";

const Button = ({ children, onClick, variant = "primary", type = "button" }) => {
  // Valitaan tyyli propin perusteella (primary, outline, tms.)
  const baseClass = "btn";
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "outline"
      ? "btn-outline"
      : "";

  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

