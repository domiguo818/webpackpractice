// console.log('实现轮播图的业务逻辑')
// console.log('实现tabs标签页的逻辑')
import './banner.js'
import './tab.js'
import $ from 'jquery'
$('#swiper').css('background', 'red')
import './style/index.css'
import './style/index.less'
import imgUrl from './assets/1.gif'
const img=document.createElement('img')
img.src =imgUrl
document.body.appendChild(img)
import imgUrl1 from './assets/logo_small.png'
const img1=document.createElement('img')
img1.src =imgUrl1
document.body.appendChild(img1)
import './assets/fonts/iconfont.css'
class App {
    static a = 123
  }
  
  console.log(App.a)
  import './app.vue'