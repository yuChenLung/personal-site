var se=Object.defineProperty;var le=(t,e,n)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>(le(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();function y(){}function X(t){return t()}function B(){return Object.create(null)}function O(t){t.forEach(X)}function ee(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function R(t,e){return t===e?!0:(j||(j=document.createElement("a")),j.href=e,t===j.href)}function ce(t){return Object.keys(t).length===0}function b(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function te(t){return document.createTextNode(t)}function x(){return te(" ")}function ne(){return te("")}function D(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ae(t){return Array.from(t.childNodes)}let G;function A(t){G=t}const L=[],V=[];let S=[];const Y=[],ue=Promise.resolve();let q=!1;function fe(){q||(q=!0,ue.then(re))}function M(t){S.push(t)}const J=new Set;let C=0;function re(){if(C!==0)return;const t=G;do{try{for(;C<L.length;){const e=L[C];C++,A(e),de(e.$$)}}catch(e){throw L.length=0,C=0,e}for(A(null),L.length=0,C=0;V.length;)V.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];J.has(n)||(J.add(n),n())}S.length=0}while(L.length);for(;Y.length;)Y.pop()();q=!1,J.clear(),A(t)}function de(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function me(t){const e=[],n=[];S.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),S=e}const N=new Set;let w;function pe(){w={r:0,c:[],p:w}}function ge(){w.r||O(w.c),w=w.p}function $(t,e){t&&t.i&&(N.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(N.has(t))return;N.add(t),w.c.push(()=>{N.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function T(t){t&&t.c()}function E(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),M(()=>{const c=t.$$.on_mount.map(X).filter(ee);t.$$.on_destroy?t.$$.on_destroy.push(...c):O(c),t.$$.on_mount=[]}),i.forEach(M)}function z(t,e){const n=t.$$;n.fragment!==null&&(me(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function he(t,e){t.$$.dirty[0]===-1&&(L.push(t),fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(t,e,n,r,i,c,d,p=[-1]){const f=G;A(t);const a=t.$$={fragment:null,ctx:[],props:c,update:y,not_equal:i,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:B(),dirty:p,skip_bound:!1,root:e.target||f.$$.root};d&&d(a.root);let o=!1;if(a.ctx=n?n(t,e.props||{},(s,u,...l)=>{const g=l.length?l[0]:u;return a.ctx&&i(a.ctx[s],a.ctx[s]=g)&&(!a.skip_bound&&a.bound[s]&&a.bound[s](g),o&&he(t,s)),u}):[],a.update(),o=!0,O(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const s=ae(e.target);a.fragment&&a.fragment.l(s),s.forEach(_)}else a.fragment&&a.fragment.c();e.intro&&$(t.$$.fragment),E(t,e.target,e.anchor),re()}A(f)}class H{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){z(this,1),this.$destroy=y}$on(e,n){if(!ee(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_e);function be(t){let e,n,r;return{c(){e=h("hr"),n=x(),r=h("div"),r.innerHTML='<a target="_blank" href="https://drive.google.com/file/d/1c31gUZeCSdI06Uha9jqUkVZGobQtKmD2/view?usp=sharing"><button class="small-button">Resume <i class="fa-solid fa-arrow-up-right-from-square"></i></button></a> <a href="https://www.linkedin.com/in/yu-chen-lung/"><button class="small-button">LinkedIn <i class="fa-brands fa-linkedin"></i></button></a> <a href="https://github.com/yuChenLung"><button class="small-button">GitHub <i class="fa-brands fa-github"></i></button></a> <a href="mailto: yuchen.lung@g.ucla.edu"><button class="small-button">yuchen.lung@g.ucla.edu <i class="fa-regular fa-envelope"></i></button></a>',m(r,"class","flex-horiz vert-align-center horiz-align-center")},m(i,c){v(i,e,c),v(i,n,c),v(i,r,c)},p:y,i:y,o:y,d(i){i&&(_(e),_(n),_(r))}}}class ie extends H{constructor(e){super(),U(this,e,null,be,P,{})}}const oe="/personal-site/assets/profile-ca684e8c.jpg";function ve(t){let e,n,r,i,c,d,p,f,a,o,s,u,l=t[1]&&K();return a=new ie({}),{c(){e=h("button"),n=h("div"),r=h("img"),c=x(),d=h("div"),d.innerHTML=`<h2 class="svelte-1f023o9">Yu-Chen Lung</h2>
            Computer Science, B.S.<br/> <i>2021 - Expected June 2025</i><br/>
            University of California, Los Angeles`,p=x(),l&&l.c(),f=x(),T(a.$$.fragment),R(r.src,i=oe)||m(r,"src",i),m(r,"alt","Yu-Chen Lung"),m(r,"class","svelte-1f023o9"),m(d,"class","text-align-left svelte-1f023o9"),m(n,"id","outer"),m(n,"class","flex-horiz horiz-align-center vert-align-center svelte-1f023o9"),m(e,"class","dropdown-section")},m(g,W){v(g,e,W),b(e,n),b(n,r),b(n,c),b(n,d),b(e,p),l&&l.m(e,null),b(e,f),E(a,e,null),o=!0,s||(u=D(e,"click",t[2]),s=!0)},p(g,W){g[1]?l||(l=K(),l.c(),l.m(e,f)):l&&(l.d(1),l=null)},i(g){o||($(a.$$.fragment,g),o=!0)},o(g){k(a.$$.fragment,g),o=!1},d(g){g&&_(e),l&&l.d(),z(a),s=!1,u()}}}function xe(t){let e,n,r,i,c,d,p,f,a;return f=new ie({}),{c(){e=h("button"),n=h("div"),r=h("img"),c=x(),d=h("div"),d.innerHTML=`<h2 class="svelte-1f023o9">Yu-Chen Lung</h2>
            Computer Science, B.S.<br/> <i>2021 - Expected June 2025</i><br/>
            University of California, Los Angeles`,p=x(),T(f.$$.fragment),m(r,"id","mobile-img"),R(r.src,i=oe)||m(r,"src",i),m(r,"alt","Yu-Chen Lung"),m(r,"class","svelte-1f023o9"),m(d,"class","svelte-1f023o9"),m(n,"id","outer"),m(n,"class","flex-horiz horiz-align-center vert-align-center svelte-1f023o9"),m(e,"class","dropdown-section")},m(o,s){v(o,e,s),b(e,n),b(n,r),b(n,c),b(n,d),b(e,p),E(f,e,null),a=!0},p:y,i(o){a||($(f.$$.fragment,o),a=!0)},o(o){k(f.$$.fragment,o),a=!1},d(o){o&&_(e),z(f)}}}function K(t){let e;return{c(){e=h("h1"),e.textContent="Content"},m(n,r){v(n,e,r)},d(n){n&&_(e)}}}function ye(t){let e,n,r,i,c,d;M(t[3]);const p=[xe,ve],f=[];function a(o,s){return o[0]<450?0:1}return e=a(t),n=f[e]=p[e](t),{c(){n.c(),r=ne()},m(o,s){f[e].m(o,s),v(o,r,s),i=!0,c||(d=D(window,"resize",t[3]),c=!0)},p(o,[s]){let u=e;e=a(o),e===u?f[e].p(o,s):(pe(),k(f[u],1,1,()=>{f[u]=null}),ge(),n=f[e],n?n.p(o,s):(n=f[e]=p[e](o),n.c()),$(n,1),n.m(r.parentNode,r))},i(o){i||($(n),i=!0)},o(o){k(n),i=!1},d(o){o&&_(r),f[e].d(o),c=!1,d()}}}function $e(t,e,n){let r,i=!1;function c(){n(1,i=!i)}function d(){n(0,r=window.innerWidth)}return[r,i,c,d]}class we extends H{constructor(e){super(),U(this,e,$e,ye,P,{})}}const ke="/personal-site/assets/strlogo-b1aa131e.png",Ce="/personal-site/assets/ualbanylogo-df4e889a.png";function Le(t){let e;return{c(){e=h("style"),e.textContent=`.teaser-head {\r
        margin-left: 30px;\r
        margin-right: 20px;\r
    }\r
    .teaser-content {\r
        margin-left: 20px;\r
        max-width: 420px;\r
    }\r
    .icon-img {\r
        width: 120px;\r
    }\r
    h2 {\r
        line-height: 1.5em;\r
        padding: 0;\r
        margin: 0;\r
    }\r
    div {\r
        margin-top: 10px;\r
        margin-bottom: 10px;\r
    }\r
    .extra-content {\r
        max-width: 720px;\r
    }\r
    #extra-content-bullets {\r
        line-height: 1.5em;\r
    }\r
    #hscv-head-content {\r
        max-width: 330px;\r
    }\r
    .dropdown-section {\r
        border-radius: 8px;\r
        border: 1px solid transparent;\r
        padding: 0.6em 1.2em;\r
        margin: 0.6em;\r
        font-size: 1em;\r
        font-family: inherit;\r
        cursor: pointer;\r
        transition: border-color 0.25s;\r
        min-width: 40vw;\r
        max-width: 800px;\r
    }`},m(n,r){v(n,e,r)},d(n){n&&_(e)}}}function Se(t){let e;return{c(){e=h("style"),e.textContent=`.teaser-head {\r
        margin-left: 30px;\r
        margin-right: 20px;\r
        text-align: center;\r
    }\r
    .teaser-content {\r
        margin-left: 20px;\r
        max-width: 420px;\r
        text-align: center;\r
    }\r
    .icon-img {\r
        width: 120px;\r
        margin-top: 5px;\r
    }\r
    h2 {\r
        line-height: 1.5em;\r
        padding: 0;\r
        margin: 0;\r
    }\r
    div {\r
        margin-top: 10px;\r
        margin-bottom: 10px;\r
    }\r
    .dropdown-section {\r
        border-radius: 8px;\r
        border: 1px solid transparent;\r
        padding: 0.6em 1.2em;\r
        margin: 0.6em;\r
        font-size: 1em;\r
        font-family: inherit;\r
        cursor: pointer;\r
        transition: border-color 0.25s;\r
        min-width: 40vw;\r
        max-width: 800px;\r
    }`},m(n,r){v(n,e,r)},d(n){n&&_(e)}}}function Ee(t){let e;return{c(){e=h("h2"),e.textContent="Does not exist"},m(n,r){v(n,e,r)},p:y,d(n){n&&_(e)}}}function ze(t){let e,n,r,i,c,d,p,f,a,o,s,u=t[3]&&F();return{c(){e=h("button"),n=h("div"),r=h("img"),c=x(),d=h("div"),d.innerHTML=`<h2>University at Albany</h2>
            UHS Research Program
            <i>2018-2021</i> <i>Ardsley, NY</i>`,p=x(),f=h("div"),f.textContent="Worked on autonomous tactic drone swarm project based on DARPA distributed-system architecture. Developed swarm tactics in Java and created testing regimes to increase system robustness.",a=x(),u&&u.c(),m(r,"class","icon-img"),R(r.src,i=Ce)||m(r,"src",i),m(r,"alt","STR's logo"),m(d,"class","teaser-head flex-vert text-align-left"),m(f,"id","hscv-head-content"),m(f,"class","teaser-content flex-vert text-align-left"),m(n,"class","flex-horiz vert-align-center horiz-align-center"),m(e,"class","dropdown-section")},m(l,g){v(l,e,g),b(e,n),b(n,r),b(n,c),b(n,d),b(n,p),b(n,f),b(e,a),u&&u.m(e,null),o||(s=D(e,"click",t[5]),o=!0)},p(l,g){l[3]?u||(u=F(),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(l){l&&_(e),u&&u.d(),o=!1,s()}}}function Ae(t){let e,n,r,i,c,d,p,f,a,o,s,u=t[2]&&Z();return{c(){e=h("button"),n=h("div"),r=h("img"),c=x(),d=h("div"),d.innerHTML=`<h2>STR</h2>
            SWE Intern
            <i>June - August 2023</i> <i>San Diego, CA</i>`,p=x(),f=h("div"),f.textContent="Worked on autonomous tactic drone swarm project based on DARPA distributed-system architecture. Developed swarm tactics in Java and created testing regimes to increase system robustness.",a=x(),u&&u.c(),m(r,"class","icon-img"),R(r.src,i=ke)||m(r,"src",i),m(r,"alt","STR's logo"),m(d,"class","teaser-head flex-vert text-align-left"),m(f,"class","teaser-content flex-vert text-align-left"),m(n,"class","flex-horiz vert-align-center horiz-align-center"),m(e,"class","dropdown-section")},m(l,g){v(l,e,g),b(e,n),b(n,r),b(n,c),b(n,d),b(n,p),b(n,f),b(e,a),u&&u.m(e,null),o||(s=D(e,"click",t[4]),o=!0)},p(l,g){l[2]?u||(u=Z(),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},d(l){l&&_(e),u&&u.d(),o=!1,s()}}}function F(t){let e;return{c(){e=h("div"),e.innerHTML=`<hr/> <b>More Information</b> <ul id="extra-content-bullets"><li>Communicated and collaborated directly with customer and developers from other companies to set up and adapt a
                3D-simulation environment for STR’s testing.</li> <li>Designed and implemented testing regimens in simulation engine and for field tests to improve system robustness.</li></ul> <b>Technologies Used:</b> Java and JDK, Gradle/Maven, Unreal Engine/Gazebo, MAVLink`,m(e,"class","extra-content text-align-left")},m(n,r){v(n,e,r)},d(n){n&&_(e)}}}function Z(t){let e;return{c(){e=h("div"),e.innerHTML=`<hr/> <b>More Information</b> <ul id="extra-content-bullets"><li>Communicated and collaborated directly with customer and developers from other companies to set up and adapt a
                3D-simulation environment for STR’s testing.</li> <li>Designed and implemented testing regimens in simulation engine and for field tests to improve system robustness.</li></ul> <b>Technologies Used:</b> Java and JDK, Gradle/Maven, Unreal Engine/Gazebo, MAVLink`,m(e,"class","extra-content text-align-left")},m(n,r){v(n,e,r)},d(n){n&&_(e)}}}function Te(t){let e,n,r,i;M(t[6]);function c(s,u){return s[1]<450?Se:Le}let d=c(t),p=d(t);function f(s,u){return s[0]=="default"||s[0]=="str"?Ae:(s[0]="hscvresearch")?ze:Ee}let a=f(t),o=a(t);return{c(){p.c(),e=x(),o.c(),n=ne()},m(s,u){p.m(s,u),v(s,e,u),o.m(s,u),v(s,n,u),r||(i=D(window,"resize",t[6]),r=!0)},p(s,[u]){d!==(d=c(s))&&(p.d(1),p=d(s),p&&(p.c(),p.m(e.parentNode,e))),a===(a=f(s))&&o?o.p(s,u):(o.d(1),o=a(s),o&&(o.c(),o.m(n.parentNode,n)))},i:y,o:y,d(s){s&&(_(e),_(n)),p.d(s),o.d(s),r=!1,i()}}}function Me(t,e,n){let{option:r="default"}=e,i,c=!1;function d(){n(2,c=!c)}let p=!1;function f(){n(3,p=!p)}function a(){n(1,i=window.innerWidth)}return t.$$set=o=>{"option"in o&&n(0,r=o.option)},[r,i,c,p,d,f,a]}class Q extends H{constructor(e){super(),U(this,e,Me,Te,P,{option:0})}}function Oe(t){let e,n,r,i,c,d,p,f,a,o,s,u;return e=new we({}),c=new Q({props:{option:"str"}}),a=new Q({props:{option:"hscvresearch"}}),{c(){T(e.$$.fragment),n=x(),r=h("h2"),r.textContent="Work Experience",i=x(),T(c.$$.fragment),d=x(),p=h("h2"),p.textContent="Research Experience",f=x(),T(a.$$.fragment),o=x(),s=h("h2"),s.textContent="Featured Projects",m(r,"class","svelte-1j7pqy2"),m(p,"class","svelte-1j7pqy2"),m(s,"class","svelte-1j7pqy2")},m(l,g){E(e,l,g),v(l,n,g),v(l,r,g),v(l,i,g),E(c,l,g),v(l,d,g),v(l,p,g),v(l,f,g),E(a,l,g),v(l,o,g),v(l,s,g),u=!0},p:y,i(l){u||($(e.$$.fragment,l),$(c.$$.fragment,l),$(a.$$.fragment,l),u=!0)},o(l){k(e.$$.fragment,l),k(c.$$.fragment,l),k(a.$$.fragment,l),u=!1},d(l){l&&(_(n),_(r),_(i),_(d),_(p),_(f),_(o),_(s)),z(e,l),z(c,l),z(a,l)}}}class De extends H{constructor(e){super(),U(this,e,null,Oe,P,{})}}new De({target:document.getElementById("app")});
