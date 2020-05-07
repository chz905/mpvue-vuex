import { xhr } from '@/utils/xhr.js'

// const posts = (p) => xhr(p,'/posts')
const readAdvertDetail = (p) => xhr(p,'/readAdvertDetail')

export default {
    // posts
    readAdvertDetail
}