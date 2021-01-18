<template> 
  <div class="about-runway">
      <div class="a-r-left-text">
        <div class="a-r-l-t-title">
            <h5>ADRENALINE</h5>
            <h1>ADJUSTS THE HYDRAULIC FORK</h1>
            <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue.</p>
            <ul>
              <li> Web & Mobile-Optimized</li>
              <li> Custom Domain Server</li>
              <li> Best Hosting on the Market</li>
              <li> Outstanding Support</li>
            </ul>
        </div>
      </div>
      <div class="ar-bg-img">
        <div class="a-r-info">
        <div class="a-r-info-badge">
          <h1>TURN 9</h1>
          <p>Praesent feugiat totor mi gravida, eget consec tetur spaien tempor.</p>
          <h5>AVERAGE SPEED: 195KM/H</h5>
        </div>
        <div class="a-r-info-badge">
          <h1>TURN 12</h1>
          <p>Praesent feugiat totor mi gravida, eget consec tetur spaien tempor.</p>
          <h5>AVERAGE SPEED: 226KM/H</h5>
        </div>
        <div class="a-r-info-badge">
          <h1>TURN 1</h1>
          <p>Praesent feugiat totor mi gravida, eget consec tetur spaien tempor.</p>
          <h5>AVERAGE SPEED: 257KM/H</h5>
        </div>
        <div class="a-r-info-badge">
          <h1>TURN 3</h1>
          <p>Praesent feugiat totor mi gravida, eget consec tetur spaien tempor.</p>
          <h5>AVERAGE SPEED: 96KM/H</h5>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      var control = 0;
      window.addEventListener('scroll',(event)=>{
        try{
          var y =document.documentElement.scrollTop;
          var width2 = document.body.offsetWidth;
          var cordinat = document.querySelector('.about-runway').offsetTop-300;
          if(width2 < 996){
              
          }else{
              if(y > cordinat){
                document.querySelector('.ar-bg-img').style.opacity = 1;
                document.querySelector('.a-r-l-t-title h5').style = 'opacity: 1; transform: translateX(0)';
                document.querySelector('.a-r-l-t-title h1').style = 'opacity: 1; transform: translateX(0)';
                document.querySelector('.a-r-l-t-title p').style = 'opacity: 1; transform: translateX(0)';
                for(var i=0;i<4;i++){
                  document.querySelectorAll('.a-r-l-t-title li')[i].style = 'opacity: 1; transform: translateX(0)';
                }
                control = 1;
              }
          }
        }catch(error){

        } 
      });
      var i = 0;
      var item = document.querySelectorAll('.a-r-info-badge');
      var queue = [2,3,0,1]
      var interval = setInterval(() => {
        if(control == 1){
          if(i == 0){ 
            item[queue[i]].style='opacity: 1'
            item[queue[i]].classList.add('badge-in')
          }else if(i == 4){ 
              clearInterval(interval)
          }else{
            item[queue[i-1]].classList.remove('badge-in')
            item[queue[i-1]].classList.add('badge-out')
            item[queue[i]].style='opacity: 1'
            item[queue[i]].classList.add('badge-in')
          }
          i++ 
        }
        }, 3000);
    }
  }
</script>

