// const baseURL = 'https://jsonplaceholder.typicode.com' //请求地址

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
            url: baseURL + url,
            method: params.method || 'GET',
            data: params.data,
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                "channel": 3
            },
            success(res) {
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