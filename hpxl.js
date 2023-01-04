
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://openmobile.qq.com/oauth2.0/m_get_redirect_url?keystr=DCB83B69687242A5171954D4A5CCDFF1B14A2FA0BE7E309BFD92F40866BCDAFB487C7DA46728C7D36E2AE4BDF5DD67C37B85AF1248E0A3CFD336770C3B2C7A31506B3AF266BF11B6CB1DBBBB56CBC258DBF12FE6F7F7CD9DD01ADE4A7618C8822E7FA16D7454BDB32CF41A9CE638C18CEEE457D7C54A57503AC6F39DE7E28AE2D738AD40150D559C8BCD59D6EB29E634FCBBCB37D599F171A7A5219A3AF4447B0666EFA3AC02D93B43352514B8505F1EED4A8F88518E1CEEB88E3280CFC8E9E697B973FF53F084DE70E81172B076B4EDE3D67F9DE84DEFCB1569F8FCF482E485D290B53CC47B0BF53BFB6D60AA99A82860AC4D3E65481E75AD308A6B4113D25ED77F5CF08D69F7D34BA1E4A11D8AE037D83C2F01230E9AE62221CD94CA403D29430FC785FB4C20732829E11163C97EE6`;
const method = `GET`;
const headers = {
'Cookie' : `ui=5FA8FF64-971B-4E78-A9CD-276973AD6BCE; idt=1672845642; pgv_pvid=8709079480`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Referer' : `https://imgcache.qq.com/open/connect/widget/mobile/login/proxy.htm?`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `openmobile.qq.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    response.body = `_Callback(
{"ret":0,
"url":"auth://www.qq.com?#access_token=C5EB0F50AC7338D29A8425DA86E90755&expires_in=7776000&openid=2C66675250AE0FC00632AE7F734715CE&pay_token=683549F9AA55D03883BA63F8E86EDA23&state=test&ret=0&pf=openmobile_ios&pfkey=a9ca28439f71c373ded4090d24455465&auth_time=1672845708&page_type=0"});`;
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
