declare class EventEmitter {
    private _messages;
    regist: (type: string, fn: Function) => void;
    fire: (type: string, args?: unknown | unknown[]) => void;
    remove: (type: string, fn?: Function | undefined) => void;
}
export declare const eventEmitter: EventEmitter;
export declare const EventType: {
    logout: string;
    changeEnterprise: string;
    captcha: string;
    relationContactsTab: string;
    closeAccount: string;
    receiveXKB: string;
    translateXKB: string;
    emptyXKB: string;
    callCenterReady: string;
    customerDetailWechat: string;
    clearCustomerDetailWechatId: string;
};
export default eventEmitter;
