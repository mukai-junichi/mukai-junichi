export type BirthDate = { year: number; month: number; date: number };

export function calculateAge(birth: BirthDate, now: Date = new Date()): number {
  const { year, month, date } = birth;
  let age = now.getFullYear() - year;
  const passed =
    now.getMonth() + 1 > month ||
    (now.getMonth() + 1 === month && now.getDate() >= date);
  if (!passed) age -= 1;
  return age;
}
