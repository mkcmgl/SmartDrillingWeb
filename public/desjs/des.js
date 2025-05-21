//8λ��DES�ӽ���Key
var key = "EGCNPCV1";
//8λ��DES�ӽ���IV
var iv = "CNPCV1EG";

//����DES�����㷨�����ص���base64��ʽ������
function getDesEncryptString(data, key, iv) {
  var key = CryptoJS.enc.Utf8.parse(key);
  var iv = CryptoJS.enc.Utf8.parse(iv);
  var encrypted = CryptoJS.DES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}
//����DES�����㷨����������
function getDesDecryptString(encrypted, key, iv) {
  var key = CryptoJS.enc.Utf8.parse(key);
  var iv = CryptoJS.enc.Utf8.parse(iv);
  var decrypted = CryptoJS.DES.decrypt(encrypted, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

// ECB模式加密
function getDesEncryptStringECB(data, key) {
  var key = CryptoJS.enc.Utf8.parse(key);
  var encrypted = CryptoJS.DES.encrypt(data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}
// ECB模式解密
function getDesDecryptStringECB(encrypted, key) {
  var key = CryptoJS.enc.Utf8.parse(key);
  var decrypted = CryptoJS.DES.decrypt(encrypted, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
//�����ṩDES���ܺ���
function getDesEncrypt(data) {
  var encrypted = getDesEncryptString(data, key, iv);
  return encrypted;
}
//�����ṩDES���ܺ���
function getDesDecrypt(data) {
  var decryptedStr = getDesDecryptString(data, key, iv);
  return decryptedStr;
}