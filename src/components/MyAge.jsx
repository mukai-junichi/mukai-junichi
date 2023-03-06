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
