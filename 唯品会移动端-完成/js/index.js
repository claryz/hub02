window.onload=function(){
    searchc();
   
}

// 顶部条固定变浅
var search = document.getElementsByClassName('header')[0];
// 获取图片区域
var banner = document.getElementsByClassName('loop')[0];

// 获取banner卷去的高度
var height = banner.offsetHeight;
window.onscroll = function(){
    // 当滚动高度大于banner卷去高度时颜色不变
    // 首先应该获取banner滚动高度
    // 之后做判断

    var  top = document.documentElement.scrollTop;

    if(top>height){
        search.style.background = 'rgba(240, 240, 240,0.85)';
    }else{
        // 只是降低透明度
        var opacty = top/this.height*0.85;
        search.style.background = 'rgba(240, 240, 240,'+opacty+")";
    }
   
}