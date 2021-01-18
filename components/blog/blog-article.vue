<template>
    <div class="blog-article">
        <div class="b-a-c-l-article">
          <div class="b-a-c-img">
            <img src="/_nuxt/assets/img/blog/blog-img-1.jpg" alt="">
          </div>
          <div class="b-a-c-date">
            <p>SEPTEMBER 9, 2019 - <span>INNOVATION</span> </p>
          </div>
          <div class="b-a-c-text">
            <h1>MOTO G6 – MOVE PICTURES</h1>
            <p>Lorem ipsum dolor sit amet, sonet intellegat deterruisset usu at, nec zril timeam in. Omnes nostro virtute qui te, sed ex oblique labitur. Maluisset instructior an vel, bonorum corpora his id, duo debet inermis facilisis no. Ne mei sanctus laoreet, mel ne tollit nominavi, graece utamur ea has. Cu inani intellegam mel, ne pri audiam urbanitas accommodare.Per ex facer ornatus delenit. Cu sea fuisset tibique perpetua. Clita deleniti vituperatoribus at vis, qui ne veniam labore assentior. Duo ut fugit referrentur, ex vocent verear cum. Per altera causae eu. Vix wisi temporibus disputando id.Ius dico imperdiet hendrerit id, te quo harum adipisci. Nemore phaedrum democritum eum id. Causae probatus ut vis.</p>
            <div class="b-a-c-quote">
              <img src="/_nuxt/assets/img/other/quote.png" alt="">
              <h3>LOREM IPSUM DOLOR SIT AMET, CONSECTET DOLOR SIT AMET OUR ADIPISCING ELIT.</h3>
            </div>
            <p>Vix tota splendide eu, eu vel omnis complectitur. Ius dico imperdiet hendrerit id, te quo harum adipisci. Nemore phaedrum democritum eum id. Ne accumsan patrioque per, per altera ridens in. Eu quod adolescens vel. Esse brute fierent at pri, vim inani reprehendunt cu. Torquatos contentiones at sed, mea ad utinam aperiam.Lorem ipsum dolor sit amet, sonet intellegat deterruisset usu at, nec zril timeam in. Omnes nostro virtute qui te, sed ex oblique labitur. Maluisset instructior an vel, bonorum corpora his id, duo debet inermis facilisis no. Ne mei sanctus laoreet, mel ne tollit nominavi, graece utamur ea has. Cu inani intellegam mel, ne pri audiam urbanitas accommodare. Per ex facer ornatus delenit.</p>
            <p>Per ex facer ornatus delenit. Cu sea fuisset tibique perpetua. Clita deleniti vituperatoribus at vis, qui ne veniam labore assentior. Duo ut fugit referrentur, ex vocent verear cum. Per altera causae eu. Vix wisi temporibus disputando id. Cu tibique consectetuer has, populo vivendum probatus at ius. Doming elaboraret te eum vis ne.</p>
          </div>
          <div class="b-a-c-share">
            <div class="b-a-c-social">
              <ul>
                <li><i class="fab fa-facebook-f"></i></li>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-pinterest-p"></i></li>
              </ul> 
            </div>
            <div class="b-a-c-s-button">
              <h5><i class="fas fa-share-alt"></i> <p>SHARE</p> </h5>
            </div>
          </div>
        </div>
        <div class="b-a-c-author">
          <div class="b-a-c-author-img">
            <img src="/_nuxt/assets/img/other/author-img-2.jpg"  alt="">
          </div>
          <div class="b-a-c-a-info">
            <h5>THE AUTHOR</h5>
            <h1>ALAN EDWARDS</h1>
            <p>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonum nibhie. Aenean sollici tudin, lorem auci elit consequat ipsutis sem niuis sed odio it amet nibh vulputate cursus. Ad per labores accusam.</p>
            <div class="b-a-c-a-social">
              <ul>
                <li><i class="fab fa-facebook-f"></i></li>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-pinterest-p"></i></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="blog-article-nav">
          <div class="b-a-nav-btn">
            <div class="b-a-btn-left">
              <div class="b-a-btn">
                <span class="b-a-l-arrow"></span>
                <p class="b-a-prev">PREV</p>
              </div>
            </div>
            <div class="b-a-btn-right">
              <div class="b-a-btn">
                <span class="b-a-r-arrow"></span>
                <p class="b-a-next">NEXT</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .b-a-c-l-article{
    width: 950px;
  }
  .b-a-c-right {
    width: 250px;
  }
  .b-a-c-img{
    width: 950px;
    height: 640px;
    overflow: hidden;
  }
  .b-a-c-img img{
    width: 950px;
  }
  .b-a-c-date{
    font: 11px 'Heebo','sans-serif';
    letter-spacing: 1.2px;
    color:#E23137;
    margin-top: 35px;
  }
  .b-a-c-date p span{
    background: none;
    color: #000;
    font: 11px 'Heebo','sans-serif';
  }
  .b-a-c-text h1{
    font-size: 45px;
  }
  .b-a-c-text p{
    font: 16px 'Ubuntu','sans-serif';
    color: #808080; 
    line-height: 27px;
    padding: 15px 0;
  }
  .b-a-c-quote{
    display: flex;
    align-items: center;
    height: 40px;
    padding: 50px ;
  }
  .b-a-c-quote img{
    width: 35px;
  }
  .b-a-c-quote h3{
    font-size: 24px;
    font-weight: 700;
    width: 450px;
    margin-left: 50px;
  }
  .b-a-c-social ul , .b-a-c-share , .b-a-c-s-button h5{
    display: flex;
  }
  .b-a-c-share{
    width: 950px;
    justify-content: flex-end;
    align-items: center;
  }
  .b-a-c-share li{
    opacity: 0;
    cursor: pointer;
  }
  .b-a-c-s-button{
    cursor: pointer;
  }
  .b-a-c-share:hover ul li:nth-child(1){ transition: opacity .4s ease .3s;opacity: 1;}
  .b-a-c-share:hover ul li:nth-child(2){ transition: opacity .4s ease .2s;opacity: 1;}
  .b-a-c-share:hover ul li:nth-child(3){ transition: opacity .4s ease .1s;opacity: 1;}
  .b-a-c-share:hover ul li:nth-child(4){ transition: opacity .4s ease ;opacity: 1;}
  .b-a-c-share i{
    padding: 0 10px;
    color:#E23137;
  }
  .b-a-c-author{
    display: flex;
    width: 860px;
    align-items: flex-start;
    padding: 30px 0;
  }
  .b-a-c-author-img{
    padding: 0 30px;
    box-sizing: border-box;
  }
  .b-a-c-author-img img{
    width: 120px;
    
  }
  .b-a-c-a-info h5{
    font: 11px 'Heebo', 'sans-serfi';
    color: #808080;
  }
  .b-a-c-a-info h1{
    font-size: 24px;
  }
  .b-a-c-a-info h1:hover{
    color:#E23137;
    cursor: pointer;
  }
  .b-a-c-a-info p{
    font: 16px 'Ubuntu', 'sans-serfi';
    color: #808080;
    line-height: 27px;
  }
  .b-a-c-a-social ul{
    display: flex;
  }
  .b-a-c-a-social li{
    padding: 20px 10px;
    color:#E23137;
    font-size: 18px;
  }
  .blog-article-nav{
    width: 950px;
    padding: 0 0 30px;
  }
  .b-a-nav-btn {
    display: flex;
    width: 950px;
    justify-content: space-between;
  }
  .b-a-btn{
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 80px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    letter-spacing: 1.4px;
    font-weight: 700;
    transition: width .5s ease;
    position: relative;
  }
  .b-a-l-arrow{
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #000;
    padding: 0;
    transition: none;
    transform: translateX(30px);
    background: none;
  }
  .b-a-l-arrow::before{
    content: '';
    position: absolute;
    width: 130px;
    height: 1px;
    background-color: #000;
  }
  .b-a-r-arrow{
    position: absolute;
    right: 0;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid  #000;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    padding: 0;
    transition: none;
    transform: translateX(-30px);
    background: none;
  }
  .b-a-r-arrow::before{
    content: '';
    position: absolute;
    width: 130px;
    height: 1px;
    background-color: #000;
    transform: translateX(-135px);
  }
  .b-a-btn:hover{
    width: 220px;
    cursor: pointer;
  }
  .b-a-prev{
    width: 60px;
    height: 20px;
    background-color: #fff;
    text-align: center;
    transition: transform .5s ease;
    transform: translateX(100px);
  }
  .b-a-next{
    width: 60px;
    height: 20px;
    background-color: #fff;
    text-align: center;
    transition: transform .5s ease;
    transform: translateX(-100px);
  }
  .b-a-btn-left:hover .b-a-prev{ 
    transform: translateX(-40px);
  } 
  .b-a-btn-right:hover .b-a-next{
    transform: translateX(40px);
  }
  @media screen and (max-width: 1400px) {
    .b-a-c-img{
      width: 800px;
    }
    .b-a-c-l-article ,.b-a-c-share ,  .b-a-c-img img .blog-article-nav , .b-a-nav-btn{
      width: 800px;
    }
    .b-a-c-author{
      width: 750px;
    }
  }
  @media screen and (max-width: 1200px) {
    .b-a-c-img {
      width: 690px;
      height: 465px;
    }
    .b-a-c-l-article ,.b-a-c-share ,  .b-a-c-img img , .blog-article-nav , .b-a-nav-btn{
      width: 690px;
    }
    .b-a-c-author{
      width: 640px;
    }
  }
  @media screen and (max-width: 996px) {
    .b-a-c-img{
      width: 76vw;
      height: 52.3vw;
    }
    .b-a-c-l-article ,.b-a-c-share ,  .b-a-c-img img ,.blog-article-nav , .b-a-nav-btn{
      width: 76vw
    }
    .b-a-c-author{
      width: 71vw;
    }
  }
</style>
