import axios from "axios";
export default {
    namespaced:true,
    state:{
        //存放分类数组的属性
        catagtory:[],
        currentCatagtory:''
    },
    mutations:{
        //我们会认为载荷是要更新的数组
        updateCatagtory(state,payload){
            state.catagtory = payload;
        },
        //更新当前激活分类
        updatecurrentCatagtory(state,payload){
            state.currentCatagtory = payload;
        }
    },
    actions:{
        async getCatagtory(context){
            //返回的是promise对象
            //可以用链式可以用async await
            //axios默认包了一层数据结构
        const {data:{data:{channels}}} = await axios.get('http://toutiao.itheima.net/v1_0/channels') 

        //需要mutations才能改state
        context.commit('updateCatagtory',channels) //更新数组
        context.commit('updatecurrentCatagtory',channels[0].id)  //更新当前激活ID
        }
    },
}