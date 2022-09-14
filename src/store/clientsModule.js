import axios from "axios";

export const clientsModule = {
  state: () => ({
    clients: [],
    // isClientsLoading: false,
    // selectedSort: '',
    // searchQuery: '',
    // page: 1,
    // limit: 10,
    // totalPages: 0,
    // sortOptions: [
    //   {value: 'title', name: 'По названию'},
    //   {value: 'body', name: 'По содержимому'},
    // ]
  }),
  getters: {
    clients(state) {
      return state.clients
    },
    // sortedAndSearchedPosts(state, getters) {
    //   return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    // }
  },
  mutations: {
    setClients(state, clients) {
      state.clients = clients;
    },
    setLoading(state, bool) {
      state.isClientsLoading = bool
    },
    // setPage(state, page) {
    //   state.page = page
    // },
    // setSelectedSort(state, selectedSort) {
    //   state.selectedSort = selectedSort
    // },
    // setTotalPages(state, totalPages) {
    //   state.totalPages = totalPages
    // },
    // setSearchQuery(state, searchQuery) {
    //   state.searchQuery = searchQuery
    // },
  },
  actions: {
    async fetchClients({state, commit}) {
      try {
        commit('setLoading', true);
        const response = await axios.get('http://localhost:3000/clients');
        // commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        commit('setClients', response.data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false);
      }
    },
    // async loadMorePosts({state, commit}) {
    //   try {
    //     commit('setPage', state.page + 1)
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //       params: {
    //         _page: state.page,
    //         _limit: state.limit
    //       }
    //     });
    //     commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
    //     commit('setClients', [...state.clients, ...response.data]);
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  },
  namespaced: true
}
