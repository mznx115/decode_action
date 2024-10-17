//Thu Oct 17 2024 05:12:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
var ilIl11 = function () {
  var Ii1li11l = "小助理",
    iilIlIIi = function () {
      alert("本工具由FireFax为您呈现，仅供学习交流使用，禁止用于非法用途！");
      alert("独家首发于MiFi之家/ufiClub社区，未经许可不得转载！");
      alert("欢迎来ufiClub关注@FireFucks或提供反馈！");
      window.open("https://community.dingyi.eu.org/users/10000#articles");
    },
    lIiIl11I = function () {
      var iIllIll = document.getElementsByTagName("button")[0];
      iIllIll.style.display = "none";
      var I1l1ilii = document.createElement("div");
      I1l1ilii.style.width = "166px";
      I1l1ilii.style.height = "200px";
      I1l1ilii.style.background = "#ffffff";
      I1l1ilii.style.color = "#000000";
      I1l1ilii.style.overflow = "hidden";
      I1l1ilii.style.zIndex = "9995";
      I1l1ilii.style.position = "fixed";
      I1l1ilii.style.padding = "8px";
      I1l1ilii.style.textAlign = "right";
      I1l1ilii.style.border = "none";
      I1l1ilii.style.borderRadius = "8px";
      I1l1ilii.style.left = "2vw";
      I1l1ilii.style.top = "30px";
      I1l1ilii.style.boxShadow = "0 0 10px #000000";
      I1l1ilii.style.opacity = "0.9";
      I1l1ilii.style.fontSize = "14px";
      I1l1ilii.style.fontWeight = "bold";
      I1l1ilii.style.lineHeight = "20px";
      I1l1ilii.style.wordBreak = "break-all";
      I1l1ilii.id = "panel";
      I1l1ilii.innerHTML = "ASR" + Ii1li11l + "&nbsp;&nbsp;";
      document.body.appendChild(I1l1ilii);
      var li1ii1li = document.createElement("button");
      li1ii1li.innerHTML = "隐藏";
      li1ii1li.style.fontSize = "14px";
      li1ii1li.style.fontWeight = "bold";
      li1ii1li.style.left = "2vw";
      li1ii1li.style.top = "30px";
      li1ii1li.style.background = "#009090";
      li1ii1li.style.color = "#ffffff";
      li1ii1li.style.overflow = "hidden";
      li1ii1li.style.zIndex = "9999";
      li1ii1li.style.position = "fixed";
      li1ii1li.style.padding = "5px";
      li1ii1li.style.textAlign = "center";
      li1ii1li.style.width = "80px";
      li1ii1li.style.height = "32px";
      li1ii1li.style.border = "none";
      li1ii1li.style.borderRadius = "4px";
      li1ii1li.onclick = function () {
        document.body.removeChild(I1l1ilii);
        iIllIll.style.display = "block";
      };
      I1l1ilii.appendChild(li1ii1li);
      var iliII1ii = document.createElement("ul");
      iliII1ii.id = "menu";
      iliII1ii.style.listStyle = "none";
      iliII1ii.style.padding = "0";
      iliII1ii.style.margin = "0";
      iliII1ii.style.marginTop = "15px";
      iliII1ii.style.textAlign = "center";
      iliII1ii.style.fontSize = "12px";
      iliII1ii.style.lineHeight = "20px";
      iliII1ii.style.wordBreak = "break-all";
      iliII1ii.style.backgroundColor = "#f1f1f1";
      iliII1ii.style.border = "1px solid #ccc";
      iliII1ii.style.borderRadius = "4px";
      iliII1ii.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
      var iiiII11i = document.createElement("li");
      iiiII11i.innerHTML = "停用系统更新";
      iiiII11i.style.padding = "8px 12px";
      iiiII11i.style.borderBottom = "1px solid #ccc";
      iiiII11i.addEventListener("click", function () {
        i1I111Il("upgrade_firmware", "<?xml version=\"1.0\" encoding=\"US-ASCII\"?><RGW><sysinfo><unify_upgrade>0</unify_upgrade></sysinfo></RGW>", 10000);
      });
      iliII1ii.appendChild(iiiII11i);
      var lliIiII1 = document.createElement("li");
      lliIiII1.innerHTML = "停用远程管理";
      lliIiII1.style.padding = "8px 12px";
      lliIiII1.style.borderBottom = "1px solid #ccc";
      lliIiII1.addEventListener("click", function () {
        i1I111Il("acs", "<?xml version=\"1.0\" encoding=\"US-ASCII\"?><RGW><tr069><tr069_feature>0</tr069_feature><enable>0</enable><tr069_enable>0</tr069_enable><acs_url>http://127.0.0.2</acs_url><acs_username>fuckyou</acs_username><acs_password>fuckyou</acs_password><conn_name>fuckyou</conn_name><conn_psw>fuckyou</conn_psw><inform_enable>0</inform_enable><inform_interval>65515</inform_interval><acs_secretmode>0</acs_secretmode><tr069_oui>mifi</tr069_oui><tr069_product_class>mifi</tr069_product_class><tr069_hw_version>mifi</tr069_hw_version><tr069_manufacturer>mifi</tr069_manufacturer><fota_enable>0</fota_enable><fota_host>http://127.0.0.2</fota_host><stun_enable>0</stun_enable><stun_server_port>8964</stun_server_port><stun_server_address>http://127.0.0.2</stun_server_address><stun_username>fuckyou</stun_username><stun_password>fuckyou</stun_password><stun_max_interval>50</stun_max_interval><stun_min_interval>50</stun_min_interval><tr069_hw_version><conn_name>fuckyou</conn_name><conn_psw>fuckyou</conn_psw><inform_enable>0</inform_enable><inform_interval>65515</inform_interval><boot_state/></tr069_hw_version></tr069></RGW>", 10000);
        setTimeout(function () {
          alert("已提交");
        }, 3000);
      });
      iliII1ii.appendChild(lliIiII1);
      var i1IiiIIl = document.createElement("li");
      i1IiiIIl.innerHTML = "解锁实体卡槽";
      i1IiiIIl.style.padding = "8px 12px";
      i1IiiIIl.style.borderBottom = "1px solid #ccc";
      i1IiiIIl.addEventListener("click", function () {
        i1I111Il("wan", "<?xml version=\"1.0\" encoding=\"US-ASCII\"?><RGW><wan><advanced_setting>1</advanced_setting><Engineer_mode>0</Engineer_mode><version_flag>0</version_flag><version_flag_action>1</version_flag_action><cellular><sim_status>0</sim_status><sim_status_action>1</sim_status_action></cellular></wan></RGW>", 5000);
        var lIii111 = document.getElementById("lt_lacopyright_main");
        if (lIii111) {
          callJSON("homepage_info", function (l1iiiiii) {
            var iIl11IiI = l1iiiiii.imei;
            var Ili11l = "Dc@" + iIl11IiI.substr(iIl11IiI.length - 6);
            var lili11Ii = "{\"key\":\"" + Ili11l + "\"}";
            IlIIl11i("json_usim_unlock_set", lili11Ii, true);
            callJSON("device_restart", function () {
              alert("解锁成功,设备正在重启中...");
            });
          });
        } else setTimeout(function () {
          alert("已提交，可能需要重启后生效！");
        }, 3000);
      });
      iliII1ii.appendChild(i1IiiIIl);
      var IlIll11l = document.createElement("li");
      IlIll11l.innerHTML = "了解相关信息";
      IlIll11l.style.padding = "8px 12px";
      IlIll11l.style.borderBottom = "1px solid #ccc";
      IlIll11l.addEventListener("click", function () {
        iilIlIIi();
      });
      iliII1ii.appendChild(IlIll11l);
      var Illii11l = document.createElement("li");
      Illii11l.style.display = "none";
      Illii11l.innerHTML = "Easter Egg";
      Illii11l.style.padding = "8px 12px";
      Illii11l.style.borderBottom = "1px solid #ccc";
      iliII1ii.appendChild(Illii11l);
      I1l1ilii.appendChild(iliII1ii);
    },
    iIllllIi = function () {
      var lIllilI = document.createElement("button");
      lIllilI.innerHTML = Ii1li11l;
      lIllilI.style.fontSize = "14px";
      lIllilI.style.fontWeight = "bold";
      lIllilI.style.left = "2vw";
      lIllilI.style.top = "30px";
      lIllilI.style.background = "#008080";
      lIllilI.style.color = "#ffffff";
      lIllilI.style.overflow = "hidden";
      lIllilI.style.zIndex = "9990";
      lIllilI.style.position = "fixed";
      lIllilI.style.padding = "5px";
      lIllilI.style.textAlign = "center";
      lIllilI.style.width = "80px";
      lIllilI.style.height = "32px";
      lIllilI.style.border = "none";
      lIllilI.style.borderRadius = "4px";
      lIllilI.onclick = function () {
        lIiIl11I();
      };
      document.body.appendChild(lIllilI);
    },
    lII1I1lI = function (lIiliiii, lilI1iI, ll11iIil, llI1i1ll, I1lIll1I) {
      $.ajax({
        "type": lilI1iI == "" ? "GET" : "POST",
        "beforeSend": function (llIIII11) {
          llIIII11.setRequestHeader("Authorization", getAuthHeader("POST"));
        },
        "url": lIiliiii,
        "processData": false,
        "data": lilI1iI,
        "async": true,
        "dataType": ll11iIil,
        "timeout": 10000,
        "success": llI1i1ll,
        "error": I1lIll1I
      });
    },
    IlIIl11i = function (Ili1l111, l11li1i1, III111I1, IIIllI1) {
      var lilllI = "",
        iiIi1I1I = window.location.protocol + "//" + window.location.host + "/";
      lilllI = iiIi1I1I + "xml_action.cgi?method=set&module=duster&file=" + Ili1l111;
      var ii11il1 = "json";
      IIIllI1 && (ii11il1 = "xml");
      resetInterval();
      lII1I1lI(lilllI, l11li1i1, ii11il1, function (Iii1IlI1) {
        if ($(Iii1IlI1).find("login_status").text() == "UNAUTHORIZED") {
          alert("无权操作，请先登录后台！");
          clearAuthheader();
        } else {
          III111I1 != false && alert("提交成功！");
        }
      }, function (iIIIl1l1, lIIIi1Ii) {
        if (lIIIi1Ii == "timeout") Ili1l111 != "acs" && alert("请求超时");else {
          if (lIIIi1Ii == "error") {
            if (Ili1l111 != "acs") {
              alert("请求出错：" + lIIIi1Ii);
            }
          } else alert("请求出错：" + lIIIi1Ii);
        }
      });
    };
  if (typeof i1I111Il == "undefined") var i1I111Il = function (llliIIi1, Ill1lII, lil1iil) {
    IlIIl11i(llliIIi1, Ill1lII, true, true);
  };
  this.start = function () {
    GM_getValue("used") == undefined && (iilIlIIi(), GM_setValue("used", true));
    iIllllIi();
  };
};
setTimeout(function () {
  var i1Iiii1i = document.getElementById("lt_lacopyright_main"),
    IlIl1iil = document.getElementById("lacopyright");
  if (i1Iiii1i || IlIl1iil) {
    const Ii111i11 = new ilIl11();
    Ii111i11.start();
  }
}, 2000);