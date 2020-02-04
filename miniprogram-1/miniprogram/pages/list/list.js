// miniprogram/pages/list/list.js
let datas=require('../../datas/list-data').datas
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      listArr:datas
    })
  },
  toDetail(e){
    const currentIndex=e.currentTarget.dataset.currentindex
    wx.navigateTo({
      url: '/pages/detail/detail?index='+currentIndex,
    })
  },
  carouselToDetail(e){
    const {index}=e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index,
    })
  }
})