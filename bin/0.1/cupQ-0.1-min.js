/* cupQ: cupQuery -v0.1- MIT License (MIT) -YUIcompressed - Samir Dash, 2012 mobilewish@gmail.com http://samirshomepage.wordpress.com */var _=function(n,c,E){var r=window._globalDebugCupQFlag;var e=false;var o=false;var B=false;var b=false;var d=false;var u=false;var x=new Array();var J=new Array();var l=new Array();var q=new Array();var a=new Array();var I=new Array();var L=0;var w;var D=new Array();var h=Array();var v=new Array();var y={_debug:true,$Q:"",$nodeIndex:"",$target:"",_isClassName:false,_isIdName:false,_isTagName:false,_isGetParent:false,_isGetChildren:false,_isGetCurrent:false,_nodeList:[],_childIndexInParentList:[],_attributeList:[],_styleList:[],_innerTextList:[],_innerHTMLList:[],_currentNodeIndex:0,_node:"",_targetList:[],_bodyFilesArr:[],_headFilesArr:[],init:function(){return x;},importAtHead:function(i){v=i;},importAtBody:function(i){h=i;},importFiles:function(t){var m=document.getElementsByTagName("head")[0];for(var j=0;j<t.length;j++){if(v[j].indexOf(".js")>-1){var k=document.createElement("script");k.setAttribute("type","text/javascript");k.setAttribute("src",t[j]);k.setAttribute("charset","utf-8");m.appendChild(k);}else{var k=document.createElement("style");k.setAttribute("type","text/css");k.setAttribute("src",t[j]);k.setAttribute("charset","utf-8");m.appendChild(k);}}},internalimport:function(){var t=document.getElementsByTagName("head")[0];var j=document.getElementsByTagName("body")[0];for(var k=0;k<v.length;k++){if(v[k].indexOf(".js")>-1){var m=document.createElement("script");m.setAttribute("type","text/javascript");m.setAttribute("src",v[k]);m.setAttribute("charset","utf-8");t.appendChild(m);}else{var m=document.createElement("style");m.setAttribute("type","text/css");m.setAttribute("src",v[k]);m.setAttribute("charset","utf-8");t.appendChild(m);}}for(var k=0;k<h.length;k++){if(h[k].indexOf(".js")>-1){var m=document.createElement("script");m.setAttribute("type","text/javascript");m.setAttribute("src",h[k]);m.setAttribute("charset","utf-8");j.appendChild(m);}else{var m=document.createElement("style");m.setAttribute("type","text/css");m.setAttribute("src",h[k]);m.setAttribute("charset","utf-8");j.appendChild(m);}}},htmlAppend:function(m,j){I=[];for(var k=0;k<x.length;k++){if(j==undefined){x[k].innerHTML=x[k].innerHTML+m;I[k]=x[k].innerHTML;}else{if(k==j){x[j].innerHTML=x[k].innerHTML+m;I[k]=x[j].innerHTML;}else{}}}return I;},htmlPrepend:function(m,j){I=[];for(var k=0;k<x.length;k++){if(j==undefined){x[k].innerHTML=m+x[k].innerHTML;I[k]=x[k].innerHTML;}else{if(k==j){x[j].innerHTML=m+x[k].innerHTML;I[k]=x[j].innerHTML;}else{}}}return I;},html:function(m,j){I=[];if(m==undefined){for(var k=0;k<x.length;k++){I[k]=x[k].innerHTML;}}else{for(var k=0;k<x.length;k++){if(j==undefined){x[k].innerHTML=m;I[k]=m;}else{if(k==j){x[j].innerHTML=m;I[k]=m;}else{}}}}return I;},textAppend:function(m,j){a=[];for(var k=0;k<x.length;k++){if(j==undefined){x[k].innerText=x[k].innerText+m;a[k]=x[k].innerText;}else{if(k==j){x[j].innerText=x[k].innerText+m;a[k]=x[j].innerText;}else{}}}return a;},textPrepend:function(m,j){a=[];for(var k=0;k<x.length;k++){if(j==undefined){x[k].innerText=m+x[k].innerText;a[k]=x[k].innerText;}else{if(k==j){x[j].innerText=m+x[k].innerText;a[k]=x[j].innerText;}else{}}}return a;},text:function(m,j){a=[];if(m==undefined){for(var k=0;k<x.length;k++){a[k]=x[k].innerText;}}else{for(var k=0;k<x.length;k++){if(j==undefined){x[k].innerText=m;a[k]=m;}else{if(k==j){x[j].innerText=m;a[k]=m;}else{}}}}return a;},style:function(j,m){for(var k=0;k<x.length;k++){if(j==undefined){if(m!=undefined){q[k]=x[k].style[m];}else{q[k]=x[k].style;}}else{if(k==j){if(m!=undefined){q[j]=x[j].style[m];}else{q[j]=x[j].style;}}else{}}}return q;},childIndexInParent:function(t){J=[];if(t==undefined){for(var z=0;z<x.length;z++){var k=x[z].parentNode;var m=k.children;for(var s=0;m.length;s++){if(m[s]==(x[z])){J.push(s);break;}}}}else{var k=x[t].parentNode;var m=k.children;for(var s=0;m.length;s++){if(m[s]==(x[t])){J.push(s);break;}}}return J;},remove:function(k){if(k==undefined){for(var m=0;m<x.length;m++){var j=x[m].parentNode;if(j!=undefined){j.removeChild(x[m]);x.splice(m);}}}else{var j=x[k].parentNode;if(j!=undefined){j.removeChild(x[k]);x.splice(k);}}return x;},attribute:function(k,j,s){l=[];if(k!=undefined){if(j==-1||isNaN(j)==true||j==""){for(var m=0;m<x.length;m++){if(s==undefined||s==""){l[m]=x[m].getAttribute(k);}else{x[m].setAttribute(k,s);l[m]=x[m].getAttribute(k);}}}else{if(s==undefined||s==""){l.push(x[j].getAttribute(k));}else{x[j].setAttribute(k,s);l.push(x[j].getAttribute(k));}}}return l;},hostObject:{init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"unknown";this.OS=this.searchString(this.dataOS)||"an unknown OS";this.navigator=navigator;this.navigatorVendor=navigator.vendor;this.userAgent=navigator.userAgent;},searchString:function(s){for(var j=0;j<s.length;j++){var k=s[j].string;var m=s[j].prop;this.versionSearchString=s[j].versionSearch||s[j].identity;if(k){if(k.indexOf(s[j].subString)!=-1){return s[j].identity;}}else{if(m){return s[j].identity;}}}},searchVersion:function(j){var i=j.indexOf(this.versionSearchString);if(i==-1){return;}return parseFloat(j.substring(i+this.versionSearchString.length+1));},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]},onDocumentReady:function(){},onWindowLoad:function(){},getUniqueArray:function(k){var m=new Array();for(var z=0;z<k.length;z++){var t=false;for(var s=0;s<m.length;s++){if(k[z]==m[s]){t=true;break;}}if(t==false){m.push(k[z]);}else{}}return m;},trace:function(i){r=window._globalDebugCupQFlag;if(r==true){console.log(i);}},debug:function(i){window._globalDebugCupQFlag=i;if(i==true){r=true;}else{r=false;}},};y.hostObject.init();y.trace("cupQ: browser: "+y.hostObject.browser+"version: "+y.hostObject.version+" OS: "+y.hostObject.OS+"");y.trace("cupQ: .......................................................... ");y.trace("cupQ: $Q="+n+";  $target="+c+"; $nodeIndex="+E+"; ");if(n!=undefined){if(c==undefined||c==""){D.push(document);}else{if(typeof(c)=="object"&&c.length>0){D=c;}else{if(typeof(c)=="object"&&c=="[object HTMLDocument]"){D.push(c);}else{if(typeof(c)=="object"&&c=="[object HTMLBodyElement]"){D.push(c);}else{if(typeof(c)=="object"&&c.toString().indexOf("HTML")>-1&&c.toString().indexOf("Element")>-1){D.push(c);}else{if(typeof(c)=="object"&&c=="[object NodeList]"){D=c;}}}}}}if(n.indexOf("+")==0){d=true;}else{if(n.indexOf("-")==0){b=true;}else{u=true;}}if(n.indexOf(" ")>-1||(n.indexOf("[")>-1&&n.indexOf("]")>-1)){var G=document;var Q=n.split(" ");x=new Array();for(var P=0;P<D.length;P++){var f=new Array();c=D[P];G=c;for(var M=0;M<Q.length;M++){var H=Q[M];var A=R(H);if(A[0].toString().toLowerCase()!="document"){if(H.indexOf(".")>-1&&H.indexOf("[")>-1){G=G.getElementsByClassName(A[0])[Number(A[1])];}else{if(H.indexOf(".")>-1){f=G.getElementsByClassName(A[0]);for(var C=0;C<f.length;C++){x.push(f[C]);}break;}else{if(H.indexOf("#")>-1){G=G.getElementsById(A[0]);}else{if(H.indexOf("[")>-1){G=G.getElementsByTagName(A[0])[Number(A[1])];}else{f=G.getElementsByTagName(A[0]);for(var C=0;C<f.length;C++){x.push(f[C]);}break;}}}}}}if(f.length<=0){x.push(G);}}}else{if(n.indexOf(".")==0||n.indexOf(".")==1){e=true;x=new Array();for(var P=0;P<D.length;P++){c=D[P];n=n.split(".")[1];var p=c.getElementsByClassName(n);if(p.length>0){for(var O=0;O<p.length;O++){x.push(p[O]);}}if(E!=undefined){if(typeof(E)=="object"&&(E.length)>=0&&(typeof(E)).toLowerCase().indexOf("node")<0){var K=new Array();K=E;var f=new Array();for(var N=0;N<K.length;N++){var F=x[K[N]];if(F!=undefined){f.push(F);}}x=f;}else{if(typeof(E)=="function"){var K=new Array();K=E();var f=new Array();for(var N=0;N<K.length;N++){var F=x[K[N]];if(F!=undefined){f.push(F);}}x=f;}else{if(E==-1){L=x.length-1;w=x[L];x=new Array();x.push(w);}else{if(isNaN(E)==false){L=E;w=x[L];x=new Array();x.push(w);}else{if(isNaN(E)==true){var f=new Array();if(E.toLowerCase()=="odd"){for(var N=0;N<x.length;N++){if(N%2!=0){f.push(x[N]);}}x=f;}else{if(E.toLowerCase()=="even"){for(var N=0;N<x.length;N++){if(N%2==0){f.push(x[N]);}}x=f;}else{if(E.indexOf("==")>-1){var F=Number(E.split("==")[1]);var H=x[F];if(H!=undefined){f.push(H);}x=f;}else{if(E.indexOf(">=")>-1){var F=Number(E.split(">=")[1]);for(var N=0;N<x.length;N++){if(N>=F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}else{if(E.indexOf("<=")>-1){var F=Number(E.split("<=")[1]);for(var N=0;N<x.length;N++){if(N<=F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}else{if(E.indexOf("<")>-1){var F=Number(E.split("<")[1]);for(var N=0;N<x.length;N++){if(N<F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}else{if(E.indexOf(">")>-1){var F=Number(E.split(">")[1]);for(var N=0;N<x.length;N++){if(N>F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}}}}}}}}}}}}}else{x=x;}}}else{if(n.indexOf("#")==0||n.indexOf("#")==1){o=true;x=new Array();n=n.split("#")[1];for(var P=0;P<D.length;P++){c=D[P];var p=[c.getElementById(n)];if(p.length>0){for(var O=0;O<p.length;O++){x.push(p[O]);}}if(E!=undefined){if(typeof(E)=="object"&&(E.length)>=0&&(typeof(E)).toLowerCase().indexOf("node")<0){var K=new Array();K=E;var f=new Array();for(var N=0;N<K.length;N++){var F=x[K[N]];if(F!=undefined){f.push(F);}}x=f;}else{if(typeof(E)=="function"){var K=new Array();K=E();var f=new Array();for(var N=0;N<K.length;N++){var F=x[K[N]];if(F!=undefined){f.push(F);}}x=f;}else{if(E==-1){L=x.length-1;w=x[L];x=new Array();x.push(w);}else{if(isNaN(E)==false){L=E;w=x[L];x=new Array();x.push(w);}else{if(isNaN(E)==true){var f=new Array();if(E.toLowerCase()=="odd"){for(var N=0;N<x.length;N++){if(N%2!=0){f.push(x[N]);}}x=f;}else{if(E.toLowerCase()=="even"){for(var N=0;N<x.length;N++){if(N%2==0){f.push(x[N]);}}x=f;}else{if(E.indexOf("==")>-1){var F=Number(E.split("==")[1]);var H=x[F];if(H!=undefined){f.push(H);}x=f;}else{if(E.indexOf(">=")>-1){var F=Number(E.split(">=")[1]);for(var N=0;N<x.length;N++){if(N>=F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}else{if(E.indexOf("<=")>-1){var F=Number(E.split("<=")[1]);for(var N=0;N<x.length;N++){if(N<=F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}else{if(E.indexOf("<")>-1){var F=Number(E.split("<")[1]);for(var N=0;N<x.length;N++){if(N<F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}else{if(E.indexOf(">")>-1){var F=Number(E.split(">")[1]);for(var N=0;N<x.length;N++){if(N>F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}}}}}}}}}}}}}else{x=x;}}}else{B=true;x=new Array();if(n.indexOf("+")>-1){n=n.split("+")[1];}else{if(n.indexOf("-")>-1){n=n.split("-")[1];}}for(var P=0;P<D.length;P++){c=D[P];var p=c.getElementsByTagName(n);if(p.length>0){for(var O=0;O<p.length;O++){x.push(p[O]);}}if(E!=undefined){if(typeof(E)=="object"&&(E.length)>=0&&(typeof(E)).toLowerCase().indexOf("node")<0){var K=new Array();K=E;var f=new Array();for(var N=0;N<K.length;N++){var F=x[K[N]];if(F!=undefined){f.push(F);}}x=f;}else{if(typeof(E)=="function"){var K=new Array();K=E();var f=new Array();for(var N=0;N<K.length;N++){var F=x[K[N]];if(F!=undefined){f.push(F);}}x=f;}else{if(E==-1){L=x.length-1;w=x[L];x=new Array();x.push(w);}else{if(isNaN(E)==false){L=E;w=x[L];x=new Array();x.push(w);}else{if(isNaN(E)==true){var f=new Array();if(E.toLowerCase()=="odd"){for(var N=0;N<x.length;N++){if(N%2!=0){f.push(x[N]);}}x=f;}else{if(E.toLowerCase()=="even"){for(var N=0;N<x.length;N++){if(N%2==0){f.push(x[N]);}}x=f;}else{if(E.indexOf("==")>-1){var F=Number(E.split("==")[1]);var H=x[F];if(H!=undefined){f.push(H);}x=f;}else{if(E.indexOf(">=")>-1){var F=Number(E.split(">=")[1]);for(var N=0;N<x.length;N++){if(N>=F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}else{if(E.indexOf("<=")>-1){var F=Number(E.split("<=")[1]);for(var N=0;N<x.length;N++){if(N<=F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}else{if(E.indexOf("<")>-1){var F=Number(E.split("<")[1]);for(var N=0;N<x.length;N++){if(N<F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}else{if(E.indexOf(">")>-1){var F=Number(E.split(">")[1]);for(var N=0;N<x.length;N++){if(N>F){var H=x[N];if(H!=undefined){f.push(H);}}}x=f;}}}}}}}}}}}}}else{x=x;}}}}}if(d==true){var f=new Array();for(var P=0;P<x.length;P++){var H=x[P].childNodes;if(H[0]!=undefined&&H.length>0){for(var O=0;O<H.length;O++){f.push(H[O]);}}}x=f;}else{if(b==true){var f=new Array();for(var P=0;P<x.length;P++){var H=x[P].parentNode;if(H!=undefined){f.push(H);}}x=y.getUniqueArray(f);}else{u=true;}}}y._debug=r;y.$Q=n;y.$target=c;y.$nodeIndex=E;y._isClassName=e;y._isIdName=o;y._isTagName=B;y._isGetParent=b;y._isGetChildren=d;y._isGetCurrent=u;y._nodeList=x;y._childIndexInParentList=J;y._attributeList=l;y._styleList=q;y._innerTextList=a;y._innerHTMLList=I;y._currentNodeIndex=L;y._node=w;y._targetList=D;y._bodyFilesArr=h;y._headFilesArr=v;var g=window.setInterval("onCheck()",1);window.onCheck=function(){if(document.getElementsByTagName("body").length>0){window.clearInterval(g);y.trace("cupQ: onDocumentReady() called.");y.internalimport();y.onDocumentReady();window.onCheck=function(){};}};window.addEventListener("load",function(){y.onWindowLoad();y.trace("cupQ: onWindowLoad() called.");},false);function R(j){var i=new Array();if((j.indexOf(".")>-1||j.indexOf("#")>-1)&&(j.indexOf("+")>-1||j.indexOf("-")>-1)&&j.indexOf("[")>-1&&j.indexOf("]")>-1){i[0]=(j.substr(2,j.indexOf("[")));i[1]=(j.substr(j.indexOf("[")+1,((j.length-2)-j.indexOf("["))));}if((j.indexOf(".")>-1||j.indexOf("#")>-1)&&j.indexOf("[")>-1&&j.indexOf("]")>-1){i[0]=(j.substr(1,j.indexOf("[")-1));i[1]=(j.substr(j.indexOf("[")+1,((j.length-2)-j.indexOf("["))));}else{if(j.indexOf("[")>-1&&j.indexOf("]")>-1&&(j.indexOf("+")>-1||j.indexOf("-")>-1)){i[0]=(j.substr(1,j.indexOf("[")-1));i[1]=(j.substr(j.indexOf("[")+1,((j.length-2)-j.indexOf("["))));}else{if(j.indexOf("[")>-1&&j.indexOf("]")>-1){i[0]=(j.substr(0,j.indexOf("[")));i[1]=(j.substr(j.indexOf("[")+1,((j.length-2)-j.indexOf("["))));}}}return i;}return y;};