<template>
  <div class="buttons__wrapper">
    <div
        class="button-block"
        @click="duplicate"
    >
      <div>Дублировать заказ</div>
      <svg-icon
          name="duplicateIcon"
      />
    </div>
    <div
        class="button-block"
        @click="deleted"
    >
      <div>Удалить заказ</div>
      <svg-icon
          name="deleteIcon"
      />
    </div>
  </div>
</template>

<script>
  import SvgIcon from "@/components/UI/SvgIcon";
  import {mapActions, mapState} from "vuex";
  import _ from 'lodash'
  export default {
    components: {
      SvgIcon
    },
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    computed: {
      ...mapState({
        orders: state => state.orders.orders,
      }),
    },
    methods: {
      ...mapActions({
        duplicateOrder: 'orders/duplicateOrder',
        deletedOrder: 'orders/deletedOrder'
      }),
      duplicate() {
        const newOrder = _.cloneDeep(this.orders.find(order => order.id === this.id))
        newOrder.id = Date.now()
        this.duplicateOrder(newOrder).then((data) => {
          this.$router.push(`/${data.id}`)
        })
      },
      deleted() {
        this.deletedOrder(this.id).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .buttons__wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 54px;
    background: #F5F5F5;
    border-radius: 10px;

    .button-block:not(:last-child) {
      border-bottom: 1px solid #D6D6D6;
    }
  }

  .button-block {
    display: flex;
    justify-content: space-between;
    padding: 15px 17px;
    color: #3F3F3F;

    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
  }
</style>