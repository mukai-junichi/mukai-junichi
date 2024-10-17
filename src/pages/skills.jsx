import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const skillTableData = [
  {
    category: "言語",
    skills: [
      { name: "HTML", experience: "2年", level: "業務で使用できる" },
      { name: "CSS・Sass", experience: "2年", level: "業務で使用できる" },
      { name: "JavaScript", experience: "2年", level: "業務で使用できる" },
      { name: "TypeScript", experience: "0.5年", level: "簡単なプログラミングができる" },
      { name: "PHP", experience: "2年", level: "業務で使用できる" },
      { name: "Ruby", experience: "0.5年", level: "簡単なプログラミングができる" },
    ],
  },
  {
    category: "フレームワーク",
    skills: [
      { name: "React", experience: "1年", level: "業務で使用できる" },
      { name: "Vue.js", experience: "0.5年", level: "簡単なプログラミングができる" },
      { name: "Laravel", experience: "1年", level: "業務で使用できる" },
      { name: "Symfony", experience: "1年", level: "簡単なプログラミングができる" },
      { name: "Ruby on Rails", experience: "0.5年", level: "簡単なプログラミングができる" },
    ],
  },
  {
    category: "データベース",
    skills: [
      { name: "MySQL", experience: "2年", level: "業務で使用できる" },
    ],
  },
  {
    category: "その他",
    skills: [
      { name: "AWS", experience: "0.5年", level: "簡単な操作ができる" },
      { name: "Docker", experience: "1年", level: "業務で使用できる" },
      { name: "WordPress", experience: "1.5年", level: "業務で使用できる" },
    ],
  },
];

const CodeIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
      fill="currentColor"
    />
    <path
      d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
      fill="currentColor"
    />
    <path
      d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
      fill="currentColor"
    />
  </svg>
);

export default function SkillsTable() {
  return (
    <>
      <Head>
        <title>Skills | Junichi Mukai&apos;s Portfolio</title>
      </Head>

      <Header />
      <Main>
        <div className="my-6 flex flex-col items-center justify-center lg:px-12">
          <h1 className="sm:3xl my-8 text-center text-2xl font-medium text-gray-900">
            My Skills
          </h1>
          <div className="mx-6 mb-10 w-full">
            <h2 className="mb-12 text-center text-xl font-medium">
              スキルレベル
            </h2>
            {skillTableData.map((category, index) => (
              <div key={index} className="mb-12 w-full">
                <div className="my-4 flex flex-row items-center border-b-2 border-teal-600 text-xl text-teal-600">
                  {CodeIcon}
                  <h2 className="ml-2">{category.category}</h2>
                </div>
                <table className="table-auto w-full border-collapse shadow">
                  <thead>
                    <tr className="bg-teal-500 text-white">
                      <th className="border border-gray-300 px-4 py-2">スキル</th>
                      <th className="border border-gray-300 px-4 py-2">経験年数</th>
                      <th className="border border-gray-300 px-4 py-2">レベル</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.skills.map((skill, skillIndex) => (
                      <tr
                        key={skillIndex}
                        className={skillIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                      >
                        <td className="border border-gray-300 px-4 py-2">{skill.name}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{skill.experience}</td>
                        <td className="border border-gray-300 px-4 py-2">{skill.level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
