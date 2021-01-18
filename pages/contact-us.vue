<template>
  <div class="contact-us">
     <div class="c-u-head">
            <div class="c-u-title">
                <h5>PERFORMANCE</h5>
                <h1>GET IN CONTACT</h1>
            </div>
      </div>
    <div class="c-u-contact">
      <div class="c-u-c-l-title">
        <h5>CONTACT US</h5>
        <h1>MOTO SHOP ONLINE</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mi sapien, a malesuada tellus vehicula ac. Aliquam accumsan sapien sit amet lectus varius, vel lobortis urna tempus. Aliquam hendrerit felis eget ultrices tempus onec consequat mattis ullamcorper ut egestas idus risus.</p>
      </div>
      <div class="c-u-c-l-info">
        <div class="c-u-c-l-item">
           <h1>OFFICE IN NEW YORK</h1>
            <ul>
              <li> <i class="fas fa-map-marker-alt"></i> Brooklyn, USA</li>
              <li><i class="fas fa-phone-alt"></i> +(000) 012-345-6789</li>
              <li><i class="far fa-envelope "></i> contact@sitenamecom.com</li>
            </ul>
        </div>
        <div class="c-u-c-l-item">
           <h1>OFFICE IN NEW YORK</h1>
            <ul>
              <li><i class="fas fa-map-marker-alt"></i> Brooklyn, USA</li>
              <li><i class="fas fa-phone-alt"></i> +(000) 012-345-6789</li>
              <li><i class="far fa-envelope "></i> contact@sitenamecom.com</li>
            </ul>
        </div>
      </div>
    </div>
    <div class="c-u-map-message">
      <div class="c-u-map">
        <iframe class="c-u-m-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6076.667270126055!2d49.83063066240123!3d40.40145916008554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087886fc97555%3A0x63d1056df10fb889!2sOlympic%20Star!5e0!3m2!1str!2s!4v1591879459561!5m2!1str!2s" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div class="c-u-message">
        <form>
            <h1>YOUR NAME</h1>
            <input type="text">
            <h1>YOUR EMAIL</h1>
            <input type="email">
            <h1>YOUR COMMENT</h1>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <button type="submit">SEND MESSAGE</button>   
        </form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    head: {
        title: 'Contact Us - Moto-Shop',
    },
    data(){
      return{
          navPageNumber: 6
      }
    },
    mounted(){
        this.navBarColor(this.navPageNumber);
    }
  }
</script>

<style scoped>
    .c-u-head{
      width: 100vw;
      height: 500px;
      display: flex;
      align-items: center;
      background-color: rgb(245,245,245);
      position: relative;
    }
    .c-u-head::before{
        content: 'CONTACT';
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 350px;
        color: #fff;
        font-weight: 700;
    }
    .c-u-title{
        width: 1300px;
        margin: 0  auto;
        position: relative;
        z-index: 5;
    }
    .c-u-title h5{
        color: #E23137;
        font: 14px 'Heebo','sans-serif';
        font-weight: 700;;
        letter-spacing: 11.2px;
    }
    .c-u-title h1{
        font-size: 70px;
        letter-spacing: 1.2px;
    }
    .c-u-contact {
      width: 1300px;
      margin: 0 auto;
      padding: 100px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .c-u-c-l-title{
        display: flex;
        flex-direction: column;
        width: 500px;
        position: relative;
        z-index: 5;
    }
    .c-u-c-l-title h1{
        font-size: 45px;
        line-height: 45px;
        margin: 15px 0 20px -3px;
    }
    .c-u-c-l-title h5{
        font-size: 14px;
        letter-spacing:11px;
        color:  #E23137;
    }
    .c-u-c-l-title p{
        font: 16px 'Ubuntu', sans-serif;
        color: #808080;
        line-height: 27px;
        margin-bottom: 40px;
    }
    .c-u-c-l-info{
      display: flex;
      width: 600px;
      justify-content: space-between;
    }
    .c-u-c-l-info h1{
      font-size: 24px;
    }
    .fas , .far{
      padding-right: 5px;
      color:  #E23137;
      font-size: 20px;
    }
    .c-u-c-l-info li{
      font: 16px 'Ubuntu','sans-serif';
      color: #808080;
      padding: 10px 0;
    }
    .c-u-m-item {
      width: 630px;
      height: 630px;
    }
    .c-u-map-message{
      width: 1300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding-bottom: 100px;
    }
    .c-u-message form{
      width: 600px;
    }
    .c-u-message h1{
      font: 11px 'Heebo', 'sans-serfi';
      color:#E23137;
      font-weight: 600;
      margin-top: 60px;
    }
    .c-u-message textarea:focus,
    .c-u-message input:focus{
      outline: none;
      box-shadow: none;
      border-bottom: 2px solid #E23137;
    }
    .c-u-message textarea, .c-u-message input{
      font-family: inherit;
      font-size: 24px;
      font-weight: 700;
      border:none;
      border-bottom: 2px solid rgba(0, 0, 0,0.1);
      width: 100%;
    }
    .c-u-message button{
      background-color: #E23137;
      width: 150px;
      height: 50px;
      color: #fff;
      margin-top: 40px;
    }
    @media screen and (max-width: 1400px) {
        .c-u-title ,.c-u-contact, .c-u-map-message{
            width: 1100px;
        }
        .c-u-c-l-title{
          width: 400px;
        }
        .c-u-m-item{
          width: 530px;
        }
        .c-u-message form{
          width: 500px;
        }
    }
    @media screen and (max-width: 1200px) {
        .c-u-contact, .c-u-map-message, 
        .c-u-m-item , .c-u-message form,
        .c-u-c-l-title{
          width: 950px;
        }
        .c-u-contact{
          align-items: baseline;
        }
         .c-u-map-message, .c-u-contact{
           flex-direction: column;
         }
        .c-u-c-l-info{
          width: 600px;
        }
    }
    @media screen and (max-width: 996px) {
        .c-u-contact, .c-u-map-message, 
        .c-u-m-item , .c-u-message form,
        .c-u-c-l-title{
          width: 750px;
        }
        .c-u-title{
            width: 83vw;
            padding-top: 60px;
        }
        .c-u-head{
            height: 42.5vw;
        }
        .c-u-head::before{
            font-size: 23vw;
            height: 30vw;
            margin: 40px 0;
        }
    }
    @media screen and (max-width: 763px) {
        .c-u-title h1{
            font-size: 50px;
        }
        .c-u-contact, .c-u-map-message, 
        .c-u-m-item , .c-u-message form,
        .c-u-c-l-title{
          width: 85vw;
        }
        .c-u-c-l-info{
          flex-direction: column;
        }
        .c-u-c-l-item{
          padding: 20px 0;
        }
    }
</style>
