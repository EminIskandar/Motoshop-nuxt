<template>
    <div class="about-slider">
        <div class="a-s-title">
            <h5>PERFORMANCE</h5>
            <h1>DYNAMIC RACING EXPERIENCE</h1>
            <span></span>
            <h5>PERFORMANCE</h5>
        </div>
        <div class="a-s-items">
            <div class="a-s-item" v-for='(items,key) in item' :key='key' >
                <div class="a-s-i-title">
                    <h5>LIFESTYLE</h5>
                    <h1>{{items.title}}</h1>
                    <div class="read-more">
                        <p> <span class="r-m-text">READ MORE</span></p>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
               <img :src="require ('@/assets/img/slider/'+items.backImg)" alt="" >
               <div class="a-s-number">
                <h1>R{{items.id}}</h1>
               </div>
            </div>
        </div>
        <div class="a-s-nav">
            <div class="a-s-nav-count">
                <p><span>01</span>/<span>03</span></p>
            </div>
            <div class="a-s-nav-bar">
                <div class="a-s-nav-item"></div>
                <div class="a-s-nav-item"></div>
                <div class="a-s-nav-item"></div>
                <div class="a-s-nav-bar-active"></div>
            </div>
        </div>
    </div>
</template>
 
<script>
  export default {
    data(){
        return{
            item:[ 
                { title: '2019 Prescott Valley' , backImg : 'about-slider-1.jpg' , id: '1'},
                { title: 'Supercross and Motocross' ,backImg : 'about-slider-2.jpg' , id: '2'},
                { title: 'Electric Motorcycle' ,backImg : 'about-slider-3.jpg' , id: '3'},
                { title: 'The Hardest Sport' ,backImg : 'about-slider-4.jpg' , id: '4'},
                { title: 'Two-Stroke Tuesday' ,backImg : 'about-slider-5.jpg' , id: '5'},
                { title: 'Experiencing the Rush' ,backImg : 'about-slider-6.jpg' , id: '6'},
                { title: 'Essential Items for Offroad' ,backImg : 'about-slider-7.jpg' , id: '7'},
                { title: 'TWMXRS Racer Profile' ,backImg : 'about-slider-8.jpg' , id: '8'}
            ],
            x:0,
            move:0,
            direction: 0,
            control: 0,
            cordinat:0,
            func:0,
        }
    },mounted(){
        window.addEventListener('scroll',(event)=>{
            try{ 
                var y =document.documentElement.scrollTop;
                var width2 = document.body.offsetWidth;
                var cordinat = document.querySelector('.about-slider').offsetTop-300;
                if(width2 < 764){
                    
                }else{
                    if(y > cordinat){
                        document.querySelector('.about-slider h1').style ='opacity: 1; transform: translateX(0px);'
                        document.querySelectorAll('.about-slider h5')[1].style ='opacity: 1; transform: translateX(0px);'
                    }
                } 
            }catch(error){

            }
        });
        //open move slider
        document.querySelector('.a-s-items').addEventListener('mousedown', ()=>{
            //document.querySelector('.m-c-items').style.cursor ='grabbing'
            this.control = 1;
            if(this.func == 0){
                window.addEventListener('mousemove',(event)=>{
                    var x = event.clientX; 
                    if(this.control == 1){
                        setTimeout(()=>{ this.cordinat=x },10)
                        if(x >  this.cordinat){
                            //sag
                            this.x +=10
                            this.move +=10
                            this.direction = 1;
                        }else if(x < this.cordinat){
                            //sol
                            this.x -=10
                            this.move -=10
                            this.direction = -1;
                        }
                        var itemWidth = document.querySelectorAll('.a-s-item')[0].offsetWidth;
                        var windowWidth = window.innerWidth-10;
                        var number = 5;
                        if(windowWidth < 500){
                            number = 7.4;
                        }else if(windowWidth < 1000){
                            number = 6;
                        }else{
                            number = 5;
                        }
                        var totalWidth = ((itemWidth*number)-170)*-1;
                        for(var i=0;i<8;i++){
                            if(this.move > 0){
                                this.move = 0;
                            }else if(this.move < totalWidth){
                                this.move = totalWidth;
                            }
                            document.querySelectorAll('.a-s-item')[i].style.transition = ''
                            document.querySelectorAll('.a-s-item')[i].style.transform = 'translateX('+this.move+'px)'
                        }
                    }
                })
                this.func = 1;
            }
        })
        //close move slider
        document.querySelector('.a-s-items').addEventListener('mouseup', ()=>{
            this.control = 0;
            this.x = 0;
            this.motion()
        })
        //slider nav
        var nav = document.querySelectorAll('.a-s-nav-item');
        for(var n=0;n<nav.length;n++){
            nav[n].addEventListener('click',(e)=>{
                var windowWidth = window.innerWidth-10;
                var itemWidth = document.querySelectorAll('.a-s-item')[0].offsetWidth;
                var move = 0;
                var index = Array.from(nav).indexOf(e.target);
                if(index == 0){
                    move = 0;
                }else if(index == 1){
                    move =(3*itemWidth)*-1;
                }else if(index == 2){
                    var number = 5;
                    if(windowWidth < 500){
                        number = 7.4;
                    }else if(windowWidth < 1000){
                        number = 6;
                    }else{
                        number = 5;
                    }
                    move =((number*itemWidth)-170)*-1;
                }
                for(var i=0;i<8;i++){
                    document.querySelectorAll('.a-s-item')[i].style = 'transform: translateX('+move+'px);transition: all 1s ease;;'
                }
                this.move = move;
            })
            nav[n].addEventListener('mouseover',(e)=>{
                var index = Array.from(nav).indexOf(e.target);
                document.querySelector('.a-s-nav-bar-active').style='transform: translateX('+e.target.offsetWidth*index+'px)';
                 
            })
        }
    },
    methods:{
        motion(){
            var itemWidth = document.querySelectorAll('.a-s-item')[0].offsetWidth;
            var location = parseInt(this.move / itemWidth);
            var move = itemWidth*location;
            for(var i=0;i<8;i++){
                document.querySelectorAll('.a-s-item')[i].style = 'transform: translateX('+move+'px);transition: all 1s ease;;'
            }
            this.move = move;
        }
    }
  }
