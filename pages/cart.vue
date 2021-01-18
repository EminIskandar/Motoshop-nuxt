<template>
    <div class="shop-cart">
        <div class="c-head">
             <div class="c-title">
                <h1>CART</h1>
            </div>
        </div>
        <div class="cart-product">
            <div class="c-p-alert">
            </div>
            <table>
                <thead>
                    <tr>
                        <td><h1>PRODUCT</h1></td>
                        <td><h1>PRICE</h1></td>
                        <td><h1>QUANTITY</h1></td>
                        <td><h1>SUBTOTAL</h1></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="image">
                            <div class="remove">
                                <p>x</p>
                            </div>
                            <div class="c-p-info">
                                <div class="c-p-img">
                                <img src="/_nuxt/assets/img/shop-img-2-600x600.jpg" alt="">
                                </div>
                                <h1>Exhaust</h1>
                            </div>
                        </td>
                        <td class="price"><p>50.00$</p></td>
                        <td class="quantity">
                            <div class="quantity-item">
                                <div class="piir-count">
                                    <div class="piir-c-text">
                                        <p>1</p>
                                    </div>
                                    <div class="piir-c-button">
                                        <button type="submit" class="top"></button>
                                        <button type="submit" class="bottom"></button>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="total"><p>50.00$</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="c-cupon">
            <div class="c-c-input">
                <form action="">
                    <input type="text" value="Coupon Code">
                    <button type="submit">APPLY COUPON</button>
                </form>
            </div>
            <div class="c-c-button">
                <button type="button">UPDATE CART</button>
            </div>
        </div>
        <div class="c-total">
            <h1>CART TOTALS</h1>
            <div class="c-t-subtotal">
                 <div class="c-t-text">
                     <h1>SUBTOTAL</h1>
                     <p>300$</p>
                 </div>
            </div>
            <div class="c-t-shipping">
                <div class="c-t-text">
                     <h1>SHIPPING</h1>
                     <h3>Enter your address to view shipping options. <p>Calculate shipping</p></h3>
                 </div>
            </div>
            <div class="c-t-total">
                <div class="c-t-text">
                     <h1>TOTAL</h1>
                     <p>300$</p>
                 </div>
            </div>
            <div class="c-t-button">
                <nuxt-link to='/checkout' class="ptc">
                    <div class="c-t-btn-right">
                        <div class="c-t-btn">
                            <span class="c-t-arrow"></span>
                            <p class="c-t-next">PROCEED TO CHECKTOUT</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
  export default {
    head: {
        title: 'Cart - Moto-Shop',
    },
    data(){
      return{
          navPageNumber: 4
      }
    },
    mounted(){
        this.navBarColor(this.navPageNumber);
        this.cartPage();
        this.quantity();
    },
    methods: {
        quantity(){
            var item = document.querySelectorAll('.quantity')
            var top =  document.querySelectorAll('.top');
            var bottom = document.querySelectorAll('.bottom');
            for(var i=0;i<item.length;i++){
                top[i].addEventListener('click',(e)=>{
                    var index = Array.from(top).indexOf(e.target); //find index
                    var item = document.querySelectorAll('.piir-c-text p'); // item counter
                    var itembag = document.querySelectorAll('.cipi-quantity span'); // item counter
                    var value = parseInt( item[index].innerHTML) // counter value   
                    var price = parseInt(document.querySelectorAll('.price')[index].getAttribute('values')) // item price
                    value+=1
                    item[index].innerHTML = value;
                    itembag[index].innerHTML = value;
                    this.$store.commit('addQuantity' , {index , value}); // change quantity in vuex
                    document.querySelectorAll('.total p ')[index].innerHTML = value*price +'$' //change total price value item
                    this.totalPrice();
                })
                bottom[i].addEventListener('click',(e)=>{
                    var index = Array.from(bottom).indexOf(e.target);
                    var item = document.querySelectorAll('.piir-c-text p');
                    var value = parseInt( item[index].innerHTML)
                    var price = parseInt(document.querySelectorAll('.price')[index].getAttribute('values'))
                    if(value == 1){
                        item[index].innerHTML = 1;
                    }else{
                        value-=1
                        item[index].innerHTML = value;
                    }
                    document.querySelectorAll('.total p ')[index].innerHTML = value*price +'$'
                    this.totalPrice();
                })  
            }
        },
        totalPrice(){
            var items = this.$store.state.cart[1];
            var product = this.$store.state.product
            var totalPrice = 0;
            for(var i in items){
                var objectId = Object.values(items[i])[0]
                totalPrice += Object.values(product[objectId])[6]*items[i].quantity;
            }
            document.querySelector('.c-t-subtotal p ').innerHTML = totalPrice +'$'
            document.querySelector('.c-t-total p ').innerHTML = totalPrice +'$'
            document.querySelectorAll('.cart-item-total h1 ')[1].innerHTML = totalPrice +'$'

            //CHANGE PRICE
            this.$store.commit('totalPrice',totalPrice);
        }
        
    }
  }
</script>

