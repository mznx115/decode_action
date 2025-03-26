//Wed Mar 26 2025 09:34:11 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st
  } = require("./utils/Rebels_H"),
  draw_linkId = "VssYBUKJOen7HZXpC8dRFA";
let cookie = "";
const cookiesArr = Object.keys(jdCookie).map(lilIi => jdCookie[lilIi]).filter(l1l11I => l1l11I);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  console.log("非常容易403，默认不自动运行，请手动运行");
  notify.config({
    "title": $.name
  });
  for (let l11i1I = 0; l11i1I < cookiesArr.length; l11i1I++) {
    $.index = l11i1I + 1;
    cookie = cookiesArr[l11i1I];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.UUID = common.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    await Main();
    common.unsetCookie();
    if ($.runEnd) break;
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  }
})().catch(IiII => $.logErr(IiII)).finally(() => $.done());
async function Main() {
  try {
    const liIiI = await common.getLoginStatus(cookie);
    if (!liIiI && typeof liIiI === "boolean") {
      {
        console.log("账号无效");
        $.message.fix("账号无效");
        return;
      }
    }
    await lotterydraw();
  } catch (Iiili) {
    console.log("❌ 脚本运行遇到了错误\n" + Iiili);
  }
}
async function lotterydraw() {
  $.apTaskList = "";
  await sendRequest("apTaskList");
  if (!$.apTaskList) return;
  if ($.apTaskList) {
    const IillIi = $.apTaskList || [];
    for (let lii = 0; lii < IillIi.length; lii++) {
      {
        $.taskId = IillIi[lii].id;
        $.taskType = IillIi[lii].taskType;
        $.taskSourceUrl = IillIi[lii].taskSourceUrl;
        const IllI1i = IillIi[lii].taskFinished,
          i11I1l = IillIi[lii].taskShowTitle;
        !IllI1i && $.taskType.includes("BROWSE_") && (console.log("去做幸运转盘任务 \"" + i11I1l + "\""), await sendRequest("apsDoTask"), await $.wait(parseInt(Math.random() * 500 + 1000, 10)));
      }
    }
  }
  await sendRequest("wheelsHome");
  await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  if ($.lotteryChances > 0) {
    $.wheelsLotteryHot = false;
    console.log("当前剩余" + ($.lotteryChances || 0) + "次抽奖机会");
    const IllI1l = Math.min($.lotteryChances, 20);
    for (let i11I1i = 0; i11I1i < IllI1l; i11I1i++) {
      await sendRequest("wheelsLottery");
      await $.wait(parseInt(Math.random() * 2000 + 4000, 10));
      if ($.wheelsLotteryHot) break;
    }
  } else console.log("❌ 今日抽奖次数已用完");
}
async function handleResponse(llliil, liIl1) {
  try {
    switch (llliil) {
      case "wheelsHome":
        if (liIl1.code === 0 && liIl1.data) $.lotteryChances = liIl1?.["data"]?.["lotteryChances"];else {
          if (liIl1.errMsg || liIl1.msg || liIl1.message) console.log("" + (liIl1.errMsg || liIl1.msg || liIl1.message));else liIl1.data?.["bizMsg"] ? console.log(liIl1.data?.["bizMsg"]) : console.log("❓" + llliil + " " + JSON.stringify(liIl1));
        }
        break;
      case "apTaskList":
        if (liIl1.code === 0 && liIl1.data) $.apTaskList = liIl1?.["data"];else {
          if (liIl1.errMsg || liIl1.msg || liIl1.message) console.log("" + (liIl1.errMsg || liIl1.msg || liIl1.message));else liIl1.data?.["bizMsg"] ? console.log(liIl1.data?.["bizMsg"]) : console.log("❓" + llliil + " " + JSON.stringify(liIl1));
        }
        break;
      case "apsDoTask":
        if (liIl1.code === 0 && liIl1.data) console.log("> 任务完成");else {
          if (liIl1.errMsg || liIl1.msg || liIl1.message) console.log("" + (liIl1.errMsg || liIl1.msg || liIl1.message));else liIl1.data?.["bizMsg"] ? console.log(liIl1.data?.["bizMsg"]) : console.log("❓" + llliil + " " + JSON.stringify(liIl1));
        }
        break;
      case "wheelsLottery":
        if (liIl1.code === 0 && liIl1.data) {
          let IlI1Ii = liIl1.data?.["rewardType"];
          switch (IlI1Ii) {
            case 0:
            case null:
              console.log("> 抽到了空气");
              break;
            case 1:
            case 2:
              console.log("> 抽奖获得 " + liIl1.data?.["prizeName"]);
              break;
            case 18:
              console.log("> 抽奖获得 " + liIl1.data?.["prizeName"]["replace"]("水滴", "") + "💧");
              break;
            default:
              console.log("> 抽奖获得 " + liIl1.data?.["prizeName"]);
              return;
          }
        } else {
          if (liIl1.errMsg || liIl1.msg || liIl1.message) console.log("" + (liIl1.errMsg || liIl1.msg || liIl1.message));else liIl1.data?.["bizMsg"] ? console.log(liIl1.data?.["bizMsg"]) : console.log("❓" + llliil + " " + JSON.stringify(liIl1));
        }
        break;
    }
  } catch (l1il1i) {
    console.log("❌ 未能正确处理 " + llliil + " 请求响应 " + (l1il1i.message || l1il1i));
  }
}
async function sendRequest(ll1) {
  if ($.runEnd) return;
  let llliii = "",
    IllI11 = null,
    l1llIi = null,
    II1llI = "POST",
    i11I11 = {},
    l1llIl = {};
  switch (ll1) {
    case "wheelsHome":
      l1llIl = {
        "appId": "c06b7",
        "functionId": "wheelsHome",
        "appid": "activities_platform",
        "clientVersion": common.getLatestAppVersion(),
        "client": "ios",
        "body": {
          "linkId": draw_linkId
        },
        "version": "4.7",
        "ua": $.UA,
        "t": true
      };
      i11I11 = await H5st.getH5st(l1llIl);
      llliii = "http://api.m.jd.com/api";
      IllI11 = i11I11.paramsData;
      break;
    case "wheelsLottery":
      l1llIl = {
        "appId": "bd6c8",
        "functionId": "wheelsLottery",
        "appid": "activities_platform",
        "clientVersion": common.getLatestAppVersion(),
        "client": "ios",
        "body": {
          "linkId": draw_linkId
        },
        "version": "4.7",
        "ua": $.UA,
        "t": true
      };
      i11I11 = await H5st.getH5st(l1llIl);
      llliii = "http://api.m.jd.com/api";
      IllI11 = i11I11.paramsData;
      break;
    case "apTaskList":
      II1llI = "GET";
      llliii = "https://api.m.jd.com/api";
      l1llIi = {
        "functionId": "apTaskList",
        "body": JSON.stringify({
          "linkId": draw_linkId
        }),
        "t": Date.now(),
        "appid": "activities_platform",
        "client": "ios",
        "clientVersion": common.getLatestAppVersion()
      };
      break;
    case "apsDoTask":
      l1llIl = {
        "appId": "54ed7",
        "functionId": "apsDoTask",
        "appid": "activities_platform",
        "clientVersion": common.getLatestAppVersion(),
        "client": "ios",
        "body": {
          "taskType": $.taskType,
          "taskId": $.taskId,
          "channel": 4,
          "checkVersion": true,
          "linkId": draw_linkId,
          "itemId": $.taskSourceUrl
        },
        "version": "4.7",
        "ua": $.UA,
        "t": true
      };
      i11I11 = await H5st.getH5st(l1llIl);
      llliii = "https://api.m.jd.com/api";
      IllI11 = i11I11.paramsData;
      break;
    default:
      console.log("❌ 未知请求 " + ll1);
      return;
  }
  const ii1I1l = {};
  IllI11 && Object.assign(IllI11, ii1I1l);
  l1llIi && Object.assign(l1llIi, ii1I1l);
  const ii1I1i = {
    "url": llliii,
    "method": II1llI,
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": cookie,
      "Host": "api.m.jd.com",
      "Referer": "https://lotterydraw-new.jd.com/?id=" + draw_linkId,
      "X-Referer-Page": "https://lotterydraw-new.jd.com/",
      "Origin": "https://lotterydraw-new.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA
    },
    "params": l1llIi,
    "data": IllI11,
    "timeout": 30000,
    "httpsTlsOptions": ["wheelsHome", "wheelsLottery"].includes(ll1) ? common.useAppTls() : null
  };
  II1llI === "GET" && (delete ii1I1i.data, delete ii1I1i.headers["Content-Type"]);
  const llI = 1;
  let llliI = 0,
    iI1li1 = null,
    lllii1 = false;
  while (llliI < llI) {
    llliI > 0 && (await $.wait(1000));
    const lli = await common.request(ii1I1i);
    if (!lli.success) {
      {
        iI1li1 = "🚫 " + ll1 + " 请求失败 ➜ " + lli.error;
        llliI++;
        lli.status && lli.status === 403 && ["wheelsLottery"].includes(ll1) && ($.wheelsLotteryHot = true);
        continue;
      }
    }
    if (!lli.data) {
      iI1li1 = "🚫 " + ll1 + " 请求失败 ➜ 无响应数据";
      llliI++;
      continue;
    }
    await handleResponse(ll1, lli.data);
    lllii1 = false;
    break;
  }
  llliI >= llI && (console.log(iI1li1), lllii1 && ($.outFlag = true, $.message && $.message.fix(iI1li1)));
}