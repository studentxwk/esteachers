import React,{Component} from 'react'
import "./swiper.css"
import Swiper from 'swiper'

export default class Swiperitem extends Component{
	render(){
		return(
			 <div className="swiper-container" ref={(elem)=>{this.swiper=elem}}>
				    <div className="swiper-wrapper">
				      <div className="swiper-slide"><img src='http://imgsrc.baidu.com/imgad/pic/item/810a19d8bc3eb1355383c6baac1ea8d3fd1f446e.jpg'/></div>
				      <div className="swiper-slide"><img src='http://imgsrc.baidu.com/imgad/pic/item/0ff41bd5ad6eddc479c925d232dbb6fd526633e8.jpg' /></div>
				      <div className="swiper-slide"><img src="http://imgsrc.baidu.com/imgad/pic/item/8cb1cb13495409231f3e83e39858d109b2de49dc.jpg" /></div>
				    </div>
 			 </div>
		)
	}
	componentDidMount(){
		var swiper=new Swiper(this.swiper,{
			autoplay:true,
			autoplay:{
				delay:2000,
				stopOnlastSlide:false,
				disableOnInteraction:true
			}
		})
	}
}