</script>

<style scoped>
    .about-slider{
        background-color: #000;
        padding: 100px 0;
    }
    .a-s-title{
        display: flex;
        width: 820px;
        margin: 0 auto; 
        align-items: center;
    }
    .a-s-title h1{
        width: 350px;
        direction: rtl;
        padding:  0 50px;
        font-size: 45px;
        line-height: 45px;
        color: #fff;
        transform: translateX(-70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .a-s-title h5{
        padding: 28px 50px;
        font-size: 16px;
        letter-spacing:11px;
        color:  #E23137;
        transform: translateX(70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .a-s-title h5:first-child{
        display: none;
    }
    .a-s-title span{
        width: 1px;
        height: 90px;
        background: none;
        border-left: 1px solid rgba(255, 255, 255, 0.4);
        padding: 0;
    }
    .a-s-i-title{
        color: #fff;
        padding: 40px 30px;
        transition: all .5s ease;
        position: relative;
        z-index: 5;
    }
    .a-s-i-title h5{
        font: 11px 'Heebo','sans-serif';
        font-weight: 700;
        transform: translateX(-10px);
        opacity: 0;
        transition: all .4s ease;
    }
    .a-s-i-title h1{
        font-size: 24px;
        text-transform:uppercase;
        transform: translateX(-10px);
        opacity: 0;
        transition: all .4s ease .1s; 
    }
    .a-s-i-title h1:hover{
         color:  #E23137;
    }
    .a-s-item:hover .a-s-i-title h5{
        opacity: 1;
        transform: translateX(0);
    }
    .a-s-item:hover .a-s-i-title h1{
        opacity: 1;
        transform: translateX(0);
    }
    .a-s-item:hover .read-more{
        opacity: 1;
        transform: translateX(0);
    }
    .a-s-items{
        display: flex;
        width: 200vw;
        transform: translateX(300px);
        margin: 70px 0;
        cursor: pointer;
        overflow: hidden;
    }
    .a-s-item{
        width: 477px;
        height: 725px;
        overflow: hidden;
         -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
    }
    .read-more{
        position: relative;
        z-index: 20;
        width: 70px;
        margin-top: 20px;
        opacity: 0;
        transform: translateX(-10px);
        transition: all .4s ease .2s;
    }
    .read-more p{
        position: absolute;
        cursor: pointer;
        width: 150px;
        height: 20px;
        transform: translate(0,-4px);
    }
    .read-more .r-m-text{
        position: absolute;
        background: none;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        transition: all .5s ease;
        padding: 0;
    }
    .read-more:hover .r-m-text{
        transform: translate(72px,0px);
    }
    .read-more span:nth-child(3){
        width: 70px;
        height: 2px; 
        background: #fff!important;
        position: absolute;
        padding: 0;
        right: 0;
        background: none;
        transform: translate(81px,4px);
        user-select: none;
        transition: all .5s ease;
    }
    .read-more:hover span:nth-child(3){
        transform: translate(81px,4px);
        width: 0px;
    }
    .read-more span:nth-child(4){
        width: 0px;
        height: 2px;
        background: #fff!important;
        position: absolute;
        padding: 0;
        left: 0;
        background: none;
        transform: translate(0,4px);
        user-select: none;
        transition: all .5s ease;
    }
    .read-more:hover span:nth-child(4){
        transform: translate(0,4px);
        width: 55px;
    }
    .read-more span:nth-child(2){
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-left: 5px solid #fff;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
        position: absolute;
        transform: translateX(150px);
        padding: 0;
        background: none;
        user-select: none;
    }
    .a-s-items img{
        position: absolute;
        z-index: 1;
        width: 477px;
        height: 725px;
        top: 0;
         -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
    }
    .a-s-item:hover img{
        filter: brightness(0.5);
    }
    .a-s-nav {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }
    .a-s-nav-count{
        width: 450px;
    } 
    .a-s-nav span{
        font-weight: 700;
        background: none;
        font-size: 16px;
        color: #fff;
    }
    .a-s-nav span:hover{
        background: none;
        color: #000;
    }
    .a-s-nav span:last-child{
        color: #808080;
    }
    .a-s-nav-bar{
        width: 450px;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 10px 0;
        display: flex ;
        align-items: center;
    }
    .a-s-nav-item{
        width: 150px;
        height: 40px;
        cursor: pointer;
    }
    .a-s-nav-bar-active{
        position: absolute;
        width: 150px;
        height: 2px;
        background-color: #E23137;
        transition: all .5s ease;
        cursor: pointer;
    }
    .a-s-number {
        width: 477px;
        height: 725px;
        position: absolute;
        top: 0;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
        user-select: none;
    }
    .a-s-number h1{
        font-size: 250px;
        position: relative;
        z-index: 10;
        color: rgba(255,255,255,0.1);
        transform: translateY(35%);
    }
    @media screen and (max-width: 1900px) {
        .a-s-item ,.a-s-items img , .a-s-number{
            width: 24.8vw;
            height: 37.7vw;
        }
        .a-s-items{
            transform: translateX(15.5vw);
        }
    }
    @media screen and (max-width: 996px) {
        .a-s-item ,.a-s-items img , .a-s-number{
            width: 350px;
            height: 520px;
        }
        .a-s-items{
            width: 400vw;
        }
        .a-s-nav{
            align-items: baseline;
            transform: translateX(15.5vw);
        }
    }
    @media screen and (max-width: 764px) {
        .a-s-item ,.a-s-items img , .a-s-number{
            width: 406px;
            height: 670px;
        }
        .a-s-items{
            width: 700vw;
        }
        .a-s-nav{
            align-items: baseline;
            transform: translateX(15.5vw);
        }
        .a-s-nav-count ,.a-s-nav-bar{
            width: 400px;
        }
        .a-s-nav-item, .a-s-nav-bar-active{
            width: 133.33px;
        }
        .a-s-title span{
            display: none;
        }
        .a-s-title{
            flex-direction: column;
            width: 87vw;
            align-items: flex-start;
        }
        .a-s-title h1{
            direction: ltr;
            padding: 0;
            opacity: 1;
            transform: translateX(0);
        }
        .a-s-title h5{
            padding: 18px 0;
        }
        .a-s-title h5:first-child{
            display: block;
            opacity: 1;
            transform: translateX(0);
        }
        .a-s-title h5:last-child{
            display: none!important;
        }
    }
</style>