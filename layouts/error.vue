<template>
  <div class="__nuxt-error-page">
     <div class="left">
       <div class="text">
         <h5>ERROR PAGE</h5>
         <h1>PAGE NOT FOUND</h1>
         <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
       </div>
       <div class="button">
         <button @click="back()">BACK TO HOME</button>
       </div>
     </div>
     <div class="right">
       <img :src="require ('@/assets/img/other/error-img-1.png') " alt="">
     </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data(){
    return{
        navPageNumber: 4
    }
  },
  mounted(){
      this.navBarColor(this.navPageNumber);
  },
  methods:{
    back(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
 .__nuxt-error-page{
   width: 1300px;
   height: 100vh;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .text h5{
   font: 11px 'Heebo','sans-serif';
   color: #E23137;
   font-weight: 700;
   letter-spacing: 9.6px;
 }
 .text h1{
   font-size: 45px;
   margin: 10px 0;
 }
 .text p{
   font: 16px 'Ubuntu','sans-serif';
   line-height: 27px;
   color: #808080;
 }
 button{
   width: 220px;
   height: 50px;
   color: #fff;
   background-color: #E23137;
   margin-top: 20px;
 }
  @media screen and (max-width: 1400px) {
    .__nuxt-error-page{
        width: 1100px;
    }
    .right img{
      width: 700px;
    }
  }
  @media screen and (max-width: 1200px) {
    .__nuxt-error-page{
        width: 950px;
    }
    .right img{
      width: 600px;
    }
  }
  @media screen and (max-width: 996px) {
    .__nuxt-error-page{
        width: 750px;
    }
    .right img{
      width: 500px;
    }
  }
   @media screen and (max-width: 764px) {
     .__nuxt-error-page{
        width: 85vw;
        flex-direction: column;
        height: 700px;
        height: 480px;
        margin: 100px auto; 
        justify-content: normal;
    }
    .right img{
      width: 85vw;
      margin-top: 20px;
    }
  }
</style>
