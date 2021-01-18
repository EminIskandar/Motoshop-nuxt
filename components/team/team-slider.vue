<template>
    <div class="team-slider">
        <div class="t-s-back">
            <div class="t-s-items">
                <div class="t-s-item" v-for='items in item' :key='items.id' >
                    <div class="t-s-i-img">
                        <img :src="'/_nuxt/assets/img/slider/'+ items.img" alt=""> 
                    </div>
                    <p>{{items.text}}</p>
                    <div class="t-s-author">
                        <h5>{{item.prof}}</h5>
                        <h1>{{item.name}}</h1>
                    </div>
                </div>
            </div>
        </div> 
        <div class="t-s-nav">
            <div class="t-s-left">
                <div class="t-s-arrow">
                    <span class="t-s-left-arrow"></span>
                    <span class="t-s-line-1"></span>
                    <span class="t-s-l-line-2"></span>
                    <p> <span class="t-s-a-text">PREV</span></p>
                </div>
            </div>
            <div class="t-s-right">
                <div class="t-s-arrow">
                    <p> <span class="t-s-a-text">NEXT</span></p>
                    <span class="t-s-r-line-2"></span>
                    <span class="t-s-line-1"></span>
                    <span class ="t-s-right-arrow"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
        return{
            item:[
                { img: 'testimonials-img-1.png', name: 'Jackie Bronson' , prof: 'Official Rider', text : 'Platformz is in tune with all devices, browsers and platforms, retina ready & comes with WPBakery Page Builder for free.'},
                { img: 'testimonials-img-2.png', date: 'Mechanic' , prof: 'Barry Fox', text : 'Nullam ultrices volutpat tellus eget semper. Nam nec ex non eros ultrices sagittis et in tellus nulla eu dui mattis, morbi metus.'},
                { img: 'testimonials-img-4.png', date: 'Manager' , prof: 'Chris Young', text : 'Aliquam ex lorem, congue nec lacus eget, vehicula placerat augue. Aliquam libero velit, imperdiet vel lorem sit amet, consequat'}
            ],
            count:0, 
            direction:0
        }
    },
    mounted(){
        document.querySelector('.t-s-left').addEventListener('click',()=>{
            if(this.count == 0){
                this.count =0;
            }else{
                this.count-=1
            }
            this.move()
        })
        document.querySelector('.t-s-right').addEventListener('click',()=>{
           if(this.count >= 2){
                this.count =2;
            }else{
                this.count+=1
            }
           this.move()
        })
    },
    methods:{
        move(){
            var itemWidth = document.querySelectorAll('.t-s-item')[0].offsetWidth;
            for(var i=0;i<3;i++){
                document.querySelectorAll('.t-s-item')[i].style='transform: translateX(-'+(itemWidth*this.count)+'px);transition : all 1s ease'
            }
        }
    }
  }
</script>

<style scoped>
    .team-slider{
        background-image: url(/_nuxt/assets/img/other/team-slider-bg.jpg); 
        background-position: center top;
        background-repeat: no-repeat;
        width: 100vw;
        height: 567px;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .t-s-back{
        width: 1300px;
        height: 567px;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    .t-s-items{
        display: flex;
    }
    .t-s-item{
        width: 790px;
        height: 300px;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        padding: 0px 270px;
    }
    .t-s-item p{
        font-size: 36px;
        font-weight: 700;
        line-height: 27px;
        text-transform:uppercase;
        line-height: 40px;
        color: #fff;
    }
    .t-s-author h5{
        font: 11px 'Heebo','sans-serif';
        font-weight: 600;
        letter-spacing: 1.2px;
        color: #E23137;
        text-transform:uppercase
    }
    .t-s-author h1{
        font-size: 18px;
        font-weight: 700;
        color: #fff;
    }
    .t-s-i-img::before{
        content: '';
        position: absolute;
        background-image: url(/_nuxt/assets/img/other/quote.png);
        background-size: 50px;
        width: 50px;
        height: 50px;
        transform: translate(67px, 15px);
    }
    .t-s-nav {
        width: 90vw;
        margin: 0 auto;
        height: 567px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 0;
    }
    .t-s-arrow{
        letter-spacing: 1.4px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .t-s-arrow p{
        cursor: pointer;
        position: relative;
        z-index: 10;
        width: 150px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .t-s-left p{
        transform: translateX(50px);
        transition: all .4s ease ;
    }
    .t-s-right p{
        transform: translateX(-50px);
        transition: all .4s ease ;
    }
    .t-s-left p:hover{
        transform: translateX(-30px);
    }
    .t-s-right p:hover{
        transform: translateX(20px);
    }
    .t-s-arrow .t-s-a-text{
        background: none;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        transition: all .5s ease;
        padding: 0;
    }
    .t-s-line-1 ,.t-s-line-2{
        background: none;
        position: absolute;
    }
    .t-s-left-arrow{
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid  #fff;
        position: absolute;
        padding: 0;
        background: none;
        user-select: none;
        left: 0;
    }
    .t-s-right-arrow{
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-left: 5px solid #fff;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
        position: absolute;
        padding: 0;
        background: none;
        user-select: none;
        transform: translateX(-9px);
        right: 0;
    }
    .t-s-left .t-s-line-1{
        width: 80px;
        height: 1px;
        padding: 0;
        background-color: #fff;
        transform: translateX(9px);
        transform-origin: left;
        position: absolute;
        left: 0;
    }
    .t-s-right .t-s-line-1{
        width: 80px;
        height: 1px;
        padding: 0;
        background-color: #fff;
        transform-origin: left;
        transform: translateX(-19px);
        position: absolute;
        right: 0;
    }
    .t-s-arrow:hover  .t-s-line-1{
        width: 0px;
    }
    .t-s-left .t-s-l-line-2{
        width: 0px;
        height: 1px;
        padding: 0;
        background-color: #fff;
        transform-origin: left;
        position: absolute;
        right: 0;
    }
    .t-s-right .t-s-r-line-2{
        width: 0px;
        height: 1px;
        padding: 0;
        background-color: #fff;
        transform-origin: left;
        position: absolute;
        left: 0;
    }
    .t-s-arrow:hover  .t-s-l-line-2{
        width: 70px;
    }
    .t-s-arrow:hover  .t-s-r-line-2{
        width: 60px;
    }
    @media screen and (max-width: 1400px) {
        .t-s-back{
            width: 1100px;
        }
        .t-s-item{
            padding: 0px 155px;
        }
    }
    @media screen and (max-width: 1200px) {
        .t-s-back{
            width: 950px
        }
        .t-s-item{
            padding: 0px 155px;
            width: 650px;
        }
    }
    @media screen and (max-width: 996px) {
        .t-s-back{
            width: 750px
        }
        .t-s-item{
            padding: 0px 100px;
            width: 550px;
        }
        .t-s-line-1 ,.t-s-l-line-2,.t-s-r-line-2{
            display: none;
        }
        .t-s-left p{
            transform: translateX(-30px);
        }
        .t-s-right p{
            transform: translateX(20px);
        }
    }
    @media screen and (max-width: 763px) {
        .t-s-back{
            width: 100vw;
        }
        .t-s-item{
            padding: 0px 13.5vw;
            width: 70vw;
        }
        .t-s-nav{
            display: none;
        }
    }
</style>