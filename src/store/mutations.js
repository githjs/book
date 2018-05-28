export default {
    swiperightimg(state){
        state.banner_num--;
        let i=state.banner_num;
        let a=state.banner_img_length;
        if(i<0){
            state.banner_num=a-1;
        }  
    },
    swipeleftimg(state){
        state.banner_num++;
        let i=state.banner_num;
        let a=state.banner_img_length;
        if(i==a){
            state.banner_num=0;
        }  
    },
    hidepage(state){ // 隐藏目录
        state.show_page1=false;
        setTimeout(()=>{
           state.show_page=false; 
        },500)
        
    },
    pageshow(state){ //显示目录
        state.show_page=true;
        state.show_page1=true;
    },
    showdesign(state){//点击文章内容显示设置
        state.show_design=!state.show_design;
    },
    changecolor(state,color){ //切换背景颜色
        if(state.bgcolor=='black'){
            color="white";
        }
        state.bgcolor=color;
    },
    content_color(state){//显示切换上下章还是颜色设置
        state.bgcolor_control=!state.bgcolor_control;
        state.pre_next=!state.pre_next;
    },
    font(state,i){
        state.fonts+=i;
        if(state.fonts==10||state.fonts==26){
            state.fonts-=i
            return ;
        }
        
    }

}
