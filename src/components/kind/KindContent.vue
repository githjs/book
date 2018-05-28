<template>
<div class="lastpart">
    <div class="contain"><!--      -->
        <div class="title" >
            <i class="fa fa-chevron-left" @click="$router.go(-1)"></i>
            <span>{{typename}}</span>
        </div>
        <div class="content">
            <ul>
                <li v-for="tmp,index in msg">
                    <router-link :to="'/intro/'+tmp.id">
                        <div><img v-lazy="require('../../assets/'+tmp.img)" alt=""></div>
                        <div class="intro">
                            <h3>{{tmp.name}}</h3>
                            <p :style="{'-webkit-box-orient':'vertical'}">{{tmp.intro}}</p>
                            <div class="autho">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span>{{tmp.autho}}</span>
                            </div>
                            <div class="msag">
                                <span>{{tmp.type}}</span>
                                <span>{{tmp.serialize}}</span>
                                <span>{{tmp.wordcount}}万字</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'LastComponent',
    data(){
        return {
            typename:'',
            msg:[
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150,
                    serialize:'连载',
                    wordcount:227.1,
                    type:"玄幻",
                    intro:"万界融合，灵力消散，历经百万年的修真世界轰然崩塌，蛮荒大举入侵，五行天成为修真者最后的防线。千年之后，来自旧土的卑微少年，以苦力之身，深入蛮荒三年，破格获得进入五行天深造的机会。万界融合，灵力消散，历经百万年的修真世界轰然崩塌，蛮荒大举入侵，五行天成为修真者最后的防线。千年之后，来自旧土的卑微少年，以苦力之身，深入蛮荒三年，破格获得进入五行天深造的机会。万界融合，灵力消散，历经百万年的修真世界轰然崩塌，蛮荒大举入侵，五行天成为修真者最后的防线。千年之后，来自旧土的卑微少年，以苦力之身，深入蛮荒三年，破格获得进入五行天深造的机会。"
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150,
                    serialize:'连载',
                    wordcount:227.1,
                    type:"玄幻",
                    intro:"万界融合，灵力消散，历经百万年的修真世界轰然崩塌，蛮荒大举入侵，五行天成为修真者最后的防线。千年之后，来自旧土的卑微少年，以苦力之身，深入蛮荒三年，破格获得进入五行天深造的机会。渴"
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150,
                    serialize:'连载',
                    wordcount:227.1,
                    type:"玄幻",
                    intro:"万界融合，灵力消散，历经百万年的修真世界轰然崩塌，蛮荒大举入侵，五行天成为修真者最后的防线。千年之后，来自旧土的卑微少年，以苦力之身，深入蛮荒三年，破格获得进入五行天深造的机会。渴"
                },
            ]
        }
    },
    mounted(){
        switch(parseInt(this.$route.params.type)){
            case 1:
                this.typename='玄幻'
                break;
            case 2:
                this.typename='修真'
                break;
            case 3:
                this.typename='都市'
                break;
            case 4:
                this.typename='历史'
                break;
            case 5:
                this.typename='游戏'
                break;
        }
        let url='/kind/'+this.typename;
        this.$http.get(url,
        {
            // type:this.typename
        },
        res=>{
            this.msg=res.data;
            console.log("kind")
        })
    },
    props:['pno','heade']
}
</script>
<style lang="less" scoped>
@bgcolor:#f6f7f9;
@main-font-color:#ed424b;
@intro-font-color:#969ba3;
@border-color:#ccc;
@font-color:#333;
@font-word:#4284ed;
.lastpart{
    width:100%;
    background-color: @bgcolor;
    >.contain{
        padding-bottom: 30px;/*px*/
        text-indent:20px;/*px*/
        >.title{
            background-color: white;
            height:80px;/*px*/
            line-height: 80px;/*px*/
            font-size: 40px;/*px*/
            font-weight: bold;
            color:#ed424b;
            margin-bottom:30px;/*px*/
            >span{
                display: inline-block;
                height: 40px;/*px*/
                line-height: 40px;/*px*/
            }
        }
        >.content > ul{
            background-color: white;
            padding: 10px;/*px*/
            >li{
                width:100%;
                padding: 20px 0;/*px*/
                -webkit-box-orient: vertical;
                border-bottom: 2px solid @intro-font-color;
                >a{
                    display: flex;
                    width: 100%;
                    >div:first-child{
                        display: inline-block;
                        >img{
                            width:160px;/*px*/
                            height:220px;/*px*/
                        }
                    }
                    >div.intro{
                        position: relative;
                        margin-left:20px;/*px*/
                        h3{font-size: 32px;/*px*/ }
                        p{
                            display: -webkit-box;
                            /* autoprefixer: off */
                            -webkit-box-orient: vertical;
                            /* autoprefixer: on */
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                            font-size: 14px;
                            color: @intro-font-color;
                            margin: 30px 20px;/*px*/
                        }
                        div.autho{
                            color: @intro-font-color;
                            i{
                                margin-right: 10px;/*px*/
                            }
                        }
                        >div.msag{
                            position:absolute;
                            right:40px;/*px*/
                            bottom:32px;/*px*/
                            color:@intro-font-color;
                            >span{
                                border:1px solid @border-color;/*no*/
                                border-radius:6px;/*px*/
                                padding: 0;margin:0;
                            }
                            >span:nth-child(2){color:@main-font-color}
                            >span:last-child{color:@font-word}
                            
                        }
                        
                    }
                } 
            }   
        }
    }
}
</style>
