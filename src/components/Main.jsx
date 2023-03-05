const Main = ({children}) => {
  return (
    <main className="container mx-auto flex flex-col md:flex-row items-center justify-center pt-32 px-5 pb-10 min-h-screen ">
      {children}
    </main>
  );
};

export default Main;
