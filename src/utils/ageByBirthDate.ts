export const ageByBirthDate = (birthDate: Date) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();

  const birthDateYear = birthDate.getFullYear();
  const birthDateMonth = birthDate.getMonth() + 1;
  const birthDateDay = birthDate.getDate();

  let age = currentYear - birthDateYear;

  if (
    currentMonth < birthDateMonth ||
    (currentMonth == birthDateMonth && currentDay < birthDateDay)
  ) {
    age--;
  }

  return age < 0 ? 0 : age;
};
