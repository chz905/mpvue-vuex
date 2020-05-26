import { xhr } from '@/utils/xhr.js'

// const posts = (p) => xhr(p,'/posts')
const readAdvertDetail = (p) => xhr(p, baseURL+'/advert/readAdvertDetail')
const getOpenId = (p) => xhr(p,baseURL+'/user/getOpenId')//获取openid
const thirdPartyLogin = (p) => xhr(p,baseURL+'/user/thirdPartyLogin')//获取token
const getMemberUserInfo = (p) => xhr(p,apiMall+'/member/getMemberUserInfo')//获取用户信息

export default {
    // posts
    readAdvertDetail,
    getOpenId,
    thirdPartyLogin,
    getMemberUserInfo
}