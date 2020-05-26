import state from '../store/state'

export const xhr = (params = {}, url) => {
    return new Promise((resolve, reject) => {
        wx.showLoading({
            title: 'Loading...',
            mask: true,
            success() {
                setTimeout(function () {
                    wx.hideLoading();
                }, 8000)
            }
        });
        wx.request({
            url: url,
            method: params.method || 'GET',
            data: params.data,
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'channel': 3,
                'mid': typeof(state.mid.mid) == 'undefined'? '': state.mid.mid,
                'token': typeof(state.mid.token) == 'undefined'? '': state.mid.token,
                'from': 'from_member',
                'regSource': 'wechat',
                'clientVersion': '1.0.0',//版本号
            },
            success(res) {
                if(res.data.returnCode == 401 || res.data.returnCode == 402 ||  res.data.returnCode == 40){//401:未登录  402:登录已过期  40:token失效了
                    wx.showModal({
                        title: '温馨提示',
                        content:'登录过期请重新登陆',
                        success: res =>{
                            if(res.confirm){
                                wx.navigateTo({ url: '../login/main' });
                            }
                        }
                    })
                    console.log('登录过期')
                }
                resolve(res.data)
            },
            fail(err) {
                reject(err.data)
            },
            complete() {
                wx.hideLoading();
            }
        })
    })
}