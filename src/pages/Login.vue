<template>
  <div class="page">
    <div class="page__wrapper">
      <h1 class="header">Добро пожаловать!</h1>
      <my-input
          v-model="clientData.login"
          placeholder="Логин"
          type="text"
          v-focus
      />
      <my-input
          v-model="clientData.password"
          placeholder="Пароль"
          type="password"
      />
      <my-button
          @click="login"
      >
        ВОЙТИ
      </my-button>
      <span v-if="error" class="error">Логин или пароль не верные</span>
    </div>
  </div>
</template>

<script>
  import MyInput from "@/components/UI/MyInput";
  import MyButton from "@/components/UI/MyButton";
  import {mapState, mapActions, mapMutations} from 'vuex'

  export default {
    components: {
      MyInput,
      MyButton
    },
    data() {
      return {
        clientData: {
          login: '',
          password: ''
        },
        error: false
      }
    },
    mounted() {
      this.fetchClients();
    },
    methods: {
      login() {
        this.error = false
        const currentClient = this.clients.find(f => f.login === this.clientData.login && f.password === this.clientData.password)
        if (currentClient) {
          this.setIsAuth(true)
          this.setClientId(currentClient.id)
          this.$router.push('/')
        } else {
          this.error = true
        }
      },
      ...mapMutations({
        setIsAuth: 'setIsAuth',
        setClientId: 'orders/setClientId',
      }),
      ...mapActions({
        fetchClients: 'clients/fetchClients'
      }),
    },
    computed: {
      ...mapState({
        clients: state => state.clients.clients,
      }),
    },
  }
</script>

<style scoped>
  .page__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .header {
    margin-bottom: 45px;

    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    letter-spacing: 0.3px;
  }

  .error {
    color: red;
  }
</style>