<template>
    <div class="related-post">
        <div class="r-p-title">
            <h1>RELATED PRODUCTS</h1>
        </div>
        <div class="r-p-items">
            <div class="r-p-item" v-for="items in item" :key="items.id" :product_id="items.id">
                <div class="r-p-item-img">
                    <img :src="require ('@/assets/img/product/'+items.img) " alt="">
                </div>
                <div class="r-p-item-btn">
                    <div class="r-p-btn">
                        <p>ADD TO CARD</p>
                    </div>
                    <img :src="require ('@/assets/img/right.png') " alt="">
                </div>
                <div class="item-condition" v-if="items.condition  == ''" > </div>
                <div class="item-condition" v-else-if="items.condition == 'SALE'" > <p class="i-c-sale" >{{items.condition}}</p></div>
                <div class="item-condition" v-else-if="items.condition == 'SOLD'" > <p class="i-c-sold" >{{items.condition}}</p></div>
                <div class="item-condition" v-else-if="items.condition == 'NEW'" > <p class="i-c-new" >{{items.condition}}</p></div>
                <div class="r-p-item-info">
                    <div class="r-p-item-categori">
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
                    <div class="r-p-item-price">
                        <nuxt-link :to='"/shop/"+(items.name).toLowerCase()' class="categori-name">{{items.name }}</nuxt-link>
                        <div class="price">€{{items.price}}</div>
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
            item:[
                { img: 'shop-img-0-02.jpg' , condition : 'SALE', categori : 'FAST' , underCategori: '- HELMETS' , star : 4 , name : 'EXHAUST', price : '50.00' , id:1},
                { img: 'shop-img-1-02.jpg' ,condition : 'NEW', categori : 'HELMETS' , underCategori: '- QUALITY' , star : 2 , name : 'BRAKES', price : '250.00 ', id:2},
                { img: 'shop-img-2-02.jpg' ,condition : 'SOLD', categori : 'HELMETS' , underCategori: '- QUALITY' , star : 5 , name : 'HELMET', price : '2300.00', id:3},
                { img: 'shop-img-3-02.jpg' ,condition : '', categori : 'HELMETS' , underCategori: ' ' , star : 3 , name : 'GLOVES', price : '80', id:4},
            ]
        }
    },
    mounted(){
        for(var i=0; i<4; i++){
            document.querySelectorAll('.r-p-btn p')[i].addEventListener('click',(e)=>{
                var itemNumber = parseInt(e.target.parentNode.parentNode.parentNode.getAttribute('product_id'));
                // call funtion in plugin/app.js 
                this.cartItemNumber(itemNumber);
            })
            document.querySelectorAll('.r-p-item-price a')[i].addEventListener('click',(e)=>{
                var itemNumber = parseInt(e.target.parentNode.parentNode.parentNode.getAttribute('product_id') - 1);
                // call funtion in plugin/app.js 
                 this.$store.commit('productNumberChange',itemNumber)
            })
        }
    }
  }
</script>

<style scoped>
    .related-post{
        padding: 0 0 70px;
        width: 1300px;
        margin: 0 auto;
    }
    .r-p-title h1{
        font-size: 45px;
    }
    .r-p-items{
        width: 1300px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
    .r-p-item{
        padding-top: 70px ;
         width: 300px;
    }
    .r-p-item-img , .r-p-item-btn{
        width: 300px;
        height: 300px;
        overflow: hidden;
    }
    .r-p-item-img img{
        width: 300px;
    }
    .r-p-item:hover .r-p-item-btn{
        opacity: 1;
    }
    .r-p-item-btn{
        position: absolute;
        background-color:  #E23137;
        transform: translateY(-300px);
        opacity: 0;
        transition: all .4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .r-p-btn{
        width: 200px;
        height: 50px;
        border:  1px solid rgba(255, 255, 255, 0.4);
        z-index: 10;
    }
    .r-p-item-btn img{
        width: 150px;
        position: absolute;
    }
    .r-p-item-btn P{
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
    .r-p-btn:hover p{
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
    .r-p-item-categori{
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
    .r-p-item-price{
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 18px; 
    }
    .categori-name{
        color: #000;
    }
    .categori-name:hover{
        color:#E23137;
    }
    @media screen and (max-width: 1400px) {
        .related-post , .r-p-items{
            width: 1100px;
        }
        .r-p-item-img , .r-p-item-btn{
            width: 250px;
            height: 250px;
        }
        .r-p-item-img img, .r-p-item-categori, .r-p-item-price ,.r-p-item { 
            width: 250px;
        }
         .r-p-item-btn{
            transform: translateY(-250px);
        }
        .item-condition p{
            transform: translate(10px, -240px);
        }
        .i-c-new{
            transform: translate(195px, -240px)!important;
        }
        .categori span, .categori p{
            letter-spacing: 1px;
        }
    }
    @media screen and (max-width: 1200px) {
        .related-post , .r-p-items{
            width: 950px;
        }
        .r-p-item-img , .r-p-item-btn{
            width: 210px;
            height: 210px;
        }
        .r-p-item-img img, .r-p-item-categori, .r-p-item-price ,.r-p-item { 
            width: 210px;
        }
         .r-p-item-btn{
            transform: translateY(-210px);
        }
        .item-condition p{
            transform: translate(10px, -200px);
        }
        .i-c-new{
            transform: translate(155px, -200px)!important;
        }
    }
    @media screen and (max-width: 1000px) {
        .related-post , .r-p-items{
            width: 750px;
        }
        .r-p-items{
            flex-wrap: wrap;
        }
        .r-p-item-img , .r-p-item-btn{
            width: 240px;
            height: 240px;
        }
        .r-p-item-img img, .r-p-item-categori, .r-p-item-price ,.r-p-item { 
            width: 240px;
        }
         .r-p-item-btn{
            transform: translateY(-240px);
        }
        .item-condition p{
            transform: translate(10px, -230px);
        }
        .i-c-new{
            transform: translate(185px, -230px)!important;
        }
        .categori span, .categori p{
            letter-spacing: 1px;
        }
        
    }
    @media screen and (max-width: 764px) {
        .related-post , .r-p-items{
            width: 600px;
        }
        .r-p-item-img , .r-p-item-btn{
            width: 280px;
            height: 280px;
        }
        .r-p-item-img img, .r-p-item-categori, .r-p-item-price ,.r-p-item { 
            width: 280px;
        }
         .r-p-item-btn{
            transform: translateY(-280px);
        }
        .item-condition p{
            transform: translate(10px, -270px);
        }
        .i-c-new{
            transform: translate(225px, -270px)!important;
        }
    }
    @media screen and (max-width: 600px) {
        .related-post , .r-p-items{
            width: 420px;
        }
        .r-p-item-img , .r-p-item-btn{
            width: 420px;
            height: 420px;
        }
        .r-p-item-img img, .r-p-item-categori, .r-p-item-price ,.r-p-item { 
            width: 420px;
        }
         .r-p-item-btn{
            transform: translateY(-420px);
        }
        .item-condition p{
            transform: translate(10px, -410px);
        }
        .i-c-new{
            transform: translate(365px, -400px)!important;
        }
    }
</style>
