import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
import {Link} from "react-router"
import {connect} from 'react-redux'
import {getListAction} from './createrAction'
 class List extends Component{
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
		this.getListInfoSucc=this.props.getListInfoSucc.bind(this)
	}
	render(){
		const list=this.props.list.map((item,index)=>{
			return (
				<li className="index-item" key={item.id}>
					 <Link to={item.link} >[{item.title}]({item.time}){item.isNew}</Link>
				</li>
			)
		})
		return(
			<div className="list-contain">
				<h4 className="list-contain-title">VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。</h4>
				<ul className="list-contain-list">
					{list}
				</ul>
				<canvas width="400" height="410" id="canvas"></canvas>
			</div>
		)
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps.params)
		console.log(this.props.params.id)
		if(nextProps.params.id !== this.props.params.id){
			this.getListInfo(nextProps.params.id);
		};
	}

	componentDidMount(){
		if(!this.props.list.length){
		this.getListInfo();
		}
		this.canvas=document.getElementById("canvas");
		this.ctx=this.canvas.getContext("2d");
		this.drawText();
		this.drawTextHeight();
	}
	getListInfo(id){
		 id=id || this.props.params.id;
		axios.get('./listcontain.json?id='+id)
		.then(this.getListInfoSucc)
	}
	drawText(){
		this.ctx.moveTo(20,400);
		this.ctx.lineTo(20,0);
		this.ctx.moveTo(16,396);
		this.ctx.lineTo(396,396);
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.rect(60,396,40,-196);
		this.ctx.fillStyle="blue";
		this.ctx.fill();
		this.ctx.beginPath();
		this.ctx.rect(140,396,40,-296);
		this.ctx.fillStyle="pink"
		this.ctx.fill();
		this.ctx.beginPath();
		this.ctx.rect(220,396,40,-146)
		this.ctx.fillStyle="purple"
		this.ctx.fill();
		this.ctx.beginPath();
		this.ctx.strokeStyle = 'black';
		this.ctx.textAlign = "center";
		this.ctx.strokeText("200", 80,196);
		this.ctx.strokeText("小学", 80,410);
		this.ctx.strokeText("300", 160,96);
		this.ctx.strokeText("初中", 160,410);
		this.ctx.strokeText("150", 240,246);
		this.ctx.strokeText("高中", 240,410);
	}
	drawTextHeight(){
		this.ctx.save();
		this.ctx.beginPath();
		for (var i=0;i<=400;i+=100){
			console.log(i)
		this.ctx.moveTo(24,i);
		this.ctx.lineTo(21,i);
		this.ctx.strokeStyle = 'black';
		this.ctx.textAlign = "left";
		this.ctx.textBaseline = "middle";
		this.ctx.strokeText(i, 0,(400-i));
		}
		this.ctx.stroke();		
		this.ctx.restore();

	}
}
 const mapStateToProps=(state)=>({
		list:state.list.list
	})
 const mapDispatchToprops=(dispatch)=>({
		getListInfoSucc:(response)=>{
		const {list}=response.data.data
		dispatch(getListAction(list));
	}
})
export default connect(mapStateToProps,mapDispatchToprops)(List)
