var Z=Object.defineProperty;var F=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _(){}function W(t){return t()}function U(){return Object.create(null)}function A(t){t.forEach(W)}function G(t){return typeof t=="function"}function k(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let w;function K(t,e){return t===e?!0:(w||(w=document.createElement("a")),w.href=e,t===w.href)}function Q(t){return Object.keys(t).length===0}function g(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function v(){return V(" ")}function X(){return V("")}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t){return Array.from(t.childNodes)}let q;function x(t){q=t}const y=[],B=[];let b=[];const J=[],te=Promise.resolve();let I=!1;function ne(){I||(I=!0,te.then(Y))}function T(t){b.push(t)}const j=new Set;let $=0;function Y(){if($!==0)return;const t=q;do{try{for(;$<y.length;){const e=y[$];$++,x(e),re(e.$$)}}catch(e){throw y.length=0,$=0,e}for(x(null),y.length=0,$=0;B.length;)B.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];j.has(n)||(j.add(n),n())}b.length=0}while(y.length);for(;J.length;)J.pop()();I=!1,j.clear(),x(t)}function re(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}function ie(t){const e=[],n=[];b.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),b=e}const E=new Set;let se;function L(t,e){t&&t.i&&(E.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),se.c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function M(t){t&&t.c()}function C(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),T(()=>{const s=t.$$.on_mount.map(W).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),i.forEach(T)}function S(t,e){const n=t.$$;n.fragment!==null&&(ie(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(t,e){t.$$.dirty[0]===-1&&(y.push(t),ne(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(t,e,n,r,i,s,l,f=[-1]){const c=q;x(t);const o=t.$$={fragment:null,ctx:[],props:s,update:_,not_equal:i,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:U(),dirty:f,skip_bound:!1,root:e.target||c.$$.root};l&&l(o.root);let u=!1;if(o.ctx=n?n(t,e.props||{},(m,D,...H)=>{const R=H.length?H[0]:D;return o.ctx&&i(o.ctx[m],o.ctx[m]=R)&&(!o.skip_bound&&o.bound[m]&&o.bound[m](R),u&&oe(t,m)),D}):[],o.update(),u=!0,A(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){const m=ee(e.target);o.fragment&&o.fragment.l(m),m.forEach(p)}else o.fragment&&o.fragment.c();e.intro&&L(t.$$.fragment),C(t,e.target,e.anchor),Y()}x(c)}class N{constructor(){P(this,"$$");P(this,"$$set")}$destroy(){S(this,1),this.$destroy=_}$on(e,n){if(!G(n))return _;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(le);const ce="/personal-site/assets/strlogo-b1aa131e.png";function ue(t){let e;return{c(){e=d("h2"),e.textContent="Does not exist",a(e,"class","svelte-dviehi")},m(n,r){h(n,e,r)},p:_,d(n){n&&p(e)}}}function ae(t){let e,n,r,i,s,l,f,c;return{c(){e=d("button"),n=d("div"),r=d("img"),s=v(),l=d("div"),l.innerHTML=`<h2 class="svelte-dviehi">STR</h2>
            SWE Intern
            <i>June-August 2023</i> <i>San Diego, CA</i>`,f=v(),c=d("div"),c.textContent="Worked on autonomous drone guidance and tactical swarm project using DARPA distributed-system architecture. Developed and edited swarm tactics in Java and created testing regime to increase system robustness.",a(r,"class","icon-img svelte-dviehi"),K(r.src,i=ce)||a(r,"src",i),a(r,"alt","STR's logo"),a(l,"class","teaser-head flex-vert text-align-left svelte-dviehi"),a(c,"class","teaser-content flex-vert text-align-left svelte-dviehi"),a(n,"class","flex-horiz vert-align-center horiz-align-center svelte-dviehi"),a(e,"class","dropdown-section")},m(o,u){h(o,e,u),g(e,n),g(n,r),g(n,s),g(n,l),g(n,f),g(n,c)},p:_,d(o){o&&p(e)}}}function fe(t){let e;function n(s,l){return s[0]=="default"?ae:ue}let r=n(t),i=r(t);return{c(){i.c(),e=X()},m(s,l){i.m(s,l),h(s,e,l)},p(s,[l]){r===(r=n(s))&&i?i.p(s,l):(i.d(1),i=r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:_,o:_,d(s){s&&p(e),i.d(s)}}}function de(t,e,n){let{option:r="default"}=e;return t.$$set=i=>{"option"in i&&n(0,r=i.option)},[r]}class pe extends N{constructor(e){super(),O(this,e,de,fe,k,{option:0})}}function he(t){let e,n,r;return{c(){e=d("hr"),n=v(),r=d("div"),r.innerHTML='<a target="_blank" href="https://drive.google.com/file/d/1c31gUZeCSdI06Uha9jqUkVZGobQtKmD2/view?usp=sharing"><button class="small-button">Resume <i class="fa-solid fa-arrow-up-right-from-square"></i></button></a> <a href="https://www.linkedin.com/in/yu-chen-lung/"><button class="small-button">LinkedIn <i class="fa-brands fa-linkedin"></i></button></a> <a href="https://github.com/yuChenLung"><button class="small-button">GitHub <i class="fa-brands fa-github"></i></button></a> <a href="mailto: yuchen.lung@g.ucla.edu"><button class="small-button">yuchen.lung@g.ucla.edu <i class="fa-regular fa-envelope"></i></button></a>',a(r,"class","flex-horiz vert-align-center horiz-align-center")},m(i,s){h(i,e,s),h(i,n,s),h(i,r,s)},p:_,i:_,o:_,d(i){i&&(p(e),p(n),p(r))}}}class _e extends N{constructor(e){super(),O(this,e,null,he,k,{})}}const ge="/personal-site/assets/profile-ca684e8c.jpg";function me(t){let e,n,r,i,s,l,f,c,o;return c=new _e({}),{c(){e=d("button"),n=d("div"),r=d("img"),s=v(),l=d("div"),l.innerHTML=`<h2 class="svelte-dopvdx">Yu-Chen Lung</h2>
            Computer Science, B.S.<br/> <i>2021 - Expected June 2025</i><br/>
            University of California, Los Angeles`,f=v(),M(c.$$.fragment),K(r.src,i=ge)||a(r,"src",i),a(r,"alt","Yu-Chen Lung"),a(r,"class","svelte-dopvdx"),a(l,"class","text-align-left svelte-dopvdx"),a(n,"id","outer"),a(n,"class","flex-horiz horiz-align-center vert-align-center svelte-dopvdx"),a(e,"class","dropdown-section")},m(u,m){h(u,e,m),g(e,n),g(n,r),g(n,s),g(n,l),g(e,f),C(c,e,null),o=!0},p:_,i(u){o||(L(c.$$.fragment,u),o=!0)},o(u){z(c.$$.fragment,u),o=!1},d(u){u&&p(e),S(c)}}}class ve extends N{constructor(e){super(),O(this,e,null,me,k,{})}}function $e(t){let e,n,r,i,s,l,f,c;return e=new ve({}),f=new pe({}),{c(){M(e.$$.fragment),n=v(),r=d("br"),i=v(),s=d("h2"),s.innerHTML='<i id="drop-icon" class="fa-solid fa-caret-down svelte-1n1wlro"></i> Work Experience',l=v(),M(f.$$.fragment)},m(o,u){C(e,o,u),h(o,n,u),h(o,r,u),h(o,i,u),h(o,s,u),h(o,l,u),C(f,o,u),c=!0},p:_,i(o){c||(L(e.$$.fragment,o),L(f.$$.fragment,o),c=!0)},o(o){z(e.$$.fragment,o),z(f.$$.fragment,o),c=!1},d(o){o&&(p(n),p(r),p(i),p(s),p(l)),S(e,o),S(f,o)}}}class ye extends N{constructor(e){super(),O(this,e,null,$e,k,{})}}new ye({target:document.getElementById("app")});
