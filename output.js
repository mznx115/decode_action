//Fri Aug 30 2024 01:54:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st
  } = require("./utils/Rebels_H"),
  isNotify = false;
let cookie = "";
const cookiesArr = Object.keys(jdCookie).map(IilIll => jdCookie[IilIll]).filter(lI11Ii => lI11Ii);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
const sign_id_list = [{
  "type": "个护馆",
  "id": "c817ac2b040f433a96a82a88e7f5b254",
  "url": "https://prodev.m.jd.com/mall/active/NJ1kd1PJWhwvhtim73VPsD1HwY3/index.html"
}, {
  "type": "宠物馆",
  "id": "ae2e3851be5a4851be8e6101904516db",
  "url": "https://prodev.m.jd.com/mall/active/2TY2j1yJ9T2QKiQekTpHgvv68HiD/index.html"
}];
!(async () => {
  notify.config({
    "title": $.name
  });
  for (let IillIi = 0; IillIi < cookiesArr.length; IillIi++) {
    $.index = IillIi + 1;
    cookie = cookiesArr[IillIi];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    $.UA = common.genUA($.UserName);
    $.eid = common.genRandomString(90, "ABCDEFGHIJKLMNOPQRSTUVWXYZ").toUpperCase();
    $.fp = common.genRandomString(32, "0123456789abcdef");
    $.lng = "115.491" + Math.floor(100 + Math.random() * 900);
    $.lat = "38.897" + Math.floor(100 + Math.random() * 900);
    await Main();
    common.unsetCookie();
    if ($.runEnd) break;
    await $.wait(1000);
  }
  isNotify && notify.getMessage() && (await notify.push());
})().catch(i11I1l => $.logErr(i11I1l)).finally(() => $.done());
async function Main() {
  const IllI1l = await common.getLoginStatus(cookie);
  if (!IllI1l && typeof IllI1l === "boolean") {
    console.log("账号无效");
    return;
  }
  try {
    for (const iI1ll1 of sign_id_list) {
      $.signType = iI1ll1.type;
      $.signId = iI1ll1.id;
      $.activityUrl = iI1ll1.url;
      await sendRequest("turncardChannelSign");
      await $.wait(1000);
    }
    $.activityUrl = "https://pro.m.jd.com/mall/active/2KMRByvMg6Z2nwDmQ1StFTtKJc81/index.html";
    await sendRequest("jdh_laputa_handleSoaRequest");
    await $.wait(1000);
  } catch (IllI1I) {
    console.log("❌ 脚本运行遇到了错误\n" + IllI1I);
  }
}
async function handleResponse(liIii, II1ll1) {
  try {
    switch (liIii) {
      case "turncardChannelSign":
        if (II1ll1.success === true && II1ll1?.["data"]?.["signSuccess"]) II1ll1?.["data"]?.["signSuccess"] ? console.log("[" + $.signType + "]签到成功," + II1ll1.data.topLine + II1ll1.data.rewardName) : console.log("[" + $.signType + "]签到失败");else II1ll1.errorMessage ? (console.log("[" + $.signType + "]" + II1ll1.errorMessage), $.message.fix(II1ll1.errorMessage)) : console.log("❓" + liIii + " " + JSON.stringify(II1ll1));
        break;
      case "jdh_laputa_handleSoaRequest":
        if (II1ll1.success === true && II1ll1?.["data"]?.["signResultDTO"]) {
          const ii1I1i = II1ll1?.["data"]?.["signResultDTO"];
          ii1I1i?.["signStatus"] ? console.log("[医药馆]签到成功" + (ii1I1i?.["rewardMsg"] ? "，" + ii1I1i?.["rewardMsg"] : "")) : console.log("[医药馆]" + ii1I1i?.["msg"]);
        } else II1ll1.msg ? (console.log("[医药馆]" + II1ll1.errorMessage), $.message.fix(II1ll1.msg)) : console.log("❓" + liIii + " " + JSON.stringify(II1ll1));
        break;
    }
  } catch (llliI) {
    console.log("❌ 未能正确处理 " + liIii + " 请求响应 " + (llliI.message || llliI));
  }
}
async function sendRequest(lllii1) {
  if ($.runEnd) return;
  let liIll = "",
    IilIi1 = null,
    iI1liI = null,
    l1lIiI = "POST",
    llliiI = {},
    IilIiI = {};
  switch (lllii1) {
    case "turncardChannelSign":
      liIll = "https://api.m.jd.com/api", IilIiI = {
        "appId": "b342e",
        "functionId": "turncardChannelSign",
        "appid": "jdchoujiang_h5",
        "clientVersion": common.getLatestAppVersion(),
        "client": "ios",
        "body": {
          "code": $.signId,
          "fp": $.fp,
          "eid": $.eid,
          "deviceInfoVO": {
            "openid": -1,
            "client": "iOS",
            "clientVersion": common.getLatestAppVersion(),
            "uuid": "",
            "osVersion": common.getLatestIOSVersion()
          }
        },
        "version": "3.1",
        "ua": $.UA,
        "t": true
      }, llliiI = await H5st.getH5st(IilIiI), iI1liI = llliiI.paramsData, data = {
        "code": $.signId,
        "fp": $.fp,
        "eid": $.eid,
        "deviceInfoVO": {
          "openid": -1,
          "client": "iOS",
          "clientVersion": common.getLatestAppVersion(),
          "uuid": "",
          "osVersion": common.getLatestIOSVersion()
        }
      };
      break;
    case "jdh_laputa_handleSoaRequest":
      liIll = "https://api.m.jd.com/api", iI1liI = {
        "appid": "laputa",
        "functionId": "jdh_laputa_handleSoaRequest",
        "body": JSON.stringify({
          "methodName": "handleBeanInfo2595",
          "functionId": "sign",
          "osName": "feedProduct",
          "appId": "807635028594484682708c54f69b1217",
          "version": "1",
          "deviceNo": "",
          "handleType": "sign",
          "encryptProjectId": "3vRVP84ukngNhNYVDQTXuQQzJjit",
          "encryptAssignmentIds": ["3LbDQhTDsr5n7wL4XPyubMvEuUR3"],
          "deviceType": 1,
          "lng": $.lng,
          "lat": $.lat,
          "itemId": "1"
        })
      };
      break;
    default:
      console.log("❌ 未知请求 " + lllii1);
      return;
  }
  const i1i1I1 = {};
  IilIi1 && Object.assign(IilIi1, i1i1I1);
  iI1liI && Object.assign(iI1liI, i1i1I1);
  const IlII1 = {
    "url": liIll,
    "method": l1lIiI,
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": cookie,
      "Host": "api.m.jd.com",
      "Referer": $.activityUrl,
      "Origin": "https://pro.m.jd.com",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": $.UA
    },
    "params": iI1liI,
    "data": IilIi1,
    "timeout": 30000
  };
  if (l1lIiI === "GET") {
    delete IlII1.data;
    delete IlII1.headers["Content-Type"];
  }
  const IiI11 = 1;
  let lli = 0,
    liIlI = null,
    lll = false;
  while (lli < IiI11) {
    lli > 0 && (await $.wait(1000));
    const IiI1l = await common.request(IlII1);
    if (!IiI1l.success) {
      liIlI = "🚫 " + lllii1 + " 请求失败 ➜ " + IiI1l.error;
      lli++;
      continue;
    }
    if (!IiI1l.data) {
      liIlI = "🚫 " + lllii1 + " 请求失败 ➜ 无响应数据";
      lli++;
      continue;
    }
    await handleResponse(lllii1, IiI1l.data);
    lll = false;
    break;
  }
  lli >= IiI11 && (console.log(liIlI), lll && ($.outFlag = true, $.message && $.message.fix(liIlI)));
}