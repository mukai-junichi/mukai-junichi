const Main = ({children}) => {
  return (
    <main className="container mx-auto flex flex-col md:flex-row items-center pt-32 md:pt-4 px-5 min-h-screen ">
      {children}
    </main>
  );
};

export default Main;
