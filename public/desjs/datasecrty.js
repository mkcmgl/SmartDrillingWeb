///获取请求数据（明文请求）
function GetRealDataByRequest(requestPlaindata) {
  return GetEncrtyDataOrRealDataByRequest(requestPlaindata, false, 0);
}
//获取请求数据（密文请求）
///encrytype请求加密方式 0：不加密，1：DES加密，2：DES后数据压缩+base64加密 3：数据压缩+base64后DES加密
function GetEncrtyDataByRequest(requestPlaindata, encrytype, key, iv) {
  return GetEncrtyDataOrRealDataByRequest(
    requestPlaindata,
    true,
    encrytype,
    key,
    iv
  );
}
//获取加密数据
//请求服务CONTENT方法请调用该方法
///requestPlaindata:明文json字符串
///usesdEncryt:true：启用请求加密,false:关闭请求加密
///encrytype请求加密方式，usesdEncryt:true有效 0：不加密，1：DES加密，2：DES后数据压缩+base64加密 3：数据压缩+base64后DES加密
///返回统一密文JSON格式的处理请求或正常的JSON数据请求
function GetEncrtyDataOrRealDataByRequest(
  requestPlaindata,
  usesdEncryt,
  encrytype,
  key,
  iv
) {
  usesdEncryt = usesdEncryt.toString();
  if (usesdEncryt == "true") {
    //新发送JSON对象
    var jsonnew = {};
    var isEncry = false;
    jsonnew.encrytype = encrytype;
    jsonnew.accesstoken = JSON.parse(requestPlaindata).access_token;
    var requestEncrtyData = requestPlaindata;
    switch (encrytype) {
      case 1:
        //DES加密
        requestEncrtyData = getDesEncryptString(requestPlaindata, key, iv);
        isEncry = true;
        break;
      case 2:
        //DES加密
        var encrydata = getDesEncryptString(requestPlaindata, key, iv);
        //对加密后的数据进行压缩
        requestEncrtyData = Base64.toBase64(
          RawDeflate.deflate(Base64.utob(encrydata))
        );
        isEncry = true;
        break;
      case 3:
        //DES加密
        var compressdata = Base64.toBase64(
          RawDeflate.deflate(Base64.utob(requestPlaindata))
        );
        //对加密后的数据进行压缩
        requestEncrtyData = getDesEncryptString(compressdata, key, iv);
        isEncry = true;
        break;
    }
    //开启是否加密
    jsonnew.isencry = isEncry;
    //json对象自动创建KEY值data.VALUE值是经过加密的字符串
    jsonnew.data = requestEncrtyData;
    //将发送JSON对象转换为字符串
    var newjsonstr = JSON.stringify(jsonnew);
    return newjsonstr;
  } else {
    return requestPlaindata;
  }
}

//获取解密数据
//responseCipherdata 密文JSON格式统一标准对象
//返回明文JSON数据
function GetDecryptDataByResponse(responseCipherdata, key, iv) {
  //统一返回的JSON数据格式（加密）并转换为对象
  var responsejson = JSON.parse(responseCipherdata);
  try {
    var newjsonstr = "";
    if (responsejson.isencry || responsejson.isuseddataencryption) {
      var method = responsejson.encrytype;
      if (method == undefined) {
        method = responsejson.dataencryptioninfo.encrymethod;
      }
      // var method =
      //   responsejson.encrydata == undefined
      //     ? responsejson.dataencryptioninfo.encrymethod
      //     : responsejson.encrytype;
      //判断统一返回的JSON数据格式加密类型
      switch (method) {
        case 0:
        default:
          newjsonstr = responsejson.data;
          break;
        case 1:
          newjsonstr = getDesDecryptString(responsejson.data, key, iv);
          break;
        case 2:
          var comprssdata = Base64.btou(
            RawDeflate.inflate(Base64.fromBase64(responsejson.data))
          );
          newjsonstr = getDesDecryptString(comprssdata, key, iv);
          break;
        case 3:
          var decrydata = getDesDecryptString(responsejson.data, key, iv);
          newjsonstr = Base64.btou(
            RawDeflate.inflate(Base64.fromBase64(decrydata))
          );
          break;
      }
    } else {
      newjsonstr = responsejson.data;
    }
    var realresponsejson = JSON.parse(newjsonstr);
    var realresponsestr = JSON.stringify(realresponsejson);
    return realresponsestr;
  } catch (err) {
    return responseCipherdata;
  }
}

//请求JSON对象返回JSON对象
function getServerRespones(res, key, iv) {
  var respnse = res;
  if (res.isuseddataencryption || res.isencry) {
    var ss = JSON.stringify(res);
    respnse = JSON.parse(GetDecryptDataByResponse(ss, key, iv));
  }
  return respnse;
}
//POST请求JSON返回JSON
function GetRequestJson(requestjson, usesdEncryt, encrytype, key, iv) {
  var requestPlaindata = JSON.stringify(requestjson);
  return JSON.parse(
    GetEncrtyDataOrRealDataByRequest(
      requestPlaindata,
      usesdEncryt,
      encrytype,
      key,
      iv
    )
  );
}
