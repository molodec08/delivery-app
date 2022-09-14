export const getCountDay = (data) => {
  const nowDate = new Date()
  const endDate = new Date(data)
  const oneDay = 1000 * 60 * 60 * 24
  const diffInTime = endDate.getTime() - nowDate.getTime();
  return Math.round(diffInTime / oneDay)
}