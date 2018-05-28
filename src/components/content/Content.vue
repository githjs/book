<template>
    <div class="contain">
        <div :class="{'pagebox':true,'active':show_page ,'active1':show_page1}" >
            <div class="page">
                <!-- 目录 -->
                <div class="pagetitle">
                    <i class="fa fa-chevron-left" @click="hidepage"></i>
                    <span>{{book}}</span>
                </div>
                <div class="chapter">
                    <div v-for="tmp,index in page">
                        <p :class="{'nowchapter':index==cid}" @click="jumpchapter(index+1)" >&nbsp;&nbsp;{{index+1}}.{{tmp}}</p>
                    </div>
                </div>
            </div>
            <div :class="{'bgcolor':true,'opacitys':show_page}" v-if="show_page" @click="hidepage">
                <!-- 目录右侧阴影 -->
            </div>
        </div>
        <div class="content">
            <div class="title">
                <!--   头部 -->
                <div v-if="show_design" :style="{'backgroundColor':bgcolor}">   
                    <h3>{{name}}</h3>
                </div>
                <div v-if="!show_design">   
                    <i class="fa fa-chevron-left"  @click="$router.push('/intro/'+id)"></i>
                    <span>返回简介</span>
                    <i class="fa fa-home fa-lg" @click="$router.push('/index')"></i>
                </div>
            </div>
            <div class="text" @click="showdesign" :style="{'backgroundColor':bgcolor,'fontSize':fonts+'px'}">
                <!-- 内容 -->
                <p v-for="tmp,index in content">
                    {{tmp}}
                </p>
                <div>   
                    <span @click="jump(-1)">上一章</span><span @click="jump(1)">下一章</span>
                </div>
            </div>
            <div class="footer" v-if="!show_design">
                <!-- 底部 -->
                <div>
                    <div class="dump" v-if="pre_next">
                        <!-- 上下一章 -->
                        <div @click="jump(-1)" class="fl">
                            <i class="fa fa-chevron-left"></i>
                            <span >上一章</span>
                        </div>
                        <span>{{name}}</span>
                        <div class="fr" @click="jump(1)">
                            <span>下一章</span>
                            <i class="fa fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="change" v-if="bgcolor_control">
                        <!-- 设置字体与背景颜色 -->
                        <div>
                            字体 ：
                            <span @click="font(-2)">小</span><span @click="font(2)">大</span>
                        </div>
                        <div>
                            背景 ：
                            <span @click="changecolor('white')" :style="{'backgroundColor':'white'}"></span>
                            <span @click="changecolor('black')" :style="{'backgroundColor':'black'}"></span>
                            <span @click="changecolor('gray')" :style="{'backgroundColor':'gray'}"></span>
                            <span @click="changecolor('#cdefcd')" :style="{'backgroundColor':'#cdefcd'}"></span>
                            <span @click="changecolor('#59759e')" :style="{'backgroundColor':'#59759e'}"></span>
                            <span @click="changecolor('#fdf1a1')" :style="{'backgroundColor':'#fdf1a1'}"></span>
                        </div>
                    </div>
                </div>
                <div class="design">
                    <div @click="pageshow">
                        <i class="fa fa-bars"></i>
                        <p>目录</p>
                    </div>
                    <div @click="content_color">
                        <span>Aa</span>
                        <p>设置</p>
                    </div>
                    <div @click="changecolor('black')">
                        <i class="fa fa-moon-o"></i>
                        <p>夜间</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
    data(){
        return {
            page:["序 下山","第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
                "第一章 我改主意了","第二章 为什么",
            ],//目录
            content:[//小说内容
                "身旁胖子嘴里的麦芽糖咬得咯吱咯吱响，落日的余晖洒落大地，风柔和得像羽毛，没有半点平日里的肃杀和冷，艾辉不知道自己以后还会不会记得这一天。",
                "“决定了？”胖子含糊不清地问。",
                "“决定了。”艾辉回答得很肯定，他早已做出决定，没什么值得犹豫的地方。",
                "“所以我得活着。”艾辉打断越说越激动，直接站起来的胖子，他桀骜的脸庞此刻说不出的平静。",
                "当他提出希望能得到一个进入五行天名额的请求时，上面考虑过后最终同意。",
                "两千名苦工，只有两人幸存，哪怕说是运气成分居多，也足以说明很多问题。",
                "胖子颓然地坐下来，艾辉的倔强他实在太熟悉了。转念想了想，他重新变得振奋起来，满脸真诚道：“记得抚恤金那栏写我的名字，便宜别人不如便宜我。”",
                "艾辉懒得理他，随手拔了根青草放在嘴里，枕着脑袋惬意地躺了下来。在蛮荒的这三年，每天的神经都是高度紧绷，鲜血、生死、搏杀，那是个黑暗混杂着猩红的冰冷世界。",
                "这三年是怎么过来的，他不知道，也不想去回忆，不是什么美好的回忆。",
                "落日的余晖照在身上，温暖而舒适，艾辉的眉头不自主地舒展，脸上的冷峻桀骜一点点松弛下来，宁静祥和。",
                "暖烘烘的身体逐渐放松，艾辉的思绪也变得涣散，就像失去束缚的雾气，无声无息弥漫开来。",
                "温暖的阳光，微醺的风，有些陌生又有些熟悉的感觉，唤醒脑海深处那些陌生又熟悉的回忆。",
                "三年之前的三年，剑修道场的阳光和风，也如这般。",
                "打好木头架子，他便开始整理老板最近收来的剑典秘籍。",
                "这些秘籍一元二十斤是市场价，纸书便宜，铁券金贝要贵一点，玉简最不值钱。工作量不小，但是没人催，艾辉也从来不急，顺便翻翻，点评一下。",
                "偶尔的时候，他还会幻想一下，倘若在修真时代，自己该是何等风光，卖剑典都要卖到手软。"
            ],
            name:'第一章 主角',
            book:'五行天',
            id:150,//书籍id
            cid:1,//第几章
        }
    },
    mounted(){
        this.id=parseInt(this.$route.params.id);
        this.cid=parseInt(this.$route.params.cid);
        this.load(); 
    },
    methods:{
        ...mapMutations(['font','showdesign','hidepage','pageshow','changecolor','content_color']),
        
        jump(i){ 
            this.cid+=i;
            this.cid=1;
            if(this.cid<0){
                return;
            }else if(this.cid>this.page.length){
                this.cid=this.page.length;
                return;
            }
            
        },
        load(){
            let url = '/content/'+this.id+'/'+this.cid;
            this.$http.get(url,{
                // id:this.id,
                // cid:this.cid
            },res=>{
                console.log(res.data)
            })
        },
        jumpchapter(i){
            this.cid=i;
            this.load();
        }
    },
    computed:{
        ...mapState(['fonts','show_design','show_page','show_page1','bgcolor_control','pre_next','bgcolor']),
    }
}

