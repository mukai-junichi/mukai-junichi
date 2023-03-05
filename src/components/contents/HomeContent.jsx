import MyAge from "../MyAge";

const MyBirthday = {
  year: 1985,
  month: 6,
  date: 2,
};

const HomeContent = () => {
  return (
    <>
      <div className="flex text-center md:text-left lg:px-12">
        <div className="w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-5xl">
            I'm Web Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            ご覧いただきありがとうございます！<br></br>向井純一と申します。
          </p>
          <p className="mb-8 leading-relaxed">
            <span> Name: 向井 純一（むかい じゅんいち）</span>
            <br></br>
            Age:
            <MyAge {...MyBirthday} />歳<br></br>
            Address:神奈川県川崎市
          </p>
          <button className="rounded border-0 bg-green-500 py-2 px-6 text-lg text-white duration-300 hover:bg-green-600">
            Contact
          </button>
        </div>

        <div className="w-1/3 lg:max-w-lg">
          <img src="/img/junichi-mukai.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
