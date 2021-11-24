import React from "react";

const Button = (props) => {
  const { type, className, children, onHit } = props;
  return (
    <div>
      {type === "danger" ? (
        <button
          onClick={onHit}
          type="button"
          className={`btn btn-danger ${className}`}>
          {children}
        </button>
      ) : (
        ""
      )}
      {type === "success" ? (
        <button
          onClick={onHit}
          type="button"
          className={`btn btn-success ${className}`}>
          {children}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Button;
