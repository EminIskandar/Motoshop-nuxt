<template>
    <div class="moto-slider">
        <div class="title">
            <h5>SPECIFICATIONS</h5>
            <h1>TRY PROFESSIONAL EQUIPMENT</h1>
            <span></span>
            <h5>SPECIFICATIONS</h5>
        </div>
        <div class="moto-carousel">
            <div class="m-c-items">
                <div class="m-c-item" v-for='items in item' :key='items.id'>
                    <div class="m-c-text" :style="{ backgroundImage: `url(${ require ('@/assets/img/slider/'+items.backImg)})` ,transform : ' translateX(0px)' }">
                        <h4 v-if="items.active" style="opacity: 1"  >{{items.title}}</h4>
                        <h4 v-else-if="!items.active" style="opacity: 0">{{items.title}}</h4>
                        <div v-if="items.active" style="opacity: 1" class="read-more">
                            <p>READ MORE</p>
                            <img :src="require ('@/assets/img/right.png') " alt="">
                        </div>
                        <div v-else-if="!items.active" style="opacity: 0" class="read-more">
                            <p>READ MORE</p>
                            <img :src="require ('@/assets/img/right.png') " alt="">
                        </div>
                        <div class="back-text ">
                            <h5 v-if="!items.active" style="transform : rotateX(90deg)">{{items.bgText}}</h5>
                            <h5 v-else-if="items.active" style="transform : rotateX(0deg)">{{items.bgText}}</h5>
                        </div>
                        <div :class="bgOut" v-if="!items.active"></div>
                        <div :class="bgIn" v-else-if="items.active"></div>
                    </div>
                    <div class="m-c-img" v-if="items.active">
                        <img :src="require ('@/assets/img/slider/'+items.motoImg)"  alt="" style="visibility: visible ">
                    </div>    
                    <div class="m-c-img " v-else-if="!items.active" >
                        <img :src="require ('@/assets/img/slider/'+items.motoImg)"  alt="" style="visibility: hidden">
                    </div>    
                </div>
            </div>
            <div class="m-c-nav">
                <div class="m-c-nav-count">
                    <p><span>01</span>/<span>03</span></p>
                </div>
                <div class="m-c-nav-bar">
                    <div class="m-c-nav-item"></div>
                    <div class="m-c-nav-item"></div>
                    <div class="m-c-nav-item"></div>
                    <div class="nav-bar-active"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
        return{
            item: [
                {title: 'RACING DAY',   motoImg : 'moto-slider-img1.png' , backImg: 'moto-slider-bg-1.jpg' , bgText:'R1', active : false, id: '1'},
                {title: 'NEW DRY CLUTCH',   motoImg : 'moto-slider-img2.png' ,backImg: 'moto-slider-bg-2.jpg' ,  bgText:'R2',active : false, id: '2'},
                {title: 'PERFORMANCE DATA',  motoImg : 'moto-slider-img3.png' , backImg: 'moto-slider-bg-3.jpg' , bgText:'R3',active : false, id: '3'},
                {title: 'RACING DAY',   motoImg : 'moto-slider-img1.png' , backImg: 'moto-slider-bg-1.jpg' , bgText:'R1',active : true, id: '4'},
                {title: 'NEW DRY CLUTCH',   motoImg : 'moto-slider-img2.png' ,backImg: 'moto-slider-bg-2.jpg' , bgText:'R2',active : false, id: '5'},
                {title: 'PERFORMANCE DATA',  motoImg : 'moto-slider-img3.png' , backImg: 'moto-slider-bg-3.jpg' , bgText:'R3',active : false,id: '6'},
                {title: 'RACING DAY',   motoImg : 'moto-slider-img1.png' , backImg: 'moto-slider-bg-1.jpg' , bgText:'R1', active : false,id: '7'},
            ],
            bgOut: 'bg bg-fade-out',
            bgIn: 'bg bg-fade-in',
            itemIndex: 0,
            func : 0,
            index : 3,
            x: 0,
            control : 0,
            cordinat: 0,
            move: 0,
            direction: 0,
            width:0,
            itemImg: null,
            itemBg: null,
            itemBgtext: null,
            itemTitletext: null,
            itemReadMore: null,
            navIndex: 3,
            jj : "document.querySelectorAll('.back-text h5')",
        }
    }
    , mounted(){
        this.width = window.innerWidth;  
        var navItem = document.querySelectorAll('.m-c-nav-item');
        var item = document.querySelectorAll('.m-c-text');
        this.itemImg = document.querySelectorAll('.m-c-img img');
        this.itemBg =document.querySelectorAll('.bg')
        this.itemBgtext =document.querySelectorAll('.back-text h5')
        this.itemTitletext =document.querySelectorAll('.m-c-text h4')
        this.itemReadMore =document.querySelectorAll('.m-c-text .read-more')
        var head = document.querySelector('.m-c-items');
        var lastIndex = 0
        for( var i=0;i<3;i++){
            navItem[i].addEventListener('click',(e)=>{
                this.width = window.innerWidth;
                this.itemIndex = Array.from(navItem).indexOf(e.target);
                this.navIndex = this.itemIndex+3;
                if(this.itemIndex < lastIndex){
                    //sola
                    this.left()
                }else if(this.itemIndex > lastIndex){
                    //saga
                    this.right()
                }
                lastIndex = this.itemIndex;
                //carousel nav count
                document.querySelectorAll('.m-c-nav-count span')[0].innerHTML = '0'+(this.itemIndex+1);
                this.motion();
            })
            navItem[i].addEventListener('mouseover',(e)=>{
                var index = Array.from(navItem).indexOf(e.target);
                document.querySelector('.nav-bar-active').style = 'transform : translateX('+16.66*index+'vw);'
            })
        }
        //title animation
        window.addEventListener('scroll',(event)=>{
            try{
                var y =document.documentElement.scrollTop;
                var width2 = document.body.offsetWidth;
                var cordinat = document.querySelector('.moto-slider').offsetTop-300;
                var h1 = document.querySelector('.moto-slider h1');
                var h5 = document.querySelectorAll('.moto-slider h5')
                if(width2 < 764){
                
                }else{
                    if(y>cordinat){
                        h1 .style ='opacity: 1; transform: translateX(0px);'
                        h5[1].style ='opacity: 1; transform: translateX(0px);'
                    } 
                }
            }catch(error){
                //
            } 
        });
        // bg animation
        if(this.width < 1400){
            this.bgIn = 'bg bg-fade-in2'
            this.bgOut = 'bg bg-fade-out2'
        }else if(this.width > 1400){
            this.bgIn = 'bg bg-fade-in'
            this.bgOut = 'bg bg-fade-out'
        }
        // auto resize 
        window.addEventListener('resize',()=>{
            try{
                for(var i=0;i<item.length;i++){
                this.width = window.innerWidth;  
                var width = document.querySelectorAll('.m-c-item')[0].offsetWidth+40;
                var move = parseInt(this.itemIndex*width);
                var index2 = this.itemIndex+3
                item[i].style.transform = 'translateX(-'+move+'px)'
                this.itemImg[i].style.transform = 'translate(-'+move+'px,-20%)'
                if(this.width < 1400){
                    this.itemBg[i].classList.remove('bg-fade-in' ,'bg-fade-out');
                    if(i == index2){
                        this.itemBg[i].classList.add('bg-fade-in2')
                    }else{
                        this.itemBg[i].classList.add('bg-fade-out2');
                    }
                }else{
                    this.itemBg[i].classList.remove('bg-fade-in2' ,'bg-fade-out2');
                    if(i == index2){
                        this.itemBg[i].classList.add('bg-fade-in')
                    }else{
                        this.itemBg[i].classList.add('bg-fade-out');
                    }
                }
            }
            }catch(error){
                
            } 
        })
    },
    methods : {
        left(){
            if(this.width < 1400){
                this.itemBg[this.navIndex+1].classList.remove('bg-fade-in2');
                this.itemBg[this.navIndex+1].classList.add('bg-fade-out2',);
                this.itemBg[this.navIndex].classList.remove('bg-fade-out2');
                this.itemBg[this.navIndex].classList.add('bg-fade-in2',);
            }else{
                this.itemBg[this.navIndex+1].classList.remove('bg-fade-in');
                this.itemBg[this.navIndex+1].classList.add('bg-fade-out',);
                this.itemBg[this.navIndex].classList.remove('bg-fade-out');
                this.itemBg[this.navIndex].classList.add('bg-fade-in',);
            }
            this.itemBgtext[this.navIndex+1].style.transform = 'rotateX(90deg)'
            this.itemBgtext[this.navIndex].style.transform = 'rotateX(0deg)'
            this.itemTitletext[this.navIndex+1].style.opacity = '0'
            this.itemTitletext[this.navIndex].style.opacity= '1'
            this.itemReadMore[this.navIndex+1].style.opacity = '0'
            this.itemReadMore[this.navIndex].style.opacity= '1'
        },
        right(){
            if(this.width < 1400){
                this.itemBg[this.navIndex-1].classList.remove('bg-fade-in2');
                this.itemBg[this.navIndex-1].classList.add('bg-fade-out2',);
                this.itemBg[this.navIndex].classList.remove('bg-fade-out2');
                this.itemBg[this.navIndex].classList.add('bg-fade-in2',);
            }else{
                this.itemBg[this.navIndex-1].classList.remove('bg-fade-in');
                this.itemBg[this.navIndex-1].classList.add('bg-fade-out',);
                this.itemBg[this.navIndex].classList.remove('bg-fade-out');
                this.itemBg[this.navIndex].classList.add('bg-fade-in',);
            }
            this.itemBgtext[this.navIndex-1].style.transform = 'rotateX(90deg)'
            this.itemBgtext[this.navIndex].style.transform = 'rotateX(0deg)'
            this.itemTitletext[this.navIndex-1].style.opacity = '0'
            this.itemTitletext[this.navIndex].style.opacity= '1'
            this.itemReadMore[this.navIndex-1].style.opacity = '0'
            this.itemReadMore[this.navIndex].style.opacity= '1'
        },
        motion(){
            for(var i=0;i<7;i++){
                var item = document.querySelectorAll('.m-c-text');
                var width = document.querySelectorAll('.m-c-item')[0].offsetWidth+40;
                var move = parseInt(this.itemIndex*width*-1);
                item[i].style.transition += 'all 1s ease'
                item[i].style.transform= 'translateX('+move+'px)'
                this.itemImg[i].style.transition += 'all 1s ease'
                this.itemImg[i].style.transform = 'translate('+move+'px,-20%)'
                if(this.navIndex == i){
                    this.itemImg[i].style.margin = ''
                    this.itemImg[i].style.visibility='visible'
                }else if(i< this.navIndex){
                    this.itemImg[i].style.margin=' 0 0 0 -650px'
                    this.itemImg[i].style.visibility='hidden'
                }else if(i>this.navIndex){
                    this.itemImg[i].style.margin='0 0 0 650px'
                    this.itemImg[i].style.visibility='hidden'
                } 
            }
            this.move = move;
        }
    }
  }
