<template>
    <div class="blog">
       <div class="blog-head">
            <div class="blog-title">
                <h5>PERFORMANCE</h5>
                <h1>ARTICLES</h1>
            </div>
        </div>
        <div class="blog-article">
          <div class="b-a-items">
              <div class="b-a-item" v-for='items in item' :key='items.id'>
                <div class="b-a-content"  v-if="items.typePost < 3">
                  <div :class="'b-a-img'+items.typePost" >
                      <img :src="require ('@/assets/img/blog/'+items.img) " alt="">
                  </div>
                  <div class="b-a-text">
                      <p>{{items.date}}</p>
                      <h1>{{items.title}}</h1>
                      <p>Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei his tota legere.</p>
                  </div>
                  <div class="b-a-read-more">
                      <nuxt-link :to='"/blog/"+(items.title).toLowerCase()'><p :id="items.id" >READ MORE</p></nuxt-link>
                      <img :src="require ('@/assets/img/right-black.png') " alt="">
                  </div>
                </div>
                <div class="b-a-content2"  v-if="items.typePost == 3" :style="'background-color:'+items.bgColor" >
                  <div class="b-a-img3">
                      <img :src="require ('@/assets/img/other/quote-white.png') " alt="">
                  </div>
                  <h5 class="b-a-author">{{items.author}}</h5>
                  <p class="b-a-author-text">{{items.title}}</p>
                  <div class="bg-text">
                    <h1>{{items.bgText}}</h1>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
  export default {
    data(){
        return{
            item:null,
            navPageNumber: 2,
        }
    },
    head: {
        title: 'Articles - Moto-Shop',
    },
    mounted(){
        this.navBarColor(this.navPageNumber);
        var item = document.querySelectorAll('.b-a-read-more a');
        for(var i=0;i<item.length;i++){
          item[i].addEventListener('click',(e)=>{
            var blogNumber = e.target.getAttribute('id')
            this.$store.commit('blogNumberChange',blogNumber) 
          })
        }
    },
    created(){
      this.item = this.$store.state.blog;
    },
    methods:{
      id(e){
        //var id = e.target.id;
        alert('d')
      }
    }
  }
</script>