<style scoped>
    
    .c-head{
      width: 100vw;
      height: 500px;
      display: flex;
      align-items: center;
      background-color: rgb(245,245,245);
      position: relative;
    }
    .c-head::before{
        content: 'CART';
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 350px;
        color: #fff;
        font-weight: 700;
    }
    .c-title{
        width: 1300px;
        margin: 0  auto;
        position: relative;
        z-index: 5;
    }
    .c-title h1{
        font-size: 70px;
        letter-spacing: 1.2px;
    }
    .cart-product{
        width: 1300px;
        margin: 100px auto 0;
    }
    table{
        width: 1300px;
    }
    table td{
        width: 325px
    }
    table tr{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #dedede
    }
    thead td{
        text-align: center;
    }
    thead tr{
        padding: 5px 0;
    }
    thead td h1{
        font-size: 18px;
    }
    .price , .total , .image , .quantity{
        padding: 20px 0;
    }
    .price , .total{
        text-align: center;
    }
    .c-p-info{
        display: flex;
        align-items: center;
        width: 200px;
        overflow: hidden;
    }
    .c-p-img{
        width: 85px;
        height: 85px;
    }
    .c-p-img img{
        width: 85px;
    }
    td.remove {
        width: 10px;
    }
    td.image{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .image h1{
        font: 16px 'Ubuntu', 'sans-serif';
        margin-left: 10px;
    }
    .image h1:hover{
        color: #E23137;;
    }
    .quantity-item {
        display: flex;
        justify-content: center;
        align-items: center;
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
    .c-cupon {
        width: 1300px;
        margin: 40px auto;
        display: flex;
        justify-content: space-between;
    }
    .c-c-input input{
        width: 220px;
        height: 50px;
        border: none;
        border-bottom: 2px solid #dedede;
        font-size: 20px;
        color: #000;
    }
    .c-c-input input:focus{
        outline: none;
        box-shadow: none;
        border-color:#E23137;
    }
    .c-c-input button{
        width: 150px;
        height: 50px;
        background-color: #E23137;
        color: white;
        border-radius: 2px;
    }
    .c-c-button button{
        width: 140px;
        height: 50px;
        background-color: #E23137;
        color: white;
        border-radius: 2px;
    }
    .c-total{
        width: 1300px;
        margin: 20px auto 100px;
    }
    .c-total h1{
        font-size: 45px;
    }
    .c-t-subtotal , .c-t-shipping , .c-t-total{
        border-bottom: 1px solid #dedede;
        padding: 20px 0;
    }
    .c-t-text{
        display: flex;
        align-items: center;
    }
    .c-t-text h1{
        width: 260px;
    }
    .c-t-text h1 ,.c-t-total p{
        font-size: 18px;
    }
    .c-t-text h3 , .c-t-subtotal p{
        font: 16px 'Ubuntu', 'sans-serif';
        color: #808080;
    }
    .c-t-text h3 p{
        font-weight: 700;
        color: #000;
    }
    .c-t-text h3 p:hover{
        cursor: pointer;
        color: #E23137;;
    }
    .c-t-button {
        margin: 20px 0;
    }
    .ptc{
        height: 100px;
    }
    .c-t-btn-right{
       background-color: #E23137;
        width: 320px;
        height: 53px;
        cursor: pointer;
    }
    .c-t-btn{
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
    .c-t-arrow{
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
    .c-t-arrow::before{
        content: '';
        position: absolute;
        width: 260px;
        height: 1px;
        background-color: #fff;
        transform: translateX(-260px);
    }
    .c-t-next{
        width: 210px;
        height: 20px;
        background-color: #E23137;
        color: #fff;
        font-size: 16px!important;
        text-align: center;
        transition: transform .5s ease;
        transform: translateX(-30px);
        z-index: 5;
    }
    .c-t-btn-right:hover .c-t-next{
        transform: translateX(30px);
    }
    @media screen and (max-width: 1400px) {
        .c-title , .cart-product , table tr , table,
        .c-cupon , .c-total{
            width: 1100px;
        }
    }
    @media screen and (max-width: 1200px) {
        .cart-product , table tr , table,
        .c-cupon , .c-total{
            width: 950px;
        }
    }
    @media screen and (max-width: 990px) {
        .cart-product , table tr , table,
        .c-cupon , .c-total{
            width: 750px;
        }
        .c-title{
            width: 83vw;
            padding-top: 60px;
        }
        .c-head{
            height: 42.5vw;
        }
        .c-head::before{
            font-size: 23vw;
            height: 30vw;
            margin: 40px 0;
        }
    }
    @media screen and (max-width: 763px) {
        .c-title h1{
            font-size: 50px;
        }
        .cart-product , table tr , table,
        .c-cupon , .c-total{
            width: 650px;
        }
    }
    @media screen and (max-width: 700px) {
        .cart-product , table tr , table,
        .c-cupon , .c-total{
            width: 85vw;
        }
        .c-p-img{
            display: none;
        }
        .c-cupon{
            flex-direction: column;
        }
        .c-t-text h1{
            width: 90px;
        }
    }
</style>
