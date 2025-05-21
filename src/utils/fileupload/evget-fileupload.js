import SparkMD5 from "spark-md5";
import $ from "jquery";
import { Session } from '/@/utils/storage';
// import {getDesEncrypt} from '/@/des/crypt/descrypt';
import { checkErrCode } from '/@/plugins/axios/error.ts';
//Evget_Tom 2022-5-13 21:00
/*---------------------------------------设置服务连接URL--------------------------*/
var rooturl = "";
//循环上传AJAX服务URL
var UpLoadMasterUrl =
  rooturl + "/v1.0/api/filemanager/other/uploadfilechunk";
//并发上传AJAX服务URL
var UpLoadParallelUrl =
  rooturl + "/v1.0/api/filemanager/other/uploadfilechunkparallel";
//被传输的文件检查URL
var FileServerCheckUrl =
  rooturl + "/v1.0/api/filemanager/list/getcheckserverfilebyfilemd5";
//断点续传服务检查URL
var FileSequelCheckUrl =
  rooturl + "/v1.0/api/filemanager/list/getcheckserverfilepartbyfilemd5";
//令牌
var AccessToken = Session.get("token");
//文件分片大小XMB。默认为2M
var FileChunkSizeMb = 2;

/*---------------------------------------定义事件--------------------------*/
/**
 * 事件的发送处理
 */
