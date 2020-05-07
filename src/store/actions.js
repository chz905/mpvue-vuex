import { USER_INFO,POSTS_LIST } from './mutation-types'
export default {
    syncUserInfo({ commit }, userInfo) {
        commit(USER_INFO, userInfo);
    },
    postsList({ commit },list){
        commit(POSTS_LIST, list)
    }
}