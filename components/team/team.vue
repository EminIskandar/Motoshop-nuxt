<template>
    <div class="teams">
         <div class="teams-title">
            <h5>PERFORMANCE</h5>
            <h1>MAXIMUM SPEED & STABILITY</h1>
            <span></span>
            <h5>PERFORMANCE</h5>
        </div>
        <div class="teams-members">
            <div class="t-m-member" v-for='items in item' :key='items.id' >
                <div class="t-m-img">
                    <img  :src="require('@/assets/img/team/'+items.img)" alt="">
                </div>
                <div class="t-m-info">
                    <h5>{{items.prof}}</h5>
                    <h1>{{items.name}}</h1>
                    <div class="t-m-social">
                        <p>FB</p>
                        <span></span>
                        <p>TW</p>
                        <span></span>
                        <p>IN</p>
                    </div>
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
                { img: 'team-img-01.jpg', prof: 'CHIEF EXECUTIVE' ,  name : 'CHELSEA HANDLER' ,id: '1'},
                { img: 'team-img-02.jpg', prof: 'ART DIRECTOR' ,  name : 'MIKE VICE', id : '2'},
                { img: 'team-img-03.jpg', prof: 'CHIEF EXECUTIVE' ,  name : 'JOANNE VANNICOLA', id: '3'},
                { img: 'team-img-04.jpg', prof: 'SENIOR DESIGNER' ,  name : 'JOHN CASEY', id: '4'}
            ]
        }
    },
    mounted(){
        window.addEventListener('scroll',(event)=>{
            try{
                var y =document.documentElement.scrollTop;
                var width2 = document.body.offsetWidth;
                var cordinat = document.querySelector('.teams').offsetTop-300;
                if(width2 < 764){
                    
                }else{
                    if(y > cordinat){
                        document.querySelector('.teams h1').style ='opacity: 1; transform: translateX(0px);'
                        document.querySelectorAll('.teams h5')[1].style ='opacity: 1; transform: translateX(0px);'
                    }
                } 
            }catch(error){

            }
        });
    }
  }
</script>

<style scoped>
    .teams{
        padding: 100px 0;
    }
    .teams-title{
        display: flex;
        width: 820px;
        margin: 0 auto; 
        align-items: center;
    }
    .teams-title h1{
        width: 350px;
        direction: rtl;
        padding:  0 50px;
        font-size: 45px;
        line-height: 45px;
        transform: translateX(-70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .teams-title h5{
        padding: 28px 50px;
        font-size: 16px;
        letter-spacing:11px;
        color:  #E23137;
        transform: translateX(70px);
        opacity: 0;
        transition: all .5s ease;
    }
    .teams-title h5:first-child{
        display: none;
    }
    .teams-title span{
        width: 1px;
        height: 90px;
        background: none;
        border-left: 1px solid #000;
    }
    .teams-members{
        display: flex;
        width: 1300px;
        justify-content: space-between;
        margin: 0 auto;
        padding: 70px 0;
    }
    .t-m-img{
        width: 300px;
        height: 410px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .t-m-img img{
        width: 350px;
    }
    .t-m-info{
        padding: 15px 0;
    }
    .t-m-info h5{
        font: 11px 'Heebo','sans-serif';
        color: #E23137;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .t-m-info h1{
        font-size: 24px;
        font-weight: 700;
        padding: 5px 0 15px;
    }
    .t-m-social{
        width: 180px;
        display: flex;
        font-size: 14px;
        font-weight: 700;
        justify-content: space-between;
        align-items: center;
    }
    .t-m-social p:hover{
        color: #E23137;
        cursor: pointer;
    }
    .t-m-social span{
        width: 30px;
        height: 1px;
        background: #000;
        padding: 0;
    }
    @media screen and (max-width: 1400px) {
        .teams-members{
            width: 1100px;
        }
        .t-m-img{
            width: 250px;
            height: 370px;
        }
        .t-m-img img{
            width: 250px;
        }
    }
    @media screen and (max-width: 1200px) {
        .teams-members{
            width: 950px;
            flex-wrap: wrap;
        }
        .t-m-img{
            width: 460px;
            height: 570px
        }
        .t-m-img img{
            width: 460px;
        }
    }
    @media screen and (max-width: 996px) {
        .teams-members{
            width: 750px;
        }
        .t-m-img{
            width: 370px;
            height: 480px
        }
        .t-m-img img{
            width: 370px;
        }
    }
    @media screen and (max-width: 764px) {
        .teams-title span{
            display: none;
        }
        .teams-title{
            flex-direction: column;
            width: 87vw;
            align-items: flex-start;
        }
        .teams-title h1{
            direction: ltr;
            padding: 0;
            opacity: 1;
            transform: translateX(0);
        }
        .teams-title h5{
            padding: 18px 0;
        }
        .teams-title h5:first-child{
            display: block;
            opacity: 1;
            transform: translateX(0);
        }
        .teams-title h5:last-child{
            display: none!important;
        }
        .teams-members{
            width: 500px;
            justify-content: center;
        }
        .t-m-member{
            padding: 20px 0;
        }
        .t-m-img{
            width: 420px;
            height: 530px;
        }
        .t-m-img img{
            width: 420px;
        }
    }
</style>
