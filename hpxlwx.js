/******************************

[rewrite_local]
^https:\/\/long\.open\.weixin\.qq\.com\/connect\/l\/qrconnect url script-response-body https://raw.githubusercontent.com/lianghl0717/scan_login/main/hpxlwx.js

[mitm] 
hostname = long.open.weixin.qq.com

*******************************/

var obj = "window.wx_errcode=405;window.wx_redirecturl='wxc4c0253df149f02d://oauth?code=021UcB000EuKcP1Hvt100BC4no1UcB05&state=weixin';window.wx_nickname='LLLL😶';";
obj = '{"wx_errcode":405, "wx_code":"091eb1000tCkdP12la400PVq2u1eb100"}'
$done(obj);