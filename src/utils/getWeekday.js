export const getWeekday = (date, isIncline) => {
  let weekDayName = new Date(date).toLocaleString('ru', {
    weekday: 'long'
  })
  if (isIncline && ['среда','пятница','суббота'].includes(weekDayName)) {
    weekDayName = weekDayName.slice(0, -1) + 'у'
  }
  return weekDayName
}