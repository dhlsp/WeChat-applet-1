Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
  },

  phoneInput: function(e) {
    this.data.phone = e.detail.value;
    // this.setData({
    //   phone: e.datail.value
    // })
  },

  passwordInput: function (e) {
    this.data.password = e.detail.value;
    // this.setData({
    //   password: e.datail.value
    // })
  },

  login: function () {
    if(this.data.phone.length == 0) {
      wx.showToast({
        title: '账户不能为空!',
        icon: 'none',
        duration: 2000,
      })
      return;
    }
    if(this.data.password.length == 0){
      wx.showToast({
        title: '密码不能为空!',
        icon: 'none',
        duration: 2000,
      })
      return;
    } else {
      if(this.data.phone == "123456" || this.data.password == "123456") {
        wx.showToast({
          title: '登录成功!',
          icon: 'success',
          duration: 2000,
        })
        // wx.navigateTo({
        //   url: "/pages/home/index"
        // })
        wx.switchTab({
          url: '/pages/home/index',
        });
      } else  {
        wx.showToast({
          title: '账户或密码错误!',
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