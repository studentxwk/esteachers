import {CHANGE_INDEX} from './actionType'
export const getIndexAction=(newlist,newfriendship)=>({
	type:CHANGE_INDEX,
	list:newlist,
	friendship:newfriendship
})