export const getDay = (date) => {
  return new Date(date).toLocaleString('ru', {
    day: '2-digit'
  })
}