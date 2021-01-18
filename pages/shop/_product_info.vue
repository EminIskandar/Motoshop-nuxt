<template>
    <div class="product_info">
        <div class="p-i-breadcrumb">
          <div class="p-i-b-bg">
            <div class="p-i-b-items">
              <a href="#">HOME</a>
              <span></span>
              <a href="#">SHOP</a>
              <span></span>
              <a href="#">FAST, HELMETS</a>
              <span></span>
              <a href="#">EXHAUST</a>
            </div>
          </div>
        </div>
        <div class="p-i-item">
          <div class="p-i-i-left">
            <div class="piil-img">
              <img src="" alt="">
            </div>
            <div class="pill-imgs">
              <div class="pill-item">
                  <img src="" alt="">
              </div>
              <div class="pill-item">
                  <img src="" alt="">
              </div>
              <div class="pill-item">
                  <img src="" alt="">
              </div>
            </div>
          </div>
          <div class="p-i-i-right">
            <div class="piir-text">
              <h1>EXHAUST</h1>
              <div class="piir-price">
                <p>$50.00</p>
              </div>
              <div class="piir-review">
                <div class="piir-ratings">
                  <ul>
                  </ul>
                </div>
                <div class="piir-r-text">
                  <p>(1 CUSTOMER REVIEW)</p>
                </div>
              </div>
              <div class="piir-short-info">
                <p>Curabitur at fermentum purus. Interdum et malesuada fames ac ante ipsum primis in fau cibus. Mauris non nisl interdum, citudin ne que sed, posuere elit. Vivamus ac tincidunt sapien. Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis vehi.</p>
              </div>
            </div>
            <div class="piir-add-to-cart">
              <button type="button" class="adc">
                <div class="s-l-s-btn-right">
                  <div class="s-l-s-btn">
                    <span class="s-l-s-r-arrow"></span>
                    <p class="s-l-s-next">ADD TO CART</p>
                  </div>
                </div>
              </button>
            </div>
            <div class="piir-quick-info">
              <h1>QUICK INFO</h1>
              <div class="piir-qi-code">
                <p>SKU: <span>PRO02</span></p>
              </div>
              <div class="piir-qi-categori">
                <p>CATEGORIES: <span>FAST - HELMET</span></p>
              </div>
              <div class="piir-qi-tags">
                <p>TAGS: <span>FAST</span><span>- MOTO</span><span>- RIDE</span> </p>
              </div>
            </div>
            <div class="piir-other-info">
              <div class="piir-oi-titles">
                <h1 style="color: #E23137">DESCRIPTION</h1>
                <h1>ADDITIONAL INFORMATION</h1>
                <h1>REVIEWS <p>(1)</p></h1>
              </div>
              <div class="piir-oi-desc" >
                <p>Curabitur at fermentum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris non nisl interdum, citudin ne que sed, posuere elit. Vivamus ac tincidunt sapien. Aenean nec aliquet enim. Donec at dapibus enim. Integer et tur is vel turpis vehi.</p>
              </div>
              <div class="piir-oi-info" style="display: none">
                <div class="piir-oi-item">
                  <p>WEIGHT: <span>1 KG</span></p>
                </div>
                <div class="piir-oi-item">
                  <!--<p>DIMENSIONS: <span>40 × 35 × 50 CM</span></p>-->
                </div>
              </div>
              <div class="piir-oi-review" style="display: none">
                <div class="piir-oi-r-items">
                  <div class="piir-oi-r-item">
                  </div>
                </div>
                <div class="piir-oi-r-add">
                  <h1>BE THE FIRST TO REVIEW “FILTER”</h1>
                  <div class="piir-oi-r-rating">
                    <p>YOUR EMAIL ADDRESS WILL NOT BE PUBLISHED. REQUIRED FIELDS ARE MARKED *YOUR RATING</p>
                     <ul>
                      <li><i class="far fa-star"></i> </li>
                      <li><i class="far fa-star"></i> </li>
                      <li><i class="far fa-star"></i> </li>
                      <li><i class="far fa-star"></i> </li>
                      <li><i class="far fa-star"></i> </li>
                    </ul>
                  </div>
                  <div class="piir-oi-add-review">
                    <form>
                        <h1>YOUR NAME*</h1>
                        <input type="text">
                        <h1>YOUR EMAIL*</h1>
                        <input type="email">
                        <h1>YOUR COMMENT*</h1>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                        <button type="submit">SEND MESSAGE</button>   
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <related-product></related-product>
        <Footer></Footer>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        navPageNumber: 1
      }
    },
    mounted(){
      this.navBarColor(this.navPageNumber);
      this.productInfoPage();
      ///
      var counter = 0;
      var item = document.querySelectorAll('.piir-oi-r-rating ul li i');
      for(var i=0;i<item.length;i++){
        item[i].addEventListener('click',(e)=>{
          var index = Array.from(item).indexOf(e.target)+1;
            for(var i=0;i<item.length;i++){
              if(i<index){
                item[i].setAttribute('class','fas fa-star')
              }else{
                item[i].setAttribute('class','far fa-star')
              }
            }
        })
      }
      var titleItem =document.querySelectorAll('.piir-oi-titles h1');
      for(var s=0;s<3;s++){
        titleItem[s].addEventListener('click',(e)=>{
          var index = Array.from(titleItem).indexOf(e.target)+1; 
          for(var i=1;i<4;i++){
            document.querySelector('.piir-other-info').children[i].style= 'display:none'
            titleItem[i-1].style ='color: #000'
          }
          document.querySelector('.piir-other-info').children[index].style= 'display:block'
          titleItem[index-1].style =' color: #E23137'
        })
      }
      //open or close slider
      var productId = this.$store.state.productNumber;
      var product = this.$store.state.product;
      var img = document.querySelectorAll('.pill-item img');
      for(var o=0;o<3;o++){
        img[o].addEventListener('click',(e)=>{
          var index = Array.from(img).indexOf(e.target)
          document.querySelector('.piil-img img').src = 'http://localhost:3000/_nuxt/assets/img/product/shop-img-'+productId+"-0"+(index+1)+'.jpg'
        })
      }
      //add item bag
      document.querySelector('.s-l-s-next').addEventListener('click',(e)=>{
          var itemNumber = this.$store.state.productNumber+1;
          // call funtion in plugin/app.js 
          this.cartItemNumber(itemNumber);
      })
    }
  }
