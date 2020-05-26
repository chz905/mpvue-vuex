import { USER_INFO, POSTS_LIST, GET_OPENID, GET_UNIONID, SYSTEMINFO,GET_USERID } from './mutation-types'
export default {
    [USER_INFO](state, userInfo) {
        state.userInfo = userInfo
    },
    [POSTS_LIST](state, list){
        state.postsList = list
    },
    [GET_OPENID](state, openid){
        state.openid = openid
    },
    [GET_UNIONID](state, unionid){
        state.unionid = unionid
    },
    [SYSTEMINFO](state, systemInfo){
        state.systemInfo = systemInfo
    },
    [GET_USERID](state, mid){
        state.mid = mid
    }
}
