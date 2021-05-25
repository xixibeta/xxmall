import { baseURL } from './config.js'

export default function(options) {
  // wx.request({
  //   url: options.url,
  //   method: options.method || 'get',
  //   data: options.data || {},
  //   success: null,
  //   fail: null
  // })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  }

  )
}