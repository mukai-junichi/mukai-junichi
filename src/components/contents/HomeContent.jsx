import MyAge from "../MyAge";

const MyBirthday = {
  year: 1985,
  month: 6,
  date: 2,
};

const HomeContent = () => {
  return (
    <>
      <div className="flex flex-col px-2 md:w-1/2 lg:max-w-lg">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-5xl text-center md:text-left">
          I'm
          <br></br>
          Web Developer.
          <br></br>
          Web Designer.
        </h1>
        <p className="mb-8 leading-relaxed">
          ご覧いただきありがとうございます！<br></br>向井純一と申します。
        </p>
        <button className="mb-8 md:mb-0 mx-auto w-fit rounded border-0 bg-green-500 py-2 px-6 text-lg text-white duration-300 hover:bg-green-600">
          Contact
        </button>
      </div>

      <div className="flex flex-col items-center md:w-1/2 lg:max-w-lg">
        <img className="mx-auto w-3/4" src="/img/junichi-mukai.png" alt="" />
        <p className="mt-2 leading-relaxed">
          年齢：
          <MyAge {...MyBirthday} />歳<br></br>
          住所：神奈川県川崎市
        </p>
      </div>
    </>
  );
};

export default HomeContent;
