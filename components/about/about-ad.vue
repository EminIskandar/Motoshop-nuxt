<template>
    <div class="about-ad">
        <div class="about-ad-items">
            <div class="about-ad-link">
                <a href="#">DYNAMIC DAMPING</a>
            </div>
            <div class="about-ad-img">
                <div class="about-img-item">
                    <img :src="require ('@/assets/img/ad/about-ad-img01.png') " alt="" class="a">
                </div>
                <div class="about-img-item">
                    <img :src="require ('@/assets/img/ad/about-ad-img02.png') " alt="">
                </div>
                <div class="about-img-item">
                    <img :src="require ('@/assets/img/ad/about-ad-img03.png') " alt="">
                </div>
            </div>
            <div class="about-ad-title">
                <div class="about-ad-text">
                    <h5>ADRENALINE</h5>
                    <h1>IMPROVE GENERAL RIDEABILITY</h1>
                    <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue.</p>
                </div>
                <div class="about-ad-author">
                    <img :src="require ('@/assets/img/author-img-1.jpg') "  alt="">
                    <div class="about-ad-a-info">
                        <h5>OFFICIAL RIDER</h5>
                        <h1>JACKIE BRONSON</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    async mounted(){
        var img = await document.querySelectorAll('.about-img-item img');
        window.addEventListener('scroll',(event)=>{
            try{
                var y =document.documentElement.scrollTop;
                var width = document.body.offsetWidth;
                var cordinat = document.querySelector('.about-ad').offsetTop-300;
                if(width < 550){
                    img[1].style = '';
                }else if(width < 1000){
                    if( y > cordinat){
                        document.querySelector('.about-ad-link').style = 'opacity: 1';
                        img[0].style = 'transform: scale(150); ';
                        img[1].style = 'transform: scale(450); ';
                        img[2].style = 'transform: scale(41); ';
                    }
                }else if(width < 1200){
                    if( y > cordinat){
                        document.querySelector('.about-ad-link').style = 'opacity: 1';
                        img[0].style = 'transform: scale(100); ';
                        img[1].style = 'transform: scale(380); ';
                        img[2].style = 'transform: scale(41); ';
                    }
                }
                else{ 
                    if(y > cordinat){
                        document.querySelector('.about-ad-link').style = 'opacity: 1';
                        img[0].style = 'transform: scale(150); ';
                        img[1].style = 'transform: scale(450); ';
                        img[2].style = 'transform: scale(41); ';
                    }
                }
            }catch(error){

            }
        });
        window.addEventListener('resize',(event)=>{
            var width = document.body.offsetWidth;
            if(width < 550){
                img[1].style = '';
            }
        })
    }
  }
</script>

<style scoped>
    .about-ad{
        padding: 70px 0;
    }
    .about-ad-link{
        position: absolute;
        font-size: 15px;
        font-weight: 700;
    }
    .about-ad-link a{
        font-size: 15px;
        font-weight: 700; 
        cursor: pointer;
        color: #000;
    }
    .about-ad-link a::after {
        content: '';
        position: absolute;
        border-top: 5px solid transparent;
        border-left: 8px solid #000;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        margin: 4px;
    }
    .about-ad-link a:hover{
       color: #E23137;
    }
    .about-ad-link:hover a::after{
       border-left: 8px solid #E23137;
    }
    .about-ad-items {
        height: 400px;
        display: flex;
        width: 1300px;
        margin: 0 auto;
    }
    .about-ad-title{
        width: 500px;
    }
    .about-ad-text{
        display: flex;
        flex-direction: column;
        width: 500px;
        position: relative;
        z-index: 5;
    }
    .about-ad-text h1{
        font-size: 45px;
        line-height: 45px;
        margin: 15px 0 20px -3px;
    }
    .about-ad-text h5{
        font-size: 14px;
        letter-spacing:11px;
        color:  #E23137;
    }
    .about-ad-text p{
        font: 16px 'Ubuntu', sans-serif;
        color: #808080;
        line-height: 27px;
        margin-bottom: 40px;
    }
    .about-ad-author{
        display: flex;
        align-items: center;
    }
    .about-ad-a-info{
        padding: 0 30px;
    }
    .about-ad-a-info h5{
        font: 11px 'Heboo', sans-serif;
        letter-spacing: 1.2px;
        color:  #E23137;
    }
    .about-ad-a-info h1{
        font-size: 18px;
        font-weight: 700;
    }
    .about-ad-img{
        width: 800px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-right:  60px;
        position: relative;
        z-index: 5;
    }
    .about-ad-img img{
        width: 1px;
        height: 1px;
        transition: all .5s ease .8s;
    }
    .about-img-item{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .about-img-item:nth-child(1){
        width: 150px;
        height: 379px;
        transform: translateY(30%);
    }
    .about-img-item:nth-child(2){
        width: 441px;
        height: 379px;
    }
    .about-img-item:nth-child(3){
        width: 41px;
    }
    @media screen and (max-width: 1400px) {
        .about-ad-link{
            width: 100vw;
        }
        .about-ad-items {
            width: 1100px;
        }
        .about-ad-title, .about-ad-text{
            width: 350px;
        }
        .about-ad-img{
            width:750px
        }
    }
    @media screen and (max-width: 1200px) {
        .about-ad-items {
            width: 950px;
        }
        .about-ad-items{
            height: 300px;
        }
        .about-ad-title, .about-ad-text{
            width: 350px;
        }
        .about-ad-img{
            width:750px
        }
        .about-ad-text h1[data-v-b97e6bc0] {
            margin: 10px 0 10px -3px;
        }
        .about-ad-text p[data-v-b97e6bc0] {
            margin-bottom: 10px;
        }
    }
    @media screen and (max-width: 1000px) {
        .about-ad{
            height: 700px;
        }
        .about-ad-text , .about-ad-title ,.about-ad ,.about-ad-items{
            width: 750px;
            margin: 0 auto;
        }
        .about-ad-link{
            width: 750px;
            justify-content: inherit;
            align-items: flex-start;

        }
        .about-ad-items{
            flex-direction: column;
        }
        .about-ad-title{
            position: absolute;
            transform: translateY(410px);
        }
    }
    @media screen and (max-width: 763px) {
        .about-ad{
            height: 600px;
             margin: 0 auto;
        }
        .about-ad-text , .about-ad-title ,.about-ad ,.about-ad-items{
            width: 570px;
        }
        .about-ad-link{
            width: 570px;
        }
        .about-ad-img {
            width: 550px;
        }
    }
    @media screen and (max-width: 600px) {
        .about-ad{
            height: 700px;
        }
        .about-ad-text , .about-ad-title ,.about-ad ,.about-ad-items{
            width: 425px;
        }
        .about-ad-link{
            width: 450px;
            opacity: 1;
        }
        .about-img-item:nth-child(1),.about-img-item:nth-child(3){
            display: none;
        }
        .about-img-item:nth-child(2) img{
            width: 450px!important;
            height: auto;
        }
    }
</style>
