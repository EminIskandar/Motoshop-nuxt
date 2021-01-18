<template>
    <div class="about-us">
        <div class="a-u-head">
            <div class="a-u-title">
                <h5>PERFORMANCE</h5>
                <h1>ABOUT US</h1>
            </div>
        </div>
        <about-ad></about-ad>
        <about-slider></about-slider>
        <about-perfonmance></about-perfonmance>
        <about-runway></about-runway>
        <about-blog></about-blog>
        <Footer></Footer>
    </div>
</template>

<script>
  export default {
        head: {
            title: 'About - Moto-Shop',
        },
        data(){
            return{
                navPageNumber: 5
            }
        },
        mounted(){
            this.navBarColor(this.navPageNumber);
        }
    }
    
</script>

<style scoped>
    .a-u-head{
        background-image: url(/_nuxt/assets/img/other/about-bg2.jpg);
        background-attachment: fixed;
        background-position: center top;
        background-repeat: no-repeat;
        width: 100vw;
        height: 650px;
        display: flex;
        align-items: center;
    }
    .a-u-title{
        width: 1300px;
        margin: 0  auto;
    }
    .a-u-title h5{
        color: #E23137;
        font: 14px 'Heebo','sans-serif';
        font-weight: 700;;
        letter-spacing: 11.2px;
    }
    .a-u-title h1{
        color: #fff;
        font-size: 70px;
        letter-spacing: 1.2px;
    }
    @media screen and (max-width: 1400px) {
        .a-u-title{
            width: 1100px;
        }
    }
    @media screen and (max-width: 990px) {
        .a-u-title{
            width: 83vw;
            padding-top: 60px;
        }
        .a-u-head{
            background-position: center 60px;
            background-size: 100vw auto;
            height: 42.5vw;
            background-attachment: scroll;
        }
    }
    @media screen and (max-width: 763px) {
        .a-u-title h1{
            font-size: 50px;
        }
    }
</style>
