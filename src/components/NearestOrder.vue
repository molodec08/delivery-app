<template>
  <div class="nearest__wrapper">
    <div class="date-block">
      <div class="mount">{{monthName}}</div>
      <div class="day">{{day}}</div>
    </div>
    <div class="order-info">
      <p>Ближайшая доставка</p>
      <p class="weekday">в {{weekday}} -</p>
      <p class="interval">с {{timeFrom}} до {{timeTo}}</p>
      <p class="address">{{nearestOrder.address}}</p>
    </div>
  </div>
</template>

<script>
  import {getMonthName} from '@/utils/getMonthName'
  import {getDay} from "@/utils/getDay";
  import {getWeekday} from "@/utils/getWeekday";
  export default {
    props: {
      order: {
        type: Object,
        required: true
      },
      nearestOrder: {
        type: Object,
        required: true
      }
    },
    computed: {
      monthName() {
        return getMonthName(this.nearestOrder.date, 'short')
      },
      day() {
        return getDay(this.nearestOrder.date)
      },
      weekday() {
        return getWeekday(this.nearestOrder.date, true)
      },
      timeFrom() {
        return this.nearestOrder.interval?.split('-')[0].trim()
      },
      timeTo() {
        return this.nearestOrder.interval?.split('-')[1].trim()
      },
    },
  }
</script>

<style scoped lang="scss">
  .nearest__wrapper {
    display: flex;
    gap: 20px;
    padding: 25px 18px 18px;
  }

  .date-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 58px;
    text-align: center;
    background: #1E6FB9;
    border-radius: 4px;
    color: #fff;
    line-height: 15px;
  }

  .mount {
    font-weight: 500;
    font-size: 11px;
    &:first-letter {
      text-transform:capitalize;
    }
    margin-bottom: 4px;
  }

  .day {
    font-weight: 700;
    font-size: 20px;
  }

  .order-info {
    padding: 8px 0;
    font-weight: 700;
    font-size: 17px;
    line-height: 120%;
  }

  .weekday {
    color: #1E6FB9;
  }

  .interval {
    margin-top: 10px;
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 12px;
    line-height: 13px;
  }

  .address {
    color: #949494;

    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
  }
</style>