<template>
  <div>
    <div class="nav nav-out">
      <div class="nav-bar">
        <div class="logo">
          <img :src="require('@/assets/img/other/black-logo.png')" alt="">
        </div>
        <div class="nav-menu">
          <nuxt-link to='/' class="link">HOME</nuxt-link>
          <nuxt-link to='/shop' class="link">SHOP</nuxt-link>
          <nuxt-link to='/blog' class="link">BLOG</nuxt-link>
          <nuxt-link to='/our-service' class="link">OUR SERVICE</nuxt-link>
          <nuxt-link to='/team' class="link">TEAM</nuxt-link>
          <nuxt-link to='/about' class="link">ABOUT</nuxt-link>
          <nuxt-link to='/contact-us' class="link">CONTACT US</nuxt-link>
        </div>
        <div class="nav-btn">
          <input type="text" value="SEARCH">
          <div class="cart">
            <button class="cart-btn">CART</button>
            <span class="item-count">{{cartItem}}</span>
          </div>
          <div class="cart-item">
            <div class="items">
              <!--<p>NO PRODUCTS IN THE CART.</p>-->
              <div class="cart-item-product">
                
              </div>
              <div class="cip-total-btn">
                <div class="cart-item-total">
                  <h1>ORDER TOTAL</h1>
                  <h1>$300</h1>
                </div>
                <div class="cart-item-view-cart">
                  <div class="c-i-v-c-button">
                    <nuxt-link to='/cart' class="vtc">
                      <div class="c-i-v-c-btn-right">
                        <div class="c-i-v-c-btn">
                          <span class="c-i-v-c-arrow"></span>
                          <p class="c-i-v-c-next">VIEW CART</p>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact">
            <button class="contact-btn">
              <ul>
                <div>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </div>
                <div>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </div>
                <div>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </div>
              </ul>
            </button>
            <div class="contact-item">
              <div class="title">
                <h2>GRANDPRIX</h2>
                <p>Lorem ipsum dolor sit amet, qui aperiam vituperatoribus at. Aliquip percipit ei vix, ceteros mentitum reprehendunt eu est.</p>
              </div>
              <div class="instagram">
                <div class="title">
                  <h2>INSTAGRAM</h2>
                </div>
                <div class="insta-img">
                  <img :src="require('@/assets/img/other/insta1.jpg')" alt="">
                  <img :src="require('@/assets/img/other/insta2.jpg')" alt="">
                  <img :src="require('@/assets/img/other/insta3.jpg')" alt="">
                  <img :src="require('@/assets/img/other/insta4.jpg')" alt="">
                </div>
              </div>
              <div class="contact-info">
                <div class="title">
                  <h2>QUICK INFO</h2>
                </div>
                <div class="hours">
                  <div class="c-icon">
                    <i class="far fa-clock"></i>
                  </div>
                  <div class="text">
                    <p>Monday-Friday: 9am to 5pm;</p>
                    <p>Satuday: 10am to 2pm</p>
                  </div>
                </div>
                <div class="post">
                  <div class="c-icon">
                    <i class="far fa-envelope "></i>
                  </div>
                  <div class="text">
                    <p>7300-7398 Colonial Rd, Brooklyn</p>
                    <p>242 Wythe Ave #4, Brooklyn</p>
                  </div>
                </div>
                <div class="phone">
                  <div class="c-icon">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div class="text">
                    <p>+ (123) 124-567-8901</p>
                    <p>+ (123) 124-567-8901</p>
                  </div>
                </div>
                <div class="email">
                  <div class="c-icon">
                    <i class="far fa-envelope"></i>
                  </div>
                  <div class="text">
                      <p>grandprix@qodeinteractive.com</p>
                      <p>grandprix@qodeinteractive.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="background"></div>
    <Nuxt/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return{
      control:0,
      color: 0,
      animation:0,
      cartItem : 0,
    }
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;700&display=swap",
      }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/d2f1f37fb8.js' , crossorigin : 'anonymous'},
    ]
  },
  mounted(){
    this.mySpecialMethod()
  },
  methods:{
    close(){ 
      window.addEventListener('click',(event)=>{
        event.stopPropagation
        var x = event.clientX;
        var y = event.clientY;
        var width2 = document.querySelector('.contact-item').offsetTop;
        var left = document.querySelector('.contact-item').getBoundingClientRect().x;
        if( y < 35 || y > 876 || x < left || x> left+525 ){
          document.querySelector('.contact-item').style="visibility: hidden; height: 0px ;padding: 0px";
          document.querySelector('.contact-btn').style="background-color: #E23137";
          for( var i=0;i<12;i++){
            document.querySelectorAll('.contact-btn li')[i].style="background-color: #fff";
          }
           this.color = 0
        } 
      })
    }
  }
}
</script>


