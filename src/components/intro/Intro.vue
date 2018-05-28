<template>
<div class="intro">
    <div class="header">
        <div class="title">
            <i class="fa fa-chevron-left "  @click="$router.go(-1)"></i>
            <span>{{msg.name}}</span>
            <i class="fa fa-home fa-lg" @click="$router.push('/index')"></i>
        </div>
    </div>
    <div class="contain">
        <div class="base">
            <div class="msg">
                <div>
                    <img :src="require('../../assets/'+msg.img)" alt="">
                </div>
                <div>
                    <h3>{{msg.name}}</h3>
                    <p>作者:{{msg.autho}}</p>
                    <p>分类:{{msg.type}}</p>
                    <p>{{msg.wordcount}}万字</p>
                    <div>
                        <i :class="{'fa':true,'fa-star-o':msg.ratings==0,'fa-star':msg.ratings>=1,'fa-star-half-o':msg.ratings<1&&msg.ratings>0}"></i>
                        <i :class="{'fa':true,'fa-star-o':msg.ratings<=1,'fa-star':msg.ratings>=2,'fa-star-half-o':msg.ratings<2&&msg.ratings>1}"></i>
                        <i :class="{'fa':true,'fa-star-o':msg.ratings<=2,'fa-star':msg.ratings>=3,'fa-star-half-o':msg.ratings<3&&msg.ratings>2}"></i>
                        <i :class="{'fa':true,'fa-star-o':msg.ratings<=3,'fa-star':msg.ratings>=4,'fa-star-half-o':msg.ratings<4&&msg.ratings>3}"></i>
                        <i :class="{'fa':true,'fa-star-o':msg.ratings<=4,'fa-star':msg.ratings>=5,'fa-star-half-o':msg.ratings<5&&msg.ratings>4}"></i>                        
                    </div>
                </div>
            </div>
            <div class="btn">
                <div class="btn_read" @click="$router.push('/content/'+msg.id+'/1')">开始阅读</div>
                <div class="btn_drow">下载整本</div>
                <div class="btn_add"><i class="fa fa-book"></i>加入书架</div>
            </div>
        </div>
        <div class="intro">
           {{msg.intro}}    
        </div>
        <div class="tag">
            <h2>类别标签</h2>
            <span>{{msg.type}}</span>
            <span>东方玄幻</span>
        </div>
        <div class="like">
            <h3>喜欢本书的人也喜欢</h3>
            <div class="flex">
                <div class="book" v-for="tmp ,index in like">
                    <router-link :to="'/intro/'+tmp.id">
                        <img :src="require('../../assets/'+tmp.img)" alt="">
                        <p>{{tmp.name}}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            msg:{
                img:"img/150.jpg",
                autho:"方想",
                name:'五行天',
                id:150,
                serialize:'连载',
                wordcount:227.1,
                type:"玄幻",
                ratings:3.5,
                intro:"万界融合，灵力消散，历经百万年的修真世界轰然崩塌，蛮荒大举入侵，五行天成为修真者最后的防线。千年之后，来自旧土的卑微少年，以苦力之身，深入蛮荒三年，破格获得进入五行天深造的机会。万界融合，灵力消散，历经百万年的修真世界轰然崩塌，蛮荒大举入侵，五行天成为修真者最后的防线。千年之后，来自旧土的卑微少年，以苦力之身，深入蛮荒三年，破格获得进入五行天深造的机会。万界融合，灵力消散，历经百万年的修真世界轰然崩塌，蛮荒大举入侵，五行天成为修真者最后的防线。千年之后，来自旧土的卑微少年，以苦力之身，深入蛮荒三年，破格获得进入五行天深造的机会。"
            },
            like:[
                {
                    img:"img/150.jpg",
                    id:150,
                    name:'五行天',
                },
                {
                    img:"img/150.jpg",
                   id:150,
                    name:'五行天',
                },
                {
                    img:"img/150.jpg",
                    id:150,
                    name:'五行天',
                },
            ]
        }
    },
    mounted(){
        let url ='/intro/'+this.$route.params.id;
        this.$http.get(url,
        {
          
        },res=>{
            this.msg=res.data.datas;
            this.like=res.data.like;
        });
    }
}
</script>

