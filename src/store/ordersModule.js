import axios from "axios";

export const ordersModule = {
  state: () => ({
    orders: [],
    order: {},
    clientId: 1,
    countOrders: 0,
    loading: false,
  }),
  getters: {
    orders(state) {
      return state.orders
    },
    order(state) {
      return state.order
    }
  },
  mutations: {
    setClientId(state, clientId) {
      state.clientId = clientId;
    },
    setOrders(state, orders) {
      state.orders = orders;
    },
    setOrder(state, order) {
      state.order = order;
    },
    setCountOrders(state, count) {
      state.countOrders = count;
    },
    setLoading(state, bool) {
      state.loading = bool
    },
  },
  actions: {
    async fetchOrders({state, commit}) {
      try {
        commit('setLoading', true);
        const response = await axios.get('http://localhost:3000/orders', {
          params: {
            client_id: state.clientId,
          }
        });
        commit('setOrders', response.data)
        commit('setCountOrders', response.data.length)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchOrderId({state, commit}, id) {
      try {
        commit('setLoading', true);
        const response = await axios.get('http://localhost:3000/orders', {
          params: {
            id,
            client_id: state.clientId,
          }
        })
        commit('setOrder', response.data[0])
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    },
    duplicateOrder({state, commit}, newOrder) {
      commit('setOrders', [...state.orders, newOrder])
      commit('setOrder', newOrder)
      return newOrder
    },
    deletedOrder({state, commit}, id) {
      commit('setOrders', state.orders.filter(order => order.id !== id))
    }
  },
  namespaced: true
}