<style>
::selection {
  background-color:  #E23137;
  color: #fff;
}
body{
  margin: 0;
  padding: 0;
  font-family: 'Rajdhani', sans-serif;
  overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6,p{
  margin: 0;
  padding: 0;
}

.background{
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  z-index: 35;
  opacity: 0;
  visibility: hidden;
  transition: all .4s ease;
}
.nav{
  position: absolute;
  width: 1920px;
  z-index: 40;
  padding: 35px 0;
  top: 0;
}
.nav-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1833px;
  height: 70px;
  margin: 0 auto;
}
.logo img{
  height: 40px;
}
.nav-menu {
  width: 95.5vw;
  position: absolute;
  display: flex;
  justify-content: center;
}
.link{
  padding: 22px 30px;
  box-sizing: border-box;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 16px;
}
.link:before{
  content: '';
  position: absolute;
  width: 4px;
  height: 3px;
  background-color: #E23137;
  visibility: hidden;
  transition: all .4s ease;
}
.link:nth-child(1)::before{ 
  transform: translate(15px, 20px);
}
.link:nth-child(1):hover::before{ 
  visibility: visible;
  transform: translate(15px, 20px) scaleX(5);
  transform-origin: center;
}
.link:nth-child(2)::before{ 
  transform: translate(15px, 20px);
}
.link:nth-child(2):hover::before{ 
  visibility: visible;
  transform: translate(15px, 20px) scaleX(5);
  transform-origin: center;
}
.link:nth-child(6)::before{ 
  transform: translate(20px, 20px);
}
.link:nth-child(6):hover::before{ 
  visibility: visible;
  transform: translate(20px, 20px) scaleX(5);
  transform-origin: center;
}
.link:nth-child(4)::before{ 
  transform: translate(40px, 20px);
}
.link:nth-child(4):hover::before{ 
  visibility: visible;
  transform: translate(40px, 20px) scaleX(5);
  transform-origin: center;
}
.link:nth-child(5)::before{ 
  transform: translate(15px, 20px);
}
.link:nth-child(5):hover::before{ 
  visibility: visible;
  transform: translate(15px, 20px) scaleX(5);
  transform-origin: center;
}
.link:nth-child(3)::before{ 
  transform: translate(15px, 20px);
}
.link:nth-child(3):hover::before{ 
  visibility: visible;
  transform: translate(15px, 20px) scaleX(5);
  transform-origin: center;
}
.link:nth-child(7)::before{ 
  transform: translate(35px, 20px);
}
.link:nth-child(7):hover::before{ 
  visibility: visible;
  transform: translate(35px, 20px) scaleX(5);
  transform-origin: center;
}
.link:hover{
  background-color: #fff;
  color: #000;
}
a{
  text-decoration: none;
  color: #fff;
}
button,input{
  border: none;
  background: none;
  color: #000;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 16px;
}
button:focus ,input:focus{
  outline: none;
  box-shadow: none;
}
.nav-btn{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  font-weight: 700;
  width: 20.5vw;
  position: relative;
  z-index: 40;
}
.nav-btn input{
  direction:rtl;
  width: 10vw;
  margin-right: 20px;
}
.nav-btn input:focus{
  border-bottom: 1px solid #E23137;
}
.cart , .cart-btn , .cart-item p{
  cursor: pointer;
}
.cart {
    display: flex;
    padding-right: 20px;
}
span{
  padding: 2px 6px;
  background-color: #eee;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  transition: all .4s ease;
}
span:hover{
  background-color: #E23137;
  color: #fff;
}
.contact-btn{
  width: 80px;
  height: 70px;
  background-color: #E23137;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
ul,li{
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
}
.contact-btn button{
  width: 35px;
}
.contact-btn div{
  display: flex;
  justify-content: center;
  width: 35px;
  flex-wrap: wrap;
  transition: all .4s ease;
}
.contact-btn ul{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.contact-btn li{
  padding: 2px;
  border-radius: 100%;
  background-color: #fff;
  margin: 2px;
  transition: all .4s ease ;
}
.contact-btn div{
  width: 60px;
}
.cart-item{
  position: absolute;
  transform: translateX(-80px);
  margin-top: 70px;
  width: 320px;
  height: auto;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}
.items{
  position: absolute;
  top: 0px;
  transition: all .4s ease;
  height: 0px;
  width: inherit;
  top: 0px;
  z-index: 70;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}
.cart-item p{
  font-size: 18px;
}
.contact-item{
  position: absolute;
  width: 520px;
  height: 0px;
  right: 0;
  background: #fff;
  color: #000;
  box-sizing: border-box;
  visibility: hidden;
  transition: height .2s linear;
  overflow: hidden;
}
.c-i-p-item {
  height: 100px;
  width: 320px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px 20px 10px;
  box-sizing: border-box;
}
.cipi-info{
  width: 230px;
  display: flex;
  align-items: center;
}
.cipi-text {
  margin-left: 20px;
}
.cipi-img {
  width: 65px;
  height: 65px;
}
.cipi-img img{
  width: 65px;
  height: 65px;
}
.c-i-p-item h1{
  font-size: 16px;
}
.cipi-quantity{
  font: 11px 'Heeboo' ,sans-serif!important;
  color: #E23137;
}
.cipi-info span{
  background: none!important;
  font: 11px 'Heeboo' ,sans-serif;
  color: #E23137;
}
.cip-total-btn {
    width: 320px;
    height: 150px;
}
.cart-item-total {
  display: flex;
  justify-content: space-between;
  width: 320px;
  background-color: #f5f5f5;
  padding: 10px 20px;
  box-sizing: border-box;
  height: 50px;
}
.cart-item-total h1{
  font-size: 18px;
}
.vtc {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.cart-item-view-cart { 
  height: 100px;
  background-color: #fff;
  width: 320px;
}
.c-i-v-c-btn-right{
  background-color: #E23137;
  width: 270px;
  height: 53px;
  cursor: pointer;
}
  .c-i-v-c-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  letter-spacing: 1.4px;
  font-weight: 700;
  transition: width .5s ease;
  position: relative;
  top: 30%;
}
.c-i-v-c-arrow{
  position: absolute;
  right: 0;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 5px solid  #fff;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  padding: 0;
  transition: none;
  transform: translateX(-40px);
  background: none;
}
.c-i-v-c-arrow::before{
  content: '';
  position: absolute;
  width: 160px;
  height: 1px;
  background-color: #fff;
  transform: translateX(-165px);
}
.c-i-v-c-next{
  width: 100px;
  height: 20px;
  background-color: #E23137;
  color: #fff;
  font-size: 16px!important;
  text-align: center;
  transition: transform .5s ease;
  transform: translateX(-35px);
}
.c-i-v-c-btn-right:hover .c-i-v-c-next{
  transform: translateX(35px);
}
.title h2{
  font-size: 45px;
}
.title p{
  font-size: 16px;
  color: #808080;
  line-height: 25px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  margin-top: 10px;
}
.instagram {
  margin: 40px 0;
}
.insta-img{
  margin-top: 20px;
}
.instagram h2 , .contact-info h2{
  font-size: 24px;
}
.instagram img {
  width: 90px;
  margin-right: 10px;
}

.contact-info p{
  font: 16px 'Ubuntu', sans-serif;
  color: #808080;
}
.text p:nth-child(even){
  margin-top: 5px;
}
.hours , .post , .phone , .email{
  margin: 20px 0;
  display: flex;
}
.c-icon i{
  margin-right: 10px;
  font-size: 20px;
  color: #E23137;
  margin-top: 3px;
}
@keyframes li-animation-out {
  from{margin: 2px;}
  to {margin: 3px;}
}
@keyframes li-animation-in {
  from{margin: 3px;}
  to {margin: 2px;}
}
.nav-in{
  animation: nav-in .4s ease forwards;
}
.nav-out{
  animation: nav-out .4s ease forwards;
}
.nav-in2{
  animation: nav-in2 .4s ease forwards;
}
.nav-out2{
  animation: nav-out2 .4s ease forwards;
}
@keyframes nav-in {
  from{  transform: translateY(-70px);position: absolute; background: transparent;padding: 35px 0;}
  to { transform: translateY(0px);position: fixed; background: #fff;padding: 0;}
}
@keyframes nav-out {
  0% { transform: translateY(0px);position: fixed; background: #fff;padding: 0;}
  70% { transform: translateY(-70px)}
  100% { transform: translateY(0px);position: absolute; background: transparent;;padding: 35px 0;}
}
@keyframes nav-in2 {
  from{height: 0;visibility: hidden;}
  to {height: auto;visibility: visible;}
}
@keyframes nav-out2 {
  0% { height: auto;visibility: visible;}
  100% { height: 0;visibility: hidden;}
}
/*REPONSIVE*/
@media screen and (max-width: 1900px) {
  .nav{
    width: 100vw;
  }
  .nav-bar{ 
    width: 95vw;
  }
}
@media screen and (max-width: 1400px) {
  .link{
    padding: 12px 20px;
  }
}
@media screen and (max-width: 1200px) {
  .link{
    padding: 10px 10px;
  }
} 
@media screen and (max-width: 996px) {
  .cart , .cart-item , .nav-btn input{
    display: none;
  }
  .nav{
    background-color: #fff!important;;
    padding: 0!important;
  }
  .nav-bar{ 
    width: 97vw;
  }
  
  .nav-menu{
    display: flex;
    transform: translateY(70px);
    position: absolute;
    top: 0;
    flex-direction: column;
    background-color: #fff;
    visibility: hidden;
    height: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
  }
  .link{
    color: #000;
  }
  .c-img{
    position: relative;
    top:0;
    left: 0;
    transform: translate(0px,-20px);
  }
}
@media screen and (max-width: 576px){
 .nav-bar{ 
    margin: 0;
  }
}
</style>
 