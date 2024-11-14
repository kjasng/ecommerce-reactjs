function Layout({ children, className }) {
  return (
    <div
      className={
        `w-screen flex justify-center flex-col items-center ` + className
      }
    >
      {children}
    </div>
  );
}

export default Layout;
