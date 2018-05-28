<template>
<div class="lastpart">
    <div class="contain"><!--      -->
        <div class="title"><span>{{heade}}</span></div>
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
        var pno =this.pno;
        let url='/index/'+pno+'/3';
        this.$http.get(url,
        {
            // pno:this.pno,
            // page:3
        },
        res=>{
            this.msg=res.data;
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
    margin-top:40px;/*px*/
    >.contain{
        background-color: white;
        padding-bottom: 30px;/*px*/
        text-indent:20px;/*px*/
        >.title{
            height:80px;/*px*/
            line-height: 80px;/*px*/
            font-size: 40px;/*px*/
            font-weight: bold;
            >span{
                display: inline-block;
                height: 40px;/*px*/
                line-height: 40px;/*px*/
                border-left:2px solid @main-font-color;
            }
        }
        >.content > ul >li{
            width:100%;
            -webkit-box-orient: vertical;
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
                        -webkit-box-orient: vertical;
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
</style>
