/*
 * @Author: ye.chen
 * @Date: 2020-07-30 11:41:00
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-07-30 14:03:57
 */
class EventEmitter {
  _messages = {}; // 注册信息接口

  regist = (type, fn) => {
    if (typeof this._messages[type] === "undefined") {
      this._messages[type] = [fn];
    } else {
      this._messages[type].push(fn);
    }
  }; // 发布信息接口

  fire = (type, args = []) => {
    if (!this._messages[type]) return;
    const len = this._messages[type].length;

    for (let i = 0; i < len; i++) {
      this._messages[type][i](args);
    }
  }; // 移除信息接口

  remove = (type, fn) => {
    if (this._messages[type] instanceof Array) {
      if (!fn) {
        this._messages[type] = [];
        return;
      }

      let i = this._messages[type].length - 1;

      for (; i >= 0; i--) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this._messages[type][i] === fn && this._messages[type].splice(i, 1);
      }
    }
  };
}

export const eventEmitter = new EventEmitter();
export const EventType = {
  logout: "logout",
  // 退出登录
  changeEnterprise: "changeEnterprise",
  // 切换企业
  captcha: "TencentCaptcha",
  // 风控
  relationContactsTab: "relationContactsTab",
  // 新建商机客户名称改变,显示关联联系人
  closeAccount: "closeAccount",
  // 坐席权限关闭
  receiveXKB: "receiveXKB",
  // 寻客宝 领取
  translateXKB: "translateXKB",
  // 寻客宝转线索
  emptyXKB: "emptyXKB",
  // 寻客宝清空回收站
  callCenterReady: "callCenterReady",
  // 呼叫中心准备完毕
  customerDetailWechat: "customerDetailWechat",
  // 客户详情导入企业微信客户
  clearCustomerDetailWechatId: "clearCustomerDetailWechatId" // 清楚客户详情导入企业微信客户id

};
export default eventEmitter;