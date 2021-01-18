<template>
    <div class="team">
        <div class="t-head">
            <div class="t-title">
                <h5>PERFORMANCE</h5>
                <h1>MEET THE TEAM</h1>
            </div>
        </div>
        <team></team>
        <team-slider></team-slider>
        <Footer></Footer>
    </div>
</template>

<script>
  export default {
    head: {
        title: 'Meet The Team - Moto-Shop',
    },
    data(){
      return{
          navPageNumber: 4
      }
    },
    mounted(){
        this.navBarColor(this.navPageNumber);
    }
  }
</script>

<style scoped>
    .t-head{
      width: 100vw;
      height: 500px;
      display: flex;
      align-items: center;
      background-color: rgb(245,245,245);
      position: relative;
    }
    .t-head::before{
        content: 'TEAM';
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 350px;
        color: #fff;
        font-weight: 700;
    }
    .t-title{
        width: 1300px;
        margin: 0  auto;
        position: relative;
        z-index: 5;
    }
    .t-title h5{
        color: #E23137;
        font: 14px 'Heebo','sans-serif';
        font-weight: 700;;
        letter-spacing: 11.2px;
    }
    .t-title h1{
        font-size: 70px;
        letter-spacing: 1.2px;
    }
     @media screen and (max-width: 1400px) {
        .t-title{
            width: 1100px;
        }
    }
    @media screen and (max-width: 990px) {
        .t-title{
            width: 83vw;
            padding-top: 60px;
        }
        .t-head{
            height: 42.5vw;
        }
        .t-head::before{
            font-size: 23vw;
            height: 30vw;
            margin: 40px 0;
        }
    }
    @media screen and (max-width: 763px) {
        .t-title h1{
            font-size: 50px;
        }
    }
</style>
