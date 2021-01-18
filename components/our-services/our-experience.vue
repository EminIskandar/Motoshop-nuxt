<template>
    <div class="our-experience">
        <div class="o-e-items">
            <div class="o-e-title">
                <div class="o-e-text">
                    <h5>ADRENALINE</h5>
                    <h1>DYNAMIC RACING EXPERIENCE</h1>
                    <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue.</p>
                </div>
                <div class="read-more">
                    <p>READ MORE</p>
                    <img :src="require ('@/assets/img/right-black.png') " alt="">
                </div>
            </div>
            <div class="o-e-result">
                <div class="o-e-r-bar">
                    <h3>DEVELOPMENT</h3>
                    <div class="o-e-r-progress">
                        <h5 class="o-e-r-percent1">0%</h5>
                        <div class="o-e-r-progres-bar1"></div>
                    </div>
                </div>
                <div class="o-e-r-bar">
                    <h3>ENGINEERING</h3>
                    <div class="o-e-r-progress">
                        <h5 class="o-e-r-percent2">0%</h5>
                        <div class="o-e-r-progres-bar2"></div>
                    </div>
                </div>
                <div class="o-e-r-bar">
                    <h3>WEB DESIGN</h3>
                    <div class="o-e-r-progress">
                        <h5 class="o-e-r-percent3">0%</h5>
                        <div class="o-e-r-progres-bar3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    mounted(){
        var i = 0;
        var b = 0;
        var c = 0;
        var control= 0;
        window.addEventListener('scroll',(event)=>{
            try{ 
                var y =document.documentElement.scrollTop;
                var width2 = document.body.offsetWidth;
                var cordinat = document.querySelector('.our-experience').offsetTop-300;
                if(y > cordinat){ 
                    control = 1;
                }
            }catch(error){
                control = 0;
            }
        });
        var interval = setInterval(() => {
            if(control == 1){
                i++
                c++
                b++
                if(i> 85){
                    clearInterval(interval)
                }else{
                    document.querySelector('.o-e-r-percent1').innerHTML = i+'%'
                    document.querySelector('.o-e-r-percent1').style = 'transform: translate('+(i-5)+'%,-4px)'
                    document.querySelector('.o-e-r-progres-bar1').style = 'width:'+i+'%'
                    if(b > 69){

                    }else{
                        document.querySelector('.o-e-r-percent2').innerHTML = b+'%'
                        document.querySelector('.o-e-r-percent2').style = 'transform: translate('+(b-5)+'%,-4px)'
                        document.querySelector('.o-e-r-progres-bar2').style = 'width:'+b+'%'
                    }
                    if(c > 72){
                        
                    }else{
                        document.querySelector('.o-e-r-percent3').innerHTML = c+'%'
                        document.querySelector('.o-e-r-percent3').style = 'transform: translate('+(c-5)+'%,-4px)'
                        document.querySelector('.o-e-r-progres-bar3').style = 'width:'+c+'%' 
                    }
                }
            }
        }, 15);
    }
  }
</script>

<style scoped>
    .our-experience{
        padding: 70px 0;
        background: #F5F5F5;
    }
    .o-e-link{
        justify-content: center;
        font-size: 15px;
        font-weight: 700; 
        opacity: 0;
        transition: all .5s ease 1.2s;
    }
    .o-e-link a{
        font-size: 15px;
        font-weight: 700; 
        cursor: pointer;
        color: #000;
    }
    .o-e-link a::after {
        content: '';
        position: absolute;
        border-top: 5px solid transparent;
        border-left: 8px solid #000;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        margin: 4px;
    }
    .o-e-link a:hover{
       color: #E23137;
    }
    .o-e-link:hover a::after{
       border-left: 8px solid #E23137;
    }
    .o-e-items{
        height: 400px;
        justify-content: space-between;
    }
    .o-e-items , .o-e-link{
        display: flex;
        align-items: center;
        width: 1300px;
        margin: 0 auto;
    }
    .o-e-title{
        width: 500px;
    }
    .o-e-text{
        display: flex;
        flex-direction: column;
        width: 500px;
        position: relative;
        z-index: 5;
    }
    .o-e-text h1{
        font-size: 45px;
        line-height: 45px;
        margin: 15px 0 20px -3px;
    }
    .o-e-text h5{
        font-size: 14px;
        letter-spacing:11px;
        color:  #E23137;
    }
    .o-e-text p{
        font: 16px 'Ubuntu', sans-serif;
        color: #808080;
        line-height: 27px;
        margin-bottom: 40px;
    }
    .read-more{
        position: relative;
        z-index: 6;
        width: 70px;
    }
    .read-more p{
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        width: 70px;
        background-color: #f5f5f5;
        cursor: pointer;
        text-align: center;
        transition:  transform .4s ease;
    }
    .read-more:hover p{
        transform: translateX(72px);
    }
    .read-more img{
        width: 150px;
    }
    .o-e-result {
        width: 700px;
        padding: 30px 0;
    }
    .o-e-r-bar {
        padding: 20px 0;
    }
    .o-e-r-bar h3,
    .o-e-r-bar h5{
        font-size: 18px;
        font-weight: 700;
    }
    .o-e-r-progress {
        transform: translateY(-20px);
    }
    .o-e-r-progress::before{
        content: '';
        position: absolute;
        width: 700px;
        border-bottom: 1px solid rgba( 0, 0, 0, 0.1);
        transform: translateY(33px);
    }
    .o-e-r-percent1{transform: translate(0%,-4px)}
    .o-e-r-percent2{transform: translate(0%,-4px)}
    .o-e-r-percent3{transform: translate(0%,-4px)}
    .o-e-r-progres-bar1 {
        width: 0%;
        height: 5px;
        background: #E23137;
    }
    .o-e-r-progres-bar2 {
        width: 0%;
        height: 5px;
        background: #E23137;
    }
    .o-e-r-progres-bar3 {
        width: 0%;
        height: 5px;
        background: #E23137;
    }
    @media screen and (max-width: 1400px) {
        .o-e-link{
            width: 100vw;
        }
        .o-e-items{
            width: 1100px;
        }
        .o-e-items{
            height: 300px;
        }
        .o-e-title, .o-e-text{
            width: 500px;
        }
        .o-e-result{
            width: 500px;
        }
    }
    @media screen and (max-width: 1200px) {
        .o-e-items {
            width: 81vw;
        }
        .o-e-items{
            height: auto;
            flex-direction: column;
        }
        .o-e-title, .o-e-text , .o-e-result{
            width: 81vw;
        }
    }
</style>
