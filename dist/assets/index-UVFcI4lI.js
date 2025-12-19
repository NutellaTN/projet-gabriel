(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Le={lassomption:{label:"L'Assomption River",qMin:5,qMax:500,djgcMax:1300,djdcMax:300,qBankfull:350,djgcTicks:[0,150,300,450,600,750,900,1050,1200],djdcTicks:[0,50,100,150,200,250,300],djgcZones:{greenYellow:[{dj:0,q:200},{dj:110,q:200},{dj:50,q:150},{dj:50,q:50},{dj:1300,q:50}],yellowRed:[{dj:0,q:250},{dj:150,q:250},{dj:110,q:150},{dj:110,q:100},{dj:1300,q:100}]},djdcZones:{greenYellow:[{dj:0,q:50},{dj:120,q:50},{dj:250,q:150},{dj:220,q:200},{dj:300,q:200}],yellowRed:[{dj:0,q:100},{dj:120,q:100},{dj:160,q:150},{dj:120,q:250},{dj:300,q:250}]}},montmorency:{label:"Montmorency River",qMin:5,qMax:450,djgcMax:1100,djdcMax:260,qBankfull:240,djgcTicks:[0,200,400,600,800,1e3],djdcTicks:[0,50,100,150,200,250],djgcZones:{greenYellow:[{dj:0,q:40},{dj:1100,q:40}],yellowRed:[{dj:0,q:80},{dj:1100,q:80}]},djdcZones:{greenYellow:[{dj:0,q:40},{dj:260,q:60}],yellowRed:[{dj:0,q:110},{dj:260,q:200}]}},steanne:{label:"Ste-Anne River",qMin:5,qMax:400,djgcMax:1e3,djdcMax:240,qBankfull:220,djgcTicks:[0,200,400,600,800,1e3],djdcTicks:[0,50,100,150,200,240],djgcZones:{greenYellow:[{dj:0,q:35},{dj:1e3,q:35}],yellowRed:[{dj:0,q:70},{dj:1e3,q:70}]},djdcZones:{greenYellow:[{dj:0,q:35},{dj:240,q:60}],yellowRed:[{dj:0,q:100},{dj:240,q:190}]}}};function Mr(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function Wh(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function _c(n){let t,e,r;n.length!==2?(t=Mr,e=(u,l)=>Mr(n(u),l),r=(u,l)=>n(u)-l):(t=n===Mr||n===Wh?n:Xh,e=n,r=n);function i(u,l,h=0,d=u.length){if(h<d){if(t(l,l)!==0)return d;do{const p=h+d>>>1;e(u[p],l)<0?h=p+1:d=p}while(h<d)}return h}function o(u,l,h=0,d=u.length){if(h<d){if(t(l,l)!==0)return d;do{const p=h+d>>>1;e(u[p],l)<=0?h=p+1:d=p}while(h<d)}return h}function a(u,l,h=0,d=u.length){const p=i(u,l,h,d-1);return p>h&&r(u[p-1],l)>-r(u[p],l)?p-1:p}return{left:i,center:a,right:o}}function Xh(){return 0}function Yh(n){return n===null?NaN:+n}const Jh=_c(Mr),Zh=Jh.right;_c(Yh).center;const tf=Math.sqrt(50),ef=Math.sqrt(10),nf=Math.sqrt(2);function Gr(n,t,e){const r=(t-n)/Math.max(0,e),i=Math.floor(Math.log10(r)),o=r/Math.pow(10,i),a=o>=tf?10:o>=ef?5:o>=nf?2:1;let u,l,h;return i<0?(h=Math.pow(10,-i)/a,u=Math.round(n*h),l=Math.round(t*h),u/h<n&&++u,l/h>t&&--l,h=-h):(h=Math.pow(10,i)*a,u=Math.round(n/h),l=Math.round(t/h),u*h<n&&++u,l*h>t&&--l),l<u&&.5<=e&&e<2?Gr(n,t,e*2):[u,l,h]}function cs(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const r=t<n,[i,o,a]=r?Gr(t,n,e):Gr(n,t,e);if(!(o>=i))return[];const u=o-i+1,l=new Array(u);if(r)if(a<0)for(let h=0;h<u;++h)l[h]=(o-h)/-a;else for(let h=0;h<u;++h)l[h]=(o-h)*a;else if(a<0)for(let h=0;h<u;++h)l[h]=(i+h)/-a;else for(let h=0;h<u;++h)l[h]=(i+h)*a;return l}function ls(n,t,e){return t=+t,n=+n,e=+e,Gr(n,t,e)[2]}function rf(n,t,e){t=+t,n=+n,e=+e;const r=t<n,i=r?ls(t,n,e):ls(n,t,e);return(r?-1:1)*(i<0?1/-i:i)}function sf(n){return n}var Wi=1,Or=2,hs=3,Mn=4,Pa=1e-6;function of(n){return"translate("+n+",0)"}function af(n){return"translate(0,"+n+")"}function uf(n){return t=>+n(t)}function cf(n,t){return t=Math.max(0,n.bandwidth()-t*2)/2,n.round()&&(t=Math.round(t)),e=>+n(e)+t}function lf(){return!this.__axis}function Ks(n,t){var e=[],r=null,i=null,o=6,a=6,u=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,h=n===Wi||n===Mn?-1:1,d=n===Mn||n===Or?"x":"y",p=n===Wi||n===hs?of:af;function m(w){var C=r??(t.ticks?t.ticks.apply(t,e):t.domain()),P=i??(t.tickFormat?t.tickFormat.apply(t,e):sf),b=Math.max(o,0)+u,N=t.range(),M=+N[0]+l,O=+N[N.length-1]+l,B=(t.bandwidth?cf:uf)(t.copy(),l),q=w.selection?w.selection():w,$=q.selectAll(".domain").data([null]),T=q.selectAll(".tick").data(C,t).order(),y=T.exit(),v=T.enter().append("g").attr("class","tick"),I=T.select("line"),E=T.select("text");$=$.merge($.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(v),I=I.merge(v.append("line").attr("stroke","currentColor").attr(d+"2",h*o)),E=E.merge(v.append("text").attr("fill","currentColor").attr(d,h*b).attr("dy",n===Wi?"0em":n===hs?"0.71em":"0.32em")),w!==q&&($=$.transition(w),T=T.transition(w),I=I.transition(w),E=E.transition(w),y=y.transition(w).attr("opacity",Pa).attr("transform",function(A){return isFinite(A=B(A))?p(A+l):this.getAttribute("transform")}),v.attr("opacity",Pa).attr("transform",function(A){var _=this.parentNode.__axis;return p((_&&isFinite(_=_(A))?_:B(A))+l)})),y.remove(),$.attr("d",n===Mn||n===Or?a?"M"+h*a+","+M+"H"+l+"V"+O+"H"+h*a:"M"+l+","+M+"V"+O:a?"M"+M+","+h*a+"V"+l+"H"+O+"V"+h*a:"M"+M+","+l+"H"+O),T.attr("opacity",1).attr("transform",function(A){return p(B(A)+l)}),I.attr(d+"2",h*o),E.attr(d,h*b).text(P),q.filter(lf).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===Or?"start":n===Mn?"end":"middle"),q.each(function(){this.__axis=B})}return m.scale=function(w){return arguments.length?(t=w,m):t},m.ticks=function(){return e=Array.from(arguments),m},m.tickArguments=function(w){return arguments.length?(e=w==null?[]:Array.from(w),m):e.slice()},m.tickValues=function(w){return arguments.length?(r=w==null?null:Array.from(w),m):r&&r.slice()},m.tickFormat=function(w){return arguments.length?(i=w,m):i},m.tickSize=function(w){return arguments.length?(o=a=+w,m):o},m.tickSizeInner=function(w){return arguments.length?(o=+w,m):o},m.tickSizeOuter=function(w){return arguments.length?(a=+w,m):a},m.tickPadding=function(w){return arguments.length?(u=+w,m):u},m.offset=function(w){return arguments.length?(l=+w,m):l},m}function hf(n){return Ks(Or,n)}function Va(n){return Ks(hs,n)}function Xi(n){return Ks(Mn,n)}var ff={value:()=>{}};function yc(){for(var n=0,t=arguments.length,e={},r;n<t;++n){if(!(r=arguments[n]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new Lr(e)}function Lr(n){this._=n}function df(n,t){return n.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}Lr.prototype=yc.prototype={constructor:Lr,on:function(n,t){var e=this._,r=df(n+"",e),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(n=r[o]).type)&&(i=pf(e[i],n.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<a;)if(i=(n=r[o]).type)e[i]=Da(e[i],n.name,t);else if(t==null)for(i in e)e[i]=Da(e[i],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new Lr(n)},call:function(n,t){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,o;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],r=0,i=o.length;r<i;++r)o[r].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,o=r.length;i<o;++i)r[i].value.apply(t,e)}};function pf(n,t){for(var e=0,r=n.length,i;e<r;++e)if((i=n[e]).name===t)return i.value}function Da(n,t,e){for(var r=0,i=n.length;r<i;++r)if(n[r].name===t){n[r]=ff,n=n.slice(0,r).concat(n.slice(r+1));break}return e!=null&&n.push({name:t,value:e}),n}var fs="http://www.w3.org/1999/xhtml";const Na={svg:"http://www.w3.org/2000/svg",xhtml:fs,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function fi(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),Na.hasOwnProperty(t)?{space:Na[t],local:n}:n}function gf(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===fs&&t.documentElement.namespaceURI===fs?t.createElement(n):t.createElementNS(e,n)}}function mf(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Ec(n){var t=fi(n);return(t.local?mf:gf)(t)}function _f(){}function Qs(n){return n==null?_f:function(){return this.querySelector(n)}}function yf(n){typeof n!="function"&&(n=Qs(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],a=o.length,u=r[i]=new Array(a),l,h,d=0;d<a;++d)(l=o[d])&&(h=n.call(l,l.__data__,d,o))&&("__data__"in l&&(h.__data__=l.__data__),u[d]=h);return new kt(r,this._parents)}function Ef(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function vf(){return[]}function vc(n){return n==null?vf:function(){return this.querySelectorAll(n)}}function wf(n){return function(){return Ef(n.apply(this,arguments))}}function Tf(n){typeof n=="function"?n=wf(n):n=vc(n);for(var t=this._groups,e=t.length,r=[],i=[],o=0;o<e;++o)for(var a=t[o],u=a.length,l,h=0;h<u;++h)(l=a[h])&&(r.push(n.call(l,l.__data__,h,a)),i.push(l));return new kt(r,i)}function wc(n){return function(){return this.matches(n)}}function Tc(n){return function(t){return t.matches(n)}}var If=Array.prototype.find;function Af(n){return function(){return If.call(this.children,n)}}function Rf(){return this.firstElementChild}function Sf(n){return this.select(n==null?Rf:Af(typeof n=="function"?n:Tc(n)))}var Cf=Array.prototype.filter;function bf(){return Array.from(this.children)}function xf(n){return function(){return Cf.call(this.children,n)}}function Pf(n){return this.selectAll(n==null?bf:xf(typeof n=="function"?n:Tc(n)))}function Vf(n){typeof n!="function"&&(n=wc(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],a=o.length,u=r[i]=[],l,h=0;h<a;++h)(l=o[h])&&n.call(l,l.__data__,h,o)&&u.push(l);return new kt(r,this._parents)}function Ic(n){return new Array(n.length)}function Df(){return new kt(this._enter||this._groups.map(Ic),this._parents)}function Kr(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Kr.prototype={constructor:Kr,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Nf(n){return function(){return n}}function kf(n,t,e,r,i,o){for(var a=0,u,l=t.length,h=o.length;a<h;++a)(u=t[a])?(u.__data__=o[a],r[a]=u):e[a]=new Kr(n,o[a]);for(;a<l;++a)(u=t[a])&&(i[a]=u)}function Mf(n,t,e,r,i,o,a){var u,l,h=new Map,d=t.length,p=o.length,m=new Array(d),w;for(u=0;u<d;++u)(l=t[u])&&(m[u]=w=a.call(l,l.__data__,u,t)+"",h.has(w)?i[u]=l:h.set(w,l));for(u=0;u<p;++u)w=a.call(n,o[u],u,o)+"",(l=h.get(w))?(r[u]=l,l.__data__=o[u],h.delete(w)):e[u]=new Kr(n,o[u]);for(u=0;u<d;++u)(l=t[u])&&h.get(m[u])===l&&(i[u]=l)}function Of(n){return n.__data__}function Lf(n,t){if(!arguments.length)return Array.from(this,Of);var e=t?Mf:kf,r=this._parents,i=this._groups;typeof n!="function"&&(n=Nf(n));for(var o=i.length,a=new Array(o),u=new Array(o),l=new Array(o),h=0;h<o;++h){var d=r[h],p=i[h],m=p.length,w=Ff(n.call(d,d&&d.__data__,h,r)),C=w.length,P=u[h]=new Array(C),b=a[h]=new Array(C),N=l[h]=new Array(m);e(d,p,P,b,N,w,t);for(var M=0,O=0,B,q;M<C;++M)if(B=P[M]){for(M>=O&&(O=M+1);!(q=b[O])&&++O<C;);B._next=q||null}}return a=new kt(a,r),a._enter=u,a._exit=l,a}function Ff(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Bf(){return new kt(this._exit||this._groups.map(Ic),this._parents)}function qf(n,t,e){var r=this.enter(),i=this,o=this.exit();return typeof n=="function"?(r=n(r),r&&(r=r.selection())):r=r.append(n+""),t!=null&&(i=t(i),i&&(i=i.selection())),e==null?o.remove():e(o),r&&i?r.merge(i).order():i}function $f(n){for(var t=n.selection?n.selection():n,e=this._groups,r=t._groups,i=e.length,o=r.length,a=Math.min(i,o),u=new Array(i),l=0;l<a;++l)for(var h=e[l],d=r[l],p=h.length,m=u[l]=new Array(p),w,C=0;C<p;++C)(w=h[C]||d[C])&&(m[C]=w);for(;l<i;++l)u[l]=e[l];return new kt(u,this._parents)}function jf(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var r=n[t],i=r.length-1,o=r[i],a;--i>=0;)(a=r[i])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Uf(n){n||(n=zf);function t(p,m){return p&&m?n(p.__data__,m.__data__):!p-!m}for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a=e[o],u=a.length,l=i[o]=new Array(u),h,d=0;d<u;++d)(h=a[d])&&(l[d]=h);l.sort(t)}return new kt(i,this._parents).order()}function zf(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function Hf(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function Gf(){return Array.from(this)}function Kf(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null}function Qf(){let n=0;for(const t of this)++n;return n}function Wf(){return!this.node()}function Xf(n){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i=t[e],o=0,a=i.length,u;o<a;++o)(u=i[o])&&n.call(u,u.__data__,o,i);return this}function Yf(n){return function(){this.removeAttribute(n)}}function Jf(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Zf(n,t){return function(){this.setAttribute(n,t)}}function td(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function ed(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function nd(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function rd(n,t){var e=fi(n);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((t==null?e.local?Jf:Yf:typeof t=="function"?e.local?nd:ed:e.local?td:Zf)(e,t))}function Ac(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function id(n){return function(){this.style.removeProperty(n)}}function sd(n,t,e){return function(){this.style.setProperty(n,t,e)}}function od(n,t,e){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,e)}}function ad(n,t,e){return arguments.length>1?this.each((t==null?id:typeof t=="function"?od:sd)(n,t,e??"")):rn(this.node(),n)}function rn(n,t){return n.style.getPropertyValue(t)||Ac(n).getComputedStyle(n,null).getPropertyValue(t)}function ud(n){return function(){delete this[n]}}function cd(n,t){return function(){this[n]=t}}function ld(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function hd(n,t){return arguments.length>1?this.each((t==null?ud:typeof t=="function"?ld:cd)(n,t)):this.node()[n]}function Rc(n){return n.trim().split(/^|\s+/)}function Ws(n){return n.classList||new Sc(n)}function Sc(n){this._node=n,this._names=Rc(n.getAttribute("class")||"")}Sc.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Cc(n,t){for(var e=Ws(n),r=-1,i=t.length;++r<i;)e.add(t[r])}function bc(n,t){for(var e=Ws(n),r=-1,i=t.length;++r<i;)e.remove(t[r])}function fd(n){return function(){Cc(this,n)}}function dd(n){return function(){bc(this,n)}}function pd(n,t){return function(){(t.apply(this,arguments)?Cc:bc)(this,n)}}function gd(n,t){var e=Rc(n+"");if(arguments.length<2){for(var r=Ws(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof t=="function"?pd:t?fd:dd)(e,t))}function md(){this.textContent=""}function _d(n){return function(){this.textContent=n}}function yd(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function Ed(n){return arguments.length?this.each(n==null?md:(typeof n=="function"?yd:_d)(n)):this.node().textContent}function vd(){this.innerHTML=""}function wd(n){return function(){this.innerHTML=n}}function Td(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function Id(n){return arguments.length?this.each(n==null?vd:(typeof n=="function"?Td:wd)(n)):this.node().innerHTML}function Ad(){this.nextSibling&&this.parentNode.appendChild(this)}function Rd(){return this.each(Ad)}function Sd(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Cd(){return this.each(Sd)}function bd(n){var t=typeof n=="function"?n:Ec(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function xd(){return null}function Pd(n,t){var e=typeof n=="function"?n:Ec(n),r=t==null?xd:typeof t=="function"?t:Qs(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function Vd(){var n=this.parentNode;n&&n.removeChild(this)}function Dd(){return this.each(Vd)}function Nd(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function kd(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function Md(n){return this.select(n?kd:Nd)}function Od(n){return arguments.length?this.property("__data__",n):this.node().__data__}function Ld(n){return function(t){n.call(this,t,this.__data__)}}function Fd(n){return n.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}function Bd(n){return function(){var t=this.__on;if(t){for(var e=0,r=-1,i=t.length,o;e<i;++e)o=t[e],(!n.type||o.type===n.type)&&o.name===n.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function qd(n,t,e){return function(){var r=this.__on,i,o=Ld(t);if(r){for(var a=0,u=r.length;a<u;++a)if((i=r[a]).type===n.type&&i.name===n.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),i.value=t;return}}this.addEventListener(n.type,o,e),i={type:n.type,name:n.name,value:t,listener:o,options:e},r?r.push(i):this.__on=[i]}}function $d(n,t,e){var r=Fd(n+""),i,o=r.length,a;if(arguments.length<2){var u=this.node().__on;if(u){for(var l=0,h=u.length,d;l<h;++l)for(i=0,d=u[l];i<o;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(u=t?qd:Bd,i=0;i<o;++i)this.each(u(r[i],t,e));return this}function xc(n,t,e){var r=Ac(n),i=r.CustomEvent;typeof i=="function"?i=new i(t,e):(i=r.document.createEvent("Event"),e?(i.initEvent(t,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(t,!1,!1)),n.dispatchEvent(i)}function jd(n,t){return function(){return xc(this,n,t)}}function Ud(n,t){return function(){return xc(this,n,t.apply(this,arguments))}}function zd(n,t){return this.each((typeof t=="function"?Ud:jd)(n,t))}function*Hd(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,o=r.length,a;i<o;++i)(a=r[i])&&(yield a)}var Gd=[null];function kt(n,t){this._groups=n,this._parents=t}function or(){return new kt([[document.documentElement]],Gd)}function Kd(){return this}kt.prototype=or.prototype={constructor:kt,select:yf,selectAll:Tf,selectChild:Sf,selectChildren:Pf,filter:Vf,data:Lf,enter:Df,exit:Bf,join:qf,merge:$f,selection:Kd,order:jf,sort:Uf,call:Hf,nodes:Gf,node:Kf,size:Qf,empty:Wf,each:Xf,attr:rd,style:ad,property:hd,classed:gd,text:Ed,html:Id,raise:Rd,lower:Cd,append:bd,insert:Pd,remove:Dd,clone:Md,datum:Od,on:$d,dispatch:zd,[Symbol.iterator]:Hd};function Qd(n){return new kt([[document.querySelector(n)]],[document.documentElement])}function Xs(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function Pc(n,t){var e=Object.create(n.prototype);for(var r in t)e[r]=t[r];return e}function ar(){}var Qn=.7,Qr=1/Qn,Ye="\\s*([+-]?\\d+)\\s*",Wn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Gt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Wd=/^#([0-9a-f]{3,8})$/,Xd=new RegExp(`^rgb\\(${Ye},${Ye},${Ye}\\)$`),Yd=new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`),Jd=new RegExp(`^rgba\\(${Ye},${Ye},${Ye},${Wn}\\)$`),Zd=new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${Wn}\\)$`),tp=new RegExp(`^hsl\\(${Wn},${Gt},${Gt}\\)$`),ep=new RegExp(`^hsla\\(${Wn},${Gt},${Gt},${Wn}\\)$`),ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Xs(ar,Fe,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Ma,formatHex:Ma,formatHex8:np,formatHsl:rp,formatRgb:Oa,toString:Oa});function Ma(){return this.rgb().formatHex()}function np(){return this.rgb().formatHex8()}function rp(){return Vc(this).formatHsl()}function Oa(){return this.rgb().formatRgb()}function Fe(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=Wd.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?La(t):e===3?new Pt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Sr(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Sr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Xd.exec(n))?new Pt(t[1],t[2],t[3],1):(t=Yd.exec(n))?new Pt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Jd.exec(n))?Sr(t[1],t[2],t[3],t[4]):(t=Zd.exec(n))?Sr(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=tp.exec(n))?qa(t[1],t[2]/100,t[3]/100,1):(t=ep.exec(n))?qa(t[1],t[2]/100,t[3]/100,t[4]):ka.hasOwnProperty(n)?La(ka[n]):n==="transparent"?new Pt(NaN,NaN,NaN,0):null}function La(n){return new Pt(n>>16&255,n>>8&255,n&255,1)}function Sr(n,t,e,r){return r<=0&&(n=t=e=NaN),new Pt(n,t,e,r)}function ip(n){return n instanceof ar||(n=Fe(n)),n?(n=n.rgb(),new Pt(n.r,n.g,n.b,n.opacity)):new Pt}function ds(n,t,e,r){return arguments.length===1?ip(n):new Pt(n,t,e,r??1)}function Pt(n,t,e,r){this.r=+n,this.g=+t,this.b=+e,this.opacity=+r}Xs(Pt,ds,Pc(ar,{brighter(n){return n=n==null?Qr:Math.pow(Qr,n),new Pt(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Qn:Math.pow(Qn,n),new Pt(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Pt(ke(this.r),ke(this.g),ke(this.b),Wr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Fa,formatHex:Fa,formatHex8:sp,formatRgb:Ba,toString:Ba}));function Fa(){return`#${Ve(this.r)}${Ve(this.g)}${Ve(this.b)}`}function sp(){return`#${Ve(this.r)}${Ve(this.g)}${Ve(this.b)}${Ve((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ba(){const n=Wr(this.opacity);return`${n===1?"rgb(":"rgba("}${ke(this.r)}, ${ke(this.g)}, ${ke(this.b)}${n===1?")":`, ${n})`}`}function Wr(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function ke(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Ve(n){return n=ke(n),(n<16?"0":"")+n.toString(16)}function qa(n,t,e,r){return r<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Lt(n,t,e,r)}function Vc(n){if(n instanceof Lt)return new Lt(n.h,n.s,n.l,n.opacity);if(n instanceof ar||(n=Fe(n)),!n)return new Lt;if(n instanceof Lt)return n;n=n.rgb();var t=n.r/255,e=n.g/255,r=n.b/255,i=Math.min(t,e,r),o=Math.max(t,e,r),a=NaN,u=o-i,l=(o+i)/2;return u?(t===o?a=(e-r)/u+(e<r)*6:e===o?a=(r-t)/u+2:a=(t-e)/u+4,u/=l<.5?o+i:2-o-i,a*=60):u=l>0&&l<1?0:a,new Lt(a,u,l,n.opacity)}function op(n,t,e,r){return arguments.length===1?Vc(n):new Lt(n,t,e,r??1)}function Lt(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}Xs(Lt,op,Pc(ar,{brighter(n){return n=n==null?Qr:Math.pow(Qr,n),new Lt(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Qn:Math.pow(Qn,n),new Lt(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*t,i=2*e-r;return new Pt(Yi(n>=240?n-240:n+120,i,r),Yi(n,i,r),Yi(n<120?n+240:n-120,i,r),this.opacity)},clamp(){return new Lt($a(this.h),Cr(this.s),Cr(this.l),Wr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Wr(this.opacity);return`${n===1?"hsl(":"hsla("}${$a(this.h)}, ${Cr(this.s)*100}%, ${Cr(this.l)*100}%${n===1?")":`, ${n})`}`}}));function $a(n){return n=(n||0)%360,n<0?n+360:n}function Cr(n){return Math.max(0,Math.min(1,n||0))}function Yi(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}const Ys=n=>()=>n;function ap(n,t){return function(e){return n+e*t}}function up(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(r){return Math.pow(n+r*t,e)}}function cp(n){return(n=+n)==1?Dc:function(t,e){return e-t?up(t,e,n):Ys(isNaN(t)?e:t)}}function Dc(n,t){var e=t-n;return e?ap(n,e):Ys(isNaN(n)?t:n)}const Xr=(function n(t){var e=cp(t);function r(i,o){var a=e((i=ds(i)).r,(o=ds(o)).r),u=e(i.g,o.g),l=e(i.b,o.b),h=Dc(i.opacity,o.opacity);return function(d){return i.r=a(d),i.g=u(d),i.b=l(d),i.opacity=h(d),i+""}}return r.gamma=n,r})(1);function lp(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,r=t.slice(),i;return function(o){for(i=0;i<e;++i)r[i]=n[i]*(1-o)+t[i]*o;return r}}function hp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fp(n,t){var e=t?t.length:0,r=n?Math.min(e,n.length):0,i=new Array(r),o=new Array(e),a;for(a=0;a<r;++a)i[a]=Js(n[a],t[a]);for(;a<e;++a)o[a]=t[a];return function(u){for(a=0;a<r;++a)o[a]=i[a](u);return o}}function dp(n,t){var e=new Date;return n=+n,t=+t,function(r){return e.setTime(n*(1-r)+t*r),e}}function Ot(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function pp(n,t){var e={},r={},i;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in n?e[i]=Js(n[i],t[i]):r[i]=t[i];return function(o){for(i in e)r[i]=e[i](o);return r}}var ps=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ji=new RegExp(ps.source,"g");function gp(n){return function(){return n}}function mp(n){return function(t){return n(t)+""}}function Nc(n,t){var e=ps.lastIndex=Ji.lastIndex=0,r,i,o,a=-1,u=[],l=[];for(n=n+"",t=t+"";(r=ps.exec(n))&&(i=Ji.exec(t));)(o=i.index)>e&&(o=t.slice(e,o),u[a]?u[a]+=o:u[++a]=o),(r=r[0])===(i=i[0])?u[a]?u[a]+=i:u[++a]=i:(u[++a]=null,l.push({i:a,x:Ot(r,i)})),e=Ji.lastIndex;return e<t.length&&(o=t.slice(e),u[a]?u[a]+=o:u[++a]=o),u.length<2?l[0]?mp(l[0].x):gp(t):(t=l.length,function(h){for(var d=0,p;d<t;++d)u[(p=l[d]).i]=p.x(h);return u.join("")})}function Js(n,t){var e=typeof t,r;return t==null||e==="boolean"?Ys(t):(e==="number"?Ot:e==="string"?(r=Fe(t))?(t=r,Xr):Nc:t instanceof Fe?Xr:t instanceof Date?dp:hp(t)?lp:Array.isArray(t)?fp:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?pp:Ot)(n,t)}function _p(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var ja=180/Math.PI,gs={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function kc(n,t,e,r,i,o){var a,u,l;return(a=Math.sqrt(n*n+t*t))&&(n/=a,t/=a),(l=n*e+t*r)&&(e-=n*l,r-=t*l),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,l/=u),n*r<t*e&&(n=-n,t=-t,l=-l,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,n)*ja,skewX:Math.atan(l)*ja,scaleX:a,scaleY:u}}var br;function yp(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?gs:kc(t.a,t.b,t.c,t.d,t.e,t.f)}function Ep(n){return n==null||(br||(br=document.createElementNS("http://www.w3.org/2000/svg","g")),br.setAttribute("transform",n),!(n=br.transform.baseVal.consolidate()))?gs:(n=n.matrix,kc(n.a,n.b,n.c,n.d,n.e,n.f))}function Mc(n,t,e,r){function i(h){return h.length?h.pop()+" ":""}function o(h,d,p,m,w,C){if(h!==p||d!==m){var P=w.push("translate(",null,t,null,e);C.push({i:P-4,x:Ot(h,p)},{i:P-2,x:Ot(d,m)})}else(p||m)&&w.push("translate("+p+t+m+e)}function a(h,d,p,m){h!==d?(h-d>180?d+=360:d-h>180&&(h+=360),m.push({i:p.push(i(p)+"rotate(",null,r)-2,x:Ot(h,d)})):d&&p.push(i(p)+"rotate("+d+r)}function u(h,d,p,m){h!==d?m.push({i:p.push(i(p)+"skewX(",null,r)-2,x:Ot(h,d)}):d&&p.push(i(p)+"skewX("+d+r)}function l(h,d,p,m,w,C){if(h!==p||d!==m){var P=w.push(i(w)+"scale(",null,",",null,")");C.push({i:P-4,x:Ot(h,p)},{i:P-2,x:Ot(d,m)})}else(p!==1||m!==1)&&w.push(i(w)+"scale("+p+","+m+")")}return function(h,d){var p=[],m=[];return h=n(h),d=n(d),o(h.translateX,h.translateY,d.translateX,d.translateY,p,m),a(h.rotate,d.rotate,p,m),u(h.skewX,d.skewX,p,m),l(h.scaleX,h.scaleY,d.scaleX,d.scaleY,p,m),h=d=null,function(w){for(var C=-1,P=m.length,b;++C<P;)p[(b=m[C]).i]=b.x(w);return p.join("")}}}var vp=Mc(yp,"px, ","px)","deg)"),wp=Mc(Ep,", ",")",")"),sn=0,On=0,kn=0,Oc=1e3,Yr,Ln,Jr=0,Be=0,di=0,Xn=typeof performance=="object"&&performance.now?performance:Date,Lc=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Zs(){return Be||(Lc(Tp),Be=Xn.now()+di)}function Tp(){Be=0}function Zr(){this._call=this._time=this._next=null}Zr.prototype=Fc.prototype={constructor:Zr,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Zs():+e)+(t==null?0:+t),!this._next&&Ln!==this&&(Ln?Ln._next=this:Yr=this,Ln=this),this._call=n,this._time=e,ms()},stop:function(){this._call&&(this._call=null,this._time=1/0,ms())}};function Fc(n,t,e){var r=new Zr;return r.restart(n,t,e),r}function Ip(){Zs(),++sn;for(var n=Yr,t;n;)(t=Be-n._time)>=0&&n._call.call(void 0,t),n=n._next;--sn}function Ua(){Be=(Jr=Xn.now())+di,sn=On=0;try{Ip()}finally{sn=0,Rp(),Be=0}}function Ap(){var n=Xn.now(),t=n-Jr;t>Oc&&(di-=t,Jr=n)}function Rp(){for(var n,t=Yr,e,r=1/0;t;)t._call?(r>t._time&&(r=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:Yr=e);Ln=n,ms(r)}function ms(n){if(!sn){On&&(On=clearTimeout(On));var t=n-Be;t>24?(n<1/0&&(On=setTimeout(Ua,n-Xn.now()-di)),kn&&(kn=clearInterval(kn))):(kn||(Jr=Xn.now(),kn=setInterval(Ap,Oc)),sn=1,Lc(Ua))}}function za(n,t,e){var r=new Zr;return t=t==null?0:+t,r.restart(i=>{r.stop(),n(i+t)},t,e),r}var Sp=yc("start","end","cancel","interrupt"),Cp=[],Bc=0,Ha=1,_s=2,Fr=3,Ga=4,ys=5,Br=6;function pi(n,t,e,r,i,o){var a=n.__transition;if(!a)n.__transition={};else if(e in a)return;bp(n,e,{name:t,index:r,group:i,on:Sp,tween:Cp,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Bc})}function to(n,t){var e=Ft(n,t);if(e.state>Bc)throw new Error("too late; already scheduled");return e}function Xt(n,t){var e=Ft(n,t);if(e.state>Fr)throw new Error("too late; already running");return e}function Ft(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function bp(n,t,e){var r=n.__transition,i;r[t]=e,e.timer=Fc(o,0,e.time);function o(h){e.state=Ha,e.timer.restart(a,e.delay,e.time),e.delay<=h&&a(h-e.delay)}function a(h){var d,p,m,w;if(e.state!==Ha)return l();for(d in r)if(w=r[d],w.name===e.name){if(w.state===Fr)return za(a);w.state===Ga?(w.state=Br,w.timer.stop(),w.on.call("interrupt",n,n.__data__,w.index,w.group),delete r[d]):+d<t&&(w.state=Br,w.timer.stop(),w.on.call("cancel",n,n.__data__,w.index,w.group),delete r[d])}if(za(function(){e.state===Fr&&(e.state=Ga,e.timer.restart(u,e.delay,e.time),u(h))}),e.state=_s,e.on.call("start",n,n.__data__,e.index,e.group),e.state===_s){for(e.state=Fr,i=new Array(m=e.tween.length),d=0,p=-1;d<m;++d)(w=e.tween[d].value.call(n,n.__data__,e.index,e.group))&&(i[++p]=w);i.length=p+1}}function u(h){for(var d=h<e.duration?e.ease.call(null,h/e.duration):(e.timer.restart(l),e.state=ys,1),p=-1,m=i.length;++p<m;)i[p].call(n,d);e.state===ys&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=Br,e.timer.stop(),delete r[t];for(var h in r)return;delete n.__transition}}function xp(n,t){var e=n.__transition,r,i,o=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((r=e[a]).name!==t){o=!1;continue}i=r.state>_s&&r.state<ys,r.state=Br,r.timer.stop(),r.on.call(i?"interrupt":"cancel",n,n.__data__,r.index,r.group),delete e[a]}o&&delete n.__transition}}function Pp(n){return this.each(function(){xp(this,n)})}function Vp(n,t){var e,r;return function(){var i=Xt(this,n),o=i.tween;if(o!==e){r=e=o;for(var a=0,u=r.length;a<u;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function Dp(n,t,e){var r,i;if(typeof e!="function")throw new Error;return function(){var o=Xt(this,n),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:t,value:e},l=0,h=i.length;l<h;++l)if(i[l].name===t){i[l]=u;break}l===h&&i.push(u)}o.tween=i}}function Np(n,t){var e=this._id;if(n+="",arguments.length<2){for(var r=Ft(this.node(),e).tween,i=0,o=r.length,a;i<o;++i)if((a=r[i]).name===n)return a.value;return null}return this.each((t==null?Vp:Dp)(e,n,t))}function eo(n,t,e){var r=n._id;return n.each(function(){var i=Xt(this,r);(i.value||(i.value={}))[t]=e.apply(this,arguments)}),function(i){return Ft(i,r).value[t]}}function qc(n,t){var e;return(typeof t=="number"?Ot:t instanceof Fe?Xr:(e=Fe(t))?(t=e,Xr):Nc)(n,t)}function kp(n){return function(){this.removeAttribute(n)}}function Mp(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Op(n,t,e){var r,i=e+"",o;return function(){var a=this.getAttribute(n);return a===i?null:a===r?o:o=t(r=a,e)}}function Lp(n,t,e){var r,i=e+"",o;return function(){var a=this.getAttributeNS(n.space,n.local);return a===i?null:a===r?o:o=t(r=a,e)}}function Fp(n,t,e){var r,i,o;return function(){var a,u=e(this),l;return u==null?void this.removeAttribute(n):(a=this.getAttribute(n),l=u+"",a===l?null:a===r&&l===i?o:(i=l,o=t(r=a,u)))}}function Bp(n,t,e){var r,i,o;return function(){var a,u=e(this),l;return u==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),l=u+"",a===l?null:a===r&&l===i?o:(i=l,o=t(r=a,u)))}}function qp(n,t){var e=fi(n),r=e==="transform"?wp:qc;return this.attrTween(n,typeof t=="function"?(e.local?Bp:Fp)(e,r,eo(this,"attr."+n,t)):t==null?(e.local?Mp:kp)(e):(e.local?Lp:Op)(e,r,t))}function $p(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function jp(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function Up(n,t){var e,r;function i(){var o=t.apply(this,arguments);return o!==r&&(e=(r=o)&&jp(n,o)),e}return i._value=t,i}function zp(n,t){var e,r;function i(){var o=t.apply(this,arguments);return o!==r&&(e=(r=o)&&$p(n,o)),e}return i._value=t,i}function Hp(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var r=fi(n);return this.tween(e,(r.local?Up:zp)(r,t))}function Gp(n,t){return function(){to(this,n).delay=+t.apply(this,arguments)}}function Kp(n,t){return t=+t,function(){to(this,n).delay=t}}function Qp(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?Gp:Kp)(t,n)):Ft(this.node(),t).delay}function Wp(n,t){return function(){Xt(this,n).duration=+t.apply(this,arguments)}}function Xp(n,t){return t=+t,function(){Xt(this,n).duration=t}}function Yp(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?Wp:Xp)(t,n)):Ft(this.node(),t).duration}function Jp(n,t){if(typeof t!="function")throw new Error;return function(){Xt(this,n).ease=t}}function Zp(n){var t=this._id;return arguments.length?this.each(Jp(t,n)):Ft(this.node(),t).ease}function tg(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Xt(this,n).ease=e}}function eg(n){if(typeof n!="function")throw new Error;return this.each(tg(this._id,n))}function ng(n){typeof n!="function"&&(n=wc(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],a=o.length,u=r[i]=[],l,h=0;h<a;++h)(l=o[h])&&n.call(l,l.__data__,h,o)&&u.push(l);return new ee(r,this._parents,this._name,this._id)}function rg(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,r=t.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var l=t[u],h=e[u],d=l.length,p=a[u]=new Array(d),m,w=0;w<d;++w)(m=l[w]||h[w])&&(p[w]=m);for(;u<r;++u)a[u]=t[u];return new ee(a,this._parents,this._name,this._id)}function ig(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function sg(n,t,e){var r,i,o=ig(t)?to:Xt;return function(){var a=o(this,n),u=a.on;u!==r&&(i=(r=u).copy()).on(t,e),a.on=i}}function og(n,t){var e=this._id;return arguments.length<2?Ft(this.node(),e).on.on(n):this.each(sg(e,n,t))}function ag(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function ug(){return this.on("end.remove",ag(this._id))}function cg(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Qs(n));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u=r[a],l=u.length,h=o[a]=new Array(l),d,p,m=0;m<l;++m)(d=u[m])&&(p=n.call(d,d.__data__,m,u))&&("__data__"in d&&(p.__data__=d.__data__),h[m]=p,pi(h[m],t,e,m,h,Ft(d,e)));return new ee(o,this._parents,t,e)}function lg(n){var t=this._name,e=this._id;typeof n!="function"&&(n=vc(n));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var l=r[u],h=l.length,d,p=0;p<h;++p)if(d=l[p]){for(var m=n.call(d,d.__data__,p,l),w,C=Ft(d,e),P=0,b=m.length;P<b;++P)(w=m[P])&&pi(w,t,e,P,m,C);o.push(m),a.push(d)}return new ee(o,a,t,e)}var hg=or.prototype.constructor;function fg(){return new hg(this._groups,this._parents)}function dg(n,t){var e,r,i;return function(){var o=rn(this,n),a=(this.style.removeProperty(n),rn(this,n));return o===a?null:o===e&&a===r?i:i=t(e=o,r=a)}}function $c(n){return function(){this.style.removeProperty(n)}}function pg(n,t,e){var r,i=e+"",o;return function(){var a=rn(this,n);return a===i?null:a===r?o:o=t(r=a,e)}}function gg(n,t,e){var r,i,o;return function(){var a=rn(this,n),u=e(this),l=u+"";return u==null&&(l=u=(this.style.removeProperty(n),rn(this,n))),a===l?null:a===r&&l===i?o:(i=l,o=t(r=a,u))}}function mg(n,t){var e,r,i,o="style."+t,a="end."+o,u;return function(){var l=Xt(this,n),h=l.on,d=l.value[o]==null?u||(u=$c(t)):void 0;(h!==e||i!==d)&&(r=(e=h).copy()).on(a,i=d),l.on=r}}function _g(n,t,e){var r=(n+="")=="transform"?vp:qc;return t==null?this.styleTween(n,dg(n,r)).on("end.style."+n,$c(n)):typeof t=="function"?this.styleTween(n,gg(n,r,eo(this,"style."+n,t))).each(mg(this._id,n)):this.styleTween(n,pg(n,r,t),e).on("end.style."+n,null)}function yg(n,t,e){return function(r){this.style.setProperty(n,t.call(this,r),e)}}function Eg(n,t,e){var r,i;function o(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&yg(n,a,e)),r}return o._value=t,o}function vg(n,t,e){var r="style."+(n+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,Eg(n,t,e??""))}function wg(n){return function(){this.textContent=n}}function Tg(n){return function(){var t=n(this);this.textContent=t??""}}function Ig(n){return this.tween("text",typeof n=="function"?Tg(eo(this,"text",n)):wg(n==null?"":n+""))}function Ag(n){return function(t){this.textContent=n.call(this,t)}}function Rg(n){var t,e;function r(){var i=n.apply(this,arguments);return i!==e&&(t=(e=i)&&Ag(i)),t}return r._value=n,r}function Sg(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,Rg(n))}function Cg(){for(var n=this._name,t=this._id,e=jc(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],u=a.length,l,h=0;h<u;++h)if(l=a[h]){var d=Ft(l,t);pi(l,n,e,h,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new ee(r,this._parents,n,e)}function bg(){var n,t,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var u={value:a},l={value:function(){--i===0&&o()}};e.each(function(){var h=Xt(this,r),d=h.on;d!==n&&(t=(n=d).copy(),t._.cancel.push(u),t._.interrupt.push(u),t._.end.push(l)),h.on=t}),i===0&&o()})}var xg=0;function ee(n,t,e,r){this._groups=n,this._parents=t,this._name=e,this._id=r}function jc(){return++xg}var Yt=or.prototype;ee.prototype={constructor:ee,select:cg,selectAll:lg,selectChild:Yt.selectChild,selectChildren:Yt.selectChildren,filter:ng,merge:rg,selection:fg,transition:Cg,call:Yt.call,nodes:Yt.nodes,node:Yt.node,size:Yt.size,empty:Yt.empty,each:Yt.each,on:og,attr:qp,attrTween:Hp,style:_g,styleTween:vg,text:Ig,textTween:Sg,remove:ug,tween:Np,delay:Qp,duration:Yp,ease:Zp,easeVarying:eg,end:bg,[Symbol.iterator]:Yt[Symbol.iterator]};function Pg(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Vg={time:null,delay:0,duration:250,ease:Pg};function Dg(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function Ng(n){var t,e;n instanceof ee?(t=n._id,n=n._name):(t=jc(),(e=Vg).time=Zs(),n=n==null?null:n+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],u=a.length,l,h=0;h<u;++h)(l=a[h])&&pi(l,n,t,h,a,e||Dg(l,t));return new ee(r,this._parents,n,t)}or.prototype.interrupt=Pp;or.prototype.transition=Ng;const Es=Math.PI,vs=2*Es,xe=1e-6,kg=vs-xe;function Uc(n){this._+=n[0];for(let t=1,e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function Mg(n){let t=Math.floor(n);if(!(t>=0))throw new Error(`invalid digits: ${n}`);if(t>15)return Uc;const e=10**t;return function(r){this._+=r[0];for(let i=1,o=r.length;i<o;++i)this._+=Math.round(arguments[i]*e)/e+r[i]}}class Og{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Uc:Mg(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,i){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(t,e,r,i,o,a){this._append`C${+t},${+e},${+r},${+i},${this._x1=+o},${this._y1=+a}`}arcTo(t,e,r,i,o){if(t=+t,e=+e,r=+r,i=+i,o=+o,o<0)throw new Error(`negative radius: ${o}`);let a=this._x1,u=this._y1,l=r-t,h=i-e,d=a-t,p=u-e,m=d*d+p*p;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(m>xe)if(!(Math.abs(p*l-h*d)>xe)||!o)this._append`L${this._x1=t},${this._y1=e}`;else{let w=r-a,C=i-u,P=l*l+h*h,b=w*w+C*C,N=Math.sqrt(P),M=Math.sqrt(m),O=o*Math.tan((Es-Math.acos((P+m-b)/(2*N*M)))/2),B=O/M,q=O/N;Math.abs(B-1)>xe&&this._append`L${t+B*d},${e+B*p}`,this._append`A${o},${o},0,0,${+(p*w>d*C)},${this._x1=t+q*l},${this._y1=e+q*h}`}}arc(t,e,r,i,o,a){if(t=+t,e=+e,r=+r,a=!!a,r<0)throw new Error(`negative radius: ${r}`);let u=r*Math.cos(i),l=r*Math.sin(i),h=t+u,d=e+l,p=1^a,m=a?i-o:o-i;this._x1===null?this._append`M${h},${d}`:(Math.abs(this._x1-h)>xe||Math.abs(this._y1-d)>xe)&&this._append`L${h},${d}`,r&&(m<0&&(m=m%vs+vs),m>kg?this._append`A${r},${r},0,1,${p},${t-u},${e-l}A${r},${r},0,1,${p},${this._x1=h},${this._y1=d}`:m>xe&&this._append`A${r},${r},0,${+(m>=Es)},${p},${this._x1=t+r*Math.cos(o)},${this._y1=e+r*Math.sin(o)}`)}rect(t,e,r,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function Lg(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function ti(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function on(n){return n=ti(Math.abs(n)),n?n[1]:NaN}function Fg(n,t){return function(e,r){for(var i=e.length,o=[],a=0,u=n[0],l=0;i>0&&u>0&&(l+u+1>r&&(u=Math.max(1,r-l)),o.push(e.substring(i-=u,i+u)),!((l+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(t)}}function Bg(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var qg=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Yn(n){if(!(t=qg.exec(n)))throw new Error("invalid format: "+n);var t;return new no({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Yn.prototype=no.prototype;function no(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}no.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function $g(n){t:for(var t=n.length,e=1,r=-1,i;e<t;++e)switch(n[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+n[e])break t;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var zc;function jg(n,t){var e=ti(n,t);if(!e)return n+"";var r=e[0],i=e[1],o=i-(zc=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+ti(n,Math.max(0,t+o-1))[0]}function Ka(n,t){var e=ti(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const Qa={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:Lg,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>Ka(n*100,t),r:Ka,s:jg,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Wa(n){return n}var Xa=Array.prototype.map,Ya=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ug(n){var t=n.grouping===void 0||n.thousands===void 0?Wa:Fg(Xa.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",o=n.numerals===void 0?Wa:Bg(Xa.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",u=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function h(p){p=Yn(p);var m=p.fill,w=p.align,C=p.sign,P=p.symbol,b=p.zero,N=p.width,M=p.comma,O=p.precision,B=p.trim,q=p.type;q==="n"?(M=!0,q="g"):Qa[q]||(O===void 0&&(O=12),B=!0,q="g"),(b||m==="0"&&w==="=")&&(b=!0,m="0",w="=");var $=P==="$"?e:P==="#"&&/[boxX]/.test(q)?"0"+q.toLowerCase():"",T=P==="$"?r:/[%p]/.test(q)?a:"",y=Qa[q],v=/[defgprs%]/.test(q);O=O===void 0?6:/[gprs]/.test(q)?Math.max(1,Math.min(21,O)):Math.max(0,Math.min(20,O));function I(E){var A=$,_=T,Z,Ct,Bt;if(q==="c")_=y(E)+_,E="";else{E=+E;var ie=E<0||1/E<0;if(E=isNaN(E)?l:y(Math.abs(E),O),B&&(E=$g(E)),ie&&+E==0&&C!=="+"&&(ie=!1),A=(ie?C==="("?C:u:C==="-"||C==="("?"":C)+A,_=(q==="s"?Ya[8+zc/3]:"")+_+(ie&&C==="("?")":""),v){for(Z=-1,Ct=E.length;++Z<Ct;)if(Bt=E.charCodeAt(Z),48>Bt||Bt>57){_=(Bt===46?i+E.slice(Z+1):E.slice(Z))+_,E=E.slice(0,Z);break}}}M&&!b&&(E=t(E,1/0));var Nt=A.length+E.length+_.length,ct=Nt<N?new Array(N-Nt+1).join(m):"";switch(M&&b&&(E=t(ct+E,ct.length?N-_.length:1/0),ct=""),w){case"<":E=A+E+_+ct;break;case"=":E=A+ct+E+_;break;case"^":E=ct.slice(0,Nt=ct.length>>1)+A+E+_+ct.slice(Nt);break;default:E=ct+A+E+_;break}return o(E)}return I.toString=function(){return p+""},I}function d(p,m){var w=h((p=Yn(p),p.type="f",p)),C=Math.max(-8,Math.min(8,Math.floor(on(m)/3)))*3,P=Math.pow(10,-C),b=Ya[8+C/3];return function(N){return w(P*N)+b}}return{format:h,formatPrefix:d}}var xr,Jn,Hc;zg({thousands:",",grouping:[3],currency:["$",""]});function zg(n){return xr=Ug(n),Jn=xr.format,Hc=xr.formatPrefix,xr}function Hg(n){return Math.max(0,-on(Math.abs(n)))}function Gg(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(on(t)/3)))*3-on(Math.abs(n)))}function Kg(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,on(t)-on(n))+1}function Gc(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function Qg(n){return function(){return n}}function Wg(n){return+n}var Ja=[0,1];function Xe(n){return n}function ws(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:Qg(isNaN(t)?NaN:.5)}function Xg(n,t){var e;return n>t&&(e=n,n=t,t=e),function(r){return Math.max(n,Math.min(t,r))}}function Yg(n,t,e){var r=n[0],i=n[1],o=t[0],a=t[1];return i<r?(r=ws(i,r),o=e(a,o)):(r=ws(r,i),o=e(o,a)),function(u){return o(r(u))}}function Jg(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),o=new Array(r),a=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=ws(n[a],n[a+1]),o[a]=e(t[a],t[a+1]);return function(u){var l=Zh(n,u,1,r)-1;return o[l](i[l](u))}}function Kc(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function Qc(){var n=Ja,t=Ja,e=Js,r,i,o,a=Xe,u,l,h;function d(){var m=Math.min(n.length,t.length);return a!==Xe&&(a=Xg(n[0],n[m-1])),u=m>2?Jg:Yg,l=h=null,p}function p(m){return m==null||isNaN(m=+m)?o:(l||(l=u(n.map(r),t,e)))(r(a(m)))}return p.invert=function(m){return a(i((h||(h=u(t,n.map(r),Ot)))(m)))},p.domain=function(m){return arguments.length?(n=Array.from(m,Wg),d()):n.slice()},p.range=function(m){return arguments.length?(t=Array.from(m),d()):t.slice()},p.rangeRound=function(m){return t=Array.from(m),e=_p,d()},p.clamp=function(m){return arguments.length?(a=m?!0:Xe,d()):a!==Xe},p.interpolate=function(m){return arguments.length?(e=m,d()):e},p.unknown=function(m){return arguments.length?(o=m,p):o},function(m,w){return r=m,i=w,d()}}function Zg(){return Qc()(Xe,Xe)}function tm(n,t,e,r){var i=rf(n,t,e),o;switch(r=Yn(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(o=Gg(i,a))&&(r.precision=o),Hc(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=Kg(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=Hg(i))&&(r.precision=o-(r.type==="%")*2);break}}return Jn(r)}function em(n){var t=n.domain;return n.ticks=function(e){var r=t();return cs(r[0],r[r.length-1],e??10)},n.tickFormat=function(e,r){var i=t();return tm(i[0],i[i.length-1],e??10,r)},n.nice=function(e){e==null&&(e=10);var r=t(),i=0,o=r.length-1,a=r[i],u=r[o],l,h,d=10;for(u<a&&(h=a,a=u,u=h,h=i,i=o,o=h);d-- >0;){if(h=ls(a,u,e),h===l)return r[i]=a,r[o]=u,t(r);if(h>0)a=Math.floor(a/h)*h,u=Math.ceil(u/h)*h;else if(h<0)a=Math.ceil(a*h)/h,u=Math.floor(u*h)/h;else break;l=h}return n},n}function Ts(){var n=Zg();return n.copy=function(){return Kc(n,Ts())},Gc.apply(n,arguments),em(n)}function nm(n,t){n=n.slice();var e=0,r=n.length-1,i=n[e],o=n[r],a;return o<i&&(a=e,e=r,r=a,a=i,i=o,o=a),n[e]=t.floor(i),n[r]=t.ceil(o),n}function Za(n){return Math.log(n)}function tu(n){return Math.exp(n)}function rm(n){return-Math.log(-n)}function im(n){return-Math.exp(-n)}function sm(n){return isFinite(n)?+("1e"+n):n<0?0:n}function om(n){return n===10?sm:n===Math.E?Math.exp:t=>Math.pow(n,t)}function am(n){return n===Math.E?Math.log:n===10&&Math.log10||n===2&&Math.log2||(n=Math.log(n),t=>Math.log(t)/n)}function eu(n){return(t,e)=>-n(-t,e)}function um(n){const t=n(Za,tu),e=t.domain;let r=10,i,o;function a(){return i=am(r),o=om(r),e()[0]<0?(i=eu(i),o=eu(o),n(rm,im)):n(Za,tu),t}return t.base=function(u){return arguments.length?(r=+u,a()):r},t.domain=function(u){return arguments.length?(e(u),a()):e()},t.ticks=u=>{const l=e();let h=l[0],d=l[l.length-1];const p=d<h;p&&([h,d]=[d,h]);let m=i(h),w=i(d),C,P;const b=u==null?10:+u;let N=[];if(!(r%1)&&w-m<b){if(m=Math.floor(m),w=Math.ceil(w),h>0){for(;m<=w;++m)for(C=1;C<r;++C)if(P=m<0?C/o(-m):C*o(m),!(P<h)){if(P>d)break;N.push(P)}}else for(;m<=w;++m)for(C=r-1;C>=1;--C)if(P=m>0?C/o(-m):C*o(m),!(P<h)){if(P>d)break;N.push(P)}N.length*2<b&&(N=cs(h,d,b))}else N=cs(m,w,Math.min(w-m,b)).map(o);return p?N.reverse():N},t.tickFormat=(u,l)=>{if(u==null&&(u=10),l==null&&(l=r===10?"s":","),typeof l!="function"&&(!(r%1)&&(l=Yn(l)).precision==null&&(l.trim=!0),l=Jn(l)),u===1/0)return l;const h=Math.max(1,r*u/t.ticks().length);return d=>{let p=d/o(Math.round(i(d)));return p*r<r-.5&&(p*=r),p<=h?l(d):""}},t.nice=()=>e(nm(e(),{floor:u=>o(Math.floor(i(u))),ceil:u=>o(Math.ceil(i(u)))})),t}function Wc(){const n=um(Qc()).domain([1,10]);return n.copy=()=>Kc(n,Wc()).base(n.base()),Gc.apply(n,arguments),n}function pt(n){return function(){return n}}function Xc(n){let t=3;return n.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const r=Math.floor(e);if(!(r>=0))throw new RangeError(`invalid digits: ${e}`);t=r}return n},()=>new Og(t)}function Yc(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Jc(n){this._context=n}Jc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;default:this._context.lineTo(n,t);break}}};function Zc(n){return new Jc(n)}function tl(n){return n[0]}function el(n){return n[1]}function ro(n,t){var e=pt(!0),r=null,i=Zc,o=null,a=Xc(u);n=typeof n=="function"?n:n===void 0?tl:pt(n),t=typeof t=="function"?t:t===void 0?el:pt(t);function u(l){var h,d=(l=Yc(l)).length,p,m=!1,w;for(r==null&&(o=i(w=a())),h=0;h<=d;++h)!(h<d&&e(p=l[h],h,l))===m&&((m=!m)?o.lineStart():o.lineEnd()),m&&o.point(+n(p,h,l),+t(p,h,l));if(w)return o=null,w+""||null}return u.x=function(l){return arguments.length?(n=typeof l=="function"?l:pt(+l),u):n},u.y=function(l){return arguments.length?(t=typeof l=="function"?l:pt(+l),u):t},u.defined=function(l){return arguments.length?(e=typeof l=="function"?l:pt(!!l),u):e},u.curve=function(l){return arguments.length?(i=l,r!=null&&(o=i(r)),u):i},u.context=function(l){return arguments.length?(l==null?r=o=null:o=i(r=l),u):r},u}function cm(n,t,e){var r=null,i=pt(!0),o=null,a=Zc,u=null,l=Xc(h);n=typeof n=="function"?n:n===void 0?tl:pt(+n),t=typeof t=="function"?t:pt(t===void 0?0:+t),e=typeof e=="function"?e:e===void 0?el:pt(+e);function h(p){var m,w,C,P=(p=Yc(p)).length,b,N=!1,M,O=new Array(P),B=new Array(P);for(o==null&&(u=a(M=l())),m=0;m<=P;++m){if(!(m<P&&i(b=p[m],m,p))===N)if(N=!N)w=m,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),C=m-1;C>=w;--C)u.point(O[C],B[C]);u.lineEnd(),u.areaEnd()}N&&(O[m]=+n(b,m,p),B[m]=+t(b,m,p),u.point(r?+r(b,m,p):O[m],e?+e(b,m,p):B[m]))}if(M)return u=null,M+""||null}function d(){return ro().defined(i).curve(a).context(o)}return h.x=function(p){return arguments.length?(n=typeof p=="function"?p:pt(+p),r=null,h):n},h.x0=function(p){return arguments.length?(n=typeof p=="function"?p:pt(+p),h):n},h.x1=function(p){return arguments.length?(r=p==null?null:typeof p=="function"?p:pt(+p),h):r},h.y=function(p){return arguments.length?(t=typeof p=="function"?p:pt(+p),e=null,h):t},h.y0=function(p){return arguments.length?(t=typeof p=="function"?p:pt(+p),h):t},h.y1=function(p){return arguments.length?(e=p==null?null:typeof p=="function"?p:pt(+p),h):e},h.lineX0=h.lineY0=function(){return d().x(n).y(t)},h.lineY1=function(){return d().x(n).y(e)},h.lineX1=function(){return d().x(r).y(t)},h.defined=function(p){return arguments.length?(i=typeof p=="function"?p:pt(!!p),h):i},h.curve=function(p){return arguments.length?(a=p,o!=null&&(u=a(o)),h):a},h.context=function(p){return arguments.length?(p==null?o=u=null:u=a(o=p),h):o},h}function Fn(n,t,e){this.k=n,this.x=t,this.y=e}Fn.prototype={constructor:Fn,scale:function(n){return n===1?this:new Fn(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new Fn(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Fn.prototype;const He={top:20,right:70,bottom:60,left:70},nu=10;function lm(n,t){if(!n||n.length<2)return[];const e=[];e.push({dj:n[0].dj,q:t}),e.push({dj:n[n.length-1].dj,q:t});for(let r=n.length-1;r>=0;r--)e.push({dj:n[r].dj,q:n[r].q});return e}function hm(n,t){if(!n||!t||n.length<2||t.length<2)return[];const e=[];n.forEach(r=>e.push({dj:r.dj,q:r.q}));for(let r=t.length-1;r>=0;r--)e.push({dj:t[r].dj,q:t[r].q});return e}function fm(n,t){if(!n||n.length<2)return[];const e=[];e.push({dj:n[0].dj,q:t}),e.push({dj:n[n.length-1].dj,q:t});for(let r=n.length-1;r>=0;r--)e.push({dj:n[r].dj,q:n[r].q});return e}function ru(n,t,e,r,i){return n&&n.riverKey===t&&n.panelKey===e&&n.zone===r&&n.index===i}function iu(n,t,e,r,i,o,a,u){if(!t)return;const l=n.append("g").attr("class","control-points"),h=["greenYellow","yellowRed"];h.forEach(d=>{const p=t[d];p&&l.selectAll("circle.point-"+d).data(p.map((m,w)=>({...m,index:w,zoneKey:d}))).enter().append("circle").attr("class","point-"+d).attr("cx",m=>e(m.dj)).attr("cy",m=>r(m.q)).attr("r",m=>ru(a,i,o,d,m.index)?6:4).attr("fill",d==="greenYellow"?"#2563eb":"#111827").attr("stroke",m=>ru(a,i,o,d,m.index)?"#f97316":"#ffffff").attr("stroke-width",2).style("cursor","pointer").on("click",(m,w)=>{const C=Le[i],P=o==="djgc"?C.djgcZones:C.djdcZones,b=[];h.forEach(O=>{(P[O]||[]).forEach((q,$)=>{q.dj===w.dj&&q.q===w.q&&b.push({zoneKey:O,index:$})})});let N;if(b.length===0)N={zoneKey:w.zoneKey,index:w.index};else if(b.length===1)N=b[0];else if(a&&a.riverKey===i&&a.panelKey===o){const O=b.findIndex(B=>B.zoneKey===a.zone&&B.index===a.index);O!==-1?N=b[(O+1)%b.length]:N=b[0]}else N=b[0];const M={riverKey:i,panelKey:o,zone:N.zoneKey,index:N.index};u&&u(M)})})}function su(n,t,e,r,i,o,a,u,l,h,d,p="left",m=null){n.append("rect").attr("x",0).attr("y",0).attr("width",i).attr("height",o).attr("fill","#ffffff").attr("stroke","#000");const w=n.append("g");m&&w.attr("clip-path",`url(#${m})`);const C=w.append("g").attr("class","grid-y-minor");C.call(Xi(r).tickValues(l).tickSize(-i).tickFormat("")),C.selectAll("line").attr("stroke","#e5e7eb"),C.select(".domain").remove();const P=w.append("g").attr("class","grid-y-major");if(P.call(Xi(r).tickValues(u).tickSize(-i).tickFormat("")),P.selectAll("line").attr("stroke","#d1d5db").attr("stroke-width",1),P.select(".domain").remove(),t){const B=ro().x(y=>e(y.dj)).y(y=>r(y.q)),q=lm(t.greenYellow,r.domain()[0]),$=hm(t.greenYellow,t.yellowRed),T=fm(t.yellowRed,r.domain()[1]);q.length>0&&w.append("path").attr("d",B(q)+"Z").attr("fill","rgba(29,211,29,0.53)"),$.length>0&&w.append("path").attr("d",B($)+"Z").attr("fill","rgba(246,240,26,0.53)"),T.length>0&&w.append("path").attr("d",B(T)+"Z").attr("fill","rgba(255,0,0,0.53)")}const b=w.append("g").attr("class","grid-x").attr("transform",`translate(0,${o})`);b.call(Va(e).tickValues(a||e.ticks(6)).tickSize(-o).tickFormat("")),b.selectAll("line").attr("stroke","#e5e7eb"),b.select(".domain").remove();const N=Va(e).tickValues(a||[]).tickFormat(Jn("~g"));n.append("g").attr("transform",`translate(0,${o})`).call(N);let M;p==="right"?M=hf(r):M=Xi(r),M.tickValues(u).tickFormat(Jn("~g"));const O=n.append("g").call(M);return p==="right"&&O.attr("transform",`translate(${i}, 0)`),isNaN(h)||w.append("line").attr("x1",0).attr("x2",i).attr("y1",r(h)).attr("y2",r(h)).attr("stroke","#000").attr("stroke-dasharray","6,4"),w}function dm(n,t,e,r,i,o,a,u){const l=Qd("#"+n);if(l.empty())return;const{qMin:h,qMax:d,djgcMax:p,djdcMax:m,qBank:w}=t;let C=[];Array.isArray(e)?C=e:e&&typeof e=="object"&&(C=e.points||[],e.envelopes),C=C.filter(Y=>typeof Y.q=="number"&&Y.q>0&&!isNaN(Y.q)&&typeof Y.djgc=="number"&&!isNaN(Y.djgc));let P=parseFloat(l.attr("width")),b=parseFloat(l.attr("height"));if(isNaN(P)||isNaN(b)){const Y=l.attr("viewBox");if(Y){const yt=Y.split(" ");P=parseFloat(yt[2]),b=parseFloat(yt[3])}else P=900,b=450}const N=(P-He.left-He.right-nu)/2,M=b-He.top-He.bottom;l.selectAll("*").remove();const O="clip-"+n;l.append("defs").append("clipPath").attr("id",O).append("rect").attr("width",N).attr("height",M);const B=l.append("g").attr("transform",`translate(${He.left},${He.top})`),q=h>0?h:.1,$=Wc().domain([q,d]).range([M,0]),T=$.ticks(30).filter(Y=>{if(Y<q||Y>d)return!1;const yt=Math.log10(Y),Mt=Math.pow(10,Math.floor(yt)),bt=Math.round(Y/Mt);return[1,2,5].includes(bt)}),y=$.ticks(30).filter(Y=>Y>=q&&Y<=d),v=!0,I=B.append("g").attr("transform","translate(0,0)"),E=Ts().domain([0,p]).range([0,N]),A=su(I,u.djgcZones,E,$,N,M,u.djgcTicks,T,y,w,v,"left",O),_=B.append("g").attr("transform",`translate(${N+nu},0)`),Z=Ts().domain([0,m]).range([0,N]),Ct=su(_,u.djdcZones,Z,$,N,M,u.djdcTicks,T,y,w,v,"right",O),Bt=e||{},ie=Bt.historical||[],Nt=Bt.latest||null,ct=Bt.prediction||[],dr=(Y,yt)=>{if(!Y)return;const Mt=Y.phase;let bt=null,qt=null;Mt==="DJGC"?(bt=A,qt=E):(bt=Ct,qt=Z),bt&&(yt==="hist"?bt.append("circle").attr("cx",qt(Y.dj)).attr("cy",$(Y.q)).attr("r",2.5).attr("fill","black").attr("opacity",.6):yt==="latest"&&bt.append("circle").attr("cx",qt(Y.dj)).attr("cy",$(Y.q)).attr("r",5).attr("fill","white").attr("stroke","black").attr("stroke-width",2))};if(ie.forEach(Y=>dr(Y,"hist")),Nt&&dr(Nt,"latest"),ct.length>0){const Y=ct[0].phase;let yt=null,Mt=null;if(Y==="DJGC"?(yt=A,Mt=E):(yt=Ct,Mt=Z),yt){const bt=cm().x(Vt=>Mt(Vt.dj)).y0(Vt=>$(Vt.q25)).y1(Vt=>$(Vt.q75));yt.append("path").datum(ct).attr("fill","#3b82f6").attr("fill-opacity",.3).attr("d",bt);const qt=ro().x(Vt=>Mt(Vt.dj)).y(Vt=>$(Vt.q));yt.append("path").datum(ct).attr("fill","none").attr("stroke","#2563eb").attr("stroke-width",2).attr("d",qt)}}r&&(iu(A,u.djgcZones,E,$,a,"djgc",i,o),iu(Ct,u.djdcZones,Z,$,a,"djdc",i,o)),I.append("text").attr("x",N/2).attr("y",M+45).attr("text-anchor","middle").attr("font-size",12).text("DJGC (°C·d)"),_.append("text").attr("x",N/2).attr("y",M+45).attr("text-anchor","middle").attr("font-size",12).text("DJDC -5 °C (°C·d)"),I.append("text").attr("transform","rotate(-90)").attr("x",-M/2).attr("y",-50).attr("text-anchor","middle").attr("font-size",12).text("Q (m³/s)")}function De(n,t,e,r){const i=document.getElementById("riverSelect").value,o=Le[i],a={qMin:parseFloat(document.getElementById("qMin").value)||o.qMin,qMax:parseFloat(document.getElementById("qMax").value)||o.qMax,djgcMax:parseFloat(document.getElementById("djgcMax").value)||o.djgcMax,djdcMax:parseFloat(document.getElementById("djdcMax").value)||o.djdcMax,qBank:parseFloat(document.getElementById("qBankfull").value)||o.qBankfull};dm("diagram",a,r,t,n,e,i,o)}const pm=()=>{};var ou={};/**
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
 */const nl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},gm=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],u=n[e++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,h=l?n[i+2]:0,d=o>>2,p=(o&3)<<4|u>>4;let m=(u&15)<<2|h>>6,w=h&63;l||(w=64,a||(m=64)),r.push(e[d],e[p],e[m],e[w])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(nl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):gm(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const h=i<n.length?e[n.charAt(i)]:64;++i;const p=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||h==null||p==null)throw new mm;const m=o<<2|u>>4;if(r.push(m),h!==64){const w=u<<4&240|h>>2;if(r.push(w),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _m=function(n){const t=nl(n);return rl.encodeByteArray(t,!0)},ei=function(n){return _m(n).replace(/\./g,"")},ym=function(n){try{return rl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Em(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vm=()=>Em().__FIREBASE_DEFAULTS__,wm=()=>{if(typeof process>"u"||typeof ou>"u")return;const n=ou.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ym(n[1]);return t&&JSON.parse(t)},io=()=>{try{return pm()||vm()||wm()||Tm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Im=n=>{var t,e;return(e=(t=io())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Am=n=>{const t=Im(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},il=()=>{var n;return(n=io())==null?void 0:n.config};/**
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
 */class Rm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function so(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Cm(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ei(JSON.stringify(e)),ei(JSON.stringify(a)),""].join(".")}const Un={};function bm(){const n={prod:[],emulator:[]};for(const t of Object.keys(Un))Un[t]?n.emulator.push(t):n.prod.push(t);return n}function xm(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let au=!1;function Pm(n,t){if(typeof window>"u"||typeof document>"u"||!so(window.location.host)||Un[n]===t||Un[n]||au)return;Un[n]=t;function e(m){return`__firebase__banner__${m}`}const r="__firebase__banner",o=bm().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function u(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{au=!0,a()},m}function d(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=xm(r),w=e("text"),C=document.getElementById(w)||document.createElement("span"),P=e("learnmore"),b=document.getElementById(P)||document.createElement("a"),N=e("preprendIcon"),M=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const O=m.element;u(O),d(b,P);const B=h();l(M,N),O.append(M,C,b,B),document.body.appendChild(O)}o?(C.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Vm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dm(){var t;const n=(t=io())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nm(){return!Dm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function km(){try{return typeof indexedDB=="object"}catch{return!1}}function Mm(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Om="FirebaseError";class pn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Om,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sl.prototype.create)}}class sl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Lm(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new pn(i,u,r)}}function Lm(n,t){return n.replace(Fm,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Fm=/\{\$([^}]+)}/g;function ni(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(uu(o)&&uu(a)){if(!ni(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function uu(n){return n!==null&&typeof n=="object"}/**
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
 */function ol(n){return n&&n._delegate?n._delegate:n}class Zn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Pe="[DEFAULT]";/**
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
 */class Bm{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Rm;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($m(t))try{this.getOrInitializeService({instanceIdentifier:Pe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Pe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pe){return this.instances.has(t)}getOptions(t=Pe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qm(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Pe){return this.component?this.component.multipleInstances?t:Pe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qm(n){return n===Pe?void 0:n}function $m(n){return n.instantiationMode==="EAGER"}/**
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
 */class jm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Bm(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Um={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},zm=K.INFO,Hm={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Gm=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Hm[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class al{constructor(t){this.name=t,this._logLevel=zm,this._logHandler=Gm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Um[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Km=(n,t)=>t.some(e=>n instanceof e);let cu,lu;function Qm(){return cu||(cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wm(){return lu||(lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ul=new WeakMap,Is=new WeakMap,cl=new WeakMap,Zi=new WeakMap,oo=new WeakMap;function Xm(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(de(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ul.set(e,n)}).catch(()=>{}),oo.set(t,n),t}function Ym(n){if(Is.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Is.set(n,t)}let As={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Is.get(n);if(t==="objectStoreNames")return n.objectStoreNames||cl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return de(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jm(n){As=n(As)}function Zm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ts(this),t,...e);return cl.set(r,t.sort?t.sort():[t]),de(r)}:Wm().includes(n)?function(...t){return n.apply(ts(this),t),de(ul.get(this))}:function(...t){return de(n.apply(ts(this),t))}}function t_(n){return typeof n=="function"?Zm(n):(n instanceof IDBTransaction&&Ym(n),Km(n,Qm())?new Proxy(n,As):n)}function de(n){if(n instanceof IDBRequest)return Xm(n);if(Zi.has(n))return Zi.get(n);const t=t_(n);return t!==n&&(Zi.set(n,t),oo.set(t,n)),t}const ts=n=>oo.get(n);function e_(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),u=de(a);return r&&a.addEventListener("upgradeneeded",l=>{r(de(a.result),l.oldVersion,l.newVersion,de(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),u.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const n_=["get","getKey","getAll","getAllKeys","count"],r_=["put","add","delete","clear"],es=new Map;function hu(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(es.get(t))return es.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=r_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||n_.includes(e)))return;const o=async function(a,...u){const l=this.transaction(a,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(u.shift())),(await Promise.all([h[e](...u),i&&l.done]))[0]};return es.set(t,o),o}Jm(n=>({...n,get:(t,e,r)=>hu(t,e)||n.get(t,e,r),has:(t,e)=>!!hu(t,e)||n.has(t,e)}));/**
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
 */class i_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(s_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function s_(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rs="@firebase/app",fu="0.14.6";/**
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
 */const ne=new al("@firebase/app"),o_="@firebase/app-compat",a_="@firebase/analytics-compat",u_="@firebase/analytics",c_="@firebase/app-check-compat",l_="@firebase/app-check",h_="@firebase/auth",f_="@firebase/auth-compat",d_="@firebase/database",p_="@firebase/data-connect",g_="@firebase/database-compat",m_="@firebase/functions",__="@firebase/functions-compat",y_="@firebase/installations",E_="@firebase/installations-compat",v_="@firebase/messaging",w_="@firebase/messaging-compat",T_="@firebase/performance",I_="@firebase/performance-compat",A_="@firebase/remote-config",R_="@firebase/remote-config-compat",S_="@firebase/storage",C_="@firebase/storage-compat",b_="@firebase/firestore",x_="@firebase/ai",P_="@firebase/firestore-compat",V_="firebase",D_="12.6.0";/**
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
 */const Ss="[DEFAULT]",N_={[Rs]:"fire-core",[o_]:"fire-core-compat",[u_]:"fire-analytics",[a_]:"fire-analytics-compat",[l_]:"fire-app-check",[c_]:"fire-app-check-compat",[h_]:"fire-auth",[f_]:"fire-auth-compat",[d_]:"fire-rtdb",[p_]:"fire-data-connect",[g_]:"fire-rtdb-compat",[m_]:"fire-fn",[__]:"fire-fn-compat",[y_]:"fire-iid",[E_]:"fire-iid-compat",[v_]:"fire-fcm",[w_]:"fire-fcm-compat",[T_]:"fire-perf",[I_]:"fire-perf-compat",[A_]:"fire-rc",[R_]:"fire-rc-compat",[S_]:"fire-gcs",[C_]:"fire-gcs-compat",[b_]:"fire-fst",[P_]:"fire-fst-compat",[x_]:"fire-vertex","fire-js":"fire-js",[V_]:"fire-js-all"};/**
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
 */const ri=new Map,k_=new Map,Cs=new Map;function du(n,t){try{n.container.addComponent(t)}catch(e){ne.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ii(n){const t=n.name;if(Cs.has(t))return ne.debug(`There were multiple attempts to register component ${t}.`),!1;Cs.set(t,n);for(const e of ri.values())du(e,n);for(const e of k_.values())du(e,n);return!0}function M_(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function O_(n){return n==null?!1:n.settings!==void 0}/**
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
 */const L_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pe=new sl("app","Firebase",L_);/**
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
 */class F_{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
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
 */const B_=D_;function ll(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Ss,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw pe.create("bad-app-name",{appName:String(i)});if(e||(e=il()),!e)throw pe.create("no-options");const o=ri.get(i);if(o){if(ni(e,o.options)&&ni(r,o.config))return o;throw pe.create("duplicate-app",{appName:i})}const a=new jm(i);for(const l of Cs.values())a.addComponent(l);const u=new F_(e,r,a);return ri.set(i,u),u}function q_(n=Ss){const t=ri.get(n);if(!t&&n===Ss&&il())return ll();if(!t)throw pe.create("no-app",{appName:n});return t}function Je(n,t,e){let r=N_[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ne.warn(a.join(" "));return}ii(new Zn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const $_="firebase-heartbeat-database",j_=1,tr="firebase-heartbeat-store";let ns=null;function hl(){return ns||(ns=e_($_,j_,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(tr)}catch(e){console.warn(e)}}}}).catch(n=>{throw pe.create("idb-open",{originalErrorMessage:n.message})})),ns}async function U_(n){try{const e=(await hl()).transaction(tr),r=await e.objectStore(tr).get(fl(n));return await e.done,r}catch(t){if(t instanceof pn)ne.warn(t.message);else{const e=pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ne.warn(e.message)}}}async function pu(n,t){try{const r=(await hl()).transaction(tr,"readwrite");await r.objectStore(tr).put(t,fl(n)),await r.done}catch(e){if(e instanceof pn)ne.warn(e.message);else{const r=pe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ne.warn(r.message)}}}function fl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const z_=1024,H_=30;class G_{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Q_(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=gu();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>H_){const a=W_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ne.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gu(),{heartbeatsToSend:r,unsentEntries:i}=K_(this._heartbeatsCache.heartbeats),o=ei(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ne.warn(e),""}}}function gu(){return new Date().toISOString().substring(0,10)}function K_(n,t=z_){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),mu(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),mu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Q_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return km()?Mm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await U_(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return pu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return pu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function mu(n){return ei(JSON.stringify({version:2,heartbeats:n})).length}function W_(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function X_(n){ii(new Zn("platform-logger",t=>new i_(t),"PRIVATE")),ii(new Zn("heartbeat",t=>new G_(t),"PRIVATE")),Je(Rs,fu,n),Je(Rs,fu,"esm2020"),Je("fire-js","")}X_("");var Y_="firebase",J_="12.6.0";/**
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
 */Je(Y_,J_,"app");var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ge,dl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,y){function v(){}v.prototype=y.prototype,T.F=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.D=function(I,E,A){for(var _=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)_[Z-2]=arguments[Z];return y.prototype[E].apply(I,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,v){v||(v=0);const I=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)I[E]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(E=0;E<16;++E)I[E]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],E=T.g[2];let A=T.g[3],_;_=y+(A^v&(E^A))+I[0]+3614090360&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(E^y&(v^E))+I[1]+3905402710&4294967295,A=y+(_<<12&4294967295|_>>>20),_=E+(v^A&(y^v))+I[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=v+(y^E&(A^y))+I[3]+3250441966&4294967295,v=E+(_<<22&4294967295|_>>>10),_=y+(A^v&(E^A))+I[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(E^y&(v^E))+I[5]+1200080426&4294967295,A=y+(_<<12&4294967295|_>>>20),_=E+(v^A&(y^v))+I[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=v+(y^E&(A^y))+I[7]+4249261313&4294967295,v=E+(_<<22&4294967295|_>>>10),_=y+(A^v&(E^A))+I[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(E^y&(v^E))+I[9]+2336552879&4294967295,A=y+(_<<12&4294967295|_>>>20),_=E+(v^A&(y^v))+I[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=v+(y^E&(A^y))+I[11]+2304563134&4294967295,v=E+(_<<22&4294967295|_>>>10),_=y+(A^v&(E^A))+I[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(E^y&(v^E))+I[13]+4254626195&4294967295,A=y+(_<<12&4294967295|_>>>20),_=E+(v^A&(y^v))+I[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=v+(y^E&(A^y))+I[15]+1236535329&4294967295,v=E+(_<<22&4294967295|_>>>10),_=y+(E^A&(v^E))+I[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^E&(y^v))+I[6]+3225465664&4294967295,A=y+(_<<9&4294967295|_>>>23),_=E+(y^v&(A^y))+I[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(E^A))+I[0]+3921069994&4294967295,v=E+(_<<20&4294967295|_>>>12),_=y+(E^A&(v^E))+I[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^E&(y^v))+I[10]+38016083&4294967295,A=y+(_<<9&4294967295|_>>>23),_=E+(y^v&(A^y))+I[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(E^A))+I[4]+3889429448&4294967295,v=E+(_<<20&4294967295|_>>>12),_=y+(E^A&(v^E))+I[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^E&(y^v))+I[14]+3275163606&4294967295,A=y+(_<<9&4294967295|_>>>23),_=E+(y^v&(A^y))+I[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(E^A))+I[8]+1163531501&4294967295,v=E+(_<<20&4294967295|_>>>12),_=y+(E^A&(v^E))+I[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^E&(y^v))+I[2]+4243563512&4294967295,A=y+(_<<9&4294967295|_>>>23),_=E+(y^v&(A^y))+I[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(E^A))+I[12]+2368359562&4294967295,v=E+(_<<20&4294967295|_>>>12),_=y+(v^E^A)+I[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^E)+I[8]+2272392833&4294967295,A=y+(_<<11&4294967295|_>>>21),_=E+(A^y^v)+I[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=v+(E^A^y)+I[14]+4259657740&4294967295,v=E+(_<<23&4294967295|_>>>9),_=y+(v^E^A)+I[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^E)+I[4]+1272893353&4294967295,A=y+(_<<11&4294967295|_>>>21),_=E+(A^y^v)+I[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=v+(E^A^y)+I[10]+3200236656&4294967295,v=E+(_<<23&4294967295|_>>>9),_=y+(v^E^A)+I[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^E)+I[0]+3936430074&4294967295,A=y+(_<<11&4294967295|_>>>21),_=E+(A^y^v)+I[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=v+(E^A^y)+I[6]+76029189&4294967295,v=E+(_<<23&4294967295|_>>>9),_=y+(v^E^A)+I[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^E)+I[12]+3873151461&4294967295,A=y+(_<<11&4294967295|_>>>21),_=E+(A^y^v)+I[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=v+(E^A^y)+I[2]+3299628645&4294967295,v=E+(_<<23&4294967295|_>>>9),_=y+(E^(v|~A))+I[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~E))+I[7]+1126891415&4294967295,A=y+(_<<10&4294967295|_>>>22),_=E+(y^(A|~v))+I[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=v+(A^(E|~y))+I[5]+4237533241&4294967295,v=E+(_<<21&4294967295|_>>>11),_=y+(E^(v|~A))+I[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~E))+I[3]+2399980690&4294967295,A=y+(_<<10&4294967295|_>>>22),_=E+(y^(A|~v))+I[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=v+(A^(E|~y))+I[1]+2240044497&4294967295,v=E+(_<<21&4294967295|_>>>11),_=y+(E^(v|~A))+I[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~E))+I[15]+4264355552&4294967295,A=y+(_<<10&4294967295|_>>>22),_=E+(y^(A|~v))+I[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=v+(A^(E|~y))+I[13]+1309151649&4294967295,v=E+(_<<21&4294967295|_>>>11),_=y+(E^(v|~A))+I[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~E))+I[11]+3174756917&4294967295,A=y+(_<<10&4294967295|_>>>22),_=E+(y^(A|~v))+I[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=v+(A^(E|~y))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const v=y-this.blockSize,I=this.C;let E=this.h,A=0;for(;A<y;){if(E==0)for(;A<=v;)i(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<y;)if(I[E++]=T.charCodeAt(A++),E==this.blockSize){i(this,I),E=0;break}}else for(;A<y;)if(I[E++]=T[A++],E==this.blockSize){i(this,I),E=0;break}}this.h=E,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var v=T.length-8;v<T.length;++v)T[v]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,v=0;v<4;++v)for(let I=0;I<32;I+=8)T[y++]=this.g[v]>>>I&255;return T};function o(T,y){var v=u;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function a(T,y){this.h=y;const v=[];let I=!0;for(let E=T.length-1;E>=0;E--){const A=T[E]|0;I&&A==y||(v[E]=A,I=!1)}this.g=v}var u={};function l(T){return-128<=T&&T<128?o(T,function(y){return new a([y|0],y<0?-1:0)}):new a([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return b(h(-T));const y=[];let v=1;for(let I=0;T>=v;I++)y[I]=T/v|0,v*=4294967296;return new a(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return b(d(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let I=p;for(let A=0;A<T.length;A+=8){var E=Math.min(8,T.length-A);const _=parseInt(T.substring(A,A+E),y);E<8?(E=h(Math.pow(y,E)),I=I.j(E).add(h(_))):(I=I.j(v),I=I.add(h(_)))}return I}var p=l(0),m=l(1),w=l(16777216);n=a.prototype,n.m=function(){if(P(this))return-b(this).m();let T=0,y=1;for(let v=0;v<this.g.length;v++){const I=this.i(v);T+=(I>=0?I:4294967296+I)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(P(this))return"-"+b(this).toString(T);const y=h(Math.pow(T,6));var v=this;let I="";for(;;){const E=B(v,y).g;v=N(v,E.j(y));let A=((v.g.length>0?v.g[0]:v.h)>>>0).toString(T);if(v=E,C(v))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=N(this,T),P(T)?-1:C(T)?0:1};function b(T){const y=T.g.length,v=[];for(let I=0;I<y;I++)v[I]=~T.g[I];return new a(v,~T.h).add(m)}n.abs=function(){return P(this)?b(this):this},n.add=function(T){const y=Math.max(this.g.length,T.g.length),v=[];let I=0;for(let E=0;E<=y;E++){let A=I+(this.i(E)&65535)+(T.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=_>>>16,A&=65535,_&=65535,v[E]=_<<16|A}return new a(v,v[v.length-1]&-2147483648?-1:0)};function N(T,y){return T.add(b(y))}n.j=function(T){if(C(this)||C(T))return p;if(P(this))return P(T)?b(this).j(b(T)):b(b(this).j(T));if(P(T))return b(this.j(b(T)));if(this.l(w)<0&&T.l(w)<0)return h(this.m()*T.m());const y=this.g.length+T.g.length,v=[];for(var I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const A=this.i(I)>>>16,_=this.i(I)&65535,Z=T.i(E)>>>16,Ct=T.i(E)&65535;v[2*I+2*E]+=_*Ct,M(v,2*I+2*E),v[2*I+2*E+1]+=A*Ct,M(v,2*I+2*E+1),v[2*I+2*E+1]+=_*Z,M(v,2*I+2*E+1),v[2*I+2*E+2]+=A*Z,M(v,2*I+2*E+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new a(v,0)};function M(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function O(T,y){this.g=T,this.h=y}function B(T,y){if(C(y))throw Error("division by zero");if(C(T))return new O(p,p);if(P(T))return y=B(b(T),y),new O(b(y.g),b(y.h));if(P(y))return y=B(T,b(y)),new O(b(y.g),y.h);if(T.g.length>30){if(P(T)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;I.l(T)<=0;)v=q(v),I=q(I);var E=$(v,1),A=$(I,1);for(I=$(I,2),v=$(v,2);!C(I);){var _=A.add(I);_.l(T)<=0&&(E=E.add(v),A=_),I=$(I,1),v=$(v,1)}return y=N(T,E.j(y)),new O(E,y)}for(E=p;T.l(y)>=0;){for(v=Math.max(1,Math.floor(T.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=h(v),_=A.j(y);P(_)||_.l(T)>0;)v-=I,A=h(v),_=A.j(y);C(A)&&(A=m),E=E.add(A),T=N(T,_)}return new O(E,T)}n.B=function(T){return B(this,T).h},n.and=function(T){const y=Math.max(this.g.length,T.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)&T.i(I);return new a(v,this.h&T.h)},n.or=function(T){const y=Math.max(this.g.length,T.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)|T.i(I);return new a(v,this.h|T.h)},n.xor=function(T){const y=Math.max(this.g.length,T.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)^T.i(I);return new a(v,this.h^T.h)};function q(T){const y=T.g.length+1,v=[];for(let I=0;I<y;I++)v[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(v,T.h)}function $(T,y){const v=y>>5;y%=32;const I=T.g.length-v,E=[];for(let A=0;A<I;A++)E[A]=y>0?T.i(A+v)>>>y|T.i(A+v+1)<<32-y:T.i(A+v);return new a(E,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,dl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,ge=a}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});var Pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pl,Bn,gl,qr,bs,ml,_l,yl;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pr=="object"&&Pr];for(var c=0;c<s.length;++c){var f=s[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var f=r;s=s.split(".");for(var g=0;g<s.length-1;g++){var R=s[g];if(!(R in f))break t;f=f[R]}s=s[s.length-1],g=f[s],c=c(g),c!=g&&c!=null&&t(f,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var f=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&f.push([g,c[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function l(s,c,f){return s.call.apply(s.bind,arguments)}function h(s,c,f){return h=l,h.apply(null,arguments)}function d(s,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),s.apply(this,g)}}function p(s,c){function f(){}f.prototype=c.prototype,s.Z=c.prototype,s.prototype=new f,s.prototype.constructor=s,s.Ob=function(g,R,S){for(var V=Array(arguments.length-2),z=2;z<arguments.length;z++)V[z-2]=arguments[z];return c.prototype[R].apply(g,V)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function w(s){const c=s.length;if(c>0){const f=Array(c);for(let g=0;g<c;g++)f[g]=s[g];return f}return[]}function C(s,c){for(let g=1;g<arguments.length;g++){const R=arguments[g];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=s.length||0;const S=R.length||0;s.length=f+S;for(let V=0;V<S;V++)s[f+V]=R[V]}else s.push(R)}}class P{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function b(s){a.setTimeout(()=>{throw s},0)}function N(){var s=T;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class M{constructor(){this.h=this.g=null}add(c,f){const g=O.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var O=new P(()=>new B,s=>s.reset());class B{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let q,$=!1,T=new M,y=()=>{const s=Promise.resolve(void 0);q=()=>{s.then(v)}};function v(){for(var s;s=N();){try{s.h.call(s.g)}catch(f){b(f)}var c=O;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}$=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const f=()=>{};a.addEventListener("test",f,c),a.removeEventListener("test",f,c)}catch{}return s})();function _(s){return/^[\s\xa0]*$/.test(s)}function Z(s,c){E.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}p(Z,E),Z.prototype.init=function(s,c){const f=this.type=s.type,g=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(f=="mouseover"?c=s.fromElement:f=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),Bt=0;function ie(s,c,f,g,R){this.listener=s,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=R,this.key=++Bt,this.da=this.fa=!1}function Nt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ct(s,c,f){for(const g in s)c.call(f,s[g],g,s)}function dr(s,c){for(const f in s)c.call(void 0,s[f],f,s)}function Y(s){const c={};for(const f in s)c[f]=s[f];return c}const yt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mt(s,c){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)s[f]=g[f];for(let S=0;S<yt.length;S++)f=yt[S],Object.prototype.hasOwnProperty.call(g,f)&&(s[f]=g[f])}}function bt(s){this.src=s,this.g={},this.h=0}bt.prototype.add=function(s,c,f,g,R){const S=s.toString();s=this.g[S],s||(s=this.g[S]=[],this.h++);const V=Vt(s,c,g,R);return V>-1?(c=s[V],f||(c.fa=!1)):(c=new ie(c,this.src,S,!!g,R),c.fa=f,s.push(c)),c};function qt(s,c){const f=c.type;if(f in s.g){var g=s.g[f],R=Array.prototype.indexOf.call(g,c,void 0),S;(S=R>=0)&&Array.prototype.splice.call(g,R,1),S&&(Nt(c),s.g[f].length==0&&(delete s.g[f],s.h--))}}function Vt(s,c,f,g){for(let R=0;R<s.length;++R){const S=s[R];if(!S.da&&S.listener==c&&S.capture==!!f&&S.ha==g)return R}return-1}var Ci="closure_lm_"+(Math.random()*1e6|0),bi={};function Do(s,c,f,g,R){if(Array.isArray(c)){for(let S=0;S<c.length;S++)Do(s,c[S],f,g,R);return null}return f=Mo(f),s&&s[Ct]?s.J(c,f,u(g)?!!g.capture:!1,R):vh(s,c,f,!1,g,R)}function vh(s,c,f,g,R,S){if(!c)throw Error("Invalid event type");const V=u(R)?!!R.capture:!!R;let z=Pi(s);if(z||(s[Ci]=z=new bt(s)),f=z.add(c,f,g,V,S),f.proxy)return f;if(g=wh(),f.proxy=g,g.src=s,g.listener=f,s.addEventListener)A||(R=V),R===void 0&&(R=!1),s.addEventListener(c.toString(),g,R);else if(s.attachEvent)s.attachEvent(ko(c.toString()),g);else if(s.addListener&&s.removeListener)s.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function wh(){function s(f){return c.call(s.src,s.listener,f)}const c=Th;return s}function No(s,c,f,g,R){if(Array.isArray(c))for(var S=0;S<c.length;S++)No(s,c[S],f,g,R);else g=u(g)?!!g.capture:!!g,f=Mo(f),s&&s[Ct]?(s=s.i,S=String(c).toString(),S in s.g&&(c=s.g[S],f=Vt(c,f,g,R),f>-1&&(Nt(c[f]),Array.prototype.splice.call(c,f,1),c.length==0&&(delete s.g[S],s.h--)))):s&&(s=Pi(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Vt(c,f,g,R)),(f=s>-1?c[s]:null)&&xi(f))}function xi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Ct])qt(c.i,s);else{var f=s.type,g=s.proxy;c.removeEventListener?c.removeEventListener(f,g,s.capture):c.detachEvent?c.detachEvent(ko(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=Pi(c))?(qt(f,s),f.h==0&&(f.src=null,c[Ci]=null)):Nt(s)}}}function ko(s){return s in bi?bi[s]:bi[s]="on"+s}function Th(s,c){if(s.da)s=!0;else{c=new Z(c,this);const f=s.listener,g=s.ha||s.src;s.fa&&xi(s),s=f.call(g,c)}return s}function Pi(s){return s=s[Ci],s instanceof bt?s:null}var Vi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mo(s){return typeof s=="function"?s:(s[Vi]||(s[Vi]=function(c){return s.handleEvent(c)}),s[Vi])}function Et(){I.call(this),this.i=new bt(this),this.M=this,this.G=null}p(Et,I),Et.prototype[Ct]=!0,Et.prototype.removeEventListener=function(s,c,f,g){No(this,s,c,f,g)};function It(s,c){var f,g=s.G;if(g)for(f=[];g;g=g.G)f.push(g);if(s=s.M,g=c.type||c,typeof c=="string")c=new E(c,s);else if(c instanceof E)c.target=c.target||s;else{var R=c;c=new E(g,s),Mt(c,R)}R=!0;let S,V;if(f)for(V=f.length-1;V>=0;V--)S=c.g=f[V],R=pr(S,g,!0,c)&&R;if(S=c.g=s,R=pr(S,g,!0,c)&&R,R=pr(S,g,!1,c)&&R,f)for(V=0;V<f.length;V++)S=c.g=f[V],R=pr(S,g,!1,c)&&R}Et.prototype.N=function(){if(Et.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const f=s.g[c];for(let g=0;g<f.length;g++)Nt(f[g]);delete s.g[c],s.h--}}this.G=null},Et.prototype.J=function(s,c,f,g){return this.i.add(String(s),c,!1,f,g)},Et.prototype.K=function(s,c,f,g){return this.i.add(String(s),c,!0,f,g)};function pr(s,c,f,g){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let S=0;S<c.length;++S){const V=c[S];if(V&&!V.da&&V.capture==f){const z=V.listener,lt=V.ha||V.src;V.fa&&qt(s.i,V),R=z.call(lt,g)!==!1&&R}}return R&&!g.defaultPrevented}function Ih(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=h(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function Oo(s){s.g=Ih(()=>{s.g=null,s.i&&(s.i=!1,Oo(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Ah extends I{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Oo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(s){I.call(this),this.h=s,this.g={}}p(yn,I);var Lo=[];function Fo(s){ct(s.g,function(c,f){this.g.hasOwnProperty(f)&&xi(c)},s),s.g={}}yn.prototype.N=function(){yn.Z.N.call(this),Fo(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Di=a.JSON.stringify,Rh=a.JSON.parse,Sh=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function Bo(){}function qo(){}var En={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ni(){E.call(this,"d")}p(Ni,E);function ki(){E.call(this,"c")}p(ki,E);var Ae={},$o=null;function gr(){return $o=$o||new Et}Ae.Ia="serverreachability";function jo(s){E.call(this,Ae.Ia,s)}p(jo,E);function vn(s){const c=gr();It(c,new jo(c))}Ae.STAT_EVENT="statevent";function Uo(s,c){E.call(this,Ae.STAT_EVENT,s),this.stat=c}p(Uo,E);function At(s){const c=gr();It(c,new Uo(c,s))}Ae.Ja="timingevent";function zo(s,c){E.call(this,Ae.Ja,s),this.size=c}p(zo,E);function wn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function Tn(){this.g=!0}Tn.prototype.ua=function(){this.g=!1};function Ch(s,c,f,g,R,S){s.info(function(){if(s.g)if(S){var V="",z=S.split("&");for(let J=0;J<z.length;J++){var lt=z[J].split("=");if(lt.length>1){const dt=lt[0];lt=lt[1];const jt=dt.split("_");V=jt.length>=2&&jt[1]=="type"?V+(dt+"="+lt+"&"):V+(dt+"=redacted&")}}}else V=null;else V=S;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+c+`
`+f+`
`+V})}function bh(s,c,f,g,R,S,V){s.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+c+`
`+f+`
`+S+" "+V})}function je(s,c,f,g){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ph(s,f)+(g?" "+g:"")})}function xh(s,c){s.info(function(){return"TIMEOUT: "+c})}Tn.prototype.info=function(){};function Ph(s,c){if(!s.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(s=0;s<S.length;s++)if(Array.isArray(S[s])){var f=S[s];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let V=1;V<g.length;V++)g[V]=""}}}}return Di(S)}catch{return c}}var mr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ho={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Go;function Mi(){}p(Mi,Bo),Mi.prototype.g=function(){return new XMLHttpRequest},Go=new Mi;function In(s){return encodeURIComponent(String(s))}function Vh(s){var c=1;s=s.split(":");const f=[];for(;c>0&&s.length;)f.push(s.shift()),c--;return s.length&&f.push(s.join(":")),f}function se(s,c,f,g){this.j=s,this.i=c,this.l=f,this.S=g||1,this.V=new yn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ko}function Ko(){this.i=null,this.g="",this.h=!1}var Qo={},Oi={};function Li(s,c,f){s.M=1,s.A=yr($t(c)),s.u=f,s.R=!0,Wo(s,null)}function Wo(s,c){s.F=Date.now(),_r(s),s.B=$t(s.A);var f=s.B,g=s.S;Array.isArray(g)||(g=[String(g)]),ua(f.i,"t",g),s.C=0,f=s.j.L,s.h=new Ko,s.g=Sa(s.j,f?c:null,!s.u),s.P>0&&(s.O=new Ah(h(s.Y,s,s.g),s.P)),c=s.V,f=s.g,g=s.ba;var R="readystatechange";Array.isArray(R)||(R&&(Lo[0]=R.toString()),R=Lo);for(let S=0;S<R.length;S++){const V=Do(f,R[S],g||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=s.J?Y(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),vn(),Ch(s.i,s.v,s.B,s.l,s.S,s.u)}se.prototype.ba=function(s){s=s.target;const c=this.O;c&&ue(s)==3?c.j():this.Y(s)},se.prototype.Y=function(s){try{if(s==this.g)t:{const z=ue(this.g),lt=this.g.ya(),J=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||ga(this.g)))){this.K||z!=4||lt==7||(lt==8||J<=0?vn(3):vn(2)),Fi(this);var c=this.g.ca();this.X=c;var f=Dh(this);if(this.o=c==200,bh(this.i,this.v,this.B,this.l,this.S,z,c),this.o){if(this.U&&!this.L){e:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var S=g;break e}}S=null}if(s=S)je(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Bi(this,s);else{this.o=!1,this.m=3,At(12),Re(this),An(this);break t}}if(this.R){s=!0;let dt;for(;!this.K&&this.C<f.length;)if(dt=Nh(this,f),dt==Oi){z==4&&(this.m=4,At(14),s=!1),je(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==Qo){this.m=4,At(15),je(this.i,this.l,f,"[Invalid Chunk]"),s=!1;break}else je(this.i,this.l,dt,null),Bi(this,dt);if(Xo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||f.length!=0||this.h.h||(this.m=1,At(16),s=!1),this.o=this.o&&s,!s)je(this.i,this.l,f,"[Invalid Chunked Response]"),Re(this),An(this);else if(f.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ki(V),V.P=!0,At(11))}}else je(this.i,this.l,f,null),Bi(this,f);z==4&&Re(this),this.o&&!this.K&&(z==4?Ta(this.j,this):(this.o=!1,_r(this)))}else Kh(this.g),c==400&&f.indexOf("Unknown SID")>0?(this.m=3,At(12)):(this.m=0,At(13)),Re(this),An(this)}}}catch{}finally{}};function Dh(s){if(!Xo(s))return s.g.la();const c=ga(s.g);if(c==="")return"";let f="";const g=c.length,R=ue(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Re(s),An(s),"";s.h.i=new a.TextDecoder}for(let S=0;S<g;S++)s.h.h=!0,f+=s.h.i.decode(c[S],{stream:!(R&&S==g-1)});return c.length=0,s.h.g+=f,s.C=0,s.h.g}function Xo(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Nh(s,c){var f=s.C,g=c.indexOf(`
`,f);return g==-1?Oi:(f=Number(c.substring(f,g)),isNaN(f)?Qo:(g+=1,g+f>c.length?Oi:(c=c.slice(g,g+f),s.C=g+f,c)))}se.prototype.cancel=function(){this.K=!0,Re(this)};function _r(s){s.T=Date.now()+s.H,Yo(s,s.H)}function Yo(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=wn(h(s.aa,s),c)}function Fi(s){s.D&&(a.clearTimeout(s.D),s.D=null)}se.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(xh(this.i,this.B),this.M!=2&&(vn(),At(17)),Re(this),this.m=2,An(this)):Yo(this,this.T-s)};function An(s){s.j.I==0||s.K||Ta(s.j,s)}function Re(s){Fi(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,Fo(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function Bi(s,c){try{var f=s.j;if(f.I!=0&&(f.g==s||qi(f.h,s))){if(!s.L&&qi(f.h,s)&&f.I==3){try{var g=f.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<s.F)Ir(f),wr(f);else break t;Gi(f),At(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=wn(h(f.Va,f),6e3));ta(f.h)<=1&&f.ta&&(f.ta=void 0)}else Ce(f,11)}else if((s.L||f.g==s)&&Ir(f),!_(c))for(R=f.Ba.g.parse(c),c=0;c<R.length;c++){let J=R[c];const dt=J[0];if(!(dt<=f.K))if(f.K=dt,J=J[1],f.I==2)if(J[0]=="c"){f.M=J[1],f.ba=J[2];const jt=J[3];jt!=null&&(f.ka=jt,f.j.info("VER="+f.ka));const be=J[4];be!=null&&(f.za=be,f.j.info("SVER="+f.za));const ce=J[5];ce!=null&&typeof ce=="number"&&ce>0&&(g=1.5*ce,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const le=s.g;if(le){const Rr=le.g?le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rr){var S=g.h;S.g||Rr.indexOf("spdy")==-1&&Rr.indexOf("quic")==-1&&Rr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&($i(S,S.h),S.h=null))}if(g.G){const Qi=le.g?le.g.getResponseHeader("X-HTTP-Session-Id"):null;Qi&&(g.wa=Qi,tt(g.J,g.G,Qi))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-s.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var V=s;if(g.na=Ra(g,g.L?g.ba:null,g.W),V.L){ea(g.h,V);var z=V,lt=g.O;lt&&(z.H=lt),z.D&&(Fi(z),_r(z)),g.g=V}else va(g);f.i.length>0&&Tr(f)}else J[0]!="stop"&&J[0]!="close"||Ce(f,7);else f.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Ce(f,7):Hi(f):J[0]!="noop"&&f.l&&f.l.qa(J),f.A=0)}}vn(4)}catch{}}var kh=class{constructor(s,c){this.g=s,this.map=c}};function Jo(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ta(s){return s.h?1:s.g?s.g.size:0}function qi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function $i(s,c){s.g?s.g.add(c):s.h=c}function ea(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Jo.prototype.cancel=function(){if(this.i=na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function na(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const f of s.g.values())c=c.concat(f.G);return c}return w(s.i)}var ra=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mh(s,c){if(s){s=s.split("&");for(let f=0;f<s.length;f++){const g=s[f].indexOf("=");let R,S=null;g>=0?(R=s[f].substring(0,g),S=s[f].substring(g+1)):R=s[f],c(R,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function oe(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof oe?(this.l=s.l,Rn(this,s.j),this.o=s.o,this.g=s.g,Sn(this,s.u),this.h=s.h,ji(this,ca(s.i)),this.m=s.m):s&&(c=String(s).match(ra))?(this.l=!1,Rn(this,c[1]||"",!0),this.o=Cn(c[2]||""),this.g=Cn(c[3]||"",!0),Sn(this,c[4]),this.h=Cn(c[5]||"",!0),ji(this,c[6]||"",!0),this.m=Cn(c[7]||"")):(this.l=!1,this.i=new xn(null,this.l))}oe.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(bn(c,ia,!0),":");var f=this.g;return(f||c=="file")&&(s.push("//"),(c=this.o)&&s.push(bn(c,ia,!0),"@"),s.push(In(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&s.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&s.push("/"),s.push(bn(f,f.charAt(0)=="/"?Fh:Lh,!0))),(f=this.i.toString())&&s.push("?",f),(f=this.m)&&s.push("#",bn(f,qh)),s.join("")},oe.prototype.resolve=function(s){const c=$t(this);let f=!!s.j;f?Rn(c,s.j):f=!!s.o,f?c.o=s.o:f=!!s.g,f?c.g=s.g:f=s.u!=null;var g=s.h;if(f)Sn(c,s.u);else if(f=!!s.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=c.h.lastIndexOf("/");R!=-1&&(g=c.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const S=[];for(let V=0;V<R.length;){const z=R[V++];z=="."?g&&V==R.length&&S.push(""):z==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),g&&V==R.length&&S.push("")):(S.push(z),g=!0)}g=S.join("/")}else g=R}return f?c.h=g:f=s.i.toString()!=="",f?ji(c,ca(s.i)):f=!!s.m,f&&(c.m=s.m),c};function $t(s){return new oe(s)}function Rn(s,c,f){s.j=f?Cn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Sn(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function ji(s,c,f){c instanceof xn?(s.i=c,$h(s.i,s.l)):(f||(c=bn(c,Bh)),s.i=new xn(c,s.l))}function tt(s,c,f){s.i.set(c,f)}function yr(s){return tt(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Cn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function bn(s,c,f){return typeof s=="string"?(s=encodeURI(s).replace(c,Oh),f&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Oh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ia=/[#\/\?@]/g,Lh=/[#\?:]/g,Fh=/[#\?]/g,Bh=/[#\?@]/g,qh=/#/g;function xn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Se(s){s.g||(s.g=new Map,s.h=0,s.i&&Mh(s.i,function(c,f){s.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}n=xn.prototype,n.add=function(s,c){Se(this),this.i=null,s=Ue(this,s);let f=this.g.get(s);return f||this.g.set(s,f=[]),f.push(c),this.h+=1,this};function sa(s,c){Se(s),c=Ue(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function oa(s,c){return Se(s),c=Ue(s,c),s.g.has(c)}n.forEach=function(s,c){Se(this),this.g.forEach(function(f,g){f.forEach(function(R){s.call(c,R,g,this)},this)},this)};function aa(s,c){Se(s);let f=[];if(typeof c=="string")oa(s,c)&&(f=f.concat(s.g.get(Ue(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)f=f.concat(s[c]);return f}n.set=function(s,c){return Se(this),this.i=null,s=Ue(this,s),oa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=aa(this,s),s.length>0?String(s[0]):c):c};function ua(s,c,f){sa(s,c),f.length>0&&(s.i=null,s.g.set(Ue(s,c),w(f)),s.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var f=c[g];const R=In(f);f=aa(this,f);for(let S=0;S<f.length;S++){let V=R;f[S]!==""&&(V+="="+In(f[S])),s.push(V)}}return this.i=s.join("&")};function ca(s){const c=new xn;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function Ue(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function $h(s,c){c&&!s.j&&(Se(s),s.i=null,s.g.forEach(function(f,g){const R=g.toLowerCase();g!=R&&(sa(this,g),ua(this,R,f))},s)),s.j=c}function jh(s,c){const f=new Tn;if(a.Image){const g=new Image;g.onload=d(ae,f,"TestLoadImage: loaded",!0,c,g),g.onerror=d(ae,f,"TestLoadImage: error",!1,c,g),g.onabort=d(ae,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=d(ae,f,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=s}else c(!1)}function Uh(s,c){const f=new Tn,g=new AbortController,R=setTimeout(()=>{g.abort(),ae(f,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:g.signal}).then(S=>{clearTimeout(R),S.ok?ae(f,"TestPingServer: ok",!0,c):ae(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),ae(f,"TestPingServer: error",!1,c)})}function ae(s,c,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function zh(){this.g=new Sh}function Ui(s){this.i=s.Sb||null,this.h=s.ab||!1}p(Ui,Bo),Ui.prototype.g=function(){return new Er(this.i,this.h)};function Er(s,c){Et.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Er,Et),n=Er.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,Vn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;la(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function la(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Pn(this):Vn(this),this.readyState==3&&la(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Pn(this))},n.Na=function(s){this.g&&(this.response=s,Pn(this))},n.ga=function(){this.g&&Pn(this)};function Pn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Vn(s)}n.setRequestHeader=function(s,c){this.A.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,s.push(f[0]+": "+f[1]),f=c.next();return s.join(`\r
`)};function Vn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ha(s){let c="";return ct(s,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function zi(s,c,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=ha(f),typeof s=="string"?f!=null&&In(f):tt(s,c,f))}function rt(s){Et.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(rt,Et);var Hh=/^https?$/i,Gh=["POST","PUT"];n=rt.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Go.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(S){fa(this,S);return}if(s=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const S of g.keys())f.set(S,g.get(S));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(S=>S.toLowerCase()=="content-type"),R=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Gh,c,void 0)>=0)||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of f)this.g.setRequestHeader(S,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(S){fa(this,S)}};function fa(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,da(s),vr(s)}function da(s){s.A||(s.A=!0,It(s,"complete"),It(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,It(this,"complete"),It(this,"abort"),vr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vr(this,!0)),rt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?pa(this):this.Xa())},n.Xa=function(){pa(this)};function pa(s){if(s.h&&typeof o<"u"){if(s.v&&ue(s)==4)setTimeout(s.Ca.bind(s),0);else if(It(s,"readystatechange"),ue(s)==4){s.h=!1;try{const S=s.ca();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var f;if(!(f=c)){var g;if(g=S===0){let V=String(s.D).match(ra)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),g=!Hh.test(V?V.toLowerCase():"")}f=g}if(f)It(s,"complete"),It(s,"success");else{s.o=6;try{var R=ue(s)>2?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.ca()+"]",da(s)}}finally{vr(s)}}}}function vr(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const f=s.g;s.g=null,c||It(s,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ue(s){return s.g?s.g.readyState:0}n.ca=function(){try{return ue(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Rh(c)}};function ga(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Kh(s){const c={};s=(s.g&&ue(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<s.length;g++){if(_(s[g]))continue;var f=Vh(s[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const S=c[R]||[];c[R]=S,S.push(f)}dr(c,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dn(s,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[s]||c}function ma(s){this.za=0,this.i=[],this.j=new Tn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Dn("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Dn("baseRetryDelayMs",5e3,s),this.Za=Dn("retryDelaySeedMs",1e4,s),this.Ta=Dn("forwardChannelMaxRetries",2,s),this.va=Dn("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Jo(s&&s.concurrentRequestLimit),this.Ba=new zh,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ma.prototype,n.ka=8,n.I=1,n.connect=function(s,c,f,g){At(0),this.W=s,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Ra(this,null,this.W),Tr(this)};function Hi(s){if(_a(s),s.I==3){var c=s.V++,f=$t(s.J);if(tt(f,"SID",s.M),tt(f,"RID",c),tt(f,"TYPE","terminate"),Nn(s,f),c=new se(s,s.j,c),c.M=2,c.A=yr($t(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=c.A,f=!0),f||(c.g=Sa(c.j,null),c.g.ea(c.A)),c.F=Date.now(),_r(c)}Aa(s)}function wr(s){s.g&&(Ki(s),s.g.cancel(),s.g=null)}function _a(s){wr(s),s.v&&(a.clearTimeout(s.v),s.v=null),Ir(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Tr(s){if(!Zo(s.h)&&!s.m){s.m=!0;var c=s.Ea;q||y(),$||(q(),$=!0),T.add(c,s),s.D=0}}function Qh(s,c){return ta(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=wn(h(s.Ea,s,c),Ia(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const R=new se(this,this.j,s);let S=this.o;if(this.U&&(S?(S=Y(S),Mt(S,this.U)):S=this.U),this.u!==null||this.R||(R.J=S,S=null),this.S)t:{for(var c=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=f;break t}if(c===4096||f===this.i.length-1){c=f+1;break t}}c=1e3}else c=1e3;c=Ea(this,R,c),f=$t(this.J),tt(f,"RID",s),tt(f,"CVER",22),this.G&&tt(f,"X-HTTP-Session-Id",this.G),Nn(this,f),S&&(this.R?c="headers="+In(ha(S))+"&"+c:this.u&&zi(f,this.u,S)),$i(this.h,R),this.Ra&&tt(f,"TYPE","init"),this.S?(tt(f,"$req",c),tt(f,"SID","null"),R.U=!0,Li(R,f,null)):Li(R,f,c),this.I=2}}else this.I==3&&(s?ya(this,s):this.i.length==0||Zo(this.h)||ya(this))};function ya(s,c){var f;c?f=c.l:f=s.V++;const g=$t(s.J);tt(g,"SID",s.M),tt(g,"RID",f),tt(g,"AID",s.K),Nn(s,g),s.u&&s.o&&zi(g,s.u,s.o),f=new se(s,s.j,f,s.D+1),s.u===null&&(f.J=s.o),c&&(s.i=c.G.concat(s.i)),c=Ea(s,f,1e3),f.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),$i(s.h,f),Li(f,g,c)}function Nn(s,c){s.H&&ct(s.H,function(f,g){tt(c,g,f)}),s.l&&ct({},function(f,g){tt(c,g,f)})}function Ea(s,c,f){f=Math.min(s.i.length,f);const g=s.l?h(s.l.Ka,s.l,s):null;t:{var R=s.i;let z=-1;for(;;){const lt=["count="+f];z==-1?f>0?(z=R[0].g,lt.push("ofs="+z)):z=0:lt.push("ofs="+z);let J=!0;for(let dt=0;dt<f;dt++){var S=R[dt].g;const jt=R[dt].map;if(S-=z,S<0)z=Math.max(0,R[dt].g-100),J=!1;else try{S="req"+S+"_"||"";try{var V=jt instanceof Map?jt:Object.entries(jt);for(const[be,ce]of V){let le=ce;u(ce)&&(le=Di(ce)),lt.push(S+be+"="+encodeURIComponent(le))}}catch(be){throw lt.push(S+"type="+encodeURIComponent("_badmap")),be}}catch{g&&g(jt)}}if(J){V=lt.join("&");break t}}V=void 0}return s=s.i.splice(0,f),c.G=s,V}function va(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;q||y(),$||(q(),$=!0),T.add(c,s),s.A=0}}function Gi(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=wn(h(s.Da,s),Ia(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,wa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=wn(h(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,At(10),wr(this),wa(this))};function Ki(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function wa(s){s.g=new se(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=$t(s.na);tt(c,"RID","rpc"),tt(c,"SID",s.M),tt(c,"AID",s.K),tt(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&tt(c,"TO",s.ia),tt(c,"TYPE","xmlhttp"),Nn(s,c),s.u&&s.o&&zi(c,s.u,s.o),s.O&&(s.g.H=s.O);var f=s.g;s=s.ba,f.M=1,f.A=yr($t(c)),f.u=null,f.R=!0,Wo(f,s)}n.Va=function(){this.C!=null&&(this.C=null,wr(this),Gi(this),At(19))};function Ir(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function Ta(s,c){var f=null;if(s.g==c){Ir(s),Ki(s),s.g=null;var g=2}else if(qi(s.h,c))f=c.G,ea(s.h,c),g=1;else return;if(s.I!=0){if(c.o)if(g==1){f=c.u?c.u.length:0,c=Date.now()-c.F;var R=s.D;g=gr(),It(g,new zo(g,f)),Tr(s)}else va(s);else if(R=c.m,R==3||R==0&&c.X>0||!(g==1&&Qh(s,c)||g==2&&Gi(s)))switch(f&&f.length>0&&(c=s.h,c.i=c.i.concat(f)),R){case 1:Ce(s,5);break;case 4:Ce(s,10);break;case 3:Ce(s,6);break;default:Ce(s,2)}}}function Ia(s,c){let f=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(f*=2),f*c}function Ce(s,c){if(s.j.info("Error code "+c),c==2){var f=h(s.bb,s),g=s.Ua;const R=!g;g=new oe(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Rn(g,"https"),yr(g),R?jh(g.toString(),f):Uh(g.toString(),f)}else At(2);s.I=0,s.l&&s.l.pa(c),Aa(s),_a(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Aa(s){if(s.I=0,s.ja=[],s.l){const c=na(s.h);(c.length!=0||s.i.length!=0)&&(C(s.ja,c),C(s.ja,s.i),s.h.i.length=0,w(s.i),s.i.length=0),s.l.oa()}}function Ra(s,c,f){var g=f instanceof oe?$t(f):new oe(f);if(g.g!="")c&&(g.g=c+"."+g.g),Sn(g,g.u);else{var R=a.location;g=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const S=new oe(null);g&&Rn(S,g),c&&(S.g=c),R&&Sn(S,R),f&&(S.h=f),g=S}return f=s.G,c=s.wa,f&&c&&tt(g,f,c),tt(g,"VER",s.ka),Nn(s,g),g}function Sa(s,c,f){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new rt(new Ui({ab:f})):new rt(s.ma),c.Fa(s.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ca(){}n=Ca.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ar(){}Ar.prototype.g=function(s,c){return new Dt(s,c)};function Dt(s,c){Et.call(this),this.g=new ma(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!_(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new ze(this)}p(Dt,Et),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Hi(this.g)},Dt.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var f={};f.__data__=s,s=f}else this.v&&(f={},f.__data__=Di(s),s=f);c.i.push(new kh(c.Ya++,s)),c.I==3&&Tr(c)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Hi(this.g),delete this.g,Dt.Z.N.call(this)};function ba(s){Ni.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const f in c){s=f;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}p(ba,Ni);function xa(){ki.call(this),this.status=1}p(xa,ki);function ze(s){this.g=s}p(ze,Ca),ze.prototype.ra=function(){It(this.g,"a")},ze.prototype.qa=function(s){It(this.g,new ba(s))},ze.prototype.pa=function(s){It(this.g,new xa)},ze.prototype.oa=function(){It(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,yl=function(){return new Ar},_l=function(){return gr()},ml=Ae,bs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,qr=mr,Ho.COMPLETE="complete",gl=Ho,qo.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",Et.prototype.listen=Et.prototype.J,Bn=qo,rt.prototype.listenOnce=rt.prototype.K,rt.prototype.getLastError=rt.prototype.Ha,rt.prototype.getLastErrorCode=rt.prototype.ya,rt.prototype.getStatus=rt.prototype.ca,rt.prototype.getResponseJson=rt.prototype.La,rt.prototype.getResponseText=rt.prototype.la,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Fa,pl=rt}).apply(typeof Pr<"u"?Pr:typeof self<"u"?self:typeof window<"u"?window:{});const yu="@firebase/firestore",Eu="4.9.2";/**
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
 */class wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let gn="12.3.0";/**
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
 */const qe=new al("@firebase/firestore");function Ge(){return qe.logLevel}function k(n,...t){if(qe.logLevel<=K.DEBUG){const e=t.map(ao);qe.debug(`Firestore (${gn}): ${n}`,...e)}}function re(n,...t){if(qe.logLevel<=K.ERROR){const e=t.map(ao);qe.error(`Firestore (${gn}): ${n}`,...e)}}function an(n,...t){if(qe.logLevel<=K.WARN){const e=t.map(ao);qe.warn(`Firestore (${gn}): ${n}`,...e)}}function ao(n){if(typeof n=="string")return n;try{/**
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
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function U(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,El(n,r,e)}function El(n,t,e){let r=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw re(r),new Error(r)}function nt(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||El(t,i,r)}function Q(n,t){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends pn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ze{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class vl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Z_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(wt.UNAUTHENTICATED)))}shutdown(){}}class ty{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ey{constructor(t){this.t=t,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let o=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ze,t.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const l=o;t.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},u=l=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>u(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ze)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string",31837,{l:r}),new vl(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string",2055,{h:t}),new wt(t)}}class ny{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ry{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new ny(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iy{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,O_(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){nt(this.o===void 0,3512);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(nt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new vu(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sy(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class uo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=sy(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function xs(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return rs(i)===rs(o)?H(i,o):rs(i)?1:-1}return H(n.length,t.length)}const oy=55296,ay=57343;function rs(n){const t=n.charCodeAt(0);return t>=oy&&t<=ay}function un(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
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
 */const wu="__name__";class Ut{constructor(t,e,r){e===void 0?e=0:e>t.length&&U(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&U(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ut?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ut.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return H(t.length,e.length)}static compareSegments(t,e){const r=Ut.isNumericId(t),i=Ut.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ut.extractNumericId(t).compare(Ut.extractNumericId(e)):xs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ge.fromString(t.substring(4,t.length-2))}}class et extends Ut{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new et(e)}static emptyPath(){return new et([])}}const uy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Ut{construct(t,e,r){return new Rt(t,e,r)}static isValidIdentifier(t){return uy.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wu}static keyField(){return new Rt([wu])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new L(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new L(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Rt(e)}static emptyPath(){return new Rt([])}}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(et.fromString(t))}static fromName(t){return new F(et.fromString(t).popFirst(5))}static empty(){return new F(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new et(t.slice()))}}/**
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
 */function cy(n,t,e){if(!e)throw new L(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ly(n,t,e,r){if(t===!0&&r===!0)throw new L(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Tu(n){if(!F.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hy(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fy(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function $r(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new L(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fy(n);throw new L(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function ut(n,t){const e={typeString:n};return t&&(e.value=t),e}function ur(n,t){if(!hy(n))throw new L(D.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new L(D.INVALID_ARGUMENT,e);return!0}/**
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
 */const Iu=-62135596800,Au=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(t){return at.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Au);return new at(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Iu)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Au}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ur(t,at._jsonSchema))return new at(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Iu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:ut("string",at._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
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
 */class j{static fromTimestamp(t){return new j(t)}static min(){return new j(new at(0,0))}static max(){return new j(new at(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const er=-1;function dy(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new at(e+1,0):new at(e,r));return new ye(i,F.empty(),t)}function py(n){return new ye(n.readTime,n.key,er)}class ye{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ye(j.min(),F.empty(),er)}static max(){return new ye(j.max(),F.empty(),er)}}function gy(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
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
 */const my="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _y{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function gi(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==my)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new x(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof x?e:x.resolve(e)}catch(e){return x.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):x.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):x.reject(e)}static resolve(t){return new x(((e,r)=>{e(t)}))}static reject(t){return new x(((e,r)=>{r(t)}))}static waitFor(t){return new x(((e,r)=>{let i=0,o=0,a=!1;t.forEach((u=>{++i,u.next((()=>{++o,a&&o===i&&e()}),(l=>r(l)))})),a=!0,o===i&&e()}))}static or(t){let e=x.resolve(!1);for(const r of t)e=e.next((i=>i?x.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new x(((r,i)=>{const o=t.length,a=new Array(o);let u=0;for(let l=0;l<o;l++){const h=l;e(t[h]).next((d=>{a[h]=d,++u,u===o&&r(a)}),(d=>i(d)))}}))}static doWhile(t,e){return new x(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function yy(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function mn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class mi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}mi.ce=-1;/**
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
 */const Ey=-1;function _i(n){return n==null}function Ps(n){return n===0&&1/n==-1/0}/**
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
 */const wl="";function vy(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ru(t)),t=wy(n.get(e),t);return Ru(t)}function wy(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case wl:e+="";break;default:e+=o}}return e}function Ru(n){return n+wl+""}/**
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
 */function Su(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function cr(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ty(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class st{constructor(t,e){this.comparator=t,this.root=e||mt.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vr(this.root,t,this.comparator,!0)}}class Vr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class mt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=o??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new mt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw U(27949);return t+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Cu(this.data.getIterator())}getIteratorFrom(t){return new Cu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class Cu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class he{constructor(t){this.fields=t,t.sort(Rt.comparator)}static empty(){return new he([])}unionWith(t){let e=new ft(Rt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new he(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return un(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Tl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Tl("Invalid base64 string: "+o):o}})(t);return new _t(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Iy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ee(n){if(nt(!!n,39018),typeof n=="string"){let t=0;const e=Iy.exec(n);if(nt(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ve(n){return typeof n=="string"?_t.fromBase64String(n):_t.fromUint8Array(n)}/**
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
 */const Il="server_timestamp",Al="__type__",Rl="__previous_value__",Sl="__local_write_time__";function co(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Al])==null?void 0:r.stringValue)===Il}function yi(n){const t=n.mapValue.fields[Rl];return co(t)?yi(t):t}function nr(n){const t=Ee(n.mapValue.fields[Sl].timestampValue);return new at(t.seconds,t.nanos)}/**
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
 */class Ay{constructor(t,e,r,i,o,a,u,l,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const si="(default)";class rr{constructor(t,e){this.projectId=t,this.database=e||si}static empty(){return new rr("","")}get isDefaultDatabase(){return this.database===si}isEqual(t){return t instanceof rr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ry="__type__",Sy="__max__",Dr={mapValue:{}},Cy="__vector__",Vs="value";function we(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?co(n)?4:xy(n)?9007199254740991:by(n)?10:11:U(28295,{value:n})}function Qt(n,t){if(n===t)return!0;const e=we(n);if(e!==we(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return nr(n).isEqual(nr(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Ee(i.timestampValue),u=Ee(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return ve(i.bytesValue).isEqual(ve(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=it(i.doubleValue),u=it(o.doubleValue);return a===u?Ps(a)===Ps(u):isNaN(a)&&isNaN(u)}return!1})(n,t);case 9:return un(n.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Su(a)!==Su(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Qt(a[l],u[l])))return!1;return!0})(n,t);default:return U(52216,{left:n})}}function ir(n,t){return(n.values||[]).find((e=>Qt(e,t)))!==void 0}function cn(n,t){if(n===t)return 0;const e=we(n),r=we(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const u=it(o.integerValue||o.doubleValue),l=it(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1})(n,t);case 3:return bu(n.timestampValue,t.timestampValue);case 4:return bu(nr(n),nr(t));case 5:return xs(n.stringValue,t.stringValue);case 6:return(function(o,a){const u=ve(o),l=ve(a);return u.compareTo(l)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const u=o.split("/"),l=a.split("/");for(let h=0;h<u.length&&h<l.length;h++){const d=H(u[h],l[h]);if(d!==0)return d}return H(u.length,l.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const u=H(it(o.latitude),it(a.latitude));return u!==0?u:H(it(o.longitude),it(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return xu(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var m,w,C,P;const u=o.fields||{},l=a.fields||{},h=(m=u[Vs])==null?void 0:m.arrayValue,d=(w=l[Vs])==null?void 0:w.arrayValue,p=H(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:xu(h,d)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Dr.mapValue&&a===Dr.mapValue)return 0;if(o===Dr.mapValue)return 1;if(a===Dr.mapValue)return-1;const u=o.fields||{},l=Object.keys(u),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=xs(l[p],d[p]);if(m!==0)return m;const w=cn(u[l[p]],h[d[p]]);if(w!==0)return w}return H(l.length,d.length)})(n.mapValue,t.mapValue);default:throw U(23264,{he:e})}}function bu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=Ee(n),r=Ee(t),i=H(e.seconds,r.seconds);return i!==0?i:H(e.nanos,r.nanos)}function xu(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=cn(e[i],r[i]);if(o)return o}return H(e.length,r.length)}function ln(n){return Ds(n)}function Ds(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Ee(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ve(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return F.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Ds(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ds(e.fields[a])}`;return i+"}"})(n.mapValue):U(61005,{value:n})}function jr(n){switch(we(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yi(n);return t?16+jr(t):16;case 5:return 2*n.stringValue.length;case 6:return ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+jr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return cr(r.fields,((o,a)=>{i+=o.length+jr(a)})),i})(n.mapValue);default:throw U(13486,{value:n})}}function Ns(n){return!!n&&"integerValue"in n}function lo(n){return!!n&&"arrayValue"in n}function Pu(n){return!!n&&"nullValue"in n}function Vu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function is(n){return!!n&&"mapValue"in n}function by(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ry])==null?void 0:r.stringValue)===Cy}function zn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return cr(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=zn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=zn(n.arrayValue.values[e]);return t}return{...n}}function xy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Sy}/**
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
 */class zt{constructor(t){this.value=t}static empty(){return new zt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!is(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zn(e)}setAll(t){let e=Rt.emptyPath(),r={},i=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,r,i),r={},i=[],e=u.popLast()}a?r[u.lastSegment()]=zn(a):i.push(u.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());is(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];is(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){cr(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new zt(zn(this.value))}}/**
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
 */class Tt{constructor(t,e,r,i,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Tt(t,0,j.min(),j.min(),j.min(),zt.empty(),0)}static newFoundDocument(t,e,r,i){return new Tt(t,1,e,j.min(),r,i,0)}static newNoDocument(t,e){return new Tt(t,2,e,j.min(),j.min(),zt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,j.min(),j.min(),zt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oi{constructor(t,e){this.position=t,this.inclusive=e}}function Du(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=cn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Qt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ai{constructor(t,e="asc"){this.field=t,this.dir=e}}function Py(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Cl{}class ht extends Cl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Dy(t,e,r):e==="array-contains"?new My(t,r):e==="in"?new Oy(t,r):e==="not-in"?new Ly(t,r):e==="array-contains-any"?new Fy(t,r):new ht(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ny(t,r):new ky(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(cn(e,this.value)):e!==null&&we(this.value)===we(e)&&this.matchesComparison(cn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Cl{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Wt(t,e)}matches(t){return bl(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bl(n){return n.op==="and"}function xl(n){return Vy(n)&&bl(n)}function Vy(n){for(const t of n.filters)if(t instanceof Wt)return!1;return!0}function ks(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+ln(n.value);if(xl(n))return n.filters.map((t=>ks(t))).join(",");{const t=n.filters.map((e=>ks(e))).join(",");return`${n.op}(${t})`}}function Pl(n,t){return n instanceof ht?(function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&Qt(r.value,i.value)})(n,t):n instanceof Wt?(function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,a,u)=>o&&Pl(a,i.filters[u])),!0):!1})(n,t):void U(19439)}function Vl(n){return n instanceof ht?(function(e){return`${e.field.canonicalString()} ${e.op} ${ln(e.value)}`})(n):n instanceof Wt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Vl).join(" ,")+"}"})(n):"Filter"}class Dy extends ht{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ny extends ht{constructor(t,e){super(t,"in",e),this.keys=Dl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ky extends ht{constructor(t,e){super(t,"not-in",e),this.keys=Dl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Dl(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>F.fromName(r.referenceValue)))}class My extends ht{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lo(e)&&ir(e.arrayValue,this.value)}}class Oy extends ht{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ir(this.value.arrayValue,e)}}class Ly extends ht{constructor(t,e){super(t,"not-in",e)}matches(t){if(ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ir(this.value.arrayValue,e)}}class Fy extends ht{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>ir(this.value.arrayValue,r)))}}/**
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
 */class By{constructor(t,e=null,r=[],i=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function ku(n,t=null,e=[],r=[],i=null,o=null,a=null){return new By(n,t,e,r,i,o,a)}function ho(n){const t=Q(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>ks(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),_i(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>ln(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>ln(r))).join(",")),t.Te=e}return t.Te}function fo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Py(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Pl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Nu(n.startAt,t.startAt)&&Nu(n.endAt,t.endAt)}function Ms(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ei{constructor(t,e=null,r=[],i=[],o=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qy(n,t,e,r,i,o,a,u){return new Ei(n,t,e,r,i,o,a,u)}function po(n){return new Ei(n)}function Mu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $y(n){return n.collectionGroup!==null}function Hn(n){const t=Q(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ft(Rt.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(u=u.add(h.field))}))})),u})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new ai(o,r))})),e.has(Rt.keyField().canonicalString())||t.Ie.push(new ai(Rt.keyField(),r))}return t.Ie}function Kt(n){const t=Q(n);return t.Ee||(t.Ee=jy(t,Hn(n))),t.Ee}function jy(n,t){if(n.limitType==="F")return ku(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new ai(i.field,o)}));const e=n.endAt?new oi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new oi(n.startAt.position,n.startAt.inclusive):null;return ku(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Os(n,t,e){return new Ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function vi(n,t){return fo(Kt(n),Kt(t))&&n.limitType===t.limitType}function Nl(n){return`${ho(Kt(n))}|lt:${n.limitType}`}function Ke(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>Vl(i))).join(", ")}]`),_i(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>ln(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>ln(i))).join(",")),`Target(${r})`})(Kt(n))}; limitType=${n.limitType})`}function wi(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of Hn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(a,u,l){const h=Du(a,u,l);return a.inclusive?h<=0:h<0})(r.startAt,Hn(r),i)||r.endAt&&!(function(a,u,l){const h=Du(a,u,l);return a.inclusive?h>=0:h>0})(r.endAt,Hn(r),i))})(n,t)}function Uy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kl(n){return(t,e)=>{let r=!1;for(const i of Hn(n)){const o=zy(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function zy(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):(function(o,a,u){const l=a.data.field(o),h=u.data.field(o);return l!==null&&h!==null?cn(l,h):U(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
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
 */class $e{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){cr(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return Ty(this.inner)}size(){return this.innerSize}}/**
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
 */const Hy=new st(F.comparator);function Te(){return Hy}const Ml=new st(F.comparator);function qn(...n){let t=Ml;for(const e of n)t=t.insert(e.key,e);return t}function Gy(n){let t=Ml;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Ne(){return Gn()}function Ol(){return Gn()}function Gn(){return new $e((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Ky=new ft(F.comparator);function X(...n){let t=Ky;for(const e of n)t=t.add(e);return t}const Qy=new ft(H);function Wy(){return Qy}/**
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
 */function Xy(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ps(t)?"-0":t}}function Yy(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ti{constructor(){this._=void 0}}function Jy(n,t,e){return n instanceof Ls?(function(i,o){const a={fields:{[Al]:{stringValue:Il},[Sl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&co(o)&&(o=yi(o)),o&&(a.fields[Rl]=o),{mapValue:a}})(e,t):n instanceof ui?Ll(n,t):n instanceof ci?Fl(n,t):(function(i,o){const a=t0(i,o),u=Ou(a)+Ou(i.Ae);return Ns(a)&&Ns(i.Ae)?Yy(u):Xy(i.serializer,u)})(n,t)}function Zy(n,t,e){return n instanceof ui?Ll(n,t):n instanceof ci?Fl(n,t):e}function t0(n,t){return n instanceof Fs?(function(r){return Ns(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Ls extends Ti{}class ui extends Ti{constructor(t){super(),this.elements=t}}function Ll(n,t){const e=Bl(t);for(const r of n.elements)e.some((i=>Qt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class ci extends Ti{constructor(t){super(),this.elements=t}}function Fl(n,t){let e=Bl(t);for(const r of n.elements)e=e.filter((i=>!Qt(i,r)));return{arrayValue:{values:e}}}class Fs extends Ti{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ou(n){return it(n.integerValue||n.doubleValue)}function Bl(n){return lo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function e0(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof ui&&i instanceof ui||r instanceof ci&&i instanceof ci?un(r.elements,i.elements,Qt):r instanceof Fs&&i instanceof Fs?Qt(r.Ae,i.Ae):r instanceof Ls&&i instanceof Ls})(n.transform,t.transform)}class Me{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Me}static exists(t){return new Me(void 0,t)}static updateTime(t){return new Me(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ur(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class go{}function ql(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new r0(n.key,Me.none()):new mo(n.key,n.data,Me.none());{const e=n.data,r=zt.empty();let i=new ft(Rt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ii(n.key,r,new he(i.toArray()),Me.none())}}function n0(n,t,e){n instanceof mo?(function(i,o,a){const u=i.value.clone(),l=Fu(i.fieldTransforms,o,a.transformResults);u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,t,e):n instanceof Ii?(function(i,o,a){if(!Ur(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Fu(i.fieldTransforms,o,a.transformResults),l=o.data;l.setAll($l(i)),l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Kn(n,t,e,r){return n instanceof mo?(function(o,a,u,l){if(!Ur(o.precondition,a))return u;const h=o.value.clone(),d=Bu(o.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,t,e,r):n instanceof Ii?(function(o,a,u,l){if(!Ur(o.precondition,a))return u;const h=Bu(o.fieldTransforms,l,a),d=a.data;return d.setAll($l(o)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((p=>p.field)))})(n,t,e,r):(function(o,a,u){return Ur(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,t,e)}function Lu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&un(r,i,((o,a)=>e0(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class mo extends go{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ii extends go{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function $l(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Fu(n,t,e){const r=new Map;nt(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,u=t.data.field(o.field);r.set(o.field,Zy(a,u,e[i]))}return r}function Bu(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Jy(o,a,t))}return r}class r0 extends go{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class i0{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&n0(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Kn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Kn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ol();return this.mutations.forEach((i=>{const o=t.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(i.key)?null:u;const l=ql(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(j.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),X())}isEqual(t){return this.batchId===t.batchId&&un(this.mutations,t.mutations,((e,r)=>Lu(e,r)))&&un(this.baseMutations,t.baseMutations,((e,r)=>Lu(e,r)))}}/**
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
 */class s0{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class o0{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ot,G;function jl(n){if(n===void 0)return re("GRPC error has no .code"),D.UNKNOWN;switch(n){case ot.OK:return D.OK;case ot.CANCELLED:return D.CANCELLED;case ot.UNKNOWN:return D.UNKNOWN;case ot.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ot.INTERNAL:return D.INTERNAL;case ot.UNAVAILABLE:return D.UNAVAILABLE;case ot.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ot.NOT_FOUND:return D.NOT_FOUND;case ot.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ot.ABORTED:return D.ABORTED;case ot.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ot.DATA_LOSS:return D.DATA_LOSS;default:return U(39323,{code:n})}}(G=ot||(ot={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function a0(){return new TextEncoder}/**
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
 */const u0=new ge([4294967295,4294967295],0);function qu(n){const t=a0().encode(n),e=new dl;return e.update(t),new Uint8Array(e.digest())}function $u(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ge([e,r],0),new ge([i,o],0)]}class _o{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new $n(`Invalid padding: ${e}`);if(r<0)throw new $n(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new $n(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new $n(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ge.fromNumber(this.ge)}ye(t,e,r){let i=t.add(e.multiply(ge.fromNumber(r)));return i.compare(u0)===1&&(i=new ge([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=qu(t),[r,i]=$u(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new _o(o,i,e);return r.forEach((u=>a.insert(u))),a}insert(t){if(this.ge===0)return;const e=qu(t),[r,i]=$u(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class $n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ai{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,lr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ai(j.min(),i,new st(H),Te(),X())}}class lr{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new lr(r,e,X(),X(),X())}}/**
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
 */class zr{constructor(t,e,r,i){this.be=t,this.removedTargetIds=e,this.key=r,this.De=i}}class Ul{constructor(t,e){this.targetId=t,this.Ce=e}}class zl{constructor(t,e,r=_t.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ju{constructor(){this.ve=0,this.Fe=Uu(),this.Me=_t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=X(),e=X(),r=X();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:U(38017,{changeType:o})}})),new lr(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Uu()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,nt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class c0{constructor(t){this.Ge=t,this.ze=new Map,this.je=Te(),this.Je=Nr(),this.He=Nr(),this.Ye=new st(H)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:U(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,r=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(Ms(o))if(r===0){const a=new F(o.path);this.et(e,a,Tt.newNoDocument(a,j.min()))}else nt(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const u=this.ut(t),l=u?this.ct(u,t,a):1;if(l!==0){this.it(e);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,h)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,u;try{a=ve(r).toUint8Array()}catch(l){if(l instanceof Tl)return an("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new _o(a,i,o)}catch(l){return an(l instanceof $n?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.ge===0?null:u}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const u=this.ot(a);if(u){if(o.current&&Ms(u.target)){const l=new F(u.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,Tt.newNoDocument(l,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let r=X();this.He.forEach(((o,a)=>{let u=!0;a.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const i=new Ai(t,e,this.Ye,this.je,r);return this.je=Te(),this.Je=Nr(),this.He=Nr(),this.Ye=new st(H),i}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new ju,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new ft(H),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new ft(H),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ju),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Nr(){return new st(F.comparator)}function Uu(){return new st(F.comparator)}const l0={asc:"ASCENDING",desc:"DESCENDING"},h0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f0={and:"AND",or:"OR"};class d0{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Bs(n,t){return n.useProto3Json||_i(t)?t:{value:t}}function p0(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function g0(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function tn(n){return nt(!!n,49232),j.fromTimestamp((function(e){const r=Ee(e);return new at(r.seconds,r.nanos)})(n))}function m0(n,t){return qs(n,t).canonicalString()}function qs(n,t){const e=(function(i){return new et(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Hl(n){const t=et.fromString(n);return nt(Xl(t),10190,{key:t.toString()}),t}function ss(n,t){const e=Hl(t);if(e.get(1)!==n.databaseId.projectId)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(Kl(e))}function Gl(n,t){return m0(n.databaseId,t)}function _0(n){const t=Hl(n);return t.length===4?et.emptyPath():Kl(t)}function zu(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kl(n){return nt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function y0(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:U(39313,{state:h})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(h,d){return h.useProto3Json?(nt(d===void 0||typeof d=="string",58123),_t.fromBase64String(d||"")):(nt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),_t.fromUint8Array(d||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(h){const d=h.code===void 0?D.UNKNOWN:jl(h.code);return new L(d,h.message||"")})(a);e=new zl(r,i,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ss(n,r.document.name),o=tn(r.document.updateTime),a=r.document.createTime?tn(r.document.createTime):j.min(),u=new zt({mapValue:{fields:r.document.fields}}),l=Tt.newFoundDocument(i,o,a,u),h=r.targetIds||[],d=r.removedTargetIds||[];e=new zr(h,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ss(n,r.document),o=r.readTime?tn(r.readTime):j.min(),a=Tt.newNoDocument(i,o),u=r.removedTargetIds||[];e=new zr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ss(n,r.document),o=r.removedTargetIds||[];e=new zr([],o,i,null)}else{if(!("filter"in t))return U(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new o0(i,o),u=r.targetId;e=new Ul(u,a)}}return e}function E0(n,t){return{documents:[Gl(n,t.path)]}}function v0(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Gl(n,i);const o=(function(h){if(h.length!==0)return Wl(Wt.create(h,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(h){if(h.length!==0)return h.map((d=>(function(m){return{field:Qe(m.field),direction:I0(m.dir)}})(d)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Bs(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(t.endAt)),{ft:e,parent:i}}function w0(n){let t=_0(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){nt(r===1,65062);const d=e.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let o=[];e.where&&(o=(function(p){const m=Ql(p);return m instanceof Wt&&xl(m)?m.getFilters():[m]})(e.where));let a=[];e.orderBy&&(a=(function(p){return p.map((m=>(function(C){return new ai(We(C.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(e.orderBy));let u=null;e.limit&&(u=(function(p){let m;return m=typeof p=="object"?p.value:p,_i(m)?null:m})(e.limit));let l=null;e.startAt&&(l=(function(p){const m=!!p.before,w=p.values||[];return new oi(w,m)})(e.startAt));let h=null;return e.endAt&&(h=(function(p){const m=!p.before,w=p.values||[];return new oi(w,m)})(e.endAt)),qy(t,i,a,o,u,"F",l,h)}function T0(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ql(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=We(e.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=We(e.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=We(e.unaryFilter.field);return ht.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=We(e.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ht.create(We(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Wt.create(e.compositeFilter.filters.map((r=>Ql(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(e.compositeFilter.op))})(n):U(30097,{filter:n})}function I0(n){return l0[n]}function A0(n){return h0[n]}function R0(n){return f0[n]}function Qe(n){return{fieldPath:n.canonicalString()}}function We(n){return Rt.fromServerFormat(n.fieldPath)}function Wl(n){return n instanceof ht?(function(e){if(e.op==="=="){if(Vu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NAN"}};if(Pu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NAN"}};if(Pu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qe(e.field),op:A0(e.op),value:e.value}}})(n):n instanceof Wt?(function(e){const r=e.getFilters().map((i=>Wl(i)));return r.length===1?r[0]:{compositeFilter:{op:R0(e.op),filters:r}}})(n):U(54877,{filter:n})}function Xl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class fe{constructor(t,e,r,i,o=j.min(),a=j.min(),u=_t.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new fe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new fe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new fe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class S0{constructor(t){this.yt=t}}function C0(n){const t=w0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Os(t,t.limit,"L"):t}/**
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
 */class b0{constructor(){this.Cn=new x0}addToCollectionParentIndex(t,e){return this.Cn.add(e),x.resolve()}getCollectionParents(t,e){return x.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return x.resolve()}deleteFieldIndex(t,e){return x.resolve()}deleteAllFieldIndexes(t){return x.resolve()}createTargetIndexes(t,e){return x.resolve()}getDocumentsMatchingTarget(t,e){return x.resolve(null)}getIndexType(t,e){return x.resolve(0)}getFieldIndexes(t,e){return x.resolve([])}getNextCollectionGroupToUpdate(t){return x.resolve(null)}getMinOffset(t,e){return x.resolve(ye.min())}getMinOffsetFromCollectionGroup(t,e){return x.resolve(ye.min())}updateCollectionGroup(t,e,r){return x.resolve()}updateIndexEntries(t,e){return x.resolve()}}class x0{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ft(et.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ft(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Hu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yl=41943040;class xt{static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(Yl,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);/**
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
 */class hn{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new hn(0)}static cr(){return new hn(-1)}}/**
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
 */const Gu="LruGarbageCollector",P0=1048576;function Ku([n,t],[e,r]){const i=H(n,e);return i===0?H(t,r):i}class V0{constructor(t){this.Ir=t,this.buffer=new ft(Ku),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ku(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class D0{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){k(Gu,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){mn(e)?k(Gu,"Ignoring IndexedDB error during garbage collection: ",e):await gi(e)}await this.Vr(3e5)}))}}class N0{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return x.resolve(mi.ce);const r=new V0(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Hu)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hu):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,a,u,l,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(t,i)))).next((p=>(r=p,u=Date.now(),this.removeTargets(t,r,e)))).next((p=>(o=p,l=Date.now(),this.removeOrphanedDocuments(t,r)))).next((p=>(h=Date.now(),Ge()<=K.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(l-u)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:p}))))}}function k0(n,t){return new N0(n,t)}/**
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
 */class M0{constructor(){this.changes=new $e((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?x.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class O0{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class L0{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&Kn(r.mutation,i,he.empty(),at.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,X()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=X()){const i=Ne();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let a=qn();return o.forEach(((u,l)=>{a=a.insert(u,l.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=Ne();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,X())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,r,i){let o=Te();const a=Gn(),u=(function(){return Gn()})();return e.forEach(((l,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof Ii)?o=o.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Kn(d.mutation,h,d.mutation.getFieldMask(),at.now())):a.set(h.key,he.empty())})),this.recalculateAndSaveOverlays(t,o).next((l=>(l.forEach(((h,d)=>a.set(h,d))),e.forEach(((h,d)=>u.set(h,new O0(d,a.get(h)??null)))),u)))}recalculateAndSaveOverlays(t,e){const r=Gn();let i=new st(((a,u)=>a-u)),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((l=>{const h=e.get(l);if(h===null)return;let d=r.get(l)||he.empty();d=u.applyToLocalView(h,d),r.set(l,d);const p=(i.get(u.batchId)||X()).add(l);i=i.insert(u.batchId,p)}))})).next((()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),h=l.key,d=l.value,p=Ol();d.forEach((m=>{if(!o.has(m)){const w=ql(e.get(m),r.get(m));w!==null&&p.set(m,w),o=o.add(m)}})),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return x.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):$y(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):x.resolve(Ne());let u=er,l=o;return a.next((h=>x.forEach(h,((d,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),o.get(d)?x.resolve():this.remoteDocumentCache.getEntry(t,d).next((m=>{l=l.insert(d,m)}))))).next((()=>this.populateOverlays(t,h,o))).next((()=>this.computeViews(t,l,h,X()))).next((d=>({batchId:u,changes:Gy(d)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next((r=>{let i=qn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=qn();return this.indexManager.getCollectionParents(t,o).next((u=>x.forEach(u,(l=>{const h=(function(p,m){return new Ei(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(e,l.child(o));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next((d=>{d.forEach(((p,m)=>{a=a.insert(p,m)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((a=>{o.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,Tt.newInvalidDocument(d)))}));let u=qn();return a.forEach(((l,h)=>{const d=o.get(l);d!==void 0&&Kn(d.mutation,h,he.empty(),at.now()),wi(e,h)&&(u=u.insert(l,h))})),u}))}}/**
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
 */class F0{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return x.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:tn(i.createTime)}})(e)),x.resolve()}getNamedQuery(t,e){return x.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:C0(i.bundledQuery),readTime:tn(i.readTime)}})(e)),x.resolve()}}/**
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
 */class B0{constructor(){this.overlays=new st(F.comparator),this.qr=new Map}getOverlay(t,e){return x.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ne();return x.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),x.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),x.resolve()}getOverlaysForCollection(t,e,r){const i=Ne(),o=e.length+1,a=new F(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,h=l.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new st(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let d=o.get(h.largestBatchId);d===null&&(d=Ne(),o=o.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const u=Ne(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>u.set(h,d))),!(u.size()>=i)););return x.resolve(u)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new s0(e,r));let o=this.qr.get(e);o===void 0&&(o=X(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class q0{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(t){return x.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,x.resolve()}}/**
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
 */class yo{constructor(){this.Qr=new ft(gt.$r),this.Ur=new ft(gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new gt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new gt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new F(new et([])),r=new gt(e,t),i=new gt(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new F(new et([])),r=new gt(e,t),i=new gt(e,t+1);let o=X();return this.Ur.forEachInRange([r,i],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new gt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class gt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return F.comparator(t.key,e.key)||H(t.Yr,e.Yr)}static Kr(t,e){return H(t.Yr,e.Yr)||F.comparator(t.key,e.key)}}/**
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
 */class $0{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ft(gt.$r)}checkEmpty(t){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new i0(o,e,r,i);this.mutationQueue.push(a);for(const u of i)this.Zr=this.Zr.add(new gt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return x.resolve(a)}lookupMutationBatch(t,e){return x.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Ey:this.tr-1)}getAllMutationBatches(t){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new gt(e,0),i=new gt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(a=>{const u=this.Xr(a.Yr);o.push(u)})),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ft(H);return e.forEach((i=>{const o=new gt(i,0),a=new gt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(u=>{r=r.add(u.Yr)}))})),x.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new gt(new F(o),0);let u=new ft(H);return this.Zr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(u=u.add(l.Yr)),!0)}),a),x.resolve(this.ti(u))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){nt(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return x.forEach(e.mutations,(i=>{const o=new gt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new gt(e,0),i=this.Zr.firstAfterOrEqual(r);return x.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,x.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class j0{constructor(t){this.ri=t,this.docs=(function(){return new st(F.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return x.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=Te();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Tt.newInvalidDocument(i))})),x.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Te();const a=e.path,u=new F(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||gy(py(d),r)<=0||(i.has(d.key)||wi(e,d))&&(o=o.insert(d.key,d.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(t,e,r,i){U(9500)}ii(t,e){return x.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new U0(this)}getSize(t){return x.resolve(this.size)}}class U0 extends M0{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),x.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class z0{constructor(t){this.persistence=t,this.si=new $e((e=>ho(e)),fo),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.oi=0,this._i=new yo,this.targetCount=0,this.ai=hn.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),x.resolve()}getLastRemoteSnapshotVersion(t){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return x.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),x.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new hn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,x.resolve()}updateTargetData(t,e){return this.Pr(e),x.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,x.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)})),x.waitFor(o).next((()=>i))}getTargetCount(t){return x.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return x.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),x.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((a=>{o.push(i.markPotentiallyOrphaned(t,a))})),x.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),x.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return x.resolve(r)}containsKey(t,e){return x.resolve(this._i.containsKey(e))}}/**
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
 */class Jl{constructor(t,e){this.ui={},this.overlays={},this.ci=new mi(0),this.li=!1,this.li=!0,this.hi=new q0,this.referenceDelegate=t(this),this.Pi=new z0(this),this.indexManager=new b0,this.remoteDocumentCache=(function(i){return new j0(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new S0(e),this.Ii=new F0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new B0,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new $0(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const i=new H0(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return x.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class H0 extends _y{constructor(t){super(),this.currentSequenceNumber=t}}class Eo{constructor(t){this.persistence=t,this.Ri=new yo,this.Vi=null}static mi(t){return new Eo(t)}get fi(){if(this.Vi)return this.Vi;throw U(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),x.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),x.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.fi,(r=>{const i=F.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,j.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return x.or([()=>x.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class li{constructor(t,e){this.persistence=t,this.pi=new $e((r=>vy(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=k0(this,e)}static mi(t,e){return new li(t,e)}Ei(){}di(t){return x.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return x.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?x.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(a=>this.br(t,a,e).next((u=>{u||(r++,o.removeEntry(a,j.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),x.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),x.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),x.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),x.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=jr(t.data.value)),e}br(t,e,r){return x.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class vo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=X(),i=X();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new vo(t,e.fromCache,r,i)}}/**
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
 */class G0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class K0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Nm()?8:yy(Vm())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new G0;return this.Ss(t,e,a).next((u=>{if(o.result=u,this.Vs)return this.bs(t,e,a,u.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(Ge()<=K.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),x.resolve()):(Ge()<=K.DEBUG&&k("QueryEngine","Query:",Ke(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ge()<=K.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Kt(e))):x.resolve())}ys(t,e){if(Mu(e))return x.resolve(null);let r=Kt(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Os(e,null,"F"),r=Kt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=X(...o);return this.ps.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,r).next((l=>{const h=this.Ds(e,u);return this.Cs(e,h,a,l.readTime)?this.ys(t,Os(e,null,"F")):this.vs(t,h,e,l)}))))})))))}ws(t,e,r,i){return Mu(e)||i.isEqual(j.min())?x.resolve(null):this.ps.getDocuments(t,r).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,i)?x.resolve(null):(Ge()<=K.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ke(e)),this.vs(t,a,e,dy(i,er)).next((u=>u)))}))}Ds(t,e){let r=new ft(kl(t));return e.forEach(((i,o)=>{wi(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return Ge()<=K.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ke(e)),this.ps.getDocumentsMatchingQuery(t,e,ye.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const wo="LocalStore",Q0=3e8;class W0{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new st(H),this.xs=new $e((o=>ho(o)),fo),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new L0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function X0(n,t,e,r){return new W0(n,t,e,r)}async function Zl(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],u=[];let l=X();for(const h of i){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of o){u.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return e.localDocuments.getDocuments(r,l).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:u})))}))}))}function th(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function Y0(n,t){const e=Q(n),r=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const u=[];t.targetChanges.forEach(((d,p)=>{const m=i.get(p);if(!m)return;u.push(e.Pi.removeMatchingKeys(o,d.removedDocuments,p).next((()=>e.Pi.addMatchingKeys(o,d.addedDocuments,p))));let w=m.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(p)!==null?w=w.withResumeToken(_t.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),(function(P,b,N){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Q0?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(m,w,d)&&u.push(e.Pi.updateTargetData(o,w))}));let l=Te(),h=X();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,d))})),u.push(J0(o,a,t.documentUpdates).next((d=>{l=d.ks,h=d.qs}))),!r.isEqual(j.min())){const d=e.Pi.getLastRemoteSnapshotVersion(o).next((p=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));u.push(d)}return x.waitFor(u).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,l,h))).next((()=>l))})).then((o=>(e.Ms=i,o)))}function J0(n,t,e){let r=X(),i=X();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=Te();return e.forEach(((u,l)=>{const h=o.get(u);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(j.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):k(wo,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",l.version)})),{ks:a,qs:i}}))}function Z0(n,t){const e=Q(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.Pi.getTargetData(r,t).next((o=>o?(i=o,x.resolve(i)):e.Pi.allocateTargetId(r).next((a=>(i=new fe(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function $s(n,t,e){const r=Q(n),i=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!mn(a))throw a;k(wo,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function Qu(n,t,e){const r=Q(n);let i=j.min(),o=X();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=Q(l),m=p.xs.get(d);return m!==void 0?x.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,d)})(r,a,Kt(t)).next((u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,u.targetId).next((l=>{o=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?i:j.min(),e?o:X()))).next((u=>(tE(r,Uy(t),u),{documents:u,Qs:o})))))}function tE(n,t,e){let r=n.Os.get(t)||j.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class Wu{constructor(){this.activeTargetIds=Wy()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class eE{constructor(){this.Mo=new Wu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Wu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class nE{Oo(t){}shutdown(){}}/**
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
 */const Xu="ConnectivityMonitor";class Yu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){k(Xu,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){k(Xu,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kr=null;function js(){return kr===null?kr=(function(){return 268435456+Math.round(2147483648*Math.random())})():kr++,"0x"+kr.toString(16)}/**
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
 */const os="RestConnection",rE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iE{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===si?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const a=js(),u=this.zo(t,e.toUriEncodedString());k(os,`Sending RPC '${t}' ${a}:`,u,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,o);const{host:h}=new URL(u),d=so(h);return this.Jo(t,u,l,r,d).then((p=>(k(os,`Received RPC '${t}' ${a}: `,p),p)),(p=>{throw an(os,`RPC '${t}' ${a} failed with error: `,p,"url: ",u,"request:",r),p}))}Ho(t,e,r,i,o,a){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+gn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=rE[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class sE{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const vt="WebChannelConnection";class oE extends iE{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const a=js();return new Promise(((u,l)=>{const h=new pl;h.setWithCredentials(!0),h.listenOnce(gl.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case qr.NO_ERROR:const p=h.getResponseJson();k(vt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),u(p);break;case qr.TIMEOUT:k(vt,`RPC '${t}' ${a} timed out`),l(new L(D.DEADLINE_EXCEEDED,"Request time out"));break;case qr.HTTP_ERROR:const m=h.getStatus();if(k(vt,`RPC '${t}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const P=(function(N){const M=N.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(M)>=0?M:D.UNKNOWN})(C.status);l(new L(P,C.message))}else l(new L(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new L(D.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{k(vt,`RPC '${t}' ${a} completed.`)}}));const d=JSON.stringify(i);k(vt,`RPC '${t}' ${a} sending request:`,i),h.send(e,"POST",d,r,15)}))}T_(t,e,r){const i=js(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=yl(),u=_l(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const d=o.join("");k(vt,`Creating RPC '${t}' stream ${i}: ${d}`,l);const p=a.createWebChannel(d,l);this.I_(p);let m=!1,w=!1;const C=new sE({Yo:b=>{w?k(vt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(m||(k(vt,`Opening RPC '${t}' stream ${i} transport.`),p.open(),m=!0),k(vt,`RPC '${t}' stream ${i} sending:`,b),p.send(b))},Zo:()=>p.close()}),P=(b,N,M)=>{b.listen(N,(O=>{try{M(O)}catch(B){setTimeout((()=>{throw B}),0)}}))};return P(p,Bn.EventType.OPEN,(()=>{w||(k(vt,`RPC '${t}' stream ${i} transport opened.`),C.o_())})),P(p,Bn.EventType.CLOSE,(()=>{w||(w=!0,k(vt,`RPC '${t}' stream ${i} transport closed`),C.a_(),this.E_(p))})),P(p,Bn.EventType.ERROR,(b=>{w||(w=!0,an(vt,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),C.a_(new L(D.UNAVAILABLE,"The operation could not be completed")))})),P(p,Bn.EventType.MESSAGE,(b=>{var N;if(!w){const M=b.data[0];nt(!!M,16349);const O=M,B=(O==null?void 0:O.error)||((N=O[0])==null?void 0:N.error);if(B){k(vt,`RPC '${t}' stream ${i} received error:`,B);const q=B.status;let $=(function(v){const I=ot[v];if(I!==void 0)return jl(I)})(q),T=B.message;$===void 0&&($=D.INTERNAL,T="Unknown error status: "+q+" with message "+B.message),w=!0,C.a_(new L($,T)),p.close()}else k(vt,`RPC '${t}' stream ${i} received:`,M),C.u_(M)}})),P(u,ml.STAT_EVENT,(b=>{b.stat===bs.PROXY?k(vt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===bs.NOPROXY&&k(vt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{C.__()}),0),C}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function as(){return typeof document<"u"?document:null}/**
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
 */function eh(n){return new d0(n,!0)}/**
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
 */class nh{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ju="PersistentStream";class aE{constructor(t,e,r,i,o,a,u,l){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nh(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(re(e.toString()),re("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new L(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return k(Ju,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(k(Ju,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uE extends aE{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=y0(this.serializer,t),r=(function(o){if(!("targetChange"in o))return j.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?tn(a.readTime):j.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=zu(this.serializer),e.addTarget=(function(o,a){let u;const l=a.target;if(u=Ms(l)?{documents:E0(o,l)}:{query:v0(o,l).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=g0(o,a.resumeToken);const h=Bs(o,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(j.min())>0){u.readTime=p0(o,a.snapshotVersion.toTimestamp());const h=Bs(o,a.expectedCount);h!==null&&(u.expectedCount=h)}return u})(this.serializer,t);const r=T0(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=zu(this.serializer),e.removeTarget=t,this.q_(e)}}/**
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
 */class cE{}class lE extends cE{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,qs(e,r),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(D.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Ho(t,qs(e,r),i,a,u,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(D.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class hE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(re(e),this.aa=!1):k("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const fn="RemoteStore";class fE{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{fr(this)&&(k(fn,"Restarting streams for network reachability change."),await(async function(l){const h=Q(l);h.Ea.add(4),await hr(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Ri(h)})(this))}))})),this.Ra=new hE(r,i)}}async function Ri(n){if(fr(n))for(const t of n.da)await t(!0)}async function hr(n){for(const t of n.da)await t(!1)}function rh(n,t){const e=Q(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Ro(e)?Ao(e):_n(e).O_()&&Io(e,t))}function To(n,t){const e=Q(n),r=_n(e);e.Ia.delete(t),r.O_()&&ih(e,t),e.Ia.size===0&&(r.O_()?r.L_():fr(e)&&e.Ra.set("Unknown"))}function Io(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}_n(n).Y_(t)}function ih(n,t){n.Va.Ue(t),_n(n).Z_(t)}function Ao(n){n.Va=new c0({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),_n(n).start(),n.Ra.ua()}function Ro(n){return fr(n)&&!_n(n).x_()&&n.Ia.size>0}function fr(n){return Q(n).Ea.size===0}function sh(n){n.Va=void 0}async function dE(n){n.Ra.set("Online")}async function pE(n){n.Ia.forEach(((t,e)=>{Io(n,t)}))}async function gE(n,t){sh(n),Ro(n)?(n.Ra.ha(t),Ao(n)):n.Ra.set("Unknown")}async function mE(n,t,e){if(n.Ra.set("Online"),t instanceof zl&&t.state===2&&t.cause)try{await(async function(i,o){const a=o.cause;for(const u of o.targetIds)i.Ia.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ia.delete(u),i.Va.removeTarget(u))})(n,t)}catch(r){k(fn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Zu(n,r)}else if(t instanceof zr?n.Va.Ze(t):t instanceof Ul?n.Va.st(t):n.Va.tt(t),!e.isEqual(j.min()))try{const r=await th(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const u=o.Va.Tt(a);return u.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=o.Ia.get(h);d&&o.Ia.set(h,d.withResumeToken(l.resumeToken,a))}})),u.targetMismatches.forEach(((l,h)=>{const d=o.Ia.get(l);if(!d)return;o.Ia.set(l,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),ih(o,l);const p=new fe(d.target,l,h,d.sequenceNumber);Io(o,p)})),o.remoteSyncer.applyRemoteEvent(u)})(n,e)}catch(r){k(fn,"Failed to raise snapshot:",r),await Zu(n,r)}}async function Zu(n,t,e){if(!mn(t))throw t;n.Ea.add(1),await hr(n),n.Ra.set("Offline"),e||(e=()=>th(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{k(fn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Ri(n)}))}async function tc(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),k(fn,"RemoteStore received new credentials");const r=fr(e);e.Ea.add(3),await hr(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Ri(e)}async function _E(n,t){const e=Q(n);t?(e.Ea.delete(2),await Ri(e)):t||(e.Ea.add(2),await hr(e),e.Ra.set("Unknown"))}function _n(n){return n.ma||(n.ma=(function(e,r,i){const o=Q(e);return o.sa(),new uE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:dE.bind(null,n),t_:pE.bind(null,n),r_:gE.bind(null,n),H_:mE.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Ro(n)?Ao(n):n.Ra.set("Unknown")):(await n.ma.stop(),sh(n))}))),n.ma}/**
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
 */class So{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,u=new So(t,e,a,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oh(n,t){if(re("AsyncQueue",`${t}: ${n}`),mn(n))return new L(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class en{static emptySet(t){return new en(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=qn(),this.sortedSet=new st(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof en)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new en;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ec{constructor(){this.ga=new st(F.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):U(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class dn{constructor(t,e,r,i,o,a,u,l,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new dn(t,e,en.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class EE{constructor(){this.queries=nc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=Q(e),o=i.queries;i.queries=nc(),o.forEach(((a,u)=>{for(const l of u.Sa)l.onError(r)}))})(this,new L(D.ABORTED,"Firestore shutting down"))}}function nc(){return new $e((n=>Nl(n)),vi)}async function vE(n,t){const e=Q(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(r=2):(o=new yE,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=oh(a,`Initialization of query '${Ke(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Co(e)}async function wE(n,t){const e=Q(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function TE(n,t){const e=Q(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const u of a.Sa)u.Fa(i)&&(r=!0);a.wa=i}}r&&Co(e)}function IE(n,t,e){const r=Q(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function Co(n){n.Ca.forEach((t=>{t.next()}))}var Us,rc;(rc=Us||(Us={})).Ma="default",rc.Cache="cache";class AE{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new dn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=dn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Us.Cache}}/**
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
 */class ah{constructor(t){this.key=t}}class uh{constructor(t){this.key=t}}class RE{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=kl(t),this.tu=new en(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new ec,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((d,p)=>{const m=i.get(d),w=wi(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;m&&w?m.data.isEqual(w.data)?C!==P&&(r.track({type:3,doc:w}),b=!0):this.su(m,w)||(r.track({type:2,doc:w}),b=!0,(l&&this.eu(w,l)>0||h&&this.eu(w,h)<0)&&(u=!0)):!m&&w?(r.track({type:0,doc:w}),b=!0):m&&!w&&(r.track({type:1,doc:m}),b=!0,(l||h)&&(u=!0)),b&&(w?(a=a.add(w),o=P?o.add(d):o.delete(d)):(a=a.delete(d),o=o.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:u,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((d,p)=>(function(w,C){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Rt:b})}};return P(w)-P(C)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),i=i??!1;const u=e&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new dn(this.query,t.tu,o,a,t.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ec,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=X(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new uh(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new ah(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=X();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return dn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const bo="SyncEngine";class SE{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class CE{constructor(t){this.key=t,this.hu=!1}}class bE{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new $e((u=>Nl(u)),vi),this.Iu=new Map,this.Eu=new Set,this.du=new st(F.comparator),this.Au=new Map,this.Ru=new yo,this.Vu={},this.mu=new Map,this.fu=hn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xE(n,t,e=!0){const r=dh(n);let i;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await ch(r,t,e,!0),i}async function PE(n,t){const e=dh(n);await ch(e,t,!0,!1)}async function ch(n,t,e,r){const i=await Z0(n.localStore,Kt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await VE(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&rh(n.remoteStore,i),u}async function VE(n,t,e,r,i){n.pu=(p,m,w)=>(async function(P,b,N,M){let O=b.view.ru(N);O.Cs&&(O=await Qu(P.localStore,b.query,!1).then((({documents:T})=>b.view.ru(T,O))));const B=M&&M.targetChanges.get(b.targetId),q=M&&M.targetMismatches.get(b.targetId)!=null,$=b.view.applyChanges(O,P.isPrimaryClient,B,q);return sc(P,b.targetId,$.au),$.snapshot})(n,p,m,w);const o=await Qu(n.localStore,t,!0),a=new RE(t,o.Qs),u=a.ru(o.documents),l=lr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),h=a.applyChanges(u,n.isPrimaryClient,l);sc(n,e,h.au);const d=new SE(t,e,a);return n.Tu.set(t,d),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),h.snapshot}async function DE(n,t,e){const r=Q(n),i=r.Tu.get(t),o=r.Iu.get(i.targetId);if(o.length>1)return r.Iu.set(i.targetId,o.filter((a=>!vi(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $s(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&To(r.remoteStore,i.targetId),zs(r,i.targetId)})).catch(gi)):(zs(r,i.targetId),await $s(r.localStore,i.targetId,!0))}async function NE(n,t){const e=Q(n),r=e.Tu.get(t),i=e.Iu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),To(e.remoteStore,r.targetId))}async function lh(n,t){const e=Q(n);try{const r=await Y0(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const a=e.Au.get(o);a&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?nt(a.hu,14607):i.removedDocuments.size>0&&(nt(a.hu,42227),a.hu=!1))})),await fh(e,r,t)}catch(r){await gi(r)}}function ic(n,t,e){const r=Q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,a)=>{const u=a.view.va(t);u.snapshot&&i.push(u.snapshot)})),(function(a,u){const l=Q(a);l.onlineState=u;let h=!1;l.queries.forEach(((d,p)=>{for(const m of p.Sa)m.va(u)&&(h=!0)})),h&&Co(l)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kE(n,t,e){const r=Q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Au.get(t),o=i&&i.key;if(o){let a=new st(F.comparator);a=a.insert(o,Tt.newNoDocument(o,j.min()));const u=X().add(o),l=new Ai(j.min(),new Map,new st(H),a,u);await lh(r,l),r.du=r.du.remove(o),r.Au.delete(t),xo(r)}else await $s(r.localStore,t,!1).then((()=>zs(r,t,e))).catch(gi)}function zs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||hh(n,r)}))}function hh(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(To(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),xo(n))}function sc(n,t,e){for(const r of e)r instanceof ah?(n.Ru.addReference(r.key,t),ME(n,r)):r instanceof uh?(k(bo,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||hh(n,r.key)):U(19791,{wu:r})}function ME(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(k(bo,"New document in limbo: "+e),n.Eu.add(r),xo(n))}function xo(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new F(et.fromString(t)),r=n.fu.next();n.Au.set(r,new CE(e)),n.du=n.du.insert(e,r),rh(n.remoteStore,new fe(Kt(po(e.path)),r,"TargetPurposeLimboResolution",mi.ce))}}async function fh(n,t,e){const r=Q(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((u,l)=>{a.push(r.pu(l,t,e).then((h=>{var d;if((h||e)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=vo.As(l.targetId,h);o.push(p)}})))})),await Promise.all(a),r.Pu.H_(i),await(async function(l,h){const d=Q(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>x.forEach(h,(m=>x.forEach(m.Es,(w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>x.forEach(m.ds,(w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!mn(p))throw p;k(wo,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const w=d.Ms.get(m),C=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(C);d.Ms=d.Ms.insert(m,P)}}})(r.localStore,o))}async function OE(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){k(bo,"User change. New user:",t.toKey());const r=await Zl(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((u=>{u.forEach((l=>{l.reject(new L(D.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await fh(e,r.Ls)}}function LE(n,t){const e=Q(n),r=e.Au.get(t);if(r&&r.hu)return X().add(r.key);{let i=X();const o=e.Iu.get(t);if(!o)return i;for(const a of o){const u=e.Tu.get(a);i=i.unionWith(u.view.nu)}return i}}function dh(n){const t=Q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=lh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=LE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kE.bind(null,t),t.Pu.H_=TE.bind(null,t.eventManager),t.Pu.yu=IE.bind(null,t.eventManager),t}class hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=eh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return X0(this.persistence,new K0,t.initialUser,this.serializer)}Cu(t){return new Jl(Eo.mi,this.serializer)}Du(t){return new eE}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hi.provider={build:()=>new hi};class FE extends hi{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){nt(this.persistence.referenceDelegate instanceof li,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new D0(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new Jl((r=>li.mi(r,e)),this.serializer)}}class Hs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ic(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OE.bind(null,this.syncEngine),await _E(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new EE})()}createDatastore(t){const e=eh(t.databaseInfo.databaseId),r=(function(o){return new oE(o)})(t.databaseInfo);return(function(o,a,u,l){return new lE(o,a,u,l)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,a,u){return new fE(r,i,o,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>ic(this.syncEngine,e,0)),(function(){return Yu.v()?new Yu:new nE})())}createSyncEngine(t,e){return(function(i,o,a,u,l,h,d){const p=new bE(i,o,a,u,l,h);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=Q(i);k(fn,"RemoteStore shutting down."),o.Ea.add(5),await hr(o),o.Aa.shutdown(),o.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Hs.provider={build:()=>new Hs};/**
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
 *//**
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
 */class BE{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):re("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const Ie="FirestoreClient";class qE{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=uo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{k(Ie,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(k(Ie,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=oh(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function us(n,t){n.asyncQueue.verifyOperationInProgress(),k(Ie,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Zl(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function oc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await $E(n);k(Ie,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>tc(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>tc(t.remoteStore,i))),n._onlineComponents=t}async function $E(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(Ie,"Using user provided OfflineComponentProvider");try{await us(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;an("Error using user provided cache. Falling back to memory cache: "+e),await us(n,new hi)}}else k(Ie,"Using default OfflineComponentProvider"),await us(n,new FE(void 0));return n._offlineComponents}async function jE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(Ie,"Using user provided OnlineComponentProvider"),await oc(n,n._uninitializedComponentsProvider._online)):(k(Ie,"Using default OnlineComponentProvider"),await oc(n,new Hs))),n._onlineComponents}async function ac(n){const t=await jE(n),e=t.eventManager;return e.onListen=xE.bind(null,t.syncEngine),e.onUnlisten=DE.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=PE.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=NE.bind(null,t.syncEngine),e}/**
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
 */function ph(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const uc=new Map;/**
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
 */const gh="firestore.googleapis.com",cc=!0;class lc{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new L(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gh,this.ssl=cc}else this.host=t.host,this.ssl=t.ssl??cc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Yl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<P0)throw new L(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ly("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ph(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Po{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Z_;switch(r.type){case"firstParty":return new ry(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=uc.get(e);r&&(k("ComponentProvider","Removing Datastore"),uc.delete(e),r.terminate())})(this),Promise.resolve()}}function UE(n,t,e,r={}){var h;n=$r(n,Po);const i=so(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;i&&(Sm(`https://${u}`),Pm("Firestore",!0)),o.host!==gh&&o.host!==u&&an("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...o,host:u,ssl:i,emulatorOptions:r};if(!ni(l,a)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=wt.MOCK_USER;else{d=Cm(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new L(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new wt(m)}n._authCredentials=new ty(new vl(d,p))}}/**
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
 */class Si{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Si(this.firestore,t,this._query)}}class St{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new St(this.firestore,t,this._key)}toJSON(){return{type:St._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(ur(e,St._jsonSchema))return new St(t,r||null,new F(et.fromString(e.referencePath)))}}St._jsonSchemaVersion="firestore/documentReference/1.0",St._jsonSchema={type:ut("string",St._jsonSchemaVersion),referencePath:ut("string")};class sr extends Si{constructor(t,e,r){super(t,e,po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new St(this.firestore,null,new F(t))}withConverter(t){return new sr(this.firestore,t,this._path)}}function zE(n,t,...e){if(n=ol(n),arguments.length===1&&(t=uo.newId()),cy("doc","path",t),n instanceof Po){const r=et.fromString(t,...e);return Tu(r),new St(n,null,new F(r))}{if(!(n instanceof St||n instanceof sr))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Tu(r),new St(n.firestore,n instanceof sr?n.converter:null,new F(r))}}/**
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
 */const hc="AsyncQueue";class fc{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nh(this,"async_queue_retry"),this._c=()=>{const r=as();r&&k(hc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=as();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=as();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Ze;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!mn(t))throw t;k(hc,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,re("INTERNAL UNHANDLED ERROR: ",dc(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=So.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&U(47125,{Pc:dc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function dc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
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
 */function pc(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1})(n,["next","error","complete"])}class Gs extends Po{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new fc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new fc(t),this._firestoreClient=void 0,await t}}}function HE(n,t){const e=typeof n=="object"?n:q_(),r=typeof n=="string"?n:si,i=M_(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Am("firestore");o&&UE(i,...o)}return i}function GE(n){if(n._terminated)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KE(n),n._firestoreClient}function KE(n){var r,i,o;const t=n._freezeSettings(),e=(function(u,l,h,d){return new Ay(u,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ph(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new qE(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class Ht{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ht(_t.fromBase64String(t))}catch(e){throw new L(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ht(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ur(t,Ht._jsonSchema))return Ht.fromBase64String(t.bytes)}}Ht._jsonSchemaVersion="firestore/bytes/1.0",Ht._jsonSchema={type:ut("string",Ht._jsonSchemaVersion),bytes:ut("string")};/**
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
 */class mh{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class me{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:me._jsonSchemaVersion}}static fromJSON(t){if(ur(t,me._jsonSchema))return new me(t.latitude,t.longitude)}}me._jsonSchemaVersion="firestore/geoPoint/1.0",me._jsonSchema={type:ut("string",me._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _e{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:_e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ur(t,_e._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new _e(t.vectorValues);throw new L(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_e._jsonSchemaVersion="firestore/vectorValue/1.0",_e._jsonSchema={type:ut("string",_e._jsonSchemaVersion),vectorValues:ut("object")};const QE=new RegExp("[~\\*/\\[\\]]");function WE(n,t,e){if(t.search(QE)>=0)throw gc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new mh(...t.split("."))._internalPath}catch{throw gc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function gc(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new L(D.INVALID_ARGUMENT,o+n+a)}/**
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
 */class _h{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new XE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(yh("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class XE extends _h{data(){return super.data()}}function yh(n,t){return typeof t=="string"?WE(n,t):t instanceof mh?t._internalPath:t._delegate._internalPath}/**
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
 */function YE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class JE{convertValue(t,e="none"){switch(we(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ve(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw U(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return cr(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){var r,i,o;const e=(o=(i=(r=t.fields)==null?void 0:r[Vs].arrayValue)==null?void 0:i.values)==null?void 0:o.map((a=>it(a.doubleValue)));return new _e(e)}convertGeoPoint(t){return new me(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=yi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(nr(t));default:return null}}convertTimestamp(t){const e=Ee(t);return new at(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);nt(Xl(r),9688,{name:t});const i=new rr(r.get(1),r.get(3)),o=new F(r.popFirst(5));return i.isEqual(e)||re(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class jn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Oe extends _h{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Hr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(yh("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Oe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Oe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Oe._jsonSchema={type:ut("string",Oe._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Hr extends Oe{data(t={}){return super.data(t)}}class nn{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new jn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Hr(this._firestore,this._userDataWriter,r.key,r,new jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((u=>{const l=new Hr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new jn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const l=new Hr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new jn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),d=a.indexOf(u.doc.key)),{type:ZE(u.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=nn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=uo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ZE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}nn._jsonSchemaVersion="firestore/querySnapshot/1.0",nn._jsonSchema={type:ut("string",nn._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class Eh extends JE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ht(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new St(this.firestore,null,e)}}function tv(n,...t){var l,h,d;n=ol(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||pc(t[r])||(e=t[r++]);const i={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(pc(t[r])){const p=t[r];t[r]=(l=p.next)==null?void 0:l.bind(p),t[r+1]=(h=p.error)==null?void 0:h.bind(p),t[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let o,a,u;if(n instanceof St)a=$r(n.firestore,Gs),u=po(n._key.path),o={next:p=>{t[r]&&t[r](ev(a,n,p))},error:t[r+1],complete:t[r+2]};else{const p=$r(n,Si);a=$r(p.firestore,Gs),u=p._query;const m=new Eh(a);o={next:w=>{t[r]&&t[r](new nn(a,m,p,w))},error:t[r+1],complete:t[r+2]},YE(n._query)}return(function(m,w,C,P){const b=new BE(P),N=new AE(w,b,C);return m.asyncQueue.enqueueAndForget((async()=>vE(await ac(m),N))),()=>{b.Nu(),m.asyncQueue.enqueueAndForget((async()=>wE(await ac(m),N)))}})(GE(a),u,i,o)}function ev(n,t,e){const r=e.docs.get(t._key),i=new Eh(n);return new Oe(n,i,t._key,r,new jn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){gn=i})(B_),ii(new Zn("firestore",((r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Gs(new ey(r.getProvider("auth-internal")),new iy(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(h.options.projectId,d)})(a,i),a);return o={useFetchStreams:e,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),Je(yu,Eu,t),Je(yu,Eu,"esm2020")})();const nv={apiKey:"AIzaSyCbBOWSmE1RhfGsdzij2FNQBMuTOs3vrdg",authDomain:"ril-gp.firebaseapp.com",databaseURL:"https://ril-gp-default-rtdb.firebaseio.com",projectId:"ril-gp",storageBucket:"ril-gp.firebasestorage.app",messagingSenderId:"105298276512",appId:"1:105298276512:web:18c9b60e5380a5cc0cd9c5",measurementId:"G-E03RXTETYY"},rv=ll(nv),iv=HE(rv);function sv(n=new Date){const t=n.getFullYear(),e=n.getMonth()+1,r=n.getDate();return e>10||e===10&&r>=15?`${t}_${String(t+1).slice(2)}`:`${t-1}_${String(t).slice(2)}`}function ov(n,t){const e=sv(),r=zE(iv,"stations",n,"seasons",e);return tv(r,o=>{if(o.exists()){const a=o.data();av(a,t)}else console.log("No season data found for",e),t(null)},o=>{console.error("Firestore subscription error:",o)})}function av(n,t){const e=n.observed||{},r=n.latestObservedKey,i=[];let o=null;Object.keys(e).forEach(h=>{const d=e[h],p={date:h,dj:d.dj,q:d.q,phase:d.phase};h===r?o=p:i.push(p)});const a=n.prediction||{},u=a.values||{},l=Object.keys(u).sort().map(h=>{const d=u[h];return{date:h,dj:d.dj,q:d.q,q25:d.p25,q75:d.p75,phase:a.phase}});t({historical:i,latest:o,prediction:l})}let Jt=!1,W=null,te=null;function Vo(){const n=document.getElementById("pointStatus");if(!W){n.textContent="No point selected.",document.getElementById("ptDj").value="",document.getElementById("ptQ").value="";return}const t=Le[W.riverKey],e=W.panelKey==="djgc"?"DJGC–Q panel":"DJDC-5–Q panel",r=W.zone==="greenYellow"?"green/yellow boundary":"yellow/red boundary";n.textContent=`Selected: ${t.label} – ${e}, ${r}, point #${W.index+1}`}function Zt(n){W=n;const t=Le[n.riverKey],i=(n.panelKey==="djgc"?t.djgcZones:t.djdcZones)[n.zone][n.index];document.getElementById("ptDj").value=i.dj,document.getElementById("ptQ").value=i.q,Vo(),De(W,Jt,Zt,te)}async function mc(n){const t=Le[n];t&&(document.getElementById("qMin").value=t.qMin,document.getElementById("qMax").value=t.qMax,document.getElementById("djgcMax").value=t.djgcMax,document.getElementById("djdcMax").value=t.djdcMax,document.getElementById("qBankfull").value=t.qBankfull,W=null,Vo(),n==="lassomption"?ov(n,e=>{te=e,De(W,Jt,Zt,te)}):te=null,De(W,Jt,Zt,te))}document.addEventListener("DOMContentLoaded",()=>{mc("lassomption"),document.getElementById("riverSelect").addEventListener("change",n=>mc(n.target.value)),document.getElementById("drawBtn").addEventListener("click",()=>{De(W,Jt,Zt,te)}),document.getElementById("showPointsBtn").addEventListener("click",()=>{Jt=!0,De(W,Jt,Zt,te)}),document.getElementById("hidePointsBtn").addEventListener("click",()=>{Jt=!1,W=null,Vo(),De(W,Jt,Zt,te)}),document.getElementById("updatePointBtn").addEventListener("click",()=>{if(!W){alert("No point selected.");return}const n=parseFloat(document.getElementById("ptDj").value),t=parseFloat(document.getElementById("ptQ").value);if(isNaN(n)||isNaN(t)){alert("Please enter valid numeric values for DJ and Q.");return}const e=Le[W.riverKey],i=(W.panelKey==="djgc"?e.djgcZones:e.djdcZones)[W.zone];if(!i||W.index<0||W.index>=i.length){alert("Internal error: point not found.");return}i[W.index]={dj:n,q:t},De(W,Jt,Zt,te)}),document.getElementById("moveLeftBtn").addEventListener("click",()=>{W&&W.index>0&&Zt({...W,index:W.index-1})}),document.getElementById("moveRightBtn").addEventListener("click",()=>{if(!W)return;const n=Le[W.riverKey],e=(W.panelKey==="djgc"?n.djgcZones:n.djdcZones)[W.zone];e&&W.index<e.length-1&&Zt({...W,index:W.index+1})})});
