<template>
    <div class="shop-left-side">
        <div class="s-l-s-title">
            <div class="s-l-s-count">
                <h5>SHOWING 1–12 OF 21 RESULTS</h5>
            </div>
            <div class="s-l-s-select">
                <ul>
                    <li class="selected"> DEFAULT SHORTING </li>
                     <div class="s-l-s-list">
                        <li> DEFAULT SHORTING</li>
                        <li> SHORT BY LASTEST</li>
                        <li> SHORT BY AVARAGE RATING</li>
                        <li> SHORT BY LOW TO HIGH</li>
                        <li> SHORT BY HIGH TO LOW</li>
                    </div>
                </ul>
            </div>
        </div>
        <div class="s-l-s-products">
            <div class="s-l-s-p-items">
                <div class="s-l-s-p-item" v-for="items in item" :key="items.id" :product_id="items.id">
                    <div class="s-l-s-p-item-img">
                        <img :src="require ('@/assets/img/product/'+items.img) " alt="">
                    </div>
                    <div class="s-l-s-p-item-btn">
                        <div class="s-l-s-p-btn">
                            <p>ADD TO CARD</p>
                        </div>
                        <div class="s-l-s-p-arrow"></div>
                    </div>
                    <div  class="item-condition" v-if="items.condition  == ''" > </div>
                    <div  class="item-condition" v-else-if="items.condition == 'SALE'" > <p id="item-condition" class="i-c-sale" >{{items.condition}}</p></div>
                    <div  class="item-condition" v-else-if="items.condition == 'SOLD'" > <p id="item-condition" class="i-c-sold" >{{items.condition}}</p></div>
                    <div  class="item-condition" v-else-if="items.condition == 'NEW'" > <p  id="item-condition" class="i-c-new" >{{items.condition}}</p></div>
                    <div class="s-l-s-p-item-info">
                        <div class="s-l-s-p-item-categori">
                            <div class="categori">
                                <p><span id="c-name1">{{items.categori}}</span><span id="c-name2"> {{items.underCategori}}</span></p>
                            </div>
                            <div class="ratings">
                                <ul>
                                    <li v-for="n in items.star" > <p style="display:none">{{n}}</p><i class="fas fa-star"></i> </li>
                                    <li v-for="n in 5-items.star"> <p style="display:none">{{n}}</p><i class="far fa-star"></i> </li>
                                </ul> 
                            </div>
                        </div>
                        <div class="s-l-s-p-item-price">
                             <nuxt-link :to='"/shop/"+(items.name).toLowerCase()' class="categori-name">{{items.name }}</nuxt-link>
                            <div class="price">€{{items.price}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="s-l-s-nav">
          <div class="s-l-s-nav-btn">
            <div class="s-l-s-btn-left">
              <div class="s-l-s-btn" style="display:none">
                <span class="s-l-s-l-arrow"></span>
                <p class="s-l-s-prev">PREV</p>
              </div>
            </div>
            <div class="s-l-s-btn-right">
              <div class="s-l-s-btn">
                <span class="s-l-s-r-arrow"></span>
                <p class="s-l-s-next">NEXT</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    mounted(){
        var listItem = document.querySelectorAll('.s-l-s-select li')
        var item = document.querySelector('.s-l-s-select')
        var underList = document.querySelector('.s-l-s-list')
        var control = 0
        for(var i=0;i<listItem.length;i++){
            listItem[i].addEventListener('click',(e)=>{
                var index = Array.from(listItem).indexOf(e.target);
                    //
                if(control == 0){
                    underList.style ='display: block'
                    control = 1
                }else{
                    underList.style ='display: none'
                    control = 0;
                    this.shortItem(index,this.list) //call funtion in plugin/app.js 
                }

                if(index == 0){
                    //
                }else{
                    document.querySelectorAll('.s-l-s-select li')[0].innerHTML = document.querySelectorAll('.s-l-s-select li')[index].innerHTML;
                }
            })
        }
        for(var i=0;i<9;i++){
            document.querySelectorAll('.s-l-s-p-btn p')[i].addEventListener('click',(e)=>{
                var itemNumber = parseInt(e.target.parentNode.parentNode.parentNode.getAttribute('product_id'));
                // call funtion in plugin/app.js 
                this.cartItemNumber(itemNumber);
            })
            document.querySelectorAll('.s-l-s-p-item-price a')[i].addEventListener('click',(e)=>{
                var itemNumber = parseInt(e.target.parentNode.parentNode.parentNode.getAttribute('product_id') - 1);
                this.$store.commit('productNumberChange',itemNumber)
            })
        }
    },
    data(){
        return{
            item: [],
            list:[],
        }
    },
    created(){
        this.item = this.$store.state.product
        for(var i of this.$store.state.product){
            this.list.push(i)
        }
    }
  }
</script>

