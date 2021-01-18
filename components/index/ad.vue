<template>
    <div class="ad">
        <div class="ad-link">
            <a href="#">DYNAMIC DAMPING</a>
        </div>
        <div class="ad-items">
            <div class="ad-title">
                <div class="ad-text">
                    <h5>ADRENALINE</h5>
                    <h1>DYNAMIC RACING EXPERIENCE</h1>
                    <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue.</p>
                </div>
                <div class="read-more">
                    <p>READ MORE</p>
                    <img :src="require ('@/assets/img/right-black.png') " alt="">
                </div>
            </div>
            <div class="ad-img">
                <div class="img-item">
                    <img :src="require ('@/assets/img/ad/ad-img4.png') " alt="" class="a">
                </div>
                <div class="img-item">
                    <img :src="require ('@/assets/img/ad/ad-img5.png') " alt="">
                </div>
                <div class="img-item">
                    <img :src="require ('@/assets/img/ad/ad-img6.png') " alt="">
                </div>
            </div>
            <div class="back-text">
                <h1>READY</h1>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
     async mounted(){
        var img = await document.querySelectorAll('.img-item img');
        var backText = await document.querySelector('.back-text h1');
        var link = await document.querySelector('.ad-link')
        window.addEventListener('scroll',(event)=>{
            var y = document.documentElement.scrollTop;
            var width = document.body.offsetWidth;
            if(width < 550){
                img[1].style = '';
            }else if(width < 1000){
                if( y> 1900){
                    backText.style = 'text-align : end;transform: rotateX(0deg); ';
                    link.style = 'opacity: 1';
                        img[0].style = 'transform: scale(120); ';
                        img[1].style = 'transform: scale(370); ';
                        img[2].style = 'transform: scale(41); ';
                }
            }
            else{ 
                if(y > 2500){
                    backText.style = 'text-align : end;transform: rotateX(0deg); ';
                    link.style = 'opacity: 1';
                        img[0].style = 'transform: scale(150); ';
                        img[1].style = 'transform: scale(450); ';
                        img[2].style = 'transform: scale(41); ';
                }
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
    .ad{
        padding: 70px 0;
    }
    .ad-link{
        justify-content: center;
        font-size: 15px;
        font-weight: 700; 
        opacity: 0;
        transition: all .5s ease 1.2s;
    }
    .ad-link a{
        font-size: 15px;
        font-weight: 700; 
        cursor: pointer;
        color: #000;
    }
    .ad-link a::after {
        content: '';
        position: absolute;
        border-top: 5px solid transparent;
        border-left: 8px solid #000;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        margin: 4px;
    }
    .ad-link a:hover{
       color: #E23137;
    }
    .ad-link:hover a::after{
       border-left: 8px solid #E23137;
    }
    .ad-items{
        height: 400px;
    }
    .ad-items , .ad-link{
        display: flex;
        align-items: center;
        width: 1300px;
        margin: 0 auto;
    }
    .ad-title{
        width: 500px;
    }
    .ad-text{
        display: flex;
        flex-direction: column;
        width: 500px;
        position: relative;
        z-index: 5;
    }
    .ad-text h1{
        font-size: 45px;
        line-height: 45px;
        margin: 15px 0 20px -3px;
    }
    .ad-text h5{
        font-size: 14px;
        letter-spacing:11px;
        color:  #E23137;
    }
    .ad-text p{
        font: 16px 'Ubuntu', sans-serif;
        color: #808080;
        line-height: 27px;
        margin-bottom: 40px;
    }
    .ad-img{
        width: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 5;
    }
    .back-text{
        position: absolute;
        z-index: 1;
        width: 1300px;
    }
    .back-text h1{
        font-size: 350px;
        color: #f5f5f5;
        width: 1300px;
        transform: rotateX(90deg);
        transition: all .5s ease;
        height: 400px;
        letter-spacing: -17px;
    }
    .read-more{
        position: relative;
        z-index: 6;
        width: 70px;
    }
    .read-more p{
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        width: 70px;
        background-color: #fff;
        cursor: pointer;
        text-align: center;
        transition:  transform .4s ease;
    }
    .read-more:hover p{
        transform: translateX(72px);
    }
    .read-more img{
        width: 150px;
    }
    .img-item:nth-child(1){
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(50px);
    }
    .img-item:nth-child(1) img{
        width: 1px;
        height: 1px;
        transition: all .5s ease .8s;
    }
    .img-item:nth-child(2){
        width: 510px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-item:nth-child(2) img{
        width: 1px;
        height: 1px;
        transition: all .5s ease .4s;
    }
    .img-item:nth-child(3){
        width: 41px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(0, -150px);
    }
    .img-item:nth-child(3) img{
        width: 1px;
        transition: all .5s ease .8s;
    }
    @media screen and (max-width: 1400px) {
        .ad-link{
            width: 100vw;
        }
        .ad-items , .back-text , .back-text h1{
            width: 1100px;
        }
        .ad-items{
            height: 300px;
        }
        .back-text h1{
            font-size: 300px;
        }
        .ad-title, .ad-text{
            width: 350px;
        }
        .ad-img{
            width:750px
        }
    }
    @media screen and (max-width: 1200px) {
        .ad-items , .back-text , .back-text h1{
            width: 950px;
        }
        .ad-items{
            height: 300px;
        }
        .back-text h1{
            font-size: 300px;
        }
        .ad-title, .ad-text{
            width: 350px;
        }
        .ad-img{
            width:750px
        }
        .img-item:nth-child(1){
            width: 100px;
        }
        .img-item:nth-child(2){
            width: 420px;
        }
    }
    @media screen and (max-width: 1000px) {
        .ad{
            height: 700px;
        }
        .ad-text , .ad-title ,.ad ,.ad-items{
            width: 750px;
            margin: 0 auto;
        }
        .ad-link{
            width: 750px;
            justify-content: inherit;
            align-items: flex-start;

        }
        .ad-items{
            flex-direction: column;
        }
        .ad-title{
            position: absolute;
            transform: translateY(410px);
        }
        .img-item:nth-child(2){
            height: 420px;
        }
        .back-text{
            display: none;
        }
    }
    @media screen and (max-width: 763px) {
        .ad{
            height: 600px;
             margin: 0 auto;
        }
        .ad-text , .ad-title ,.ad ,.ad-items{
            width: 570px;
        }
        .ad-link{
            width: 570px;
        }
    }
    @media screen and (max-width: 600px) {
        .ad{
            height: 700px;
        }
        .ad-text , .ad-title ,.ad ,.ad-items{
            width: 425px;
        }
        .ad-link{
            width: 450px;
            opacity: 1;
        }
        .img-item:nth-child(1),.img-item:nth-child(3){
            display: none;
        }
        .img-item:nth-child(2) img{
            width: 450px!important;
            height: auto;
        }
    }
</style>
