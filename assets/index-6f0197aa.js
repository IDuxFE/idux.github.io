import{bI as c,bJ as w,bK as D,bL as ee,bM as E,bN as Q,bO as H,bP as W,bQ as te,bR as Y}from"./index-8aa71336.js";function ae(n,t){c(2,arguments);var e=w(n).getTime(),a=D(t);return new Date(e+a)}function re(n){var t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),n.getTime()-t.getTime()}function ne(n){return c(1,arguments),n instanceof Date||ee(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function ie(n){if(c(1,arguments),!ne(n)&&typeof n!="number")return!1;var t=w(n);return!isNaN(Number(t))}function oe(n,t){c(2,arguments);var e=D(t);return ae(n,-e)}var ue=864e5;function se(n){c(1,arguments);var t=w(n),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=e-a;return Math.floor(r/ue)+1}function _(n){c(1,arguments);var t=1,e=w(n),a=e.getUTCDay(),r=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function B(n){c(1,arguments);var t=w(n),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var r=_(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=_(i);return t.getTime()>=r.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function de(n){c(1,arguments);var t=B(n),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=_(e);return a}var ce=6048e5;function le(n){c(1,arguments);var t=w(n),e=_(t).getTime()-de(t).getTime();return Math.round(e/ce)+1}function j(n,t){var e,a,r,i,o,s,f,m;c(1,arguments);var v=w(n),h=v.getUTCFullYear(),b=Q(),l=D((e=(a=(r=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&r!==void 0?r:b.firstWeekContainsDate)!==null&&a!==void 0?a:(f=b.locale)===null||f===void 0||(m=f.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(h+1,0,l),g.setUTCHours(0,0,0,0);var O=E(g,t),p=new Date(0);p.setUTCFullYear(h,0,l),p.setUTCHours(0,0,0,0);var P=E(p,t);return v.getTime()>=O.getTime()?h+1:v.getTime()>=P.getTime()?h:h-1}function fe(n,t){var e,a,r,i,o,s,f,m;c(1,arguments);var v=Q(),h=D((e=(a=(r=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&r!==void 0?r:v.firstWeekContainsDate)!==null&&a!==void 0?a:(f=v.locale)===null||f===void 0||(m=f.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&e!==void 0?e:1),b=j(n,t),l=new Date(0);l.setUTCFullYear(b,0,h),l.setUTCHours(0,0,0,0);var g=E(l,t);return g}var me=6048e5;function he(n,t){c(1,arguments);var e=w(n),a=E(e,t).getTime()-fe(e,t).getTime();return Math.round(a/me)+1}function u(n,t){for(var e=n<0?"-":"",a=Math.abs(n).toString();a.length<t;)a="0"+a;return e+a}var ve={y:function(t,e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return u(e==="yy"?r%100:r,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):u(a+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,r=t.getUTCMilliseconds(),i=Math.floor(r*Math.pow(10,a-3));return u(i,e.length)}};const T=ve;var C={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ge={G:function(t,e,a){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var r=t.getUTCFullYear(),i=r>0?r:1-r;return a.ordinalNumber(i,{unit:"year"})}return T.y(t,e)},Y:function(t,e,a,r){var i=j(t,r),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return u(s,2)}return e==="Yo"?a.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(t,e){var a=B(t);return u(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return u(a,e.length)},Q:function(t,e,a){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,a){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return u(r,2);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,a){var r=t.getUTCMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return a.ordinalNumber(r+1,{unit:"month"});case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,a){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return a.ordinalNumber(r+1,{unit:"month"});case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,a,r){var i=he(t,r);return e==="wo"?a.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(t,e,a){var r=le(t);return e==="Io"?a.ordinalNumber(r,{unit:"week"}):u(r,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,a){var r=se(t);return e==="Do"?a.ordinalNumber(r,{unit:"dayOfYear"}):u(r,e.length)},E:function(t,e,a){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,a,r){var i=t.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,r){var i=t.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var r=t.getUTCDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(r,{width:"short",context:"formatting"});case"iiii":default:return a.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,a){var r=t.getUTCHours(),i=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var r=t.getUTCHours(),i;switch(r===12?i=C.noon:r===0?i=C.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var r=t.getUTCHours(),i;switch(r>=17?i=C.evening:r>=12?i=C.afternoon:r>=4?i=C.morning:i=C.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var r=t.getUTCHours()%12;return r===0&&(r=12),a.ordinalNumber(r,{unit:"hour"})}return T.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,a){var r=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(r,{unit:"hour"}):u(r,e.length)},k:function(t,e,a){var r=t.getUTCHours();return r===0&&(r=24),e==="ko"?a.ordinalNumber(r,{unit:"hour"}):u(r,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,a,r){var i=r._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return X(o);case"XXXX":case"XX":return M(o);case"XXXXX":case"XXX":default:return M(o,":")}},x:function(t,e,a,r){var i=r._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return X(o);case"xxxx":case"xx":return M(o);case"xxxxx":case"xxx":default:return M(o,":")}},O:function(t,e,a,r){var i=r._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+R(o,":");case"OOOO":default:return"GMT"+M(o,":")}},z:function(t,e,a,r){var i=r._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+R(o,":");case"zzzz":default:return"GMT"+M(o,":")}},t:function(t,e,a,r){var i=r._originalDate||t,o=Math.floor(i.getTime()/1e3);return u(o,e.length)},T:function(t,e,a,r){var i=r._originalDate||t,o=i.getTime();return u(o,e.length)}};function R(n,t){var e=n>0?"-":"+",a=Math.abs(n),r=Math.floor(a/60),i=a%60;if(i===0)return e+String(r);var o=t||"";return e+String(r)+o+u(i,2)}function X(n,t){if(n%60===0){var e=n>0?"-":"+";return e+u(Math.abs(n)/60,2)}return M(n,t)}function M(n,t){var e=t||"",a=n>0?"-":"+",r=Math.abs(n),i=u(Math.floor(r/60),2),o=u(r%60,2);return a+i+e+o}const we=ge;var I=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},A=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},be=function(t,e){var a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return I(t,e);var o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",I(r,e)).replace("{{time}}",A(i,e))},ye={p:A,P:be};const Te=ye;var pe=["D","DD"],Me=["YY","YYYY"];function Ce(n){return pe.indexOf(n)!==-1}function De(n){return Me.indexOf(n)!==-1}function G(n,t,e){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Oe={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pe=function(t,e,a){var r,i=Oe[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r};const ke=Pe;var xe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},We={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ye={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ue={date:H({formats:xe,defaultWidth:"full"}),time:H({formats:We,defaultWidth:"full"}),dateTime:H({formats:Ye,defaultWidth:"full"})};const Se=Ue;var Ee={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},_e=function(t,e,a,r){return Ee[t]};const Ne=_e;var Fe={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},qe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},$e={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Le={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},He={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Qe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Re=function(t,e){var a=Number(t),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Xe={ordinalNumber:Re,era:W({values:Fe,defaultWidth:"wide"}),quarter:W({values:qe,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:W({values:$e,defaultWidth:"wide"}),day:W({values:Le,defaultWidth:"wide"}),dayPeriod:W({values:He,defaultWidth:"wide",formattingValues:Qe,defaultFormattingWidth:"wide"})};const Ie=Xe;var Ge=/^(\d+)(th|st|nd|rd)?/i,Be=/\d+/i,je={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ae={any:[/^b/i,/^(a|c)/i]},Je={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ve={any:[/1/i,/2/i,/3/i,/4/i]},ze={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ke={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ze={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},et={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},tt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},at={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},rt={ordinalNumber:te({matchPattern:Ge,parsePattern:Be,valueCallback:function(t){return parseInt(t,10)}}),era:Y({matchPatterns:je,defaultMatchWidth:"wide",parsePatterns:Ae,defaultParseWidth:"any"}),quarter:Y({matchPatterns:Je,defaultMatchWidth:"wide",parsePatterns:Ve,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Y({matchPatterns:ze,defaultMatchWidth:"wide",parsePatterns:Ke,defaultParseWidth:"any"}),day:Y({matchPatterns:Ze,defaultMatchWidth:"wide",parsePatterns:et,defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:tt,defaultMatchWidth:"any",parsePatterns:at,defaultParseWidth:"any"})};const nt=rt;var it={code:"en-US",formatDistance:ke,formatLong:Se,formatRelative:Ne,localize:Ie,match:nt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ot=it;var ut=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,st=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dt=/^'([^]*?)'?$/,ct=/''/g,lt=/[a-zA-Z]/;function ht(n,t,e){var a,r,i,o,s,f,m,v,h,b,l,g,O,p,P,N,F,q;c(2,arguments);var J=String(t),k=Q(),x=(a=(r=e==null?void 0:e.locale)!==null&&r!==void 0?r:k.locale)!==null&&a!==void 0?a:ot,$=D((i=(o=(s=(f=e==null?void 0:e.firstWeekContainsDate)!==null&&f!==void 0?f:e==null||(m=e.locale)===null||m===void 0||(v=m.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&s!==void 0?s:k.firstWeekContainsDate)!==null&&o!==void 0?o:(h=k.locale)===null||h===void 0||(b=h.options)===null||b===void 0?void 0:b.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!($>=1&&$<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var L=D((l=(g=(O=(p=e==null?void 0:e.weekStartsOn)!==null&&p!==void 0?p:e==null||(P=e.locale)===null||P===void 0||(N=P.options)===null||N===void 0?void 0:N.weekStartsOn)!==null&&O!==void 0?O:k.weekStartsOn)!==null&&g!==void 0?g:(F=k.locale)===null||F===void 0||(q=F.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&l!==void 0?l:0);if(!(L>=0&&L<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var U=w(n);if(!ie(U))throw new RangeError("Invalid time value");var V=re(U),z=oe(U,V),K={firstWeekContainsDate:$,weekStartsOn:L,locale:x,_originalDate:U},Z=J.match(st).map(function(d){var y=d[0];if(y==="p"||y==="P"){var S=Te[y];return S(d,x.formatLong)}return d}).join("").match(ut).map(function(d){if(d==="''")return"'";var y=d[0];if(y==="'")return ft(d);var S=we[y];if(S)return!(e!=null&&e.useAdditionalWeekYearTokens)&&De(d)&&G(d,t,String(n)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Ce(d)&&G(d,t,String(n)),S(z,d,x.localize,K);if(y.match(lt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return d}).join("");return Z}function ft(n){var t=n.match(dt);return t?t[1].replace(ct,"'"):n}export{ae as a,j as b,he as c,le as d,ot as e,ht as f,re as g,Ce as h,De as i,oe as j,ie as k,Te as l,_ as s,G as t};
