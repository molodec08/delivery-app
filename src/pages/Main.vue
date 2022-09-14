<template>
  <div class="page">
    <h1 class="header">Мои заказы <span>{{countOrders}}</span></h1>
    <order-list
      :orders="orders"
    />
  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";
  import OrderList from "@/components/OrderList";

  export default {
    components: {
      OrderList
    },
    created() {
      if (!this.orders.length) {
        this.fetchOrders();
      }
    },
    methods: {
      ...mapActions({
        fetchOrders: 'orders/fetchOrders'
      }),
    },
    computed: {
      ...mapState({
        orders: state => state.orders.orders,
        countOrders: state => state.orders.countOrders,
      }),
    },
  }
</script>

<style scoped lang="scss">
  .header {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.3px;

    span {
      font-family: 'SF Pro Display', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 16px;

      color: #929292;
    }
  }
</style>