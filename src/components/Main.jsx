const Main = ({children}) => {
  return (
    <main className="container mx-auto flex flex-col md:flex-row items-center py-40 md:py-1 px-5 min-h-screen ">
      {children}
    </main>
  );
};

export default Main;
