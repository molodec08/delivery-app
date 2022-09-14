<template>
  <div>
    <order-info
        :order="order"
        :nearestOrder="nearestOrder"
    />
    <delivery-list
        :deliveries="order.deliveries"
    />
    <order-buttons />
  </div>
</template>

<script>
  import OrderInfo from "@/components/OrderInfo";
  import DeliveryList from "@/components/DeliveryList";
  import OrderButtons from "@/components/OrderButtons";
  import {getNearestOrder} from "@/utils/getNearestOrder";
  export default {
    components: {
      OrderInfo,
      DeliveryList,
      OrderButtons
    },
    props: {
      order: {
        type: Object,
        required: true
      }
    },
    watch: {
      nearestOrder() {
        return getNearestOrder(this.order.deliveries)
      }
    }
  }
</script>

<style scoped>

</style>