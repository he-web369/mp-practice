//index.js
const app = getApp()

Page({
  data:{
    userName:wx.getStorageSync('userInfo').userName||'',
    avatarUrl:wx.getStorageSync('userInfo').avatarUrl||''
  },
  bindGetUserInfo(e){
    const {userInfo}=e.detail
    if(!userInfo)return //用户点了取消，直接return
    this.setData({
      userName:userInfo.nickName,
      avatarUrl:userInfo.avatarUrl
    })
    wx.setStorageSync('userInfo', {userName:userInfo.nickName,avatarUrl:userInfo.avatarUrl})
  },
  handleClick(){
    wx.switchTab({
      url: '/pages/list/list',
    })
  }
})
