<template>
    <div class="footer">
        <div class="footer-items">
            <div class="f-item">
                <h1>ABOUT GRANDPRIX</h1>
                <p class="f-text">If you are looking for the smoothest way to reach the top speed & cruise in front of your competitors, you’re in the right place. Welcome to GrandPrix.</p>
                <div class="item-hours">
                    <i class="far fa-clock"></i>
                    <div class="i-day">
                        <p>Monday-Friday: 9am to 5pm;</p>
                        <p>Satuday: 10am to 2pm</p>
                    </div>
                </div>
            </div>
            <div class="f-item">
                <h1>OUR SERVICES</h1>
                <div class="s-links">
                    <a href="#">Chemical Engineering Projects</a>
                    <a href="#">Mining Engineering</a>
                    <a href="#">Construction Engineering</a>
                    <a href="#">Welding Engineering</a>
                    <a href="#">Space Program XYZ</a>
                </div>
            </div>
            <div class="f-item">
                <h1>OFFICE IN NEW YORK</h1>
                <div class="o-item">
                    <div class="o-location">
                        <div class="o-icon">
                            <i class="far fa-envelope "></i>
                        </div>
                        <div class="o-text">
                            <p>7300-7398 Colonial Rd, Brooklyn</p>
                            <p>242 Wythe Ave #4, Brooklyn</p>
                        </div>
                    </div>
                    <div class="o-phone">
                        <div class="o-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="o-text">
                            <p>+ (123) 124-567-8901</p>
                            <p>+ (123) 124-567-8901</p>
                        </div>
                    </div>
                    <div class="o-email">
                        <div class="o-icon">
                            <i class="far fa-envelope"></i>
                        </div>
                        <div class="o-text">
                            <p>grandprix@qodeinteractive.com</p>
                            <p>grandprix@qodeinteractive.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f-item">
                 <h1>OUR LOCATIONS</h1>
                 <img :src="require('@/assets/img/other/map.png')"  alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
    .footer{
        background-color: #000;
        color: #fff;
    }
    .footer-items{
        display: flex;
        width: 1300px;
        margin: 0 auto;
        padding: 100px 0;
        justify-content: space-between;
    }
    .f-item{
        height: 260px;
        width: 325px;
        margin: 0 20px;
    }
    .f-item:first-child{
        margin: 0 20px 0 0;
    }
    .f-item:last-child{
        margin: 0 0 0 20px;
    }
    .f-item h1{
        font-size: 22px;
        font-weight: 700;
    }
    .f-item:first-child p {
        font: 16px 'Ubuntu' ,'sans-serif';
        color: rgba(255, 255, 255, 0.5);
        line-height: 27px;
        width: 275px;
    }
    .f-text{
        margin: 15px 0;
    }
    .item-hours{
        display: flex ;
    }
    .i-day p{
        margin: 5px 0 5px 15px;
    }
    .far{
        margin: 10px 0 0 0;
        font-size: 20px;
    }
    .s-links{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 180px;
        margin: 20px 0 0;
    }
    .s-links a{
        font: 16px 'Ubuntu' ,'sans-serif';
        color: rgba(255, 255, 255, 0.5); 
    }
    .s-links a:hover{
        color:  #E23137;
    }
    .o-item{
        height: 200px;
    }
    .o-text p{
        padding: 5px 0; 
        margin-left: 15px;
        font: 16px 'Ubuntu' ,'sans-serif';
        color: rgba(255, 255, 255, 0.5);
    }
    .o-location , .o-phone, .o-email{
        display: flex; 
        margin: 10px 0;
    }
    .f-item img{
        margin-top: 20px;
    }
    @media screen and (max-width: 1400px) {
        .footer-items{
            width: 1100px;
        }
        .f-item , .f-item img{
            width: 250px;
        }
    }
    @media screen and (max-width: 1200px) {
        .footer-items{
            width: 950px;
        }
        .f-item h1{
            font-size: 19px;
        }
         .f-item , .f-item img{
            width: 220px;
        }
        .f-item:first-child p , .s-links a , .o-text p{
            font-size: 14px;
        }
        .f-item:first-child p{
            width: auto;
        }
    }
    @media screen and (max-width: 1000px) {
        .footer-items{
            width: 750px;
            flex-wrap: wrap;
        }
        .f-item , .f-item img{
            width: 330px;
        }
        .f-item:first-child p , .s-links a , .o-text p{
            font-size: 16px;
        }
        .f-item{
            padding: 20px 0;
        }
        .f-item:first-child{
            margin: 0 20px 0 20px;
        }
        .f-item:last-child{
            margin: 0 20px 0 20px;
        }
    }
    @media screen and (max-width: 764px) {
        .footer-items{
            width: 600px;
        }
        .f-item , .f-item img{
            width: 250px;
        }
    }
    @media screen and (max-width: 650px) {
        .footer-items{
            width: 450px;
        }
        .f-item , .f-item img{
            width: 400px;
        }
    }
</style>
