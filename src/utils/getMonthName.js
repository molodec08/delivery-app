export const getMonthName = (date, format) => {
  const month = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')
  let monthName = ''
  if (format === 'short') {
    monthName = new Date(date).toLocaleString('ru', {
      month: format
    }).slice(0, -1)
  }
  if (format === 'long') {
    monthName = month[new Date(date).getMonth()]
  }
  return monthName
}