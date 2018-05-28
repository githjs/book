<template>
<div class="beforepart">
    <div class="content"><!--      -->
        <div class="title"><span>{{heade}}</span></div>
        <div>
            <ul class="flex">
                <li class="text fl" v-for="tmp,index in msg">
                    <router-link :to="'/intro/'+tmp.id">
                        <img v-lazy="require('../../assets/'+tmp.img)" alt="">
                        <p :style="{'-webkit-box-orient':'vertical'}">{{tmp.name}}</p>
                        <p>{{tmp.autho}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'BeforeComponent',
    data(){
        return {
            msg:[
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    names:'五行天',
                    id:150
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150
                },
                {
                    img:"img/150.jpg",
                    autho:"方想",
                    name:'五行天',
                    id:150
                },
                
            ]
        }
    },
    mounted(){
        var pno =parseInt(this.pno);
        let url='/index/'+pno+'/10';
        this.$http.get(url,
        {
            // pno:this.pno,
            // page:10
        },
        res=>{
            this.msg=res.data;
        })
    },
    methods:{
        dump(id){
            this.$router.push('/intro/'+id);
        }
    },
    props:['pno','heade']

}
</script>
<style lang="less" scoped>
@bgcolor:#88888a;
@main-font-color:#ed424b;
@intro-font-color:#969ba3;
@border-color:#ccc;
@font-color:#333;

.beforepart{
    width:100%;
    margin-top:40px;/*px*/
    >.content{
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
        > div {
            overflow:scroll;
            >.flex{
                position: relative; //不加会出现li 重叠现象
                overflow-x: auto;  //配合overflow：scroll 产生滚动条
                overflow-y: hidden; 
                white-space: nowrap;   //不自动换行
                height: 380px;/*px*/
                width: 1000px;/*no*/
                text-indent: 16px;/*px*/
                > li.text{
                    display: inline-block;
                    width:180px;/*px*/
                    margin-right: 16px;/*px*/
                    img{
                        width:100%;
                        height:250px;/*px*/
                    }
                    p{
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-top: 6px;/*px*/
                    }
                }
            }
        }
    }
}
</style>