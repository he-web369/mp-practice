// miniprogram/pages/detail/detail.js
const datas=require('../../datas/list-data').datas
let app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollected:false,
    index:0,
    musicPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index=options.index
    this.setData({
      ...datas[index],
      index,
      isCollected:wx.getStorageSync('isCollected')[index],
      musicPlay:app.globalData.isPlay
    })
    const audioManager=wx.getBackgroundAudioManager()
    audioManager.onPlay((res) => {
      this.setData({
      musicPlay:true
      })
      app.globalData.isPlay=true
    })
    audioManager.onPause((res)=>{
      this.setData({
        musicPlay:false
      })
      app.globalData.isPlay=false
    })
  },
  handleCollection(){
    this.setData({
      isCollected:!this.data.isCollected
    })
    wx.showToast({
      title: this.data.isCollected?'收藏成功':'取消收藏',
      icon:this.data.isCollected?'success':'none'
    })
    const colllectedObj=wx.getStorageSync('isCollected')
    if(!colllectedObj){
      wx.setStorageSync('isCollected', {[this.data.index]:this.data.isCollected})
    }else{
      colllectedObj[this.data.index]=this.data.isCollected
      wx.setStorageSync('isCollected', colllectedObj)
    }
  },
  handleMusicPlay(){
    this.setData({
      musicPlay:!this.data.musicPlay
    })
    if(this.data.musicPlay){
      wx.playBackgroundAudio({
        dataUrl: 'http://music.163.com/song/media/outer/url?id=476592630.mp3'
      })
    }else{
      wx.pauseBackgroundAudio({
        complete: (res) => {},
      })
    }
  },
  handleShare(){
    wx.showActionSheet({
      itemList:[
        '分享到朋友圈','分享到微博','分享到QQ空间'
      ]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})