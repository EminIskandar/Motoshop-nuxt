<template>
    <div class="our-equipment">
         <div class="o-e-title">
            <h5>PERFORMANCE</h5>
            <h1>IMPROVE GENERAL RIDEABILITY</h1>
            <span></span>
            <h5>PERFORMANCE</h5>
        </div>
        <div class="o-e-content">
          <div class="o-e-c-img">
            <img src="/_nuxt/assets/img/other/motor.png" alt="">
          </div>
          <div class="o-e-c-list">
            <ul>
              <div class="o-e-c-list-left">
                <li>
                  <span>01</span>
                  <div class="o-e-c-list-text">
                    <h3>FRONT SUSPENSION</h3>
                    <p>Aliquam lorem ante, daibus in, viera quis, feugiat hasell. Etiam ultricies nisi vel.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div class="o-e-c-list-text">
                    <h3>TRANSMISSION</h3>
                    <p>Aliquam lorem ante, daibus in, viera quis, feugiat hasell. Etiam ultricies nisi vel.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                    <div class="o-e-c-list-text">
                      <h3>NEW BRAKES</h3>
                      <p>Aliquam lorem ante, daibus in, viera quis, feugiat hasell. Etiam ultricies nisi vel.</p>
                    </div>
                </li>
              </div>
              <div class="o-e-c-list-right">
                <li>
                  <span>04</span>
                  <div class="o-e-c-list-text">
                    <h3>NEW CLUTCH</h3>
                    <p>Aliquam lorem ante, daibus in, viera quis, feugiat hasell. Etiam ultricies nisi vel.</p>
                  </div>
                </li>
                <li>
                  <span>05</span>
                    <div class="o-e-c-list-text">
                      <h3>TRACTION MANAGEMENT</h3>
                      <p>Aliquam lorem ante, daibus in, viera quis, feugiat hasell. Etiam ultricies nisi vel.</p>
                    </div>
                </li>
                <li>
                  <span>06</span>
                    <div class="o-e-c-list-text">
                      <h3>BACK SUSPENSION</h3>
                      <p>Aliquam lorem ante, daibus in, viera quis, feugiat hasell. Etiam ultricies nisi vel.</p>
                    </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    mounted(){
        window.addEventListener('scroll',(event)=>{
          try{ 
            var y =document.documentElement.scrollTop;
            var width2 = document.body.offsetWidth;
            var cordinat = document.querySelector('.our-equipment').offsetTop-300;
            if(width2 < 764){
                 
            }else{
                if(y > cordinat){
                    document.querySelector('.our-equipment h1').style ='opacity: 1; transform: translateX(0px);'
                    document.querySelectorAll('.our-equipment h5')[1].style ='opacity: 1; transform: translateX(0px);'
                    document.querySelector('.o-e-c-img img').style ='opacity: 1; transform: translateY(0px);'
                    for(var i=0;i<6;i++){
                      document.querySelectorAll('.o-e-c-list li')[i].style ='opacity: 1'
                    }
                }
            }
          }catch(error){

          }
        });
    }
  }
</script>

<style scoped>
  .our-equipment{
    padding: 100px 0;
  }
  .o-e-title{
      display: flex;
      width: 820px;
      margin: 0 auto; 
      align-items: center;
  }
  .o-e-title h1{
      width: 350px;
      direction: rtl;
      padding:  0 50px;
      font-size: 45px;
      line-height: 45px;
      transform: translateX(-70px);
      opacity: 0;
      transition: all .5s ease;
  }
  .o-e-title h5{
      padding: 28px 50px;
      font-size: 16px;
      letter-spacing:11px;
      color:  #E23137;
      transform: translateX(70px);
      opacity: 0;
      transition: all .5s ease;
  }
  .o-e-title h5:first-child{
      display: none;
  }
  .o-e-title span{
      width: 1px;
      height: 90px;
      background: none;
      border-left: 1px solid #000;
  }
  .o-e-content{
    display: flex;
    width: 1300px;
    margin: 0 auto;
    padding: 70px 0;
    justify-content: center;
  }
  .o-e-c-img img {
    opacity: 0;
    transform: translateY(50px);
    transition: all .5s ease;
  }
  .o-e-c-list {
    position: absolute;
  }
  .o-e-c-list ul{
    width: 1300px;
    display: flex;
    justify-content: space-between;
  }
  .o-e-c-list-left {
    direction: rtl;
  }
  .o-e-c-list li{
    display: flex;
    align-items: baseline;
    padding: 35px 0;
    opacity: 0;
  }
  li:nth-child(1){transition: all .4s ease .1s;}
  li:nth-child(2){transition: all .4s ease .2s;}
  li:nth-child(3){transition: all .4s ease .3s;}
  li:nth-child(4){transition: all .4s ease .1s;}
  li:nth-child(5){transition: all .4s ease .2s;}
  li:nth-child(6){transition: all .4s ease .3s;}
  .o-e-c-list-text{
    width: 300px;
    padding-left: 10px;
  }
  .o-e-c-list span{
    width: 40px;
    background: none;
    color: rgba(0, 0, 0, 0.2);
    font-size: 40px;
    font-weight: 700;
    transform: translateY(8px);
  }
  .o-e-c-list h3{
    font-size: 24px;
    font-weight: 700;
  }
  .o-e-c-list p{
    font: 16px 'Ubuntu','sans-serif';
    color: rgba(0, 0, 0, 0.4); 
    padding: 10px 0;
  }
  @media screen and (max-width: 1400px) {
    .o-e-content , .o-e-c-list ul{
      width: 1100px;
    }
    .o-e-c-img img{
      width: 340px;
    }
    .o-e-c-list li{
      padding: 22px 0;
    }
  }
  @media screen and (max-width: 1200px) {
    .o-e-content , .o-e-c-list ul{
      width: 950px;
    }
    .o-e-c-img img{
      width: auto;
    }
    .o-e-c-list li{
      padding: 10px 0;
    }
    .o-e-content{
      justify-content: space-between;
      align-items: center;
    }
    .o-e-c-list{
      position: relative;
    }  
    .o-e-c-list ul{
      width: 460px;
      display: block;
    }
    .o-e-c-list-text{
      width: 400px;
    }
    .o-e-c-list-left{
      direction: ltr;
    }
    @media screen and (max-width: 996px) {
      .o-e-content , .o-e-c-list ul{
        width: 750px;
      }
      .o-e-c-img img{
        width: 380px;
      }
      .o-e-c-list ul{
        width: 350px;
        display: block;
      }
      .o-e-c-list-text{
        width: 400px;
      }
    }
    @media screen and (max-width: 764px) {
      .o-e-content , .o-e-c-list ul{
        width: 81vw;
        flex-direction: column;
      }
      .o-e-c-list-text{
        width: 81vw;
      }
      .o-e-title span{
          display: none;
      }
      .o-e-title{
          flex-direction: column;
          width: 87vw;
          align-items: flex-start;
      }
      .o-e-title h1{
          direction: ltr;
          padding: 0;
          opacity: 1;
          transform: translateX(0);
      }
      .o-e-title h5{
          padding: 18px 0;
      }
      .o-e-title h5:first-child{
          display: block;
          opacity: 1;
          transform: translateX(0);
      }
      .o-e-title h5:last-child{
          display: none!important;
      }
      .o-e-c-img img{
        opacity: 1!important;
        transform: translateX(0)!important;;
      }
      .o-e-c-list li{
        opacity: 1!important;;
      }
    }
    
  }
</style>
