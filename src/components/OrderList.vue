<template>
  <div v-if="orders.length > 0">
    <order-item
        v-for="order in orders"
        :order="order"
        :key="order.id"
    />
  </div>
  <h2 v-else>
    Список заказов пуст
  </h2>
</template>

<script>
  import OrderItem from "@/components/OrderItem";

  export default {
    components: {OrderItem},
    props: {
      orders: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>