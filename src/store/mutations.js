import { USER_INFO,POSTS_LIST } from './mutation-types'
export default {
    [USER_INFO](state, userInfo) {
        state.userInfo = userInfo
    },
    [POSTS_LIST](state, list){
        state.postsList = list
    }
}
