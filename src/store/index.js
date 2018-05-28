import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getter'

Vue.use(vuex);
const state={
    banner_num:0, //显示轮播图的下标
    banner_img_length:4,// 几个轮播图
    pno:1,//beforepart部分中第一个
    show_design:true,//显示设置
    bgcolor_control:false,//显示颜色设置
    pre_next:true,//显示切换上下章
    show_page:false,//显示目录
    bgcolor:'white',//初始化背景颜色白色
    fonts:14,
    show_page1:false
}

export default new vuex.Store({
    state,
    mutations,
    actions,
    getters
})
