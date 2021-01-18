<template>
    <div class="blog-comments">
        <div class="blog-article-comments">
            <div class="b-a-c-title">
            <h1>COMMENTS</h1>
            </div>
            <div class="b-a-c-items">
            <div class="b-a-c-item">
                <div class="b-a-c-i-commet-author">
                <div class="b-a-c-i-author-img">
                    <img src="/_nuxt/assets/img/other/user-img-1.jpg" alt="">
                </div>
                <div class="b-a-c-a-i-info">
                    <h5>SEPTEMBER 9, 2019</h5>
                    <h1>ALAN EDWARDS</h1>
                    <p>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonum nibhie. Aenean sollici tudin, lorem auci elit consequat ipsutis sem niuis sed odio it amet nibh vulputate cursus. Ad per labores accusam.</p>
                    <div class="b-a-btn-reply">
                    <div class="b-a-r-item">
                        <span class="b-a-r-arrow"></span>
                        <p class="b-a-reply">REPLY TO</p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="b-a-c-i-reply-comment-author">
                <div class="b-a-c-i-author-img">
                    <img src="/_nuxt/assets/img/other/user-img-2.jpg" alt="">
                </div>
                <div class="b-a-c-a-i-info">
                    <h5>SEPTEMBER 9, 2019</h5>
                    <h1>PETER GREEN</h1>
                    <p>Fastidii mentitum mel ex, nam tantas insolens conclusionemque ex, quo ut modus tritani. Enim dolor laoreet ei sed, sint debitis scaevola cu sea. Etiam senserit duo ea Quo cu adhuc doctus</p>
                    <div class="b-a-btn-reply">
                    <div class="b-a-r-item">
                        <span class="b-a-r-arrow"></span>
                        <p class="b-a-reply">REPLY TO</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="b-a-c-item">
                <div class="b-a-c-i-commet-author">
                <div class="b-a-c-i-author-img">
                    <img src="/_nuxt/assets/img/other/user-img-3.jpg" alt="">
                </div>
                <div class="b-a-c-a-i-info">
                    <h5>SEPTEMBER 9, 2019</h5>
                    <h1>THOMAS HALL</h1>
                    <p>Vel choro verear blandit id. Lorem putant nostrud et qui, qui nostro scaevola cotidieque ad, nostrud euismod eruditi ex pro. Mel facete lobortis no, falli menandri et mel, movet legimus eu sit. Sumo suas antiopam te pro.</p>
                    <div class="b-a-btn-reply">
                    <div class="b-a-r-item">
                        <span class="b-a-r-arrow"></span>
                        <p class="b-a-reply">REPLY TO</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="blog-article-post-a-comment">
            <div class="b-a-pac-title">
            <h1>POST A COMMENT</h1>
            </div>
            <div class="b-a-pac-items">
            <form>
                <h1>YOUR COMMENT</h1>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <h1>YOUR NAME</h1>
                <input type="text">
                <h1>YOUR EMAIL</h1>
                <input type="email">
                <button type="submit">SUBMIT</button>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .b-a-c-title h1{
    font-size: 45px;
    padding: 70px 0;
  }
  .b-a-c-i-commet-author, .b-a-c-i-reply-comment-author{
    display: flex;
    width: 860px;
    align-items: flex-start;
    padding: 30px 0;
  }
  .b-a-c-i-reply-comment-author{
    transform: translateX(120px);
  }
  .b-a-c-i-author-img{
    padding: 0 30px;
    box-sizing: border-box;
  }
  .b-a-c-i-author-img img{
    width: 120px;
    
  }
  .b-a-c-a-i-info h5{
    font: 11px 'Heebo', 'sans-serfi';
    color:#E23137;
    font-weight: 600;
  }
  .b-a-c-a-i-info h1{
    font-size: 24px;
  }
  .b-a-c-a-i-info p{
    font: 16px 'Ubuntu', 'sans-serfi';
    color: #808080;
    line-height: 27px;
  }
  .b-a-r-item{
    width: 220px;
    height: 40px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .b-a-reply{
    font: 14px 'Rajdhani', 'sans-serfi'!important;
    letter-spacing: 1.4px;
    font-weight: 700!important;
    color: #000!important;
    width: 80px;
    height: 20px;
    background-color: #fff;
    position: relative;
    transform: translate(0px, 2px);
    text-align: center;
    transition: all .4s ease;
    cursor: pointer;
  }
  .b-a-btn-reply .b-a-r-arrow{
    transform: translateX(-80px);
  }
  .b-a-btn-reply:hover .b-a-reply{
    transform: translate(50px, 2px);
  }
  .b-a-pac-title h1{
    font-size: 45px;
    padding: 70px 0;
  }
  .b-a-pac-items h1{
    font: 11px 'Heebo', 'sans-serfi';
    color:#E23137;
    font-weight: 600;
    margin-top: 60px;
  }
  .b-a-pac-items textarea:focus,
  .b-a-pac-items input:focus{
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid #E23137;
  }
  .b-a-pac-items textarea, .b-a-pac-items input{
    font-family: inherit;
    font-size: 24px;
    font-weight: 700;
    border:none;
    border-bottom: 2px solid rgba(0, 0, 0,0.1);
    width: 100%;
  }
  .b-a-pac-items button{
    background-color: #E23137;
    width: 100px;
    height: 50px;
    color: #fff;
    margin-top: 40px;
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
  @media screen and (max-width: 1400px){
    .b-a-c-i-commet-author , .b-a-c-i-reply-comment-author{
      width: 750px;
    }
  }
  @media screen and (max-width: 1200px){
    .b-a-c-i-commet-author , .b-a-c-i-reply-comment-author{
      width: 640px;
    }
  }
  @media screen and (max-width: 996px){
    .b-a-c-i-commet-author , .b-a-c-i-reply-comment-author{
      width: 69vw;
    }
    .b-a-pac-items textarea, .b-a-pac-items input{
       width: 76vw;
    }
    .b-a-pac-items button{
      display: inherit;
    }   
  }
  @media screen and (max-width: 700px){
    .b-a-c-i-reply-comment-author{
      transform: translateX(0px);
    }
    .b-a-c-i-author-img{
      padding: 0 30px 0 0;
    }
  }
</style>
