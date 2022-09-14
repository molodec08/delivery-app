export const getDayName = (day) => {
  const days = 'дней,день,дня,дня,дня,дней,дней,дней,дней,дней'.split(',')

  return days[
    day % 100 >= 10 && day % 100 <= 19
      ? 0
      : day % 10
  ]
}