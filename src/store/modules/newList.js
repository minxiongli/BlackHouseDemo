import axios from 'axios'
export default {
  namespaced: true,
  state: {
    allData: {}, //放置的是所有的数据  {分类id： 列表1， 分类id：列表2}
  },
  mutations: {
    upDataList(state, { currentCatagtory, list }) {
      state.allData = { ...state.allData, [currentCatagtory]: list };
    },
  },
  actions: {
    //获取新闻列表数据
    async getNewList(context,cataId){
      const {data:{data:{results:results} }} = await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${cataId}&timestamp=${Date.now()}&with_top=1`)
      console.log(results);
      context.commit('upDataList',{currentCatagtory:cataId, list:results});
    }
  },
};
