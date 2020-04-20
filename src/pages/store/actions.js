import { FIND_LIST,USER_INFO } from './mutations-type'
export default {
    getList({ commit },data) {
        commit(FIND_LIST, data)
    },
    getUserInfo({ commit },data) {
        commit(USER_INFO, data)
    }
    
}