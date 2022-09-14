<template>
  <div>
    <h2 class="delivery-header">Доставки</h2>
    <delivery-item
        class="delivery__wrapper"
        v-for="delivery in deliveries"
        :delivery="delivery"
        :key="delivery.id"
    />
  </div>
</template>

<script>

  import DeliveryItem from "@/components/DeliveryItem";
  export default {
    components: {DeliveryItem},
    props: {
      deliveries: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .delivery-header {
    margin-top: 34px;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 17px;
    line-height: 100%;
  }

  .delivery__wrapper:not(:last-child) {
    border-bottom: 1px solid #F5F5F5;
  }
</style>