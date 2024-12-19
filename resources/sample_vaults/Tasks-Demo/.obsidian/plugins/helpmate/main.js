"use strict";var le=Object.defineProperty;var nt=Object.getOwnPropertyDescriptor;var ot=Object.getOwnPropertyNames;var it=Object.prototype.hasOwnProperty;var rt=(t,e)=>{for(var n in e)le(t,n,{get:e[n],enumerable:!0})},st=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ot(e))!it.call(t,i)&&i!==n&&le(t,i,{get:()=>e[i],enumerable:!(o=nt(e,i))||o.enumerable});return t};var lt=t=>st(le({},"__esModule",{value:!0}),t);var Ut={};rt(Ut,{default:()=>re});module.exports=lt(Ut);var tt=require("obsidian");var x=t=>{try{return new URL(t.trim()),!0}catch(e){return!1}},E=t=>{let e=Object.values(t.app.plugins.manifests).filter(l=>l.helpUrl&&l.id!==t.APP_ID).map(l=>{var c;return{id:l.id,name:l.name,url:(c=l.helpUrl)!=null?c:""}}),n=t.settings.userResources.split(`
`);for(let l of n)if(l.trim()!==""){let[c,u]=l.split("|");c&&u&&x(u)&&e.push({id:c,name:c,url:u})}let o=Object.values(t.app.customCss.themes).filter(l=>l.helpUrl).map(l=>({id:l.name,name:l.name,url:l.helpUrl?l.helpUrl:""}));for(let l of o)l.name&&l.url&&x(l.url)&&e.push({id:l.name,name:l.name,url:l.url});let i=/\[helpUrl:(.+?)\|(.+?)\]/;for(let[l,c]of t.app.customCss.csscache.entries()){let u=c.match(i);if(u){let p=u[1].trim(),d=u[2].trim();p&&d&&x(d)&&e.push({id:p,name:p,url:d})}}let r=e.sort((l,c)=>l.name.localeCompare(c.name));return t.settings.includeObsidianDevHelp&&t.settings.obsidianDevHelpUrl&&x(t.settings.obsidianDevHelpUrl)&&r.unshift({id:"obsidian-dev",name:"Obsidian Developer Help",url:t.settings.obsidianDevHelpUrl}),t.settings.includeObsidianHelp&&t.settings.obsidianHelpUrl&&x(t.settings.obsidianHelpUrl)&&r.unshift({id:"obsidian",name:"Obsidian Help",url:t.settings.obsidianHelpUrl}),t.settings.includeHelpMateHelp&&r.push({id:"helpmate",name:"HelpMate Help",url:"https://tfthacker.com/HelpMate"}),r};var N=class{constructor(e){this.enableDebugging={webViewBrowser:!1,iFrameBrowser:!0};this.log=(e,...n)=>{console.log(`HelpMate: ${e}`,n)};this.activateSidePane=async e=>{e?await this.plugin.activateView(e):await this.plugin.activateView()};this.getPluginHelpList=()=>E(this.plugin);this.plugin=e,this.settings=e.settings}};var Y,h,Me,at,A,ye,Ce,ae,pe,ce,ue,ct,O={},xe=[],ut=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_e=Array.isArray;function T(t,e){for(var n in e)t[n]=e[n];return t}function Ee(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e,n){var o,i,r,l={};for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?Y.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)l[r]===void 0&&(l[r]=t.defaultProps[r]);return K(t,l,o,i,null)}function K(t,e,n,o,i){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i==null?++Me:i,__i:-1,__u:0};return i==null&&h.vnode!=null&&h.vnode(r),r}function F(t){return t.children}function z(t,e){this.props=t,this.context=e}function I(t,e){if(e==null)return t.__?I(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?I(t):null}function Ue(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Ue(t)}}function He(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!Z.__r++||ye!==h.debounceRendering)&&((ye=h.debounceRendering)||Ce)(Z)}function Z(){var t,e,n,o,i,r,l,c;for(A.sort(ae);t=A.shift();)t.__d&&(e=A.length,o=void 0,r=(i=(n=t).__v).__e,l=[],c=[],n.__P&&((o=T({},i)).__v=i.__v+1,h.vnode&&h.vnode(o),de(n.__P,o,i,n.__n,n.__P.namespaceURI,32&i.__u?[r]:null,l,r==null?I(i):r,!!(32&i.__u),c),o.__v=i.__v,o.__.__k[o.__i]=o,Se(l,o,c),o.__e!=r&&Ue(o)),A.length>e&&A.sort(ae));Z.__r=0}function Te(t,e,n,o,i,r,l,c,u,p,d){var s,f,_,m,H,b=o&&o.__k||xe,g=e.length;for(n.__d=u,_t(n,e,b),u=n.__d,s=0;s<g;s++)(_=n.__k[s])!=null&&(f=_.__i===-1?O:b[_.__i]||O,_.__i=s,de(t,_,f,i,r,l,c,u,p,d),m=_.__e,_.ref&&f.ref!=_.ref&&(f.ref&&me(f.ref,null,_),d.push(_.ref,_.__c||m,_)),H==null&&m!=null&&(H=m),65536&_.__u||f.__k===_.__k?u=Le(_,u,t):typeof _.type=="function"&&_.__d!==void 0?u=_.__d:m&&(u=m.nextSibling),_.__d=void 0,_.__u&=-196609);n.__d=u,n.__e=H}function _t(t,e,n){var o,i,r,l,c,u=e.length,p=n.length,d=p,s=0;for(t.__k=[],o=0;o<u;o++)(i=e[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(l=o+s,(i=t.__k[o]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?K(null,i,null,null,null):_e(i)?K(F,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?K(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=t,i.__b=t.__b+1,r=null,(c=i.__i=dt(i,n,l,d))!==-1&&(d--,(r=n[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&s--,typeof i.type!="function"&&(i.__u|=65536)):c!==l&&(c==l-1?s--:c==l+1?s++:(c>l?s--:s++,i.__u|=65536))):i=t.__k[o]=null;if(d)for(o=0;o<p;o++)(r=n[o])!=null&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=I(r)),Ae(r,r))}function Le(t,e,n){var o,i;if(typeof t.type=="function"){for(o=t.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=t,e=Le(o[i],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=I(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function dt(t,e,n,o){var i=t.key,r=t.type,l=n-1,c=n+1,u=e[n];if(u===null||u&&i==u.key&&r===u.type&&!(131072&u.__u))return n;if(o>(u!=null&&!(131072&u.__u)?1:0))for(;l>=0||c<e.length;){if(l>=0){if((u=e[l])&&!(131072&u.__u)&&i==u.key&&r===u.type)return l;l--}if(c<e.length){if((u=e[c])&&!(131072&u.__u)&&i==u.key&&r===u.type)return c;c++}}return-1}function ke(t,e,n){e[0]==="-"?t.setProperty(e,n==null?"":n):t[e]=n==null?"":typeof n!="number"||ut.test(e)?n:n+"px"}function G(t,e,n,o,i){var r;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||ke(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||ke(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o?n.u=o.u:(n.u=pe,t.addEventListener(e,r?ue:ce,r)):t.removeEventListener(e,r?ue:ce,r);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n==null?"":n;break e}catch(l){}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function Pe(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=pe++;else if(e.t<n.u)return;return n(h.event?h.event(e):e)}}}function de(t,e,n,o,i,r,l,c,u,p){var d,s,f,_,m,H,b,g,v,U,P,S,R,we,j,se,C=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),r=[c=e.__e=n.__e]),(d=h.__b)&&d(e);e:if(typeof C=="function")try{if(g=e.props,v="prototype"in C&&C.prototype.render,U=(d=C.contextType)&&o[d.__c],P=d?U?U.props.value:d.__:o,n.__c?b=(s=e.__c=n.__c).__=s.__E:(v?e.__c=s=new C(g,P):(e.__c=s=new z(g,P),s.constructor=C,s.render=ft),U&&U.sub(s),s.props=g,s.state||(s.state={}),s.context=P,s.__n=o,f=s.__d=!0,s.__h=[],s._sb=[]),v&&s.__s==null&&(s.__s=s.state),v&&C.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=T({},s.__s)),T(s.__s,C.getDerivedStateFromProps(g,s.__s))),_=s.props,m=s.state,s.__v=e,f)v&&C.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),v&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(v&&C.getDerivedStateFromProps==null&&g!==_&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,P),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,P)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(s.props=g,s.state=s.__s,s.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(q){q&&(q.__=e)}),S=0;S<s._sb.length;S++)s.__h.push(s._sb[S]);s._sb=[],s.__h.length&&l.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,P),v&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(_,m,H)})}if(s.context=P,s.props=g,s.__P=t,s.__e=!1,R=h.__r,we=0,v){for(s.state=s.__s,s.__d=!1,R&&R(e),d=s.render(s.props,s.state,s.context),j=0;j<s._sb.length;j++)s.__h.push(s._sb[j]);s._sb=[]}else do s.__d=!1,R&&R(e),d=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++we<25);s.state=s.__s,s.getChildContext!=null&&(o=T(T({},o),s.getChildContext())),v&&!f&&s.getSnapshotBeforeUpdate!=null&&(H=s.getSnapshotBeforeUpdate(_,m)),Te(t,_e(se=d!=null&&d.type===F&&d.key==null?d.props.children:d)?se:[se],e,n,o,i,r,l,c,u,p),s.base=e.__e,e.__u&=-161,s.__h.length&&l.push(s),b&&(s.__E=s.__=null)}catch(q){if(e.__v=null,u||r!=null){for(e.__u|=u?160:128;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;r[r.indexOf(c)]=null,e.__e=c}else e.__e=n.__e,e.__k=n.__k;h.__e(q,e,n)}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=mt(n.__e,e,n,o,i,r,l,u,p);(d=h.diffed)&&d(e)}function Se(t,e,n){e.__d=void 0;for(var o=0;o<n.length;o++)me(n[o],n[++o],n[++o]);h.__c&&h.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){h.__e(r,i.__v)}})}function mt(t,e,n,o,i,r,l,c,u){var p,d,s,f,_,m,H,b=n.props,g=e.props,v=e.type;if(v==="svg"?i="http://www.w3.org/2000/svg":v==="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(p=0;p<r.length;p++)if((_=r[p])&&"setAttribute"in _==!!v&&(v?_.localName===v:_.nodeType===3)){t=_,r[p]=null;break}}if(t==null){if(v===null)return document.createTextNode(g);t=document.createElementNS(i,v,g.is&&g),c&&(h.__m&&h.__m(e,r),c=!1),r=null}if(v===null)b===g||c&&t.data===g||(t.data=g);else{if(r=r&&Y.call(t.childNodes),b=n.props||O,!c&&r!=null)for(b={},p=0;p<t.attributes.length;p++)b[(_=t.attributes[p]).name]=_.value;for(p in b)if(_=b[p],p!="children"){if(p=="dangerouslySetInnerHTML")s=_;else if(!(p in g)){if(p=="value"&&"defaultValue"in g||p=="checked"&&"defaultChecked"in g)continue;G(t,p,null,_,i)}}for(p in g)_=g[p],p=="children"?f=_:p=="dangerouslySetInnerHTML"?d=_:p=="value"?m=_:p=="checked"?H=_:c&&typeof _!="function"||b[p]===_||G(t,p,_,b[p],i);if(d)c||s&&(d.__html===s.__html||d.__html===t.innerHTML)||(t.innerHTML=d.__html),e.__k=[];else if(s&&(t.innerHTML=""),Te(t,_e(f)?f:[f],e,n,o,v==="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,l,r?r[0]:n.__k&&I(n,0),c,u),r!=null)for(p=r.length;p--;)Ee(r[p]);c||(p="value",v==="progress"&&m==null?t.removeAttribute("value"):m!==void 0&&(m!==t[p]||v==="progress"&&!m||v==="option"&&m!==b[p])&&G(t,p,m,b[p],i),p="checked",H!==void 0&&H!==t[p]&&G(t,p,H,b[p],i))}return t}function me(t,e,n){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&e==null||(t.__u=t(e))}else t.current=e}catch(i){h.__e(i,n)}}function Ae(t,e,n){var o,i;if(h.unmount&&h.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||me(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){h.__e(r,e)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&Ae(o[i],e,n||typeof t.type!="function");n||Ee(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function ft(t,e,n){return this.constructor(t,n)}function B(t,e,n){var o,i,r,l;h.__&&h.__(t,e),i=(o=typeof n=="function")?null:n&&n.__k||e.__k,r=[],l=[],de(e,t=(!o&&n||e).__k=pt(F,null,[t]),i||O,O,e.namespaceURI,!o&&n?[n]:i?null:e.firstChild?Y.call(e.childNodes):null,r,!o&&n?n:i?i.__e:e.firstChild,o,l),Se(r,t,l)}Y=xe.slice,h={__e:function(t,e,n,o){for(var i,r,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,o||{}),l=i.__d),l)return i.__E=i}catch(c){t=c}throw t}},Me=0,at=function(t){return t!=null&&t.constructor==null},z.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=T({},this.state),typeof t=="function"&&(t=t(T({},n),this.props)),t&&T(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),He(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),He(this))},z.prototype.render=F,A=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ae=function(t,e){return t.__v.__b-e.__v.__b},Z.__r=0,pe=0,ce=Pe(!1),ue=Pe(!0),ct=0;var Ye=require("obsidian");var W,w,fe,Ie,Q=0,We=[],y=h,Fe=y.__b,Be=y.__r,De=y.diffed,Ve=y.__c,Re=y.unmount,Ne=y.__;function ge(t,e){y.__h&&y.__h(w,t,Q||e),Q=0;var n=w.__H||(w.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function k(t){return Q=1,ht(je,t)}function ht(t,e,n){var o=ge(W++,2);if(o.t=t,!o.__c&&(o.__=[n?n(e):je(void 0,e),function(c){var u=o.__N?o.__N[0]:o.__[0],p=o.t(u,c);u!==p&&(o.__N=[p,o.__[1]],o.__c.setState({}))}],o.__c=w,!w.u)){var i=function(c,u,p){if(!o.__c.__H)return!0;var d=o.__c.__H.__.filter(function(f){return!!f.__c});if(d.every(function(f){return!f.__N}))return!r||r.call(this,c,u,p);var s=!1;return d.forEach(function(f){if(f.__N){var _=f.__[0];f.__=f.__N,f.__N=void 0,_!==f.__[0]&&(s=!0)}}),!(!s&&o.__c.props===c)&&(!r||r.call(this,c,u,p))};w.u=!0;var r=w.shouldComponentUpdate,l=w.componentWillUpdate;w.componentWillUpdate=function(c,u,p){if(this.__e){var d=r;r=void 0,i(c,u,p),r=d}l&&l.call(this,c,u,p)},w.shouldComponentUpdate=i}return o.__N||o.__}function D(t,e){var n=ge(W++,3);!y.__s&&$e(n.__H,e)&&(n.__=t,n.i=e,w.__H.__h.push(n))}function L(t){return Q=5,gt(function(){return{current:t}},[])}function gt(t,e){var n=ge(W++,7);return $e(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function vt(){for(var t;t=We.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(J),t.__H.__h.forEach(he),t.__H.__h=[]}catch(e){t.__H.__h=[],y.__e(e,t.__v)}}y.__b=function(t){w=null,Fe&&Fe(t)},y.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Ne&&Ne(t,e)},y.__r=function(t){Be&&Be(t),W=0;var e=(w=t.__c).__H;e&&(fe===w?(e.__h=[],w.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(J),e.__h.forEach(he),e.__h=[],W=0)),fe=w},y.diffed=function(t){De&&De(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(We.push(e)!==1&&Ie===y.requestAnimationFrame||((Ie=y.requestAnimationFrame)||bt)(vt)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),fe=w=null},y.__c=function(t,e){e.some(function(n){try{n.__h.forEach(J),n.__h=n.__h.filter(function(o){return!o.__||he(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],y.__e(o,n.__v)}}),Ve&&Ve(t,e)},y.unmount=function(t){Re&&Re(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{J(o)}catch(i){e=i}}),n.__H=void 0,e&&y.__e(e,n.__v))};var Oe=typeof requestAnimationFrame=="function";function bt(t){var e,n=function(){clearTimeout(o),Oe&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);Oe&&(e=requestAnimationFrame(n))}function J(t){var e=w,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),w=e}function he(t){var e=w;t.__c=t.__(),w=e}function $e(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function je(t,e){return typeof e=="function"?e(t):e}var wt=0,Vt=Array.isArray;function a(t,e,n,o,i,r){e||(e={});var l,c,u=e;"ref"in e&&(l=e.ref,delete e.ref);var p={type:t,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--wt,__i:-1,__u:0,__source:i,__self:r};if(typeof t=="function"&&(l=t.defaultProps))for(c in l)u[c]===void 0&&(u[c]=l[c]);return h.vnode&&h.vnode(p),p}var yt=({onAcknowledge:t,plugin:e})=>{let[n,o]=k(!1);return a("div",{class:"hm-acknowledge-message",children:[a("p",{children:[" ","HelpMate displays the help content from websites in the sidepane. Please keep in mind that this help content is coming from the web and you are responsible to verify that the sites are safe."]}),a("p",{children:"Please check the Acknowledge checkbox to proceed."}),a("input",{type:"checkbox",checked:n,onChange:()=>{o(!n)}}),a("label",{htmlFor:"acknowledge-checkbox",children:"Acknowledge this message"}),a("br",{}),a("br",{}),a("button",{type:"button",onClick:()=>{n?(e.settings.acknowledgedWebUse=!0,e.saveSettings(),t(!0)):alert("Please check the Acknowledge checkbox to proceed")},children:"Proceed"})]})},qe=yt;var Ge=require("obsidian");var Ht=({currentUrl:t,plugin:e})=>{let[n,o]=k(!1),i=L(null),r=[{name:"Open site in browser",index:0,command:()=>{window.open(t)}},{name:"Code block from site",index:1,command:async()=>{let u=`\`\`\`helpmate
url: ${t}
height: 800px
toolbar: false
\`\`\`


`,d=`codeblock ${Math.floor(Math.random()*9001)+100}.md`;await e.app.vault.create(d,u).then(async s=>{await e.app.workspace.getLeaf().openFile(s)})}},{name:"Plugin settings",index:2,command:()=>{let u=e.app.setting;u.open(),u.openTabById(e.APP_ID)}}],l=u=>{o(!1),r[u].command()},c=()=>{o(!n)};return D(()=>{let u=p=>{i.current&&!i.current.contains(p.target)&&o(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]),a("div",{className:"hm-more-button",ref:i,children:[a("button",{type:"button",onClick:c,class:"hm-view-browser-toolbar-button",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-cog",children:[a("title",{children:"More"}),a("path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}),a("path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}),a("path",{d:"M12 2v2"}),a("path",{d:"M12 22v-2"}),a("path",{d:"m17 20.66-1-1.73"}),a("path",{d:"M11 10.27 7 3.34"}),a("path",{d:"m20.66 17-1.73-1"}),a("path",{d:"m3.34 7 1.73 1"}),a("path",{d:"M14 12h8"}),a("path",{d:"M2 12h2"}),a("path",{d:"m20.66 7-1.73 1"}),a("path",{d:"m3.34 17 1.73-1"}),a("path",{d:"m17 3.34-1 1.73"}),a("path",{d:"m11 13.73-4 6.93"})]})}),n&&a("ul",{className:"hm-more-button-dropdown-menu hm-button-dropdown-menu",children:r.map(u=>a("li",{onClick:()=>{l(u.index)},class:"hm-source-button-list-item",children:u.name},u.index))})]})},X=Ht;var kt=({setSelectedUrl:t,plugin:e})=>{let[n,o]=k(!1),i=L(null),r=E(e),l=()=>{o(!n)},c=u=>{o(!1),t(r[u].url)};return D(()=>{let u=p=>{i.current&&!i.current.contains(p.target)&&o(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]),a("div",{className:"hm-source-button",ref:i,children:[a("button",{type:"button",onClick:l,class:"hm-view-browser-toolbar-button",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-bookmark-check",children:[a("title",{children:"Select help source"}),a("path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}),a("path",{d:"m9 10 2 2 4-4"})]})}),n&&a("ul",{className:"hm-source-button-dropdown-menu hm-button-dropdown-menu",children:r.map((u,p)=>a("li",{onClick:()=>{c(p)},class:"hm-source-button-list-item",children:u.name},p))})]})},ee=kt;var Pt=({urlAddress:t,plugin:e,showToolbar:n=!0})=>{let o=e.HELPMATE_API,i=o.enableDebugging.iFrameBrowser,r=L(null),[l,c]=k(t||""),[u,p]=k(t||""),d=_=>{let m=_.trim();!m.startsWith("http://")&&!m.startsWith("https://")&&(m=`https://${_}`),x(m)?(c(m),p(m)):new Ge.Notice(`Invalid URL ${m}`)};return a("div",{class:"hm-view-browser",children:[n&&a("div",{class:"hm-view-browser-toolbar",children:[a(ee,{setSelectedUrl:d,plugin:e}),a("input",{class:"hm-view-browser-toolbar-input",type:"text",value:l,onKeyPress:_=>{if(_.key==="Enter"){let m=_.target.value;d(m)}},onChange:_=>{c(_.target.value)},placeholder:"Enter URL"}),a("button",{type:"button",onClick:()=>{r.current&&(i&&o.log("IFrameBrowser: navigateTo",l),d(l))},class:"hm-view-browser-toolbar-button","aria-label":"Navigate To",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-arrow-right-square",children:[a("title",{children:"Navigate to"}),a("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),a("path",{d:"M8 12h8"}),a("path",{d:"m12 16 4-4-4-4"})]})}),a(X,{currentUrl:u,plugin:e})]}),a("iframe",{ref:r,src:u,class:"hm-view-browser-iframe",title:"IFrame Browser Content"})]})},Ke=Pt;var ze=require("obsidian");var te=18,Mt=({urlAddress:t,plugin:e,showToolbar:n=!0})=>{let[o,i]=k(t||""),r=e.HELPMATE_API,l=r.enableDebugging.webViewBrowser,c=L(null),u=(m,H)=>{c.current&&(l&&r.log(`WebViewBrowser: ${H}`,c.current.getURL()),c.current[m]())},p=()=>{u("goBack","goBack")},d=()=>{u("goForward","goForward")},s=()=>{var m;if(l&&r.log("WebViewBrowser: navigateTo",o),!o.trim().startsWith("http://")&&!o.trim().startsWith("https://")){let H=`https://${o.trim()}`;x(H)&&i(H)}x(o.trim())?(m=c.current)==null||m.loadURL(o.trim()):new ze.Notice(`Invalid URL ${o}`)},f=m=>{m.key==="Enter"&&s()},_=m=>{i(m.target.value)};return D(()=>{var H;let m=()=>{l&&r.log("WebViewBrowser: dom-ready",c.current);let b=g=>{var v;(v=c.current)==null||v.addEventListener(g,()=>{var U,P,S;l&&r.log(`WebViewBrowser: ${g}`,(U=c.current)==null?void 0:U.getURL()),i((S=(P=c.current)==null?void 0:P.getURL())!=null?S:"")})};b("did-navigate-in-page"),b("did-navigate")};return(H=c.current)==null||H.addEventListener("dom-ready",m),()=>{var b;return(b=c.current)==null?void 0:b.removeEventListener("dom-ready",m)}},[l,r.log]),a("div",{class:"hm-view-browser",children:[n&&a("div",{class:"hm-view-browser-toolbar",children:[a(ee,{setSelectedUrl:i,plugin:e}),a("input",{type:"text",value:o,onChange:_,onKeyUp:f,placeholder:"Enter URL",class:"hm-view-browser-toolbar-input"}),a("button",{type:"button",onClick:s,class:"hm-view-browser-toolbar-button","aria-label":"Navigate To",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-arrow-right-square",children:[a("title",{children:"Navigate to"}),a("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),a("path",{d:"M8 12h8"}),a("path",{d:"m12 16 4-4-4-4"})]})}),a("button",{type:"button",onClick:p,class:"hm-view-browser-toolbar-button","aria-label":"Go Back",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",width:te,height:te,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-chevron-left",children:[a("title",{children:"Go back"}),a("path",{d:"m15 18-6-6 6-6"})]})}),a("button",{type:"button",onClick:d,class:"hm-view-browser-toolbar-button","aria-label":"Go Forward",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",width:te,height:te,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-chevron-right",children:[a("title",{children:"Go forward"}),a("path",{d:"m9 18 6-6-6-6"})]})}),a(X,{currentUrl:o,plugin:e})]}),a("webview",{ref:c,src:o,class:"hm-view-browser-webframe",enableblinkfeatures:"AutoDarkMode"})]})},Ze=Mt;var Ct=({urlAddress:t,plugin:e,showToolbar:n=!0})=>{let o=e.settings.forceIframe?"IFrame":Ye.Platform.isDesktop?"WebView":"IFrame",[i,r]=k(e.settings.acknowledgedWebUse);return i?o==="WebView"?a(Ze,{urlAddress:t,plugin:e,showToolbar:n}):a(Ke,{urlAddress:t,plugin:e,showToolbar:n}):a(qe,{onAcknowledge:r,plugin:e})},ne=Ct;function Je(t,e,n,o){let i=400,r=E(t)[0].url,l=!0,c=e.split(`
`);for(let u of c){let[p,d]=u.split(": ");switch(p){case"url":r=d;break;case"height":i=Number.parseInt(d);break;case"toolbar":l=d.toLowerCase()==="true";break;default:break}}B(a("div",{style:{height:i},children:a(ne,{plugin:t,urlAddress:r,showToolbar:l})}),n)}var M=require("obsidian");var Qe=t=>{t.addCommand({id:"open-helpmate",name:"Open sidepane",callback:()=>t.activateView()}),ve(t)},ve=t=>{for(let e of Object.values(t.app.commands.commands))e.helpmate&&t.app.commands.removeCommand(e.id);for(let e of E(t))t.addCommand({id:e.id,name:`view: ${e.name}`,callback:()=>t.activateView(e.url),helpmate:!0})};var V={acknowledgedWebUse:!1,includeObsidianHelp:!0,obsidianHelpUrl:"https://help.obsidian.md",includeObsidianDevHelp:!0,obsidianDevHelpUrl:"https://docs.obsidian.md/Home",includeHelpMateHelp:!0,userResources:"",forceIframe:!1};var oe=class extends M.PluginSettingTab{constructor(e,n){super(e,n),this.plugin=n}display(){let{containerEl:e}=this;e.empty(),new M.Setting(e).setName("Enable Obsidian's help in HelpMate").setDesc("Show Obsidian's native help.").addToggle(o=>{o.setValue(this.plugin.settings.includeObsidianHelp),o.onChange(async i=>{this.plugin.settings.includeObsidianHelp=i,await this.plugin.saveSettings()})}),new M.Setting(e).setName("Obsidian Help URL").setDesc("URL to use for Obsidian help. This can be changed to a different URL for other languages.").addText(o=>o.setValue(this.plugin.settings.obsidianHelpUrl).onChange(async i=>{let r=i.trim()===""?V.obsidianHelpUrl:i;this.plugin.settings.obsidianHelpUrl=r,await this.plugin.saveSettings()})),new M.Setting(e).setName("Enable Obsidian's help for developers in HelpMate").setDesc("Show Obsidian's developer help.").addToggle(o=>{o.setValue(this.plugin.settings.includeObsidianDevHelp),o.onChange(async i=>{this.plugin.settings.includeObsidianDevHelp=i,await this.plugin.saveSettings()})}),new M.Setting(e).setName("Obsidian developer help URL").setDesc("URL to use for Obsidian's Developer help.").addText(o=>o.setValue(this.plugin.settings.obsidianDevHelpUrl).onChange(async i=>{let r=i.trim()===""?V.obsidianDevHelpUrl:i;this.plugin.settings.obsidianDevHelpUrl=r,await this.plugin.saveSettings()})),new M.Setting(e).setName("Enable HelpMate's help in HelpMate").setDesc("Show the deocumentation for HelpMate.").addToggle(o=>{o.setValue(this.plugin.settings.includeHelpMateHelp),o.onChange(async i=>{this.plugin.settings.includeHelpMateHelp=i,await this.plugin.saveSettings()})}),e.createEl("div",{text:"List of custom help resources"}).addClass("setting-item"),e.createEl("div",{text:`Add custom help resources to be displayed in HelpMate. Please note some sites will not
               work on mobile devices, due to some characteristics of Obsidian Mobile even though they work on Obsidian Desktop.  Input a list of URLs, 
               one per line using the following format: "Title | URL". Title is the name of the resources, and URL is the the website. For example: `}).addClass("setting-item-description"),e.createEl("div",{text:"Example Help | https://help.example.com"}).addClass("setting-item-description");let n=new M.TextAreaComponent(e);n.inputEl.style.marginTop="12px",n.inputEl.style.width="100%",n.inputEl.style.height="32vh",n.setPlaceholder("Title | URL"),n.setValue(this.plugin.settings.userResources).onChange(async o=>{this.plugin.settings.userResources=o,ve(this.plugin),await this.plugin.saveSettings()}),new M.Setting(e).setName("Use IFRAME").setDesc(`On some devices the browser component of HelpMate may not display properly. This setting forces use of IFRAME 
						 which is more compatible across devices, but has less functionality. Only use this if you are having issues. Mobile
						 devices always use IFRAME, since this is the only supported option on mobile. So this setting does not apply to mobile.
						 (This setting will require a restart of Obsidian to take effect).`).addToggle(o=>{o.setValue(this.plugin.settings.forceIframe),o.onChange(async i=>{this.plugin.settings.forceIframe=i,await this.plugin.saveSettings()})})}};var xt=(t,e,n,o)=>{let i=n;i.helpUrl&&e.addExtraButton(r=>{r.setIcon(t.icon).setTooltip("HelpMate").onClick(async()=>{await t.activateView(),await t.activateView(i.helpUrl);let l=document.querySelector(".modal-close-button");l&&l.click()})})},Xe=xt;var et=require("obsidian");var Et=({plugin:t,initialUrlAddress:e})=>{let n=E(t),o=e&&e!==""?e:n[0].url;return a("div",{style:{height:"100%",width:"100%"},class:"hm-view-container",children:a(ne,{urlAddress:o,plugin:t})})},be=Et;var $="help-mate",ie=class extends et.ItemView{constructor(e,n){super(e),this.plugin=n}async onOpen(){let n=this.containerEl.children[1].createDiv();return n.style.height="100%",n.style.width="100%",n.classList.add("hm-view-parent"),B(a(be,{plugin:this.plugin}),n),Promise.resolve()}updateView(e){let o=this.containerEl.children[1].querySelector(".hm-view-parent");o&&(B(null,o),B(a(be,{plugin:this.plugin,initialUrlAddress:e}),o))}getIcon(){return this.plugin.icon}getViewType(){return $}getDisplayText(){return"HelpMate"}async onClose(){}};var re=class extends tt.Plugin{constructor(){super(...arguments);this.APP_NAME=this.manifest.name;this.APP_ID=this.manifest.id;this.HELPMATE_API=new N(this);this.settings=V;this.icon="life-buoy"}async onload(){console.log(`loading ${this.APP_NAME}`),await this.loadSettings(),this.addSettingTab(new oe(this.app,this)),this.registerView($,n=>new ie(n,this)),window.helpMateAPI=this.HELPMATE_API,this.registerMarkdownCodeBlockProcessor("helpmate",(n,o,i)=>{Je(this,n,o,i)}),this.showRibbonButton(),Qe(this),this.registerEvent(this.app.workspace.on("plugin-settings:plugin-control",(n,o,i)=>{o.helpUrl&&Xe(this,n,o,i)}))}async activateView(n){let{workspace:o}=this.app,i=null,r=o.getLeavesOfType($);if(r.length>0)i=r[0],n&&r[0].view.updateView(n);else{let l=o.getRightLeaf(!1);await(l==null?void 0:l.setViewState({type:$,active:!0}))}i&&o.revealLeaf(i)}showRibbonButton(){this.ribbonIcon=this.addRibbonIcon(this.icon,"HelpMate",async()=>{await this.activateView()})}onunload(){console.log(`unloading ${this.APP_NAME}`);try{window.helpMateAPI=void 0}catch(n){}}async loadSettings(){this.settings=Object.assign({},V,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}};
