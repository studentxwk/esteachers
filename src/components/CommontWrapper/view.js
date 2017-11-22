import React,{Component} from 'react'
import './header.css'
import axios from 'axios'
import {Link}  from 'react-router'
import Swiperitem from './component/view.js'

export default class CommonWrapper extends Component{
	constructor(props){
		super(props)
		this.state={
			list:[],
			normal:[],
			slower:[],
			teacher:[]
		}
		this.handleGetHeader=this.handleGetHeader.bind(this)
	}
	render(){
		const list=this.state.list.map((item,index)=>{
								return <li className="header-item" key={item.id} ><Link to={item.url} >{item.title}</Link></li>
							})
		const normal=this.state.normal.map((item,index)=>{
								return <li className="nav-item-title" key={item.id}><Link to={item.url}>{item.title}</Link></li>
							})
		const slower=this.state.slower.map((item,index)=>{
								return <li className="nav-item-title nav-item-flet" key={item.id}><Link to={item.url}>{item.title}</Link></li>
							})
		const teacher=this.state.teacher.map((item,index)=>{
								return <li className="nav-item-title nav-item-flet" key={item.id}><Link to={item.url}>{item.title}</Link></li>
							})
		return(
			<div >
				<div className="header">
						<Link to="/"><img className="header-logo" src={require('../../statics/images/logo.png')}/></Link>
					<ul className="header-list">
						{list}
					</ul>
				</div>
				<div className="nav">
					<div className="navblock navblock-left">
						<h3 className="nav-title">常速英语</h3>
						<ul>
							{normal}
						</ul>
					</div>
					<div className="navblock navblock-center ">
						<h3 className="nav-title">慢速英语(中级)</h3>
						<ul>
							{slower}
						</ul>
					</div>
					<div className="navblock navblock-right">
						<h3 className="nav-title">英语教学(初级)</h3>
						<ul>
							{teacher}
						</ul>
					</div>
				</div>
				<Swiperitem></Swiperitem>
				<div>
					{this.props.children}

				</div>
				<div className="footer">VOA友情链接</div>
			</div>
		)
	}
	componentDidMount(){
		axios.get('./header.json')
		.then(this.handleGetHeader)
	}
	handleGetHeader(response){
		const {list,normal,slower,teacher}=response.data.data;
		this.setState({
			list:list,
			normal:normal,
			slower:slower,
			teacher:teacher
		})
		console.log(response.data.data)
		console.log(this.state.normal)
	}
}

