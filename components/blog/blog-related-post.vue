<template>
    <div class="blog-article-related-post">
        <div class="b-a-r-p-title">
        <h1>RELATED POSTS</h1>
        </div>
        <div class="b-a-r-p-items">
        <div class="b-a-r-p-item">
            <div class="b-a-r-p-img">
            <img :src="require ('@/assets/img/blog/blog-img-1.jpg')" alt="">
            </div>
            <div class="b-a-r-p-i-title">
            <h5>SEPTEMBER 9, 2019</h5>
            <h1>MOTO G6 – MOVE PICTURES</h1>
            </div>
        </div>
        <div class="b-a-r-p-item">
            <div class="b-a-r-p-img">
            <img :src="require ('@/assets/img/blog/blog-img-2.jpg')" alt="">
            </div>
            <div class="b-a-r-p-i-title">
            <h5>SEPTEMBER 4, 2019</h5>
            <h1>MOTOCROSS GEAR BAG</h1>
            </div>
        </div>
        <div class="b-a-r-p-item">
            <div class="b-a-r-p-img">
            <img :src="require ('@/assets/img/blog/blog-img-3.jpg')" alt="">
            </div>
            <div class="b-a-r-p-i-title">
            <h5>SEPTEMBER 2, 2019</h5>
            <h1>ARTISTIC REVIEW OF IRONMAN: 2019</h1>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .b-a-r-p-items{
    display: flex;
    width: 950px;
    justify-content: space-between;
  }
  .b-a-r-p-item{
     width: 300px;
  }
  .b-a-r-p-title h1{
    font-size: 45px;
    padding: 70px 0;
  }
  .b-a-r-p-img{
    width: 300px;
    height: 180px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .b-a-r-p-img img{
    width: 300px;
  }
  .b-a-r-p-img:hover img{
    transition: filter .5s ease;
    filter: brightness(0.5);
    cursor: pointer;
  }
  .b-a-r-p-i-title{
    padding: 10px 0;
  }
  .b-a-r-p-item h5{
    background: none;
    color:#E23137;
    font: 11px 'Heebo','sans-serif';
    font-weight: 600;
  }
  .b-a-r-p-item h1{
    font-size: 24px;
  }
  @media screen and (max-width: 1400px) {
    .b-a-r-p-items{
      width: 800px;
    }
    .b-a-r-p-item{
      width: 250px;
    }
    .b-a-r-p-img{
      width: 250px;
      height: 150px;
    }
    .b-a-r-p-img img{
      width: 250px;
    }
  }
  @media screen and (max-width: 1200px) {
    .b-a-r-p-items{
      width: 690px;
    }
    .b-a-r-p-item{
      width: 210px;
    }
    .b-a-r-p-img{
      width: 210px;
      height: 125px;
    }
    .b-a-r-p-img img{
      width: 250px;
    }
  }
  @media screen and (max-width: 996px) {
    .b-a-r-p-items{
      width: 76vw
    }
    .b-a-r-p-item{
      width: 235px;
    }
    .b-a-r-p-img{
      width: 235px;
      height: 145px;
    }
    .b-a-r-p-img img{
      width: 250px;
    }
  }
  @media screen and (max-width: 930px){
    .b-a-r-p-items{
      flex-wrap: wrap;
    }
    .b-a-r-p-item{
      width: 37vw;
      height: 37vw;
    }
    .b-a-r-p-img { 
      width: 37vw;
      height: 27vw; 
    }
    .b-a-r-p-img img {
      width: 40vw;
    }
  }
  @media screen and (max-width: 700px){
    .b-a-c-author{
      width: 71vw;
    }
    .b-a-c-author-img {
      padding: 0 30px 30px 0;
      box-sizing: border-box;
    }
  }
</style>
