<template>
  <div class="shop-right-side">
    <div class="s-r-s-search">
      <div style="display:flex">
        <input type="text" v-model="value">
        <button type="submit" @click="searchItem()"><i class="fas fa-search"></i></button>
      </div>
    </div> 
    <div class="s-r-s-range">
      <div class="s-r-s-c-title">
        <h1>FILTER BY PRICE</h1>
      </div>
      <input type="range" value="0" min="0" max="300" step="10" id="range1">
      <input type="range" value="300" min="0" max="300" step="10" id="range2">
      <div class="s-r-s-r-line1"></div>
      <div class="s-r-s-r-line2"></div>
      <div class="s-r-s-r-range-value">
        <p>PRICE : $<span>0</span> - <span>300</span>$</p>
      </div>
      <button style="button" @click="filter()">
        <div class="s-l-s-btn-right">
          <div class="s-l-s-btn">
            <span class="s-l-s-r-arrow"></span>
            <p class="s-l-s-next">FILTER</p>
          </div>
        </div>
      </button>
    </div>
    <div class="s-r-s-categories">
      <div class="s-r-s-c-title">
        <h1>CATEGORIES</h1>
      </div>
      <ul>
        <li>FAST</li>
        <li>HELMETS</li>
        <li>LEATHER</li>
        <li>MOTO</li>
        <li>QUALITY</li>
        <li>SOUND</li>
        <li>SPEED</li>
      </ul>
    </div>
    <div class="s-r-s-tag">
          <div class="s-r-s-title">
            <h1>TAGS</h1>
          </div>
          <div class="s-r-s-item">
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
  </div>
</template>

<script>
  export default { 
    data(){
      return{
        value: 'SEARCH HERE'
      }
    },
    mounted(){
      var range1 = document.querySelector('#range1');
      var range2 = document.querySelector('#range2');
      range1.addEventListener('mousemove',()=>{ 
        document.querySelectorAll('.s-r-s-r-range-value span ')[0].innerHTML = range1.value;;
        this.lineWidth()
      })
      range2.addEventListener('mousemove',()=>{
        document.querySelectorAll('.s-r-s-r-range-value span')[1].innerHTML = range2.value;
        this.lineWidth()
      })
      var tag = document.querySelectorAll('.s-r-s-item p ');
      for(var i=0;i<tag.length;i++){
        tag[i].addEventListener('click',()=>{
          alert('not working!')
        })
      }
      var categories = document.querySelectorAll('.s-r-s-categories li ');
      for(var s=0;s<categories.length;s++){
        categories[s].addEventListener('click',(e)=>{
          var text = e.target.innerHTML;
          this.filterCategorie(text);
        })
      }
    },methods:{
      lineWidth(){
        var value1 = document.querySelector('#range1').value;
        var value2 = document.querySelector('#range2').value;
        var itemWidth = document.querySelector('.shop-right-side').offsetWidth
        var width = Math.abs(parseInt((value1-value2)/10))
        var margin = (itemWidth/30)*parseInt((value1).replace("0"," "))
        var percent = (itemWidth/30)*width
        document.querySelector('.s-r-s-r-line1').style.width = percent+'px'
        document.querySelector('.s-r-s-r-line1').style.marginLeft = margin +'px';
      },
      searchItem(){
        this.searchProduct(this.value)
      },
      filter(){
        var value1 = document.querySelector('#range1').value;
        var value2 = document.querySelector('#range2').value;
        this.filterPriceRange(value1,value2)
      }
    }
  }
</script>

