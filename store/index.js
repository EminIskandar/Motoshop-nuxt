export const state = () => ({
    product: [
        { img: 'shop-img-0-02.jpg' ,condition : 'SALE', categori : 'FAST - ' , underCategori: 'HELMETS' , star : 4 , name : 'EXHAUST', price : 50 , id:1 , code: 'PRO01'},
        { img: 'shop-img-1-02.jpg' ,condition : 'NEW', categori : 'HELMETS - ' , underCategori: 'QUALITY' , star : 2 , name  : 'BRAKES', price : 250, id:2 , code: 'PRO02'},
        { img: 'shop-img-2-02.jpg' ,condition : 'SOLD', categori : 'HELMETS - ' , underCategori: 'QUALITY' , star : 5 , name  : 'HELMET', price : 230, id:3 , code: 'PRO03'},
        { img: 'shop-img-3-02.jpg' ,condition : '', categori : 'HELMETS - ' , underCategori: '' , star : 3 , name : 'GLOVES', price : 80, id:4 , code: 'PRO04'},
        { img: 'shop-img-4-02.jpg' ,condition : 'SALE', categori : 'HELMETS - ' , underCategori: 'SOUND' , star : 5 , name  : 'FILTER', price : 60, id:5 , code: 'PRO05'},
        { img: 'shop-img-5-02.jpg' ,condition : '', categori : 'HELMETS - ' , underCategori: 'LEATHER' , star : 5 , name  : 'MOTO JACKET', price : 170, id:6 , code: 'PRO06'},
        { img: 'shop-img-6-02.jpg' ,condition : '', categori : 'HELMETS - ' , underCategori: 'MOTO' , star : 3 , name  : 'M HELMET  ', price : 210, id:7, code: 'PRO07'},
        { img: 'shop-img-7-02.jpg' ,condition : '', categori : 'HELMETS - ' , underCategori: 'SPEED' , star : 4 , name  : 'BOOTS', price : 160, id:8 , code: 'PRO08'},
        { img: 'shop-img-8-02.jpg',condition : '', categori : 'HELMETS - ' , underCategori: '' , star : 1 , name  : 'MECHANIC KIT', price : 130, id:9 , code: 'PRO09'} 
    ],
    cart:[
        0,  //product count in bag
        [], //products index and quantity 
        0,  //total price

    ], 
    pages: 0,
    interval:0,
    productNumber:0,
    blog:[
        { img: 'blog-img-1.jpg', date: 'SEPTEMPER 9, 2019' , title : 'MOTO G6 – MOVE PICTURES' ,typePost : 1, id:0},
        { bgColor: '#E23137', author: 'PETER GREEN' , title : 'Lorem ipsum dolor sit amet, sonet intellegat deterruisset usu at, nec zril timeam in. ', bgText : 'Q1', typePost : 3, id:1},
        { img: 'blog-img-2.jpg', date: 'SEPTEMPER 9, 2019' , title : 'CLOSEOUT MOTOCROSS GEAR' ,typePost : 1, id:2},
        { img: 'blog-img-3.jpg', date: 'SEPTEMPER 4, 2019' , title : 'MOTOCROSS GEAR BAG',typePost : 1, id:3},
        { img: 'blog-img-4.jpg', date: 'SEPTEMPER 9, 2019' , title : 'HOW TO SETUP SUSPENSION' ,typePost : 2, id:4},
        { img: 'blog-img-5.jpg', date: 'SEPTEMPER 4, 2019' , title : 'DRD EXHAUST REVIEW',typePost : 1, id:5},
        { img: 'blog-img-6.jpg', date: 'SEPTEMPER 2, 2019' , title : 'AMA OUTDOOR NATIONAL TEAMS',typePost : 2, id:6},
        { img: 'blog-img-7.jpg', date: 'SEPTEMPER 2, 2019' , title : 'ARTISTIC REVIEW OF IRONMAN: 2019',typePost : 1, id:7},
        { img: 'blog-img-8.jpg', date: 'SEPTEMPER 2, 2019' , title : 'RENTHAL COUNTERSHAFT SPROCKET',typePost : 1, id:8},
        { img: 'blog-img-9.jpg', date: 'SEPTEMPER 2, 2019' , title : 'REKLUSE CORE EXP CLUTCH REVIEW',typePost : 1, id:9},
        { bgColor: '#000', author: 'PETER GREEN' , title : 'Lorem ipsum dolor sit amet, sonet intellegat deterruisset usu at, nec zril timeam in. ', bgText : 'L1', typePost : 3, id:10},
        { img: 'blog-img-11.jpg', date: 'SEPTEMPER 2, 2019' , title : 'SUPERCROSS SCHEDULE',typePost : 2, id:11}
    ],
    blogNumber:0
})
  
export const getters = {
    
}
export const mutations = {
    pageNumber(state,page){
        state.pages = page
    },
    addToCart(state){
        state.cart[0]++
    },
    addItemCart(state,itemId){
        state.cart[1].push( {item: itemId, quantity: 1})
    },
    addQuantity(state, {index , value}){
        state.cart[1][index].quantity= value;  
    },
    totalPrice(state, price){ 
        state.cart[2] = price 
    },
    removeItem(state,productId){
        state.cart[1] = state.cart[1].filter(val => val.item !== productId);
    },
    removeCartCount(state){
        state.cart[0]--
    },
    stopSlider(state,number){ 
        state.interval = number
    },
    productNumberChange(state,number){
        state.productNumber = number
    },  
    blogNumberChange(state,number){
        state.blogNumber = number
    }   
}
export const actions = {

}