</script>

<style scoped>
  .p-i-breadcrumb {
    width: 100vw;
    height: 60px;
    padding-top: 140px;
  }
  .p-i-b-bg{
    width: 100vw;
    height: 60px;
    background-color: #f5f5f5;
  }
  .p-i-b-items{
    width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 60px;

  }
  .p-i-b-items a{
    color: #000;
    font: 11px 'Heebo','sans-serif';
    font-weight: 500;
  }
  .p-i-b-items a:hover{
    cursor: default;
  }
  .p-i-b-items a:last-child{
     color: #E23137;
  }
  .p-i-b-items span{
    background: #000;
    padding: 0;
    width: 20px;
    height: 1px;
    margin: 0 15px;
  }
  .p-i-item{
    width: 1300px;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
  }
  .p-i-i-left , .piil-img , 
  .piil-img img , .pill-imgs{
    width: 600px;
  }
  .piil-img{
    height: 600px;
    cursor: pointer;
  }
  .pill-imgs{
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
  }
  .pill-item{
    width: 180px;
    height: 180px;
    cursor: pointer;
  }
  .pill-item img{
    width: 180px;
  }
  .p-i-i-right{
    width: 650px;
  }
  .p-i-i-right h1{
    font-size: 45px;
  }
  .piir-price p{
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
  }
  .piir-review , .piir-ratings ul{
    display: flex;
  }
  .piir-review{
    width: 225px;
    justify-content: space-between;
    margin: 30px 0;
  }
  .piir-ratings li{
    color: #E23137;
  }
  .piir-r-text p{
    font: 11px 'Heebo' , 'sans-serif';
    color: #808080;
  }
  .piir-short-info p{
    font: 16px 'Ubuntu' , 'sans-serif';
    line-height: 27px;
     color: #808080;
  }
  .piir-c-text{
    width: 55px;
    height: 55px;
    background-color: #E23137;
    display: flex;
  }
  .piir-c-text p{
    margin: auto;
    color: #fff;
    font-weight: 700;
    letter-spacing: 1.4px;
  }
  .piir-c-button , .piir-count{
    display: flex;
  }
  .piir-add-to-cart{
    margin: 30px 0;
    display: flex;
    width: 350px;
    justify-content: space-between;
  }
  .piir-c-button{
    width: 40px;
    height: 53px;
    border: 1px solid #dedede;
    border-left: none;
    display: flex;
    flex-direction: column;
  }
  .top , .bottom{
    width: 40px;
    height: 26px;
    cursor: pointer;
  }
   .top:before{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-right: 1px solid #808080;
    border-bottom: 1px solid #808080;
    transform: rotate(-135deg) translate(5px, 4px);
    margin: 5px 0;
  }
  .bottom:before{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-right: 1px solid #808080;
    border-bottom: 1px solid #808080;
    transform: rotate(45deg) translate(-7px, -6px);
    margin: 5px 0;
  }
  .adc{
    background-color: #E23137;
    width: 210px;
    height: 53px;
    cursor: pointer;
  }
   .s-l-s-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    letter-spacing: 1.4px;
    font-weight: 700;
    transition: width .5s ease;
    position: relative;
  }
  .s-l-s-r-arrow{
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
    transform: translateX(-10px);
    background: none;
  }
  .s-l-s-r-arrow::before{
    content: '';
    position: absolute;
    width: 160px;
    height: 1px;
    background-color: #fff;
    transform: translateX(-165px);
  }
  .s-l-s-next{
    width: 100px;
    height: 20px;
    background-color: #E23137;
    color: #fff;
    text-align: center;
    transition: transform .5s ease;
    transform: translateX(-35px);
  }
  .s-l-s-btn-right:hover .s-l-s-next{
      transform: translateX(30px);
  }
  .piir-quick-info h1{
    font-size: 18px;
  }
  .piir-quick-info p, 
  .piir-quick-info span{
    font: 11px 'Heebo' , 'sans-serif';
    letter-spacing: 1px;
  }
  .piir-quick-info p{
    color: #E23137;
  }
  .piir-quick-info span{
    color: #808080;
    padding: 0 5px;
    background: none;
  }
  .piir-qi-code {
    padding: 20px 0 5px;
  }
  .piir-qi-categori,
  .piir-qi-tags{
    padding: 5px 0;
  }
  .piir-other-info{
    margin-top: 30px;
  }
  .piir-oi-titles{
    width: 525px;
    display: flex;
    justify-content: space-between;
  }
  .piir-oi-titles h1{
    font-size: 18px;
  }
  .piir-oi-titles h1:hover{
    color: #E23137;
    cursor: pointer;
  }
  .piir-oi-titles p{
    background:none;
    font-family: 'Rajdhani' , 'sans-serif';
    font-size: 18px;
    font-weight: 700;
    padding: 0;
    display: inline;
  }
  .piir-oi-desc p{
    font: 16px 'Ubuntu' , 'sans-serif';
    line-height: 27px;
     color: #808080;
  }
  .piir-oi-item{
    margin: 5px 0;
  }
  .piir-oi-item p, 
  .piir-oi-item span{
    font: 11px 'Heebo' , 'sans-serif';
    letter-spacing: 1px;
  }
  .piir-oi-item p{
    color: #E23137;
  }
  .piir-oi-item span{
    color: #808080;
    padding: 0 5px;
    background: none;
  }
  .piir-oi-r-add h1{
    font-size: 18px;
  }
  .piir-oi-r-rating p{
    font: 11px 'Heebo' , 'sans-serif';
    letter-spacing: 1px;
  }
  .piir-oi-r-rating ul{
    display: flex;
  }
  .piir-oi-r-rating li{
    font-size: 11px;
    color: #E23137;
    cursor: pointer;
  }
    .piir-oi-add-review form{
      width: 600px;
    }
    .piir-oi-add-review h1{
      font: 11px 'Heebo', 'sans-serfi';
      font-weight: 600;
      margin-top: 60px;
    }
    .piir-oi-add-review textarea:focus,
    .piir-oi-add-review input:focus{
      outline: none;
      box-shadow: none;
      border-bottom: 2px solid #E23137;
    }
    .piir-oi-add-review textarea, .piir-oi-add-review input{
      font-family: inherit;
      font-size: 24px;
      font-weight: 700;
      border:none;
      border-bottom: 2px solid rgba(0, 0, 0,0.1);
      width: 100%;
    }
    .piir-oi-add-review button{
      background-color: #E23137;
      width: 150px;
      height: 50px;
      color: #fff;
      margin-top: 40px;
    }
    .piir-oi-desc,
    .piir-oi-info,
    .piir-oi-review{
      margin: 10px 0;
    }
  @media screen and (max-width: 1400px) {
    .p-i-item ,.p-i-b-items {
      width: 1100px;
    }
    .p-i-i-left, .piil-img, .piil-img img, .pill-imgs{
      width: 500px;
    }
    .piil-img{
      height: 500px;
    }
    .pill-item{
      width: 145px;
      height: 145px;
    }
    .pill-item img{
      width: 145px;
    }
    .p-i-i-right{
      width: 535px;
    }
  }
  @media screen and (max-width: 1200px) {
   .p-i-item ,.p-i-b-items {
      width: 950px;
    }
    .p-i-i-left, .piil-img, .piil-img img, .pill-imgs{
      width: 430px;
    }
    .piil-img{
      height: 430px;
    }
    .pill-item{
      width: 120px;
      height: 120px;
    }
    .pill-item img{
      width: 120px;
    }
    .p-i-i-right , .piir-oi-titles{
      width: 470px;
    }
  }
  @media screen and (max-width: 1000px) {
   .p-i-item , .p-i-b-items{
      width: 750px;
    }
    .p-i-i-left, .piil-img, .piil-img img, .pill-imgs , .p-i-i-right , .piir-oi-titles{
      width: 750px;
    }
    .p-i-i-left ,.p-i-item{
      flex-direction: column;
    }
    .piil-img{
      height: 750px
    }
    .pill-item{
      width: 235px;
      height: 235px;
    }
    .pill-item img{
      width: 235px;
    }
    .pizi-item , .pizi-nav ,.pizi-item img{
      width: 75vw;
    }
    .pizi-item {
      height: 75vw;
    }
    .pizi-close p{
      transform: translateX(33vw);
    }
  }
  @media screen and (max-width: 764px) {
   .p-i-item , .p-i-b-items{
      width: 600px;
    }
    .p-i-i-left, .piil-img, .piil-img img, .pill-imgs , .p-i-i-right , .piir-oi-titles{
      width: 600px;
    }
    .piil-img{
      height: 600px
    }
    .pill-item{
      width: 180px;
      height: 180px;
    }
    .pill-item img{
      width: 180px;
    }
  }
  @media screen and (max-width: 600px) {
   .p-i-item , .p-i-b-items{
      width: 420px;
    }
    .p-i-i-left, .piil-img, .piil-img img, .pill-imgs , .p-i-i-right , .piir-oi-titles{
      width: 420px;
    }
    .piil-img{
      height: 420px
    }
    .pill-item{
      width: 120px;
      height: 120px;
    }
    .pill-item img{
      width: 120px;
    }
  }

</style>
