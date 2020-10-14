import {FETCH_POSTS,NEW_POST} from "../Actions/type"

const initState={
    items:[],
    item:{}
}

export default function (state=initState,action){
   
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items:action.payload
            }
        default:
            return state;
    }

}