import{S as s,i as e,s as a,k as t,e as r,t as u,M as c,d as n,n as o,c as l,a as h,g as i,b as m,f,D as d,h as g,E as p}from"../chunks/vendor-e9334ee4.js";function v(s){let e,a,v,x,E,k,$;return document.title=e=s[0],{c(){a=t(),v=r("h1"),x=u(s[0]),E=t(),k=r("p"),$=u(s[1]),this.h()},l(e){c('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(n),a=o(e),v=l(e,"H1",{class:!0});var t=h(v);x=i(t,s[0]),t.forEach(n),E=o(e),k=l(e,"P",{class:!0});var r=h(k);$=i(r,s[1]),r.forEach(n),this.h()},h(){m(v,"class","svelte-8lferx"),m(k,"class","svelte-8lferx")},m(s,e){f(s,a,e),f(s,v,e),d(v,x),f(s,E,e),f(s,k,e),d(k,$)},p(s,[a]){1&a&&e!==(e=s[0])&&(document.title=e),1&a&&g(x,s[0]),2&a&&g($,s[1])},i:p,o:p,d(s){s&&n(a),s&&n(v),s&&n(E),s&&n(k)}}}function x({error:s,status:e}){return{props:{status:e,message:s.message}}}function E(s,e,a){let{status:t}=e,{message:r}=e;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"message"in s&&a(1,r=s.message)},[t,r]}class k extends s{constructor(s){super(),e(this,s,E,v,a,{status:0,message:1})}}export{k as default,x as load};
