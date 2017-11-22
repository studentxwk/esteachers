import {CHANGE_INDEX} from './actionType'
const defaultState={
		list:[],
		friendship:[]
}
export default (state=defaultState,action)=>{
	if(action.type===CHANGE_INDEX){
		const newState=Object.assign({},state)
		newState.list=action.list
		newState.friendship=action.friendship
		return newState
	}
	return state;
}

