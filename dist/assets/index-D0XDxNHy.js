(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const dt={lassomption:{label:"L'Assomption River",qMin:5,qMax:500,djgcMax:1300,djdcMax:300,qBankfull:350,djgcTicks:[0,150,300,450,600,750,900,1050,1200],djdcTicks:[0,50,100,150,200,250,300],djgcZones:{greenYellow:[{dj:0,q:200},{dj:110,q:200},{dj:50,q:150},{dj:50,q:50},{dj:1300,q:50}],yellowRed:[{dj:0,q:250},{dj:150,q:250},{dj:110,q:150},{dj:110,q:100},{dj:1300,q:100}]},djdcZones:{greenYellow:[{dj:0,q:50},{dj:120,q:50},{dj:250,q:150},{dj:220,q:200},{dj:300,q:200}],yellowRed:[{dj:0,q:100},{dj:120,q:100},{dj:160,q:150},{dj:120,q:250},{dj:300,q:250}]}},montmorency:{label:"Montmorency River",qMin:5,qMax:450,djgcMax:1100,djdcMax:260,qBankfull:240,djgcTicks:[0,200,400,600,800,1e3],djdcTicks:[0,50,100,150,200,250],djgcZones:{greenYellow:[{dj:0,q:40},{dj:1100,q:40}],yellowRed:[{dj:0,q:80},{dj:1100,q:80}]},djdcZones:{greenYellow:[{dj:0,q:40},{dj:260,q:60}],yellowRed:[{dj:0,q:110},{dj:260,q:200}]}},steanne:{label:"Ste-Anne River",qMin:5,qMax:400,djgcMax:1e3,djdcMax:240,qBankfull:220,djgcTicks:[0,200,400,600,800,1e3],djdcTicks:[0,50,100,150,200,240],djgcZones:{greenYellow:[{dj:0,q:35},{dj:1e3,q:35}],yellowRed:[{dj:0,q:70},{dj:1e3,q:70}]},djdcZones:{greenYellow:[{dj:0,q:35},{dj:240,q:60}],yellowRed:[{dj:0,q:100},{dj:240,q:190}]}}};function zn(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function tu(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Ra(t){let e,n,i;t.length!==2?(e=zn,n=(a,l)=>zn(t(a),l),i=(a,l)=>t(a)-l):(e=t===zn||t===tu?t:nu,n=t,i=t);function r(a,l,c=0,h=a.length){if(c<h){if(e(l,l)!==0)return h;do{const u=c+h>>>1;n(a[u],l)<0?c=u+1:h=u}while(c<h)}return c}function s(a,l,c=0,h=a.length){if(c<h){if(e(l,l)!==0)return h;do{const u=c+h>>>1;n(a[u],l)<=0?c=u+1:h=u}while(c<h)}return c}function o(a,l,c=0,h=a.length){const u=r(a,l,c,h-1);return u>c&&i(a[u-1],l)>-i(a[u],l)?u-1:u}return{left:r,center:o,right:s}}function nu(){return 0}function iu(t){return t===null?NaN:+t}const ru=Ra(zn),su=ru.right;Ra(iu).center;const ou=Math.sqrt(50),au=Math.sqrt(10),lu=Math.sqrt(2);function Xn(t,e,n){const i=(e-t)/Math.max(0,n),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),o=s>=ou?10:s>=au?5:s>=lu?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/o,a=Math.round(t*c),l=Math.round(e*c),a/c<t&&++a,l/c>e&&--l,c=-c):(c=Math.pow(10,r)*o,a=Math.round(t/c),l=Math.round(e/c),a*c<t&&++a,l*c>e&&--l),l<a&&.5<=n&&n<2?Xn(t,e,n*2):[a,l,c]}function fr(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const i=e<t,[r,s,o]=i?Xn(e,t,n):Xn(t,e,n);if(!(s>=r))return[];const a=s-r+1,l=new Array(a);if(i)if(o<0)for(let c=0;c<a;++c)l[c]=(s-c)/-o;else for(let c=0;c<a;++c)l[c]=(s-c)*o;else if(o<0)for(let c=0;c<a;++c)l[c]=(r+c)/-o;else for(let c=0;c<a;++c)l[c]=(r+c)*o;return l}function pr(t,e,n){return e=+e,t=+t,n=+n,Xn(t,e,n)[2]}function cu(t,e,n){e=+e,t=+t,n=+n;const i=e<t,r=i?pr(e,t,n):pr(t,e,n);return(i?-1:1)*(r<0?1/-r:r)}function uu(t){return t}var Xi=1,Gn=2,_r=3,Zt=4,eo=1e-6;function hu(t){return"translate("+t+",0)"}function du(t){return"translate(0,"+t+")"}function fu(t){return e=>+t(e)}function pu(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function _u(){return!this.__axis}function Jr(t,e){var n=[],i=null,r=null,s=6,o=6,a=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=t===Xi||t===Zt?-1:1,h=t===Zt||t===Gn?"x":"y",u=t===Xi||t===_r?hu:du;function d(f){var p=i??(e.ticks?e.ticks.apply(e,n):e.domain()),g=r??(e.tickFormat?e.tickFormat.apply(e,n):uu),m=Math.max(s,0)+a,y=e.range(),E=+y[0]+l,C=+y[y.length-1]+l,T=(e.bandwidth?pu:fu)(e.copy(),l),N=f.selection?f.selection():f,Y=N.selectAll(".domain").data([null]),D=N.selectAll(".tick").data(p,e).order(),se=D.exit(),Re=D.enter().append("g").attr("class","tick"),me=D.select("line"),b=D.select("text");Y=Y.merge(Y.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),D=D.merge(Re),me=me.merge(Re.append("line").attr("stroke","currentColor").attr(h+"2",c*s)),b=b.merge(Re.append("text").attr("fill","currentColor").attr(h,c*m).attr("dy",t===Xi?"0em":t===_r?"0.71em":"0.32em")),f!==N&&(Y=Y.transition(f),D=D.transition(f),me=me.transition(f),b=b.transition(f),se=se.transition(f).attr("opacity",eo).attr("transform",function($){return isFinite($=T($))?u($+l):this.getAttribute("transform")}),Re.attr("opacity",eo).attr("transform",function($){var W=this.parentNode.__axis;return u((W&&isFinite(W=W($))?W:T($))+l)})),se.remove(),Y.attr("d",t===Zt||t===Gn?o?"M"+c*o+","+E+"H"+l+"V"+C+"H"+c*o:"M"+l+","+E+"V"+C:o?"M"+E+","+c*o+"V"+l+"H"+C+"V"+c*o:"M"+E+","+l+"H"+C),D.attr("opacity",1).attr("transform",function($){return u(T($)+l)}),me.attr(h+"2",c*s),b.attr(h,c*m).text(g),N.filter(_u).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Gn?"start":t===Zt?"end":"middle"),N.each(function(){this.__axis=T})}return d.scale=function(f){return arguments.length?(e=f,d):e},d.ticks=function(){return n=Array.from(arguments),d},d.tickArguments=function(f){return arguments.length?(n=f==null?[]:Array.from(f),d):n.slice()},d.tickValues=function(f){return arguments.length?(i=f==null?null:Array.from(f),d):i&&i.slice()},d.tickFormat=function(f){return arguments.length?(r=f,d):r},d.tickSize=function(f){return arguments.length?(s=o=+f,d):s},d.tickSizeInner=function(f){return arguments.length?(s=+f,d):s},d.tickSizeOuter=function(f){return arguments.length?(o=+f,d):o},d.tickPadding=function(f){return arguments.length?(a=+f,d):a},d.offset=function(f){return arguments.length?(l=+f,d):l},d}function gu(t){return Jr(Gn,t)}function to(t){return Jr(_r,t)}function Ji(t){return Jr(Zt,t)}var mu={value:()=>{}};function Pa(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Qn(n)}function Qn(t){this._=t}function yu(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Qn.prototype=Pa.prototype={constructor:Qn,on:function(t,e){var n=this._,i=yu(t+"",n),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(t=i[s]).type)&&(r=vu(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(t=i[s]).type)n[r]=no(n[r],t.name,e);else if(e==null)for(r in n)n[r]=no(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Qn(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,s;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],i=0,r=s.length;i<r;++i)s[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,s=i.length;r<s;++r)i[r].value.apply(e,n)}};function vu(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function no(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=mu,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var gr="http://www.w3.org/1999/xhtml";const io={svg:"http://www.w3.org/2000/svg",xhtml:gr,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function xi(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),io.hasOwnProperty(e)?{space:io[e],local:t}:t}function wu(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===gr&&e.documentElement.namespaceURI===gr?e.createElement(t):e.createElementNS(n,t)}}function Cu(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Da(t){var e=xi(t);return(e.local?Cu:wu)(e)}function Eu(){}function Zr(t){return t==null?Eu:function(){return this.querySelector(t)}}function bu(t){typeof t!="function"&&(t=Zr(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=new Array(o),l,c,h=0;h<o;++h)(l=s[h])&&(c=t.call(l,l.__data__,h,s))&&("__data__"in l&&(c.__data__=l.__data__),a[h]=c);return new _e(i,this._parents)}function Su(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function xu(){return[]}function Ma(t){return t==null?xu:function(){return this.querySelectorAll(t)}}function Iu(t){return function(){return Su(t.apply(this,arguments))}}function Tu(t){typeof t=="function"?t=Iu(t):t=Ma(t);for(var e=this._groups,n=e.length,i=[],r=[],s=0;s<n;++s)for(var o=e[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(i.push(t.call(l,l.__data__,c,o)),r.push(l));return new _e(i,r)}function Oa(t){return function(){return this.matches(t)}}function La(t){return function(e){return e.matches(t)}}var Nu=Array.prototype.find;function Au(t){return function(){return Nu.call(this.children,t)}}function ku(){return this.firstElementChild}function Ru(t){return this.select(t==null?ku:Au(typeof t=="function"?t:La(t)))}var Pu=Array.prototype.filter;function Du(){return Array.from(this.children)}function Mu(t){return function(){return Pu.call(this.children,t)}}function Ou(t){return this.selectAll(t==null?Du:Mu(typeof t=="function"?t:La(t)))}function Lu(t){typeof t!="function"&&(t=Oa(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&t.call(l,l.__data__,c,s)&&a.push(l);return new _e(i,this._parents)}function Fa(t){return new Array(t.length)}function Fu(){return new _e(this._enter||this._groups.map(Fa),this._parents)}function Jn(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Jn.prototype={constructor:Jn,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function Bu(t){return function(){return t}}function $u(t,e,n,i,r,s){for(var o=0,a,l=e.length,c=s.length;o<c;++o)(a=e[o])?(a.__data__=s[o],i[o]=a):n[o]=new Jn(t,s[o]);for(;o<l;++o)(a=e[o])&&(r[o]=a)}function Wu(t,e,n,i,r,s,o){var a,l,c=new Map,h=e.length,u=s.length,d=new Array(h),f;for(a=0;a<h;++a)(l=e[a])&&(d[a]=f=o.call(l,l.__data__,a,e)+"",c.has(f)?r[a]=l:c.set(f,l));for(a=0;a<u;++a)f=o.call(t,s[a],a,s)+"",(l=c.get(f))?(i[a]=l,l.__data__=s[a],c.delete(f)):n[a]=new Jn(t,s[a]);for(a=0;a<h;++a)(l=e[a])&&c.get(d[a])===l&&(r[a]=l)}function ju(t){return t.__data__}function qu(t,e){if(!arguments.length)return Array.from(this,ju);var n=e?Wu:$u,i=this._parents,r=this._groups;typeof t!="function"&&(t=Bu(t));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var h=i[c],u=r[c],d=u.length,f=Uu(t.call(h,h&&h.__data__,c,i)),p=f.length,g=a[c]=new Array(p),m=o[c]=new Array(p),y=l[c]=new Array(d);n(h,u,g,m,y,f,e);for(var E=0,C=0,T,N;E<p;++E)if(T=g[E]){for(E>=C&&(C=E+1);!(N=m[C])&&++C<p;);T._next=N||null}}return o=new _e(o,i),o._enter=a,o._exit=l,o}function Uu(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Vu(){return new _e(this._exit||this._groups.map(Fa),this._parents)}function Hu(t,e,n){var i=this.enter(),r=this,s=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?s.remove():n(s),i&&r?i.merge(r).order():r}function zu(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,s=i.length,o=Math.min(r,s),a=new Array(r),l=0;l<o;++l)for(var c=n[l],h=i[l],u=c.length,d=a[l]=new Array(u),f,p=0;p<u;++p)(f=c[p]||h[p])&&(d[p]=f);for(;l<r;++l)a[l]=n[l];return new _e(a,this._parents)}function Gu(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function Qu(t){t||(t=Yu);function e(u,d){return u&&d?t(u.__data__,d.__data__):!u-!d}for(var n=this._groups,i=n.length,r=new Array(i),s=0;s<i;++s){for(var o=n[s],a=o.length,l=r[s]=new Array(a),c,h=0;h<a;++h)(c=o[h])&&(l[h]=c);l.sort(e)}return new _e(r,this._parents).order()}function Yu(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function Ku(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Xu(){return Array.from(this)}function Ju(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function Zu(){let t=0;for(const e of this)++t;return t}function eh(){return!this.node()}function th(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],s=0,o=r.length,a;s<o;++s)(a=r[s])&&t.call(a,a.__data__,s,r);return this}function nh(t){return function(){this.removeAttribute(t)}}function ih(t){return function(){this.removeAttributeNS(t.space,t.local)}}function rh(t,e){return function(){this.setAttribute(t,e)}}function sh(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function oh(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function ah(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function lh(t,e){var n=xi(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?ih:nh:typeof e=="function"?n.local?ah:oh:n.local?sh:rh)(n,e))}function Ba(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function ch(t){return function(){this.style.removeProperty(t)}}function uh(t,e,n){return function(){this.style.setProperty(t,e,n)}}function hh(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function dh(t,e,n){return arguments.length>1?this.each((e==null?ch:typeof e=="function"?hh:uh)(t,e,n??"")):Rt(this.node(),t)}function Rt(t,e){return t.style.getPropertyValue(e)||Ba(t).getComputedStyle(t,null).getPropertyValue(e)}function fh(t){return function(){delete this[t]}}function ph(t,e){return function(){this[t]=e}}function _h(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function gh(t,e){return arguments.length>1?this.each((e==null?fh:typeof e=="function"?_h:ph)(t,e)):this.node()[t]}function $a(t){return t.trim().split(/^|\s+/)}function es(t){return t.classList||new Wa(t)}function Wa(t){this._node=t,this._names=$a(t.getAttribute("class")||"")}Wa.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function ja(t,e){for(var n=es(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function qa(t,e){for(var n=es(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function mh(t){return function(){ja(this,t)}}function yh(t){return function(){qa(this,t)}}function vh(t,e){return function(){(e.apply(this,arguments)?ja:qa)(this,t)}}function wh(t,e){var n=$a(t+"");if(arguments.length<2){for(var i=es(this.node()),r=-1,s=n.length;++r<s;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?vh:e?mh:yh)(n,e))}function Ch(){this.textContent=""}function Eh(t){return function(){this.textContent=t}}function bh(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function Sh(t){return arguments.length?this.each(t==null?Ch:(typeof t=="function"?bh:Eh)(t)):this.node().textContent}function xh(){this.innerHTML=""}function Ih(t){return function(){this.innerHTML=t}}function Th(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function Nh(t){return arguments.length?this.each(t==null?xh:(typeof t=="function"?Th:Ih)(t)):this.node().innerHTML}function Ah(){this.nextSibling&&this.parentNode.appendChild(this)}function kh(){return this.each(Ah)}function Rh(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ph(){return this.each(Rh)}function Dh(t){var e=typeof t=="function"?t:Da(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function Mh(){return null}function Oh(t,e){var n=typeof t=="function"?t:Da(t),i=e==null?Mh:typeof e=="function"?e:Zr(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function Lh(){var t=this.parentNode;t&&t.removeChild(this)}function Fh(){return this.each(Lh)}function Bh(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function $h(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Wh(t){return this.select(t?$h:Bh)}function jh(t){return arguments.length?this.property("__data__",t):this.node().__data__}function qh(t){return function(e){t.call(this,e,this.__data__)}}function Uh(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function Vh(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,s;n<r;++n)s=e[n],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):e[++i]=s;++i?e.length=i:delete this.__on}}}function Hh(t,e,n){return function(){var i=this.__on,r,s=qh(e);if(i){for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=n),r.value=e;return}}this.addEventListener(t.type,s,n),r={type:t.type,name:t.name,value:e,listener:s,options:n},i?i.push(r):this.__on=[r]}}function zh(t,e,n){var i=Uh(t+""),r,s=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,h;l<c;++l)for(r=0,h=a[l];r<s;++r)if((o=i[r]).type===h.type&&o.name===h.name)return h.value}return}for(a=e?Hh:Vh,r=0;r<s;++r)this.each(a(i[r],e,n));return this}function Ua(t,e,n){var i=Ba(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function Gh(t,e){return function(){return Ua(this,t,e)}}function Qh(t,e){return function(){return Ua(this,t,e.apply(this,arguments))}}function Yh(t,e){return this.each((typeof e=="function"?Qh:Gh)(t,e))}function*Kh(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var Xh=[null];function _e(t,e){this._groups=t,this._parents=e}function Nn(){return new _e([[document.documentElement]],Xh)}function Jh(){return this}_e.prototype=Nn.prototype={constructor:_e,select:bu,selectAll:Tu,selectChild:Ru,selectChildren:Ou,filter:Lu,data:qu,enter:Fu,exit:Vu,join:Hu,merge:zu,selection:Jh,order:Gu,sort:Qu,call:Ku,nodes:Xu,node:Ju,size:Zu,empty:eh,each:th,attr:lh,style:dh,property:gh,classed:wh,text:Sh,html:Nh,raise:kh,lower:Ph,append:Dh,insert:Oh,remove:Fh,clone:Wh,datum:jh,on:zh,dispatch:Yh,[Symbol.iterator]:Kh};function Zh(t){return new _e([[document.querySelector(t)]],[document.documentElement])}function ts(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Va(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function An(){}var un=.7,Zn=1/un,Tt="\\s*([+-]?\\d+)\\s*",hn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ie="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ed=/^#([0-9a-f]{3,8})$/,td=new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`),nd=new RegExp(`^rgb\\(${Ie},${Ie},${Ie}\\)$`),id=new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${hn}\\)$`),rd=new RegExp(`^rgba\\(${Ie},${Ie},${Ie},${hn}\\)$`),sd=new RegExp(`^hsl\\(${hn},${Ie},${Ie}\\)$`),od=new RegExp(`^hsla\\(${hn},${Ie},${Ie},${hn}\\)$`),ro={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ts(An,ft,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:so,formatHex:so,formatHex8:ad,formatHsl:ld,formatRgb:oo,toString:oo});function so(){return this.rgb().formatHex()}function ad(){return this.rgb().formatHex8()}function ld(){return Ha(this).formatHsl()}function oo(){return this.rgb().formatRgb()}function ft(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=ed.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?ao(e):n===3?new te(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Wn(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Wn(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=td.exec(t))?new te(e[1],e[2],e[3],1):(e=nd.exec(t))?new te(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=id.exec(t))?Wn(e[1],e[2],e[3],e[4]):(e=rd.exec(t))?Wn(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=sd.exec(t))?uo(e[1],e[2]/100,e[3]/100,1):(e=od.exec(t))?uo(e[1],e[2]/100,e[3]/100,e[4]):ro.hasOwnProperty(t)?ao(ro[t]):t==="transparent"?new te(NaN,NaN,NaN,0):null}function ao(t){return new te(t>>16&255,t>>8&255,t&255,1)}function Wn(t,e,n,i){return i<=0&&(t=e=n=NaN),new te(t,e,n,i)}function cd(t){return t instanceof An||(t=ft(t)),t?(t=t.rgb(),new te(t.r,t.g,t.b,t.opacity)):new te}function mr(t,e,n,i){return arguments.length===1?cd(t):new te(t,e,n,i??1)}function te(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}ts(te,mr,Va(An,{brighter(t){return t=t==null?Zn:Math.pow(Zn,t),new te(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?un:Math.pow(un,t),new te(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new te(ut(this.r),ut(this.g),ut(this.b),ei(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:lo,formatHex:lo,formatHex8:ud,formatRgb:co,toString:co}));function lo(){return`#${lt(this.r)}${lt(this.g)}${lt(this.b)}`}function ud(){return`#${lt(this.r)}${lt(this.g)}${lt(this.b)}${lt((isNaN(this.opacity)?1:this.opacity)*255)}`}function co(){const t=ei(this.opacity);return`${t===1?"rgb(":"rgba("}${ut(this.r)}, ${ut(this.g)}, ${ut(this.b)}${t===1?")":`, ${t})`}`}function ei(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function ut(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function lt(t){return t=ut(t),(t<16?"0":"")+t.toString(16)}function uo(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Ce(t,e,n,i)}function Ha(t){if(t instanceof Ce)return new Ce(t.h,t.s,t.l,t.opacity);if(t instanceof An||(t=ft(t)),!t)return new Ce;if(t instanceof Ce)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),s=Math.max(e,n,i),o=NaN,a=s-r,l=(s+r)/2;return a?(e===s?o=(n-i)/a+(n<i)*6:n===s?o=(i-e)/a+2:o=(e-n)/a+4,a/=l<.5?s+r:2-s-r,o*=60):a=l>0&&l<1?0:o,new Ce(o,a,l,t.opacity)}function hd(t,e,n,i){return arguments.length===1?Ha(t):new Ce(t,e,n,i??1)}function Ce(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}ts(Ce,hd,Va(An,{brighter(t){return t=t==null?Zn:Math.pow(Zn,t),new Ce(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?un:Math.pow(un,t),new Ce(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new te(Zi(t>=240?t-240:t+120,r,i),Zi(t,r,i),Zi(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Ce(ho(this.h),jn(this.s),jn(this.l),ei(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=ei(this.opacity);return`${t===1?"hsl(":"hsla("}${ho(this.h)}, ${jn(this.s)*100}%, ${jn(this.l)*100}%${t===1?")":`, ${t})`}`}}));function ho(t){return t=(t||0)%360,t<0?t+360:t}function jn(t){return Math.max(0,Math.min(1,t||0))}function Zi(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const ns=t=>()=>t;function dd(t,e){return function(n){return t+n*e}}function fd(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function pd(t){return(t=+t)==1?za:function(e,n){return n-e?fd(e,n,t):ns(isNaN(e)?n:e)}}function za(t,e){var n=e-t;return n?dd(t,n):ns(isNaN(t)?e:t)}const ti=(function t(e){var n=pd(e);function i(r,s){var o=n((r=mr(r)).r,(s=mr(s)).r),a=n(r.g,s.g),l=n(r.b,s.b),c=za(r.opacity,s.opacity);return function(h){return r.r=o(h),r.g=a(h),r.b=l(h),r.opacity=c(h),r+""}}return i.gamma=t,i})(1);function _d(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(s){for(r=0;r<n;++r)i[r]=t[r]*(1-s)+e[r]*s;return i}}function gd(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function md(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),s=new Array(n),o;for(o=0;o<i;++o)r[o]=is(t[o],e[o]);for(;o<n;++o)s[o]=e[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function yd(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function we(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function vd(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=is(t[r],e[r]):i[r]=e[r];return function(s){for(r in n)i[r]=n[r](s);return i}}var yr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,er=new RegExp(yr.source,"g");function wd(t){return function(){return t}}function Cd(t){return function(e){return t(e)+""}}function Ga(t,e){var n=yr.lastIndex=er.lastIndex=0,i,r,s,o=-1,a=[],l=[];for(t=t+"",e=e+"";(i=yr.exec(t))&&(r=er.exec(e));)(s=r.index)>n&&(s=e.slice(n,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:we(i,r)})),n=er.lastIndex;return n<e.length&&(s=e.slice(n),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?Cd(l[0].x):wd(e):(e=l.length,function(c){for(var h=0,u;h<e;++h)a[(u=l[h]).i]=u.x(c);return a.join("")})}function is(t,e){var n=typeof e,i;return e==null||n==="boolean"?ns(e):(n==="number"?we:n==="string"?(i=ft(e))?(e=i,ti):Ga:e instanceof ft?ti:e instanceof Date?yd:gd(e)?_d:Array.isArray(e)?md:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?vd:we)(t,e)}function Ed(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}var fo=180/Math.PI,vr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Qa(t,e,n,i,r,s){var o,a,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(e,t)*fo,skewX:Math.atan(l)*fo,scaleX:o,scaleY:a}}var qn;function bd(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?vr:Qa(e.a,e.b,e.c,e.d,e.e,e.f)}function Sd(t){return t==null||(qn||(qn=document.createElementNS("http://www.w3.org/2000/svg","g")),qn.setAttribute("transform",t),!(t=qn.transform.baseVal.consolidate()))?vr:(t=t.matrix,Qa(t.a,t.b,t.c,t.d,t.e,t.f))}function Ya(t,e,n,i){function r(c){return c.length?c.pop()+" ":""}function s(c,h,u,d,f,p){if(c!==u||h!==d){var g=f.push("translate(",null,e,null,n);p.push({i:g-4,x:we(c,u)},{i:g-2,x:we(h,d)})}else(u||d)&&f.push("translate("+u+e+d+n)}function o(c,h,u,d){c!==h?(c-h>180?h+=360:h-c>180&&(c+=360),d.push({i:u.push(r(u)+"rotate(",null,i)-2,x:we(c,h)})):h&&u.push(r(u)+"rotate("+h+i)}function a(c,h,u,d){c!==h?d.push({i:u.push(r(u)+"skewX(",null,i)-2,x:we(c,h)}):h&&u.push(r(u)+"skewX("+h+i)}function l(c,h,u,d,f,p){if(c!==u||h!==d){var g=f.push(r(f)+"scale(",null,",",null,")");p.push({i:g-4,x:we(c,u)},{i:g-2,x:we(h,d)})}else(u!==1||d!==1)&&f.push(r(f)+"scale("+u+","+d+")")}return function(c,h){var u=[],d=[];return c=t(c),h=t(h),s(c.translateX,c.translateY,h.translateX,h.translateY,u,d),o(c.rotate,h.rotate,u,d),a(c.skewX,h.skewX,u,d),l(c.scaleX,c.scaleY,h.scaleX,h.scaleY,u,d),c=h=null,function(f){for(var p=-1,g=d.length,m;++p<g;)u[(m=d[p]).i]=m.x(f);return u.join("")}}}var xd=Ya(bd,"px, ","px)","deg)"),Id=Ya(Sd,", ",")",")"),Pt=0,en=0,Qt=0,Ka=1e3,ni,tn,ii=0,pt=0,Ii=0,dn=typeof performance=="object"&&performance.now?performance:Date,Xa=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function rs(){return pt||(Xa(Td),pt=dn.now()+Ii)}function Td(){pt=0}function ri(){this._call=this._time=this._next=null}ri.prototype=Ja.prototype={constructor:ri,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?rs():+n)+(e==null?0:+e),!this._next&&tn!==this&&(tn?tn._next=this:ni=this,tn=this),this._call=t,this._time=n,wr()},stop:function(){this._call&&(this._call=null,this._time=1/0,wr())}};function Ja(t,e,n){var i=new ri;return i.restart(t,e,n),i}function Nd(){rs(),++Pt;for(var t=ni,e;t;)(e=pt-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Pt}function po(){pt=(ii=dn.now())+Ii,Pt=en=0;try{Nd()}finally{Pt=0,kd(),pt=0}}function Ad(){var t=dn.now(),e=t-ii;e>Ka&&(Ii-=e,ii=t)}function kd(){for(var t,e=ni,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:ni=n);tn=t,wr(i)}function wr(t){if(!Pt){en&&(en=clearTimeout(en));var e=t-pt;e>24?(t<1/0&&(en=setTimeout(po,t-dn.now()-Ii)),Qt&&(Qt=clearInterval(Qt))):(Qt||(ii=dn.now(),Qt=setInterval(Ad,Ka)),Pt=1,Xa(po))}}function _o(t,e,n){var i=new ri;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var Rd=Pa("start","end","cancel","interrupt"),Pd=[],Za=0,go=1,Cr=2,Yn=3,mo=4,Er=5,Kn=6;function Ti(t,e,n,i,r,s){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;Dd(t,n,{name:e,index:i,group:r,on:Rd,tween:Pd,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Za})}function ss(t,e){var n=Se(t,e);if(n.state>Za)throw new Error("too late; already scheduled");return n}function ke(t,e){var n=Se(t,e);if(n.state>Yn)throw new Error("too late; already running");return n}function Se(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function Dd(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=Ja(s,0,n.time);function s(c){n.state=go,n.timer.restart(o,n.delay,n.time),n.delay<=c&&o(c-n.delay)}function o(c){var h,u,d,f;if(n.state!==go)return l();for(h in i)if(f=i[h],f.name===n.name){if(f.state===Yn)return _o(o);f.state===mo?(f.state=Kn,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete i[h]):+h<e&&(f.state=Kn,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete i[h])}if(_o(function(){n.state===Yn&&(n.state=mo,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=Cr,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Cr){for(n.state=Yn,r=new Array(d=n.tween.length),h=0,u=-1;h<d;++h)(f=n.tween[h].value.call(t,t.__data__,n.index,n.group))&&(r[++u]=f);r.length=u+1}}function a(c){for(var h=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=Er,1),u=-1,d=r.length;++u<d;)r[u].call(t,h);n.state===Er&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Kn,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function Md(t,e){var n=t.__transition,i,r,s=!0,o;if(n){e=e==null?null:e+"";for(o in n){if((i=n[o]).name!==e){s=!1;continue}r=i.state>Cr&&i.state<Er,i.state=Kn,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[o]}s&&delete t.__transition}}function Od(t){return this.each(function(){Md(this,t)})}function Ld(t,e){var n,i;return function(){var r=ke(this,t),s=r.tween;if(s!==n){i=n=s;for(var o=0,a=i.length;o<a;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function Fd(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var s=ke(this,t),o=s.tween;if(o!==i){r=(i=o).slice();for(var a={name:e,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}s.tween=r}}function Bd(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=Se(this.node(),n).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===t)return o.value;return null}return this.each((e==null?Ld:Fd)(n,t,e))}function os(t,e,n){var i=t._id;return t.each(function(){var r=ke(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return Se(r,i).value[e]}}function el(t,e){var n;return(typeof e=="number"?we:e instanceof ft?ti:(n=ft(e))?(e=n,ti):Ga)(t,e)}function $d(t){return function(){this.removeAttribute(t)}}function Wd(t){return function(){this.removeAttributeNS(t.space,t.local)}}function jd(t,e,n){var i,r=n+"",s;return function(){var o=this.getAttribute(t);return o===r?null:o===i?s:s=e(i=o,n)}}function qd(t,e,n){var i,r=n+"",s;return function(){var o=this.getAttributeNS(t.space,t.local);return o===r?null:o===i?s:s=e(i=o,n)}}function Ud(t,e,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a)))}}function Vd(t,e,n){var i,r,s;return function(){var o,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a)))}}function Hd(t,e){var n=xi(t),i=n==="transform"?Id:el;return this.attrTween(t,typeof e=="function"?(n.local?Vd:Ud)(n,i,os(this,"attr."+t,e)):e==null?(n.local?Wd:$d)(n):(n.local?qd:jd)(n,i,e))}function zd(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function Gd(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function Qd(t,e){var n,i;function r(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&Gd(t,s)),n}return r._value=e,r}function Yd(t,e){var n,i;function r(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&zd(t,s)),n}return r._value=e,r}function Kd(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=xi(t);return this.tween(n,(i.local?Qd:Yd)(i,e))}function Xd(t,e){return function(){ss(this,t).delay=+e.apply(this,arguments)}}function Jd(t,e){return e=+e,function(){ss(this,t).delay=e}}function Zd(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?Xd:Jd)(e,t)):Se(this.node(),e).delay}function ef(t,e){return function(){ke(this,t).duration=+e.apply(this,arguments)}}function tf(t,e){return e=+e,function(){ke(this,t).duration=e}}function nf(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?ef:tf)(e,t)):Se(this.node(),e).duration}function rf(t,e){if(typeof e!="function")throw new Error;return function(){ke(this,t).ease=e}}function sf(t){var e=this._id;return arguments.length?this.each(rf(e,t)):Se(this.node(),e).ease}function of(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;ke(this,t).ease=n}}function af(t){if(typeof t!="function")throw new Error;return this.each(of(this._id,t))}function lf(t){typeof t!="function"&&(t=Oa(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var s=e[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&t.call(l,l.__data__,c,s)&&a.push(l);return new Be(i,this._parents,this._name,this._id)}function cf(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,s=Math.min(i,r),o=new Array(i),a=0;a<s;++a)for(var l=e[a],c=n[a],h=l.length,u=o[a]=new Array(h),d,f=0;f<h;++f)(d=l[f]||c[f])&&(u[f]=d);for(;a<i;++a)o[a]=e[a];return new Be(o,this._parents,this._name,this._id)}function uf(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function hf(t,e,n){var i,r,s=uf(e)?ss:ke;return function(){var o=s(this,t),a=o.on;a!==i&&(r=(i=a).copy()).on(e,n),o.on=r}}function df(t,e){var n=this._id;return arguments.length<2?Se(this.node(),n).on.on(t):this.each(hf(n,t,e))}function ff(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function pf(){return this.on("end.remove",ff(this._id))}function _f(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Zr(t));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var a=i[o],l=a.length,c=s[o]=new Array(l),h,u,d=0;d<l;++d)(h=a[d])&&(u=t.call(h,h.__data__,d,a))&&("__data__"in h&&(u.__data__=h.__data__),c[d]=u,Ti(c[d],e,n,d,c,Se(h,n)));return new Be(s,this._parents,e,n)}function gf(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Ma(t));for(var i=this._groups,r=i.length,s=[],o=[],a=0;a<r;++a)for(var l=i[a],c=l.length,h,u=0;u<c;++u)if(h=l[u]){for(var d=t.call(h,h.__data__,u,l),f,p=Se(h,n),g=0,m=d.length;g<m;++g)(f=d[g])&&Ti(f,e,n,g,d,p);s.push(d),o.push(h)}return new Be(s,o,e,n)}var mf=Nn.prototype.constructor;function yf(){return new mf(this._groups,this._parents)}function vf(t,e){var n,i,r;return function(){var s=Rt(this,t),o=(this.style.removeProperty(t),Rt(this,t));return s===o?null:s===n&&o===i?r:r=e(n=s,i=o)}}function tl(t){return function(){this.style.removeProperty(t)}}function wf(t,e,n){var i,r=n+"",s;return function(){var o=Rt(this,t);return o===r?null:o===i?s:s=e(i=o,n)}}function Cf(t,e,n){var i,r,s;return function(){var o=Rt(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),Rt(this,t))),o===l?null:o===i&&l===r?s:(r=l,s=e(i=o,a))}}function Ef(t,e){var n,i,r,s="style."+e,o="end."+s,a;return function(){var l=ke(this,t),c=l.on,h=l.value[s]==null?a||(a=tl(e)):void 0;(c!==n||r!==h)&&(i=(n=c).copy()).on(o,r=h),l.on=i}}function bf(t,e,n){var i=(t+="")=="transform"?xd:el;return e==null?this.styleTween(t,vf(t,i)).on("end.style."+t,tl(t)):typeof e=="function"?this.styleTween(t,Cf(t,i,os(this,"style."+t,e))).each(Ef(this._id,t)):this.styleTween(t,wf(t,i,e),n).on("end.style."+t,null)}function Sf(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function xf(t,e,n){var i,r;function s(){var o=e.apply(this,arguments);return o!==r&&(i=(r=o)&&Sf(t,o,n)),i}return s._value=e,s}function If(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,xf(t,e,n??""))}function Tf(t){return function(){this.textContent=t}}function Nf(t){return function(){var e=t(this);this.textContent=e??""}}function Af(t){return this.tween("text",typeof t=="function"?Nf(os(this,"text",t)):Tf(t==null?"":t+""))}function kf(t){return function(e){this.textContent=t.call(this,e)}}function Rf(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&kf(r)),e}return i._value=t,i}function Pf(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,Rf(t))}function Df(){for(var t=this._name,e=this._id,n=nl(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)if(l=o[c]){var h=Se(l,e);Ti(l,t,n,c,o,{time:h.time+h.delay+h.duration,delay:0,duration:h.duration,ease:h.ease})}return new Be(i,this._parents,t,n)}function Mf(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(s,o){var a={value:o},l={value:function(){--r===0&&s()}};n.each(function(){var c=ke(this,i),h=c.on;h!==t&&(e=(t=h).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&s()})}var Of=0;function Be(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function nl(){return++Of}var De=Nn.prototype;Be.prototype={constructor:Be,select:_f,selectAll:gf,selectChild:De.selectChild,selectChildren:De.selectChildren,filter:lf,merge:cf,selection:yf,transition:Df,call:De.call,nodes:De.nodes,node:De.node,size:De.size,empty:De.empty,each:De.each,on:df,attr:Hd,attrTween:Kd,style:bf,styleTween:If,text:Af,textTween:Pf,remove:pf,tween:Bd,delay:Zd,duration:nf,ease:sf,easeVarying:af,end:Mf,[Symbol.iterator]:De[Symbol.iterator]};function Lf(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Ff={time:null,delay:0,duration:250,ease:Lf};function Bf(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function $f(t){var e,n;t instanceof Be?(e=t._id,t=t._name):(e=nl(),(n=Ff).time=rs(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&Ti(l,t,e,c,o,n||Bf(l,e));return new Be(i,this._parents,t,e)}Nn.prototype.interrupt=Od;Nn.prototype.transition=$f;const br=Math.PI,Sr=2*br,st=1e-6,Wf=Sr-st;function il(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function jf(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return il;const n=10**e;return function(i){this._+=i[0];for(let r=1,s=i.length;r<s;++r)this._+=Math.round(arguments[r]*n)/n+i[r]}}let qf=class{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?il:jf(e)}moveTo(e,n){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,n){this._append`L${this._x1=+e},${this._y1=+n}`}quadraticCurveTo(e,n,i,r){this._append`Q${+e},${+n},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(e,n,i,r,s,o){this._append`C${+e},${+n},${+i},${+r},${this._x1=+s},${this._y1=+o}`}arcTo(e,n,i,r,s){if(e=+e,n=+n,i=+i,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let o=this._x1,a=this._y1,l=i-e,c=r-n,h=o-e,u=a-n,d=h*h+u*u;if(this._x1===null)this._append`M${this._x1=e},${this._y1=n}`;else if(d>st)if(!(Math.abs(u*l-c*h)>st)||!s)this._append`L${this._x1=e},${this._y1=n}`;else{let f=i-o,p=r-a,g=l*l+c*c,m=f*f+p*p,y=Math.sqrt(g),E=Math.sqrt(d),C=s*Math.tan((br-Math.acos((g+d-m)/(2*y*E)))/2),T=C/E,N=C/y;Math.abs(T-1)>st&&this._append`L${e+T*h},${n+T*u}`,this._append`A${s},${s},0,0,${+(u*f>h*p)},${this._x1=e+N*l},${this._y1=n+N*c}`}}arc(e,n,i,r,s,o){if(e=+e,n=+n,i=+i,o=!!o,i<0)throw new Error(`negative radius: ${i}`);let a=i*Math.cos(r),l=i*Math.sin(r),c=e+a,h=n+l,u=1^o,d=o?r-s:s-r;this._x1===null?this._append`M${c},${h}`:(Math.abs(this._x1-c)>st||Math.abs(this._y1-h)>st)&&this._append`L${c},${h}`,i&&(d<0&&(d=d%Sr+Sr),d>Wf?this._append`A${i},${i},0,1,${u},${e-a},${n-l}A${i},${i},0,1,${u},${this._x1=c},${this._y1=h}`:d>st&&this._append`A${i},${i},0,${+(d>=br)},${u},${this._x1=e+i*Math.cos(s)},${this._y1=n+i*Math.sin(s)}`)}rect(e,n,i,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}};function Uf(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function si(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,i=t.slice(0,n);return[i.length>1?i[0]+i.slice(2):i,+t.slice(n+1)]}function Dt(t){return t=si(Math.abs(t)),t?t[1]:NaN}function Vf(t,e){return function(n,i){for(var r=n.length,s=[],o=0,a=t[0],l=0;r>0&&a>0&&(l+a+1>i&&(a=Math.max(1,i-l)),s.push(n.substring(r-=a,r+a)),!((l+=a+1)>i));)a=t[o=(o+1)%t.length];return s.reverse().join(e)}}function Hf(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var zf=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function fn(t){if(!(e=zf.exec(t)))throw new Error("invalid format: "+t);var e;return new as({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}fn.prototype=as.prototype;function as(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}as.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Gf(t){e:for(var e=t.length,n=1,i=-1,r;n<e;++n)switch(t[n]){case".":i=r=n;break;case"0":i===0&&(i=n),r=n;break;default:if(!+t[n])break e;i>0&&(i=0);break}return i>0?t.slice(0,i)+t.slice(r+1):t}var rl;function Qf(t,e){var n=si(t,e);if(!n)return t+"";var i=n[0],r=n[1],s=r-(rl=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return s===o?i:s>o?i+new Array(s-o+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+si(t,Math.max(0,e+s-1))[0]}function yo(t,e){var n=si(t,e);if(!n)return t+"";var i=n[0],r=n[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const vo={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:Uf,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>yo(t*100,e),r:yo,s:Qf,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function wo(t){return t}var Co=Array.prototype.map,Eo=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Yf(t){var e=t.grouping===void 0||t.thousands===void 0?wo:Vf(Co.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",i=t.currency===void 0?"":t.currency[1]+"",r=t.decimal===void 0?".":t.decimal+"",s=t.numerals===void 0?wo:Hf(Co.call(t.numerals,String)),o=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"−":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(u){u=fn(u);var d=u.fill,f=u.align,p=u.sign,g=u.symbol,m=u.zero,y=u.width,E=u.comma,C=u.precision,T=u.trim,N=u.type;N==="n"?(E=!0,N="g"):vo[N]||(C===void 0&&(C=12),T=!0,N="g"),(m||d==="0"&&f==="=")&&(m=!0,d="0",f="=");var Y=g==="$"?n:g==="#"&&/[boxX]/.test(N)?"0"+N.toLowerCase():"",D=g==="$"?i:/[%p]/.test(N)?o:"",se=vo[N],Re=/[defgprs%]/.test(N);C=C===void 0?6:/[gprs]/.test(N)?Math.max(1,Math.min(21,C)):Math.max(0,Math.min(20,C));function me(b){var $=Y,W=D,Pe,Et,rt;if(N==="c")W=se(b)+W,b="";else{b=+b;var A=b<0||1/b<0;if(b=isNaN(b)?l:se(Math.abs(b),C),T&&(b=Gf(b)),A&&+b==0&&p!=="+"&&(A=!1),$=(A?p==="("?p:a:p==="-"||p==="("?"":p)+$,W=(N==="s"?Eo[8+rl/3]:"")+W+(A&&p==="("?")":""),Re){for(Pe=-1,Et=b.length;++Pe<Et;)if(rt=b.charCodeAt(Pe),48>rt||rt>57){W=(rt===46?r+b.slice(Pe+1):b.slice(Pe))+W,b=b.slice(0,Pe);break}}}E&&!m&&(b=e(b,1/0));var ye=$.length+b.length+W.length,oe=ye<y?new Array(y-ye+1).join(d):"";switch(E&&m&&(b=e(oe+b,oe.length?y-W.length:1/0),oe=""),f){case"<":b=$+b+W+oe;break;case"=":b=$+oe+b+W;break;case"^":b=oe.slice(0,ye=oe.length>>1)+$+b+W+oe.slice(ye);break;default:b=oe+$+b+W;break}return s(b)}return me.toString=function(){return u+""},me}function h(u,d){var f=c((u=fn(u),u.type="f",u)),p=Math.max(-8,Math.min(8,Math.floor(Dt(d)/3)))*3,g=Math.pow(10,-p),m=Eo[8+p/3];return function(y){return f(g*y)+m}}return{format:c,formatPrefix:h}}var Un,pn,sl;Kf({thousands:",",grouping:[3],currency:["$",""]});function Kf(t){return Un=Yf(t),pn=Un.format,sl=Un.formatPrefix,Un}function Xf(t){return Math.max(0,-Dt(Math.abs(t)))}function Jf(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Dt(e)/3)))*3-Dt(Math.abs(t)))}function Zf(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,Dt(e)-Dt(t))+1}function ol(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function ep(t){return function(){return t}}function tp(t){return+t}var bo=[0,1];function xt(t){return t}function xr(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:ep(isNaN(e)?NaN:.5)}function np(t,e){var n;return t>e&&(n=t,t=e,e=n),function(i){return Math.max(t,Math.min(e,i))}}function ip(t,e,n){var i=t[0],r=t[1],s=e[0],o=e[1];return r<i?(i=xr(r,i),s=n(o,s)):(i=xr(i,r),s=n(s,o)),function(a){return s(i(a))}}function rp(t,e,n){var i=Math.min(t.length,e.length)-1,r=new Array(i),s=new Array(i),o=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<i;)r[o]=xr(t[o],t[o+1]),s[o]=n(e[o],e[o+1]);return function(a){var l=su(t,a,1,i)-1;return s[l](r[l](a))}}function al(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function ll(){var t=bo,e=bo,n=is,i,r,s,o=xt,a,l,c;function h(){var d=Math.min(t.length,e.length);return o!==xt&&(o=np(t[0],t[d-1])),a=d>2?rp:ip,l=c=null,u}function u(d){return d==null||isNaN(d=+d)?s:(l||(l=a(t.map(i),e,n)))(i(o(d)))}return u.invert=function(d){return o(r((c||(c=a(e,t.map(i),we)))(d)))},u.domain=function(d){return arguments.length?(t=Array.from(d,tp),h()):t.slice()},u.range=function(d){return arguments.length?(e=Array.from(d),h()):e.slice()},u.rangeRound=function(d){return e=Array.from(d),n=Ed,h()},u.clamp=function(d){return arguments.length?(o=d?!0:xt,h()):o!==xt},u.interpolate=function(d){return arguments.length?(n=d,h()):n},u.unknown=function(d){return arguments.length?(s=d,u):s},function(d,f){return i=d,r=f,h()}}function sp(){return ll()(xt,xt)}function op(t,e,n,i){var r=cu(t,e,n),s;switch(i=fn(i??",f"),i.type){case"s":{var o=Math.max(Math.abs(t),Math.abs(e));return i.precision==null&&!isNaN(s=Jf(r,o))&&(i.precision=s),sl(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=Zf(r,Math.max(Math.abs(t),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=Xf(r))&&(i.precision=s-(i.type==="%")*2);break}}return pn(i)}function ap(t){var e=t.domain;return t.ticks=function(n){var i=e();return fr(i[0],i[i.length-1],n??10)},t.tickFormat=function(n,i){var r=e();return op(r[0],r[r.length-1],n??10,i)},t.nice=function(n){n==null&&(n=10);var i=e(),r=0,s=i.length-1,o=i[r],a=i[s],l,c,h=10;for(a<o&&(c=o,o=a,a=c,c=r,r=s,s=c);h-- >0;){if(c=pr(o,a,n),c===l)return i[r]=o,i[s]=a,e(i);if(c>0)o=Math.floor(o/c)*c,a=Math.ceil(a/c)*c;else if(c<0)o=Math.ceil(o*c)/c,a=Math.floor(a*c)/c;else break;l=c}return t},t}function Ir(){var t=sp();return t.copy=function(){return al(t,Ir())},ol.apply(t,arguments),ap(t)}function lp(t,e){t=t.slice();var n=0,i=t.length-1,r=t[n],s=t[i],o;return s<r&&(o=n,n=i,i=o,o=r,r=s,s=o),t[n]=e.floor(r),t[i]=e.ceil(s),t}function So(t){return Math.log(t)}function xo(t){return Math.exp(t)}function cp(t){return-Math.log(-t)}function up(t){return-Math.exp(-t)}function hp(t){return isFinite(t)?+("1e"+t):t<0?0:t}function dp(t){return t===10?hp:t===Math.E?Math.exp:e=>Math.pow(t,e)}function fp(t){return t===Math.E?Math.log:t===10&&Math.log10||t===2&&Math.log2||(t=Math.log(t),e=>Math.log(e)/t)}function Io(t){return(e,n)=>-t(-e,n)}function pp(t){const e=t(So,xo),n=e.domain;let i=10,r,s;function o(){return r=fp(i),s=dp(i),n()[0]<0?(r=Io(r),s=Io(s),t(cp,up)):t(So,xo),e}return e.base=function(a){return arguments.length?(i=+a,o()):i},e.domain=function(a){return arguments.length?(n(a),o()):n()},e.ticks=a=>{const l=n();let c=l[0],h=l[l.length-1];const u=h<c;u&&([c,h]=[h,c]);let d=r(c),f=r(h),p,g;const m=a==null?10:+a;let y=[];if(!(i%1)&&f-d<m){if(d=Math.floor(d),f=Math.ceil(f),c>0){for(;d<=f;++d)for(p=1;p<i;++p)if(g=d<0?p/s(-d):p*s(d),!(g<c)){if(g>h)break;y.push(g)}}else for(;d<=f;++d)for(p=i-1;p>=1;--p)if(g=d>0?p/s(-d):p*s(d),!(g<c)){if(g>h)break;y.push(g)}y.length*2<m&&(y=fr(c,h,m))}else y=fr(d,f,Math.min(f-d,m)).map(s);return u?y.reverse():y},e.tickFormat=(a,l)=>{if(a==null&&(a=10),l==null&&(l=i===10?"s":","),typeof l!="function"&&(!(i%1)&&(l=fn(l)).precision==null&&(l.trim=!0),l=pn(l)),a===1/0)return l;const c=Math.max(1,i*a/e.ticks().length);return h=>{let u=h/s(Math.round(r(h)));return u*i<i-.5&&(u*=i),u<=c?l(h):""}},e.nice=()=>n(lp(n(),{floor:a=>s(Math.floor(r(a))),ceil:a=>s(Math.ceil(r(a)))})),e}function cl(){const t=pp(ll()).domain([1,10]);return t.copy=()=>al(t,cl()).base(t.base()),ol.apply(t,arguments),t}function U(t){return function(){return t}}function ul(t){let e=3;return t.digits=function(n){if(!arguments.length)return e;if(n==null)e=null;else{const i=Math.floor(n);if(!(i>=0))throw new RangeError(`invalid digits: ${n}`);e=i}return t},()=>new qf(e)}function hl(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function dl(t){this._context=t}dl.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e);break}}};function rn(t){return new dl(t)}function fl(t){return t[0]}function pl(t){return t[1]}function oi(t,e){var n=U(!0),i=null,r=rn,s=null,o=ul(a);t=typeof t=="function"?t:t===void 0?fl:U(t),e=typeof e=="function"?e:e===void 0?pl:U(e);function a(l){var c,h=(l=hl(l)).length,u,d=!1,f;for(i==null&&(s=r(f=o())),c=0;c<=h;++c)!(c<h&&n(u=l[c],c,l))===d&&((d=!d)?s.lineStart():s.lineEnd()),d&&s.point(+t(u,c,l),+e(u,c,l));if(f)return s=null,f+""||null}return a.x=function(l){return arguments.length?(t=typeof l=="function"?l:U(+l),a):t},a.y=function(l){return arguments.length?(e=typeof l=="function"?l:U(+l),a):e},a.defined=function(l){return arguments.length?(n=typeof l=="function"?l:U(!!l),a):n},a.curve=function(l){return arguments.length?(r=l,i!=null&&(s=r(i)),a):r},a.context=function(l){return arguments.length?(l==null?i=s=null:s=r(i=l),a):i},a}function _p(t,e,n){var i=null,r=U(!0),s=null,o=rn,a=null,l=ul(c);t=typeof t=="function"?t:t===void 0?fl:U(+t),e=typeof e=="function"?e:U(e===void 0?0:+e),n=typeof n=="function"?n:n===void 0?pl:U(+n);function c(u){var d,f,p,g=(u=hl(u)).length,m,y=!1,E,C=new Array(g),T=new Array(g);for(s==null&&(a=o(E=l())),d=0;d<=g;++d){if(!(d<g&&r(m=u[d],d,u))===y)if(y=!y)f=d,a.areaStart(),a.lineStart();else{for(a.lineEnd(),a.lineStart(),p=d-1;p>=f;--p)a.point(C[p],T[p]);a.lineEnd(),a.areaEnd()}y&&(C[d]=+t(m,d,u),T[d]=+e(m,d,u),a.point(i?+i(m,d,u):C[d],n?+n(m,d,u):T[d]))}if(E)return a=null,E+""||null}function h(){return oi().defined(r).curve(o).context(s)}return c.x=function(u){return arguments.length?(t=typeof u=="function"?u:U(+u),i=null,c):t},c.x0=function(u){return arguments.length?(t=typeof u=="function"?u:U(+u),c):t},c.x1=function(u){return arguments.length?(i=u==null?null:typeof u=="function"?u:U(+u),c):i},c.y=function(u){return arguments.length?(e=typeof u=="function"?u:U(+u),n=null,c):e},c.y0=function(u){return arguments.length?(e=typeof u=="function"?u:U(+u),c):e},c.y1=function(u){return arguments.length?(n=u==null?null:typeof u=="function"?u:U(+u),c):n},c.lineX0=c.lineY0=function(){return h().x(t).y(e)},c.lineY1=function(){return h().x(t).y(n)},c.lineX1=function(){return h().x(i).y(e)},c.defined=function(u){return arguments.length?(r=typeof u=="function"?u:U(!!u),c):r},c.curve=function(u){return arguments.length?(o=u,s!=null&&(a=o(s)),c):o},c.context=function(u){return arguments.length?(u==null?s=a=null:a=o(s=u),c):s},c}function nn(t,e,n){this.k=t,this.x=e,this.y=n}nn.prototype={constructor:nn,scale:function(t){return t===1?this:new nn(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new nn(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};nn.prototype;const bt={top:20,right:70,bottom:60,left:70},To=10;function gp(t,e){if(!t||t.length<2)return[];const n=[];n.push({dj:t[0].dj,q:e}),n.push({dj:t[t.length-1].dj,q:e});for(let i=t.length-1;i>=0;i--)n.push({dj:t[i].dj,q:t[i].q});return n}function mp(t,e){if(!t||!e||t.length<2||e.length<2)return[];const n=[];t.forEach(i=>n.push({dj:i.dj,q:i.q}));for(let i=e.length-1;i>=0;i--)n.push({dj:e[i].dj,q:e[i].q});return n}function yp(t,e){if(!t||t.length<2)return[];const n=[];n.push({dj:t[0].dj,q:e}),n.push({dj:t[t.length-1].dj,q:e});for(let i=t.length-1;i>=0;i--)n.push({dj:t[i].dj,q:t[i].q});return n}function No(t,e,n,i,r){return t&&t.riverKey===e&&t.panelKey===n&&t.zone===i&&t.index===r}function Ao(t,e,n,i,r,s,o,a){if(!e)return;const l=t.append("g").attr("class","control-points"),c=["greenYellow","yellowRed"];c.forEach(h=>{const u=e[h];u&&l.selectAll("circle."+h).data(u.map((d,f)=>({...d,index:f,zoneKey:h}))).enter().append("circle").attr("class","point-"+h).attr("cx",d=>n(d.dj)).attr("cy",d=>i(d.q)).attr("r",d=>No(o,r,s,h,d.index)?6:4).attr("fill",h==="greenYellow"?"#2563eb":"#111827").attr("stroke",d=>No(o,r,s,h,d.index)?"#f97316":"#ffffff").attr("stroke-width",2).style("cursor","pointer").on("click",(d,f)=>{const p=dt[r],g=s==="djgc"?p.djgcZones:p.djdcZones,m=[];c.forEach(C=>{(g[C]||[]).forEach((N,Y)=>{N.dj===f.dj&&N.q===f.q&&m.push({zoneKey:C,index:Y})})});let y;if(m.length===0)y={zoneKey:f.zoneKey,index:f.index};else if(m.length===1)y=m[0];else if(o&&o.riverKey===r&&o.panelKey===s){const C=m.findIndex(T=>T.zoneKey===o.zone&&T.index===o.index);C!==-1?y=m[(C+1)%m.length]:y=m[0]}else y=m[0];const E={riverKey:r,panelKey:s,zone:y.zoneKey,index:y.index};a&&a(E)})})}function ko(t,e,n,i,r,s,o,a,l,c,h,u="left",d=null){t.append("rect").attr("x",0).attr("y",0).attr("width",r).attr("height",s).attr("fill","#ffffff").attr("stroke","#000");const f=t.append("g");d&&f.attr("clip-path",`url(#${d})`);const p=f.append("g").attr("class","grid-y-minor");p.call(Ji(i).tickValues(l).tickSize(-r).tickFormat("")),p.selectAll("line").attr("stroke","#e5e7eb"),p.select(".domain").remove();const g=f.append("g").attr("class","grid-y-major");if(g.call(Ji(i).tickValues(a).tickSize(-r).tickFormat("")),g.selectAll("line").attr("stroke","#d1d5db").attr("stroke-width",1),g.select(".domain").remove(),e){const T=oi().x(se=>n(se.dj)).y(se=>i(se.q)),N=gp(e.greenYellow,i.domain()[0]),Y=mp(e.greenYellow,e.yellowRed),D=yp(e.yellowRed,i.domain()[1]);N.length>0&&f.append("path").attr("d",T(N)+"Z").attr("fill","rgba(29,211,29,0.53)"),Y.length>0&&f.append("path").attr("d",T(Y)+"Z").attr("fill","rgba(246,240,26,0.53)"),D.length>0&&f.append("path").attr("d",T(D)+"Z").attr("fill","rgba(255,0,0,0.53)")}const m=f.append("g").attr("class","grid-x").attr("transform",`translate(0,${s})`);m.call(to(n).tickValues(o||n.ticks(6)).tickSize(-s).tickFormat("")),m.selectAll("line").attr("stroke","#e5e7eb"),m.select(".domain").remove();const y=to(n).tickValues(o||[]).tickFormat(pn("~g"));t.append("g").attr("transform",`translate(0,${s})`).call(y);let E;u==="right"?E=gu(i):E=Ji(i),E.tickValues(a).tickFormat(pn("~g"));const C=t.append("g").call(E);return u==="right"&&C.attr("transform",`translate(${r}, 0)`),isNaN(c)||f.append("line").attr("x1",0).attr("x2",r).attr("y1",i(c)).attr("y2",i(c)).attr("stroke","#000").attr("stroke-dasharray","6,4"),f}function vp(t,e,n,i,r,s,o,a){const l=Zh("#"+t);if(l.empty())return;const{qMin:c,qMax:h,djgcMax:u,djdcMax:d,qBank:f}=e;let p=[],g=[];Array.isArray(n)?p=n:n&&typeof n=="object"&&(p=n.points||[],g=n.envelopes||[]),p=p.filter(A=>typeof A.q=="number"&&A.q>0&&!isNaN(A.q)&&typeof A.djgc=="number"&&!isNaN(A.djgc));let m=parseFloat(l.attr("width")),y=parseFloat(l.attr("height"));if(isNaN(m)||isNaN(y)){const A=l.attr("viewBox");if(A){const ye=A.split(" ");m=parseFloat(ye[2]),y=parseFloat(ye[3])}else m=900,y=450}const E=(m-bt.left-bt.right-To)/2,C=y-bt.top-bt.bottom;l.selectAll("*").remove();const T="clip-"+t;l.append("defs").append("clipPath").attr("id",T).append("rect").attr("width",E).attr("height",C);const N=l.append("g").attr("transform",`translate(${bt.left},${bt.top})`),Y=c>0?c:.1,D=cl().domain([Y,h]).range([C,0]),se=D.ticks(30).filter(A=>{if(A<Y||A>h)return!1;const ye=Math.log10(A),oe=Math.pow(10,Math.floor(ye)),J=Math.round(A/oe);return[1,2,5].includes(J)}),Re=D.ticks(30).filter(A=>A>=Y&&A<=h),me=!0,b=N.append("g").attr("transform","translate(0,0)"),$=Ir().domain([0,u]).range([0,E]),W=ko(b,a.djgcZones,$,D,E,C,a.djgcTicks,se,Re,f,me,"left",T),Pe=N.append("g").attr("transform",`translate(${E+To},0)`),Et=Ir().domain([0,d]).range([0,E]),rt=ko(Pe,a.djdcZones,Et,D,E,C,a.djdcTicks,se,Re,f,me,"right",T);if(p.length>0&&(W.selectAll(".scatter-dot-djgc").data(p).enter().append("circle").attr("class","scatter-dot-djgc").attr("cx",A=>$(A.djgc)).attr("cy",A=>D(A.q)).attr("r",2).attr("fill","steelblue").attr("opacity",.5),rt.selectAll(".scatter-dot-djdc").data(p.filter(A=>A.djdc5>0)).enter().append("circle").attr("class","scatter-dot-djdc").attr("cx",A=>Et(A.djdc5)).attr("cy",A=>D(A.q)).attr("r",2).attr("fill","steelblue").attr("opacity",.5)),g.length>0){const A=oi().curve(rn).x(J=>$(J.djgc)).y(J=>D(J.q25)),ye=oi().curve(rn).x(J=>$(J.djgc)).y(J=>D(J.q75)),oe=_p().curve(rn).x(J=>$(J.djgc)).y0(J=>D(J.q25)).y1(J=>D(J.q75));W.append("path").datum(g).attr("fill","steelblue").attr("fill-opacity",.2).attr("d",oe),W.append("path").datum(g).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",2).attr("stroke-dasharray","5,5").attr("d",A),W.append("path").datum(g).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",2).attr("stroke-dasharray","5,5").attr("d",ye)}i&&(Ao(W,a.djgcZones,$,D,o,"djgc",r,s),Ao(rt,a.djdcZones,Et,D,o,"djdc",r,s)),b.append("text").attr("x",E/2).attr("y",C+45).attr("text-anchor","middle").attr("font-size",12).text("DJGC (°C·d)"),Pe.append("text").attr("x",E/2).attr("y",C+45).attr("text-anchor","middle").attr("font-size",12).text("DJDC -5 °C (°C·d)"),b.append("text").attr("transform","rotate(-90)").attr("x",-C/2).attr("y",-50).attr("text-anchor","middle").attr("font-size",12).text("Q (m³/s)")}function It(t,e,n,i){const r=document.getElementById("riverSelect").value,s=dt[r],o={qMin:parseFloat(document.getElementById("qMin").value)||s.qMin,qMax:parseFloat(document.getElementById("qMax").value)||s.qMax,djgcMax:parseFloat(document.getElementById("djgcMax").value)||s.djgcMax,djdcMax:parseFloat(document.getElementById("djdcMax").value)||s.djdcMax,qBank:parseFloat(document.getElementById("qBankfull").value)||s.qBankfull};vp("diagram",o,i,e,t,n,r,s)}const wp=()=>{};var Ro={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(t,e){if(!t)throw qt(e)},qt=function(t){return new Error("Firebase Database ("+_l.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Cp=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ls={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[h],n[u],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||u==null)throw new Ep;const d=s<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),u!==64){const p=c<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ep extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ml=function(t){const e=gl(t);return ls.encodeByteArray(e,!0)},ai=function(t){return ml(t).replace(/\./g,"")},li=function(t){try{return ls.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){return _n(void 0,t)}function _n(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Sp(n)||(t[n]=_n(t[n],e[n]));return t}function Sp(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=()=>yl().__FIREBASE_DEFAULTS__,Ip=()=>{if(typeof process>"u"||typeof Ro>"u")return;const t=Ro.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&li(t[1]);return e&&JSON.parse(e)},Np=()=>{try{return wp()||xp()||Ip()||Tp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cs=()=>{var t;return(t=Np())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ap(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ai(JSON.stringify(n)),ai(JSON.stringify(o)),""].join(".")}const sn={};function Rp(){const t={prod:[],emulator:[]};for(const e of Object.keys(sn))sn[e]?t.emulator.push(e):t.prod.push(e);return t}function Pp(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Po=!1;function Dp(t,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||sn[t]===e||sn[t]||Po)return;sn[t]=e;function n(d){return`__firebase__banner__${d}`}const i="__firebase__banner",s=Rp().prod.length>0;function o(){const d=document.getElementById(i);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,f){d.setAttribute("width","24"),d.setAttribute("id",f),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Po=!0,o()},d}function h(d,f){d.setAttribute("id",f),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function u(){const d=Pp(i),f=n("text"),p=document.getElementById(f)||document.createElement("span"),g=n("learnmore"),m=document.getElementById(g)||document.createElement("a"),y=n("preprendIcon"),E=document.getElementById(y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const C=d.element;a(C),h(m,g);const T=c();l(E,y),C.append(E,p,m,T),document.body.appendChild(C)}s?(p.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,p.innerText="Preview backend running in this workspace."),p.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mp())}function Op(){return typeof window<"u"||wl()}function wl(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fp(){return _l.NODE_ADMIN===!0}function Bp(){try{return typeof indexedDB=="object"}catch{return!1}}function $p(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="FirebaseError";class Ut extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Wp,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?jp(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ut(r,a,i)}}function jp(t,e){return t.replace(qp,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const qp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){return JSON.parse(t)}function q(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=gn(li(s[0])||""),n=gn(li(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Up=function(t){const e=Cl(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Vp=function(t){const e=Cl(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _t(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Tr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ci(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function ui(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Do(s)&&Do(o)){if(!ui(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Do(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):u<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const d=(r<<5|r>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Gp(t,e){const n=new Qp(t,e);return n.subscribe.bind(n)}class Qp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Yp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=tr),r.error===void 0&&(r.error=tr),r.complete===void 0&&(r.complete=tr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tr(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(t,e,n,i){let r;if(i<e?r="at least "+e:i>n&&(r=n===0?"none":"no more than "+n),r){const s=t+" failed: Was called with "+i+(i===1?" argument.":" arguments.")+" Expects "+r+".";throw new Error(s)}};function ie(t,e){return`${t} failed: ${e} argument `}function H(t,e,n,i){if(!(i&&!n)&&typeof n!="function")throw new Error(ie(t,e)+"must be a valid function.")}function Mo(t,e,n,i){if(n&&(typeof n!="object"||n===null))throw new Error(ie(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,_(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ai=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return t&&t._delegate?t._delegate:t}class $e{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ee;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jp(e))try{this.getOrInitializeService({instanceIdentifier:ot})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ot){return this.instances.has(e)}getOptions(e=ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Xp(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ot){return this.component?this.component.multipleInstances?e:ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xp(t){return t===ot?void 0:t}function Jp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=[];var M;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(M||(M={}));const El={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Zp=M.INFO,e_={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},t_=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=e_[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ki{constructor(e){this.name=e,this._logLevel=Zp,this._logHandler=t_,this._userLogHandler=null,ds.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?El[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}function n_(t){ds.forEach(e=>{e.setLogLevel(t)})}function i_(t,e){for(const n of ds){let i=null;e&&e.level&&(i=El[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(i??r.logLevel)&&t({level:M[s].toLowerCase(),message:a,args:o,type:r.name})}}}const r_=(t,e)=>e.some(n=>t instanceof n);let Oo,Lo;function s_(){return Oo||(Oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o_(){return Lo||(Lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bl=new WeakMap,Ar=new WeakMap,Sl=new WeakMap,nr=new WeakMap,fs=new WeakMap;function a_(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ze(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bl.set(n,t)}).catch(()=>{}),fs.set(e,t),e}function l_(t){if(Ar.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ar.set(t,e)}let kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ar.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ze(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function c_(t){kr=t(kr)}function u_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ir(this),e,...n);return Sl.set(i,e.sort?e.sort():[e]),ze(i)}:o_().includes(t)?function(...e){return t.apply(ir(this),e),ze(bl.get(this))}:function(...e){return ze(t.apply(ir(this),e))}}function h_(t){return typeof t=="function"?u_(t):(t instanceof IDBTransaction&&l_(t),r_(t,s_())?new Proxy(t,kr):t)}function ze(t){if(t instanceof IDBRequest)return a_(t);if(nr.has(t))return nr.get(t);const e=h_(t);return e!==t&&(nr.set(t,e),fs.set(e,t)),e}const ir=t=>fs.get(t);function d_(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=ze(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ze(o.result),l.oldVersion,l.newVersion,ze(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const f_=["get","getKey","getAll","getAllKeys","count"],p_=["put","add","delete","clear"],rr=new Map;function Fo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rr.get(e))return rr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=p_.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||f_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return rr.set(e,s),s}c_(t=>({...t,get:(e,n,i)=>Fo(e,n)||t.get(e,n,i),has:(e,n)=>!!Fo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(g_(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function g_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",Rr="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new ki("@firebase/app"),m_="@firebase/app-compat",y_="@firebase/analytics-compat",v_="@firebase/analytics",w_="@firebase/app-check-compat",C_="@firebase/app-check",E_="@firebase/auth",b_="@firebase/auth-compat",S_="@firebase/database",x_="@firebase/data-connect",I_="@firebase/database-compat",T_="@firebase/functions",N_="@firebase/functions-compat",A_="@firebase/installations",k_="@firebase/installations-compat",R_="@firebase/messaging",P_="@firebase/messaging-compat",D_="@firebase/performance",M_="@firebase/performance-compat",O_="@firebase/remote-config",L_="@firebase/remote-config-compat",F_="@firebase/storage",B_="@firebase/storage-compat",$_="@firebase/firestore",W_="@firebase/ai",j_="@firebase/firestore-compat",q_="firebase",U_="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="[DEFAULT]",V_={[hi]:"fire-core",[m_]:"fire-core-compat",[v_]:"fire-analytics",[y_]:"fire-analytics-compat",[C_]:"fire-app-check",[w_]:"fire-app-check-compat",[E_]:"fire-auth",[b_]:"fire-auth-compat",[S_]:"fire-rtdb",[x_]:"fire-data-connect",[I_]:"fire-rtdb-compat",[T_]:"fire-fn",[N_]:"fire-fn-compat",[A_]:"fire-iid",[k_]:"fire-iid-compat",[R_]:"fire-fcm",[P_]:"fire-fcm-compat",[D_]:"fire-perf",[M_]:"fire-perf-compat",[O_]:"fire-rc",[L_]:"fire-rc-compat",[F_]:"fire-gcs",[B_]:"fire-gcs-compat",[$_]:"fire-fst",[j_]:"fire-fst-compat",[W_]:"fire-vertex","fire-js":"fire-js",[q_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Map,Mt=new Map,Ot=new Map;function mn(t,e){try{t.container.addComponent(e)}catch(n){We.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xl(t,e){t.container.addOrOverwriteComponent(e)}function Lt(t){const e=t.name;if(Ot.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;Ot.set(e,t);for(const n of Xe.values())mn(n,t);for(const n of Mt.values())mn(n,t);return!0}function Il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function H_(t,e,n=Ke){Il(t,e).clearInstance(n)}function ps(t){return t.options!==void 0}function Tl(t){return ps(t)?!1:"authIdToken"in t||"appCheckToken"in t||"releaseOnDeref"in t||"automaticDataCollectionEnabled"in t}function Nl(t){return t==null?!1:t.settings!==void 0}function z_(){Ot.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},le=new Ni("app","Firebase",G_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al=class{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t,e){const n=li(t.split(".")[1]);if(n===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(n).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const r=JSON.parse(n).exp*1e3,s=new Date().getTime();r-s<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class Q_ extends Al{constructor(e,n,i,r){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!0,o={name:i,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,r);else{const a=e;super(a.options,o,r)}this._serverConfig={automaticDataCollectionEnabled:s,...n},this._serverConfig.authIdToken&&Bo(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Bo(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Le(hi,Rr,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){ms(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw le.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=U_;function gs(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Ke,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw le.create("bad-app-name",{appName:String(r)});if(n||(n=cs()),!n)throw le.create("no-options");const s=Xe.get(r);if(s){if(ui(n,s.options)&&ui(i,s.config))return s;throw le.create("duplicate-app",{appName:r})}const o=new hs(r);for(const l of Ot.values())o.addComponent(l);const a=new Al(n,i,o);return Xe.set(r,a),a}function Y_(t,e={}){if(Op()&&!wl())throw le.create("invalid-server-app-environment");let n,i=e||{};if(t&&(ps(t)?n=t.options:Tl(t)?i=t:n=t),i.automaticDataCollectionEnabled===void 0&&(i.automaticDataCollectionEnabled=!0),n||(n=cs()),!n)throw le.create("no-options");const r={...i,...n};r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const s=h=>[...h].reduce((u,d)=>Math.imul(31,u)+d.charCodeAt(0)|0,0);if(i.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw le.create("finalization-registry-not-supported",{});const o=""+s(JSON.stringify(r)),a=Mt.get(o);if(a)return a.incRefCount(i.releaseOnDeref),a;const l=new hs(o);for(const h of Ot.values())l.addComponent(h);const c=new Q_(n,i,o,l);return Mt.set(o,c),c}function K_(t=Ke){const e=Xe.get(t);if(!e&&t===Ke&&cs())return gs();if(!e)throw le.create("no-app",{appName:t});return e}function X_(){return Array.from(Xe.values())}async function ms(t){let e=!1;const n=t.name;Xe.has(n)?(e=!0,Xe.delete(n)):Mt.has(n)&&t.decRefCount()<=0&&(Mt.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(i=>i.delete())),t.isDeleted=!0)}function Le(t,e,n){let i=V_[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(o.join(" "));return}Lt(new $e(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function kl(t,e){if(t!==null&&typeof t!="function")throw le.create("invalid-log-argument");i_(t,e)}function Rl(t){n_(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="firebase-heartbeat-database",Z_=1,yn="firebase-heartbeat-store";let sr=null;function Pl(){return sr||(sr=d_(J_,Z_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yn)}catch(n){console.warn(n)}}}}).catch(t=>{throw le.create("idb-open",{originalErrorMessage:t.message})})),sr}async function eg(t){try{const n=(await Pl()).transaction(yn),i=await n.objectStore(yn).get(Dl(t));return await n.done,i}catch(e){if(e instanceof Ut)We.warn(e.message);else{const n=le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(n.message)}}}async function $o(t,e){try{const i=(await Pl()).transaction(yn,"readwrite");await i.objectStore(yn).put(e,Dl(t)),await i.done}catch(n){if(n instanceof Ut)We.warn(n.message);else{const i=le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});We.warn(i.message)}}}function Dl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=1024,ng=30;class ig{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wo();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>ng){const o=og(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){We.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wo(),{heartbeatsToSend:i,unsentEntries:r}=rg(this._heartbeatsCache.heartbeats),s=ai(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return We.warn(n),""}}}function Wo(){return new Date().toISOString().substring(0,10)}function rg(t,e=tg){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),jo(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),jo(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class sg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bp()?$p().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $o(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jo(t){return ai(JSON.stringify({version:2,heartbeats:t})).length}function og(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){Lt(new $e("platform-logger",e=>new __(e),"PRIVATE")),Lt(new $e("heartbeat",e=>new ig(e),"PRIVATE")),Le(hi,Rr,t),Le(hi,Rr,"esm2020"),Le("fire-js","")}ag("");const lg=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ut,SDK_VERSION:_s,_DEFAULT_ENTRY_NAME:Ke,_addComponent:mn,_addOrOverwriteComponent:xl,_apps:Xe,_clearComponents:z_,_components:Ot,_getProvider:Il,_isFirebaseApp:ps,_isFirebaseServerApp:Nl,_isFirebaseServerAppSettings:Tl,_registerComponent:Lt,_removeServiceInstance:H_,_serverApps:Mt,deleteApp:ms,getApp:K_,getApps:X_,initializeApp:gs,initializeServerApp:Y_,onLog:kl,registerVersion:Le,setLogLevel:Rl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n){this._delegate=e,this.firebase=n,mn(e,new $e("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ms(this._delegate)))}_getService(e,n=Ke){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())==null?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ke){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){mn(this._delegate,e)}_addOrOverwriteComponent(e){xl(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},qo=new Ni("app-compat","Firebase",ug);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){const e={},n={__esModule:!0,initializeApp:s,app:r,registerVersion:Le,setLogLevel:Rl,onLog:kl,apps:null,SDK_VERSION:_s,INTERNAL:{registerComponent:a,removeApp:i,useAsService:l,modularAPIs:lg}};n.default=n,Object.defineProperty(n,"apps",{get:o});function i(c){delete e[c]}function r(c){if(c=c||Ke,!ce(e,c))throw qo.create("no-app",{appName:c});return e[c]}r.App=t;function s(c,h={}){const u=gs(c,h);if(ce(e,u.name))return e[u.name];const d=new t(u,n);return e[u.name]=d,d}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,u=h.replace("-compat","");if(Lt(c)&&c.type==="PUBLIC"){const d=(f=r())=>{if(typeof f[u]!="function")throw qo.create("invalid-app-argument",{appName:h});return f[u]()};c.serviceProps!==void 0&&_n(d,c.serviceProps),n[u]=d,t.prototype[u]=function(...f){return this._getService.bind(this,h).apply(this,c.multipleInstances?f:[])}}return c.type==="PUBLIC"?n[u]:null}function l(c,h){return h==="serverAuth"?null:h}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){const t=hg(cg);t.INTERNAL={...t.INTERNAL,createFirebaseNamespace:Ml,extendNamespace:e,createSubscribe:Gp,ErrorFactory:Ni,deepExtend:_n};function e(n){_n(t,n)}return t}const dg=Ml();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new ki("@firebase/app-compat"),fg="@firebase/app-compat",pg="0.5.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t){Le(fg,pg,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const t=yl();if(t.firebase!==void 0){Uo.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Uo.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Nt=dg;_g();var gg="firebase",mg="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.registerVersion(gg,mg,"app-compat");var Vo={};const Ho="@firebase/database",zo="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol="";function Ll(t){Ol=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),q(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:gn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ce(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yg(e)}}catch{}return new vg},ct=Fl("localStorage"),Pr=Fl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new ki("@firebase/database"),Bl=(function(){let t=1;return function(){return t++}})(),$l=function(t){const e=Kp(t),n=new zp;n.update(e);const i=n.digest();return ls.encodeByteArray(i)},kn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=kn.apply(null,i):typeof i=="object"?e+=q(i):e+=i,e+=" "}return e};let ht=null,Go=!0;const Wl=function(t,e){_(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(At.logLevel=M.VERBOSE,ht=At.log.bind(At),e&&Pr.set("logging_enabled",!0)):typeof t=="function"?ht=t:(ht=null,Pr.remove("logging_enabled"))},G=function(...t){if(Go===!0&&(Go=!1,ht===null&&Pr.get("logging_enabled")===!0&&Wl(!0)),ht){const e=kn.apply(null,t);ht(e)}},Rn=function(t){return function(...e){G(t,...e)}},Dr=function(...t){const e="FIREBASE INTERNAL ERROR: "+kn(...t);At.error(e)},Ne=function(...t){const e=`FIREBASE FATAL ERROR: ${kn(...t)}`;throw At.error(e),new Error(e)},X=function(...t){const e="FIREBASE WARNING: "+kn(...t);At.warn(e)},wg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&X("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ri=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Cg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Je="[MIN_NAME]",je="[MAX_NAME]",vt=function(t,e){if(t===e)return 0;if(t===Je||e===je)return-1;if(e===Je||t===je)return 1;{const n=Qo(t),i=Qo(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Eg=function(t,e){return t===e?0:t<e?-1:1},Yt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+q(e))},ys=function(t){if(typeof t!="object"||t===null)return q(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=q(e[i]),n+=":",n+=ys(t[e[i]]);return n+="}",n},jl=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Q(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ql=function(t){_(!Ri(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},bg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Sg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Ig=new RegExp("^-?(0*)\\d{1,10}$"),Tg=-2147483648,Ng=2147483647,Qo=function(t){if(Ig.test(t)){const e=Number(t);if(e>=Tg&&e<=Ng)return e}return null},Vt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw X("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ag=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},on=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Nl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){X(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(G("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',X(e)}}class kt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="5",Ul="v",Vl="s",Hl="r",zl="f",Gl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ql="ls",Yl="p",Mr="ac",Kl="websocket",Xl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ct.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ct.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Pg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zl(t,e,n){_(typeof e=="string","typeof type must == string"),_(typeof n=="object","typeof params must == object");let i;if(e===Kl)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xl)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pg(t)&&(n.ns=t.namespace);const r=[];return Q(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.counters_={}}incrementCounter(e,n=1){ce(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={},ar={};function ws(t){const e=t.toString();return or[e]||(or[e]=new Dg),or[e]}function Mg(t,e){const n=t.toString();return ar[n]||(ar[n]=e()),ar[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Vt(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="start",Lg="close",Fg="pLPCommand",Bg="pRTLPCB",ec="id",tc="pw",nc="ser",$g="cb",Wg="seg",jg="ts",qg="d",Ug="dframe",ic=1870,rc=30,Vg=ic-rc,Hg=25e3,zg=3e4;class Ve{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rn(e),this.stats_=ws(n),this.urlFn=l=>(this.appCheckToken&&(l[Mr]=this.appCheckToken),Zl(n,Xl,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Og(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zg)),Cg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cs((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yo)this.id=a,this.password=l;else if(o===Lg)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Yo]="t",i[nc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$g]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ul]=vs,this.transportSessionId&&(i[Vl]=this.transportSessionId),this.lastSessionId&&(i[Ql]=this.lastSessionId),this.applicationId&&(i[Yl]=this.applicationId),this.appCheckToken&&(i[Mr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gl.test(location.hostname)&&(i[Hl]=zl);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ve.forceAllow_=!0}static forceDisallow(){Ve.forceDisallow_=!0}static isAvailable(){return Ve.forceAllow_?!0:!Ve.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bg()&&!Sg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=q(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ml(n),r=jl(i,Vg);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Ug]="t",i[ec]=e,i[tc]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=q(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Cs{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bl(),window[Fg+this.uniqueCallbackIdentifier]=e,window[Bg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Cs.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){G("frame writing exception"),a.stack&&G(a.stack),G(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||G("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ec]=this.myID,e[tc]=this.myPW,e[nc]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rc+i.length<=ic;){const o=this.pendingSegs.shift();i=i+"&"+Wg+r+"="+o.seg+"&"+jg+r+"="+o.ts+"&"+qg+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(Hg)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{G("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=16384,Qg=45e3;let di=null;typeof MozWebSocket<"u"?di=MozWebSocket:typeof WebSocket<"u"&&(di=WebSocket);class de{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rn(this.connId),this.stats_=ws(n),this.connURL=de.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Ul]=vs,typeof location<"u"&&location.hostname&&Gl.test(location.hostname)&&(o[Hl]=zl),n&&(o[Vl]=n),i&&(o[Ql]=i),r&&(o[Mr]=r),s&&(o[Yl]=s),Zl(e,Kl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ct.set("previous_websocket_failure",!0);try{let i;Fp(),this.mySock=new di(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){de.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&di!==null&&!de.forceDisallow_}static previouslyFailed(){return ct.isInMemoryStorage||ct.get("previous_websocket_failure")===!0}markConnectionHealthy(){ct.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=gn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=q(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=jl(n,Gg);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}de.responsesRequiredToBeHealthy=2;de.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{static get ALL_TRANSPORTS(){return[Ve,de]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=de&&de.isAvailable();let i=n&&!de.previouslyFailed();if(e.webSocketOnly&&(n||X("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[de];else{const r=this.transports_=[];for(const s of Ft.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Ft.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ft.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=6e4,Kg=5e3,Xg=10*1024,Jg=100*1024,lr="t",Ko="d",Zg="s",Xo="r",em="e",Jo="o",Zo="a",ea="n",ta="p",tm="h";class nm{constructor(e,n,i,r,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rn("c:"+this.id+":"),this.transportManager_=new Ft(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=on(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lr in e){const n=e[lr];n===Zo?this.upgradeIfSecondaryHealthy_():n===Xo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yt("t",e),i=Yt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ta,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ea,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yt("t",e),i=Yt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yt(lr,e);if(Ko in e){const i=e[Ko];if(n===tm){const r={...i};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===ea){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zg?this.onConnectionShutdown_(i):n===Xo?this.onReset_(i):n===em?Dr("Server Error: "+i):n===Jo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vs!==i&&X("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),on(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Yg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):on(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Kg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ta,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ct.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){_(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends oc{static getInstance(){return new fi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=32,ia=768;class P{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function R(){return new P("")}function S(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ze(t){return t.pieces_.length-t.pieceNum_}function O(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new P(t.pieces_,e)}function Es(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function im(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vn(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ac(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new P(e,0)}function B(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof P)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new P(n,0)}function x(t){return t.pieceNum_>=t.pieces_.length}function Z(t,e){const n=S(t),i=S(e);if(n===null)return e;if(n===i)return Z(O(t),O(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rm(t,e){const n=vn(t,0),i=vn(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=vt(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function bs(t,e){if(Ze(t)!==Ze(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function fe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ze(t)>Ze(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class sm{constructor(e,n){this.errorPrefix_=n,this.parts_=vn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ai(this.parts_[i]);lc(this)}}function om(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ai(e),lc(t)}function am(t){const e=t.parts_.pop();t.byteLength_-=Ai(e),t.parts_.length>0&&(t.byteLength_-=1)}function lc(t){if(t.byteLength_>ia)throw new Error(t.errorPrefix_+"has a key path longer than "+ia+" bytes ("+t.byteLength_+").");if(t.parts_.length>na)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+na+") or object contains a cycle "+at(t))}function at(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends oc{static getInstance(){return new Ss}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=1e3,lm=300*1e3,ra=30*1e3,cm=1.3,um=3e4,hm="server_kill",sa=3;class Fe extends sc{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fe.nextPersistentConnectionId_++,this.log_=Rn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Kt,this.maxReconnectDelay_=lm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ss.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(q(s)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new ee,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Fe.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ce(e,"w")){const i=_t(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();X(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ra)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Up(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+q(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Dr("Unrecognized action received from server: "+q(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Kt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Kt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>um&&(this.reconnectDelay_=Kt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Fe.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?G("getToken() completed but was canceled"):(G("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new nm(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{X(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(hm)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&X(u),l())}}}interrupt(e){G("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){G("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tr(this.interruptReasons_)&&(this.reconnectDelay_=Kt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>ys(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new P(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){G("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sa&&(this.reconnectDelay_=ra,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){G("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ol.replace(/\./g,"-")]=1,vl()?e["framework.cordova"]=1:Lp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fi.getInstance().currentlyOnline();return Tr(this.interruptReasons_)&&e}}Fe.nextPersistentConnectionId_=0;Fe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new I(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new I(Je,e),r=new I(Je,n);return this.compare(i,r)!==0}minPost(){return I.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn;class cc extends Pi{static get __EMPTY_NODE(){return Vn}static set __EMPTY_NODE(e){Vn=e}compare(e,n){return vt(e.name,n.name)}isDefinedOn(e){throw qt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return I.MIN}maxPost(){return new I(je,Vn)}makePost(e,n){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,Vn)}toString(){return".key"}}const Te=new cc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class z{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??z.RED,this.left=r??ne.EMPTY_NODE,this.right=s??ne.EMPTY_NODE}copy(e,n,i,r,s){return new z(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ne.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}z.RED=!0;z.BLACK=!1;class dm{copy(e,n,i,r,s){return this}insert(e,n,i){return new z(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ne{constructor(e,n=ne.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ne(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,z.BLACK,null,null))}remove(e){return new ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,z.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hn(this.root_,null,this.comparator_,!0,e)}}ne.EMPTY_NODE=new dm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){return vt(t.name,e.name)}function xs(t,e){return vt(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or;function pm(t){Or=t}const uc=function(t){return typeof t=="number"?"number:"+ql(t):"string:"+t},hc=function(t){if(t.isLeafNode()){const e=t.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ce(e,".sv"),"Priority must be a string or number.")}else _(t===Or||t.isEmpty(),"priority of unexpected type.");_(t===Or||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;class V{static set __childrenNodeConstructor(e){oa=e}static get __childrenNodeConstructor(){return oa}constructor(e,n=V.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hc(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new V(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:S(e)===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:V.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=S(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||Ze(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,V.__childrenNodeConstructor.EMPTY_NODE.updateChild(O(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ql(this.value_):e+=this.value_,this.lazyHash_=$l(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===V.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof V.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=V.VALUE_TYPE_ORDER.indexOf(n),s=V.VALUE_TYPE_ORDER.indexOf(i);return _(r>=0,"Unknown leaf type: "+n),_(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}V.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc,fc;function _m(t){dc=t}function gm(t){fc=t}class mm extends Pi{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?vt(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return I.MIN}maxPost(){return new I(je,new V("[PRIORITY-POST]",fc))}makePost(e,n){const i=dc(e);return new I(n,new V("[PRIORITY-POST]",i))}toString(){return".priority"}}const F=new mm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=Math.log(2);class vm{constructor(e){const n=s=>parseInt(Math.log(s)/ym,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pi=function(t,e,n,i){t.sort(e);const r=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new z(d,u.node,z.BLACK,null,null);{const f=parseInt(h/2,10)+l,p=r(l,f),g=r(f+1,c);return u=t[f],d=n?n(u):u,new z(d,u.node,z.BLACK,p,g)}},s=function(l){let c=null,h=null,u=t.length;const d=function(p,g){const m=u-p,y=u;u-=p;const E=r(m+1,y),C=t[m],T=n?n(C):C;f(new z(T,C.node,g,null,E))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?d(m,z.BLACK):(d(m,z.BLACK),d(m,z.RED))}return h},o=new vm(t.length),a=s(o);return new ne(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr;const St={};class Me{static get Default(){return _(St&&F,"ChildrenNode.ts has not been loaded"),cr=cr||new Me({".priority":St},{".priority":F}),cr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=_t(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ne?n:null}hasIndex(e){return ce(this.indexSet_,e.toString())}addIndex(e,n){_(e!==Te,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(I.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=pi(i,e.getCompare()):a=St;const l=e.toString(),c={...this.indexSet_};c[l]=e;const h={...this.indexes_};return h[l]=a,new Me(h,c)}addToIndexes(e,n){const i=ci(this.indexes_,(r,s)=>{const o=_t(this.indexSet_,s);if(_(o,"Missing index implementation for "+s),r===St)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(I.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),pi(a,o.getCompare())}else return St;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new I(e.name,a))),l.insert(e,e.node)}});return new Me(i,this.indexSet_)}removeFromIndexes(e,n){const i=ci(this.indexes_,r=>{if(r===St)return r;{const s=n.get(e.name);return s?r.remove(new I(e.name,s)):r}});return new Me(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt;class v{static get EMPTY_NODE(){return Xt||(Xt=new v(new ne(xs),null,Me.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&hc(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xt:n}}getChild(e){const n=S(e);return n===null?this:this.getImmediateChild(n).getChild(O(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(_(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new I(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Xt:this.priorityNode_;return new v(r,o,s)}}updateChild(e,n){const i=S(e);if(i===null)return n;{_(S(e)!==".priority"||Ze(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(O(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(F,(o,a)=>{n[o]=a.val(e),i++,s&&v.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uc(this.getPriority().val())+":"),this.forEachChild(F,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":$l(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new I(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new I(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new I(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,I.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pn?-1:0}withIndex(e){if(e===Te||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Te||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(F),r=n.getIterator(F);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Te?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wm extends v{constructor(){super(new ne(xs),v.EMPTY_NODE,Me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const Pn=new wm;Object.defineProperties(I,{MIN:{value:new I(Je,v.EMPTY_NODE)},MAX:{value:new I(je,Pn)}});cc.__EMPTY_NODE=v.EMPTY_NODE;V.__childrenNodeConstructor=v;pm(Pn);gm(Pn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=!0;function j(t,e=null){if(t===null)return v.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new V(n,j(e))}if(!(t instanceof Array)&&Cm){const n=[];let i=!1;if(Q(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=j(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new I(o,l)))}}),n.length===0)return v.EMPTY_NODE;const s=pi(n,fm,o=>o.name,xs);if(i){const o=pi(n,F.getCompare());return new v(s,j(e),new Me({".priority":o},{".priority":F}))}else return new v(s,j(e),Me.Default)}else{let n=v.EMPTY_NODE;return Q(t,(i,r)=>{if(ce(t,i)&&i.substring(0,1)!=="."){const s=j(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(j(e))}}_m(j);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Pi{constructor(e){super(),this.indexPath_=e,_(!x(e)&&S(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?vt(e.name,n.name):s}makePost(e,n){const i=j(e),r=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new I(n,r)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,Pn);return new I(je,e)}toString(){return vn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends Pi{compare(e,n){const i=e.node.compareTo(n.node);return i===0?vt(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,n){const i=j(e);return new I(n,i)}toString(){return".value"}}const Ts=new Em;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){return{type:"value",snapshotNode:t}}function Bt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function wn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Cn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(wn(n,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bt(n,i)):o.trackChildChange(Cn(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(F,(r,s)=>{n.hasChild(r)||i.trackChildChange(wn(r,s))}),n.isLeafNode()||n.forEachChild(F,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Cn(r,s,o))}else i.trackChildChange(Bt(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.indexedFilter_=new Ns(e.getIndex()),this.index_=e.getIndex(),this.startPost_=En.getStartPost_(e),this.endPost_=En.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,o){return this.matches(new I(n,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=v.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(v.EMPTY_NODE);const s=this;return n.forEachChild(F,(o,a)=>{s.matches(new I(o,a))||(r=r.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new En(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new I(n,i))||(i=v.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=v.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(v.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new I(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(Cn(n,i,u)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(wn(n,u));const g=a.updateImmediateChild(n,v.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Bt(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return i.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(wn(c.name,c.node)),s.trackChildChange(Bt(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Je}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:je}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new Di;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xm(t){return t.loadsAllData()?new Ns(t.getIndex()):t.hasLimit()?new Sm(t):new En(t)}function Im(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Tm(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Lr(t,e,n){const i=t.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,n!=null?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function Nm(t,e,n){let i;return t.index_===Te||n?i=Lr(t,e,n):i=Lr(t,e,je),i.startAfterSet_=!0,i}function Fr(t,e,n){const i=t.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,n!==void 0?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function Am(t,e,n){let i;return t.index_===Te||n?i=Fr(t,e,n):i=Fr(t,e,Je),i.endBeforeSet_=!0,i}function Mi(t,e){const n=t.copy();return n.index_=e,n}function aa(t){const e={};if(t.isDefault())return e;let n;if(t.index_===F?n="$priority":t.index_===Ts?n="$value":t.index_===Te?n="$key":(_(t.index_ instanceof Is,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=q(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=q(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+q(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=q(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+q(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function la(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==F&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends sc{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Rn("p:rest:"),this.listens_={}}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=_i.getListenId_(e,i),a={};this.listens_[o]=a;const l=aa(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,i),_t(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=_i.getListenId_(e,n);delete this.listens_[i]}get(e){const n=aa(e._queryParams),i=e._path.toString(),r=new ee;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hp(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=gn(a.responseText)}catch{X("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&X("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(){return{value:null,children:new Map}}function Ht(t,e,n){if(x(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=S(e);t.children.has(i)||t.children.set(i,gi());const r=t.children.get(i);e=O(e),Ht(r,e,n)}}function Br(t,e){if(x(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(F,(i,r)=>{Ht(t,new P(i),r)}),Br(t,e)}}else if(t.children.size>0){const n=S(e);return e=O(e),t.children.has(n)&&Br(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function $r(t,e,n){t.value!==null?n(e,t.value):Rm(t,(i,r)=>{const s=new P(e.toString()+"/"+i);$r(r,s,n)})}function Rm(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Q(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=10*1e3,Dm=30*1e3,Mm=300*1e3;class Om{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Pm(e);const i=ca+(Dm-ca)*Math.random();on(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Q(e,(r,s)=>{s>0&&ce(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),on(this.reportStats_.bind(this),Math.floor(Math.random()*2*Mm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ee||(Ee={}));function As(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ks(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rs(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ee.ACK_USER_WRITE,this.source=As()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new P(e));return new mi(R(),n,this.revert)}}else return _(S(this.path)===e,"operationForChild called for unrelated child."),new mi(O(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){this.source=e,this.path=n,this.type=Ee.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new bn(this.source,R()):new bn(this.source,O(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ee.OVERWRITE}operationForChild(e){return x(this.path)?new gt(this.source,R(),this.snap.getImmediateChild(e)):new gt(this.source,O(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ee.MERGE}operationForChild(e){if(x(this.path)){const n=this.children.subtree(new P(e));return n.isEmpty()?null:n.value?new gt(this.source,R(),n.value):new $t(this.source,R(),n)}else return _(S(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $t(this.source,O(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const n=S(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Fm(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bm(o.childName,o.snapshotNode))}),Jt(t,r,"child_removed",e,i,n),Jt(t,r,"child_added",e,i,n),Jt(t,r,"child_moved",s,i,n),Jt(t,r,"child_changed",e,i,n),Jt(t,r,"value",e,i,n),r}function Jt(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>$m(t,a,l)),o.forEach(a=>{const l=Bm(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Bm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $m(t,e,n){if(e.childName==null||n.childName==null)throw qt("Should only compare child_ events.");const i=new I(e.childName,e.snapshotNode),r=new I(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t,e){return{eventCache:t,serverCache:e}}function an(t,e,n,i){return Oi(new et(e,n,i),t.serverCache)}function _c(t,e,n,i){return Oi(t.eventCache,new et(e,n,i))}function yi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;const Wm=()=>(ur||(ur=new ne(Eg)),ur);class L{static fromObject(e){let n=new L(null);return Q(e,(i,r)=>{n=n.set(new P(i),r)}),n}constructor(e,n=Wm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:R(),value:this.value};if(x(e))return null;{const i=S(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(O(e),n);return s!=null?{path:B(new P(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const n=S(e),i=this.children.get(n);return i!==null?i.subtree(O(e)):new L(null)}}set(e,n){if(x(e))return new L(n,this.children);{const i=S(e),s=(this.children.get(i)||new L(null)).set(O(e),n),o=this.children.insert(i,s);return new L(this.value,o)}}remove(e){if(x(e))return this.children.isEmpty()?new L(null):new L(null,this.children);{const n=S(e),i=this.children.get(n);if(i){const r=i.remove(O(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new L(null):new L(this.value,s)}else return this}}get(e){if(x(e))return this.value;{const n=S(e),i=this.children.get(n);return i?i.get(O(e)):null}}setTree(e,n){if(x(e))return n;{const i=S(e),s=(this.children.get(i)||new L(null)).setTree(O(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new L(this.value,o)}}fold(e){return this.fold_(R(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(B(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,R(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(x(e))return null;{const s=S(e),o=this.children.get(s);return o?o.findOnPath_(O(e),B(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,R(),n)}foreachOnPath_(e,n,i){if(x(e))return this;{this.value&&i(n,this.value);const r=S(e),s=this.children.get(r);return s?s.foreachOnPath_(O(e),B(n,r),i):new L(null)}}foreach(e){this.foreach_(R(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(B(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.writeTree_=e}static empty(){return new be(new L(null))}}function ln(t,e,n){if(x(e))return new be(new L(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Z(r,e);return s=s.updateChild(o,n),new be(t.writeTree_.set(r,s))}else{const r=new L(n),s=t.writeTree_.setTree(e,r);return new be(s)}}}function Wr(t,e,n){let i=t;return Q(n,(r,s)=>{i=ln(i,B(e,r),s)}),i}function ua(t,e){if(x(e))return be.empty();{const n=t.writeTree_.setTree(e,new L(null));return new be(n)}}function jr(t,e){return wt(t,e)!=null}function wt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Z(n.path,e)):null}function ha(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(F,(i,r)=>{e.push(new I(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new I(i,r.value))}),e}function Ge(t,e){if(x(e))return t;{const n=wt(t,e);return n!=null?new be(new L(n)):new be(t.writeTree_.subtree(e))}}function qr(t){return t.writeTree_.isEmpty()}function Wt(t,e){return gc(R(),t.writeTree_,e)}function gc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(_(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=gc(B(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(B(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t,e){return wc(e,t)}function jm(t,e,n,i,r){_(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=ln(t.visibleWrites,e,n)),t.lastWriteId=i}function qm(t,e,n,i){_(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Wr(t.visibleWrites,e,n),t.lastWriteId=i}function Um(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Vm(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);_(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Hm(a,i.path)?r=!1:fe(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return zm(t),!0;if(i.snap)t.visibleWrites=ua(t.visibleWrites,i.path);else{const a=i.children;Q(a,l=>{t.visibleWrites=ua(t.visibleWrites,B(i.path,l))})}return!0}else return!1}function Hm(t,e){if(t.snap)return fe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fe(B(t.path,n),e))return!0;return!1}function zm(t){t.visibleWrites=mc(t.allWrites,Gm,R()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Gm(t){return t.visible}function mc(t,e,n){let i=be.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)fe(n,o)?(a=Z(n,o),i=ln(i,a,s.snap)):fe(o,n)&&(a=Z(o,n),i=ln(i,R(),s.snap.getChild(a)));else if(s.children){if(fe(n,o))a=Z(n,o),i=Wr(i,a,s.children);else if(fe(o,n))if(a=Z(o,n),x(a))i=Wr(i,R(),s.children);else{const l=_t(s.children,S(a));if(l){const c=l.getChild(O(a));i=ln(i,R(),c)}}}else throw qt("WriteRecord should have .snap or .children")}}return i}function yc(t,e,n,i,r){if(!i&&!r){const s=wt(t.visibleWrites,e);if(s!=null)return s;{const o=Ge(t.visibleWrites,e);if(qr(o))return n;if(n==null&&!jr(o,R()))return null;{const a=n||v.EMPTY_NODE;return Wt(o,a)}}}else{const s=Ge(t.visibleWrites,e);if(!r&&qr(s))return n;if(!r&&n==null&&!jr(s,R()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(fe(c.path,e)||fe(e,c.path))},a=mc(t.allWrites,o,e),l=n||v.EMPTY_NODE;return Wt(a,l)}}}function Qm(t,e,n){let i=v.EMPTY_NODE;const r=wt(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(F,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Ge(t.visibleWrites,e);return n.forEachChild(F,(o,a)=>{const l=Wt(Ge(s,new P(o)),a);i=i.updateImmediateChild(o,l)}),ha(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Ge(t.visibleWrites,e);return ha(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Ym(t,e,n,i,r){_(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=B(e,n);if(jr(t.visibleWrites,s))return null;{const o=Ge(t.visibleWrites,s);return qr(o)?r.getChild(n):Wt(o,r.getChild(n))}}function Km(t,e,n,i){const r=B(e,n),s=wt(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Ge(t.visibleWrites,r);return Wt(o,i.getNode().getImmediateChild(n))}else return null}function Xm(t,e){return wt(t.visibleWrites,e)}function Jm(t,e,n,i,r,s,o){let a;const l=Ge(t.visibleWrites,e),c=wt(l,R());if(c!=null)a=c;else if(n!=null)a=Wt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&h.length<r;)u(f,i)!==0&&h.push(f),f=d.getNext();return h}else return[]}function Zm(){return{visibleWrites:be.empty(),allWrites:[],lastWriteId:-1}}function vi(t,e,n,i){return yc(t.writeTree,t.treePath,e,n,i)}function Ps(t,e){return Qm(t.writeTree,t.treePath,e)}function da(t,e,n,i){return Ym(t.writeTree,t.treePath,e,n,i)}function wi(t,e){return Xm(t.writeTree,B(t.treePath,e))}function ey(t,e,n,i,r,s){return Jm(t.writeTree,t.treePath,e,n,i,r,s)}function Ds(t,e,n){return Km(t.writeTree,t.treePath,e,n)}function vc(t,e){return wc(B(t.treePath,e),t.writeTree)}function wc(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;_(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Cn(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,wn(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Bt(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Cn(i,e.snapshotNode,r.oldSnap));else throw qt("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Cc=new ny;class Ms{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ds(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mt(this.viewCache_),s=ey(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t){return{filter:t}}function ry(t,e){_(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sy(t,e,n,i,r){const s=new ty;let o,a;if(n.type===Ee.OVERWRITE){const c=n;c.source.fromUser?o=Ur(t,e,c.path,c.snap,i,r,s):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!x(c.path),o=Ci(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Ee.MERGE){const c=n;c.source.fromUser?o=ay(t,e,c.path,c.children,i,r,s):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Vr(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Ee.ACK_USER_WRITE){const c=n;c.revert?o=uy(t,e,c.path,i,r,s):o=ly(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Ee.LISTEN_COMPLETE)o=cy(t,e,n.path,i,s);else throw qt("Unknown operation type: "+n.type);const l=s.getChanges();return oy(e,o,l),{viewCache:o,changes:l}}function oy(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=yi(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(pc(yi(e)))}}function Ec(t,e,n,i,r,s){const o=e.eventCache;if(wi(i,n)!=null)return e;{let a,l;if(x(n))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=mt(e),h=c instanceof v?c:v.EMPTY_NODE,u=Ps(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=vi(i,mt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=S(n);if(c===".priority"){_(Ze(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=da(i,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=O(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=da(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Ds(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,r,s):a=o.getNode()}}return an(e,a,o.isFullyInitialized()||x(n),t.filter.filtersNodes())}}function Ci(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(x(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),f,null)}else{const f=S(n);if(!l.isCompleteForPath(n)&&Ze(n)>1)return e;const p=O(n),m=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=h.updatePriority(l.getNode(),m):c=h.updateChild(l.getNode(),f,m,p,Cc,null)}const u=_c(e,c,l.isFullyInitialized()||x(n),h.filtersNodes()),d=new Ms(r,u,s);return Ec(t,u,n,r,d,a)}function Ur(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const h=new Ms(r,e,s);if(x(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=an(e,c,!0,t.filter.filtersNodes());else{const u=S(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=an(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=O(n),f=a.getNode().getImmediateChild(u);let p;if(x(d))p=i;else{const g=h.getCompleteChild(u);g!=null?Es(d)===".priority"&&g.getChild(ac(d)).isEmpty()?p=g:p=g.updateChild(d,i):p=v.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),u,p,d,h,o);l=an(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function fa(t,e){return t.eventCache.isCompleteForChild(e)}function ay(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const h=B(n,l);fa(e,S(h))&&(a=Ur(t,a,h,c,r,s,o))}),i.foreach((l,c)=>{const h=B(n,l);fa(e,S(h))||(a=Ur(t,a,h,c,r,s,o))}),a}function pa(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Vr(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;x(n)?c=i:c=new L(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),p=pa(t,f,d);l=Ci(t,l,new P(u),p,r,s,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const p=e.serverCache.getNode().getImmediateChild(u),g=pa(t,p,d);l=Ci(t,l,new P(u),g,r,s,o,a)}}),l}function ly(t,e,n,i,r,s,o){if(wi(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(x(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ci(t,e,n,l.getNode().getChild(n),r,s,a,o);if(x(n)){let c=new L(null);return l.getNode().forEachChild(Te,(h,u)=>{c=c.set(new P(h),u)}),Vr(t,e,n,c,r,s,a,o)}else return e}else{let c=new L(null);return i.foreach((h,u)=>{const d=B(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Vr(t,e,n,c,r,s,a,o)}}function cy(t,e,n,i,r){const s=e.serverCache,o=_c(e,s.getNode(),s.isFullyInitialized()||x(n),s.isFiltered());return Ec(t,o,n,i,Cc,r)}function uy(t,e,n,i,r,s){let o;if(wi(i,n)!=null)return e;{const a=new Ms(i,e,r),l=e.eventCache.getNode();let c;if(x(n)||S(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=vi(i,mt(e));else{const u=e.serverCache.getNode();_(u instanceof v,"serverChildren would be complete if leaf node"),h=Ps(i,u)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=S(n);let u=Ds(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,O(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,v.EMPTY_NODE,O(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vi(i,mt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||wi(i,R())!=null,an(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Ns(i.getIndex()),s=xm(i);this.processor_=iy(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(v.EMPTY_NODE,a.getNode(),null),h=new et(l,o.isFullyInitialized(),r.filtersNodes()),u=new et(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Oi(u,h),this.eventGenerator_=new Lm(this.query_)}get query(){return this.query_}}function dy(t){return t.viewCache_.serverCache.getNode()}function fy(t){return yi(t.viewCache_)}function py(t,e){const n=mt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!x(e)&&!n.getImmediateChild(S(e)).isEmpty())?n.getChild(e):null}function _a(t){return t.eventRegistrations_.length===0}function _y(t,e){t.eventRegistrations_.push(e)}function ga(t,e,n){const i=[];if(n){_(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function ma(t,e,n,i){e.type===Ee.MERGE&&e.source.queryId!==null&&(_(mt(t.viewCache_),"We should always have a full cache before handling merges"),_(yi(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=sy(t.processor_,r,e,n,i);return ry(t.processor_,s.viewCache),_(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,bc(t,s.changes,s.viewCache.eventCache.getNode(),null)}function gy(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(F,(s,o)=>{i.push(Bt(s,o))}),n.isFullyInitialized()&&i.push(pc(n.getNode())),bc(t,i,n.getNode(),e)}function bc(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return Fm(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;class Sc{constructor(){this.views=new Map}}function my(t){_(!Ei,"__referenceConstructor has already been defined"),Ei=t}function yy(){return _(Ei,"Reference.ts has not been loaded"),Ei}function vy(t){return t.views.size===0}function Os(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return _(s!=null,"SyncTree gave us an op for an invalid query."),ma(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(ma(o,e,n,i));return s}}function xc(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=vi(n,r?i:null),l=!1;a?l=!0:i instanceof v?(a=Ps(n,i),l=!1):(a=v.EMPTY_NODE,l=!1);const c=Oi(new et(a,l,!1),new et(i,r,!1));return new hy(e,c)}return o}function wy(t,e,n,i,r,s){const o=xc(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),_y(o,n),gy(o,n)}function Cy(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=tt(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(ga(c,n,i)),_a(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(ga(l,n,i)),_a(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!tt(t)&&s.push(new(yy())(e._repo,e._path)),{removed:s,events:o}}function Ic(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Qe(t,e){let n=null;for(const i of t.views.values())n=n||py(i,e);return n}function Tc(t,e){if(e._queryParams.loadsAllData())return Fi(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Nc(t,e){return Tc(t,e)!=null}function tt(t){return Fi(t)!=null}function Fi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi;function Ey(t){_(!bi,"__referenceConstructor has already been defined"),bi=t}function by(){return _(bi,"Reference.ts has not been loaded"),bi}let Sy=1;class ya{constructor(e){this.listenProvider_=e,this.syncPointTree_=new L(null),this.pendingWriteTree_=Zm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ls(t,e,n,i,r){return jm(t.pendingWriteTree_,e,n,i,r),r?zt(t,new gt(As(),e,n)):[]}function xy(t,e,n,i){qm(t.pendingWriteTree_,e,n,i);const r=L.fromObject(n);return zt(t,new $t(As(),e,r))}function He(t,e,n=!1){const i=Um(t.pendingWriteTree_,e);if(Vm(t.pendingWriteTree_,e)){let s=new L(null);return i.snap!=null?s=s.set(R(),!0):Q(i.children,o=>{s=s.set(new P(o),!0)}),zt(t,new mi(i.path,s,n))}else return[]}function Dn(t,e,n){return zt(t,new gt(ks(),e,n))}function Iy(t,e,n){const i=L.fromObject(n);return zt(t,new $t(ks(),e,i))}function Ty(t,e){return zt(t,new bn(ks(),e))}function Ny(t,e,n){const i=Fs(t,n);if(i){const r=Bs(i),s=r.path,o=r.queryId,a=Z(s,e),l=new bn(Rs(o),a);return $s(t,s,l)}else return[]}function Si(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Nc(o,e))){const l=Cy(o,e,n,i);vy(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(d,f)=>tt(f));if(h&&!u){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=Ry(d);for(let p=0;p<f.length;++p){const g=f[p],m=g.query,y=Pc(t,g);t.listenProvider_.startListening(cn(m),Sn(t,m),y.hashFn,y.onComplete)}}}!u&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(cn(e),null):c.forEach(d=>{const f=t.queryToTagMap.get($i(d));t.listenProvider_.stopListening(cn(d),f)}))}Py(t,c)}return a}function Ac(t,e,n,i){const r=Fs(t,i);if(r!=null){const s=Bs(r),o=s.path,a=s.queryId,l=Z(o,e),c=new gt(Rs(a),l,n);return $s(t,o,c)}else return[]}function Ay(t,e,n,i){const r=Fs(t,i);if(r){const s=Bs(r),o=s.path,a=s.queryId,l=Z(o,e),c=L.fromObject(n),h=new $t(Rs(a),l,c);return $s(t,o,h)}else return[]}function Hr(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(d,f)=>{const p=Z(d,r);s=s||Qe(f,p),o=o||tt(f)});let a=t.syncPointTree_.get(r);a?(o=o||tt(a),s=s||Qe(a,R())):(a=new Sc,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=v.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((f,p)=>{const g=Qe(p,R());g&&(s=s.updateImmediateChild(f,g))}));const c=Nc(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=$i(e);_(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Dy();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const h=Li(t.pendingWriteTree_,r);let u=wy(a,e,n,h,s,l);if(!c&&!o&&!i){const d=Tc(a,e);u=u.concat(My(t,e,d))}return u}function Bi(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Z(o,e),c=Qe(a,l);if(c)return c});return yc(r,e,s,n,!0)}function ky(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=Z(c,n);i=i||Qe(h,u)});let r=t.syncPointTree_.get(n);r?i=i||Qe(r,R()):(r=new Sc,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new et(i,!0,!1):null,a=Li(t.pendingWriteTree_,e._path),l=xc(r,e,a,s?o.getNode():v.EMPTY_NODE,s);return fy(l)}function zt(t,e){return kc(e,t.syncPointTree_,null,Li(t.pendingWriteTree_,R()))}function kc(t,e,n,i){if(x(t.path))return Rc(t,e,n,i);{const r=e.get(R());n==null&&r!=null&&(n=Qe(r,R()));let s=[];const o=S(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=vc(i,o);s=s.concat(kc(a,l,c,h))}return r&&(s=s.concat(Os(r,t,i,n))),s}}function Rc(t,e,n,i){const r=e.get(R());n==null&&r!=null&&(n=Qe(r,R()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=vc(i,o),h=t.operationForChild(o);h&&(s=s.concat(Rc(h,a,l,c)))}),r&&(s=s.concat(Os(r,t,i,n))),s}function Pc(t,e){const n=e.query,i=Sn(t,n);return{hashFn:()=>(dy(e)||v.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Ny(t,n._path,i):Ty(t,n._path);{const s=xg(r,n);return Si(t,n,null,s)}}}}function Sn(t,e){const n=$i(e);return t.queryToTagMap.get(n)}function $i(t){return t._path.toString()+"$"+t._queryIdentifier}function Fs(t,e){return t.tagToQueryMap.get(e)}function Bs(t){const e=t.indexOf("$");return _(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new P(t.substr(0,e))}}function $s(t,e,n){const i=t.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const r=Li(t.pendingWriteTree_,e);return Os(i,n,r,null)}function Ry(t){return t.fold((e,n,i)=>{if(n&&tt(n))return[Fi(n)];{let r=[];return n&&(r=Ic(n)),Q(i,(s,o)=>{r=r.concat(o)}),r}})}function cn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(by())(t._repo,t._path):t}function Py(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=$i(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function Dy(){return Sy++}function My(t,e,n){const i=e._path,r=Sn(t,e),s=Pc(t,n),o=t.listenProvider_.startListening(cn(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)_(!tt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!x(c)&&h&&tt(h))return[Fi(h).query];{let d=[];return h&&(d=d.concat(Ic(h).map(f=>f.query))),Q(u,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(cn(h),Sn(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ws(n)}node(){return this.node_}}class js{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=B(this.path_,e);return new js(this.syncTree_,n)}node(){return Bi(this.syncTree_,this.path_)}}const Oy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},va=function(t,e,n){if(!t||typeof t!="object")return t;if(_(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ly(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Fy(t[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ly=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:_(!1,"Unexpected server value: "+t)}},Fy=function(t,e,n){t.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const r=e.node();if(_(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Dc=function(t,e,n,i){return Us(e,new js(n,t),i)},qs=function(t,e,n){return Us(t,new Ws(e),n)};function Us(t,e,n){const i=t.getPriority().val(),r=va(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=va(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new V(a,j(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new V(r))),o.forEachChild(F,(a,l)=>{const c=Us(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Wi(t,e){let n=e instanceof P?e:new P(e),i=t,r=S(n);for(;r!==null;){const s=_t(i.node.children,r)||{children:{},childCount:0};i=new Vs(r,i,s),n=O(n),r=S(n)}return i}function Ct(t){return t.node.value}function Hs(t,e){t.node.value=e,zr(t)}function Mc(t){return t.node.childCount>0}function By(t){return Ct(t)===void 0&&!Mc(t)}function ji(t,e){Q(t.node.children,(n,i)=>{e(new Vs(n,t,i))})}function Oc(t,e,n,i){n&&e(t),ji(t,r=>{Oc(r,e,!0)})}function $y(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Mn(t){return new P(t.parent===null?t.name:Mn(t.parent)+"/"+t.name)}function zr(t){t.parent!==null&&Wy(t.parent,t.name,t)}function Wy(t,e,n){const i=By(n),r=ce(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,zr(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,zr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=/[\[\].#$\/\u0000-\u001F\u007F]/,qy=/[\[\].#$\u0000-\u001F\u007F]/,hr=10*1024*1024,qi=function(t){return typeof t=="string"&&t.length!==0&&!jy.test(t)},Lc=function(t){return typeof t=="string"&&t.length!==0&&!qy.test(t)},Uy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Lc(t)},xn=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ri(t)||t&&typeof t=="object"&&ce(t,".sv")},Ae=function(t,e,n,i){i&&e===void 0||On(ie(t,"value"),e,n)},On=function(t,e,n){const i=n instanceof P?new sm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+at(i));if(typeof e=="function")throw new Error(t+"contains a function "+at(i)+" with contents = "+e.toString());if(Ri(e))throw new Error(t+"contains "+e.toString()+" "+at(i));if(typeof e=="string"&&e.length>hr/3&&Ai(e)>hr)throw new Error(t+"contains a string greater than "+hr+" utf8 bytes "+at(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Q(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!qi(o)))throw new Error(t+" contains an invalid key ("+o+") "+at(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);om(i,o),On(t,a,i),am(i)}),r&&s)throw new Error(t+' contains ".value" child '+at(i)+" in addition to actual children.")}},Vy=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=vn(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!qi(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rm);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&fe(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Fc=function(t,e,n,i){const r=ie(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];Q(e,(o,a)=>{const l=new P(o);if(On(r,a,B(n,l)),Es(l)===".priority"&&!xn(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),Vy(r,s)},zs=function(t,e,n){if(Ri(e))throw new Error(ie(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!xn(e))throw new Error(ie(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Ln=function(t,e,n,i){if(n!==void 0&&!qi(n))throw new Error(ie(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},In=function(t,e,n,i){if(!Lc(n))throw new Error(ie(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Hy=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),In(t,e,n)},pe=function(t,e){if(S(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Bc=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qi(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Uy(n))throw new Error(ie(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ui(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!bs(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function $c(t,e,n){Ui(t,n),Wc(t,i=>bs(i,e))}function ue(t,e,n){Ui(t,n),Wc(t,i=>fe(i,e)||fe(e,i))}function Wc(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(Gy(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Gy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();ht&&G("event: "+n.toString()),Vt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="repo_interrupt",Qy=25;class Yy{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gi(),this.transactionQueueTree_=new Vs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ky(t,e,n){if(t.stats_=ws(t.repoInfo_),t.forceRestClient_||Ag())t.server_=new _i(t.repoInfo_,(i,r,s,o)=>{wa(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ca(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{q(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Fe(t.repoInfo_,e,(i,r,s,o)=>{wa(t,i,r,s,o)},i=>{Ca(t,i)},i=>{Xy(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Mg(t.repoInfo_,()=>new Om(t.stats_,t.server_)),t.infoData_=new km,t.infoSyncTree_=new ya({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Dn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Gs(t,"connected",!1),t.serverSyncTree_=new ya({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);ue(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function qc(t){const n=t.infoData_.getNode(new P(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fn(t){return Oy({timestamp:qc(t)})}function wa(t,e,n,i,r){t.dataUpdateCount++;const s=new P(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=ci(n,c=>j(c));o=Ay(t.serverSyncTree_,s,l,r)}else{const l=j(n);o=Ac(t.serverSyncTree_,s,l,r)}else if(i){const l=ci(n,c=>j(c));o=Iy(t.serverSyncTree_,s,l)}else{const l=j(n);o=Dn(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=jt(t,s)),ue(t.eventQueue_,a,o)}function Ca(t,e){Gs(t,"connected",e),e===!1&&ev(t)}function Xy(t,e){Q(e,(n,i)=>{Gs(t,n,i)})}function Gs(t,e,n){const i=new P("/.info/"+e),r=j(n);t.infoData_.updateSnapshot(i,r);const s=Dn(t.infoSyncTree_,i,r);ue(t.eventQueue_,i,s)}function Vi(t){return t.nextWriteId_++}function Jy(t,e,n){const i=ky(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=j(r).withIndex(e._queryParams.getIndex());Hr(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Dn(t.serverSyncTree_,e._path,s);else{const a=Sn(t.serverSyncTree_,e);o=Ac(t.serverSyncTree_,e._path,s,a)}return ue(t.eventQueue_,e._path,o),Si(t.serverSyncTree_,e,n,null,!0),s},r=>(Gt(t,"get for query "+q(e)+" failed: "+r),Promise.reject(new Error(r))))}function Qs(t,e,n,i,r){Gt(t,"set",{path:e.toString(),value:n,priority:i});const s=Fn(t),o=j(n,i),a=Bi(t.serverSyncTree_,e),l=qs(o,a,s),c=Vi(t),h=Ls(t.serverSyncTree_,e,l,c,!0);Ui(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||X("set at "+e+" failed: "+d);const g=He(t.serverSyncTree_,c,!p);ue(t.eventQueue_,e,g),nt(t,r,d,f)});const u=Ks(t,e);jt(t,u),ue(t.eventQueue_,u,[])}function Zy(t,e,n,i){Gt(t,"update",{path:e.toString(),value:n});let r=!0;const s=Fn(t),o={};if(Q(n,(a,l)=>{r=!1,o[a]=Dc(B(e,a),j(l),t.serverSyncTree_,s)}),r)G("update() called with empty data.  Don't do anything."),nt(t,i,"ok",void 0);else{const a=Vi(t),l=xy(t.serverSyncTree_,e,o,a);Ui(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const u=c==="ok";u||X("update at "+e+" failed: "+c);const d=He(t.serverSyncTree_,a,!u),f=d.length>0?jt(t,e):e;ue(t.eventQueue_,f,d),nt(t,i,c,h)}),Q(n,c=>{const h=Ks(t,B(e,c));jt(t,h)}),ue(t.eventQueue_,e,[])}}function ev(t){Gt(t,"onDisconnectEvents");const e=Fn(t),n=gi();$r(t.onDisconnect_,R(),(r,s)=>{const o=Dc(r,s,t.serverSyncTree_,e);Ht(n,r,o)});let i=[];$r(n,R(),(r,s)=>{i=i.concat(Dn(t.serverSyncTree_,r,s));const o=Ks(t,r);jt(t,o)}),t.onDisconnect_=gi(),ue(t.eventQueue_,R(),i)}function tv(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Br(t.onDisconnect_,e),nt(t,n,i,r)})}function Ea(t,e,n,i){const r=j(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Ht(t.onDisconnect_,e,r),nt(t,i,s,o)})}function nv(t,e,n,i,r){const s=j(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ht(t.onDisconnect_,e,s),nt(t,r,o,a)})}function iv(t,e,n,i){if(Tr(n)){G("onDisconnect().update() called with empty data.  Don't do anything."),nt(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,s)=>{r==="ok"&&Q(n,(o,a)=>{const l=j(a);Ht(t.onDisconnect_,B(e,o),l)}),nt(t,i,r,s)})}function rv(t,e,n){let i;S(e._path)===".info"?i=Hr(t.infoSyncTree_,e,n):i=Hr(t.serverSyncTree_,e,n),$c(t.eventQueue_,e._path,i)}function Gr(t,e,n){let i;S(e._path)===".info"?i=Si(t.infoSyncTree_,e,n):i=Si(t.serverSyncTree_,e,n),$c(t.eventQueue_,e._path,i)}function Uc(t){t.persistentConnection_&&t.persistentConnection_.interrupt(jc)}function sv(t){t.persistentConnection_&&t.persistentConnection_.resume(jc)}function Gt(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),G(n,...e)}function nt(t,e,n,i){e&&Vt(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function ov(t,e,n,i,r,s){Gt(t,"transaction on "+e);const o={path:e,update:n,onComplete:i,status:null,order:Bl(),applyLocally:s,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ys(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{On("transaction failed: Data returned ",l,o.path),o.status=0;const c=Wi(t.transactionQueueTree_,e),h=Ct(c)||[];h.push(o),Hs(c,h);let u;typeof l=="object"&&l!==null&&ce(l,".priority")?(u=_t(l,".priority"),_(xn(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(Bi(t.serverSyncTree_,e)||v.EMPTY_NODE).getPriority().val();const d=Fn(t),f=j(l,u),p=qs(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=p,o.currentWriteId=Vi(t);const g=Ls(t.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);ue(t.eventQueue_,e,g),Hi(t,t.transactionQueueTree_)}}function Ys(t,e,n){return Bi(t.serverSyncTree_,e,n)||v.EMPTY_NODE}function Hi(t,e=t.transactionQueueTree_){if(e||zi(t,e),Ct(e)){const n=Hc(t,e);_(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&av(t,Mn(e),n)}else Mc(e)&&ji(e,n=>{Hi(t,n)})}function av(t,e,n){const i=n.map(c=>c.currentWriteId),r=Ys(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const h=n[c];_(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=Z(e,h.path);s=s.updateChild(u,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Gt(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(He(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();zi(t,Wi(t.transactionQueueTree_,e)),Hi(t,t.transactionQueueTree_),ue(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)Vt(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{X("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}jt(t,e)}},o)}function jt(t,e){const n=Vc(t,e),i=Mn(n),r=Hc(t,n);return lv(t,r,i),i}function lv(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Z(n,l.path);let h=!1,u;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,r=r.concat(He(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Qy)h=!0,u="maxretry",r=r.concat(He(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Ys(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){On("transaction failed: Data returned ",f,l.path);let p=j(f);typeof f=="object"&&f!=null&&ce(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=l.currentWriteId,y=Fn(t),E=qs(p,d,y);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=E,l.currentWriteId=Vi(t),o.splice(o.indexOf(m),1),r=r.concat(Ls(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),r=r.concat(He(t.serverSyncTree_,m,!0))}else h=!0,u="nodata",r=r.concat(He(t.serverSyncTree_,l.currentWriteId,!0))}ue(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}zi(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Vt(i[a]);Hi(t,t.transactionQueueTree_)}function Vc(t,e){let n,i=t.transactionQueueTree_;for(n=S(e);n!==null&&Ct(i)===void 0;)i=Wi(i,n),e=O(e),n=S(e);return i}function Hc(t,e){const n=[];return zc(t,e,n),n.sort((i,r)=>i.order-r.order),n}function zc(t,e,n){const i=Ct(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ji(e,r=>{zc(t,r,n)})}function zi(t,e){const n=Ct(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Hs(e,n.length>0?n:void 0)}ji(e,i=>{zi(t,i)})}function Ks(t,e){const n=Mn(Vc(t,e)),i=Wi(t.transactionQueueTree_,e);return $y(i,r=>{dr(t,r)}),dr(t,i),Oc(i,r=>{dr(t,r)}),n}function dr(t,e){const n=Ct(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(_(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(_(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(He(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hs(e,void 0):n.length=s+1,ue(t.eventQueue_,Mn(e),r);for(let o=0;o<i.length;o++)Vt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function uv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):X(`Invalid query segment '${n}' in query '${t}'`)}return e}const Qr=function(t,e){const n=hv(t),i=n.namespace;n.domain==="firebase.com"&&Ne(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ne("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wg();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Jl(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new P(n.pathString)}},hv=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(r=cv(t.substring(h,u)));const d=uv(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dv=(function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=ba.charAt(n%64),n=Math.floor(n/64);_(n===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=ba.charAt(e[r]);return _(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+q(this.snapshot.exportVal())}}class Qc{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fv=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new ee;return tv(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){pe("OnDisconnect.remove",this._path);const e=new ee;return Ea(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){pe("OnDisconnect.set",this._path),Ae("OnDisconnect.set",e,this._path,!1);const n=new ee;return Ea(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){pe("OnDisconnect.setWithPriority",this._path),Ae("OnDisconnect.setWithPriority",e,this._path,!1),zs("OnDisconnect.setWithPriority",n);const i=new ee;return nv(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){pe("OnDisconnect.update",this._path),Fc("OnDisconnect.update",e,this._path);const n=new ee;return iv(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return x(this._path)?null:Es(this._path)}get ref(){return new ge(this._repo,this._path)}get _queryIdentifier(){const e=la(this._queryParams),n=ys(e);return n==="{}"?"default":n}get _queryObject(){return la(this._queryParams)}isEqual(e){if(e=he(e),!(e instanceof re))return!1;const n=this._repo===e._repo,i=bs(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+im(this._path)}}function Gi(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function it(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Te){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Je)throw new Error(i);if(typeof e!="string")throw new Error(r)}if(t.hasEnd()){if(t.getIndexEndName()!==je)throw new Error(i);if(typeof n!="string")throw new Error(r)}}else if(t.getIndex()===F){if(e!=null&&!xn(e)||n!=null&&!xn(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(_(t.getIndex()instanceof Is||t.getIndex()===Ts,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Qi(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ge extends re{constructor(e,n){super(e,n,new Di,!1)}get parent(){const e=ac(this._path);return e===null?null:new ge(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Yi=class Yr{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new P(e),i=yt(this.ref,e);return new Yr(this._node.getChild(n),i,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Yr(r,yt(this.ref,i),F)))}hasChild(e){const n=new P(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function Yc(t,e){return t=he(t),t._checkNotDeleted("ref"),e!==void 0?yt(t._root,e):t._root}function Sa(t,e){t=he(t),t._checkNotDeleted("refFromURL");const n=Qr(e,t._repo.repoInfo_.nodeAdmin);Bc("refFromURL",n);const i=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&i.host!==t._repo.repoInfo_.host&&Ne("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+t._repo.repoInfo_.host+")"),Yc(t,n.path.toString())}function yt(t,e){return t=he(t),S(t._path)===null?Hy("child","path",e):In("child","path",e),new ge(t._repo,B(t._path,e))}function pv(t,e){t=he(t),pe("push",t._path),Ae("push",e,t._path,!0);const n=qc(t._repo),i=dv(n),r=yt(t,i),s=yt(t,i);let o;return e!=null?o=Js(s,e).then(()=>s):o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function _v(t){return pe("remove",t._path),Js(t,null)}function Js(t,e){t=he(t),pe("set",t._path),Ae("set",e,t._path,!1);const n=new ee;return Qs(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function gv(t,e){t=he(t),pe("setPriority",t._path),zs("setPriority",e);const n=new ee;return Qs(t._repo,B(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function mv(t,e,n){if(pe("setWithPriority",t._path),Ae("setWithPriority",e,t._path,!1),zs("setWithPriority",n),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const i=new ee;return Qs(t._repo,t._path,e,n,i.wrapCallback(()=>{})),i.promise}function yv(t,e){Fc("update",e,t._path);const n=new ee;return Zy(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function vv(t){t=he(t);const e=new Xs(()=>{}),n=new Bn(e);return Jy(t._repo,t,n).then(i=>new Yi(i,new ge(t._repo,t._path),t._queryParams.getIndex()))}class Bn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Gc("value",this,new Yi(e.snapshotNode,new ge(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qc(this,e,n):null}matches(e){return e instanceof Bn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ki{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qc(this,e,n):null}createEvent(e,n){_(e.childName!=null,"Child events should have a childName.");const i=yt(new ge(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new Gc(e.type,this,new Yi(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ki?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function $n(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(h,u)=>{Gr(t._repo,t,a),l(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Xs(n,s||void 0),a=e==="value"?new Bn(o):new Ki(e,o);return rv(t._repo,t,a),()=>Gr(t._repo,t,a)}function Kr(t,e,n,i){return $n(t,"value",e,n,i)}function xa(t,e,n,i){return $n(t,"child_added",e,n,i)}function Ia(t,e,n,i){return $n(t,"child_changed",e,n,i)}function Ta(t,e,n,i){return $n(t,"child_moved",e,n,i)}function Na(t,e,n,i){return $n(t,"child_removed",e,n,i)}function Aa(t,e,n){let i=null;const r=n?new Xs(n):null;e==="value"?i=new Bn(r):e&&(i=new Ki(e,r)),Gr(t._repo,t,i)}class xe{}class Kc extends xe{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Ae("endAt",this._value,e._path,!0);const n=Fr(e._queryParams,this._value,this._key);if(Qi(n),it(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new re(e._repo,e._path,n,e._orderByCalled)}}function wv(t,e){return Ln("endAt","key",e),new Kc(t,e)}class Cv extends xe{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){Ae("endBefore",this._value,e._path,!1);const n=Am(e._queryParams,this._value,this._key);if(Qi(n),it(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new re(e._repo,e._path,n,e._orderByCalled)}}function Ev(t,e){return Ln("endBefore","key",e),new Cv(t,e)}class Xc extends xe{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Ae("startAt",this._value,e._path,!0);const n=Lr(e._queryParams,this._value,this._key);if(Qi(n),it(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new re(e._repo,e._path,n,e._orderByCalled)}}function bv(t=null,e){return Ln("startAt","key",e),new Xc(t,e)}class Sv extends xe{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){Ae("startAfter",this._value,e._path,!1);const n=Nm(e._queryParams,this._value,this._key);if(Qi(n),it(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new re(e._repo,e._path,n,e._orderByCalled)}}function xv(t,e){return Ln("startAfter","key",e),new Sv(t,e)}class Iv extends xe{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new re(e._repo,e._path,Im(e._queryParams,this._limit),e._orderByCalled)}}function Tv(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Iv(t)}class Nv extends xe{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new re(e._repo,e._path,Tm(e._queryParams,this._limit),e._orderByCalled)}}function Av(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Nv(t)}class kv extends xe{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Gi(e,"orderByChild");const n=new P(this._path);if(x(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new Is(n),r=Mi(e._queryParams,i);return it(r),new re(e._repo,e._path,r,!0)}}function Rv(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return In("orderByChild","path",t),new kv(t)}class Pv extends xe{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Gi(e,"orderByKey");const n=Mi(e._queryParams,Te);return it(n),new re(e._repo,e._path,n,!0)}}function Dv(){return new Pv}class Mv extends xe{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){Gi(e,"orderByPriority");const n=Mi(e._queryParams,F);return it(n),new re(e._repo,e._path,n,!0)}}function Ov(){return new Mv}class Lv extends xe{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){Gi(e,"orderByValue");const n=Mi(e._queryParams,Ts);return it(n),new re(e._repo,e._path,n,!0)}}function Fv(){return new Lv}class Bv extends xe{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Ae("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Kc(this._value,this._key)._apply(new Xc(this._value,this._key)._apply(e))}}function $v(t,e){return Ln("equalTo","key",e),new Bv(t,e)}function ve(t,...e){let n=he(t);for(const i of e)n=i._apply(n);return n}my(ge);Ey(ge);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="FIREBASE_DATABASE_EMULATOR_HOST",Xr={};let jv=!1;function qv(t,e,n,i){const r=e.lastIndexOf(":"),s=e.substring(0,r),o=us(s);t.repoInfo_=new Jl(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function Jc(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Ne("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),G("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Qr(s,r),a=o.repoInfo,l,c;typeof process<"u"&&Vo&&(c=Vo[Wv]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Qr(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const h=r&&l?new kt(kt.OWNER):new Rg(t.name,t.options,e);Bc("Invalid Firebase Database URL",o),x(o.path)||Ne("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Vv(a,t,h,new kg(t,n));return new Hv(u,t)}function Uv(t,e){const n=Xr[e];(!n||n[t.key]!==t)&&Ne(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Uc(t),delete n[t.key]}function Vv(t,e,n,i){let r=Xr[e.name];r||(r={},Xr[e.name]=r);let s=r[t.toURLString()];return s&&Ne("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Yy(t,jv,n,i),r[t.toURLString()]=s,s}let Hv=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ky(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ge(this._repo,R())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Uv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ne("Cannot call "+e+" on a deleted database.")}};function Zc(){Ft.IS_TRANSPORT_INITIALIZED&&X("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function zv(){Zc(),Ve.forceDisallow()}function Gv(){Zc(),de.forceDisallow(),Ve.forceAllow()}function Qv(t,e,n,i={}){t=he(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&ui(i,s.repoInfo_.emulatorOptions))return;Ne("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ne('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new kt(kt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:kp(i.mockUserToken,t.app.options.projectId);o=new kt(a)}us(e)&&(Ap(e),Dp("Database",!0)),qv(s,r,i,o)}function Yv(t){t=he(t),t._checkNotDeleted("goOffline"),Uc(t._repo)}function Kv(t){t=he(t),t._checkNotDeleted("goOnline"),sv(t._repo)}function Xv(t,e){Wl(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){Ll(_s),Lt(new $e("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Jc(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Le(Ho,zo,t),Le(Ho,zo,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv={".sv":"timestamp"};function e0(){return Zv}function t0(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function i0(t,e,n){if(t=he(t),pe("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(n==null?void 0:n.applyLocally)??!0,r=new ee,s=(a,l,c)=>{let h=null;a?r.reject(a):(h=new Yi(c,new ge(t._repo,t._path),F),r.resolve(new n0(l,h)))},o=Kr(t,()=>{});return ov(t._repo,t._path,e,s,o,i),r.promise}Fe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Jv();const r0="@firebase/database-compat",s0="2.1.0";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=new ki("@firebase/database-compat"),eu=function(t){const e="FIREBASE WARNING: "+t;o0.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=function(t,e,n,i){if(n!==void 0&&typeof n!="boolean")throw new Error(ie(t,e)+"must be a boolean.")},l0=function(t,e,n){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(ie(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this._delegate=e}cancel(e){w("OnDisconnect.cancel",0,1,arguments.length),H("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),i=>e(i)),n}remove(e){w("OnDisconnect.remove",0,1,arguments.length),H("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),i=>e(i)),n}set(e,n){w("OnDisconnect.set",1,2,arguments.length),H("OnDisconnect.set","onComplete",n,!0);const i=this._delegate.set(e);return n&&i.then(()=>n(null),r=>n(r)),i}setWithPriority(e,n,i){w("OnDisconnect.setWithPriority",2,3,arguments.length),H("OnDisconnect.setWithPriority","onComplete",i,!0);const r=this._delegate.setWithPriority(e,n);return i&&r.then(()=>i(null),s=>i(s)),r}update(e,n){if(w("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,eu("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}H("OnDisconnect.update","onComplete",n,!0);const i=this._delegate.update(e);return n&&i.then(()=>n(null),r=>n(r)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return w("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this._database=e,this._delegate=n}val(){return w("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return w("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return w("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return w("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return w("DataSnapshot.child",0,1,arguments.length),e=String(e),In("DataSnapshot.child","path",e),new Ye(this._database,this._delegate.child(e))}hasChild(e){return w("DataSnapshot.hasChild",1,1,arguments.length),In("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return w("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return w("DataSnapshot.forEach",1,1,arguments.length),H("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Ye(this._database,n)))}hasChildren(){return w("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return w("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return w("DataSnapshot.ref",0,0,arguments.length),new ae(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class K{constructor(e,n){this.database=e,this._delegate=n}on(e,n,i,r){var l;w("Query.on",2,4,arguments.length),H("Query.on","callback",n,!1);const s=K.getCancelAndContextArgs_("Query.on",i,r),o=(c,h)=>{n.call(s.context,new Ye(this.database,c),h)};o.userCallback=n,o.context=s.context;const a=(l=s.cancel)==null?void 0:l.bind(s.context);switch(e){case"value":return Kr(this._delegate,o,a),n;case"child_added":return xa(this._delegate,o,a),n;case"child_removed":return Na(this._delegate,o,a),n;case"child_changed":return Ia(this._delegate,o,a),n;case"child_moved":return Ta(this._delegate,o,a),n;default:throw new Error(ie("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,i){if(w("Query.off",0,3,arguments.length),l0("Query.off",e),H("Query.off","callback",n,!0),Mo("Query.off","context",i),n){const r=()=>{};r.userCallback=n,r.context=i,Aa(this._delegate,e,r)}else Aa(this._delegate,e)}get(){return vv(this._delegate).then(e=>new Ye(this.database,e))}once(e,n,i,r){w("Query.once",1,4,arguments.length),H("Query.once","callback",n,!0);const s=K.getCancelAndContextArgs_("Query.once",i,r),o=new ee,a=(c,h)=>{const u=new Ye(this.database,c);n&&n.call(s.context,u,h),o.resolve(u)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":Kr(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":xa(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":Na(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":Ia(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":Ta(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(ie("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return w("Query.limitToFirst",1,1,arguments.length),new K(this.database,ve(this._delegate,Tv(e)))}limitToLast(e){return w("Query.limitToLast",1,1,arguments.length),new K(this.database,ve(this._delegate,Av(e)))}orderByChild(e){return w("Query.orderByChild",1,1,arguments.length),new K(this.database,ve(this._delegate,Rv(e)))}orderByKey(){return w("Query.orderByKey",0,0,arguments.length),new K(this.database,ve(this._delegate,Dv()))}orderByPriority(){return w("Query.orderByPriority",0,0,arguments.length),new K(this.database,ve(this._delegate,Ov()))}orderByValue(){return w("Query.orderByValue",0,0,arguments.length),new K(this.database,ve(this._delegate,Fv()))}startAt(e=null,n){return w("Query.startAt",0,2,arguments.length),new K(this.database,ve(this._delegate,bv(e,n)))}startAfter(e=null,n){return w("Query.startAfter",0,2,arguments.length),new K(this.database,ve(this._delegate,xv(e,n)))}endAt(e=null,n){return w("Query.endAt",0,2,arguments.length),new K(this.database,ve(this._delegate,wv(e,n)))}endBefore(e=null,n){return w("Query.endBefore",0,2,arguments.length),new K(this.database,ve(this._delegate,Ev(e,n)))}equalTo(e,n){return w("Query.equalTo",1,2,arguments.length),new K(this.database,ve(this._delegate,$v(e,n)))}toString(){return w("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return w("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(w("Query.isEqual",1,1,arguments.length),!(e instanceof K)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,i){const r={cancel:void 0,context:void 0};if(n&&i)r.cancel=n,H(e,"cancel",r.cancel,!0),r.context=i,Mo(e,"context",r.context);else if(n)if(typeof n=="object"&&n!==null)r.context=n;else if(typeof n=="function")r.cancel=n;else throw new Error(ie(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return r}get ref(){return new ae(this.database,new ge(this._delegate._repo,this._delegate._path))}}class ae extends K{constructor(e,n){super(e,new re(n._repo,n._path,new Di,!1)),this.database=e,this._delegate=n}getKey(){return w("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return w("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new ae(this.database,yt(this._delegate,e))}getParent(){w("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new ae(this.database,e):null}getRoot(){return w("Reference.root",0,0,arguments.length),new ae(this.database,this._delegate.root)}set(e,n){w("Reference.set",1,2,arguments.length),H("Reference.set","onComplete",n,!0);const i=Js(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}update(e,n){if(w("Reference.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,eu("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}pe("Reference.update",this._delegate._path),H("Reference.update","onComplete",n,!0);const i=yv(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}setWithPriority(e,n,i){w("Reference.setWithPriority",2,3,arguments.length),H("Reference.setWithPriority","onComplete",i,!0);const r=mv(this._delegate,e,n);return i&&r.then(()=>i(null),s=>i(s)),r}remove(e){w("Reference.remove",0,1,arguments.length),H("Reference.remove","onComplete",e,!0);const n=_v(this._delegate);return e&&n.then(()=>e(null),i=>e(i)),n}transaction(e,n,i){w("Reference.transaction",1,3,arguments.length),H("Reference.transaction","transactionUpdate",e,!1),H("Reference.transaction","onComplete",n,!0),a0("Reference.transaction","applyLocally",i);const r=i0(this._delegate,e,{applyLocally:i}).then(s=>new u0(s.committed,new Ye(this.database,s.snapshot)));return n&&r.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),r}setPriority(e,n){w("Reference.setPriority",1,2,arguments.length),H("Reference.setPriority","onComplete",n,!0);const i=gv(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}push(e,n){w("Reference.push",0,2,arguments.length),H("Reference.push","onComplete",n,!0);const i=pv(this._delegate,e),r=i.then(o=>new ae(this.database,o));n&&r.then(()=>n(null),o=>n(o));const s=new ae(this.database,i);return s.then=r.then.bind(r),s.catch=r.catch.bind(r,void 0),s}onDisconnect(){return pe("Reference.onDisconnect",this._delegate._path),new c0(new fv(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:zv,forceLongPolling:Gv}}useEmulator(e,n,i={}){Qv(this._delegate,e,n,i)}ref(e){if(w("database.ref",0,1,arguments.length),e instanceof ae){const n=Sa(this._delegate,e.toString());return new ae(this,n)}else{const n=Yc(this._delegate,e);return new ae(this,n)}}refFromURL(e){w("database.refFromURL",1,1,arguments.length);const i=Sa(this._delegate,e);return new ae(this,i)}goOffline(){return w("database.goOffline",0,0,arguments.length),Yv(this._delegate)}goOnline(){return w("database.goOnline",0,0,arguments.length),Kv(this._delegate)}}Tn.ServerValue={TIMESTAMP:e0(),increment:t=>t0(t)};function h0({app:t,url:e,version:n,customAuthImpl:i,customAppCheckImpl:r,namespace:s,nodeAdmin:o=!1}){Ll(n);const a=new hs("database-standalone"),l=new Nr("auth-internal",a);l.setComponent(new $e("auth-internal",()=>i,"PRIVATE"));let c;return r&&(c=new Nr("app-check-internal",a),c.setComponent(new $e("app-check-internal",()=>r,"PRIVATE"))),{instance:new Tn(Jc(t,l,c,e,o),t),namespace:s}}var d0=Object.freeze({__proto__:null,initStandalone:h0});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=Tn.ServerValue;function p0(t){t.INTERNAL.registerComponent(new $e("database-compat",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:n});return new Tn(r,i)},"PUBLIC").setServiceProps({Reference:ae,Query:K,Database:Tn,DataSnapshot:Ye,enableLogging:Xv,INTERNAL:d0,ServerValue:f0}).setMultipleInstances(!0)),t.registerVersion(r0,s0)}p0(Nt);const _0={databaseURL:"https://ril-gp-default-rtdb.firebaseio.com/"};Nt.apps.length?Nt.app():Nt.initializeApp(_0);const g0=Nt.database();function m0(t){return t.split(/\r?\n/).filter(n=>n.trim()&&!n.trim().startsWith("#")&&!n.trim().startsWith(";")).map(n=>{let i;n.includes(";")?i=n.split(";"):i=n.trim().split(/\s+/),i=i.map(o=>o.trim());const r=i[0].replace(" ","T"),s=parseFloat(i[1].replace(",","."));return Number.isNaN(s)?null:{datetime:new Date(r),q:s}}).filter(Boolean)}function y0(t){const e=t.split(/\r?\n/).filter(s=>s.trim()),n=e[0].split(",").map(s=>s.replace(/^"|"$/g,"").trim().toLowerCase()),i=n.findIndex(s=>s.includes("date")),r=n.findIndex(s=>s.includes("mean temp"));if(i===-1||r===-1)throw new Error("Cannot find Date / Mean Temp columns in Meteo CSV.");return e.slice(1).map(s=>{const o=s.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)||s.split(",");if(!o[i]||!o[r])return null;const a=o[i].replace(/^"|"$/g,"").trim(),l=o[r].replace(/^"|"$/g,"").trim();if(!a||!l)return null;const c=parseFloat(l);return Number.isNaN(c)?null:{date:new Date(a),tmean:c}}).filter(Boolean)}function v0(t,e=-5,n=null,i=null){t.sort((l,c)=>l.date-c.date);const r=n?new Date(n):null,s=i?new Date(i):null;let o=0,a=0;return t.map(l=>{const c=l.tmean;if(!r||l.date>=r?c<0?o+=Math.abs(c):c>0&&(o=Math.max(0,o-c)):o=0,!s||l.date>=s){const h=c-e;h>0?a+=h:h<0&&(a=Math.max(0,a+h))}else a=0;return{...l,djgc:o,djdc5:a}})}function w0(t,e){if(!e||e.length===0)return[];const n=e.map(r=>{const s=new Date(r.date);return s.setHours(12,0,0,0),{time:s.getTime(),djgc:r.djgc,djdc5:r.djdc5,tmean:r.tmean}}).sort((r,s)=>r.time-s.time),i=t.map(r=>{const s=r.datetime.getTime(),o=n.findIndex(h=>h.time>s);let a,l;const c=(h,u,d)=>h+(u-h)*d;if(o===-1){const h=n[n.length-1];a=h.djgc,l=h.djdc5}else if(o===0){const h=n[0];a=h.djgc,l=h.djdc5}else{const h=n[o-1],u=n[o],d=(s-h.time)/(u.time-h.time);a=c(h.djgc,u.djgc,d),l=c(h.djdc5,u.djdc5,d)}return{datetime:r.datetime,q:r.q,tmean:null,djgc:a,djdc5:l}}).filter(Boolean);return i.sort((r,s)=>r.datetime-s.datetime),i}function C0(t,e=2){const n=new Map;for(const r of t){const s=Math.floor(r.djgc/e)*e;n.has(s)||n.set(s,[]),n.get(s).push(r.q)}const i=[];for(const[r,s]of n.entries()){s.sort((h,u)=>h-u);const o=s.length;if(o===0)continue;const a=h=>{const u=h*(o-1),d=Math.floor(u),f=u-d;return d+1<o?s[d]+f*(s[d+1]-s[d]):s[d]},l=a(.25),c=a(.75);i.push({djgc:r,q25:l,q75:c})}return i.sort((r,s)=>r.djgc-s.djgc),i}function E0(t){const e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();if(n>10||n===10&&i>=15){const o=String(e+1).slice(2);return`${e}_${o}`}const r=e-1,s=String(e).slice(2);return`${r}_${s}`}async function b0(t,e,n){if(!n||n.length===0)return;const i={};let r=0;if(n.forEach(s=>{const o=s.datetime||s.date;if(!o)return;const a=E0(o),l=o.toISOString().replace(/\./g,"_"),c=`${t}/${a}/${e}/${l}`;i[c]={date:o.toISOString(),q:s.q??null,tmean:s.tmean??null,djgc:s.djgc??null,djdc5:s.djdc5??null},r++}),r>0)try{await g0.ref().update(i),console.log(`Saved ${r} records to Firebase (${e}).`)}catch(s){console.error("Firebase Save Error:",s)}}async function S0(){const t="/data/lassomption_q.txt",e="/data/lassomption_t.csv";try{const[n,i]=await Promise.all([fetch(t).then(u=>{if(!u.ok)throw new Error("Error loading Q from CEHQ");return u.text()}),fetch(e).then(u=>{if(!u.ok)throw new Error("Error loading Tmean from Meteo Canada");return u.text()})]),r=m0(n),s=y0(i),l=v0(s,-5,"2025-10-15","2026-02-15"),c=w0(r,l),h=C0(c,1);return console.log("Merged Points (Interp):",c),console.log("Envelopes:",h),await b0("lassomption","actual",c),{points:c,envelopes:h}}catch(n){return console.error("Data Import Error:",n),{points:[],envelopes:[]}}}let qe=!1,k=null,Oe=null;function Zs(){const t=document.getElementById("pointStatus");if(!k){t.textContent="No point selected.",document.getElementById("ptDj").value="",document.getElementById("ptQ").value="";return}const e=dt[k.riverKey],n=k.panelKey==="djgc"?"DJGC–Q panel":"DJDC-5–Q panel",i=k.zone==="greenYellow"?"green/yellow boundary":"yellow/red boundary";t.textContent=`Selected: ${e.label} – ${n}, ${i}, point #${k.index+1}`}function Ue(t){k=t;const e=dt[t.riverKey],r=(t.panelKey==="djgc"?e.djgcZones:e.djdcZones)[t.zone][t.index];document.getElementById("ptDj").value=r.dj,document.getElementById("ptQ").value=r.q,Zs(),It(k,qe,Ue,Oe)}async function ka(t){const e=dt[t];if(e){if(document.getElementById("qMin").value=e.qMin,document.getElementById("qMax").value=e.qMax,document.getElementById("djgcMax").value=e.djgcMax,document.getElementById("djdcMax").value=e.djdcMax,document.getElementById("qBankfull").value=e.qBankfull,k=null,Zs(),t==="lassomption")try{Oe=await S0()}catch(n){console.error(n),alert("Error loading historical data."),Oe=null}else Oe=null;It(k,qe,Ue,Oe)}}document.addEventListener("DOMContentLoaded",()=>{ka("lassomption"),document.getElementById("riverSelect").addEventListener("change",t=>ka(t.target.value)),document.getElementById("drawBtn").addEventListener("click",()=>{It(k,qe,Ue,Oe)}),document.getElementById("showPointsBtn").addEventListener("click",()=>{qe=!0,It(k,qe,Ue,Oe)}),document.getElementById("hidePointsBtn").addEventListener("click",()=>{qe=!1,k=null,Zs(),It(k,qe,Ue,Oe)}),document.getElementById("updatePointBtn").addEventListener("click",()=>{if(!k){alert("No point selected.");return}const t=parseFloat(document.getElementById("ptDj").value),e=parseFloat(document.getElementById("ptQ").value);if(isNaN(t)||isNaN(e)){alert("Please enter valid numeric values for DJ and Q.");return}const n=dt[k.riverKey],r=(k.panelKey==="djgc"?n.djgcZones:n.djdcZones)[k.zone];if(!r||k.index<0||k.index>=r.length){alert("Internal error: point not found.");return}r[k.index]={dj:t,q:e},It(k,qe,Ue,Oe)}),document.getElementById("moveLeftBtn").addEventListener("click",()=>{k&&k.index>0&&Ue({...k,index:k.index-1})}),document.getElementById("moveRightBtn").addEventListener("click",()=>{if(!k)return;const t=dt[k.riverKey],n=(k.panelKey==="djgc"?t.djgcZones:t.djdcZones)[k.zone];n&&k.index<n.length-1&&Ue({...k,index:k.index+1})})});
