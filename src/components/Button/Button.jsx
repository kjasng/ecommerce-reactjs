function Button({ children, className, onClick, ...props }) {
  return (
    <button
      className={`px-4 py-1 rounded-xl text-base duration-300 text-primary font-semibold ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
