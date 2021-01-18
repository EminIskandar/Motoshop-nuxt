import Vue from 'vue';
import section from '../components/index/section.vue';
import Product from '../components/index/product.vue';
import Ad from '../components/index/ad.vue';
import AdAbout from '../components/about/about-ad.vue'; 
import motoSlider from '../components/index/moto-slider.vue';
import Blog from '../components/index/blog.vue';
import Mark from '../components/index/mark.vue';
import Footer from '../components/index/footer.vue';
import aboutSlider from '../components/about/about-slider.vue';
import aboutPerformance from '../components/about/about-perfonmance.vue';
import aboutRunway from '../components/about/about-runway.vue';
import aboutBlog from '../components/about/about-blog.vue';
import ourPerformance from '../components/our-services/our-perfonmance.vue';
import ourRunway from '../components/our-services/our-runway.vue';
import ourEquipment from '../components/our-services/our-equipment.vue';
import ourExperinece from '../components/our-services/our-experience.vue';
import team from '../components/team/team.vue';
import teamslider from '../components/team/team-slider.vue';
import blogArticle from '../components/blog/blog-article.vue';
import blogComments from '../components/blog/blog-comments.vue';
import blogRelatedPost from '../components/blog/blog-related-post.vue';
import blogRightSide from '../components/blog/blog-right-side.vue';
import shopLeftSide from '../components/shop/Shop-left-side.vue';
import shopRightSide from '../components/shop/Shop-left-side.vue';
import shopRelatedProduct from '../components/shop/related-product.vue';

Vue.component('Section', section)
Vue.component('Product', Product)
Vue.component('Ad', Ad)
Vue.component('motoSlider', motoSlider)
Vue.component('blog', Blog) 
Vue.component('Mark', Mark)
Vue.component('Footer', Footer)
Vue.component('about-ad', AdAbout ) 
Vue.component('about-slider', aboutSlider ) 
Vue.component('about-perfonmance', aboutPerformance ) 
Vue.component('about-runway', aboutRunway) 
Vue.component('about-blog', aboutBlog) 
Vue.component('our-performance', ourPerformance) 
Vue.component('our-runway', ourRunway) 
Vue.component('our-equipment', ourEquipment) 
Vue.component('our-experience', ourExperinece) 
Vue.component('team', team) 
Vue.component('team-slider', teamslider) 
Vue.component('blog-article', blogArticle ) 
Vue.component('blog-comments', blogComments) 
Vue.component('blog-related-post', blogRelatedPost) 
Vue.component('blog-right-side', blogRightSide) 
Vue.component('shop-left-side', shopLeftSide) 
Vue.component('shop-right-side', shopRightSide) 
Vue.component('related-product', shopRelatedProduct) 
//const components = { BlMain, BlRegion, ... }

/*Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})*/