import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
  isLoading: false
}
const mutations = {
  // state是默认值，可以加参数来，在模板中加上值就可
  minLeft(state) {
  
  },
  updateLoadingStatus(state,payload) {
    state.isLoading = payload.isLoading;
  }

}

const getters = {


}

//actions 使用mutations中的方法
const actions = {
  // addAction(context, title) {
  //   context.commit("changetitle", title);
  // },
  showLoading(context, payload) {
    context.commit("updateLoadingStatus", payload);
 }
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
