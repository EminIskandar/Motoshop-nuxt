<template>
    <div class="mark">
        <div class="mark-items">
            <div class="m-item" v-for="n in 5" :key="n"> 
                <img class="m-img" :src="require ('@/assets/img/mark/clients-img-'+n+'.png') " alt="">
                <img class="m-img" :src="require ('@/assets/img/mark/clients-img-'+n+'-h.png') " alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
    .mark{
        background-color: #F5F5F5;
    }
    .mark-items{
        display: flex;
        width: 1300px;
        margin: 0 auto;
        padding: 70px 0;
    }
    .m-item{
        height: 100px;
        overflow: hidden;
        cursor: pointer;
    }
    .m-img{
        transition: transform .4s ease;
    }
    .m-item:hover  .m-img{
        transform: translateY(-100px);
    }
    @media screen and (max-width: 1400px) {
        .mark-items{
            width: 1100px;
        }
        .m-item{
            height: 65px;
        }
        .m-item img{
            width: 200px;
        }
        .m-item:hover  .m-img{
            transform: translateY(-85px);
        }
    }
    @media screen and (max-width: 1100px) {
        .mark-items{
            width: 950px;
        }
        .m-item{
            height: 65px;
        }
        .m-item img{
            width:150px;
        }
        .m-item:hover  .m-img{
            transform: translateY(-55px);
        }
    }
    @media screen and (max-width: 900px) {
        .mark-items{
            width: 750px;
        }
    }
    @media screen and (max-width: 764px) {
        .mark-items{
            width: 100vw;
            flex-wrap: wrap;
            justify-content: center;
        }
        .m-item{
            height: 65px;
            width: 200px;
            margin: 20px 0;
        }
        .m-item img{
            width: 200px;
        }
        .m-item:hover  .m-img{
            transform: translateY(-85px);
        }
    }
</style>
