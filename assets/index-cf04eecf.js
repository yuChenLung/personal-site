var fe=Object.defineProperty;var ae=(t,e,n)=>e in t?fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Y=(t,e,n)=>(ae(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function _(){}function ie(t){return t()}function re(){return Object.create(null)}function A(t){t.forEach(ie)}function le(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function de(t,e){return t===e?!0:(D||(D=document.createElement("a")),D.href=e,t===D.href)}function _e(t){return Object.keys(t).length===0}function $(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function ue(t){return document.createTextNode(t)}function v(){return ue(" ")}function pe(){return ue("")}function G(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function H(t){return function(e){return e.preventDefault(),t.call(this,e)}}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t){return Array.from(t.childNodes)}let X;function I(t){X=t}const O=[],oe=[];let N=[];const ce=[],he=Promise.resolve();let Q=!1;function ge(){Q||(Q=!0,he.then(se))}function W(t){N.push(t)}const J=new Set;let j=0;function se(){if(j!==0)return;const t=X;do{try{for(;j<O.length;){const e=O[j];j++,I(e),$e(e.$$)}}catch(e){throw O.length=0,j=0,e}for(I(null),O.length=0,j=0;oe.length;)oe.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];J.has(n)||(J.add(n),n())}N.length=0}while(O.length);for(;ce.length;)ce.pop()();Q=!1,J.clear(),I(t)}function $e(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}function ye(t){const e=[],n=[];N.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),N=e}const F=new Set;let w;function xe(){w={r:0,c:[],p:w}}function be(){w.r||A(w.c),w=w.p}function L(t,e){t&&t.i&&(F.delete(t),t.i(e))}function q(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),w.c.push(()=>{F.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Z(t){t&&t.c()}function z(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),W(()=>{const c=t.$$.on_mount.map(ie).filter(le);t.$$.on_destroy?t.$$.on_destroy.push(...c):A(c),t.$$.on_mount=[]}),o.forEach(W)}function K(t,e){const n=t.$$;n.fragment!==null&&(ye(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(t,e){t.$$.dirty[0]===-1&&(O.push(t),ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,r,o,c,u,h=[-1]){const s=X;I(t);const i=t.$$={fragment:null,ctx:[],props:c,update:_,not_equal:o,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:re(),dirty:h,skip_bound:!1,root:e.target||s.$$.root};u&&u(i.root);let k=!1;if(i.ctx=n?n(t,e.props||{},(m,E,...P)=>{const C=P.length?P[0]:E;return i.ctx&&o(i.ctx[m],i.ctx[m]=C)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](C),k&&ve(t,m)),E}):[],i.update(),k=!0,A(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const m=me(e.target);i.fragment&&i.fragment.l(m),m.forEach(d)}else i.fragment&&i.fragment.c();e.intro&&L(t.$$.fragment),z(t,e.target,e.anchor),se()}I(s)}class T{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){K(this,1),this.$destroy=_}$on(e,n){if(!le(n))return _;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!_e(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const we="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(we);function ke(t){let e;return{c(){e=f("h1"),e.textContent="Experience"},m(n,r){p(n,e,r)},p:_,i:_,o:_,d(n){n&&d(e)}}}class Ee extends T{constructor(e){super(),R(this,e,null,ke,M,{})}}const Pe="/personal-site/assets/profile-ca684e8c.jpg";function Ce(t){let e,n,r,o,c,u,h;return{c(){e=f("h1"),e.textContent="Profile",n=v(),r=f("div"),o=f("img"),u=v(),h=f("p"),h.textContent="Descriptions",de(o.src,c=Pe)||a(o,"src",c),a(o,"alt","Profile photo"),a(o,"class","svelte-1hcm7ti"),a(r,"class","flex-horiz")},m(s,i){p(s,e,i),p(s,n,i),p(s,r,i),$(r,o),$(r,u),$(r,h)},p:_,i:_,o:_,d(s){s&&(d(e),d(n),d(r))}}}class je extends T{constructor(e){super(),R(this,e,null,Ce,M,{})}}function Oe(t){let e;return{c(){e=f("h1"),e.textContent="Projects"},m(n,r){p(n,e,r)},p:_,i:_,o:_,d(n){n&&d(e)}}}class Ne extends T{constructor(e){super(),R(this,e,null,Oe,M,{})}}function Le(t){let e;return{c(){e=f("h1"),e.textContent="Page Not Found"},m(n,r){p(n,e,r)},i:_,o:_,d(n){n&&d(e)}}}function Ae(t){let e,n;return e=new je({}),{c(){Z(e.$$.fragment)},m(r,o){z(e,r,o),n=!0},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){q(e.$$.fragment,r),n=!1},d(r){K(e,r)}}}function Se(t){let e,n;return e=new Ne({}),{c(){Z(e.$$.fragment)},m(r,o){z(e,r,o),n=!0},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){q(e.$$.fragment,r),n=!1},d(r){K(e,r)}}}function Ie(t){let e,n;return e=new Ee({}),{c(){Z(e.$$.fragment)},m(r,o){z(e,r,o),n=!0},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){q(e.$$.fragment,r),n=!1},d(r){K(e,r)}}}function qe(t){let e,n,r,o,c,u,h,s,i,k,m,E,P,C,g,y,S,B,U,ee;const te=[Ie,Se,Ae,Le],b=[];function ne(l,x){return l[0]=="exp"?0:l[0]=="proj"?1:l[0]=="prof"?2:3}return g=ne(t),y=b[g]=te[g](t),{c(){e=f("ul"),n=f("li"),r=f("a"),r.textContent="Experience",o=v(),c=f("li"),u=f("a"),u.textContent="Yu-Chen Lung",h=v(),s=f("li"),i=f("a"),i.textContent="Projects",k=v(),m=f("br"),E=v(),P=f("hr"),C=v(),y.c(),S=pe(),a(r,"href","/"),a(n,"id","menu-1"),a(n,"class","svelte-1p1bc7o"),a(u,"href","/"),a(c,"id","menu-2"),a(c,"class","svelte-1p1bc7o"),a(i,"href","/"),a(s,"id","menu-3"),a(s,"class","svelte-1p1bc7o"),a(e,"id","menu"),a(e,"class","svelte-1p1bc7o")},m(l,x){p(l,e,x),$(e,n),$(n,r),$(e,o),$(e,c),$(c,u),$(e,h),$(e,s),$(s,i),p(l,k,x),p(l,m,x),p(l,E,x),p(l,P,x),p(l,C,x),b[g].m(l,x),p(l,S,x),B=!0,U||(ee=[G(r,"click",H(t[1])),G(u,"click",H(t[2])),G(i,"click",H(t[3]))],U=!0)},p(l,[x]){let V=g;g=ne(l),g!==V&&(xe(),q(b[V],1,1,()=>{b[V]=null}),be(),y=b[g],y||(y=b[g]=te[g](l),y.c()),L(y,1),y.m(S.parentNode,S))},i(l){B||(L(y),B=!0)},o(l){q(y),B=!1},d(l){l&&(d(e),d(k),d(m),d(E),d(P),d(C),d(S)),b[g].d(l),U=!1,A(ee)}}}function Be(t,e,n){let{menu:r="exp"}=e;const o=()=>n(0,r="exp"),c=()=>n(0,r="prof"),u=()=>n(0,r="proj");return t.$$set=h=>{"menu"in h&&n(0,r=h.menu)},[r,o,c,u]}class De extends T{constructor(e){super(),R(this,e,Be,qe,M,{menu:0})}}new De({target:document.getElementById("app")});
