<template>
    <div class="blog">
        <div class="title">
            <h5 >PERFORMANCE</h5>
            <h1>MAXIMUM SPEED &amp; STABILITY</h1>
            <span></span>
            <h5>SPECIFICATIONS</h5>
        </div>
        <div class="blog-items">
            <div class="blog-item" :style="' background-image: url(/_nuxt/assets/img/blog/index-blog-img4.jpg)'">
                <div class="s-text">
                    <h5>SEPTEMBER 10, 2019</h5>
                    <h1>OLD BIKES, OLD RIDERS</h1>
                </div>
                <div class="back-text">
                    <h1>R1</h1>
                </div>
                <div class="read-more">
                    <p>READ MORE</p>
                    <img :src="require ('@/assets/img/right-black.png') " alt="">
                </div>
                <div class="s-bg"></div>
            </div>
            <div class="blog-item" :style="' background-image: url(/_nuxt/assets/img/blog/index-blog-img5.jpg)'">
                <div class="s-text">
                    <h5>SEPTEMBER 10, 2019</h5>
                    <h1>EXCEED EXPECTATIONS</h1>
                </div>
                <div class="back-text">
                    <h1>R2</h1>
                </div>
                <div class="read-more">
                    <p>READ MORE</p>
                    <img :src="require ('@/assets/img/right-black.png') " alt="">
                </div>
                <div class="s-bg"></div>
            </div>
            <div class="blog-item" :style="' background-image: url(/_nuxt/assets/img/blog/index-blog-img6.jpg)'">
                <div class="s-text">
                    <h5>SEPTEMBER 10, 2019</h5>
                    <h1>2019 GRAND PRIX</h1>
                </div>
                <div class="back-text">
                    <h1>R3</h1>
                </div>
                <div class="read-more">
                    <p>READ MORE</p>
                    <img :src="require ('@/assets/img/right-black.png') " alt="">
                </div>
                <div class="s-bg"></div>
            </div>
        </div>
        
    </div>
</template>

<script>
  export default {
    mounted(){
        window.addEventListener('scroll',()=>{
            try{
                var y = document.documentElement.scrollTop;
                var width2 = document.body.offsetWidth;
                var cordinat = document.querySelector('.blog').offsetTop-300;
                var h1 = document.querySelector('.blog h1');
                var h5 = document.querySelectorAll('.blog h5');
                if(width2 < 764){
                    
                }else{
                    if(y > cordinat){
                        h1.style ='opacity: 1; transform: translateX(0px);'
                        h5[1].style ='opacity: 1; transform: translateX(0px);'
                    }
                }
            }catch(error){
                //
            }
        } );
    },

  }
</script>

<style scoped>
    .blog{
        padding: 70px 0;
        width: 1300px;
        margin: 0 auto;
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
    .blog-items{
        display: flex;
        justify-content: space-between;
        padding: 70px 0;
    }
    .blog-item{
        width: 420px;
        height: 320px;
        padding: 30px;
        box-sizing: border-box;
        position: relative;
        z-index: 10;
        cursor: pointer;
    }
    .s-text{
        position: relative;
        z-index: 10;
        color: #fff;
    }
    .s-text h5{
        font: 11px 'Heebo', 'sans-serif';
        font-weight: 700;
        letter-spacing: 1px;
    }
    .s-text h1{
        font-size: 24px;
        font-weight: 700;
    }
    .blog-item:hover .s-text h5{
        color: #E23137;
    }
    .blog-item:hover .s-text h1{
        color: #000;
    }
    .s-bg{
        width: 420px;
        height: 320px;
        margin: 0 -30px -30px;
        background: #fff;
        position: absolute;
        top: 0;
        opacity: 0;
        transition: all .2s ease;
        z-index: 5;
        border: 1px solid #E23137;;
    }
    .s-bg:before{
        content: '';
        position: absolute;
        width: 420px;
        height: 320px;
        margin: -1px;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 45px;
        z-index: 4;
    }
    .blog-item:hover .s-bg , 
    .blog-item:hover  .back-text h1,
    .blog-item:hover  .read-more{
        opacity: 1;
    }
    .blog-item:hover  .back-text h1{
        color: #dedede;
        transform: rotateX(0);
    }
    .read-more{
        position: relative;
        z-index: 6;
        width: 70px;
        margin-top: 20px;
        z-index: 10;
        opacity: 0;
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
        color: #000;
    }

    .read-more:hover p{
        transform: translateX(72px);
    }
    .read-more img{
        width: 150px;
    }
    .back-text h1{
        font-size: 130px;
        color: #f5f5f5;
        width: 400px;
        text-align: center;
        position: relative;
        z-index: 10;
        opacity: 0;
        transform: rotateX(90deg);
        transform-origin: top;
        transition: transform .5s ease;
    }
    @media screen and (max-width: 1400px) {
        .blog{
            width: 1100px;
        }
         .blog-items{
             width: 1100px;
         }
        .blog-item , .s-bg , .s-bg:before{
            width: 360px;
            height: 270px;
        }
        .back-text h1{ 
            width: 290px;
        }
    }
    @media screen and (max-width: 1200px) {
        .blog , .blog-items{
            width: 950px;
        }
        .blog-item , .s-bg , .s-bg:before{
            width: 310px;
            height: 240px;
        }
        .back-text h1{ 
            width: 290px;
            position: absolute;
            margin: -77px 0 0 -10px;
            z-index: 9;
        }
        .blog-item{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        .title{
            width: 820px;
        }
    }
    @media screen and (max-width: 1000px) {
        .blog , .blog-items{
            width: 750px;
        }
        .blog-item , .s-bg , .s-bg:before{
            width: 240px;
            height: 190px;
        }
        .back-text h1{ 
            width: 200px;
        }
    }
    @media screen and (max-width: 763px) {
        .blog {
            width: 100vw;
        }
        .blog-items{
            width: 650px;
            height: 540px;
            flex-wrap: wrap;
                margin: 0 auto;
        }
        .blog-item , .s-bg , .s-bg:before{
            width: 310px;
            height: 240px;
        }
        .back-text h1{ 
            width: 290px;
        }
        .title span{
            display: none;
        }
        .title{
            flex-direction: column;
            width: 87vw;
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
    @media screen and (max-width: 670px) {
        .blog{
            align-items: normal;
        }
        .blog-items{
            width: 100vw;
            height: auto;
            justify-content: center;
        }
        .blog-item , .s-bg , .s-bg:before{
            width: 420px;
            height: 320px;
        }
        .blog-item{
            margin: 10px 0;
        }
    }
</style>