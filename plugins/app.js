import Vue from 'vue'
Vue.mixin({
    data(){
        return{
            number : 0,
            logoBlack: require ('@/assets/img/other/black-logo.png'),
            logoWhite: require ('@/assets/img/other/white-logo.png'),
        }
    },
    methods:{
        mySpecialMethod(value){
            var cart = document.querySelector('.cart');
            var cartItem = document.querySelector('.cart-item');
            var contactBtn = document.querySelector('.contact-btn');
            var nav = document.querySelector('.nav')
            var link = document.querySelectorAll('.link')
            var width = document.body.offsetWidth;
            var imgLogo = document.querySelector('.logo img');
            if(width<996){
                imgLogo.src=this.logoBlack;
            }else{
                document.querySelector('.contact-item').addEventListener('mouseover',()=>{
                document.querySelector('.background').style = 'opacity : 1; visibility: visible'
                })
                document.querySelector('.contact-item').addEventListener('mouseout',()=>{
                document.querySelector('.background').style = 'opacity : 0; visibility: hidden'
                })
            }
            //bg animation
            for(var s=0; s<7;s++){
                if(width<996){
                
                }else{
                document.querySelectorAll('.nav a')[s].addEventListener('mouseover',()=>{
                    document.querySelector('.background').style = 'opacity : 1; visibility: visible'
                })
                document.querySelectorAll('.nav a')[s].addEventListener('mouseout',()=>{
                    document.querySelector('.background').style = 'opacity : 0; visibility: hidden'
                })
                }
            }
            //cart animation
            cart.addEventListener('mouseover',()=>{
                var count = this.$store.state.cart[0];
                if(count == 0){

                }else{
                    var cartHeight = 150+(this.$store.state.cart[0]*100)
                    cartItem.style="visibility: visible"
                    document.querySelector('.items').style = 'height: '+cartHeight+'px';
                    this.control = 1;
                }
            })
            cart.addEventListener('mouseout',()=>{
                setTimeout(() => {
                if(this.control == 1){

                }else{
                    cartItem.style="visibility: hidden"
                    document.querySelector('.items').style = 'height: 0px';
                }
                }, 500);
                this.control = 0;
            })
            cartItem.addEventListener('mouseover',()=>{
                this.control = 1;
                setTimeout(() => {
                if(this.control == 1){

                }else{
                    cartItem.style="visibility: hidden"
                    document.querySelector('.items').style = 'height: 0px';
                }
                }, 1000);
            })
            cartItem.addEventListener('mouseout',()=>{
                this.control = 0;
            })
            //contact btn animation
            contactBtn.addEventListener('mouseover',()=>{
                var delay = 0;
                for( var i=0;i<12;i++){
                    if(i>4){
                        delay = 1;
                    }else if(i>8){
                        delay = 2;
                    }
                    if(this.color == 1){
                        document.querySelectorAll('.contact-btn ul li')[i].style= 'animation: li-animation-out .2s ease .'+delay+'s forwards; background-color: #000'
                    }else{
                        document.querySelectorAll('.contact-btn ul li')[i].style= 'animation: li-animation-out .2s ease .'+delay+'s forwards;'
                    }
                }
            })
            contactBtn.addEventListener('mouseout',()=>{
                for( var i=0;i<12;i++){
                    if(this.color == 1){
                    document.querySelectorAll('.contact-btn ul li')[i].style= 'animation: li-animation-in .2s ease  forwards;background-color: #000'
                    }else{
                    document.querySelectorAll('.contact-btn ul li')[i].style= 'animation: li-animation-in .2s ease  forwards;'
                    }
                }
            })
            //open window contact 
            contactBtn.addEventListener('click',()=>{
                var width = document.body.offsetWidth;
                if(width < 996){
                    if(this.animation ==0 ){
                        document.querySelector('.nav-menu').classList.remove('nav-out2');
                        document.querySelector('.nav-menu').classList.add('nav-in2');
                        this.animation = 1;
                    }else{
                        document.querySelector('.nav-menu').classList.remove('nav-in2');
                        document.querySelector('.nav-menu').classList.add('nav-out2');
                        this.animation = 0; 
                    }
                }else{
                    document.querySelector('.contact-item').style="visibility: visible; height: 767px ;padding: 50px";
                    document.querySelector('.contact-btn').style="background-color: #fff";
                for( var i=0;i<12;i++){
                    document.querySelectorAll('.contact-btn li')[i].style="background-color: #000";
                }
                this.color = 1;
                this.close();
                }
            })
            //nav in-out animation
            document.addEventListener('scroll', ()=>{
                var width = document.body.offsetWidth;
                if(width > 996){ 
                    if(document.documentElement.scrollTop > 300){
                        nav.classList.remove('nav-out')
                        nav.classList.add('nav-in')
                        imgLogo.src=this.logoBlack;
                        for(var i=0; i<7;i++){
                            link[i].style = 'color: #000';
                        }
                    }else if(document.documentElement.scrollTop <= 700){
                        nav.classList.remove('nav-in')
                        nav.classList.add('nav-out')
                        this.navChangeColor(this.$store.state.pages)
                    } 
                }else{
                    if(document.documentElement.scrollTop > 700){
                        nav.classList.remove('nav-out')
                        nav.classList.add('nav-in')
                    }else if(document.documentElement.scrollTop <= 700){
                        nav.classList.remove('nav-in')
                        nav.classList.add('nav-out')  
                    }
                }
            })
            //change logo color 
            window.addEventListener('resize',()=>{
                var width = document.body.offsetWidth;
                if(width < 996){
                    imgLogo.src=this.logoBlack;
                }else{
                    imgLogo.src=this.logoWhite;
                    document.querySelector('.nav-menu').classList.remove('nav-out2');
                }
            })
            // nav event
            for(var t=0; t<7;t++){
                link[t].addEventListener('click',(e)=>{
                    var index = Array.from(link).indexOf(e.target);
                    var width = document.body.offsetWidth;
                    if(width < 996){
                        if(this.animation == 0 ){
                            document.querySelector('.nav-menu').classList.remove('nav-out2');
                            document.querySelector('.nav-menu').classList.add('nav-in2');
                            this.animation = 1;
                        }else{
                            document.querySelector('.nav-menu').classList.remove('nav-in2');
                            document.querySelector('.nav-menu').classList.add('nav-out2');
                            this.animation = 0; 
                        }
                    }else{
                        this.navChangeColor(index);
                        this.$store.commit('pageNumber' , index)
                    }
                    //stop slider home page
                    if(index > 0){
                        var numb = 1;
                        this.$store.commit('stopSlider' , numb)
                    }
                })
            }
            
        },
        navBarColor(pageNumber){
            this.$store.commit('pageNumber' , pageNumber)
            this.navChangeColor(this.$store.state.pages)
        },
        navChangeColor(number){
            var imgLogo = document.querySelector('.logo img')
            var link = document.querySelectorAll('.link')
            if(number == 1 || number == 2 || number == 4 || number == 6){
                imgLogo.src=this.logoBlack;
                for(var s=0; s<7;s++){
                    link[s].style = 'color: #000'; 
                }
            }else{
                imgLogo.src=this.logoWhite;
                for(var s=0; s<7;s++){
                    link[s].style = ''; 
                }
            }
        },
        cartItemNumber(number){
            var itemNumber = number-1;
            var items = this.$store.state.cart[1];
            var control = 1;
            for(var s in items){
                if(Object.values(items[s])[0] == itemNumber){ //control same item
                    alert('This product is in the basket')
                    control = 0
                    break;
                }else{
                    control = 1
                }
            }
            this.addItemsBag(number ,control)
        },
        addItemsBag(number,c){
            if(c == 0){
                //
            }else{
                var product = this.$store.state.product
                var itemNumber = number-1;
                var items = this.$store.state.cart[1];
                var totalPrice = 0;
                // increase bag number
                this.$store.commit('addToCart');

                //change bag number
                document.querySelector('.item-count').innerHTML = this.$store.state.cart[0];

                // add bag item
                document.querySelector('.cart-item-product').innerHTML +=   '<div class="c-i-p-item">'+
                                                                                '<div class="cipi-info">'+
                                                                                    '<div class="cipi-img">'+
                                                                                        '<img src="/_nuxt/assets/img/product/' +Object.values(product[itemNumber])[0]+ '" alt="">'+
                                                                                    '</div>'+
                                                                                    '<div class="cipi-text">'+
                                                                                        '<h1>'+Object.values(product[itemNumber])[5]+'</h1>'+
                                                                                        '<p class="cipi-quantity">QUANTITY : <span>1</span></p>'+
                                                                                        '<p>'+Object.values(product[itemNumber])[6]+'$</p>'+
                                                                                    '</div>'+
                                                                                '</div>'+
                                                                                '<div class="cipi-remove">'+
                                                                                    '<p product_id ="'+itemNumber+'">X</p>'+
                                                                                '</div>'+
                                                                            '</div>'
                this.$store.commit('addItemCart',itemNumber);
                //TOTAL PRICE
                for(var i in items){
                    var objectId = Object.values(items[i])[0]
                    totalPrice += Object.values(product[objectId])[6]*items[i].quantity;
                }
                //CHANGE PRICE
                this.$store.commit('totalPrice',totalPrice);
                document.querySelectorAll('.cart-item-total h1')[1].innerHTML = totalPrice + '$';
                // add id
                for(var f=0;f<this.$store.state.cart[0];f++){
                    document.querySelectorAll('.cipi-remove p')[f].id=f;
                }
                //call remove function
                this.removeBagItem()
            }

        },
        removeBagItem(){
            var bagItem =  document.querySelectorAll('.cipi-remove p')
            for(var u=0; u<bagItem.length ;u++){
                bagItem[u].addEventListener('click' ,(e)=>{
                    var productId = parseInt(e.target.getAttribute('product_id'));
                    var id= parseInt(e.target.getAttribute('id'));
                    //
                    this.$store.commit('removeItem',productId);
                    this.$store.commit('removeCartCount');
                    //
                    var cartItemCount = this.$store.state.cart[0];
                    var cartHeight = 150+(cartItemCount*100)
                    var product = this.$store.state.product;
                    var items = this.$store.state.cart[1];
                    var totalPrice = 0;
                    //
                    //TOTAL PRICE
                    for(var i in items){
                        var objectId = Object.values(items[i])[0]
                        totalPrice += Object.values(product[objectId])[6]*items[i].quantity;
                    }
                    //CHANGE PRICE
                    this.$store.commit('totalPrice',totalPrice);
                    document.querySelectorAll('.cart-item-total h1')[1].innerHTML = totalPrice + '$';
                    //
                    document.querySelector('.cart-item-product').children[id].remove();
                    document.querySelector('.item-count').innerHTML = cartItemCount;
                    document.querySelector('.items').style = 'height: '+cartHeight+'px';
                    //change id
                    for(var f=0;f<cartItemCount;f++){
                        document.querySelectorAll('.cipi-remove p')[f].id=f;
                    }
                })
            }
        },
        cartPage(){
            var products = this.$store.state.product;
            var items = this.$store.state.cart[1]
            document.querySelector('.cart-product table tbody').innerHTML = "";
            for(var i in items){
            var id = Object.values(items[i])[0]
            document.querySelector('.cart-product table tbody').innerHTML += '<tr data-v-4c1c1dce="">'+
                                                                                '<td class="image" data-v-4c1c1dce="">'+
                                                                                    '<div class="remove" data-v-4c1c1dce="">'+
                                                                                    '<p data-v-4c1c1dce="" product_id ="'+id+'" id='+i+'>x</p>'+
                                                                                    '</div>'+
                                                                                    '<div class="c-p-info" data-v-4c1c1dce="">'+
                                                                                    '<div class="c-p-img" data-v-4c1c1dce="">'+
                                                                                        '<img src="/_nuxt/assets/img/product/' +Object.values(products[id])[0]+ '" alt="" data-v-4c1c1dce="">'+
                                                                                    '</div>'+
                                                                                        '<h1 data-v-4c1c1dce="">' +Object.values(products[id])[5]+ '</h1>'+
                                                                                    '</div>'+
                                                                                '</td>'+
                                                                                '<td class="price" data-v-4c1c1dce="" values ="' +Object.values(products[id])[6]+ '"><p data-v-4c1c1dce="">' +Object.values(products[id])[6]+ '$</p></td>'+
                                                                                '<td class="quantity" data-v-4c1c1dce="">'+
                                                                                    '<div class="quantity-item" data-v-4c1c1dce="">'+
                                                                                        '<div class="piir-count" data-v-4c1c1dce="">'+
                                                                                            '<div class="piir-c-text" data-v-4c1c1dce="">'+
                                                                                                '<p data-v-4c1c1dce="">' +items[i].quantity+ '</p>'+ 
                                                                                            '</div>'+
                                                                                            '<div class="piir-c-button" data-v-4c1c1dce="">'+
                                                                                                '<button type="submit" class="top" data-v-4c1c1dce=""></button>'+
                                                                                                '<button type="submit" class="bottom" data-v-4c1c1dce=""></button>'+
                                                                                            '</div>'+
                                                                                        '</div>'+
                                                                                    '</div>'+
                                                                                '</td> '+  
                                                                                '<td class="total" data-v-4c1c1dce=""><p data-v-4c1c1dce="">' +Object.values(products[id])[6]*items[i].quantity+ '$</p></td></tr>'+
                                                                            '</tr>' 
            document.querySelector('.c-t-subtotal p').innerHTML = this.$store.state.cart[2] +'$';
            document.querySelector('.c-t-total p').innerHTML = this.$store.state.cart[2]+'$';
            }
        },
        checkOut(){
            var totalPrice = this.$store.state.cart[2];
            var products = this.$store.state.product;
            var items = this.$store.state.cart[1]
            //
            document.querySelector('.c-t-product-items').innerHTML = ''
            document.querySelector('.price').innerHTML = totalPrice + '$';
            document.querySelector('.price2').innerHTML = totalPrice+ '$'
            //
            for(var i in items){
            var id = Object.values(items[i])[0]
            document.querySelector('.c-t-product-items').innerHTML+='<div data-v-3f9ab082 class="c-t-product-item">'+
                                                                        '<div data-v-3f9ab082 class="c-t-text">'+
                                                                            '<p data-v-3f9ab082 >'+Object.values(products[id])[5]+' × '+items[i].quantity+'</p>'+
                                                                            '<p data-v-3f9ab082 >'+Object.values(products[id])[6]*items[i].quantity+'$</p>'+
                                                                        '</div>'+
                                                                    '</div>'
            }
        },
        shortItem(index,products){ //short item
            var list = products;
            switch(index){
                case 1: //default 
                    list=products;
                ;break; 

                case 2: //lastest
                    list = [];
                    for(var i = products.length-1 ; i>=0 ; i--){ //reverse list
                        list.push(products[i])
                    }
                ;break;

                case 3: //Rating
                    var raiting = {};
                    for(var i = 0 ; i<products.length ; i++){ // get raiting number in products
                        raiting[Object.values(products[i])[7]] = Object.values(products[i])[4]
                    }
                    raiting = Object.keys(raiting).sort(function(a,b){return raiting[a]-raiting[b]}) // raking object 
                    raiting.reverse() // reverse object
                    list= [];
                    for(var t in raiting){ // relist list
                        var f = parseInt(raiting[t] - 1)
                        list.push(products[f])
                    }
                ;break;

                case 4: //high price
                    var highPrice = {}
                    for(var i = 0 ; i<products.length ; i++){ // get price number in products
                        highPrice[Object.values(products[i])[7]] = Object.values(products[i])[6]
                    }
                    highPrice = Object.keys(highPrice).sort(function(a,b){return highPrice[a]-highPrice[b]}) // raking price
                    highPrice.reverse() // reverse object
                    list= [];
                    for(var t in highPrice){ // relist list
                        var f = parseInt(highPrice[t] - 1)
                        list.push(products[f])
                    }
                ;break; 
                    
                case 5: //low price
                var lowPrice = {}
                for(var i = 0 ; i<products.length ; i++){ // get price number in products
                    lowPrice[Object.values(products[i])[7]] = Object.values(products[i])[6]
                }
                lowPrice = Object.keys(lowPrice).sort(function(a,b){return lowPrice[a]-lowPrice[b]}) // raking price
                list= [];
                    for(var t in lowPrice){ // relist list
                        var f = parseInt(lowPrice[t] - 1)
                        list.push(products[f])
                    }
                ;break;
                default: short="default";
            }
            this.reListProductList(list) // relist product list in shop page
        },
        /*reListProductList(list){
            document.querySelector('.s-l-s-p-items').innerHTML = '';
            for( var i in list){
                var condition = '';
                switch(Object.values(list[i])[1]){
                    case 'SALE': condition = 'i-c-sale';break; 
                    case 'SOLD': condition = 'i-c-sold';break;
                    case 'NEW': condition = 'i-c-new';break; 
                    default: condition="";
                }
                document.querySelector('.s-l-s-p-items').innerHTML +=   '<div class="s-l-s-p-item" product_id="'+Object.values(list[i])[7]+'" data-v-04222998>'+
                                                                            '<div class="s-l-s-p-item-img" data-v-04222998>'+
                                                                                '<img src="/_nuxt/assets/img/product/'+Object.values(list[i])[0]+'" alt="" data-v-04222998>'+
                                                                            '</div>'+
                                                                            '<div class="s-l-s-p-item-btn" data-v-04222998>'+
                                                                            '<div class="s-l-s-p-btn" data-v-04222998>'+
                                                                                '<p data-v-04222998>ADD TO CARD</p>'+
                                                                                '</div>'+
                                                                                    '<div class="s-l-s-p-arrow" data-v-04222998></div>'+
                                                                                '</div>'+
                                                                            '<div class="item-condition" data-v-04222998> <p class="'+condition+'" data-v-04222998>'+Object.values(list[i])[1]+'</p></div>'+
                                                                            '<div class="s-l-s-p-item-info" data-v-04222998>'+
                                                                                '<div class="s-l-s-p-item-categori" data-v-04222998>'+
                                                                                    '<div class="categori" data-v-04222998>'+
                                                                                        '<p data-v-04222998><span data-v-04222998>'+Object.values(list[i])[2]+'</span><span data-v-04222998>'+Object.values(list[i])[3]+'</span></p>'+
                                                                                    '</div>'+
                                                                                    '<div class="ratings" data-v-04222998>'+
                                                                                        '<ul data-v-04222998>'+
                                                                                            //'<li data-v-04222998> <p style="" data-v-04222998></p><i class="fas fa-star" data-v-04222998></i> </li>'+
                                                                                            //'<li data-v-04222998> <p style="" data-v-04222998></p><i class="far fa-star" data-v-04222998></i> </li>'+
                                                                                        '</ul>'+ 
                                                                                    '</div>'+
                                                                                '</div>'+
                                                                                '<div class="s-l-s-p-item-price" data-v-04222998>'+
                                                                                    '<a href="/shop/'+Object.values(list[i])[5]+'" class="categori-name" data-v-04222998="">'+Object.values(list[i])[5]+'</a>'+
                                                                                '<div class="price" data-v-04222998>'+Object.values(list[i])[6]+'$</div>'+
                                                                                '</div>'+
                                                                            '</div>'+
                                                                        '</div>'
                //change raiting
                for(var d=0;d<5;d++){
                    var star = ''
                    if( d < Object.values(list[i])[4]){
                        star = 'fas fa-star' 
                    }else{
                        star = 'far fa-star'
                    }
                    document.querySelectorAll('.ratings ul')[i].innerHTML += '<li data-v-04222998> <p style="" data-v-04222998></p><i class="'+star+'" data-v-04222998></i> </li>';
                }
            }
            if(list.length == 0 ){

            }else{
                for(var i=0;i<list.length;i++){
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
            }
        },*/
        reListProductList(list){
            var length = list.length;
            for(var l =0; l<9 ;l++){
                if(l<length){
                    document.querySelectorAll('.s-l-s-p-item')[l].style.display = "block"
                }else{
                    document.querySelectorAll('.s-l-s-p-item')[l].style.display = "none";
                }
                document.querySelectorAll('.s-l-s-p-item')[l].setAttribute('product_id','');
                document.querySelectorAll('.s-l-s-p-item-img img ')[l].src = '';
                try{
                    document.querySelectorAll('#item-condition')[l].innerHTML = '';
                    document.querySelectorAll('#item-condition')[l].setAttribute('class','');
                }catch(error){

                }
                document.querySelectorAll('#c-name1')[l].innerHTML = '';
                document.querySelectorAll('#c-name2')[l].innerHTML = '';
                document.querySelectorAll('.ratings ul')[l].innerHTML = '';
                document.querySelectorAll('.categori-name')[l].innerHTML = '';
                document.querySelectorAll('.price')[l].innerHTML = '';
            }
            for( var i in list){
                try{
                    var condition = '';
                switch(Object.values(list[i])[1]){
                    case 'SALE': condition = 'i-c-sale';break; 
                    case 'SOLD': condition = 'i-c-sold';break;
                    case 'NEW': condition = 'i-c-new';break; 
                    default: condition="";
                }
                document.querySelectorAll('#item-condition')[i].innerHTML = Object.values(list[i])[1];
                document.querySelectorAll('#item-condition')[i].setAttribute('class',condition);
                }catch(error){
                    //
                }
                document.querySelectorAll('.s-l-s-p-item')[i].setAttribute('product_id',Object.values(list[i])[7]);
                document.querySelectorAll('.s-l-s-p-item-img img ')[i].src = require ('@/assets/img/product/'+Object.values(list[i])[0]);
                document.querySelectorAll('#c-name1')[i].innerHTML = Object.values(list[i])[2];
                document.querySelectorAll('#c-name2')[i].innerHTML = Object.values(list[i])[3];
                document.querySelectorAll('.ratings ul')[i].innerHTML = '';
                document.querySelectorAll('.categori-name')[i].innerHTML = Object.values(list[i])[5];
                document.querySelectorAll('.price')[i].innerHTML = Object.values(list[i])[6]+'$';
                //change raiting
                for(var d=0;d<5;d++){
                    var star = ''
                    if( d < Object.values(list[i])[4]){
                        star = 'fas fa-star' 
                    }else{
                        star = 'far fa-star'
                    }
                    document.querySelectorAll('.ratings ul')[i].innerHTML += '<li data-v-04222998> <p style="" data-v-04222998></p><i class="'+star+'" data-v-04222998></i> </li>';
                }
                
            }
            if(list.length == 0 ){

            }else{
                for(var i=0;i<list.length;i++){
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
            }
        },
        searchProduct(value){
            var product = this.$store.state.product;
            var list = [];
            for(var i of product){
                var text = (value).toLowerCase()
                var productName = (Object.values(i)[5]).toLowerCase() 
                if(productName.includes(text)){
                    list.push(i)
                }else{
                    //
                }
            }
            this.reListProductList(list)
        },
        filterPriceRange(value1,value2){ // select product with price range
            var product = this.$store.state.product;
            var list = [];
            for(var i of product){
                var productPrice = Object.values(i)[6] 
                if(productPrice > value1 && productPrice < value2){
                    list.push(i)
                }else{
                    //
                }
            }
            this.reListProductList(list)
        },
        filterCategorie(value){ // select product with categorie
            var product = this.$store.state.product;
            var list = [];
            for(var i of product){
                var categori = (value).toLowerCase()
                var productCategorie = (Object.values(i)[3]).toLowerCase() 
                if( productCategorie == categori ){
                    list.push(i)
                }else{
                    //
                }
            }
            this.reListProductList(list)
        },
        productInfoPage(){
            var productId = this.$store.state.productNumber;
            var product = this.$store.state.product;
            //breadcumb
            document.querySelectorAll('.p-i-b-items a')[2].innerHTML =  (Object.values(product[productId])[2]) + (Object.values(product[productId])[3])
            document.querySelectorAll('.p-i-b-items a')[3].innerHTML =  (Object.values(product[productId])[5])
            //productinfo
            document.querySelector('.piir-text h1').innerHTML =  (Object.values(product[productId])[5])
            document.querySelector('.piir-price p').innerHTML =  (Object.values(product[productId])[6])+'$'
            //
            document.querySelector('.piir-qi-categori span').innerHTML =  (Object.values(product[productId])[2]) + (Object.values(product[productId])[3])
            document.querySelector('.piir-qi-code span').innerHTML = (Object.values(product[productId])[8])
            //product img
            document.querySelector('.piil-img').innerHTML = '<img src="/_nuxt/assets/img/product/'+Object.values(product[productId])[0]+'" alt="" data-v-2b27d286>'
            for(var o=0;o<3;o++){
                document.querySelectorAll('.pill-item img')[o].src = 'http://localhost:3000/_nuxt/assets/img/product/shop-img-'+productId+"-0"+(o+1)+'.jpg'
            }
            //change raiting
            for(var d=0;d<5;d++){
                var star = ''
                if( d < Object.values(product[productId])[4]){
                    star = 'fas fa-star' 
                }else{ 
                    star = 'far fa-star'
                }
                document.querySelector('.piir-ratings ul').innerHTML += '<li data-v-2b27d286> <p style="" data-v-2b27d286></p><i class="'+star+'" data-v-2b27d286></i> </li>';
            }
        },
        articleInfo(){
            var blog = this.$store.state.blog;
            var blogNumber = this.$store.state.blogNumber;
            document.querySelector('.b-a-c-img img').src = require ('@/assets/img/blog/'+Object.values(blog[blogNumber])[0])
            document.querySelector('.b-a-c-text h1').innerHTML = Object.values(blog[blogNumber])[2]
            document.querySelector('.blog-article-title h1').innerHTML = Object.values(blog[blogNumber])[2]
        }
    }
})