<style scoped>
  .blog-head{
      width: 100vw;
      height: 500px;
      display: flex;
      align-items: center;
      background-color: rgb(245,245,245);
      position: relative;
  }
  .blog-head::before{
    content: 'BLOG';
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 350px;
    color: #fff;
    font-weight: 700;
  }
  .blog-title{
    width: 1300px;
    margin: 0  auto;
    position: relative;
    z-index: 5;
  }
  .blog-title h5{
    color: #E23137;
    font: 14px 'Heebo','sans-serif';
    font-weight: 700;;
    letter-spacing: 11.2px;
  }
  .blog-title h1{
    font-size: 70px;
    letter-spacing: 1.2px;
  }
  .b-a-items{
    width: 1300px;
    position: relative;
    margin-left: 2.5vw;
    height: 2590px;
  }
  .blog-article{
    padding: 100px 0 0;
    display: flex;
    justify-content: center;
  }
  .b-a-item{
    padding: 35px 0;
    width: 410px;
  }
  .b-a-item:nth-child(1){ position: absolute;left: 0%;top: 0px;}
  .b-a-item:nth-child(2){ position: absolute;left: 33.3083%;top: 0px;}
  .b-a-item:nth-child(3){ position: absolute;left: 66.6165%;top: 0px;}
  .b-a-item:nth-child(4){ position: absolute;left: 0%;top: 550px;}
  .b-a-item:nth-child(5){ position: absolute;left: 33.3083%;top: 430px;}
  .b-a-item:nth-child(6){ position: absolute;left: 66.6165%;top: 550px;}
  .b-a-item:nth-child(7){ position: absolute;left: 0%;top: 1100px;}
  .b-a-item:nth-child(8){ position: absolute;left: 33.3083%;top: 1210px;}
  .b-a-item:nth-child(9){ position: absolute;left: 66.6165%;top: 1100px;}
  .b-a-item:nth-child(10){position: absolute;left: 0%;top: 1880px;}
  .b-a-item:nth-child(11){position: absolute;left: 33.3083%;top: 1760px;}
  .b-a-item:nth-child(12){position: absolute;left: 66.6165%;top: 1650px;}
  .b-a-img1{
    width: 410px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .b-a-img2{
    width: 410px;
    height: 530px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .b-a-img1 , .b-a-img2{
    overflow: hidden;
  }
  .b-a-img1 img{
    height: 310px;
  }
  .b-a-img2 img{
    height: 650px;
  }
  .b-a-text{
    padding: 40px 0;
  }
  .b-a-text p:nth-child(1){
    font: 11px 'Heebo','sans-serif';
    letter-spacing: 1px;
    color:  #E23137;
  }
  .b-a-text h1{
    font-size: 24px;
    padding: 5px 0 15px;
  }
  .b-a-text p:last-child{
    font: 16px 'Ubuntu','sans-serif';  
    color: rgba(0,0,0, 0.4);
  }
  .b-a-read-more{
    position: relative;
    z-index: 6;
    width: 70px;
  }
  .b-a-read-more p{
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
  .b-a-read-more:hover p{
    transform: translateX(72px);
  }
  .b-a-read-more img{
    width: 150px;
  }
  .b-a-content2{
    width: 410px;
    height: 380px;
    padding: 40px;
    box-sizing: border-box;
  }
  .b-a-img3 img{
    width: 37px;
  }
  .b-a-author{
    font:11px 'Heebo','sans-serif';
    font-weight: 500;
    color: #fff;
    margin-top: 40px;
  }
  .b-a-author-text{
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
  }
  .bg-text{
    color: rgba(255,255,255, 0.1);
    font-size: 70px;
    direction: rtl;
    transform: translate(0,-20px);
  }
  @media screen and (max-width: 1400px) {
    .blog-title , .b-a-items{
        width: 1100px;
        
    }
    .b-a-items{
      height: 2350px;
    }
    .b-a-item{
      width: 350px;
      transition: all .4s ease;
    }
    .b-a-img1{
      width: 350px;
      height: 240px;
    }
    .b-a-img2{
      width: 350px;
      height: 450px;
    }
    .b-a-content2{
      width: 350px;
      height: 380px;
    }
    .bg-text{
      transform: translate(0,-52px);
    }
    .b-a-item:nth-child(4){ top: 490px;}
    .b-a-item:nth-child(6){ top: 490px;}
    .b-a-item:nth-child(7){ top: 980px;}
    .b-a-item:nth-child(8){ top: 1130px;}
    .b-a-item:nth-child(9){ top: 980px;}
    .b-a-item:nth-child(10){top: 1710px;}
    .b-a-item:nth-child(11){top: 1630px;}
    .b-a-item:nth-child(12){top: 1490px;}
  }
  @media screen and (max-width: 1200px) {
    .b-a-items{
      width: 950px;
      height: 2260px;
    }
    .b-a-item{
      width: 300px;
    }
    .b-a-img1{
      width: 300px;
      height: 210px;
    }
    .b-a-img2{
      width: 300px;
      height: 380px;
    }
    .b-a-content2{
      width: 300px;
      height: 440px;
    }
    .bg-text{
      transform: translate(0,-52px);
    }
    .b-a-item:nth-child(4){ top: 460px;}
    .b-a-item:nth-child(5){ top: 490px;}
    .b-a-item:nth-child(6){ top: 460px;}
    .b-a-item:nth-child(7){ top: 920px;}
    .b-a-item:nth-child(8){ top: 1120px;}
    .b-a-item:nth-child(9){ top: 920px;}
    .b-a-item:nth-child(10){top: 1520px;}
    .b-a-item:nth-child(11){top: 1610px;}
    .b-a-item:nth-child(12){top: 1410px;}
  }
  @media screen and (max-width: 990px) {
    .blog-title{
        width: 83vw;
        padding-top: 60px;
    }
    .blog-head{
      height: 42.5vw;
    }
    .blog-head::before{
      font-size: 23vw;
      height: 30vw;
      margin: 40px 0;
    }
     .b-a-items{
      width: 750px;
      height: 3405px;
    }
    .b-a-item{
      width: 350px;
    }
    .b-a-img1{
      width: 350px;
      height: 230px;
    }
    .b-a-img2{
      width: 350px;
      height: 450px;
    }
    .b-a-content2{
      width: 350px;
      height: 360px;
    }
    .bg-text{
      transform: translate(0,-52px);
    }
    .b-a-item:nth-child(1){ position: absolute;left: 0%;top: 0px;}
    .b-a-item:nth-child(2){ position: absolute;left: 50%;top: 0px;}
    .b-a-item:nth-child(3){ position: absolute;left: 0%;top: 480px;}
    .b-a-item:nth-child(4){ position: absolute;left: 50%;top: 410px;}
    .b-a-item:nth-child(5){ position: absolute;left: 0%;top: 960px;}
    .b-a-item:nth-child(6){ position: absolute;left: 50%;;top: 890px;}
    .b-a-item:nth-child(7){ position: absolute;left: 0%;top: 1660px;}
    .b-a-item:nth-child(8){ position: absolute;left: 50%;;top: 1370px;}
    .b-a-item:nth-child(9){ position: absolute;left: 0%;top: 2360px;}
    .b-a-item:nth-child(10){position: absolute;left: 50%;;top: 1850px;}
    .b-a-item:nth-child(11){position: absolute;left: 0%;top: 2840px;}
    .b-a-item:nth-child(12){position: absolute;left: 50%;top: 2350px;}
  }
  @media screen and (max-width: 763px) {
    .blog-title h1{
      font-size: 50px;
    }
     .b-a-items{
      width: 600px;
      height: 3370px
    }
    .b-a-item{
      width: 280px;
    }
    .b-a-img1{
      width: 280px;
      height: 190px;
    }
    .b-a-img2{
      width: 280px;
      height: 360px;
    }
    .b-a-content2{
      width: 280px;
      height: 440px;
    }
    .bg-text{
      transform: translate(0,-52px);
    }
    .b-a-item:nth-child(1){ top: 0px;}
    .b-a-item:nth-child(2){ top: 0px;}
    .b-a-item:nth-child(3){ top: 460px;}
    .b-a-item:nth-child(4){ top: 490px;}
    .b-a-item:nth-child(5){ top: 950px;}
    .b-a-item:nth-child(6){ top: 950px;}
    .b-a-item:nth-child(7){ top: 1580px;}
    .b-a-item:nth-child(8){ top: 1410px;}
    .b-a-item:nth-child(9){ top: 2240px;}
    .b-a-item:nth-child(10){top: 1890px;}
    .b-a-item:nth-child(11){top: 2720px;}
    .b-a-item:nth-child(12){top: 2380px;}
  }
  @media screen and (max-width: 620px) {
     .b-a-items{
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 7560px;
    }
    .b-a-item{
      width: 410px;
    }
    .b-a-img1{
      width: 410px;
      height: 300px;
    }
    .b-a-img2{
      width: 410px;
      height: 530px;
    }
    .b-a-content2{
      width: 410px;
      height: 380px;
    }
    .b-a-item{
      position: relative!important;
    }
    .b-a-item:nth-child(1){ left: 0%;top: 0px;}
    .b-a-item:nth-child(2){ left: 0%;top: 0px;}
    .b-a-item:nth-child(3){ left: 0%;top: 0px;}
    .b-a-item:nth-child(4){ left: 0%;top: 0px;}
    .b-a-item:nth-child(5){ left: 0%;top: 0px;}
    .b-a-item:nth-child(6){ left: 0%;top: 0px;}
    .b-a-item:nth-child(7){ left: 0%;top: 0px;}
    .b-a-item:nth-child(8){ left: 0%;top: 0px;}
    .b-a-item:nth-child(9){ left: 0%;top: 0px;}
    .b-a-item:nth-child(10){left: 0%;top: 0px;}
    .b-a-item:nth-child(11){left: 0%;top: 0px;}
    .b-a-item:nth-child(12){left: 0%;top: 0px;}
  }
</style>
