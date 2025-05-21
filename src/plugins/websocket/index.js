


//全局标识客户端ID
var StaticClientId = '';
//全局标识用户身份ID
var StaticIdentityId = '';
//全局标识连接时客户端
var StaticIsClient = true;
//控制模式类型
var ControlModel = {
    /// <summary>
    /// 自由模式
    /// </summary>
    Nomal: 0,
    /// <summary>
    /// 控制模式
    /// </summary>
    Control: 1
};
//消息类型
var MessageType = {
    /// <summary>
    /// 连接回复
    /// </summary>
    ConnectReply: 0,
    /// <summary>
    /// 身份识别
    /// </summary>
    ClientIdentity: 1,
    /// <summary>
    /// 报警服务
    /// </summary>
    Alert: 2,
    /// <summary>
    /// 广播
    /// </summary>
    BroadCast: 3,
    /// <summary>
    /// 点对点消息传输
    /// </summary>
    P2P: 4,
    /// <summary>
    /// 点对组消息
    /// </summary>
    P2MP: 5,
    /// <summary>
    /// 数据变更
    /// </summary>
    DataChanged: 6,
    /// <summary>
    /// 订阅消息
    /// </summary>
    Subscribe: 7,
    /// <summary>
    /// 资源操作
    /// </summary>
    Resources: 8,
    /// <summary>
    /// 获取在线用户列表
    /// </summary>
    OnLines: 9,
    /// <summary>
    /// 消息发出后通过服务全网转发
    /// </summary>
    Transmit: 10,
    /// <summary>
    /// 转发消息只在服务之间通信
    /// </summary>
    Transmit_Server: 11,
    /// <summary>
    /// 实时数据消息
    /// </summary>
    RealTime: 12,//电缆
    LwdRealTime: 40,//随钻
    INCRealTime: 41,//测斜数据
    /// <summary>
    /// 正常消息
    /// </summary>
    Message: 13,
    /// <summary>
    /// 服务处理进度状态消息
    /// </summary>
    ProgressState: 14,
    DownLoadProgress: 15,
    SystemNotice:101,
    WellRefresh:102,
    WellTypeRefresh:103
};
//订阅消息类型
var SubscribeType = {
    /// <summary>
    /// 消息传输
    /// </summary>
    Transmission: 0,
    /// <summary>
    /// 订阅
    /// </summary>
    Subscribe: 1,
    /// <summary>
    /// 取消订阅
    /// </summary>
    SubscribeCancel: 2,
    /// <summary>
    /// 获取所有的订阅类型
    /// </summary>
    AllSubscribeType: 3
};
//消息基础类
function MessageBase(ClientId, Body, MgType, Model) {
    this.ClientId = ClientId;
    this.Body = Body;
    this.MgType = MgType;
    this.Model = Model;
}
//在线用户类
function OnLine(ClientId, IdentityId, IsClient) {
    this.ClientId = ClientId;
    this.IdentityId = IdentityId;
    this.IsClient = IsClient;
}
//身份验证类（请求）
function MessageRequestClientIdentity(Body, Model, IdentityId) {
    MessageBase.call(this, StaticClientId, Body, MessageType.ClientIdentity, Model);
    this.IdentityId = IdentityId;
    this.IsClient = StaticIsClient;
    StaticIdentityId = IdentityId;
}
//数据变更类(请求)
function MessageRequestDataChanged(Body, Model, DataSourceId, DataSourceName, DataSourceDescribe) {
    MessageBase.call(this, StaticClientId, Body, MessageType.DataChanged, Model);
    this.DataSourceId = DataSourceId;
    this.DataSourceName = DataSourceName;
    this.DataSourceDescribe = DataSourceDescribe;
}
//在线用户类（请求）
function MessageRequestOnLines(Body, Model, IsContainServer) {
    MessageBase.call(this, StaticClientId, Body, MessageType.OnLines, Model);
    this.IsContainServer = IsContainServer;
}
//点到多消息类（请求）
function MessageRequestP2MP(Body, Model, SenderId, ReceiveIds) {
    MessageBase.call(this, StaticClientId, Body, MessageType.P2MP, Model);
    this.SenderId = SenderId;
    this.ReceiveIds = ReceiveIds;
}
//点到点消息类（请求）
function MessageRequestP2P(Body, Model, SenderId, ReceiveId) {
    MessageBase.call(this, StaticClientId, Body, MessageType.P2P, Model);
    this.SenderId = SenderId;
    this.ReceiveId = ReceiveId;
}
//资源类（请求）
function MessageRequestResources(Body, Model, ResourceId, ResourceName, ResourceDescribe) {
    MessageBase.call(this, StaticClientId, Body, MessageType.Resources, Model);
    this.ResourceId = ResourceId;
    this.ResourceName = ResourceName;
    this.ResourceDescribe = ResourceDescribe;
}
//订阅类（请求）
function MessageRequestSubscribe(Body, Model, Topical, Subscribe) {
    MessageBase.call(this, StaticClientId, Body, MessageType.Subscribe, Model);
    this.Topical = Topical;
    this.Subscribe = Subscribe;
}
//消息转发类（请求）
function MessageRequestTransmit(Body, Model, IsReceiveSelf, IsContainServer) {
    MessageBase.call(this, StaticClientId, Body, MessageType.Transmit, Model);
    this.IsReceiveSelf = IsReceiveSelf;
    this.IsContainServer = IsContainServer;
}
//报警类（请求）
function MessageRequestAlert(Body, Model, AlertId, AlertName, AlertDescribe) {
    MessageBase.call(this, StaticClientId, Body, MessageType.Alert, Model);
    this.AlertId = AlertId;
    this.AlertName = AlertName;
    this.AlertDescribe = AlertDescribe;
}
//响应消息基础类（响应）
function MessageResponseBase(Body, MsgType, Model, MessageSenderId) {
    MessageBase.call(this, StaticClientId, Body, MsgType, Model);
    this.MessageSenderId = MessageSenderId;
}
//报警类（响应）
function MessageResponseAlert(Body, Model, MessageSenderId, AlertId, AlertName, AlertDescribe) {
    MessageResponseBase.call(this, StaticClientId, Body, MessageType.Alert, Model, MessageSenderId);
    this.AlertId = AlertId;
    this.AlertName = AlertName;
    this.AlertDescribe = AlertDescribe;
}
//数据变更类（响应）
function MessageResponseDataChanged(Body, Model, MessageSenderId, DataSourceId, DataSourceName, DataSourceDescribe) {
    MessageResponseBase.call(this, StaticClientId, Body, MessageType.DataChanged, Model, MessageSenderId);
    this.DataSourceId = DataSourceId;
    this.DataSourceName = DataSourceName;
    this.DataSourceDescribe = DataSourceDescribe;
}
//资源类（响应）
function MessageResponseResources(Body, Model, MessageSenderId, ResourceId, ResourceName, ResourceDescribe) {
    MessageResponseBase.call(this, StaticClientId, Body, MessageType.DataChanged, Model, MessageSenderId);
    this.ResourceId = ResourceId;
    this.ResourceName = ResourceName;
    this.ResourceDescribe = ResourceDescribe;
}
//身份验证(响应)
function MessageResponseClientIdentity(Body, Model, MessageSenderId, IsUserConnentExites) {
    MessageResponseBase.call(this, StaticClientId, Body, MessageType.DataChanged, Model, MessageSenderId);
    this.IsUserConnentExites = IsUserConnentExites;
}
//在线用户类(响应)
function MessageResponseOnLines(Body, Model, MessageSenderId, AllOnLines) {
    MessageResponseBase.call(this, StaticClientId, Body, MessageType.DataChanged, Model, MessageSenderId);
    this.AllOnLines = AllOnLines;
}
//订阅类(响应)
function MessageResponseSubscribe(Body, Model, MessageSenderId, Topical, Subscribe, AllTopicals) {
    MessageResponseBase.call(this, StaticClientId, Body, MessageType.DataChanged, Model, MessageSenderId);
    this.Topical = Topical;
    this.Subscribe = Subscribe;
    this.AllTopicals = AllTopicals;
}

