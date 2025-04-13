
import React from 'react';

const Button = ({ children, className = '', href, onClick }) => {
  const buttonClasses = `btn-primary ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
