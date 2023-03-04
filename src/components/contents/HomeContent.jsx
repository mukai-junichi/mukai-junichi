const HomeContent = () => {
  return (
    <>
      <div className="mb-16 flex-grow text-center md:w-1/2 md:pr-16 md:text-left lg:pr-24">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-6xl">
          Hi!
          <br />
          I'm Web Developer.
          <br />
          Web Developer
        </h1>
        <p className="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam beatae
          corporis reiciendis magni quae illum excepturi nesciunt repellendus
          aliquam dicta?
        </p>
        <button className="rounded border-0 bg-green-500 py-2 px-6 text-lg text-white duration-300 hover:bg-green-600">
          Contact
        </button>
      </div>

      <div className="w-5/6 md:w-1/2 lg:max-w-lg">
        <img src="/img/junichi-mukai.png" alt="" />
      </div>
    </>
  );
};

export default HomeContent;