//全局socket对象
var webClientSocket;
var WsUrl = '';
//判断字符串是否是json格式
function IsJSON(str) {
    if (typeof str === 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj === 'object' && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log("断字符串是否是json格式", e.message);
            return false;
        }
    }
    return false;
}
let timers = new Map();
let isConnected = false
let handles = []
//开始连接
function Connent(wsurl,identityId,handle, body) {
    try {
        // let wsurl ='ws://192.168.28.223:6002/MessageBusService'
        var webSocket = new WebSocket(wsurl);

        webClientSocket = webSocket;
        StaticIdentityId = identityId;
        WsUrl = wsurl;
        webSocket.onopen = function () {
            clearAllTimers()
            WebsocketStateChangedEventFire('websocket open');
            
            //SendMessageRequestClientIdentity(identityId, ControlModel.Nomal, identityId);
            //开启连接监听程序
            ReConnentInterval = setInterval(function () {
                ResetConnent(body,handle);
            }, 5000);
        };
        webSocket.onmessage = function (msg) {
            MessageReceivedEventFire(msg.data);
            //如果是json格式
            if (IsJSON(msg.data)) {
                try {
                    var received = JSON.parse(msg.data);
                    
                    switch (received.mgtype) {
                        case MessageType.Alert:
                            AlertEventFire(received);
                            break;
                        case MessageType.ClientIdentity:
                            // StaticIdentityId = received.MessageSenderId;
                            //StaticIsClient = received.IsClient;
                            ClientIdentityEventFire(received);
                            if (received.IsUserConnentExites) {
                                DisConnent();
                            } 
                            // else {
                            //     SendMessageRequestSubscribe(body, ControlModel.Nomal, 'dymic subscribe', SubscribeType.Subscribe);
                            // }
                            break;
                        case MessageType.ConnectReply:
                            // StaticClientId = received.ClientId;
                            // //如果用户标记为空则将客户端标记
                            // if (StaticIdentityId === '') {
                            //     StaticIdentityId = StaticClientId;
                            // }
                            //发送身份验证
                            SendMessageRequestClientIdentity(body, ControlModel.Nomal, identityId);
                            break;
                        case MessageType.DataChanged:
                            DataChangedEventFire(received);
                            break;
                        case MessageType.OnLines:
                            GetOnlinesEventFire(received);
                            break;
                        case MessageType.RealTime:
                        case MessageType.LwdRealTime:
                        case MessageType.INCRealTime:
                            RealTimeEventFire(received);
                            break;
                        case MessageType.Resources:
                            ResourcesEventFire(received);
                            break;
                        case MessageType.Subscribe:

                            SubscribeEventFire(received);
                            break;
                        case MessageType.ProgressState:
                            ProgressStateEventFire(received);
                            break;
                            case MessageType.WellRefresh:
                                WellRefreshEventFire(received);
                                break;
                           case MessageType.WellTypeRefresh:
                            WellTypeRefreshEventFire(received);
                                break;
                            case MessageType.DownLoadProgress:

                                DownLoadProgressEventFire(received);
                                break;
                                case MessageType.SystemNotice:
                                    handles.forEach(item=>{
                                        item()
                                    })
                                    // SystemNoticeEventFire(received);
                                    break;
                        case MessageType.P2P:
                        case MessageType.P2MP:
                            P2PEventFire(received);
                            break;
                        case MessageType.Message:
                        case MessageType.Transmit:
                        case MessageType.Transmit_Server:
                        case MessageType.BroadCast:
                        default:
                            MessageEventFire(received);
                            break;
                    }
                } catch (e) {
                    MessageErrorEventFire('MessageError.error:' + e.message);
                }
            }
        };
        webSocket.onclose = function () {
            handles=[]
            webClientSocket = null;
            
            //CloseIntervalFunction();
            WebsocketStateChangedEventFire('websocket close');
            
            return false;
        };
        webSocket.onerror = function () {
           
            webClientSocket = null;
            //CloseIntervalFunction();
            //alert("websocket open exception.result: server stop or wsurl error or network error");
            WebsocketStateChangedEventFire(
                'websocket open exception.result: server stop or wsurl error or network error'
            );
            return false;
        };
    } catch (exception) {
       
        clearAllTimers()
        webClientSocket = null;
        //CloseIntervalFunction();
        //alert("websocket open exception.result:" + exception.Message);
        WebsocketStateChangedEventFire('websocket open exception.result:' + exception.Message);
        return false;
    }
    return true;
}
function initTimer(handle) {
    let timerId = setInterval(function () {
        if (isConnected) {
            clearInterval(timerId);
            timers.delete(handle);
        } else {
            handle();
        }
    }, 10000);
    timers.set(handle, timerId);
}
//自动重连标记
var ReConnentInterval;
//关闭重连功能
function CloseIntervalFunction() {
    if (ReConnentInterval !== null) {
        clearInterval(ReConnentInterval);
        ReConnentInterval = null;
    }
}
//关闭连接
function DisConnent() {
    handles=[]
    clearAllTimers()
    DisIntalConnent(true);
}
// 清空所有定时器
function clearAllTimers() {
    timers.forEach((timerId, handle) => {
        clearInterval(timerId);
    });
    timers.clear();
}
//关闭连接（系统重连5秒检测连接状态）
function DisIntalConnent(userclose) {
    if (userclose === true) {
        CloseIntervalFunction();
        // console.log("关闭重连 DisIntalConnent");
    }
    if (webClientSocket !== null) {
        try {
            webClientSocket.close();
            // console.log("关闭连接 DisIntalConnent");
        } catch (ex) {
            // alert("close error:" + ex.message);
            // console.log("关闭连接 DisIntalConnent error", ex.message);
        }
        webClientSocket = null;
    }
    ClearList()
}
function ClearList() {
    MessageReceivedEventList = []
}
//重启连接
function ResetConnent(body,handle) {
    if (webClientSocket === null || !(webClientSocket.readyState === 0 || webClientSocket.readyState === 1)) {
        DisIntalConnent(false);
        if (WsUrl !== null) {
            CloseIntervalFunction()
            Connent(WsUrl, StaticIdentityId,handle, body);
        }
        //sleep(5000);
    }
    return true;
}
//查询是否连接
function IsConnect() {
    if (webClientSocket !== null && webClientSocket.readyState === 1) return true;
    return false;
}
//延迟多少毫秒
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    var loop = true;
    while (loop === true) {
        now = new Date();
        if (now.getTime() > exitTime) return;
    }
}
//发送消息
function SendMessage(data) {
    if (IsConnect()) {
        webClientSocket.send(data);
    } else {
        //alert("websocket is not open");
        SendMesageEventFire('websocket is not open');
    }
}
//发送基础消息
function SendMessageBase(Body, MgType, Model) {
    try {
        var Requestbase = new MessageBase(StaticClientId, Body, MgType, Model);
        var data = JSON.stringify(Requestbase);
        SendMessage(data);
    } catch (ex) {
        //alert("SendMessageBase failed.error:" + ex.Message);
        SendMesageEventFire('SendMessageBase failed.error:' + ex.Message);
    }
}
//发送身份验证消息
function SendMessageRequestClientIdentity(Body, Model, IdentityId) {
    try {
        var RequestClientIdentity = new MessageRequestClientIdentity(Body, Model, IdentityId);
        var data = JSON.stringify(RequestClientIdentity);
        SendMessage(data);
    } catch (ex) {
        //alert("SendMessageRequestClientIdentity failed.error:" + ex.Message);
    
        SendMesageEventFire('SendMessageRequestClientIdentity failed.error:' + ex.Message);
    }
}
//发送数据变更消息
function SendMessageRequestDataChanged(Body, Model, DataSourceId, DataSourceName, DataSourceDescribe) {
    try {
        var RequestDataChanged = new MessageRequestDataChanged(
            Body,
            Model,
            DataSourceId,
            DataSourceName,
            DataSourceDescribe
        );
        var data = JSON.stringify(RequestDataChanged);
        SendMessage(data);
    } catch (ex) {
        // alert("SendMessageRequestDataChanged failed.error:" + ex.Message);
        SendMesageEventFire('SendMessageRequestDataChanged failed.error:' + ex.Message);
    }
}
//发送在线用户消息
function SendMessageRequestOnLines(Body, Model, IsContainServer) {
    try {
        var RequestOnLines = new MessageRequestOnLines(Body, Model, IsContainServer);
        var data = JSON.stringify(RequestOnLines);
        SendMessage(data);
    } catch (ex) {
        //alert("SendMessageRequestOnLines failed.error:" + ex.Message);
        SendMesageEventFire('SendMessageRequestOnLines failed.error:' + ex.Message);
    }
}
//发送一对多消息
function SendMessageRequestP2MP(Body, Model, SenderId, ReceiveIds) {
    try {
        var RequestP2MP = new MessageRequestP2MP(Body, Model, SenderId, ReceiveIds);
        var data = JSON.stringify(RequestP2MP);
        SendMessage(data);
    } catch (ex) {
        //alert("SendMessageRequestP2MP failed.error:" + ex.Message);
        SendMesageEventFire('SendMessageRequestP2MP failed.error:' + ex.Message);
    }
}
//发送一对一消息
function SendMessageRequestP2P(Body, Model, SenderId, ReceiveId) {
    try {
        var RequestP2P = new MessageRequestP2P(Body, Model, SenderId, ReceiveId);
        var data = JSON.stringify(RequestP2P);
        SendMessage(data);
    } catch (ex) {
        //alert("SendMessageRequestP2P failed.error:" + ex.Message);
        SendMesageEventFire('SendMessageRequestP2P failed.error:' + ex.Message);
    }
}
//发送资源消息
function SendMessageRequestResources(Body, Model, ResourceId, ResourceName, ResourceDescribe) {
    try {
        var RequestResources = new MessageRequestResources(Body, Model, ResourceId, ResourceName, ResourceDescribe);
        var data = JSON.stringify(RequestResources);
        SendMessage(data);
    } catch (ex) {
        // alert("SendMessageRequestResources failed.error:" + ex.Message);
        SendMesageEventFire('SendMessageRequestResources failed.error:' + ex.Message);
    }
}
//发送订阅消息
function SendMessageRequestSubscribe(Body, Model, Topical, Subscribe) {
    try {
        var RequestSubscribe = new MessageRequestSubscribe(Body, Model, Topical, Subscribe);
        var data = JSON.stringify(RequestSubscribe);
        SendMessage(data);
    } catch (ex) {
        //alert("SendMessageRequestSubscribe failed.error:" + ex.Message);
        SendMesageEventFire('SendMessageRequestSubscribe failed.error:' + ex.Message);
    }
}
//发送转发消息
function SendMessageRequestTransmit(Body, Model, IsReceiveSelf, IsContainServer) {
    try {
        var RequestTransmit = new MessageRequestTransmit(Body, Model, IsReceiveSelf, IsContainServer);
        var data = JSON.stringify(RequestTransmit);
        SendMessage(data);
    } catch (ex) {
        //alert("SendMessageRequestTransmit failed.error:" + ex.Message);
        SendMesageEventFire('SendMessageRequestTransmit failed.error:' + ex.Message);
    }
}
//发送报警消息
function SendMessageRequestAlert(Body, Model, AlertId, AlertName, AlertDescribe) {
    try {
        var RequestAlert = new MessageRequestAlert(Body, Model, AlertId, AlertName, AlertDescribe);
        var data = JSON.stringify(RequestAlert);
        SendMessage(data);
    } catch (ex) {
        //alert("SendMessageRequestAlert failed.error:" + ex.Message);
        SendMesageEventFire('SendMessageRequestAlert failed.error:' + ex.Message);
    }
}
//发送广播
function SendMessageBroadCast(Body, Model) {
    SendMessageBase(Body, MessageType.BroadCast, Model);
}
//发送实时数据
function SendMessageRealTime(Body, Model) {
    SendMessageBase(Body, MessageType.RealTime, Model);
}
//发送实时服务之间转发
function SendMessageTransmitServer(Body, Model) {
    SendMessageBase(Body, MessageType.Transmit_Server, Model);
}
//发送服务处理进度消息
function SendMessageProgressState(Body, Model) {
    SendMessageBase(Body, MessageType.ProgressState, Model);
}
//发送其他消息
function SendMessageOther(Body, Model) {
    SendMessageBase(Body, MessageType.Message, Model);
}

