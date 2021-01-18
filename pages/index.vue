<template>
  <div class="container">
    <div class="shop-carousel" >
      <div class="c-items">
        <div class="c-item">
          <div class="c-text">
            <h5>PERFORMANCE </h5>
            <h1>SUPERIOR ACCELERATION</h1>
            <p>Lorem ipsum dolor sit amet, copy the following link into you'll use this resource on. If you want to know more, adipiscing elit. Morbi obortis ligula euismod se.</p>
          </div>
          <div class="c-img">
            <img :src="require ('@/assets/img/h2-rev-img-6.png') " alt="">
          </div>
          <div class="c-product-name">
            <h1><p>R</p><p>1</p><p></p></h1>
          </div>
        </div>
      </div>
      <div class="c-nav">
        <div class="nav-arrow-btn">
          <div class="nav-btn">
            <div class="btn-left">
              <div class="btn">
                <p class="prev">PREV</p>
              </div>
            </div>
            <div class="btn-right">
              <div class="btn">
                <p class="next">NEXT</p>
              </div>
            </div>
          </div>
          <div class="arrow">
            <img :src="require ('@/assets/img/left.png') " alt="">
            <img :src="require ('@/assets/img/right-black.png') " alt="">
          </div>
        </div>
        <div class="nav-count">
          <div class="c-count">
            <p> <span>01</span> / <span>03</span></p>
          </div>
          <div class="c-name">
            <p>QUICK</p>
          </div>
        </div>
      </div>
      <div class="bg-color"></div>
    </div>
    <Section></Section>
    <Product></Product>
    <Ad></Ad>
    <motoSlider></motoSlider>  
    <blog></blog>  
    <Mark></Mark>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bgImage: require('@/assets/img/Moto-GP.jpg'),
      count : 0,
      item: [
        {title: 'SUPERIOR ACCELERATION' , img : require ('@/assets/img/slider/index-slider-img1.png'),  n1: 'R',n2: '1' ,n3 :'' ,shorText: 'RAPID'},
        {title: 'MADE BY PROFESSIONALS' , img : require ('@/assets/img/slider/index-slider-img2.png'),n1: 'G',n2: 'X',n3:'R',shorText: 'SWIFT'},
        {title: 'TAKE ON THE CHICANE' , img : require ('@/assets/img/slider/index-slider-img3.png'), n1: 'H',n2: 'R',n3:'T',shorText: 'QUICK'}
      ],
      navPageNumber: 0,
      interval: null,
    }
  },
  mounted(){
    this.navBarColor(this.navPageNumber);
    //
    var width = document.body.offsetWidth;
    var p = document.querySelectorAll('.c-product-name p');
    var img = document.querySelector('.c-img img');
    var text = document.querySelector('.c-text');
    var navText = document.querySelector('.c-name p');
    setTimeout(()=>{
      document.querySelector('.bg-color').style ='width : 50%'
      p[0].style ='transform: rotateX(0deg);'
      p[1].style ='transform: rotateX(0deg);'
      img.style ='transform: translate( 0px, 0px);opacity: 1;'
      text.style ='transform: translate(0, 0);opacity: 1;'
      navText.style = 'transform: translate(0, 0)'
    },500)
    document.querySelector('.btn-left').addEventListener('click',()=>{
      this.count-=1
      if(this.count == -1){
        this.count = 2; 
      }
      this.carousel(p,img,text,navText);
    })
    document.querySelector('.btn-right').addEventListener('click',()=>{
      this.count+=1
      if(this.count == 3){
        this.count = 0
      }
      this.carousel(p,img,text,navText);
    })
    var interval = setInterval(() => {
      this.interval = this.$store.state.interval
      if(this.interval == 1){
        clearInterval(interval)
      }else{
        this.count+=1
        if(this.count == 3){
          this.count = 0
        }
        this.carousel(p,img,text,navText);
      }
    },15000);
  },
  methods :{
    async carousel(p,img,text,navText){
      try{
        document.querySelectorAll('.c-count span')[0].innerHTML= '0'+ (this.count+1);
        var item = document.querySelector('.c-item');
        item.classList.remove('c-in')
        item.classList.add('c-out')
        p[0].style =''
        p[1].style =''
        p[2].style =''
        img.style  =''
        text.style =''
        navText.style = ''
        setTimeout(()=>{
          item.classList.remove('c-out')
          item.classList.add('c-in');
          p[0].style ='transform: rotateX(0deg);'
          p[1].style ='transform: rotateX(0deg);'
          p[2].style ='transform: rotateX(0deg);'
          img.style ='transform: translate( 0px, 0px);opacity: 1;'
          text.style ='transform: translate(0, 0);opacity: 1;'
          navText.style = 'transform: translate(0, 0)'
          navText.innerHTML = Object.values(this.item[this.count])[5];
          document.querySelector('.c-text h1').innerHTML = Object.values(this.item[this.count])[0];
          document.querySelectorAll('.c-product-name h1 p')[0].innerHTML = Object.values(this.item[this.count])[2];
          document.querySelectorAll('.c-product-name h1 p')[1].innerHTML = Object.values(this.item[this.count])[3];
          document.querySelectorAll('.c-product-name h1 p')[2].innerHTML = Object.values(this.item[this.count])[4];
          document.querySelector('.c-img img').src = Object.values(this.item[this.count])[1];
        },1000)
      }catch(error){

      }
    }
  }
}
</script>