<style lang="less" scoped>
@bgcolor:#f6f7f9;
@main-font-color:#ed424b;
@intro-font-color:#969ba3;
@border-color:#ccc;
@font-color:#333;
@font-word:#4284ed;
.intro{
    width:100%;
    background-color: @bgcolor;
    >.header{
        padding-bottom: 30px;/*px*/
        text-indent:20px;/*px*/
        width:100%;
        position: fixed;
        top:0;
        >.title{    
            background-color: white;
            height:100px;/*px*/
            line-height: 100px;/*px*/
            font-size: 40px;/*px*/
            font-weight: bold;
            color:#ed424b;
            position:relative;
            >span{
                display: inline-block;
                height: 40px;/*px*/
                line-height: 40px;/*px*/
            }
            i:last-child{
                position:absolute;
                right: 20px;/*no*/
                top:30px;/*px*/
            }
        }

    }
    >.contain{
        margin-top: 100px;/*px*/
        padding: 40px;/*px*/
        background-color:@bgcolor;
        .base{
            .msg{
                display: flex;
                img{
                    width: 240px;/*px*/
                    height: 300px;/*px*/
                }
                >div:last-child{
                    margin-left: 70px;/*px*/
                    h3{font-size: 50px;/*px*/ margin-top: 10px;/*px*/}
                    p{margin-top:24px;/*px*/font-size: 30px;/*px*/}
                    >div>i{
                        font-size: 60px;/*px*/
                        margin-top: 20px;/*px*/
                        color: @main-font-color;
                    }
                }
            }
            .btn{
                background: linear-gradient(to bottom, @bgcolor 0%, #ffffff 100%);
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-top: 40px;/*px*/
                height: 200px;/*px*/
                border-bottom: 2px solid @intro-font-color;
                >div{
                    width: 46%;
                    height: 80px;/*px*/
                    text-align: center;
                    font-size: 34px;/*px*/
                    line-height: 80px;/*px*/
                    border-radius: 8px;/*px*/
                }
                .btn_read{
                    border: 1px solid @main-font-color;/*mo*/
                    background-color: white;
                    color: @main-font-color;
                }
                .btn_drow{
                    color: white;
                    border: 1px solid white;
                    background-color:@main-font-color;
                }
                .btn_add{
                    width:100%;
                    color: @font-color;
                    border: 1px solid @font-color;/*mo*/
                    i{
                        margin-right: 10px;/*px*/
                    }
                }
            }
        }
        .intro{
            margin: 30px 0;/*px*/
            font-size: 32px;/*px*/
            text-indent:2em;
            line-height: 1.6em;
            display: -webkit-box;
            -webkit-box-orient:vertical;
            text-overflow: ellipsis;
            -webkit-line-clamp: 5;
            overflow: hidden;
        }
        .tag{
            font-size: 36px;/*px*/
            margin: 20px 0;/*px*/
            h2{
                display:block;
                border-bottom:1px solid @intro-font-color;
                padding: 20px;/*px*/
                margin-bottom:20px;/*px*/ 
            }
            span{
                display: inline-block;
                padding: 10px;/*px*/
                font-size: 30px;/*px*/
                border:1px solid @border-color;/*no*/
                border-radius:6px;/*px*/
            }
        }
        .like{
            font-size: 36px;/*px*/
            margin: 20px 0;/*px*/
            h3{
                display:block;
                border-bottom:1px solid @intro-font-color;
                padding: 20px;/*px*/
                margin-bottom:20px;/*px*/ 
            }
            .flex{
                display:flex;
                width:100%;
                justify-content: space-between;
                >div{
                    width:30%;
                    text-align: center;
                    >a>img{
                        width: 100%;
                        margin-bottom: 10px;/*px*/
                    }

                }
            }
        }
    }

}
</style>