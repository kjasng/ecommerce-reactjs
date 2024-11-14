function Button({ children, className, onClick, ...props }) {
  return (
    <button
      className={`rounded-xl text-base duration-300 text-primary font-semibold ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
