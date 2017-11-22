import React,{Component} from 'react';
import './index.css'
import axios from 'axios'
import {connect} from "react-redux"
import Clock from "./components/view.js"
export default class Detail extends Component{
	constructor(props){
		super(props)
		this.state={
			title:"",
			content:""
		}
	}
	render(){
		return(
			<div className="detail">
				<div className="detail-title">{this.state.title}</div>
				<div className="detail-content" dangerouslySetInnerHTML={{__html:this.state.content}}></div>
				<Clock ></Clock>
			</div>
		)
	}
	componentDidMount(){
		this.getDetailInfo();
	}
	getDetailInfo(){
		const id=this.props.params.id;
		axios.get("./detail.json?id="+ id)
		.then(this.handleGetInfoSucc.bind(this))
	}
	handleGetInfoSucc(response){
		console.log(response.data.data)
		const {detail}=response.data.data;
		this.setState({
			title:detail.title,
			content:detail.content
		})
		console.log(this.state.title)
		
	}
}
