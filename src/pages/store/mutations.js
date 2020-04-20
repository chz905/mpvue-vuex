import { FIND_LIST,USER_INFO } from './mutations-type'
export default {
    [FIND_LIST](state,data){
        state.listTmp = data
    },
    [USER_INFO](state,data){
        state.userInfo = data
        console.log(data,'sss')
    }
}