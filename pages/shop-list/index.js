// pages/shop-list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '',
    KeyboardKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, '·', 0, '<'],
    keyShow: true,
    hiddenmodalput: true,
  },

  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认
  confirm: function () {
    this.setData({
      hiddenmodalput: true
    })
  },

  keyTap(e) {
    let keys = e.currentTarget.dataset.keys,
      content = this.data.content,
      len = content.length;

    switch (keys) {
      case '·':
        if (len < 11 && content.indexOf('.') == -1) {
          if (content.length < 1) {
            content = '0.';
          } else {
            content += '.';
          }
        }
        break;
      case '<':
        content = content.substr(0, content.length - 1);
        break;
      default:
        let Index = content.indexOf('.');//小数点在字符串中的位置
        if (Index == -1 || len - Index != 3) {//这里控制小数点只保留两位
          if (len < 11) {//控制最多可输入10个字符串
            content += keys;
          }
        }
        break
    }

    this.setData({ content });

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