<style scoped>
    .s-l-s-title{
        width: 950px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .s-l-s-count h5{
        font-size:18px;
    }
    .s-l-s-select{
        position: relative;
    }
    .s-l-s-select:before{
        content:'';
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: #E23137;;
        right: 0;
        border-radius: 5px;
    }
    .s-l-s-select::after{
        content:''; 
        position: absolute;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        width: 6px;
        height: 6px;
        transform: rotate(45deg) translate(-35px, -5px);
        right: 0;
    }
    .s-l-s-select ul{
        width: 300px;
        height: 50px;
        font-size: 14px;
        font-family: inherit;
        padding-left:30px;
        box-sizing: border-box;
        font-weight: 700;
        letter-spacing: 1.4px;
        appearance:none; 
        border-radius: 5px;
        border: 1px solid #dedede;
        position: relative;
        z-index: 10;
        background: transparent;
        cursor: pointer;
    }
    .selected{
        padding: 15px 0;
    }
    .s-l-s-list li{
        padding: 15px 0 0;
    }
    .s-l-s-list{
        width: 298px;
        height: 185px;
        border: 1px solid #dedede;
        position: absolute;
        left: 0;
        padding: 0 30px;
        box-sizing: border-box;
        display: none;
        background-color: #fff;
    }
    .s-l-s-products {
        padding: 0 0 70px;
    }
    .s-l-s-p-items{
        width: 950px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .s-l-s-p-item{
        padding-top: 70px ;
         width: 300px;
    }
    .s-l-s-p-item-img , .s-l-s-p-item-btn{
        width: 300px;
        height: 300px;
        overflow: hidden;
    }
    .s-l-s-p-item-img img{
        width: 300px;
    }
    .s-l-s-p-item:hover .s-l-s-p-item-btn{
        opacity: 1;
    }
    .s-l-s-p-item-btn{
        position: absolute;
        background-color:  #E23137;
        transform: translateY(-300px);
        opacity: 0;
        transition: all .4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .s-l-s-p-btn{
        width: 200px;
        height: 50px;
        border:  1px solid rgba(255, 255, 255, 0.4);
        z-index: 10;
    }
    .s-l-s-p-item-btn img{
        width: 150px;
        position: absolute;
    }
    .s-l-s-p-item-btn P{
        color: #FFF;
        font-weight: 700;
        transform: translate( 10px, 15px);
        width: 100px;
        height: 20px;
        background-color: #E23137;
        text-align: center;
        transition: all .4s ease;
        cursor: pointer;
    }
    .s-l-s-p-arrow{
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
        transform: translateX(-74px);
        background: none;
    }
    .s-l-s-p-arrow::before{
        content: '';
        position: absolute;
        width: 150px;
        height: 1px;
        background-color: #fff;
        transform: translateX(-155px);
    }
    .s-l-s-p-btn:hover p{
        transform: translate( 65px, 15px);;
    }
    .item-condition p{
        width: 45px;
        height: 18px;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        position: absolute;
        transform: translate(10px, -290px);
    }
    .i-c-sale{
        background: #E23137; 
        color: #fff;
    }
    .i-c-sold{
        background: #fff ; 
        color: #000
    }
    .i-c-new{
        background: #000; 
        color: #fff ; 
        transform: translate(245px, -290px)!important;
    }
    .s-l-s-p-item-categori{
        display: flex;
        justify-content: space-between;
        padding: 20px 0 10px;
    }
    .categori span , .categori p {
        background: none;
        color:#E23137;
        padding: 0;
        font: 11px 'Heebo', sans-serif;
        font-weight: 600;
        letter-spacing: 4px;
    }
    .ratings ul{
        display: flex;
    }
    .ratings ul li{
        font-size: 12px;
        color:#E23137;
    }
    .s-l-s-p-item-price{
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 18px; 
    }
    .s-l-s-nav{
        width: 950px;
    }
    .s-l-s-nav-btn {
        display: flex;
        width: 950px;
        justify-content: space-between;
    }
    .s-l-s-btn{
        border: 1px solid rgba(0, 0, 0, 0.2);
        width: 80px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        letter-spacing: 1.4px;
        font-weight: 700;
        transition: width .5s ease;
        position: relative;
    }
    .s-l-s-l-arrow{
        position: absolute;
        left: 0;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid #000;
        padding: 0;
        transition: none;
        transform: translateX(30px);
        background: none;
    }
    .s-l-s-l-arrow::before{
        content: '';
        position: absolute;
        width: 130px;
        height: 1px;
        background-color: #000;
    }
    .s-l-s-r-arrow{
        position: absolute;
        right: 0;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-left: 5px solid  #000;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
        padding: 0;
        transition: none;
        transform: translateX(-30px);
        background: none;
    }
    .s-l-s-r-arrow::before{
        content: '';
        position: absolute;
        width: 130px;
        height: 1px;
        background-color: #000;
        transform: translateX(-135px);
    }
    .s-l-s-btn:hover{
        width: 220px;
        cursor: pointer;
    }
    .s-l-s-prev{
        width: 60px;
        height: 20px;
        background-color: #fff;
        text-align: center;
        transition: transform .5s ease;
        transform: translateX(100px);
    }
    .s-l-s-next{
        width: 60px;
        height: 20px;
        background-color: #fff;
        text-align: center;
        transition: transform .5s ease;
        transform: translateX(-100px);
    }
    .s-l-s-btn-left:hover .s-l-s-prev{ 
        transform: translateX(-40px);
    } 
    .s-l-s-btn-right:hover .s-l-s-next{
        transform: translateX(40px);
    }
     .categori-name{
        cursor: pointer;
        color: #000;
    }
    .categori-name:hover{
        color:#E23137;
    }
    @media screen and (max-width: 1400px) {
        .s-l-s-title, .s-l-s-nav ,.s-l-s-p-items , .s-l-s-nav-btn , .s-l-s-p-items{
            width: 750px;
        }
        .s-l-s-p-item-img , .s-l-s-p-item-btn{
            width: 240px;
            height: 240px;
        }
        .s-l-s-p-item-img img, .s-l-s-p-item-categori, .s-l-s-p-item-price ,.s-l-s-p-item { 
            width: 240px;
        }
        .s-l-s-p-item-btn{
            transform: translateY(-240px);
        }
        .item-condition p{
            transform: translate(10px, -230px);
        }
        .i-c-new{
            transform: translate(185px, -230px)!important;
        }
        .categori span, .categori p{
            letter-spacing: 2px;
        }
    }
    @media screen and (max-width: 1200px) {
        .s-l-s-title, .s-l-s-nav ,.s-l-s-p-items , .s-l-s-nav-btn , .s-l-s-p-items{
            width: 700px;
        }
         .s-l-s-p-item-img , .s-l-s-p-item-btn{
            width: 210px;
            height: 210px;
        }
        .s-l-s-p-item-img img, .s-l-s-p-item-categori, .s-l-s-p-item-price ,.s-l-s-p-item { 
            width: 210px;
        }
         .s-l-s-p-item-btn{
            transform: translateY(-210px);
        }
        .item-condition p{
            transform: translate(10px, -200px);
        }
        .i-c-new{
            transform: translate(155px, -200px)!important;
        }
        .categori span, .categori p{
            letter-spacing: 1px;
        }
    }
    @media screen and (max-width: 1000px) {
        .s-l-s-title, .s-l-s-nav ,.s-l-s-p-items , .s-l-s-nav-btn , .s-l-s-p-items{
            width: 750px;
        }
        .s-l-s-p-item-img , .s-l-s-p-item-btn{
            width: 240px;
            height: 240px;
        }
        .s-l-s-p-item-img img, .s-l-s-p-item-categori, .s-l-s-p-item-price ,.s-l-s-p-item { 
            width: 240px;
        }
        .s-l-s-p-item-btn{
            transform: translateY(-240px);
        }
        .item-condition p{
            transform: translate(10px, -230px);
        }
        .i-c-new{
            transform: translate(185px, -230px)!important;
        }
        .categori span, .categori p{
            letter-spacing: 2px;
        }
    }
    @media screen and (max-width: 764px) {
        .s-l-s-title, .s-l-s-nav ,.s-l-s-p-items , .s-l-s-nav-btn , .s-l-s-p-items{
            width: 85vw;
        }
        .s-l-s-p-item-img , .s-l-s-p-item-btn{
            width: 280px;
            height: 280px;
        }
        .s-l-s-p-item-img img, .s-l-s-p-item-categori, .s-l-s-p-item-price ,.s-l-s-p-item { 
            width: 280px;
        }
        .s-l-s-p-item-btn{
            transform: translateY(-280px);
        }
        .item-condition p{
            transform: translate(10px, -270px);
        }
        .i-c-new{
            transform: translate(225px, -270px)!important;
        }
    }
    @media screen and (max-width: 700px) {
        .s-l-s-title{
            flex-direction: column;
        }
        .s-l-s-p-item-img , .s-l-s-p-item-btn{
            width: 85vw;
            height: 85vw;
        }
        .s-l-s-p-item-img img, .s-l-s-p-item-categori, .s-l-s-p-item-price ,.s-l-s-p-item { 
            width: 85vw;
        }
        .s-l-s-p-item-btn{
            transform: translateY(-85vw);
        }
        .item-condition p{
            transform: translate(10px, calc( -85vw - -10px ));
        }
        .i-c-new{
            transform: translate(calc( 85vw - 55px ), calc( -85vw - -10px ))!important;
        }
    }
</style>