<style scoped>
  .about-runway{
    background-color: #000;
    width: 100vw;
    height: 750px;
    display: flex;
    align-items: center;
  }
  .ar-bg-img{
    background-image: url(/_nuxt/assets/img/other/runway.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #000;
    content: '';
    position: absolute;
    width: 100vw;
    height: 750px;
    opacity: 0;
    transition: opacity .5s ease;
    display: flex;
    align-items: center;

  }
  .a-r-info{
    display: flex;
    align-items: center;
    width: 1600px;
    margin: 0 auto;
    height: 2px;
  }
  .a-r-left-text{
    position: relative;
    z-index: 5;
  }
  .a-r-info-badge{
    width: 230px;
    height: 240px;
    background-color: #E23137;
    color: #fff;
    padding: 30px  20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
  }
  .a-r-info-badge::before{
    content: '';
    position: absolute;
    border-top: 25px solid transparent;
    border-left: 25px solid  transparent;
    border-bottom: 25px solid #E23137;
    border-right: 25px solid transparent;
  }
  .a-r-info-badge:nth-child(1){
    transform: translate(115px,-26px);
    opacity: 0;
  }
  .a-r-info-badge:nth-child(1):before{
    transform: translate(70px,-80px);
  }
  .a-r-info-badge:nth-child(2){
    transform: translate(215px,-118px);
    opacity: 0;
  }
  .a-r-info-badge:nth-child(2):before{
    transform: translate(70px,-80px);
  }
  .a-r-info-badge:nth-child(3){
    transform: translate(450px,90px);
    opacity: 0;
  }
  .a-r-info-badge:nth-child(3):before{
    border-top: 25px solid  #E23137;
    border-bottom: 25px solid transparent;
    transform: translate(70px,210px);
  }
  .a-r-info-badge:nth-child(4){
    transform: translate(740px,-108px);
    opacity: 0;
  }
  .a-r-info-badge:nth-child(4):before{
    border-top: 25px solid  #E23137;
    border-bottom: 25px solid transparent;
    transform: translate(70px,210px);
    
  }
  .a-r-info h1{
    font-size: 24px;
  }
  .a-r-info h1::before{
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: #fff;
    transform: translateY(40px);
  }
  .a-r-info p{
    font: 16px 'Ubuntu', 'sans-serif';
    width: 170px;
    line-height: 25px;
  }
  .a-r-info h5{
    letter-spacing: 2px;
  }
  .a-r-l-t-title{
    transform: translateX(67.5vw);
  }
  .a-r-l-t-title h1{
    width: 350px;
    font-size: 45px;
    line-height: 45px;
    color: #fff;
    padding: 20px 0;
    opacity: 0;
    transform: translateX(110px);
    transition: all .4s ease;
  }
  .a-r-l-t-title h5{
    font-size: 16px;
    letter-spacing:15px;
    font-weight: 400;
    color:  #E23137;
    opacity: 0;
    transform: translateX(110px);
    transition: all .4s ease .2s;
  }
  .a-r-l-t-title p{
    font: 18px 'Ubuntu', 'sans-serif';
    color: rgba( 255, 255, 255, 0.4);
    width: 440px;
    line-height: 30px;
    opacity: 0;
    transform: translateX(110px);
    transition: all .4s ease .3s;
  }
  ul{
    padding: 20px 0;
  }
  li{
    font: 18px 'Ubuntu', 'sans-serif';
    color: rgba( 255, 255, 255, 0.4);
    padding: 10px 30px;
  }
  li:nth-child(1){ opacity: 0; transform: translateX(110px); transition: all .4s ease .4s;}
  li:nth-child(2){ opacity: 0; transform: translateX(110px); transition: all .4s ease .5s;}
  li:nth-child(3){ opacity: 0; transform: translateX(110px); transition: all .4s ease .6s;}
  li:nth-child(4){ opacity: 0; transform: translateX(110px); transition: all .4s ease .7s;}
  li::before{
    content: '';
    position: absolute;
    border-bottom: 2px solid #E23137;
    border-right: 2px solid #E23137;
    width: 5px ;
    height: 15px;
    transform: rotate(45deg) translate(-15px, 15px);
  }
  .badge-in{
    animation: badge-in .3s ease forwards ;
  }
  .badge-out{
    animation: badge-out .3s ease forwards;
  }
  @keyframes badge-in {
    0%{margin-bottom: -20px; opacity: 0;}
    50%{margin-bottom: 0px;opacity: 1;}
    70%{margin-bottom: -10px;}
    100%{margin-bottom: 0px;}
  }
  @keyframes badge-out {
    0%{margin-bottom: 0px;opacity: 1;}
    30%{margin-bottom: -10px;}
    50%{margin-bottom: 0px;opacity: 0;}
    100%{margin-bottom: -20px;opacity: 0;}
  }
  @media screen and (max-width: 1700px) {
    .about-runway , .ar-bg-img{
      height: 600px;
    }
    .ar-bg-img{
      background-size: auto 600px;
    }
    .a-r-l-t-title{
      transform: translateX(58.5vw);
    }
    .a-r-info{
      width: 1000px;
    }
    .a-r-info-badge{
      width: 180px;
      height: 195px;
    }
    .a-r-info h1{
      font-size: 18px;
    }
    .a-r-info h1::before {
      transform: translateY(30px);
    }
    .a-r-info p{
      font: 12px 'Ubuntu', 'sans-serif';
      width: 130px;
      line-height: 15px;
    }
    .a-r-info h5{
      letter-spacing: 1px;
      font-size: 11px;
    }
    .a-r-info-badge:nth-child(1):before ,.a-r-info-badge:nth-child(2):before {
      transform: translate(50px,-80px);
    }
    .a-r-info-badge:nth-child(3):before ,.a-r-info-badge:nth-child(4):before {
      transform: translate(50px,163px);
    }
    .a-r-info-badge:nth-child(1) {
      transform: translate(-49px,-15px);
    }
    .a-r-info-badge:nth-child(2) {
      transform: translate(30px,-90px);
    }
    .a-r-info-badge:nth-child(3) {
      transform: translate(213px,70px);
    }
    .a-r-info-badge:nth-child(4) {
      transform: translate(446px,-100px);
    }
  }
  @media screen and (max-width: 996px) {
    .about-runway{
      justify-content: center;
    }
    .ar-bg-img{
      background-blend-mode: hard-light;
      background-position: -1vw center;
      opacity: 0.3;
    }
    .a-r-info{
      display: none;
    }
    .a-r-l-t-title{
      transform: translateX(0);
    }
    .a-r-info-badge{
      display: none;
    }
    .a-r-l-t-title h5 , 
    .a-r-l-t-title h1 , 
    .a-r-l-t-title p ,
    .a-r-l-t-title li{
      opacity: 1!important;
      transform: translateX(0px)!important;
    }
  }
</style>
