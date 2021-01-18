<template>
    <div class="checkout">
        <div class="c-head">
             <div class="c-title">
                <h1>CHECKOUT</h1>
            </div>
        </div>
        <div class="check-cupon">
            <div class="c-c-alert">
                <p>Have a coupon?</p>
                <p>Click here to enter your code</p>
            </div>
            <div class="c-c-input">
                <h1>If you have a coupon code, please apply it below.</h1>
                <form action="">
                    <input type="text" value="Coupon code">
                    <button type="submit"> APPLY COUPON</button>
                </form>
            </div>
        </div>
        <div class="check-detal">
            <div class="c-d-billing-info">
                <h2>BILLING DETAILS</h2>
               <form action="">
                   <div class="c-d-b-i-names">
                       <div class="cdbi-fname"> 
                            <h1>First name *</h1>
                            <input type="text">
                       </div>
                       <div class="cdbi-lname">
                            <h1>Last name *</h1>
                            <input type="text">
                        </div>
                   </div>
                   <div class="cdbi-item">
                        <h1>Company name (optional)</h1>
                        <input type="text">
                   </div>
                    <div class="c-d-b-i-select">
                        <h1>Country *</h1>
                        <ul>
                            <li class="selected"> DEFAULT SHORTING </li>
                            <div class="c-d-b-i-countries">
                                <input type="text">
                                <div class="c-d-b-i-list">
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div class="cdbi-item">
                        <h1>Street address *</h1>
                        <input type="text" value="House number and street name">
                        <input type="text" value="Aparment, suite , unit etc.(optional)">
                    </div>
                    <div class="cdbi-item">
                        <h1>Town / City *</h1>
                        <input type="text">
                    </div>
                    <div class="cdbi-item">
                        <h1>State / County *</h1>
                        <input type="text">
                    </div>
                    <div class="cdbi-item">
                        <h1>Postcode / ZIP *</h1>
                        <input type="text">
                    </div>
                    <div class="cdbi-item">
                        <h1>Phone *</h1>
                        <input type="text">
                    </div>
                    <div class="cdbi-item">
                        <h1>Email address *</h1>
                        <input type="text">
                    </div>
               </form>
            </div>
            <div class="c-d-billing-info">
                <div class="c-d-b-i-title">
                    <input type="checkbox">
                    <h2>SHIP TO A DIFFERENT ADDRESS?</h2>
                </div>
               <form action="">
                   <div class="c-d-b-i-items" style="display:none">
                    <div class="c-d-b-i-names">
                        <div class="cdbi-fname"> 
                                <h1>First name *</h1>
                                <input type="text">
                        </div>
                        <div class="cdbi-lname">
                                <h1>Last name *</h1>
                                <input type="text">
                            </div>
                    </div>
                    <div class="cdbi-item">
                            <h1>Company name (optional)</h1>
                            <input type="text">
                    </div>
                        <div class="c-d-b-i-select">
                            <h1>Country *</h1>
                            <ul>
                                <li class="selected"> DEFAULT SHORTING </li>
                                <div class="c-d-b-i-countries">
                                    <input type="text">
                                    <div class="c-d-b-i-list">
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div class="cdbi-item">
                            <h1>Street address *</h1>
                            <input type="text" value="House number and street name">
                            <input type="text" value="Aparment, suite , unit etc.(optional)">
                        </div>
                        <div class="cdbi-item">
                            <h1>Town / City *</h1>
                            <input type="text">
                        </div>
                        <div class="cdbi-item">
                            <h1>State / County *</h1>
                            <input type="text">
                        </div>
                        <div class="cdbi-item">
                            <h1>Postcode / ZIP *</h1>
                            <input type="text">
                        </div>
                    </div>
                    <div class="cdbi-item">
                        <h1>Order notes (optional)</h1>
                        <input type="text" value="Notes about your order, e.g. special notes for delivery">
                    </div>
               </form>
            </div>
        </div>
        <div class="check-total">
            <div class="c-t-head">
                <h1>YOUR ORDER</h1>
                <div class="c-t-item">
                    <div class="c-t-text">
                        <h1>PRODUCT</h1>
                        <h1>SUBTOTAL</h1>
                    </div>
                </div>
            </div>
            <div class="c-t-product-items">
                <!--<div class="c-t-product-item">
                    <div class="c-t-text">
                        <p>Brakes × 1</p>
                        <p>50.00$</p>
                    </div>
                </div>
                <div class="c-t-product-item">
                    <div class="c-t-text">
                        <p>Exhaust  × 1</p>
                        <p>50.00$</p>
                    </div>
                </div>-->
            </div>
            <div class="c-t-item">
                 <div class="c-t-text">
                     <h1>SUBTOTAL</h1>
                     <p class="price">300$</p>
                 </div>
            </div>
            <div class="c-t-item">
                <div class="c-t-text">
                     <h1>SHIPPING</h1>
                     <h3>Enter your address to view shipping options. <p>Calculate shipping</p></h3>
                 </div>
            </div>
            <div class="c-t-item">
                <div class="c-t-text">
                     <h1>TOTAL</h1>
                     <p class="price2">300$</p>
                 </div>
            </div>
        </div>
        <div class="check-choose-pay">
            <form action="">
                <div class="c-c-p-item">
                    <div class="c-c-p-i-input">
                        <input type="radio" name="pay" checked="checked">
                        <h1>Direct bank transfer</h1>
                    </div>
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
                <div class="c-c-p-item" style="height: 30px">
                    <div class="c-c-p-i-input">
                        <input type="radio" name="pay" >
                        <h1>Check payments</h1>
                    </div>
                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode</p>
                </div>
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy</p>
                <button type="button" @click="place">PLACE HOLDER</button>
            </form>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import countries from '~/static/countries.json';
  export default {
    head: {
        title: 'Checkout - Moto-Shop',
    },
    data(){
        return{
            navPageNumber: 4,
            city : countries
        }
    },
    mounted(){
        this.navBarColor(this.navPageNumber);
        this.checkOut();
        //
        var li = document.querySelectorAll('.c-d-b-i-list');
        for(var i of this.city.Countries){
            li[0].innerHTML += '<li style="padding: 5px 0; text-transform:uppercase">'+i.name+'</li>'
            li[1].innerHTML += '<li style="padding: 5px 0; text-transform:uppercase">'+i.name+'</li>'
        }
        var listItem = document.querySelectorAll('.c-d-b-i-select li')
        var item = document.querySelector('.c-d-b-i-select')
        var underList = document.querySelectorAll('.c-d-b-i-countries')
        var control = 0
        var control2 = 0
        var number = 0
        var count = 0 
        //open close selectd
        for(var  t=0;t<2;t++){
            document.querySelectorAll('.selected')[t].addEventListener('click',(e)=>{
                var number = Array.from(listItem).indexOf(e.target);
                if(number == 244){
                    count = 1
                    if(control2 == 0){
                        underList[1].style ='display: block'
                        control2 = 1
                    }else{
                        underList[1].style ='display: none'
                        control2 = 0
                    }
                }else{
                    count = 0
                    if(control == 0){
                        underList[0].style ='display: block'
                        control = 1
                    }else{
                        underList[0].style ='display: none'
                        control = 0
                    }
                }
            })
            for(var i in this.city.Countries){
                document.querySelectorAll('.c-d-b-i-list')[t].children[i].addEventListener('click',(e)=>{
                    var index = Array.from(listItem).indexOf(e.target)
                    document.querySelectorAll('.selected')[count].innerHTML = document.querySelectorAll('.c-d-b-i-select li')[index].innerHTML;
                    underList[count].style ='display: none'
                    control = 0 
                    control2 = 0
                })
            }
        }
        //open close DIFFERENT ADDRESS
        var control3 = 0;
        document.querySelector('.c-d-b-i-title input').addEventListener('click',()=>{
            if(control3 == 0){
                document.querySelector('.c-d-b-i-items').style= 'display: block'
                control3 = 1;
            }else{
                document.querySelector('.c-d-b-i-items').style= 'display: none'
                control3 = 0;
            }
        })
        //open close cupon
        var control4 = 0;
        document.querySelectorAll('.c-c-alert p')[1].addEventListener('click',()=>{
            if(control4 == 0){
                document.querySelector('.c-c-input').style= 'display: block'
                control4 = 1;
            }else{
                document.querySelector('.c-c-input').style= 'display: none'
                control4 = 0;
            }
        })
        //select payment
        var payInput = document.querySelectorAll('.c-c-p-item input');
        var payItem = document.querySelectorAll('.c-c-p-item')
        for( var r=0; r<2 ; r++ ){
            payInput[r].addEventListener('click' , (e)=>{
                var index = Array.from(payInput).indexOf(e.target);
                if(index == 0){
                    payItem[0].style = 'height: 100px'
                    payItem[1].style = 'height: 30px'
                }else{
                    payItem[0].style = 'height: 30px'
                    payItem[1].style = 'height: 100px'
                }
            })
        }
    },
    methods:{
        place(){
            alert('not working!')
        }
    }
  }
