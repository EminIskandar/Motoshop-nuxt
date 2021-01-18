<template>
    <div class="about-blog">
         <div class="a-b-title">
            <h5>PERFORMANCE</h5>
            <h1>MAXIMUM SPEED & STABILITY</h1>
            <span></span>
            <h5>PERFORMANCE</h5>
        </div>
        <div class="a-b-items">
            <div class="a-b-item" v-for='items in item' :key='items.id'>
                <div class="a-b-img">
                    <img :src="require ('@/assets/img/blog/'+items.img) " alt="">
                </div>
                <div class="a-b-text">
                    <p>{{items.date}}</p>
                    <h1>{{items.title}}</h1>
                    <p>Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei his tota legere.</p>
                </div>
                <div class="a-b-read-more">
                    <p>READ MORE</p>
                    <img :src="require ('@/assets/img/right-black.png') " alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
        return{
            item:[
                { img: 'blog-img-1.jpg', date: 'SEPTEMPER 9, 2019' , title : '2019 CHESTNUT CORNER'},
                { img: 'blog-img-2.jpg', date: 'SEPTEMPER 4, 2019' , title : 'NEW REKLUSE CORE EXP'},
                { img: 'blog-img-3.jpg', date: 'SEPTEMPER 2, 2019' , title : 'CLOSEOUT MOTOCROSS'}
            ]
        }
    },mounted(){
        window.addEventListener('scroll',(event)=>{
            try{
                var y =document.documentElement.scrollTop;
                var width2 = document.body.offsetWidth;
                var cordinat = document.querySelector('.about-blog').offsetTop-300;
                if(width2 < 764){
                    
                }else{
                    if(y > cordinat){
                        document.querySelector('.about-blog h1').style ='opacity: 1; transform: translateX(0px);'
                        document.querySelectorAll('.about-blog h5')[1].style ='opacity: 1; transform: translateX(0px);'
                    }
                }
            }catch(error){

            } 
        });
    }
  }
</script>

<style scoped>
    .about-blog{
        padding: 100px 0;
    }
    .a-b-title{
        display: flex;
        width: 820px;
        margin: 0 auto; 
        align-items: center;
    }
    .a-b-title h1{
        width: 350px;
        direction: rtl;
        padding:  0 50px;
        font-size: 45px;
        line-height: 45px;
        transform: translateX(-70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .a-b-title h5{
        padding: 28px 50px;
        font-size: 16px;
        letter-spacing:11px;
        color:  #E23137;
        transform: translateX(70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .a-b-title h5:first-child{
        display: none;
    }
    .a-b-title span{
        width: 1px;
        height: 90px;
        background: none;
        border-left: 1px solid #000;
    }
    .a-b-items {
        display: flex;
        width: 1300px;
        justify-content: space-between;
        margin: 0 auto;
    }
    .a-b-item{
        padding-top: 70px;
        width: 410px;
    }
    .a-b-img{
        width: 410px;
        height: 300px;
    }
    .a-b-img{
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .a-b-img:hover img{
        transform: translateX(10px);
    }
    .a-b-img img{
        width: 450px;
        transition: all .4s ease;
    }
    .a-b-text{
        padding: 40px 0;
    }
    .a-b-text p:nth-child(1){
        font: 11px 'Heebo','sans-serif';
        letter-spacing: 1px;
        color:  #E23137;
    }
    .a-b-text h1{
        font-size: 24px;
        padding: 5px 0 15px;
    }
    .a-b-text p:last-child{
        font: 16px 'Ubuntu','sans-serif';  
        color: rgba(0,0,0, 0.4);
    }
    .a-b-read-more{
        position: relative;
        z-index: 6;
        width: 70px;
    }
    .a-b-read-more p{
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        width: 70px;
        background-color: #fff;
        cursor: pointer;
        text-align: center;
        transition:  transform .4s ease;
    }
    .a-b-read-more:hover p{
        transform: translateX(72px);
    }
    .a-b-read-more img{
        width: 150px;
    }
    @media screen and (max-width: 1400px) {
        .a-b-items {
            width: 1100px;
        }
        .a-b-item {
            width: 340px;
        }
        .a-b-img{
            width: 340px;
            height: 250px;
        }
        .a-b-img img{
            width: 390px;
        }
    }
    @media screen and (max-width: 1200px) {
        .a-b-items {
            width: 950px;
        }
        .a-b-item {
            width: 300px;
        }
        .a-b-img{
            width: 300px;
            height: 310px;
        }
        .a-b-img img{
            width: 350px;
        }
    }
    @media screen and (max-width: 996px) {
        .a-b-items {
            width: 750px;
        }
        .a-b-item {
            width: 240px;
        }
        .a-b-img{
            width: 240px;
            height: 170px;
        }
        .a-b-img img{
            width: 290px;
        }
    }
    @media screen and (max-width: 764px) {
        .a-b-items {
            width: 87vw;
            flex-wrap:wrap;
        }
         .a-b-item {
            width: 300px;
        }
        .a-b-img{
            width: 300px;
            height: 310px;
        }
        .a-b-img img{
            width: 350px;
        }
        .a-b-title span{
            display: none;
        }
        .a-b-title{
            flex-direction: column;
            width: 87vw;
            align-items: flex-start;
        }
        .a-b-title h1{
            direction: ltr;
            padding: 0;
            opacity: 1;
            transform: translateX(0);
        }
        .a-b-title h5{
            padding: 18px 0;
        }
        .a-b-title h5:first-child{
            display: block;
            opacity: 1;
            transform: translateX(0);
        }
        .a-b-title h5:last-child{
            display: none!important;
        }
    }
    @media screen and (max-width: 700px) {
        .a-b-item {
            width: 87vw;
        }
        .a-b-img{
            width: 87vw;
            height: 300px;
        }
        .a-b-img img{
            width: 100vw;
        }
    }
</style>