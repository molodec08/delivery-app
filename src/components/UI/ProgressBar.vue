<template>
  <div class="progress-bar__wrapper">
    <progress
        class="progress-bar"
        :max="deliveries.length"
        :value="countFinishedOrders"
    />
    <div class="progress-info">
      <div class="date">{{startDate}}</div>
      <div class="count-days">осталось {{countDays}} {{daysName}}</div>
      <div class="date">{{endDate}}</div>
    </div>
  </div>
</template>

<script>
  import {getCountDay} from '@/utils/getCountDay'
  import {getDayName} from '@/utils/getDayName'
  export default {
    props: {
      deliveries: {
        type: Array,
        required: true
      }
    },
    computed: {
      countFinishedOrders() {
        let count = 0
        this.deliveries.forEach(delivery => {
          if (new Date(delivery.date) <= new Date()) {
            count++
          }
        })
        return count
      },
      startDate() {
        return new Date(this.deliveries[0]?.date).toLocaleString('ru', {
          day: '2-digit',
          month: 'short'
        })?.slice(0, -1)
      },
      endDate() {
        return new Date(this.deliveries[this.deliveries.length - 1]?.date).toLocaleString('ru', {
          day: '2-digit',
          month: 'short'
        })?.slice(0, -1)
      },
      countDays() {
        return getCountDay(this.deliveries[this.deliveries.length - 1]?.date)
      },
      daysName() {
        return getDayName(this.countDays)
      }
    }
  }
</script>

<style scoped lang="scss">
  .progress-bar__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .progress-bar {
    width: 90%;
  }

  .progress-info {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  .count-days {
    font-weight: 500;
    font-size: 11px;
    line-height: 110%;
  }

  .date {
    color: #9E9E9E;
    font-weight: 400;
    font-size: 11px;
    line-height: 110%;
  }
</style>