<style scoped>
  .shop-right-side{
    width: 300px;
  }
  .s-r-s-search form{
    display: flex;
  }
  .s-r-s-search input{
    width: 200px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0,0.1);
    padding: 0 0 0 30px ;
    box-sizing: border-box;
  }
  .s-r-s-search button{
    width: 50px;
    height: 50px;
    background-color: #E23137;
    color: #fff;
    cursor: pointer;
  }
  input[type=range] {
  height: 17px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  position: absolute;
  z-index: 1;
}
.s-r-s-range input[type=range]:focus {
  outline: none;
}
.s-r-s-range input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #A6A6A6;
  background: #A6A6A6;
  border-radius: 0px;
  border: 0px solid #A6A6A6;
  position: relative;
  z-index: 1;
}
.s-r-s-range input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 2px #A6A6A6;
  border: 0px solid #FFFFFF;
  height: 10px;
  width: 10px;
  border-radius: 0px;
  background: #E23137;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.5px;
  position: relative;
  z-index: 15;
  margin-top: -15px;
}
.s-r-s-range input[type=range]:focus::-webkit-slider-runnable-track {
  background: #A6A6A6;
}
.s-r-s-range input[type=range]::-moz-range-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #A6A6A6;
  background: #A6A6A6;
  border-radius: 0px;
  border: 0px solid #A6A6A6;
}
.s-r-s-range input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 2px #A6A6A6;
  border: 0px solid #FFFFFF;
  height: 15px;
  width: 15px;
  border-radius: 0px;
  background: #E23137;
  cursor: pointer;
  position: relative;
  z-index: 15;
}
.s-r-s-range input[type=range]::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.s-r-s-range input[type=range]::-ms-fill-lower {
  background: #A6A6A6;
  border: 0px solid #A6A6A6;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #A6A6A6;
}
.s-r-s-range input[type=range]::-ms-fill-upper {
  background: #A6A6A6;
  border: 0px solid #A6A6A6;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #A6A6A6;
}
.s-r-s-range input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 2px #A6A6A6;
  border: 0px solid #FFFFFF;
  height: 15px;
  width: 15px;
  border-radius: 0px;
  background: #E23137;
  cursor: pointer;
  position: relative;
  z-index: 15;
}
.s-r-s-range input[type=range]:focus::-ms-fill-lower {
  background: #A6A6A6;
}
.s-r-s-range input[type=range]:focus::-ms-fill-upper {
  background: #A6A6A6;
}
.s-r-s-r-range-value{
  font-weight: 700;
  font-size: 16px;
  transform: translateY(30px)
}
.s-r-s-r-range-value span{
  background: none;
  font-weight: 700;
  font-size: 16px;
  padding: 0;
}
.s-r-s-r-line1 ,
.s-r-s-r-line2{
  height: 1px;
  position: relative;
  transform: translateY(8px);
  width: 100%;
}
.s-r-s-r-line1{
  background-color: #E23137;
  z-index: 2;
}
.s-r-s-r-line2{
   background: #A6A6A6;
   z-index: 0;
}
.s-r-s-range {
    position: relative;
}
.s-r-s-range button{
  background-color: #E23137;
  width: 160px;
  height: 50px;
  transform: translateY(50px);
  cursor: pointer;
}
 .s-l-s-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  letter-spacing: 1.4px;
  font-weight: 700;
  transition: width .5s ease;
  position: relative;
}
.s-l-s-r-arrow{
  position: absolute;
  right: 0;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 5px solid  #fff;
  border-bottom: 5px solid transparent;
  border-right: 5px solid transparent;
  padding: 0;
  transition: none;
  transform: translateX(-10px);
  background: none;
}
 .s-l-s-r-arrow::before{
  content: '';
  position: absolute;
  width: 110px;
  height: 1px;
  background-color: #fff;
  transform: translateX(-115px);
}
.s-l-s-next{
  width: 60px;
  height: 20px;
  background-color: #E23137;
  color: #fff;
  text-align: center;
  transition: transform .5s ease;
  transform: translateX(-35px);
}
.s-l-s-btn-right:hover .s-l-s-next{
    transform: translateX(22px);
}
  .s-r-s-categories{
    padding-top: 40px;
  }
  .s-r-s-c-title h1{
    padding: 40px 0 30px;
    font-size: 24px;
  }
  .s-r-s-categories li{
    padding: 10px 0;
    font-size: 16px;
    font-weight: 700;
  }
  .s-r-s-categories li:hover{
    color: #E23137;
    cursor: pointer;
  }
  .s-r-s-tag{
    padding-top:70px;
  }
  .s-r-s-item{
    display: flex;
    width: 250px;
    flex-wrap: wrap;
  }
  .s-r-s-title h1{
    font-size: 24px;
    padding-bottom: 20px;
  }
  .s-r-s-item p{
    font: 11px 'Heebo', 'sans-serfi';
    font-weight: 500;
    padding: 0 10px 10px;
  }
  .s-r-s-item p:hover{
    color:#E23137;
    cursor: pointer;
  }
  .s-r-s-item span{
    background: #000;
    width: 10px;
    height: 1px;
    padding: 0;
    transform: translateY(7px);
  } 
  @media screen and (max-width: 1400px) {
    .shop-right-side{
      width: 250px;
    }
  }
  @media screen and (max-width: 1200px) {
    .shop-right-side{
      width: 200px;
    }
    .s-r-s-search input , .s-r-s-item{
      width: 150px;
    }
  }
  @media screen and (max-width: 1000px) {
    .shop-right-side{
      padding: 70px 0 0 ;
    }
    .shop-right-side , .s-r-s-search input , .s-r-s-item{
      width: 750px;
    }
  }
  @media screen and (max-width: 765px) {
    .shop-right-side , .s-r-s-search input , .s-r-s-item{
      width: 85vw;
    }
  }
</style>
