<template>
  <div class="blog-article">
    <div class="blog-article-head">
      <div class="blog-article-title">
          <h5>PERFORMANCE</h5>
          <h1>MOTO G6 – MOVE PICTURES</h1>
      </div>
    </div>
    <div class="blog-article-content">
      <div class="b-a-c-left">
        <blog-article></blog-article>
        <blog-related-post></blog-related-post>
        <blog-comments></blog-comments>
      </div>
      <blog-right-side></blog-right-side>
    </div>
    <Footer></Footer>
  </div>  
</template>

<script>
  export default {
    head: {
        title: 'Article - Moto-Shop',
    },
    data(){
      return{
        navPageNumber: 2
      }
    },
    mounted(){
      this.navBarColor(this.navPageNumber);
      this.articleInfo();
    }
  }
</script>

<style scoped>
  .blog-article-head{
    width: 100vw;
    height: 500px;
    display: flex;
    align-items: center;
    background-color: rgb(245,245,245);
    position: relative;
  }
  .blog-article-head::before{
    content: 'SINGLE';
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 350px;
    color: #fff;
    font-weight: 700;
  }
  .blog-article-title{
    width: 1300px;
    margin: 0  auto;
    position: relative;
    z-index: 5;
  }
  .blog-article-title h5{
    color: #E23137;
    font: 14px 'Heebo','sans-serif';
    font-weight: 700;;
    letter-spacing: 11.2px;
  }
  .blog-article-title h1{
    font-size: 70px;
    letter-spacing: 1.2px;
  }
  .blog-article-content{
    width: 1300px;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
  }
  .b-a-c-left{
    width: 950px;
  }
  @media screen and (max-width: 1400px) {
    .blog-article-title , .blog-article-content{
        width: 1100px;
    }
    .b-a-c-left{
      width: 690px;
    }
  }
  @media screen and (max-width: 1200px) {
    .blog-article-content{
      width: 950px;
    }
  }
  @media screen and (max-width: 996px) {
    .blog-article-content{
      width: 76vw;
      flex-direction: column;
    }
    .blog-article-title{
        width: 83vw;
        padding-top: 60px;
    }
    .blog-article-head{
        height: 42.5vw;
    }
    .blog-article-head::before{
        font-size: 23vw;
        height: 30vw;
        margin: 40px 0;
    }
  }
  @media screen and (max-width: 763px) {
    .blog-article-title h1{
        font-size: 35px;
    }
  }
</style>
