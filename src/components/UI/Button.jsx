function Button({ children, className, onClick, ...props }) {
  return (
    <button
      className={`rounded-xl text-base duration-300 text-primary ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