</script>

<style scoped>
    .cart{
        display: flex;
        flex-direction: column  ;
    }
    .c-head{
      width: 100vw;
      height: 500px;
      display: flex;
      align-items: center;
      background-color: rgb(245,245,245);
      position: relative;
    }
    .c-head::before{
        content: 'PAYMENT';
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
    .check-cupon{
        width: 1300px;
        margin: 100px auto 0 ;
    }
    .c-c-alert{
        width: 1300px;
        height: 100px;
        border: 1px solid #dedede;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        box-sizing: border-box;
        color: #808080;
    }
    .c-c-alert p:last-child{
        cursor: pointer;
    }
    .c-c-input{
        margin: 10px 0;
        display: none;
    }
    .c-c-input h1{
        font: 16px 'Ubuntu' , 'sans-serif';
        color: #808080
    }
    .c-c-input input{
        width: 1300px;
        border-bottom: 2px solid #dedede;
        color: #000;
        font-size: 22px;
        padding: 10px 0;
    }
    .c-c-input input:focus{
        border-color: #E23137;
        outline: none;
        box-shadow: none;
    }
    .c-c-input button{
        width: 150px;
        height: 50px;
        background-color: #E23137;
        color: #fff;
        margin: 20px 0 ;
    }
    .check-detal{
        width: 1300px;
        margin: 40px auto 0;
        display: flex;
        justify-content: space-between;
    }
    .c-d-billing-info{
        width: 630px;
    }
    .c-d-b-i-title {
        display: flex;
        align-items: center;
    }
    .c-d-b-i-title input{
        width: 15px!important;
        margin: 10px;
    }
    .c-d-billing-info h1{
        font: 16px 'Ubuntu' , 'sans-serif';
        color: #808080
    }
    .c-d-billing-info h2{
        font-size: 36px;
        margin: 20px 0;
    }
    .c-d-billing-info input{
        width: 630px;
        border-bottom: 2px solid #dedede;
        color: #000;
        font-size: 22px;
        padding: 5px 0;
    }
    .c-d-billing-info input:focus{
        border-color: #E23137;
        outline: none;
        box-shadow: none;
    }
    .c-d-b-i-names {
        width: inherit;
        display: flex;
        justify-content: space-between;
    }
    .c-d-b-i-names input{
        width: 300px;
    }
    .cdbi-item{
        margin: 80px 0 ;
    }
    .cdbi-item:nth-child(4) input{
        margin: 40px 0;
    }
    .c-d-b-i-select{
        position: relative;
        width: 600px;
    }
    .c-d-b-i-select h1{
        position: absolute;
        transform: translateY(-30px);
    }
    .c-d-b-i-select:before{
        content:'';
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: #E23137;;
        right: 0;
        border-radius: 5px;
    }
    .c-d-b-i-select::after{
        content:'';
        position: absolute;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        width: 6px;
        height: 6px;
        transform: rotate(45deg) translate(-35px, -5px);
        right: 0;
    }
    .c-d-b-i-select ul{
        width: 600px;
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
        text-transform:uppercase
    }
    .c-d-b-i-list{
        width: 573px;
        height: 185px;
        position: absolute;
        left: 0;
        padding: 0 30px;
        box-sizing: border-box;
        background-color: #fff;
        overflow-y: scroll;
    }
    .c-d-b-i-countries{
        width: 598px;
        height: 270px;
        border: 1px solid #dedede;
        transform: translateX(-32px);
        background-color: #fff;
        display: none;
    }
    .c-d-b-i-countries input{
        width: 550px;
        height: 20px;
        border: 1px solid #dedede;
        margin: 15px 21px;

    }
    .c-d-b-i-countries input:focus{
        border: 1px solid #dedede;
    }
    .check-total{
        width: 1300px;
        margin: 20px auto 100px;
    }
    .check-total h1{
        font-size: 45px;
    }
    .c-t-item , .c-t-product-item{
        border-bottom: 1px solid #dedede;
        padding: 20px 0;
    }
    .c-t-text{
        display: flex;
        align-items: center;
    }
    .c-t-text h1 , .c-t-product-item .c-t-text p:first-child{
        width: 260px;
    }
    .c-t-text h1 ,.c-t-total p{
        font-size: 18px;
    }
    .c-t-text h3 , .price , .c-t-product-item .c-t-text p {
        font: 16px 'Ubuntu', 'sans-serif';
        color: #808080;
        font-weight: 400;
    }
    .c-t-text h3 p, .price2{
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
        background-color: #E23137;
        width: 320px;
        height: 53px;
        cursor: pointer;
    }
    .check-choose-pay{
        width: 1300px;
        margin: 20px auto 100px;
    }
    .c-c-p-item{
        height: 100px;
        padding: 20px 0;
        border-bottom: 1px solid #dedede;
        overflow: hidden;
        transition:  height .4s ease;
    }
    .c-c-p-i-input{
        display: flex;
        margin: 10px 0;
    }
    .c-c-p-item p{
        padding: 10px 0
    }
    .c-c-p-item h1 , .c-c-p-item p , .check-choose-pay p{
        font: 16px 'Ubuntu', 'sans-serif';
        color: #808080;
    }
    .check-choose-pay p{
        margin: 10px 0;
    }
    .check-choose-pay button{
        width: 150px;
        height: 50px;
        color: #fff;
        background-color: #E23137;
    }
    .check-choose-pay button:hover{
        background-color: #000;
        cursor: pointer;
    }
    @media screen and (max-width: 1400px) {
        .c-title , .check-cupon , .c-c-alert,
        .check-detal , .check-total , .check-choose-pay{
            width: 1100px;
        }
        .c-d-billing-info input , .c-d-billing-info , .c-d-b-i-select ul , .c-d-b-i-countries{
            width: 530px;
        }
        .c-d-b-i-countries input{
            width: 483px;
        }
        .c-d-b-i-list{
            width: 506px;
        }
        .c-d-b-i-names input{
            width: 250px;
        }
        .c-d-b-i-select:before{
            transform: translateX(-70px);
        }
        .c-d-b-i-select::after{
            transform: rotate(45deg) translate(-87px, 42px);
        }
    }
    @media screen and (max-width: 1200px) {
        .check-cupon , .c-c-alert,
        .check-detal , .check-total , .check-choose-pay{
            width: 950px;
        }
        .c-d-billing-info input , .c-d-billing-info , .c-d-b-i-select ul , .c-d-b-i-countries{
            width: 455px;
        }
        .c-d-b-i-countries input{ 
            width: 409px;
        }
        .c-d-b-i-list{
            width: 433px;
        }
        .c-d-b-i-names input{
            width: 212px;
        }
        .c-d-b-i-select:before{
            transform: translateX(-145px);
        }
        .c-d-b-i-select::after{
            transform: rotate(45deg) translate(-139px, 96px);
        }
    }
    @media screen and (max-width: 990px) {
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
        .check-cupon , .c-c-alert,
        .check-detal , .check-total , .check-choose-pay{
            width: 750px;
        }
        .c-d-billing-info input , .c-d-billing-info , .c-d-b-i-select ul , .c-d-b-i-countries{
            width: 360px;
        }
        .c-d-b-i-countries input{
            width: 315px;
        }
        .c-d-b-i-list{
            width: 338px;
        }
        .c-d-b-i-names input{
            width: 165px;
        }
        .c-d-b-i-select:before{
            transform: translateX(-241px);
        }
        .c-d-b-i-select::after{
            transform: rotate(45deg) translate(-206px, 163px)
        }
    }
    @media screen and (max-width: 763px) {
        .c-title h1{
            font-size: 50px;
        }
        .check-cupon , .c-c-alert,
        .check-detal , .check-total , .check-choose-pay{
            width: 420px;
        }
        .check-detal{
            flex-direction: column;
        }
        .c-d-billing-info input , .c-d-billing-info , .c-d-b-i-select ul , .c-d-b-i-countries{
             width: 420px;
        }   
        .c-d-b-i-countries input{
            width: 376px;
        }
        .c-d-b-i-list{
            width: 400px;
        }
        .c-d-b-i-names input{
             width: 195px;
        }
        .c-d-b-i-select:before{
            transform: translateX(-181px);
        }
        .c-d-b-i-select::after{
            transform: rotate(45deg) translate(-166px, 121px);
        }
    }
</style>
