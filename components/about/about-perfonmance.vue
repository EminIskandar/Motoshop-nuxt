<template> 
    <div class="about-performance">
        <div class="a-p-title">
            <h5>PERFORMANCE</h5>
            <h1>MAXIMUM SPEED & STABILITY</h1>
            <span></span>
            <h5>PERFORMANCE</h5>
        </div>
        <div class="a-p-section">
            <div class="a-p-s-item" v-for='items in item' :key='items.id'>
                <div class="a-p-s-icon">
                    <img :src="require ('@/assets/img/icon/'+items.icon)" alt="">
                </div>
                <h5>{{items.title}}</h5>
                <p>Etiam ultricies nisi vel augue, nulla ut me varius laoreet. Phasellus viverra nulla ut metus varius.</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
        return{
            item : [
                {title : 'PROTETCION LINE' , icon : 'p-icon-1.PNG' , id : '1'},
                {title : 'CODE BLOCKS' , icon : 'p-icon-2.PNG', id : '2'},
                {title : 'NEW STANDARDS' , icon : 'p-icon-3.PNG', id : '3'},
                {title : 'OUR SOLUTION' , icon : 'p-icon-4.PNG', id : '4'}
            ]
        }
    },mounted(){
        window.addEventListener('scroll',(event)=>{
            try{
                var y =document.documentElement.scrollTop;
                var width2 = document.body.offsetWidth;
                var cordinat = document.querySelector('.about-performance').offsetTop-300;
                if(width2 < 764){
                    
                }else{
                    if(y > cordinat){
                        document.querySelector('.about-performance h1').style ='opacity: 1; transform: translateX(0px);'
                        document.querySelectorAll('.about-performance h5')[1].style ='opacity: 1; transform: translateX(0px);'
                    }
                }
            }catch(error){

            } 
        });
    }
  }
</script>

<style scoped>
    .about-performance{
        padding: 100px 0;
    }
    .a-p-title{
        display: flex;
        width: 820px;
        margin: 0 auto; 
        align-items: center;
    }
    .a-p-title h1{
        width: 350px;
        direction: rtl;
        padding:  0 50px;
        font-size: 45px;
        line-height: 45px;
        transform: translateX(-70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .a-p-title h5{
        padding: 28px 50px;
        font-size: 16px;
        letter-spacing:11px;
        color:  #E23137;
        transform: translateX(70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .a-p-title h5:first-child{
        display: none;
    }
    .a-p-title span{
        width: 1px;
        height: 90px;
        background: none;
        border-left: 1px solid #000;
    }
    .a-p-section{
        display: flex;
        width: 1300px;
        margin: 0 auto;
        justify-content: space-between;
        padding-top: 70px;
    }
    .a-p-s-item{
        width: 290px;
        height: 230px;
    }
    .a-p-s-item h5{
        font-size: 24px;
        font-weight: 700px;
    }
    .a-p-s-item h5:hover{
        color:  #E23137;
        cursor: pointer;
    }
    .a-p-s-item p{
        font: 16px 'Ubuntu', 'sans-serif';
        line-height: 27px;
        color: rgba(0, 0, 0, 0.5);
    }
    .a-p-s-icon {
        height: 100px;
    }
    @media screen and (max-width: 1400px) {
        .a-p-section{
            width: 1100px;
            flex-wrap: wrap;
        }
        .a-p-s-item{
            width: 250px;
        }
    }
    @media screen and (max-width: 1200px) {
        .a-p-section{
            width: 950px;
        }
        .a-p-s-item{
            width: 400px;
        }
    }
    @media screen and (max-width: 1000px) {
        .a-p-section{
            width: 750px;
        }
        .a-p-s-item{
            width: 330px;
        }
    }
    @media screen and (max-width: 764px) {
        .a-p-section {
            width: 85.5vw;
        }
        .a-p-s-item{
            width: 500px;
        }
        .a-p-title span{
            display: none;
        }
        .a-p-title{
            flex-direction: column;
            width: 87vw;
            align-items: flex-start;
        }
        .a-p-title h1{
            direction: ltr;
            padding: 0;
            opacity: 1;
            transform: translateX(0);
        }
        .a-p-title h5{
            padding: 18px 0;
        }
        .a-p-title h5:first-child{
            display: block;
            opacity: 1;
            transform: translateX(0);
        }
        .a-p-title h5:last-child{
            display: none!important;
        }
    }
</style>
