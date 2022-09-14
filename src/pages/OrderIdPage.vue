<template>
  <div class="page">
    <a
        @click="$router.go(-1)"
        class="button-back"
    >
      Назад
    </a>
    <div v-if="loading">Идёт загрузка...</div>
    <div v-else>
      <order-info
          :order="order"
      />
      <delivery-list
          :deliveries="order.deliveries"
      />
      <order-buttons
          :id="order.id"
      />
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";
  import OrderInfo from "@/components/OrderInfo";
  import DeliveryList from "@/components/DeliveryList";
  import OrderButtons from "@/components/OrderButtons";

  export default {
    components: {
      OrderInfo,
      DeliveryList,
      OrderButtons
    },
    created() {
      this.fetchOrderId(this.$route.params.id)
    },
    methods: {
      ...mapActions({
        fetchOrderId: 'orders/fetchOrderId'
      }),
    },
    computed: {
      ...mapState({
        order: state => state.orders.order,
        loading: state => state.orders.loading,
      }),
    },
  }
</script>

<style scoped>
  .button-back {
    color: #1E6FB9;
  }
</style>