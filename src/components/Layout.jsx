function Layout({ children, className }) {
  return (
    <div
      className={
        `w-full flex justify-center flex-col items-center ` + className
      }
    >
      {children}
    </div>
  );
}

export default Layout;
