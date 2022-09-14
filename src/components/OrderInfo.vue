<template>
  <div>
    <div class="order__wrapper">
      <div class="day-info">{{countDays}} {{daysName}}</div>
      <div class="package-info">
        <div class="package-name">{{ order.packageName }}</div>
        <div>{{ order.packageCalories }}</div>
      </div>
    </div>
    <progress-bar
      :deliveries="order.deliveries"
    />
  </div>
</template>

<script>
  import ProgressBar from "@/components/UI/ProgressBar";
  import {getCountDay} from "@/utils/getCountDay";
  import {getDayName} from "@/utils/getDayName";
  import {getNearestOrder} from "@/utils/getNearestOrder";
  export default {
    components: {
      ProgressBar
    },
    props: {
      order: {
        type: Object,
        required: true
      },
    },
    computed: {
      nearestOrder() {
        return getNearestOrder(this.order?.deliveries)
      },
      countDays() {
        return getCountDay(this.nearestOrder.date)
      },
      daysName() {
        return getDayName(this.countDays)
      }
    }
  }
</script>

<style scoped>
  .order__wrapper {
    display: flex;
    justify-content: space-between;
    padding: 25px 18px 18px;
  }

  .day-info {
    display: flex;
    align-items: center;

    font-weight: 700;
    font-size: 35px;
    line-height: 100%;
  }

  .package-info {
    display: flex;
    flex-direction: column;

    font-weight: 700;
  }

  .package-name {
    color: #B1B1B1;
    font-size: 10px;
    line-height: 16px;
    font-weight: 600;
  }
</style>