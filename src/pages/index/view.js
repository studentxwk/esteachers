import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
import {Link} from "react-router"
import {connect} from 'react-redux'
import {getIndexAction} from './createrAction'
import EchartsTest from './components/view.js'
 class Index extends Component{
	constructor(props){
		super(props)
		this.state={
			list:[],
			friendship:[]
		}
		this.getIndexInfoSucc=this.props.getIndexInfoSucc.bind(this)
	}
	render(){
		const list=this.props.list.map((item,index)=>{
			return (
				<li className="index-item" key={item.id}>
					 <Link to={item.link} className="link-title">[{item.category}]</Link><Link to={item.link} className="link-contain">{item.title}({item.time})</Link>
				</li>
			)
		})
		const friendship=this.props.friendship.map((item,index)=>{
			return (
				<li className="index-foot" key={item.id}>
					 <Link to={item.url} className="link-title">{item.title}</Link>
				</li>
			)
		})
		return(
			<div >
				<div className="index-contain">
					<h4 className="index-title">VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。</h4>
					<ul className="index-list">
						{list}
					</ul>
					<EchartsTest></EchartsTest>
				</div>
				<div className="foot">
					<h4 className="index-title">友情链接</h4>
					<ul className="index-list-foot">
						{friendship}
					</ul>
				</div>
			</div>
		)
	}
	componentDidMount(){
		if(!this.props.list.length){
		this.getIndexInfo();
		}
	}
	getIndexInfo(){
		axios.get('./index.json')
		.then(this.getIndexInfoSucc)
	}
}
 const mapStateToProps=(state)=>({
		list:state.index.list,
		friendship:state.index.friendship
	})
 const mapDispatchToprops=(dispatch)=>({
		getIndexInfoSucc:(response)=>{
		const {list,friendship}=response.data.data
	dispatch(getIndexAction(list,friendship));
	}
})
export default connect(mapStateToProps,mapDispatchToprops)(Index)
