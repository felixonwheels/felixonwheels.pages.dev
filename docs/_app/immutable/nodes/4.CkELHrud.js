import{a as d,t as $}from"../chunks/legacy.CAR6rRPW.js";import{p as b,ao as k,t as w,a as x,v as l,y as i,w as c}from"../chunks/runtime.CQAZ1nP-.js";import{d as T,s as H}from"../chunks/render.brGxBECe.js";import{i as P}from"../chunks/lifecycle.DqbOsU5I.js";import{s as y,a as K,p as L}from"../chunks/stores.DjPrIrSu.js";import{l as R,i as m}from"../chunks/i18n.BfhqfedP.js";import{g as S}from"../chunks/entry.eQLuiqnr.js";const U=t=>`Hello, ${t.name} from fr!`,j=t=>`Hello, ${t.name} from en!`,q=(t,a={})=>({en:j,fr:U})[a.languageTag??R()](t);var z=(t,a)=>a("fr"),A=(t,a)=>a("en"),B=$("<h1> </h1> <div><button>fr</button> <button>en</button></div>",1);function M(t,a){b(a,!1);const p=y(),f=()=>K(L,"$page",p);function e(u){const v=m.route(f().url.pathname),h=m.resolveRoute(v,u);S(h)}P();var r=B(),o=k(r),_=l(o,!0);w(()=>H(_,q({name:"SvelteKit User"}))),c(o);var s=i(o,2),n=l(s);n.__click=[z,e];var g=i(n,2);g.__click=[A,e],c(s),d(t,r),x()}T(["click"]);export{M as component};
