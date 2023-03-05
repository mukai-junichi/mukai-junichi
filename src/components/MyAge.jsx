// const BIRTHDAY = {
//   year: 1985,
//   month: 6,
//   date: 2,
// };

// const getAge = (birthday) => {
//   const today = new Date();
//   const thisYearsBirthday = new Date(
//     today.getFullYear(),
//     birthday.month - 1,
//     birthday.date
//   );
//   const age = today.getFullYear() - birthday.year;

//   today < thisYearsBirthday ? age-- : age;

//   return age;
// };

const MyAge = ({year, month, date}) => {
  const today = new Date();
  const thisYearsBirthday = new Date(
    today.getFullYear(),
    month - 1,
    date
  );
  const age = today.getFullYear() - year;

  return today < thisYearsBirthday ? age-1 : age;
};

export default MyAge;
