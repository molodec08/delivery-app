<template>
  <div class="delivery-item__wrapper">
    <div class="info-block">
      <svg-icon
          name="deliveryImg"
      />
      <div>{{day}} {{monthName}}, {{weekday}}</div>
    </div>
    <div class="info-block">
      <div>{{delivery.interval}}</div>
      <svg-icon
          name="Arrow"
      />
    </div>
  </div>
</template>

<script>
  import SvgIcon from "@/components/UI/SvgIcon";
  import {getMonthName} from "@/utils/getMonthName";
  import {getDay} from "@/utils/getDay";
  import {getWeekday} from "@/utils/getWeekday";
  export default {
    props: {
      delivery: {
        type: Object,
        required: true
      }
    },
    components: {
      SvgIcon
    },
    computed: {
      monthName() {
        return getMonthName(this.delivery.date, 'long')
      },
      day() {
        return getDay(this.delivery.date)
      },
      weekday() {
        return getWeekday(this.delivery.date, false)
      },
    }
  }
</script>

<style scoped>
  .delivery-item__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;

    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
  }

  .svg-icon--deliveryImg {
    margin-right: 12px;
    width: 30px;
    height: 42px;
  }

  .svg-icon--Arrow {
    margin-left: 30px;
    width: 14px;
    height: 18px;
  }

  .info-block {
    display: flex;
    align-items: center;
  }
</style>