/**
 * 事件的发送处理
 */
//目标事件类定义
function EventTarget() {
    this.handlers = {};
}
//目标事件属性定义
EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function (type, handler) {
        if (typeof this.handlers[type] === 'undefined') {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this;
        }
        if (this.handlers[event.type] instanceof Array) {
            const handlers = this.handlers[event.type];
            //handlers.forEach((handler)=>{
            //    handler(event);
            //})
            for (var i = 0, len = handlers.length; i < len; i++) {
                handlers[i](event);
            }
        }
    },
    removeHandler: function (type, handler) {
        if (this.handlers[type] instanceof Array) {
            const handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i] === handler) {
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }
};
//消息定义全局变量
var MessageReceivedEvent;
let MessageReceivedEventList = []
//设置消息定义全局变量
function SetEventTarget(eventTarget) {
    MessageReceivedEventList.push(eventTarget)
}
function SetTreeEventTarget(eventTarget) {
    MessageReceivedEvent = eventTarget;
}
//消息触发
function MessageReceivedfire(eventtarget, typename, message) {
    try {
        eventtarget.fire({ type: typename, message: message });
    } catch (e) {
        console.log("MessageReceivedfire", e.message);
    }
}
//身份验证事件
function ClientIdentityEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'ClientIdentityEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'ClientIdentityEvent', message);
    })
}
//报警消息事件
function AlertEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'AlertEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'AlertEvent', message);
    })
}
//消息事件
function MessageEventFire(message) {
    
    if (MessageReceivedEvent) {
        
        MessageReceivedfire(MessageReceivedEvent, 'MessageEvent', message);
    }
    //实时数据
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'MessageEvent', message);
    })
}
//数据变更事件
function DataChangedEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'DataChangedEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'DataChangedEvent', message);
    })
}
//数据变更事件
function P2MPEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'P2MPEventEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'P2MPEventEvent', message);
    })
}
//资源变更事件
function ResourcesEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'ResourcesEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'ResourcesEvent', message);
    })
}
//获取在线用户事件
function GetOnlinesEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'GetOnlinesEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'GetOnlinesEvent', message);
    })
}
//订阅事件
function SubscribeEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'SubscribeEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'SubscribeEvent', message);
    })
}
//后端服务处理进度事件
function ProgressStateEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'ProgressStateEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'ProgressStateEvent', message);
    })
}
//井位刷新事件
function WellRefreshEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'WellRefreshEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'WellRefreshEvent', message);
    })
}

function WellTypeRefreshEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'WellTypeRefreshEventFire', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'WellTypeRefreshEventFire', message);
    })
}
//下载进度事件
function DownLoadProgressEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'DownLoadProgressEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'DownLoadProgressEvent', message);
    })
}
//系统通知事件
function SystemNoticeEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'RealTimeEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'RealTimeEvent', message);
    })
}
//实时数据通知服务
function RealTimeEventFire(message) {
    //树结构
    // console.log("RealTimeEventFire 实时数据通知服务",message,"____",MessageReceivedEventList);
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'RealTimeEvent', message);
    }
    //实时数据
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'RealTimeEvent', message);
    })
}
//所有事件消息
function MessageReceivedEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'MessageReceivedEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'MessageReceivedEvent', message);
    })
}
//发送消息错误事件
function SendMesageEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'SendMessageErrorEvent', message);
    }  
     MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'SendMessageErrorEvent', message);
    })
}
//消息接收处理异常事件
function MessageErrorEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'MessageErrorEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'MessageErrorEvent', message);
    })
}
//客户端连接状态
function WebsocketStateChangedEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'WebsocketStateChangedEvent', message);
    } 
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'WebsocketStateChangedEvent', message);
    })
}
//P2P群组事件
function P2PEventFire(message) {
     if (MessageReceivedEvent) {
        MessageReceivedfire(MessageReceivedEvent, 'P2PEvent', message);
    }
    MessageReceivedEventList.forEach(item => {
        MessageReceivedfire(item, 'P2PEvent', message);
    })
}
export {
    Connent,
    SetEventTarget,
    SetTreeEventTarget,
    EventTarget,
    SendMessageRealTime,
    DisConnent,
    SendMessageRequestOnLines,
    SendMessageRequestP2MP,
    ClearList
};