<template>
<div>
    <div class="header">
        <div class="headebox clearfix">   
            <div class="title">
                <router-link to="/index">起点中文网</router-link>
                <router-link to="/index" class="fr user"><img src="../../assets/img/avatar.png" alt=""></router-link>
            </div>
            <div class="banner">   
                <div class="banner_list">
                    <v-touch  v-for="(tmp,index) in images" :key="index" @swipeleft="swipeleftimg" @swiperight="swiperightimg"> 
                        <a href="#"><img v-lazy="require('../../assets/'+tmp)" :class="{'show':index==banner_num}" ></a>
                    </v-touch>
                </div>
                <div class="point">
                    <ul>
                        <li v-for="(tmp,index) in images" :class="{'banner_point fl':true,'active':index==banner_num}" ></li>
                    </ul>
                </div> 
            </div>
        </div>
        <div class="kind clearfix">
            <ul class="flex">
                <li v-for="tmp,index in kinds" class="fl">
                    <router-link :to="'/kind/'+(index+1)">
                        <i :style="{'background':'url('+require('../../assets/img/sprite.png')+') no-repeat '+ tmp.left+ tmp.top}" />
                        <span>{{tmp.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <!-- ============前三部分============== -->
    <BeforeComponent :pno='pno' :heade="titles[0]"></BeforeComponent> 
    <BeforeComponent :pno='before2()' :heade="titles[1]"></BeforeComponent>
    <BeforeComponent :pno='before3()' :heade="titles[2]"></BeforeComponent>

    <!-- ===========后三部分================ -->
    <LastComponent :pno='last1()' :heade="titles[3]"></LastComponent>
    <LastComponent :pno='last2()' :heade="titles[4]"></LastComponent>
    <LastComponent :pno='last3()' :heade="titles[5]"></LastComponent>
    
</div>
</template>
<script>
import BeforePart from './BeforePart'
import LastPart from './LastPart'
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    components:{
        'BeforeComponent':BeforePart,
        'LastComponent':LastPart
    },
    data(){
        return {
            images:[
                "img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"
            ], 
            kinds:[
                {
                    name:'玄幻',
                    left:'-62px ',
                    top:'-24px'
                },
                {
                    name:'修真',
                    left:'0 ',
                    top:'0'
                },
                {
                    name:'都市',
                    left:'0 ',
                    top:'-29px'
                },
                {
                    name:'历史',
                    left:'4px ',
                    top:'-58px'
                },
                {
                    name:'游戏',
                    left:'-30px ',
                    top:'-28px'
                },
            ],
            titles:[
                "热门小说","排行榜","限时免费","新书抢先","畅销完本","猜你喜欢"
            ]
        }
    },
    mounted(){
        setInterval(()=>{
            this.swipeleftimg(); 
        },2500);
    },
    methods:{
        ...mapGetters(['before2','before3','last1','last2','last3']),
        ...mapMutations(['swipeleftimg','swiperightimg']),
    },
    computed:{
        ...mapState(['pno','banner_num'])
    }
}
</script>

<style lang="less" type="text/less" scoped>
@bgcolor:#f6f7f9;
@main-font-color:#ed424b;
@intro-font-color:#969ba3;
@border-color:#ccc;
@font-color:#333;
.header{
    height:310px;/*no*/
    .headebox{
        color:black;
        width: 100%;
        font-size: 40px;/*px*/
        .title {
            width:100%;
            height:95px;/*px*/
            background-color:@bgcolor;
            > a:first-child{
                font-family: arial,microsoft yahei,helvetica,sans-serif;
                font-weight: bold;
                font-size:44px;/*px*/
                line-height: 96px;/*px*/
                margin-left: 18px;/*px*/
            }
            >.user > img{
                width:64px;/*px*/
                height:64px;/*px*/
                margin: 14px;/*px*/
            }
        }
        >.banner {
            width:100%;
            position:relative;
            .banner_list img{
                width:100%;
                height:340px;/*px*/
                position:absolute;
                top:0;
                left:0;
                opacity:0;
                transition:all .5s ease-in-out;
            }
            .banner_list img.show{
                opacity:1;
            }
            .point{
                position:absolute;
                left: 40%;
                top: 300px;/*px*/
                background-color:none;
                .banner_point{
                    width:20px;/*px*/
                    height:20px;/*px*/
                    background-color:@bgcolor;
                    margin-left:20px;/*px*/
                    border:1px solid @border-color;/*px*/
                    border-radius:5px;/*no*/
                }
                .active{
                    background-color:black;
                }   
            }
            .point::after{
                clear: both;
            }
        }
    }
}
.kind{
    height: 140px;/*px*/
    position: relative;
    top: 380px;/*px*/
    background-color:white;
    margin-bottom:40px;/*px*/
    >ul >li{
        width:20%;/*px*/
        height:100px;/*px*/
        text-align: center;
        >a{
            display: inline-block;
            margin:auto;
            width:100%;
            height: 110px;/*px*/
            text-align: center;
            >i{
                margin:auto;
                display: block;
                width: 60px;/*px*/
                height: 60px;/*px*/
                margin-top:20px;/*px*/   
            }
        }
    }
    .flex{
        flex:1;
    }
}

   
</style>