</script>

<style scoped>
    .moto-slider{
        overflow: hidden; 
    }
    .title{
        display: flex;
        width: 820px;
        margin: 0 auto; 
        align-items: center;
    }
    .title h1{
        width: 350px;
        direction: rtl;
        padding:  0 50px;
        font-size: 45px;
        line-height: 45px;
        transform: translateX(-70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .title h5{
        padding: 28px 50px;
        font-size: 16px;
        letter-spacing:11px;
        color:  #E23137;
        transform: translateX(70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .title h5:first-child{
        display: none;
    }
    .title span{
        width: 1px;
        height: 90px;
        background: none;
        border-left: 1px solid #000;
        padding: 0;
    }
    .moto-carousel{
        width: 1920px;
    }
    .m-c-items{
        display: flex;
        width: 100vw;
        padding: 70px 0;
        justify-content: center;
        cursor: grab;
    }
    .empty-layer{
        width: 100vw;
        height: 500px;
        position: absolute;
        z-index: 12;
    }
    .m-c-item {
        width: 950px;
        height: 500px;
        margin: 0 20px;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
    }
    .m-c-text:before {
        content: '';
        position: absolute;
        width: 50.2vw;
        height: 28.4vw;
        z-index: 15;
        left: 0;
        top: 0;
    }
    .m-c-text{
        width: 950px;
        height: 500px;
        background-color:  #E23137;;
        color: #fff;
        position: relative;
        z-index: 5;
        padding: 50px;
        box-sizing: border-box;
        user-select: none;
    }
    .bg{
        position: absolute;
        height: 100%;
        left: 0;
        top:0;
        box-sizing: border-box;
        background-color:  #E23137;
        z-index: 1;
    }
    .m-c-text h4{
        font-size: 24px;
        position: relative;
        z-index: 5;
        transition: all .5s ease;
    }
    .deactive{
        visibility: hidden;
    }
    .active{
        visibility: visible;
    }
    .back-text{
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(255, 255, 255, 0.1); 
        z-index: 5;
    }
    .back-text h5{
        font-size: 250px;
        letter-spacing: -10px;
        transform: rotateX(90deg);
        transition: all .7s ease .7s;
    }
    .read-more{
        position: relative;
        z-index: 20;
        width: 70px;
        margin-top: 20px;
    }
    .read-more p{
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        width: 70px;
        background-color: #E23137;
        cursor: pointer;
        text-align: center;
        transition: all .5s ease;
    }

    .read-more:hover p{
        transform: translateX(72px);
    }
    .read-more img{
        width: 150px;
    }
    .m-c-img{
        width: 950px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 6;
    }
    .m-c-img img{
        position: absolute;
        transform: translateY(-20%);
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-select: none;
        z-index: 2;
    }
    .m-c-nav {
        width: 100vw;
        padding: 100px 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .m-c-nav-count{
        width: 50vw;
    } 
    .m-c-nav span{
        font-weight: 700;
        background: none;
        font-size: 16px;
    }
    .m-c-nav span:hover{
        background: none;
        color: #000;
    }
    .m-c-nav span:last-child{
        color: #808080;
    }
    .m-c-nav-bar{
        width: 50vw;
        height: 2px;
        background-color: #dedede;
        margin: 10px 0;
        display: flex ;
        align-items: center;
    }
    .m-c-nav-item{
        width: 16.66vw;
        height: 40px;
        cursor: pointer;
    }
    .nav-bar-active{
        position: absolute;
        width: 16.66vw;
        height: 2px;
        background-color: #E23137;
        transition: all .5s ease;
        cursor: pointer;
    }
    .bg-fade-in{
        animation: bg-fade-in .4s ease forwards;
    }
    .bg-fade-out{
        animation: bg-fade-out .4s ease forwards;
    }
    .bg-fade-in2{
        animation: bg-fade-in2 .4s ease forwards;
    }
    .bg-fade-out2{
        animation: bg-fade-out2 .4s ease forwards;
    }
    @keyframes bg-fade-in {
        0% {width: 0%; visibility: hidden!important;}
        100% {width: 37%;visibility: visible!important;}
    }
    @keyframes bg-fade-out {
        0% {width: 37%;visibility: visible!important;}
        100% {width: 0%;visibility: hidden!important;}
    }
    @keyframes bg-fade-in2 {
        0% {width: 0%; visibility: hidden!important;}
        100% {width: 50%;visibility: visible!important;}
    }
    @keyframes bg-fade-out2 {
        0% {width: 50%;visibility: visible!important;}
        100% {width: 0%;visibility: hidden!important;}
    }
    @media screen and (max-width: 1900px) {
        .m-c-text, .m-c-item {
            width: 50.2vw;
            height: 28.4vw;
        }
        .m-c-img{ 
            width: 50.2vw;
        }
        .m-c-img img{
            width: 43vw;
        }
         .back-text{
            height: 28.4vw;
            width: 17.1vw;
        }
        .m-c-text h4{
            width: 12.9vw;
        }
        .back-text h5{ 
            font-size: 14vw;
        }
    }
    @media screen and (max-width: 1400px) {
        .back-text{
            width: 50%;
        }
        .m-c-text h4{
            width: 110%
        }
    }
    @media screen and (max-width: 1100px) {
        .read-more{
            margin-top: 10px;
        }
        .title{
            width: 820px;
        }
        .m-c-text{
            padding: 20px;
        }
    }
    @media screen and (max-width: 764px) {
        .m-c-text , .m-c-item{
            width: 54.2vw;
            height: 34.4vw;
        }
        .m-c-img{ 
            width: 54.2vw;
        }
        .m-c-img img{
            width: 50vw;
        }
        .bg, .back-text{
            height: 34.4vw;
            width: 54.2vw!important;
        }
        .back-text h5{ 
            font-size: 25vw;
        }
        .title span{
            display: none;
        }
        .title{
            flex-direction: column;
            width: 85vw;
            align-items: flex-start;
        }
        .title h1{
            direction: ltr;
            padding: 0;
            opacity: 1;
            transform: translateX(0);
        }
        .title h5{
            padding: 18px 0;
        }
        .title h5:first-child{
            display: block;
            opacity: 1;
            transform: translateX(0);
        }
        .title h5:last-child{
            display: none!important;
        }
    }
</style>