//目标事件类定义
export function EventTarget() {
  this.handlers = {};
}
//目标事件属性定义
EventTarget.prototype = {
  constructor: EventTarget,
  addHandler: function (type, handler) {
    if (typeof this.handlers[type] === "undefined") {
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
  },
};
//消息定义全局变量
var MessageEvent;
//设置消息定义全局变量
export function SetEventTarget(eventTarget) {
  MessageEvent = eventTarget;
}
//消息触发
function Messagefire(eventtarget, typename, message) {

  eventtarget.fire({ type: typename, message: message });
}

//本地服务上传文件服务返回检查事件触发
function FileServerExsiteEventFire(message) {
  if (MessageEvent !== null) {
    Messagefire(MessageEvent, "FileServerExsiteEvent", message);
  }
}

function FileIsExit(message) {
  if (MessageEvent !== null) {
    Messagefire(MessageEvent, "FileIsExit", message);
  }
}
//本地文件MD计算MD5进度
function FileCalcMd5ProcessEventFire(message) {
  if (MessageEvent !== null) {
    Messagefire(MessageEvent, "FileCalcMd5ProcessEvent", message);
  }
}
//文件MD5生成
function FileMd5FinshEventFire(message) {
  if (MessageEvent !== null) {
    Messagefire(MessageEvent, "FileMd5FinshEvent", message);
  }
}
//文件分片上传进度服务返回信息
function FileUploadProcessEventFire(message) {
  if (MessageEvent !== null) {
    Messagefire(MessageEvent, "FileUploadProcessEvent", message);
  }
}
//文件分片上传完成服务信息
function FileUploadFinshEventFire(message) {
  if (MessageEvent !== null) {
    Messagefire(MessageEvent, "FileUploadFinshEvent", message);
  }
}
//文件上传错误
function FileErrorEventFire(message) {
  if (MessageEvent !== null) {
    Messagefire(MessageEvent, "FileErrorEvent", message);
  }
}
//接口调用成功回调
function InterfaceCallBack(message) {
  if (MessageEvent !== null) {
    Messagefire(MessageEvent, "CallBackEvent", message);
  }
}
/*---------------------------------------调用上传方法主函数--------------------------*/
//上传多文件(主函数接口)
export function UpLoadFiles(targetFiles, fileMd5Check, ismulthead) {
  for (var index = 0; index < targetFiles.length; index++) {

    CalculateFileMd5Sync(targetFiles[index]).then(function (fileInfo) {
     
      UpLoadFileMd5(
        fileInfo.file,
        fileInfo.filemd5,
        fileInfo.fileChunks,
        fileMd5Check,
        ismulthead
      );
    });
  }
}

//本地文件计算MD5后，上传文件处理
/*
 * file:文件对象
 * filemd5:计算后的MD5
 * filecheck：是否检查服务文件和断点续传(推荐为true)
 * multethread：是否多线程上传（推荐值为false)
 */
function UpLoadFileMd5(file, filemd5, fileChunks, filecheck, multethread) {
 
  if (filecheck == true) {
    //检查服务文件是否存在，并且检查短点续传功能
    UpLoadFileCheckAjax(file, filemd5, fileChunks, multethread);
  } else {
    if (multethread == true) {
      //开始分段上传文件(多线程)
      UploadFile(file, filemd5, fileChunks);
    } else {
      //分段上传顺序处理（不处理分段检查结果，全部上传处理)
      UpLoadFileSequence(file, filemd5, fileChunks, 0);
    }
  }
}

/*---------------------------------------计算本地上传文件的MD5--------------------------*/
//计算本地文件MD5码(异步转同步等待)
export function CalculateFileMd5Sync(file, isDown = false) {
  return new Promise(function (resolve, reject) {
    //创建文件分片缓存区
    var fileChunks = [];
    var fileReader = new FileReader();
    var blobSlice =
      File.prototype.mozSlice ||
      File.prototype.webkitSlice ||
      File.prototype.slice,
      // read in chunks of 2MB
      chunkSize = FileChunkSizeMb * 1024 * 1024,
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMD5();
    fileReader.onload = function (e) {
      //计算分片MD5
      var chunkspark = new SparkMD5();
      chunkspark.appendBinary(e.target.result); // append binary string
      var chunkmd5 = chunkspark.end();
      var startpos = currentChunk * chunkSize;
      var endpos =
        startpos + chunkSize >= file.size ? file.size : startpos + chunkSize;
      var fileChunkInfo = {
        file: file.slice(startpos, endpos),
        start: startpos,
        end: endpos,
        filemd5: chunkmd5,
        bufferSize: endpos - startpos,
      };
      fileChunks.push(fileChunkInfo);
      //发送生成MD5事件对象
      var json = {};
      json.filename = file.name;
      json.chunk = currentChunk + 1;
      json.chunks = chunks;
      FileCalcMd5ProcessEventFire(json);
      spark.appendBinary(e.target.result); // append binary string
      currentChunk++;
      if (currentChunk < chunks) {
        loadNext();
      } else {
        var filemd5 = spark.end();
        //发送生成文件MD5码结果
        var jsonresult = {};
        jsonresult.filename = file.name;
        jsonresult.filemd5 = filemd5;
        jsonresult.size = file.size
        jsonresult.chunks = chunks;
        if (!isDown) {

          FileMd5FinshEventFire(jsonresult);
        }
        //返回信息
        var fileInfo = {
          file: file,
          filemd5: filemd5,
          fileChunks: fileChunks,
        };
        resolve(fileInfo);
      }
    };
    fileReader.onerror = function () {
      var fileInfo = {
        file: file,
        filemd5: "",
        fileChunks: fileChunks,
      };
      reject(fileInfo);
    };
    function loadNext() {
      var start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize;
      fileReader.readAsBinaryString(blobSlice.call(file, start, end));
    }
    loadNext();
  });
}

/*---------------------------------------单文件上传服务检查--------------------------*/
//上传文件检查
function UpLoadFileCheckAjax(file, filemd5, fileChunks, multethread) {
  AccessToken = Session.get("token");
  var data = {};
  //data.append("file", chunk.file, chunk.filePartName);
  var urlParameter =
    "filemd5=" +
    filemd5 +
    "&access_token=" +
    AccessToken +
    "&filename=" +
    encodeURIComponent(file.name);
  $.ajax({
    url: FileServerCheckUrl + "?" + urlParameter,
    type: "post",
    cache: false,
    contentType: false,
    processData: false,
    data: data,
    beforeSend: function (xhr) {
      var username = 'nAuBJUwQs6lDG9AnTd8kJg==';
      var password = 'mH2jfJS7ywx2vSlZ0mrwGw==';
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
      
      // xhr.setRequestHeader('FileCalibrateType', getDesEncrypt(file.name));
    },
    success: function (sucessinfo) {
      if(sucessinfo.errcode){
        checkErrCode(sucessinfo.errcode,Session.get('language'),sucessinfo)
        return
      }
      InterfaceCallBack(sucessinfo);
      try {

        var checkresult = JSON.parse(sucessinfo);
        if (checkresult.isserveresite == true) {
          //服务已经存在该文件
          FileServerExsiteEventFire(checkresult);
        } else if (checkresult.sizzleedtargetname&&checkresult.sizzleedtargetname != '') {
          FileIsExit(checkresult);

        } else {
          if (multethread == true) {
            //开始分段上传文件(多线程)
            UploadFile(file, filemd5, fileChunks);
          } else {
            UpLoadFileCheckPartNumberAjax(file, filemd5, fileChunks);
          }
        }
      } catch {
        var json = {};
        json.filemd5 = filemd5;
        json.filename = file.name;
        json.errortype = "check_file";
        FileErrorEventFire(json);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      InterfaceCallBack(jqXHR, textStatus, errorThrown);
      var json = {};
      json.filemd5 = filemd5;
      json.filename = file.name;
      json.errortype = "check_file";
      FileErrorEventFire(json);
    },
  });
}

//循环处理已传输的文件检查
function UpLoadFileCheckPartNumberAjax(file, filemd5, fileChunks) {
  AccessToken = Session.get("token");
  var data = new FormData();
  //data.append("file", chunk.file, chunk.filePartName);
  var urlParameter =
    "filemd5=" +
    filemd5 +
    "&access_token=" +
    AccessToken +
    "&filename=" +
    encodeURIComponent(file.name);
  $.ajax({
    url: FileSequelCheckUrl + "?" + urlParameter,
    type: "post",
    cache: false,
    contentType: false,
    processData: false,
    data: data,
    beforeSend: function (xhr) {
      var username = 'nAuBJUwQs6lDG9AnTd8kJg==';
      var password = 'mH2jfJS7ywx2vSlZ0mrwGw==';
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
    },
    success: function (sucessinfo) {if(sucessinfo.errcode){
       checkErrCode(sucessinfo.errcode,Session.get('language'),sucessinfo)
      return
    }
      InterfaceCallBack(sucessinfo);
      try {
        var checkresult = JSON.parse(sucessinfo);
        var partNumber = checkresult.partnumber;
        //分段上传顺序处理
        UpLoadFileSequence(file, checkresult.filemd5, fileChunks, partNumber);
      } catch {
        var json = {};
        json.filemd5 = filemd5;
        json.filename = file.name;
        json.errortype = "checkpart_file";
        FileErrorEventFire(json);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      var json = {};
      json.filemd5 = filemd5;
      json.filename = file.name;
      json.errortype = "checkpart_file";
      FileErrorEventFire(json);
    },
  });
}
/*---------------------------------------多线程并发上传--------------------------*/
//计算上传文件的分片集合
function CalculateFileChunks(file, filemd5) {
  // 创建上传文件分片缓冲区
  var fileChunks = [];
  // 设置分片缓冲区大小(1Mb缓存)
  var maxFileSizeMB = 1;
  var bufferChunkSize = maxFileSizeMB * (1024 * 1024);
  // 读取文件流其实位置
  var fileStreamPos = 0;
  // 设置下一次读取缓冲区初始大小
  var endPos = bufferChunkSize;
  // 文件大小
  var size = file.size;
  // 将文件进行循环分片处理塞入分片数组
  while (fileStreamPos < size) {
    //最后一个按照实际情况给定内容即可
    if (endPos > size) {
      endPos = size;
    }
    var fileChunkInfo = {
      file: file.slice(fileStreamPos, endPos),
      start: fileStreamPos,
      end: endPos,
      filemd5: filemd5,
      bufferSize: endPos - fileStreamPos,
    };
    fileChunks.push(fileChunkInfo);
    fileStreamPos = endPos;
    endPos = fileStreamPos + bufferChunkSize;
  }
  return fileChunks;
}
//分段上传文件函数(多线程处理方式)
function UploadFile(file, filemd5, fileChunks) {
  // 创建上传文件分片缓冲区
  //var fileChunks = CalculateFileChunks(file, filemd5);
  // 获取上传文件分片总数量
  var totalParts = fileChunks.length;
  var partIndex = 0;
  // 总体文件大小
  var size = file.size;
  // 循环调用上传每一片
  while ((chunk = fileChunks.shift())) {
    partIndex++;
    // 上传文件命名约定
    var filePartName = file.name + ".partNumber-" + partIndex;
    chunk.filePartName = filePartName;
    // url参数
    var url =
      "partNumber=" +
      partIndex +
      "&chunks=" +
      totalParts +
      "&size=" +
      chunk.bufferSize +
      "&start=" +
      chunk.start +
      "&end=" +
      chunk.end +
      "&total=" +
      size +
      "&filemd5=" +
      filemd5 +
      "&chunkmd5=" +
      chunk.filemd5 +
      "&access_token=" +
      AccessToken;
    chunk.urlParameter = url;
    // 上传文件
    UploadFileChunkAjax(chunk, filemd5);
  }
}
//请求上传文件的API接口(多线程方式)
function UploadFileChunkAjax(chunk, filemd5) {
  AccessToken = Session.get("token");
  var data = new FormData();
  data.append("file", chunk.file, chunk.filePartName);
  $.ajax({
    url: UpLoadParallelUrl + "?" + chunk.urlParameter,
    type: "post",
    cache: false,
    contentType: false,
    processData: false,
    data: data,
    beforeSend: function (xhr) {
      var username = 'nAuBJUwQs6lDG9AnTd8kJg==';
      var password = 'mH2jfJS7ywx2vSlZ0mrwGw==';
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
    },
    success: function (sucessinfo) {if(sucessinfo.errcode){
       checkErrCode(sucessinfo.errcode,Session.get('language'),sucessinfo)
      return
    }
      InterfaceCallBack(sucessinfo);
      try {
        //转换为json对象
        var messgejson = JSON.parse(sucessinfo);
        //合并代表完成
        if (messgejson.ismerge == true) {
          FileUploadFinshEventFire(messgejson);
        }
        //否则代表进度处理
        else {
          FileUploadProcessEventFire(messgejson);
        }
      } catch {
        var json = {};
        json.filemd5 = filemd5;
        json.chunkmd5 = chunk.filemd5;
        json.filename = chunk.filePartName;
        json.errortype = "upload_multheads";
        FileErrorEventFire(json);
      }
    },
    error: function () {
      var json = {};
      json.filemd5 = filemd5;
      json.chunkmd5 = chunk.filemd5;
      json.filename = chunk.filePartName;
      json.errortype = "upload_multheads";
      FileErrorEventFire(json);
    },
  });
}

/*--------------------------------------循环上传--------------------------*/
//循环处理获取分段请求数据URL参数
function FileChunk(file, filemd5, fileChunks, partIndex, totalParts) {
  AccessToken = Session.get("token");
  var chunk = fileChunks.shift();
  // 判断是否有分段数据
  if (chunk) {
    // 总体文件大小
    var size = file.size;
    // 上传文件命名约定
    var filePartName = file.name + ".partNumber-" + partIndex;
    chunk.filePartName = filePartName;
    // url参数
    var url =
      "partNumber=" +
      partIndex +
      "&chunks=" +
      totalParts +
      "&size=" +
      chunk.bufferSize +
      "&start=" +
      chunk.start +
      "&end=" +
      chunk.end +
      "&total=" +
      size +
      "&filemd5=" +
      filemd5 +
      "&chunkmd5=" +
      chunk.filemd5 +
      "&access_token=" +
      AccessToken;
    chunk.urlParameter = url;
    return chunk;
  }
}
//循环处理上传函数调用接口
function UpLoadFileSequence(file, filemd5, fileChunks, partNumber) {
  // 创建上传文件分片缓冲区
  //var fileChunks = CalculateFileChunks(file, filemd5);
  // 获取上传文件分片总数量
  var totalParts = fileChunks.length;
  // 处理断点续传移除点
  for (var index = 0; index < partNumber; index++) {
    fileChunks.shift();
  }
  //断点续传的开始点
  var partIndex = partNumber + 1;
  var chunk = FileChunk(file, filemd5, fileChunks, partIndex, totalParts);
  UploadFileChunkSequenceAjax(
    file,
    filemd5,
    chunk,
    fileChunks,
    partIndex,
    totalParts
  );
}
//循环处理上传(AJAX)
function UploadFileChunkSequenceAjax(
  file,
  filemd5,
  chunk,
  fileChunks,
  partIndex,
  totalParts
) {
  var data = new FormData();
  data.append("file", chunk.file, chunk.filePartName);
  $.ajax({
    url: UpLoadMasterUrl + "?" + chunk.urlParameter,
    type: "post",
    cache: false,
    contentType: false,
    processData: false,
    data: data,
    beforeSend: function (xhr) {
      var username = 'nAuBJUwQs6lDG9AnTd8kJg==';
      var password = 'mH2jfJS7ywx2vSlZ0mrwGw==';
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
    },
    success: function (sucessinfo) {if(sucessinfo.errcode){
       checkErrCode(sucessinfo.errcode,Session.get('language'),sucessinfo)
      return
    }
      InterfaceCallBack(sucessinfo);
      try {
        //转换为json对象
        var messgejson = JSON.parse(sucessinfo);
        //合并代表完成
        if (messgejson.ismerge == true) {
          FileUploadFinshEventFire(messgejson);
        }
        //否则代表进度处理
        else {
          if (messgejson.issucess == true) {
            FileUploadProcessEventFire(messgejson);
            //循环处理上传
            partIndex++;
            if (partIndex <= totalParts) {
              var chunk1 = FileChunk(
                file,
                filemd5,
                fileChunks,
                partIndex,
                totalParts
              );
              UploadFileChunkSequenceAjax(
                file,
                filemd5,
                chunk1,
                fileChunks,
                partIndex,
                totalParts
              );
            }
          } else {
            var json = {};
            json.filemd5 = filemd5;
            json.chunkmd5 = chunk.filemd5;
            json.filename = chunk.filePartName;
            json.errortype = "upload_seq";
            FileErrorEventFire(json);
          }
        }
      } catch {
        var json = {};
        json.filemd5 = filemd5;
        json.chunkmd5 = chunk.filemd5;
        json.filename = chunk.filePartName;
        json.errortype = "upload_seq";
        FileErrorEventFire(json);
      }
    },
    error: function () {
      var json = {};
      json.filemd5 = filemd5;
      json.chunkmd5 = chunk.filemd5;
      json.filename = chunk.filePartName;
      json.errortype = "upload_seq";
      FileErrorEventFire(json);
    },
  });
}
