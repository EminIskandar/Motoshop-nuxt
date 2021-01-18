<template>
    <div class="our-services">
        <div class="o-s-head">
            <div class="o-s-title">
                <h5>PERFORMANCE</h5>
                <h1>OUR SERVICES</h1>
            </div>
        </div>
        <our-perfonmance></our-perfonmance>
        <our-runway></our-runway>
        <our-equipment></our-equipment>
        <our-experience></our-experience>
        <Footer></Footer>
    </div>
</template>

<script>
  export default {
    head: {
        title: 'Our Services - Moto-Shop',
    },
    data(){
      return{
          navPageNumber: 3
      }
    },
    mounted(){
        this.navBarColor(this.navPageNumber);
    }
  }
</script>

<style scoped>
    .o-s-head{
        background-image: url(/_nuxt/assets/img/other/about-bg.jpg);
        background-attachment: fixed;
        background-position: center top;
        background-repeat: no-repeat;
        width: 100vw;
        height: 650px;
        display: flex;
        align-items: center;
    }
    .o-s-title{
        width: 1300px;
        margin: 0  auto;
    }
    .o-s-title h5{
        color: #E23137;
        font: 14px 'Heebo','sans-serif';
        font-weight: 700;;
        letter-spacing: 11.2px;
    }
    .o-s-title h1{
        color: #fff;
        font-size: 70px;
        letter-spacing: 1.2px;
    }
    @media screen and (max-width: 1400px) {
        .o-s-title{
            width: 1100px;
        }
    }
    @media screen and (max-width: 990px) {
        .o-s-title{
            width: 83vw;
            padding-top: 60px;
        }
        .o-s-head{
            background-position: center 60px;
            background-size: 100vw auto;
            height: 42.5vw;
            background-attachment: scroll;
        }
    }
    @media screen and (max-width: 763px) {
        .o-s-title h1{
            font-size: 50px;
        }
    }
</style>