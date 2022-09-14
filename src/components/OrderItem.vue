<template>
  <div
      class="order"
      @click="$router.push(`/${order.id}`)"
  >
    <order-info
      :order="order"
      :nearestOrder="nearestOrder"
    />
    <nearest-order
      :order="order"
      :nearestOrder="nearestOrder"
    />
  </div>
</template>

<script>
  import OrderInfo from "@/components/OrderInfo";
  import NearestOrder from "@/components/NearestOrder";
  import {getNearestOrder} from "@/utils/getNearestOrder";

  export default {
    components: {
      OrderInfo,
      NearestOrder
    },
    props: {
      order: {
        type: Object,
        required: true
      }
    },
    computed: {
      nearestOrder() {
        return getNearestOrder(this.order.deliveries)
      }
    }
  }
</script>

<style scoped>
  .order {
    margin: 15px 0;
    background-color: #F5F5F5;
    border-radius: 6px;
  }
</style>