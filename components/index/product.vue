<template>
    <div class="product">
        <div class="title">
            <h5 >PERFORMANCE</h5>
            <h1>IMPROVE GENERAL RIDEABILITY</h1>
            <span></span>
            <h5>PERFORMANCE</h5>
        </div>
        <div class="product-item">
            <div class="p-items">
                <div class="p-item" v-for="items in item" :key="items.id" :product_id="items.id">
                    <div class="p-item-img">
                         <img :src="require ('@/assets/img/product/'+items.img) " alt="">
                    </div>
                    <div class="p-item-btn">
                        <div class="p-btn">
                            <p>ADD TO CARD</p>
                        </div>
                        <img :src="require ('@/assets/img/right.png') " alt="">
                    </div>
                    <div class="item-condition" v-if="items.condition  == ''" > </div>
                    <div class="item-condition" v-else-if="items.condition == 'SALE'" > <p class="i-c-sale" >{{items.condition}}</p></div>
                    <div class="item-condition" v-else-if="items.condition == 'SOLD'" > <p class="i-c-sold" >{{items.condition}}</p></div>
                    <div class="item-condition" v-else-if="items.condition == 'NEW'" > <p class="i-c-new" >{{items.condition}}</p></div>
                    <div class="p-item-info">
                        <div class="p-item-categori">
                            <div class="categori">
                                <p><span>{{items.categori}}</span><span> {{items.underCategori}}</span></p>
                            </div>
                            <div class="ratings">
                                <ul>
                                    <li v-for="n in items.star" > <p style="display:none">{{n}}</p><i class="fas fa-star"></i> </li>
                                    <li v-for="n in 5-items.star"> <p style="display:none">{{n}}</p><i class="far fa-star"></i> </li>
                                </ul> 
                            </div>
                        </div>
                        <div class="p-item-price">
                            <nuxt-link :to='"/shop/"+(items.name).toLowerCase()' class="categori-name">{{items.name }}</nuxt-link>
                            <div class="price">€{{items.price}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
        return{
            item: [],
        }
    },
    created(){
        this.item = this.$store.state.product
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            try{
                var y =document.documentElement.scrollTop;
                var width = document.body.offsetWidth;
                var cordinat = document.querySelector('.product').offsetTop-300;
                var h1 = document.querySelector('.product h1')
                var h5 = document.querySelectorAll('.product h5')
                if(width < 768){
                    
                }else{
                    if(y>cordinat){
                        h1.style ='opacity: 1; transform: translateX(0px);'
                        h5[1].style ='opacity: 1; transform: translateX(0px);'
                    }
                } 
            }catch(error){
               //
            }
        });
        for(var i=0; i<9; i++){
            document.querySelectorAll('.p-btn p')[i].addEventListener('click',(e)=>{
                var itemNumber = parseInt(e.target.parentNode.parentNode.parentNode.getAttribute('product_id'));
                // call funtion in plugin/app.js 
                this.cartItemNumber(itemNumber);
            })
            document.querySelectorAll('.p-item-price a')[i].addEventListener('click',(e)=>{
                var itemNumber = parseInt(e.target.parentNode.parentNode.parentNode.getAttribute('product_id') - 1);
                // call funtion in plugin/app.js 
                 this.$store.commit('productNumberChange',itemNumber)
            })
        } 
    }
  } 
</script>

<style scoped>
    .product{
        padding: 70px 0 ;
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
    .title h5:first-child{
            display: none;
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
    .title span{
        width: 1px;
        height: 90px;
        background: none;
        border-left: 1px solid #000;
        padding: 0;
    }
    .product-item{
        width: 1920px;
    }
    .p-items{
        width: 1300px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .p-item{
        padding-top: 70px ;
    }
    .p-item-img , .p-item-btn{
        width: 410px;
        height: 410px;
        overflow: hidden;
    }
    .p-item-img img{
        width: 410px;
    }
    .p-item:hover .p-item-btn{
        opacity: 1;
    }
    .p-item-btn{
        position: absolute;
        background-color:  #E23137;
        transform: translateY(-410px);
        opacity: 0;
        transition: all .4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .p-btn{
        width: 200px;
        height: 50px;
        border:  1px solid rgba(255, 255, 255, 0.4);
        z-index: 10;
    }
    .p-item-btn img{
        width: 150px;
        position: absolute;
    }
    .p-item-btn P{
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
    .p-btn:hover p{
        transform: translate( 65px, 15px);;
    }
    .item-condition p{
        width: 45px;
        height: 18px;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        position: absolute;
        transform: translate(10px, -400px);
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
    transform: translate(355px, -400px)!important;
    }
    .p-item-categori{
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
    .p-item-price{
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 18px;
    }
    .categori-name{
        cursor: pointer;
        color: #000;
    }
    .categori-name:hover{
        color:#E23137;
    }
    @media screen and (max-width: 1900px) {
        .product-item {
            width: 100vw;
        }
    }
    @media screen and (max-width: 1400px) {
        .product-item {
            width: 100vw;
        }
        .p-items{
            width: 1100px;
        }
        .p-item-img , .p-item-btn{
            width: 350px;
            height: 350px;
        }
        .p-item-img img{
            width: 350px;
        }
        .p-item-btn{
            transform: translateY(-350px);
        }
        .item-condition p{
            transform: translate(10px, -340px);
        }
        .i-c-new{
            transform: translate(295px, -340px)!important;
        }
    }
    @media screen and (max-width: 1200px) {
        .p-items{
            width: 950px;
        }
        .p-item-img , .p-item-btn{
            width: 300px;
            height: 300px;
        }
        .p-item-img img{
            width: 300px;
        }
        .p-item-btn{
            transform: translateY(-300px);
        }
        .item-condition p{
            transform: translate(10px, -290px);
        }
        .i-c-new{
            transform: translate(245px, -290px)!important;
        }
    }
    @media screen and (max-width: 1000px) {
        .p-items{
            width: 750px;
        }
        .p-item-img , .p-item-btn{
            width: 240px;
            height: 240px;
        }
        .p-item-img img , .s-l-s-p-item-price , .s-l-s-p-item-categori{
            width: 240px;
        }
        .p-item-btn{
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
    }@media screen and (max-width: 763px) {
        .p-items {
            justify-content: center;
            align-items: center;
            width: 100vw;
        }
        .p-item{
            padding: 70px 15px 0;
        }
        .title span{
            display: none;
        }
        .title{
            flex-direction: column;
            width: 85vw;
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
    @media screen and (max-width: 576px) {
        .p-item-img , .p-item-btn{
            width: 420px;
            height: 420px;
        }
        .p-item-img img{
            width: 420px;
        }
        .p-item-btn{
            transform: translateY(-420px);
        }
        .item-condition p{
            transform: translate(10px, -410px);
        }
        .i-c-new{
            transform: translate(365px, -410px)!important;
        }
    }
</style>
