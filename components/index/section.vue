<template>
    <div id="Section">
        <div class="s-items">
          <div class="s-item" v-for="item in item " :key="item.id">
            <div class="title">
              <h5>{{item.title}}</h5>
              <h1>{{item.title2}}</h1>
            </div>
            <div class="item-img">
              <img :src="require ('@/assets/img/other/'+item.img) " alt="">
            </div>
            <div class="shop-now">
              <p>SHOP NOW</p>
              <img :src="require ('@/assets/img/right-black.png') " alt="">
            </div>
            <div class="item-back"> 
              <h1>R{{item.id}}</h1>
            </div>
          </div>
        </div>
    </div>
</template> 

<script>
  export default {
    name: 'Section',
    data(){
      return{
        item: [
          {title : 'PREMIUM HELMETS' , title2 : 'RJ PLATINUM-R HELMETS ' , img: 'section-img1.png' , id: 1},
          {title : 'RACING GLOVES' , title2 : 'NEOTEC II RACING GLOVES ' , img: 'section-img4.png' , id: 2},
          {title : 'RACING BOOTS' , title2 : 'X-FOURTEENT BOOTS' , img: 'section-img5.png' , id: 3} 
        ]
      }
    }
  }
</script>

<style scoped>
  .s-items{
    display: flex;
    overflow: hidden;
    width: 1920px;
  }
  .s-item{
    width: 630px;
    height: 400px;
    padding: 50px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .s-item:nth-child(2){
    background-color:  #f5f5f5;
  }
  .s-item h5{
    color: #E23137;;
    font: 11px 'Heebo', sans-serif;;
  }
  .s-item h1{
    font-size: 24px;
  }
  .shop-now{
    transform: translateY(-50px);
    position: relative;
    z-index: 6;
    width: 70px;
  }
  .shop-now p{
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    width: 70px;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    transition:  transform .4s ease;
  }
  .s-item:nth-child(2) .shop-now p{
    background-color:  #f5f5f5;
  }
  .shop-now:hover p{
    transform: translateX(72px);
  }
  .shop-now img{
    width: 150px;
  }
  .item-img{
    position: relative;
    z-index: 5;
  }
  .item-img img{
    transform: translateX(260px);
    z-index: 5;
    transition: transform .4s ease;
  }
  .s-item:hover .item-img img{
    transform: translateX(270px);
  }
  .item-back{
    position: absolute;
    z-index: 1;
  }
  .item-back h1{
    font-size: 250px;
    color: #f5f5f5;
    text-align: center;
    width: 500px;
  }
  .s-item:nth-child(2) .item-back h1{
    color: #fff;
  }
  @media screen and (max-width: 1900px) {
  .s-items{
    width: 100vw;
  }
  .s-item{
    width: 33vw;
  }
  .item-back h1{
    width: 27vw;
  }
  .item-img img {
    transform: translateX(12vw);
    height: 14vw;
  }
  .s-item:hover .item-img img{
    transform: translateX(13vw);
  }
}
 @media screen and (max-width: 1700px) {
  .shop-now{
    transform: none;
  }
 }
@media screen and (max-width: 763px) {
  .shop-now{
    transform: none;
  }
  .s-items{
    flex-direction: column;
  }
  .s-item{
    width: 100vw;
  }
  .item-back h1{
    width: 70vw;
  }
  .item-img img {
    height: 250px;
    transform: none;
  }
  .item-img{
    display: flex;
    width: 90vw;
    justify-content: flex-end;
  }
  .s-item:hover .item-img img{
    transform: none;
  }
}
@media screen and (max-width: 576px) {
  .item-img img {
   height: 200px;
  }
  .item-img{
    width: 80vw;
  }
}
</style>