</script>
<style lang="less" scoped>
@bgcolor:#f6f7f9;
@main-font-color:#ed424b;
@intro-font-color:#969ba3;
@border-color:#ccc;
@font-color:#333;
.contain{
    font-size: 34px;/*px*/
    width: 100%;
    height: 100%;
    .content{
        width: 100%;
        .title{
            width: 100%;
            height:120px;/*px*/
            position:fixed;
            top: 0;
            left: 0;
            >div{
                height: 120px;/*px*/
                line-height: 120px;/*px*/
                text-indent: 24px;/*px*/
                font-size: 40px;/*px*/
                border-bottom: 1px solid @intro-font-color;/*no*/
                h3{
                    color: @font-color;
                }
            }
            >div:last-child{
                width: 100%;
                height: 120px;/*px*/
                background-color: @font-color;
                color:@border-color;
                i:last-child{
                    position:absolute;
                    right: 60px;/*px*/
                    top: 40px;/*px*/
                }
            }
        }
        .text{
            margin-top: 80px;/*px*/
            padding: 0 20px 20px 20px;/*px*/
            p{
                text-indent: 2em;
                line-height: 1.6em;
            }
            >div{
                text-align: center; 
                > span{
                    display: inline-block;
                    padding: 10px 40px;/*px*/
                    border: 2px solid @border-color;
                    margin: 0 20px;/*px*/
                    border-radius: 10px;/*px*/
                }
            } 
        }
        .footer{
             background-color: @font-color;
            color:@border-color;
            width: 100%;
            position:fixed;
            bottom: 0;
            left: 0;
            .dump{
                text-align: center;
                height: 100px;/*px*/
                line-height: 100px;/*px*/
                >span{
                    display: inline-block;
                    width: 360px;
                }
                div:first-child{
                    float: left;
                    margin-left: 40px;/*px*/
                }
                div:last-child{
                    float: right;
                    margin-right: 40px;/*px*/
                }
                
            }
            .change{
                div{
                    height: 120px;/*px*/ 
                    line-height: 120px;/*px*/
                    text-indent: 40px;/*px*/
                    span{
                        text-indent: 0;
                        text-align: center;
                        border: 1px solid @border-color;/*no*/   
                        cursor: pointer;                     
                    }
                }
                div:first-child{
                    span{
                        border-radius: 16px;/*px*/
                        display: inline-block;
                        width: 26%;
                        margin-right: 20px;/*px*/
                        height: 60px;/*px*/
                        line-height: 60px;/*px*/
                    }
                }
                div:last-child{
                    span{
                        display: inline-block;
                        width: 60px;/*px*/
                        height:60px;/*px*/
                        vertical-align: middle;
                        border-radius: 50%;
                        margin-right: 20px;/*px*/
                    }
                }
            }
            .design{
                display: flex;
                justify-content: space-between;
                height: 100px;/*px*/
                border-top: 1px solid @border-color;/*no*/
                padding-top: 20px;/*px*/
                div{
                    margin:0 80px;/*px*/
                    text-align: center;
                    height: 100px;/*px*/
                    line-height: 40px;/*px*/
                }
            }
        }
    }
    .pagebox{
        position: fixed;
        z-index: 9999;
        top: 0;
        left: -80%;
        width: 200%;
        height: 0;
        display: flex;
        flex-wrap: nowrap;
        transition: left .5s ease-in-out;
        >.page{
            display: inline-block;
            width: 40%;
            height: 100%;
            background-color: white;
            overflow-y: auto;
            overflow-x: hidden;
            .pagetitle{
                margin-top: 10px;/*px*/
                width: 80%;
                height: 100px;/*px*/
                line-height: 100px;/*px*/
                text-indent:20px;/*px*/
                text-align: center;
                color: @main-font-color;
                border-bottom:1px solid @main-font-color; 
                i{
                    position: relative;
                //    / top: -50px;/*px*/
                    left: -30%;/*px*/
                }
            }
            .chapter{
                width: 100%;
                div{
                    width:80%;
                    height: 60px;/*px*/
                    padding:10px;/*px*/
                    line-height: 60px;/*px*/ 
                }
            }
        }
        >.bgcolor{
            display: inline-block;            
            width: 60%;
            height: 100%;
            background-color: rgba(33, 33, 33, 0.1);
            display: none;
            transition: all .5s ease-in-out;
        }
    }
    .active{
        height: 100%;
        .opacitys{
            display: block;
            background-color: rgba(33, 33, 33, 0.7);
        }
    }
    .active1{
        left:0;
    }
    
}


</style>
fn(href,did){
    this.$router.push(href);
    this.$store.commit(did);
}
