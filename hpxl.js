[rewrite_local]

^https:\/\/openmobile\.qq.com\/oauth2\.0\/m_get_redirect_url url script-response-body https://raw.githubusercontent.com/lianghl0717/scan_login/main/hpxl.js

[mitm] 

hostname = openmobile.qq.com

$done(`_Callback({"ret":0,"url":"auth://www.qq.com?#access_token=C5EB0F50AC7338D29A8425DA86E90755&expires_in=7776000&openid=2C66675250AE0FC00632AE7F734715CE&pay_token=683549F9AA55D03883BA63F8E86EDA23&state=test&ret=0&pf=openmobile_ios&pfkey=a9ca28439f71c373ded4090d24455465&auth_time=1672845708&page_type=0"});`);