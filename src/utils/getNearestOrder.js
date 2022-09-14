export const getNearestOrder = (data) => {
  let nearestDate = Infinity
    let nearestOrderId = 0
    const now = new Date()
    data.forEach(delivery => {
      const date = new Date(delivery.date)
      if (date >= now && date < nearestDate) {
        nearestDate = delivery.date
        nearestOrderId = delivery.id
      }
    })

    return data.find(f => f.id === nearestOrderId)
}