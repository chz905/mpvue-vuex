import { USER_INFO, POSTS_LIST, GET_OPENID, GET_UNIONID, SYSTEMINFO, GET_USERID } from './mutation-types'
export default {
    syncUserInfo({ commit }, userInfo) {
        commit(USER_INFO, userInfo);
    },
    postsList({ commit }, list) {
        commit(POSTS_LIST, list)
    },
    //登录获取openid和unionid
    getOpenId({ commit },id) {
        commit(GET_OPENID, id.openid)
        commit(GET_UNIONID, id.unionid)
    },
    //设备信息
    getSystemInfo({commit},systemInfo){
        commit(SYSTEMINFO, systemInfo)
    },
    //userId
    getUserId({commit},mid){
        commit(GET_USERID, mid)
    }

}