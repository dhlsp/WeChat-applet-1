Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    register: '',
    registered: '',
  },

  phoneInput: function (e) {
    this.data.phone = e.detail.value;
    // this.setData({
    //   phone: e.datail.value
    // })
  },

  registerInput: function (e) {
    this.data.register = e.detail.value;
    // this.setData({
    //   password: e.datail.value
    // })
  },

  registeredInput: function (e) {
    this.data.registered = e.detail.value;
    // this.setData({
    //   password: e.datail.value
    // })
  },

  register: function () {
    if (this.data.phone.length == 0) {
      wx.showToast({
        title: '用户名不能为空!',
        icon: 'none',
        duration: 2000,
      })
    }
    else if (this.data.register.length == 0) {
      wx.showToast({
        title: '密码不能为空!',
        icon: 'none',
        duration: 2000,
      })
    } 
    else if (this.data.registered.length == 0) {
      wx.showToast({
        title: '确认密码不能为空!',
        icon: 'none',
        duration: 2000,
      })
    }
    else {
      if (this.data.register == this.data.registered){
        wx.showToast({
          title: '注册成功!',
          icon: 'success',
          duration: 2000,
        })
        return url('../login/login');
      }
      else{
        wx.showToast({
          title: '注册失败!',
          icon: 'none',
          duration: 2000,
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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