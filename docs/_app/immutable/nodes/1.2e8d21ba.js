import{S as A,i as N,s as T,k as m,q as S,a as y,l as b,m as f,r as $,c as I,h as p,n as k,b as D,D as n,u as q,C as x,I as H}from"../chunks/index.624e1861.js";import{d as L}from"../chunks/singletons.ba38b21b.js";const O=()=>{const e=L;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},P={subscribe(e){return O().page.subscribe(e)}};function R(e){let s,a,t,o=e[0].status+"",u,g,i=e[0].error.message+"",_,v,l,E;return{c(){s=m("section"),a=m("article"),t=m("h3"),u=S(o),g=y(),_=S(i),v=y(),l=m("span"),E=S("🕳"),this.h()},l(r){s=b(r,"SECTION",{class:!0});var c=f(s);a=b(c,"ARTICLE",{});var h=f(a);t=b(h,"H3",{});var d=f(t);u=$(d,o),g=I(d),_=$(d,i),d.forEach(p),v=I(h),l=b(h,"SPAN",{});var C=f(l);E=$(C,"🕳"),C.forEach(p),h.forEach(p),c.forEach(p),this.h()},h(){k(s,"class","svelte-1f4ua4d")},m(r,c){D(r,s,c),n(s,a),n(a,t),n(t,u),n(t,g),n(t,_),n(a,v),n(a,l),n(l,E)},p(r,[c]){c&1&&o!==(o=r[0].status+"")&&q(u,o),c&1&&i!==(i=r[0].error.message+"")&&q(_,i)},i:x,o:x,d(r){r&&p(s)}}}function j(e,s,a){let t;return H(e,P,o=>a(0,t=o)),[t]}let B=class extends A{constructor(s){super(),N(this,s,j,R,T,{})}};export{B as component};