<style scoped>
  .shop-carousel{
    width: 1920px;
    height: 850px;
    background-color: #bfbfbf;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .shop-carousel:after {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 90%;
    z-index: 0;
    opacity: 0.1;
    background-image: url(/_nuxt/assets/img/Moto-GP.jpg); 
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    filter: grayscale(100%);
  }
  .bg-color{
    position: absolute;
    left: 0;
    width: 0;
    height: 850px;
    background-color: #E23137;;
    transition: all .8s ease;
  }
  .c-items{
    width: 100vw;
    height: 850px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .c-item{
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1500px;
  }
  .c-text{
    width: 450px; 
    color: #fff;
    opacity: 0;
    transform: translate(50px ,0);
    transition:  all .5s ease .4s;
  }
  .c-text h5{
    font: 14px 'Heebo', sans-serif;
    font-weight: 700;
    letter-spacing: 12px;
  }
  .c-text h1{ 
    font-size: 70px;
    font-weight: 700;
    line-height: 60px;
    padding: 20px 0 30px;
    margin-left: -5px;
  }
  .c-text p{
    font: 18px 'Ubuntu', sans-serif;
    line-height: 30px;
    width: 450px;
  }
  .c-img{
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
  }
  .c-img img {
    transform: translate( 50px,0px );
    opacity: 0;
    transition:  all .7s ease;
  }
  .c-product-name h1{
    font-size: 350px;
    display: flex;
    color: rgba(0,0,0,0.1);
  }
  .c-product-name p {
    transform: rotateX(90deg);
    transition: all .5s ease;
  }
  .c-product-name p:nth-child(1){
    transition: all .5s ease .2s;
  }
  .c-product-name p:nth-child(2){
    transition: all .5s ease .4s;
  }
  .c-product-name p:nth-child(3){
    transition: all .5s ease .6s;
  }
  .c-nav{
    position: absolute;
    height: 850px;
    z-index: 20;
  }
  .nav-arrow-btn{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 850px;
  }
  .prev , .next{
    width: 60px;
    height: 22px;
    text-align: center;
    background-color: #000;
    transition: transform .4s ease;
  }
  .prev {
    transform: translate(120px , 20px);
    background-color: #E23137;
  }
  .next {
    transform: translate( -80px , 20px);
    background-color:  #bfbfbf;
    color: #000;
  }
  .btn:hover .prev {
    transform: translate(40px , 20px);
  }
  .btn:hover .next {
    transform: translate(100px , 20px);
  }
  .nav-btn , .arrow{
    display: flex;
    width: 1920px;
    height: 100px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: flex-end;
    padding: 35px 45px;
    box-sizing: border-box;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
  }
  .nav-btn{
    z-index: 10;
  }
  .btn{
    width: 100px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.2); 
    transition: width .4s ease;
    cursor: pointer;
  } 
  .btn-right .btn{
    border: 1px solid rgba(0, 0, 0, 0.2);; 
  }
  .btn:hover {
    width: 200px;
  }
  .arrow {
    position: absolute;
    z-index: 3;
  }
  .arrow img{
    width: 150px;
    padding: 25px;
  }
  .arrow:last-child img{
    right: 0;
  }
  .nav-count{
    width: 220px;
    height: 30px;
    position: absolute;
    top: 0;
    transform: rotate(90deg) translate(510px, 70px);
    right: 0;
    transform-origin: right;
    border-bottom: 2px solid rgb(121, 121, 121);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
  }
  .nav-count span{
    background: none;
    font-weight: 700;
    font-size: 16px;
    padding: 0;
  }
  .nav-count span:last-child{
    color: #999;
  }
  .nav-count{
    font-weight: 700;
    font-size: 16px;
    overflow: hidden;
  }
  .c-name p {
    transform: translateX(40px);
    transition: all .4s ease;
  }
  .c-in{
    animation: c-in 1.5s ease forwards;
  }
  .c-out{
    animation: c-out 1.5s ease forwards;
  }
  @keyframes c-in {
    from{ opacity: 0; display: none;}
    to { opacity: 1;display: flex;}
  }
  @keyframes c-out {
    from{ opacity: 1;display: flex;}
    to { opacity: 0;display: none;}
  }
  @media screen and (max-width: 1900px) {
    .bg-color{ 
      width: 50%;
    }
    .nav-btn , .arrow{
      width: 100vw;
    }
  }
  @media screen and (max-width: 1700px) {
    .shop-carousel, .c-items , .bg-color{
      height: 650px;
    }
    .c-item{
      width: 90vw;
    }
    .c-img img{
      width: 450px;
    }
    .c-product-name h1{
      font-size: 250px;
      transform: translateX(-100px);
    }
    .c-nav ,  .nav-arrow-btn{
      height: 650px;
    }
    .c-text p{
      position: relative;
    }
    .nav-count{
      transform: rotate(90deg) translate(410px, 70px);
    }
    .shop-carousel:after{
      height: 70%;
    }
  }
  @media screen and (max-width: 1220px) {
    .c-product-name img{
      transform: translateX(-120px);
    }
  }
  @media screen and (max-width: 996px) {
    .shop-carousel::after{
      background: none;
    }
    .bg-color{
      width: 100%!important;
    }
    .c-items , .shop-carousel ,.bg-color{
      height: 700px;
    }
     .c-items{
       justify-content: normal;
     }
    .c-item{
      flex-direction: column;
      padding: 100px 0 0 ;
      width: 97vw;
    }
    .c-product-name h1{
      display: none;
    }
    .c-img{
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0px);
    }
    .c-img img{
      width: 350px;
      transform: none;
    }
    .c-text{
      text-align: center;
    }
    .nav-arrow-btn{
      display:none;
    }
    .nav-count{
      transform: rotate(90deg) translate(410px, -90vw);
      border-color: #fff;
      color: #fff;
    }
    .c-count span{
      color: #fff;
    }
  }
  @media screen and (max-width: 768px) {
    .nav-count{
      display: none;
    }
  }
</style>
