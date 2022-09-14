import { createStore } from 'vuex'
import { clientsModule } from "@/store/clientsModule";
import { ordersModule } from "@/store/ordersModule";

export default createStore({
  state: {
    isAuth: false,
    clientId: 0,
  },
  getters: {
    isAuth(state) {
      return state.isAuth
    },
  },
  mutations: {
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    }
  },
  actions: {
  },
  modules: {
    clients: clientsModule,
    orders: ordersModule
  }
})
