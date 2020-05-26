//oss拼接
const ossImage = (url,type) => {
    return url+ '?x-oss-process=style/' + type
}

export default {
    ossImage
}