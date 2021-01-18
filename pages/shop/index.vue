<template>
    <div class="product">
        <div class="p-breadcrumb">
          <div class="p-b-bg">
            <div class="p-b-items">
              <a href="#">HOME</a>
              <span></span>
              <a href="#">SHOP</a>
            </div>
          </div>
        </div>
        <div class="product-info">
          <shop-left-side></shop-left-side>
          <shop-right-side></shop-right-side>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
  export default {
    head: {
        title: 'Product - Moto-Shop',
    },
    data(){
      return{
          navPageNumber: 1
      }
    },
    mounted(){
        this.navBarColor(this.navPageNumber);
    }
  }
</script>

<style scoped>
  .p-breadcrumb {
    width: 100vw;
    height: 60px;
    padding-top: 140px;
  }
  .p-b-bg{
    width: 100vw;
    height: 60px;
    background-color: #f5f5f5;
  }
  .p-b-items{
    width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 60px;

  }
  .p-b-items a{
    color: #000;
    font: 11px 'Heebo','sans-serif';
    font-weight: 500;
  }
  .p-b-items a:hover{
    color: #E23137;
  }
  .p-b-items a:last-child{
     color: #E23137;
  }
  .p-b-items span{
    background: #000;
    padding: 0;
    width: 20px;
    height: 1px;
    margin: 0 15px;
  }
  .product-info {
    width: 1300px;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 1400px) {
    .product-info ,.p-b-items{
      width: 1050px;
    }
    
  }
  @media screen and (max-width: 1200px) {
    .product-info , .p-b-items{
      width: 950px;
    }
  }
  @media screen and (max-width: 1000px) {
    .product-info ,.p-b-items{
      width: 750px;
    }
    .product-info {
      flex-direction: column;
    }
    .p-breadcrumb {
      padding-top: 70px;
    }
  }
  @media screen and (max-width: 764px) {
    .product-info ,.p-b-items{
      width: 85vw;
    }
  }
</style>
