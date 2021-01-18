<template>
    <div class="b-a-c-right">
      <div class="b-a-c-r-search">
          <form action="">
            <input type="text" value="SEARCH HERE">
            <button type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>
        <div class="b-a-c-r-categories">
          <div class="b-a-c-r-c-title">
            <h1>CATEGORIES</h1>
          </div>
          <ul>
            <li>CREATIVE</li>
            <li>INNOVATION</li>
            <li>LIFESTYLE</li>
            <li>MOBILE</li>
            <li>TRACKDAY</li>
            <li>TRAVEL & TIPS</li>
          </ul>
        </div>
        <div class="b-a-c-r-lastest-post">
          <div class="b-a-c-r-l-p-title">
            <h1>LASTEST POST</h1>
          </div>
          <div class="b-a-c-r-l-p-items">
            <div class="b-a-c-r-l-p-item">
              <div class="b-a-c-r-l-i-img">
                <img src="/_nuxt/assets/img/blog/blog-img-0.jpg" alt="">
              </div>
              <div class="b-a-c-r-l-p-i-text">
                <h5>JULY 3, 2019</h5>
                <h1>MOTO G6 – MOVE PICTURES</h1>
              </div>
            </div>
            <div class="b-a-c-r-l-p-item">
              <div class="b-a-c-r-l-i-img">
                <img src="/_nuxt/assets/img/blog/blog-img-2.jpg" alt="">
              </div>
              <div class="b-a-c-r-l-p-i-text">
                <h5>JULY 3, 2019</h5>
                <h1>CLOSEOUT MOTOCROSS GEAR</h1>
              </div>
            </div>
            <div class="b-a-c-r-l-p-item">
              <div class="b-a-c-r-l-i-img">
                <img src="/_nuxt/assets/img/blog/blog-img-3.jpg" alt="">
              </div>
              <div class="b-a-c-r-l-p-i-text">
                <h5>JULY 3, 2019</h5>
                <h1>MOTOCROSS GEAR BAG</h1>
              </div>
            </div>
            <div class="b-a-c-r-l-p-item">
              <div class="b-a-c-r-l-i-img">
                <img src="/_nuxt/assets/img/blog/blog-img-4.jpg" alt="">
              </div>
              <div class="b-a-c-r-l-p-i-text">
                <h5>JULY 3, 2019</h5>
                <h1>HOW TO SETUP SUSPENSION</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="b-a-c-r-instagram">
          <div class="b-a-c-r-i-title">
            <h1>INSTAGRAM</h1>
          </div>
          <div class="b-a-c-r-i-items">
            <div class="b-a-c-r-i-item">
              <img src="/_nuxt/assets/img/blog/blog-img-1.jpg" alt="">
            </div>
            <div class="b-a-c-r-i-item">
              <img src="/_nuxt/assets/img/blog/blog-img-2.jpg" alt="">
            </div>
            <div class="b-a-c-r-i-item">
              <img src="/_nuxt/assets/img/blog/blog-img-3.jpg" alt="">
            </div>
            <div class="b-a-c-r-i-item">
              <img src="/_nuxt/assets/img/blog/blog-img-4.jpg" alt="">
            </div>
            <div class="b-a-c-r-i-item">
              <img src="/_nuxt/assets/img/blog/blog-img-5.jpg" alt="">
            </div>
            <div class="b-a-c-r-i-item">
              <img src="/_nuxt/assets/img/blog/blog-img-6.jpg" alt="">
            </div>
            <div class="b-a-c-r-i-item">
              <img src="/_nuxt/assets/img/blog/blog-img-7.jpg" alt="">
            </div>
            <div class="b-a-c-r-i-item">
              <img src="/_nuxt/assets/img/blog/blog-img-8.jpg" alt="">
            </div>
            <div class="b-a-c-r-i-item">
              <img src="/_nuxt/assets/img/blog/blog-img-9.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="b-a-c-r-tag">
          <div class="b-a-c-r-t-title">
            <h1>TAGS</h1>
          </div>
          <div class="b-a-c-r-t-item">
            <p>ABSTRACT</p>
            <span></span>
            <p>APPS</p>
            <span></span>
            <p>ART</p>
            <span></span>
            <p>BLOGGING</p>
            <span></span>
            <p>CREATIVE</p>
            <span></span>
            <p>FUTURE</p>
            <span></span>
            <p>MOTO SPORT</p>
            <span></span>
            <p>TRACKDAY</p>
          </div>
        </div>
        <div class="b-a-c-r-adversiting">
          <div class="b-a-c-r-a-title">
            <h1>ADVERSITING</h1>
          </div>
          <img src="/_nuxt/assets/img/other/sidebar-img-1.jpg" alt="">
        </div>
        <div class="b-a-c-r-newsletter">
          <div class="b-a-c-r-n-title">
            <h1>NEWSLETTER</h1>
          </div>
          <p>Aliqm lorem ante, dapibus in, viverra feugiat phasellus.</p>
          <form action="">
            <input type="email" value="TYPE YOUR EMAIL">
            <button type="submit" ><i class="far fa-envelope"></i></button>
          </form>
        </div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .b-a-c-right {
      width: 300px;
  }
  .b-a-c-r-search form{
    display: flex;
  }
  .b-a-c-r-search input{
    width: 200px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0,0.1);
    padding: 0 0 0 30px ;
    box-sizing: border-box;
  }
  .b-a-c-r-search button{
    width: 50px;
    height: 50px;
    background-color: #E23137;
    color: #fff;
  }
  .b-a-c-r-categories{
    padding-top: 40px;
  }
  .b-a-c-r-c-title h1{
    padding: 40px 0 30px;
    font-size: 24px;
  }
  .b-a-c-r-categories li{
    padding: 10px 0;
    font-size: 16px;
    font-weight: 700;
  }
  .b-a-c-r-categories li:hover{
    color: #E23137;
    cursor: pointer;
  }
  .b-a-c-r-lastest-post{
    padding-top:70px;
  }
  .b-a-c-r-l-p-title h1{
    font-size: 24px;
    padding: 20px 0;
  }
  .b-a-c-r-l-p-item{
    width: 250px;
    height: 60px;
    display: flex;
    padding: 5px 0;
    justify-content: space-between;
  }
  .b-a-c-r-l-i-img{
    height: 65px;
    width: 65px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .b-a-c-r-l-i-img img{
    width: 100px;
  }
  .b-a-c-r-l-p-i-text{
    width: 180px;
  }
  .b-a-c-r-l-p-item h5{
    font: 11px 'Heebo', 'sans-serfi';
    color:#E23137;
    font-weight: 600;
  }
  .b-a-c-r-l-p-item h1{
    font-size: 18px;
    width: 180px;
    display: inline-block;
    text-overflow: ellipsis;
    height: 40px;
    overflow: hidden;
    white-space: nowrap;
  }
  .b-a-c-r-instagram{
    padding-top:70px;
  }
  .b-a-c-r-instagram h1{
    font-size: 24px;
    padding-bottom: 20px;
  }
  .b-a-c-r-i-items{
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .b-a-c-r-i-item{
    width: 73px;
    height: 73px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
  .b-a-c-r-i-item img{
    width: 120px;
    transition: transform .4s ease;
  }
  .b-a-c-r-i-item img:hover{
    transform: scale(1.2);
    cursor: pointer;
  }
  .b-a-c-r-t-item{
    display: flex;
    width: 250px;
    flex-wrap: wrap;
  }
  .b-a-c-r-tag{
    padding-top:70px;
  }
  .b-a-c-r-t-title h1{
    font-size: 24px;
    padding-bottom: 20px;
  }
  .b-a-c-r-t-item p{
    font: 11px 'Heebo', 'sans-serfi';
    font-weight: 500;
    padding: 0 10px 10px;
  }
  .b-a-c-r-t-item p:hover{
    color:#E23137;
    cursor: pointer;
  }
  .b-a-c-r-t-item span{
    background: #000;
    width: 10px;
    height: 1px;
    padding: 0;
    transform: translateY(7px);
  }
  .b-a-c-r-adversiting{
    padding-top:70px;
  }
  .b-a-c-r-a-title H1{
    font-size: 24px;
    padding-bottom: 20px;
  }
  .b-a-c-r-newsletter{
    padding-top:70px;
  }
  .b-a-c-r-n-title h1{
    font-size: 24px;
    padding-bottom: 20px;
  }
  .b-a-c-r-newsletter p{
    font-size: 18px;
  }
  .b-a-c-r-newsletter form{
    display: flex;
  }
  .b-a-c-r-newsletter input {
    width: 200px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0,0.1);
    padding: 0 0 0 30px;
    box-sizing: border-box;
    color: #000;
  }
  .b-a-c-r-newsletter button{
    width: 50px;
    height: 50px;
    background-color: #E23137;
    color: #fff;
  }
  @media screen and (max-width: 1400px){
    .b-a-c-right ,.b-a-c-r-l-p-item , 
    .b-a-c-r-adversiting , .b-a-c-r-adversiting img ,
    .b-a-c-r-i-items , .b-a-c-r-t-item{
      width: 200px;
    }
    .b-a-c-r-search input,
    .b-a-c-r-newsletter input{
      width: 150px;
      padding: 0 0 0 20px;
    }
    .b-a-c-r-l-p-i-text , .b-a-c-r-l-p-item h1{
      width: 130px;
    }
    .b-a-c-r-i-item{
      width: 55px;
      height: 55px;
    }
    
  }
  @media screen and (max-width: 1200px){
    .b-a-c-right ,.b-a-c-r-l-p-item , 
    .b-a-c-r-adversiting , .b-a-c-r-adversiting img ,
    .b-a-c-r-i-items , .b-a-c-r-t-item{
      width: 165px;
    }
    .b-a-c-r-search input,
    .b-a-c-r-newsletter input{
      width: 115px;
      padding: 0 0 0 20px;
    }
    .b-a-c-r-l-p-i-text , .b-a-c-r-l-p-item h1{
      width: 90px;
    }
    .b-a-c-r-i-item{
      width: 45px;
      height: 45px;
    } 
  }
  @media screen and (max-width: 996px){
    .b-a-c-right{
      padding-top: 70px;
    }
    .b-a-c-right ,.b-a-c-r-l-p-item , 
    .b-a-c-r-adversiting , .b-a-c-r-adversiting img ,
    .b-a-c-r-i-items , .b-a-c-r-t-item ,.b-a-c-r-search input,
    .b-a-c-r-newsletter input{
      width: 76vw
    }
    .b-a-c-r-l-p-i-text , .b-a-c-r-l-p-item h1{
      width: 90%;
    }
    .b-a-c-r-i-item{
      width: 23vw;
      height: 23vw;
      margin: 2vw 0;
    }
    .b-a-c-r-i-item img{
      width: 35vw;
    }
  }
</style>
