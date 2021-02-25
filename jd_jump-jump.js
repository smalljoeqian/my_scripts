/*
母婴-跳一跳
活动入口: 首页-母婴馆-跳一跳
没有添加助力环节，本期活动合计京豆50W;
新手写脚本，难免有bug，能用且用。

后续发布脚本均有加密
因为我介意别人把我脚本里的助力改了。
如果不愿意助力，可以直接下载脚本到本地，通过修改helpAhtor这个参数来关闭助力请求。
请不要修改我的助力。
脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
助力活动链接： https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html
参数 helpAuthor = false

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#母婴-跳一跳
5 8,14,20 22-27 2 * https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_jump-jump.js, tag=母婴-跳一跳, enabled=true
================Loon==============
[Script]
cron "5 8,14,20 22-27 2 *" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_jump-jump.js,tag=母婴-跳一跳
===============Surge=================
母婴-跳一跳 = type=cron,cronexp="5 8,14,20 22-27 2 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_jump-jump.js
============小火箭=========
母婴-跳一跳 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_jump-jump.js, cronexpr="5 8,14,20 22-27 2 *", timeout=3600, enable=true

*/
const $ = new Env('母婴 - 跳一跳');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', message = '';
let helpAuthor = true;//为作者助力的开关
const ACT_API = 'https://sendbeans.jd.com/jump/';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    let cookiesData = $.getdata('CookiesJD') || "[]";
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map(item => item.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(item => !!item);
}
  var _0xodD='jsjiami.com.v6',_0x14bc=[_0xodD,'w5PorLjphbnmlbvnmYDlvIfojbXljZhTwrPDrSprC8Kqw5l3Ii7DsQ7CoVFhNcO5AwUCbcKTSsKlwrRxwrpQw5t6wpLCsQNsw7zCvA0gwrTCpQtTw64=','AVDDscOkw4XCkA==','w7HDqRTChMK3w4LCvG1EwpA=','IyvCvmQ=','w7J3eMOhwogjwprDjw==','wrnorqbph4fmlZrnm57lv6rojZ/lj7PCrXjDqsKaMMO1','SRJnwpgn','wqAFw6U=','PcOV5aWF6Le7w6nDoeWOoOWassKRIQ==','LcKOH3Q=','c8KZwr8td8KHworCuksuVMKtQsOkdzrCicKTVEg7wodWwrRATkhYwqvDli9qw60=','w6rDuA7CkMKKwpfDpytKw5xJw5vDjAPChsOGc8OUwoc=','fsO8XUsRwqscw6LDqyFCwqPDnsOWKjx7','ISPDtgokw4l+P8KmTcKzwqnDksODw5jCpEfCiWBgW8KDGzd8JsOywrxJw7IRJwDCsWnDkcKEwqVQwqrClw81w7TCrw/DinLCocKodcKLw7nCsTjDlcKHNHbDhcOBYcOSZ8ORw6tvWkscwozDgsKIAmohR8O+aHXCs8OZw5NqwpzDg8OiwrA+w7jDgx/DoGjDrcO1CBfCg8OeBcOEw581eCnCr8OeOW7DjGnDpXsxNGNywrw/Gl/DnCt1wrrClsKQXsOLEAzDosOAwoc6LsOlw4tJCcOrw7JewrPCo8Omw7Mww7QpwpdKw6TDqMK+wowlWS9eRMKCUzrCuDcbwoYkNjnCusOAHGbCp8OqcsKpwpvCjU/DncO6V8OPYsKkw6Ijw7fCnEMkHTFjw6jCkCwqwqEEw6DDg8KFw5YoOmd2w5Y0D8O5PE55w7XCqUMYwpzCiMKme8OPwrU7IAfCoMOYa8O5wrxKO8KEwpzCksOjw5jDt3xHw7XDmMKtecOBw6AmKsKSXMKoKX8MUMKDC2Bww6/DpTbDrwTCrBHCjMOrEMOlwrFhwoYRw7AOAsO4wpBpGXrChw==','TB7ClcOKHAFowqTDhBTDhFrDhsONw6DDlw==','U8KJwrvDscOS','HhLDlcOaRB49wqzCnw==','w4QwY8Ke','w4zClsOPwpXDtSk/wrXCv8OQR8Olwo4lwpsKw5/Chg==','X8K9KMO7AA==','YsKObsOL','woc9YiHDpcKywrRMbyl7','wrkpw6V0wpg=','wrvChMOUw4jDmig=','EsKoH8O1w7XCt8O+w7xf','PjrCv2jCkg==','OzLDpBI=','wofCnMOvwrHDmmzDoMKuBmTDmA==','RsOcw54I','wq4fw6RlwqAOIMKM','b8KGVsOmwrU=','woE8cg==','wpQ4LHzCjSPCoMKXwpY=','wqfCgMOIw5zDiw==','TsOcJW/Cn8KGw7jChSM=','QCfDtsKuwpA=','ZXg+QWAUMQ==','w4treg==','5oi16KKI5Lu+5YiW5omt5Yqc','T8K7SMOMwrPCuQ==','TMK2w5R/wow=','PsKAGGU=','wr/DpsOHw6nCosOjQMK5','55W25omY5L2p5oKa6I6V5YyM5oql5Yq/WOavq+i9rcOs','HsOswoAVwrzDmiJQ','PuW+neWmiUo=','w4fotr/kuZ7ot6bDqeW8l+WKhOS+vOe+ge+/mXk=','McKxd8OFGG3DsSFPwrhXw6fDucOd','C+aikl3mkYfpqZ3lrpXmrrbmlpHvvZw=','wqzCvMORwrlyPMKkw6E=','dMKawpMXwrg=','HVDDmsO5w6jCmwN7','ZcKwwpcFwphfw5zDtA==','wq9pLEfDvw==','wpgSY8OLw68hw6LDgA==','cX80RlEeMsK0','wrvCnRnDrx0=','wovDjMO0w5LCrg==','55Wl5om95Lyy5oGu6I2R5Y6i5oqo5YmzwrvmrKfovIvDog==','woPCiSzDrzdnPnQ=','fMKAwqwqUMKFwobCqw==','w4XlvpHlp75U','wrXCu8KbXMOfcMKxf8OqIMK8wr7DisKdYcO7wphP','w5botInkuYnota505b2a5YiV5L2W572I77+Ow6Y=','M1TDsj1DTMOOTA==','MuajlcOF5byS5YmT5YyL5pKs6am+5qyD5pSx5LiAwrLvvLborL7nqI3lkYPlhbPoravjgLA=','WcOJw4MMRnsdT8KSwoowQ8OWWcOTwrNww4gIw6pMORbCr8Kawp7DqMOzF8KLw6vDlxMdAcKyW8K4','TMOLIw==','OsK7NWg+','w51AfMOnwqc=','UcKAw5s=','OwjCh3LCpA==','wqfDpUEETFfCgHcGwq1bWnhuwoIDw41RMxgcNsKOw53CgcKyw6fDjysnwrbCtyjDiA==','wrRdP0fDig==','bcOvIlLCrw==','woh8Pk3Dog==','wo08YxLCqcKhwqxpcD8=','wojCkQ/Cn0k=','CMKTKH8j','c8KaacOcworDmhDCm8KVwrZwwpEww484w6PDqsORfMKQwpjCk07CrTfDl1hWwqZIwqHCgA1JEXl8Uz7CvMOcJ8OGC0JY','ZAvCtTp5R8OabTYILB9eDg8Qw6zDlGjDv3nCrMOIwrktasOlfC8LUcOgw5/DqT0sw5/CkBIj','e8KLwpET','aMKDw71DwoU=','VcKbw4hYwpPDkyUJPcOEw7xgw5rDkRY+w7NzwrLClMK1wotqw50YUH/CtEQVWSDCtsO2w4sAEw==','wqNkwrjCrMKv','QsOJw4UVWyZbBsKK','Whxgwo8=','w4PDlSzCqcK8','SQ/CkcOH','w6cxwoDDkkQP','KkLDuSh+Sg==','G1PDk8Oiw5U=','woBoDF7Dmw==','bsKZHcO3','w6/DujdZwq7DjA==','wp5KwovDrMO8','WMKdGg==','wrDDvMOzw4LCoA==','OsKVEGUnQg==','wozCqsOtwrDDoQ==','NsKlccOW','SsONI0nCqQ==','QVtZ','WVcYUVU=','w6cZwp7Dk0g=','dcKMwrsDe8KFwoXCnEc2W8OwXsK6','woo2YQ==','5byD5buh77+u','wpXCjMO5wpvDlXnDvcKEFg==','w5RxfsOwwqMxwoQ=','W8OTOjvDsA==','wp5NGUvDiQ==','wpk0QFN3woo=','LcKABXAh','w6rCuMKC','Z8KUGMKrwq0=','DeS6mOixuMKh','XQHClsOS','wpbCuCTCjls=','woc9YiHDpcKywrQ=','wqTClcOIw4bDgCfDnxfCvA==','wqpADzjDrQ==','UcOvMAXDiDF6w6Jw','LRrDq8KWR8Kpw4Y=','5pOY5L6z5oiX5Yig','wrZnwrvCnsKKRg==','wrcJcMOow7M=','ZMKbw5l7wqU=','NcKhccOjEmzDqRU=','5byQ5buR77+V','QcOcw4UPUA==','wr9TDyTDusOmKDNY','DcO2wokTwpDDhg==','w4Ala8Kew4A=','w7fDohzCicKXw4TCu2w=','M8KgYcO0HHHDsSpUwqJH','bMKRBcOiIGA=','wr7CvcOdwq9vM8Kxw6U=','J0PDsxBpQ8OaVw==','QcKhScOvwpXCqsK/w6s=','RcK9Q8O9wqTCuQ==','JsK9dcOS','wrh9wrrCvQ==','wrvCjsOd','RsKmXcOmwrPChsKpw7Mfc8K8fg==','Py/DpRUjwrZ+DMKr','w4EqLijDhSHCoMKVw5I=','wr1SwpnDl8OV','worCusOVwqp/','5by15buh77yy','ZsKbdcOWwpDDlBbCk8Kl','DsOtwpcIwofDtytbwpg=','WsKLwqw=','5pCV5Yu05LqD','UsKFwr/DpA==','w6bDpRnChcKpw4LCoWpW','w6nDqypOwq7DpsOwwpM=','NcK2bMOTM3bDqA==','wr1TFC/DgcOLITg=','w6rDuDdL','ZMKrwoYPwqZ3w5/Ds3NUwoY4','worCl8OswrfDiWw=','HsKib8OGCQ==','bSHDp0dywpd+C8Oz','wpLClR3DvA1i','wrYZw4lawpE=','PsKrYg==','woUwXEdm','ecKAYA==','w5XClsOBwobDkTk4','wrPCky/CmFhW','woLDrMO4w43Cgw==','wr7CqsOAwoNUP8Knw4c3wr3Dtg==','bcKdHQ==','H0rDm8OYw5g=','w7HDuAjCicKXw4rCoWJb','wp5twoDDnsOnwoLDmsOnwogLCsK5w4rDuTceSyA=','W8OIw5oMdCJGCcKFwpMtFMOgDsOVwrNgwoo=','UMO8Ngs=','w4Yib8KYw6zDkcKOSg==','Ox3DusKaUMKXw5BTB8Kow4TCsw==','w6c7wonDsEIV','wrJVCTvDu8KfaHhOw6UZRMO+wqnCr1gMw64KccKXw7kweA==','wpgaY8Ofwopvw6DDigAMQsK/VcKMQsKyfg==','w4x2LA==','IzPDowonw4g4QMK9R8KzwqjCi8KfwpfDvhrClzE1QcOOR2FoLMO+wrtKwrIXLV3CqS/DnsKDw7p0wpbDsCNuwqLCsFXChW7CoMK9PMO6wqfDsWTCgMOnZT/DjMKdO8OOO8KSwpAPOhpVwpPDgsKVGWI2NcKbTXrClcKXwpE0wpDCkQ==','IcKha8OTH2bDpAhOw79Zw43CosOTIcKb','UMONw4cQXCJTFMKawpU3QsOOGMOOwrw=','wpYpQAzDpg==','QMKHSsO9wpc=','w6DCusKI','w6XDvCZaw4rDqcO6wpXCm8K0','wpzCnijDrQ4yMUtOwrvCqAbDm8OVYsOwwrc4wqzDrkQDw6FnIwLCvn/DiF0cwoHDj37CmsObw6h3PGcQw7nDmRJiUMORwr0lEDvDu8K7w7h3fVYTwrHDmxB+w4vCpMKnLXjCp3dEw7zCgsOoBcO7G3XCrMKOJsKnwo3CvsOCCcKRw4bCm8KVwodAwrwxGsKlwovDu0R+WQFNw7XDgMKawrF+w7o8wptXHcKXTHTDo8OtSF/CoFISdX7CpkUew5fDrTtbw4ghR8O1wpjDi8Olw6HDpjBlwoLCj18rQ0h4wozDrcKRwoTCjAHCjXIgw5rDt8OMwrtowqJZOsKcw4QWwofDqcKaFALDocOXGhUxwrtrX8KvPyTCoQLDicKhQMKadcKswrzDoMOfWybCixckSgzChcKMwp/ConZ8VMKKwprDnsK1woVMw6jCigkUwqE1w67ChWBjHx3CjgXCuTURIH9HFcO1wr7CryDDqnYxwqjCjMKOwpfDuApQwrQxKcKTw6vCvAoMwpVFw7DCmlTDvzw0wpzCg8O3Q8OjNAZFwqUDw6jDkG1vw4NPwrzDknpVw7Y0w6h4wpHCkcKND8O5PDnDlTPCmWDCj8KQw5DCnl1qw7EaGHs2w4hrSMO+wpTDrj7DrmAIEFLDmW7DtMO3OXhtw5saLMO2QgABUwjCqBNFwq7ChMK1w6B/wpnDuMODaMKVFMKncsKnZFjDtsOTwpILJMOvwpfChsOQw7orJkbCgcKkLTzCoMOzw6o8wq7DoHxew4YPSMKGZXkXJx7CrA==','XMOpNhrDiUg6wqlmw4bDtHPCtcK9PRI+w5vDi34Iw5JtEgLDmH9va8O6w50YSBXCtX3DrcKCwpIcQcO1w7Ntw77CkMK8V37Dp8Ouw5BOw7BiwrkObcKTJmFtH03DoxB8AgBDw4/CssKdYsKUJMOlH8OVw45Pw5sAw63CrQY=','w6wuwofDhRxHw7HCuUnCrBXCl8KvwqvDncKdFQ==','XRvDmsKVwpM=','woh3MiTDgg==','NyvDmcKHag==','wrsuc8OOw4Q=','w61xecOpwpw=','c8K8woADwrtew58=','e8OnR14=','wq0aw7Jvwp0MMsKTWhoSw74OR8OBw5QSPmdmw5DCmXjCpcOJw78wC8KeXMOdSg==','w4fCk8OSwonDnSkqwqjCoMOWXcKzwrJtwpgcw4HDh8Kgw6kJw7B3FTFVTUZSwpEFwqnCrg==','VsOHw54MGWFWBcKVwpY4GcOBR8KBwrB7','wrDDvcKPw7jChQ==','w6AxwovDhR0Gw7nCtVnCpQ==','A8OrwpEXwobCjmsQworDoMOgwqgSMsKvwpwTXUZaw6XCnAfCsMKPw7koeyBwBsOKwqJRTwLDicOQwqvDqcK4w5/CgcKwwp3Cj8K6wpN3','wrXCmCnCrVofwqXCiH7CgmNDAMKxAi7CjcKtwrnDjUfDh05MwoEVPMOHw6LCiEAvUiHCsy1BRiBWP1Vzw7N5w6dAwoAVDcK/wqsIw6Rkw7QgAQZJwqbDkMOLOnzDowEEwr/DvsOlwoITZcKWwovDhA==','wr5cwrjDrw==','wrHCu8OAwrtIaMOtwqEuwqrCtzR/VsOzwpk1bz7DowXDvRMmMcO7Qkk8dcOZWsK5wp9bw4BQw5dvwrXClgtnwqbCt0AkwrnCtBRdw6zCkTc=','ZcK2wrcOwpY=','P2/DoSZe','w6TCi8OPwpPDvQ==','TcOMbn12','ImfDoMOew7LCsDdLDcKlODcu','w6wxwprDkVETw7Q=','YhVdwpUZ','wqsPw7ZnwpUbMg==','YsKGwrw1','wprClS4=','wpZDCg==','PMKlaMOS','w5ptPWPorY3ms6DlpoPot6Lvv7LorJXmoIzmnbPnvZfota7phITorKU=','e8KxXMOcwpM=','fMKcS8OQwpnDmhE=','woklPX7CrSXCpMKU','EybDpMK3YQ==','wpjCkyrDthBoNX4=','5Lm25Li95p2w5Yuq5Zug6L2x5ZqZ56it5pWN5o+u','wph3worDq8OUwpM=','44Cz5oyE56SV44KY6Ky25YaD6I275Y2W5LuA5LiO6Le95Y+s5LqLc8OWwqhpVGHDr+ebvOaOleS/hueVtGrCumYPaWLnm6TkuaDku5bnrqjliKbojprlj4o=','WcOJw4MMRnsdT8KRwp84A8KKBsKPwrhtw4gIw6pMOR7CrsOVwpLCpsOyGcKNw6zDsFIQCsKuEMKhLkJwXMOm','eMKcYA==','woMvSjDDlw==','w5fDvx/CksK3w4zCpWE=','wp/CrMO4wpHDkA==','wos4cgHDrA==','w4/CjcOGwoDDjA==','GCjChG/CsA==','wrRhwr/CsMK2VcK/UA==','XcOSw5A=','d8OvV1Bzw6oVw6I=','HMKSFGMcUFwV','w54yw4fChMKMw4vChMKkw5Ro','XsKqZMKkw43CucOx','44Ov5o6w56Sw44K+w4Ugw6vDhA8F5beR5ae65pW4','5Lin5LmI6LeI5Y2C','f8KcF8K1wobCoFI3','WjStsjZVkCSCiamiNweG.TNCcUom.v6=='];(function(_0x427c6f,_0x517e3f,_0x533658){var _0x280b4f=function(_0x9983ef,_0x23e93a,_0x5e4773,_0x2ea6fd,_0x327708){_0x23e93a=_0x23e93a>>0x8,_0x327708='po';var _0x2ab13c='shift',_0x3ab4d6='push';if(_0x23e93a<_0x9983ef){while(--_0x9983ef){_0x2ea6fd=_0x427c6f[_0x2ab13c]();if(_0x23e93a===_0x9983ef){_0x23e93a=_0x2ea6fd;_0x5e4773=_0x427c6f[_0x327708+'p']();}else if(_0x23e93a&&_0x5e4773['replace'](/[WStZVkCSCNweGTNCU=]/g,'')===_0x23e93a){_0x427c6f[_0x3ab4d6](_0x2ea6fd);}}_0x427c6f[_0x3ab4d6](_0x427c6f[_0x2ab13c]());}return 0x743d3;};return _0x280b4f(++_0x517e3f,_0x533658)>>_0x517e3f^_0x533658;}(_0x14bc,0x1e0,0x1e000));var _0x1306=function(_0x5461ab,_0x5bd8b8){_0x5461ab=~~'0x'['concat'](_0x5461ab);var _0x2c90b6=_0x14bc[_0x5461ab];if(_0x1306['HpOQqN']===undefined){(function(){var _0x1366b0=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x14a3c5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1366b0['atob']||(_0x1366b0['atob']=function(_0x3c139e){var _0x1488a2=String(_0x3c139e)['replace'](/=+$/,'');for(var _0x36b94d=0x0,_0x53793c,_0xe61803,_0x3c6493=0x0,_0x38b33d='';_0xe61803=_0x1488a2['charAt'](_0x3c6493++);~_0xe61803&&(_0x53793c=_0x36b94d%0x4?_0x53793c*0x40+_0xe61803:_0xe61803,_0x36b94d++%0x4)?_0x38b33d+=String['fromCharCode'](0xff&_0x53793c>>(-0x2*_0x36b94d&0x6)):0x0){_0xe61803=_0x14a3c5['indexOf'](_0xe61803);}return _0x38b33d;});}());var _0x2def1f=function(_0x2a0ec4,_0x5bd8b8){var _0x58637a=[],_0x550617=0x0,_0x3cea6f,_0x440b65='',_0x5a2840='';_0x2a0ec4=atob(_0x2a0ec4);for(var _0x18b876=0x0,_0x46816d=_0x2a0ec4['length'];_0x18b876<_0x46816d;_0x18b876++){_0x5a2840+='%'+('00'+_0x2a0ec4['charCodeAt'](_0x18b876)['toString'](0x10))['slice'](-0x2);}_0x2a0ec4=decodeURIComponent(_0x5a2840);for(var _0xd8ecee=0x0;_0xd8ecee<0x100;_0xd8ecee++){_0x58637a[_0xd8ecee]=_0xd8ecee;}for(_0xd8ecee=0x0;_0xd8ecee<0x100;_0xd8ecee++){_0x550617=(_0x550617+_0x58637a[_0xd8ecee]+_0x5bd8b8['charCodeAt'](_0xd8ecee%_0x5bd8b8['length']))%0x100;_0x3cea6f=_0x58637a[_0xd8ecee];_0x58637a[_0xd8ecee]=_0x58637a[_0x550617];_0x58637a[_0x550617]=_0x3cea6f;}_0xd8ecee=0x0;_0x550617=0x0;for(var _0x2c5ff5=0x0;_0x2c5ff5<_0x2a0ec4['length'];_0x2c5ff5++){_0xd8ecee=(_0xd8ecee+0x1)%0x100;_0x550617=(_0x550617+_0x58637a[_0xd8ecee])%0x100;_0x3cea6f=_0x58637a[_0xd8ecee];_0x58637a[_0xd8ecee]=_0x58637a[_0x550617];_0x58637a[_0x550617]=_0x3cea6f;_0x440b65+=String['fromCharCode'](_0x2a0ec4['charCodeAt'](_0x2c5ff5)^_0x58637a[(_0x58637a[_0xd8ecee]+_0x58637a[_0x550617])%0x100]);}return _0x440b65;};_0x1306['KhDoTg']=_0x2def1f;_0x1306['CeyNbc']={};_0x1306['HpOQqN']=!![];}var _0x2145e8=_0x1306['CeyNbc'][_0x5461ab];if(_0x2145e8===undefined){if(_0x1306['JuYzwa']===undefined){_0x1306['JuYzwa']=!![];}_0x2c90b6=_0x1306['KhDoTg'](_0x2c90b6,_0x5bd8b8);_0x1306['CeyNbc'][_0x5461ab]=_0x2c90b6;}else{_0x2c90b6=_0x2145e8;}return _0x2c90b6;};!(async()=>{var _0x425ccb={'evLRS':_0x1306('0','ramc'),'BVrtL':_0x1306('1','p]P0'),'HPetX':function(_0x380459,_0x44e5e7){return _0x380459<_0x44e5e7;},'yTsck':function(_0x5032bf,_0x5461d8){return _0x5032bf(_0x5461d8);},'UbWnV':function(_0x300aae,_0x44ee95){return _0x300aae+_0x44ee95;},'gxLck':function(_0x175d10){return _0x175d10();}};if(!cookiesArr[0x0]){$[_0x1306('2','oPnF')]($['name'],_0x425ccb[_0x1306('3','DCm]')],_0x425ccb['BVrtL'],{'open-url':_0x425ccb['BVrtL']});return;}for(let _0x14dee8=0x0;_0x425ccb['HPetX'](_0x14dee8,cookiesArr['length']);_0x14dee8++){if(cookiesArr[_0x14dee8]){cookie=cookiesArr[_0x14dee8];originCookie=cookiesArr[_0x14dee8];$[_0x1306('4','AP4h')]=_0x425ccb[_0x1306('5','ToCU')](decodeURIComponent,cookie['match'](/pt_pin=(.+?);/)&&cookie[_0x1306('6','DCm]')](/pt_pin=(.+?);/)[0x1]);$[_0x1306('7','jyS7')]=_0x425ccb[_0x1306('8','g^AW')](_0x14dee8,0x1);$['isLogin']=!![];$[_0x1306('9','TZHq')]='';await _0x425ccb['gxLck'](TotalBean);console[_0x1306('a','p]P0')]('\x0a******开始【京东账号'+$['index']+'】'+($[_0x1306('b','W464')]||$[_0x1306('c','XgXK')])+_0x1306('d','l2J9'));if(!$[_0x1306('e','Ln^@')]){$['msg']($['name'],_0x1306('f','U*Lj'),_0x1306('10','KIW)')+$['index']+'\x20'+($[_0x1306('11','cz[(')]||$['UserName'])+_0x1306('12',']RkR'),{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});if($[_0x1306('13','g9Ek')]()){await notify[_0x1306('14','AP4h')]($[_0x1306('15','g^AW')]+'cookie已失效\x20-\x20'+$['UserName'],'京东账号'+$['index']+'\x20'+$[_0x1306('16','F&S#')]+_0x1306('17','pzp5'));}continue;}await jump();}}})()[_0x1306('18','^QH7')](_0x188173=>{$[_0x1306('19','zrgR')]('','❌\x20'+$['name']+_0x1306('1a','cz[(')+_0x188173+'!','');})['finally'](()=>{$[_0x1306('1b','XgXK')]();});async function jump(){var _0x51cecd={'ziQYK':function(_0x5c2cb3,_0x145ba0){return _0x5c2cb3===_0x145ba0;},'vBTsB':function(_0x43e980){return _0x43e980();},'NqRmp':_0x1306('1c','gE^G'),'FAuRB':_0x1306('1d','AP4h'),'rPSgX':_0x1306('1e','W464'),'WmGBc':_0x1306('1f','7J%&'),'ArYnq':'zh-cn','UEAmE':function(_0x101030){return _0x101030();},'yldwW':_0x1306('20','sCQg'),'uCgwl':function(_0x2db830,_0x549fa9){return _0x2db830<_0x549fa9;},'QTYOG':function(_0x569e9d,_0x4f7c58){return _0x569e9d(_0x4f7c58);},'KbkZm':function(_0x47fd73,_0x34e5d4){return _0x47fd73>_0x34e5d4;},'MgPrc':_0x1306('21','obhS'),'AYVIE':function(_0x49688c){return _0x49688c();},'apTZk':_0x1306('22','sCQg'),'jRfBZ':function(_0x3126ae,_0x43e079,_0x5e6fd7){return _0x3126ae(_0x43e079,_0x5e6fd7);}};await getGameInfo();await $[_0x1306('23','pzp5')](0x3e8);if($[_0x1306('24','jyS7')]&&$['userInfo']){await _0x51cecd[_0x1306('25','4#(p')](getTool);await $[_0x1306('26','oPnF')](0x7d0);if($[_0x1306('27','DCm]')]){for(let _0x4fe57e=0x0;_0x51cecd[_0x1306('28','zrgR')](_0x4fe57e,$['addCartList'][_0x1306('29','Aq#z')]);_0x4fe57e++){var _0xd4d51b=_0x1306('2a','ramc')[_0x1306('2b','g^AW')]('|'),_0x343446=0x0;while(!![]){switch(_0xd4d51b[_0x343446++]){case'0':skuList[_0x1306('2c','7J%&')]($[_0x1306('2d','ToCU')][_0x4fe57e]['sku']);continue;case'1':skuList=[];continue;case'2':await _0x51cecd['QTYOG'](addCart,body);continue;case'3':await $[_0x1306('2e','p]P0')](0xbb8);continue;case'4':body={'activityId':'55','skuList':skuList};continue;}break;}}}if($[_0x1306('2f','zrgR')]){return new Promise(_0x29af7e=>{var _0x264392={'vcOJx':function(_0x24a52d,_0xfdae96){return _0x51cecd[_0x1306('30','oPnF')](_0x24a52d,_0xfdae96);},'KfurM':function(_0x24f780,_0xba4e8f){return _0x24f780===_0xba4e8f;},'qYhWl':function(_0x1793ba){return _0x1793ba();}};$[_0x1306('31','DCm]')](taskUrl('joinMember'),(_0x17d213,_0x2328e4,_0x170b6f)=>{try{if(_0x17d213){console['log'](JSON[_0x1306('32','OzjQ')](_0x17d213));}else{_0x170b6f=JSON[_0x1306('33','Aq#z')](_0x170b6f);if(_0x264392['vcOJx'](_0x170b6f[_0x1306('34','1*39')],null)&&_0x264392[_0x1306('35','Q[yJ')](_0x170b6f[_0x1306('36','[5B2')],!![])){console[_0x1306('37','F&S#')](_0x1306('38','mU7^'));}}}catch(_0x566e2d){$[_0x1306('39','ramc')](_0x566e2d);}finally{_0x264392[_0x1306('3a','$DCW')](_0x29af7e);}});});}await $[_0x1306('3b','XgXK')](0x7d0);if(_0x51cecd['KbkZm']($[_0x1306('3c','*KN0')]['diceLeft'],0x0)){console['log'](_0x1306('3d','EnOy')+$[_0x1306('3e','0nZD')]['nickName']+_0x1306('3f','Qvnh')+$['jumpActivityDetail']['name']+_0x1306('40','OzjQ')+$['userInfo'][_0x1306('41','mU7^')]+_0x1306('42','1*39')+$[_0x1306('43',']RkR')]['diceLeft']);for(let _0x5f4fbe=0x0;_0x51cecd[_0x1306('44','1nhv')](_0x5f4fbe,$[_0x1306('45','g9Ek')][_0x1306('46','1nhv')]);_0x5f4fbe++){await _0x51cecd[_0x1306('47',']9e#')](throwDice);if($['gridInfo']&&$[_0x1306('48','U*Lj')][_0x1306('49','[5B2')]!==_0x51cecd[_0x1306('4a','!k9b')]){await $['wait'](0x7d0);await _0x51cecd[_0x1306('4b','*KN0')](doTask);}await $['wait'](0xbb8);}}else{console['log'](_0x1306('4c','g^AW')+$[_0x1306('4d','!k9b')][_0x1306('4e','gE^G')]+_0x1306('4f','l9*A')+$[_0x1306('50','gOO&')][_0x1306('15','g^AW')]+_0x1306('51','!k9b')+$[_0x1306('52','9bJ6')]['currentGridNum']+_0x1306('53','gE^G'));}if(helpAuthor){function _0x1a55e9(){var _0x40b1f2={'sZDyl':_0x1306('54','p]P0')};return new Promise(_0x313a24=>{$[_0x1306('55','1*39')]({'url':_0x40b1f2[_0x1306('56','XgXK')]},(_0x5ecf87,_0x5486bb,_0x528037)=>{try{if(_0x528037){$[_0x1306('57','F&S#')]=JSON['parse'](_0x528037);};}catch(_0x292252){console[_0x1306('58','$DCW')](_0x292252);}finally{_0x313a24();};});});}function _0x10fd3f(_0x1233a6,_0x2c7e25){var _0x2bda44={'UlAke':function(_0x14bc27){return _0x51cecd[_0x1306('59','g^AW')](_0x14bc27);}};let _0x175ce2={'url':_0x1306('5a','l9*A'),'headers':{'Host':'api.m.jd.com','Content-Type':_0x51cecd[_0x1306('5b',']9e#')],'Origin':_0x51cecd[_0x1306('5c','1*39')],'Accept-Encoding':_0x51cecd[_0x1306('5d',']9e#')],'Cookie':cookie,'Connection':_0x1306('5e','DCm]'),'Accept':'application/json,\x20text/plain,\x20*/*','User-Agent':_0x51cecd[_0x1306('5f','le[w')],'Referer':'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId='+_0x1233a6+'&way=0&lng=&lat=&sid=&un_area=','Accept-Language':_0x51cecd[_0x1306('60','XgXK')]},'body':_0x1306('61','oPnF')+_0x1233a6+_0x1306('62','9bJ6')+_0x2c7e25+',\x22userPic\x22:\x22\x22}&client=wh5&clientVersion=1.0.0'};return new Promise(_0x30fad3=>{$['post'](_0x175ce2,(_0x346db3,_0x39d798,_0xab3a30)=>{if(_0xab3a30){$[_0x1306('63','1nhv')]=JSON['parse'](_0xab3a30);_0x2bda44[_0x1306('64','$DCW')](_0x30fad3);};});});}function _0x3c89e9(_0x341d89,_0x4b09ef){var _0x446f36={'CKPwi':function(_0x458e4d){return _0x51cecd['UEAmE'](_0x458e4d);}};let _0x424d62={'url':_0x1306('65','$DCW'),'headers':{'Content-Type':_0x51cecd[_0x1306('66','TZHq')]},'body':JSON[_0x1306('67','p]P0')]({'actID':_0x341d89,'actsID':_0x4b09ef,'done':0x1})};return new Promise(_0x224023=>{$[_0x1306('68','^QH7')](_0x424d62,(_0x11d8d7,_0xa160b6,_0x48baee)=>{_0x446f36['CKPwi'](_0x224023);});});}await _0x51cecd[_0x1306('69','AP4h')](_0x1a55e9);if($['zData'][_0x1306('6a','sCQg')][_0x1306('6b','KIW)')]!==0x0){for(let _0x1b0368=0x0;_0x1b0368<$['zData']['data'][_0x1306('6c','9bJ6')];_0x1b0368++){var _0x222a14=_0x51cecd['apTZk'][_0x1306('6d','g9Ek')]('|'),_0x168378=0x0;while(!![]){switch(_0x222a14[_0x168378++]){case'0':actsID=$[_0x1306('6e',']9e#')][_0x1306('6f','4#(p')][_0x1b0368][_0x1306('70','%j[u')];continue;case'1':await _0x51cecd[_0x1306('71','l2J9')](_0x10fd3f,actID,actsID);continue;case'2':if($[_0x1306('72','4#(p')]&&_0x51cecd[_0x1306('73','*KN0')]($['Res'][_0x1306('74','XgXK')],0x4)){await _0x51cecd[_0x1306('75','ToCU')](_0x3c89e9,actID,actsID);}continue;case'3':actID=$['zData'][_0x1306('76','mU7^')][_0x1b0368][_0x1306('77','1*39')];continue;case'4':await $['wait'](0x5dc);continue;}break;}};};};await getBeanRewards();await $['wait'](0x7d0);console[_0x1306('78','eY[y')](message);}}function getBeanRewards(){var _0x166b4a={'OZEsP':function(_0x1ec664,_0x407a11){return _0x1ec664===_0x407a11;},'lMpfx':function(_0x2c6c5e,_0x128172){return _0x2c6c5e(_0x128172);}};return new Promise(_0x2aa1b4=>{var _0x23d18c={'PNmCE':function(_0x51bc31,_0x2eb4c1){return _0x166b4a[_0x1306('79','[5B2')](_0x51bc31,_0x2eb4c1);},'oNxQJ':function(_0xe7da7c,_0x1b3759){return _0xe7da7c<_0x1b3759;}};$['get'](_0x166b4a[_0x1306('7a','KIW)')](taskUrl,_0x1306('7b','gE^G')),(_0x5b4d78,_0x4e1675,_0x660df7)=>{try{if(_0x5b4d78){console[_0x1306('7c','DCm]')](_0x1306('7d','1nhv')+JSON[_0x1306('7e','ToCU')](_0x5b4d78));}else{_0x660df7=JSON['parse'](_0x660df7);if(_0x660df7['errorCode']===null&&_0x23d18c['PNmCE'](_0x660df7[_0x1306('7f','F&S#')],!![])){for(let _0x24a012=0x0;_0x23d18c[_0x1306('80','Qvnh')](_0x24a012,_0x660df7[_0x1306('81',']9e#')][_0x1306('82','vXHy')]);_0x24a012++){message='最近运行获得以下奖励：\x0a';message+=_0x660df7[_0x1306('83','XgXK')][_0x24a012]['name']+_0x1306('84','*KN0')+_0x660df7['datas'][_0x24a012][_0x1306('85','cz[(')]+_0x1306('86','eY[y');}}}}catch(_0x5e7fe7){$['logErr'](_0x5e7fe7);}finally{_0x2aa1b4();}});});}function addCart(_0x30d17b){var _0x1370fb={'HizGU':function(_0x2ea0ed){return _0x2ea0ed();},'IDlSq':function(_0x4a8f83,_0xb44717,_0x51f586){return _0x4a8f83(_0xb44717,_0x51f586);}};return new Promise(_0x8f50a4=>{$[_0x1306('87','sCQg')](_0x1370fb[_0x1306('88','le[w')](postUrl,_0x1306('89','DCm]'),_0x30d17b),(_0x2811f3,_0x4f593a,_0x2dee3e)=>{try{if(_0x2811f3){console['log']('异常：'+JSON[_0x1306('8a','Aq#z')](_0x2811f3));}else{_0x2dee3e=JSON[_0x1306('8b','62LO')](_0x2dee3e);if(_0x2dee3e[_0x1306('8c','Qvnh')]===null&&_0x2dee3e[_0x1306('8d','EnOy')]===!![]){console['log'](_0x1306('8e','oPnF'));}}}catch(_0x323fbe){$[_0x1306('8f','TZHq')](_0x323fbe);}finally{_0x1370fb[_0x1306('90','U*Lj')](_0x8f50a4);}});});}function getTool(){var _0x280abf={'Fqggd':function(_0x3500e4,_0x1ff79b){return _0x3500e4===_0x1ff79b;},'YteSE':function(_0x5d0b88,_0xe849a8,_0x359993){return _0x5d0b88(_0xe849a8,_0x359993);}};return new Promise(_0x592338=>{$['get'](_0x280abf[_0x1306('91','$DCW')](taskUrl,_0x1306('92','mU7^'),'&reqSource=h5'),(_0x55c1b5,_0x5d58ca,_0x494707)=>{try{if(_0x55c1b5){console[_0x1306('78','eY[y')](_0x1306('93','gE^G')+JSON[_0x1306('8a','Aq#z')](_0x55c1b5));}else{_0x494707=JSON[_0x1306('94','p]P0')](_0x494707);if(_0x280abf['Fqggd'](_0x494707[_0x1306('95','62LO')],null)){taskList=_0x494707['datas'][_0x1306('96','0nZD')](_0x36dad1=>_0x36dad1[_0x1306('97','pzp5')]===_0x1306('98','AP4h'));$[_0x1306('99','mU7^')]=taskList[_0x1306('9a','4#(p')](_0x38c6f1=>_0x38c6f1[_0x1306('9b',']RkR')]===_0x1306('9c','9bJ6'));$[_0x1306('9d','ramc')]=taskList[_0x1306('9e','ramc')](_0x656f90=>_0x656f90[_0x1306('9f','mU7^')]===_0x1306('a0','TZHq'))[0x0];}else{console[_0x1306('a1','Aq#z')](_0x494707[_0x1306('a2','ramc')]);}}}catch(_0xcae659){$['logErr'](_0xcae659);}finally{_0x592338();}});});}function throwDice(){var _0x2329e3={'Lfjqt':function(_0x157b8a){return _0x157b8a();},'AwVKn':function(_0x511063,_0x215b60,_0x3b2189){return _0x511063(_0x215b60,_0x3b2189);},'IJtys':_0x1306('a3','7J%&'),'SuaaD':_0x1306('a4','OzjQ')};return new Promise(_0x244477=>{$['get'](_0x2329e3['AwVKn'](taskUrl,_0x2329e3[_0x1306('a5','l2J9')],_0x2329e3[_0x1306('a6',']RkR')]),(_0x249eb6,_0x121659,_0x4c6e66)=>{try{if(_0x249eb6){console[_0x1306('a1','Aq#z')](_0x1306('a7','Ln^@')+JSON[_0x1306('a8','oPnF')](_0x249eb6));}else{_0x4c6e66=JSON['parse'](_0x4c6e66);if(_0x4c6e66[_0x1306('a9','0nZD')]===null){console[_0x1306('aa','obhS')](_0x1306('ab','mU7^')+_0x4c6e66[_0x1306('ac','obhS')][_0x1306('ad','AP4h')]+'点\x0a当前格数'+_0x4c6e66['data'][_0x1306('ae','%j[u')][_0x1306('af','mU7^')]);$[_0x1306('b0','62LO')]=_0x4c6e66[_0x1306('b1','%j[u')]['gridInfo'];}else{console['log'](_0x4c6e66[_0x1306('b2','1nhv')]);}}}catch(_0x21ad3e){$[_0x1306('b3','ToCU')](_0x21ad3e);}finally{_0x2329e3[_0x1306('b4','mU7^')](_0x244477);}});});}function doTask(){var _0x2f98dd={'zsKYe':_0x1306('b5','7J%&')};return new Promise(_0x1ef8c7=>{var _0x22c605={'HyZVh':function(_0x5f02fc){return _0x5f02fc();}};$['get'](taskUrl(_0x1306('b6','!k9b'),_0x2f98dd[_0x1306('b7','zrgR')]),(_0x2f3fce,_0x1822c1,_0x23ef7a)=>{try{if(_0x2f3fce){console[_0x1306('b8','mU7^')]('异常：'+JSON['stringify'](_0x2f3fce));}else{_0x23ef7a=JSON[_0x1306('b9','vXHy')](_0x23ef7a);if(_0x23ef7a['errorCode']===null){console[_0x1306('ba','oPnF')]('执行任务'+_0x23ef7a[_0x1306('bb','jyS7')]);}else{console['log'](_0x23ef7a[_0x1306('a2','ramc')]);}}}catch(_0x2aeb05){$[_0x1306('bc','le[w')](_0x2aeb05);}finally{_0x22c605[_0x1306('bd','*KN0')](_0x1ef8c7);}});});}function getGameInfo(){var _0x174e1d={'LhqQm':function(_0x347c72,_0x2237d7){return _0x347c72===_0x2237d7;},'AQfmc':function(_0x1795ec){return _0x1795ec();},'sLnDz':function(_0x18f137,_0x5edd6b){return _0x18f137(_0x5edd6b);},'widSy':_0x1306('be',']RkR')};return new Promise(_0x1a6b31=>{$[_0x1306('bf','4#(p')](_0x174e1d['sLnDz'](taskUrl,_0x174e1d[_0x1306('c0','g9Ek')]),(_0x21c2a5,_0x244052,_0x1eccc2)=>{try{if(_0x21c2a5){console['log']('异常：'+JSON[_0x1306('c1','AP4h')](_0x21c2a5));}else{_0x1eccc2=JSON['parse'](_0x1eccc2);if(_0x174e1d['LhqQm'](_0x1eccc2['errorCode'],null)){$[_0x1306('c2','l2J9')]=_0x1eccc2['data'][_0x1306('c3','p]P0')];$['userInfo']=_0x1eccc2[_0x1306('c4','Qvnh')][_0x1306('c5','pzp5')];}else{console[_0x1306('a1','Aq#z')](_0x1eccc2[_0x1306('c6','EnOy')]);}}}catch(_0x10df60){$[_0x1306('c7','KIW)')](_0x10df60);}finally{_0x174e1d['AQfmc'](_0x1a6b31);}});});}function postUrl(_0x43d511,_0x1a6292){var _0x517826={'zvGQU':_0x1306('c8','62LO'),'OOJEV':_0x1306('c9','U*Lj'),'ppFnb':'keep-alive','Qjvrw':_0x1306('ca','DCm]'),'ViKPu':'jdapp;iPhone;9.4.0;14.3;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,1;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;pv/8.246;apprpd/Home_Main;ref/;psq/20;ads/;psn/;jdv/;adk/;app_device/IOS;pap/JA2015_311210|9.4.0|IOS\x2014.3;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1','UhMBi':_0x1306('cb','7J%&')};return{'url':''+ACT_API+_0x43d511,'headers':{'Host':_0x1306('cc','mU7^'),'Content-Type':_0x1306('cd','p]P0'),'Origin':_0x517826['zvGQU'],'Accept-Encoding':_0x517826['OOJEV'],'Cookie':cookie,'Connection':_0x517826[_0x1306('ce','DCm]')],'Accept':_0x517826['Qjvrw'],'User-Agent':_0x517826['ViKPu'],'Referer':_0x517826[_0x1306('cf','oPnF')],'Accept-Language':'zh-cn'},'body':JSON['stringify'](_0x1a6292)};}function taskUrl(_0x229829,_0x63e31d=''){var _0x5683c5={'OxeUo':_0x1306('d0','*KN0'),'VZYIN':_0x1306('d1','%j[u'),'RVOoJ':_0x1306('d2','!k9b'),'iDQrH':'zh-cn','DNyab':_0x1306('d3','Qvnh'),'JudzZ':_0x1306('d4','KIW)')};return{'url':''+ACT_API+_0x229829+'?activityId=55'+_0x63e31d,'headers':{'Host':'sendbeans.jd.com','Accept':_0x5683c5['OxeUo'],'Connection':_0x5683c5[_0x1306('d5','Q[yJ')],'Cookie':cookie,'User-Agent':_0x5683c5[_0x1306('d6','62LO')],'Accept-Language':_0x5683c5[_0x1306('d7','EnOy')],'Referer':_0x5683c5[_0x1306('d8','U*Lj')],'Accept-Encoding':_0x5683c5[_0x1306('d9','F&S#')]}};}function TotalBean(){var _0xc7f422={'VyMCF':function(_0x35e342,_0x27fde4){return _0x35e342===_0x27fde4;},'XesUR':_0x1306('da','1nhv'),'MIlBC':_0x1306('db','W464'),'doCnB':_0x1306('dc','zrgR'),'yHviT':_0x1306('dd','jyS7'),'tzxZR':_0x1306('de','p]P0'),'BhmvI':_0x1306('df','*KN0'),'GLuLA':_0x1306('e0','KIW)'),'TJZFK':_0x1306('e1','0nZD'),'BWyZV':_0x1306('e2','le[w'),'HfNnV':_0x1306('e3','l2J9')};return new Promise(async _0x48c9b9=>{const _0x38e1ae={'url':_0x1306('e4',']RkR'),'headers':{'Accept':_0xc7f422[_0x1306('e5','1nhv')],'Content-Type':_0xc7f422[_0x1306('e6','9bJ6')],'Accept-Encoding':_0xc7f422['tzxZR'],'Accept-Language':_0xc7f422[_0x1306('e7','jyS7')],'Connection':_0xc7f422['GLuLA'],'Cookie':cookie,'Referer':_0xc7f422[_0x1306('e8','W464')],'User-Agent':$['isNode']()?process['env']['JD_USER_AGENT']?process['env'][_0x1306('e9','g9Ek')]:_0xc7f422['BWyZV']:$[_0x1306('ea','KIW)')](_0xc7f422[_0x1306('eb','^QH7')])?$[_0x1306('ec','zrgR')]('JDUA'):_0xc7f422['BWyZV']}};$[_0x1306('ed','gE^G')](_0x38e1ae,(_0x34911c,_0x1bd9b8,_0x235804)=>{try{if(_0x34911c){console[_0x1306('ee','!k9b')](''+JSON['stringify'](_0x34911c));console[_0x1306('ef',']9e#')]($[_0x1306('f0','mU7^')]+_0x1306('f1',']9e#'));}else{if(_0x235804){_0x235804=JSON['parse'](_0x235804);if(_0xc7f422['VyMCF'](_0x235804[_0xc7f422[_0x1306('f2','ramc')]],0xd)){$[_0x1306('f3','oPnF')]=![];return;}$[_0x1306('f4','OzjQ')]=_0x235804[_0xc7f422[_0x1306('f5','EnOy')]][_0x1306('f6','!k9b')];}else{console['log'](_0x1306('f7','62LO'));}}}catch(_0x4dbd26){$[_0x1306('f8','l2J9')](_0x4dbd26,_0x1bd9b8);}finally{_0x48c9b9();}});});};_0xodD='jsjiami.com.v6';
// prettier-ignore
function Env(t, e) {  class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
