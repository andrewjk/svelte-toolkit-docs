import{S as t,i as a,s as e,aJ as n,j as o,m as r,o as s,x as $,u as c,v as l,e as i,t as f,c as m,a as d,g as u,d as p,b as g,f as h,D as v,h as w,ai as x,aj as y,k as E,M as D,n as k,w as b,aY as T,aZ as C,a1 as I,ae as V,af as B,a_ as M,ak as O,al as _,r as H,am as P,an as R}from"../../chunks/vendor-f76ba110.js";function j(t){let a;return{c(){a=f("Open the modal dialog")},l(t){a=u(t,"Open the modal dialog")},m(t,e){h(t,a,e)},d(t){t&&p(a)}}}function A(t){let a,e;return a=new T({props:{$$slots:{footer:[Y],body:[N],header:[K]},$$scope:{ctx:t}}}),{c(){o(a.$$.fragment)},l(t){r(a.$$.fragment,t)},m(t,n){s(a,t,n),e=!0},p(t,e){const n={};1027&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){e||($(a.$$.fragment,t),e=!0)},o(t){c(a.$$.fragment,t),e=!1},d(t){l(a,t)}}}function K(t){let a,e;return{c(){a=i("div"),e=f("Enter your email:"),this.h()},l(t){a=m(t,"DIV",{slot:!0});var n=d(a);e=u(n,"Enter your email:"),n.forEach(p),this.h()},h(){g(a,"slot","header")},m(t,n){h(t,a,n),v(a,e)},d(t){t&&p(a)}}}function N(t){let a,e,n,f,u,w,x,y,D;function b(a){t[8](a)}let T={contentType:"email",placeholder:"Email",autofocus:!0};function M(a){t[9](a)}void 0!==t[0]&&(T.value=t[0]),n=new C({props:T}),I.push((()=>V(n,"value",b)));let O={contentType:"email",placeholder:"Confirm email"};return void 0!==t[1]&&(O.value=t[1]),x=new C({props:O}),I.push((()=>V(x,"value",M))),{c(){a=i("div"),e=i("div"),o(n.$$.fragment),u=E(),w=i("div"),o(x.$$.fragment),this.h()},l(t){a=m(t,"DIV",{slot:!0});var o=d(a);e=m(o,"DIV",{class:!0});var s=d(e);r(n.$$.fragment,s),s.forEach(p),u=k(o),w=m(o,"DIV",{class:!0});var $=d(w);r(x.$$.fragment,$),$.forEach(p),o.forEach(p),this.h()},h(){g(e,"class","block"),g(w,"class","block"),g(a,"slot","body")},m(t,o){h(t,a,o),v(a,e),s(n,e,null),v(a,u),v(a,w),s(x,w,null),D=!0},p(t,a){const e={};!f&&1&a&&(f=!0,e.value=t[0],B((()=>f=!1))),n.$set(e);const o={};!y&&2&a&&(y=!0,o.value=t[1],B((()=>y=!1))),x.$set(o)},i(t){D||($(n.$$.fragment,t),$(x.$$.fragment,t),D=!0)},o(t){c(n.$$.fragment,t),c(x.$$.fragment,t),D=!1},d(t){t&&p(a),l(n),l(x)}}}function S(t){let a;return{c(){a=f("OK")},l(t){a=u(t,"OK")},m(t,e){h(t,a,e)},d(t){t&&p(a)}}}function J(t){let a;return{c(){a=f("Cancel")},l(t){a=u(t,"Cancel")},m(t,e){h(t,a,e)},d(t){t&&p(a)}}}function Y(t){let a,e,n,f,u;return e=new M({props:{confirm:!0,$$slots:{default:[S]},$$scope:{ctx:t}}}),e.$on("click",t[6]),f=new M({props:{cancel:!0,$$slots:{default:[J]},$$scope:{ctx:t}}}),f.$on("click",t[7]),{c(){a=i("div"),o(e.$$.fragment),n=E(),o(f.$$.fragment),this.h()},l(t){a=m(t,"DIV",{slot:!0});var o=d(a);r(e.$$.fragment,o),n=k(o),r(f.$$.fragment,o),o.forEach(p),this.h()},h(){g(a,"slot","footer")},m(t,o){h(t,a,o),s(e,a,null),v(a,n),s(f,a,null),u=!0},p(t,a){const n={};1024&a&&(n.$$scope={dirty:a,ctx:t}),e.$set(n);const o={};1024&a&&(o.$$scope={dirty:a,ctx:t}),f.$set(o)},i(t){u||($(e.$$.fragment,t),$(f.$$.fragment,t),u=!0)},o(t){c(e.$$.fragment,t),c(f.$$.fragment,t),u=!1},d(t){t&&p(a),l(e),l(f)}}}function Z(t){let a,e;return{c(){a=i("div"),e=f(t[2]),this.h()},l(n){a=m(n,"DIV",{class:!0});var o=d(a);e=u(o,t[2]),o.forEach(p),this.h()},h(){g(a,"class","block")},m(t,n){h(t,a,n),v(a,e)},p(t,a){4&a&&w(e,t[2])},d(t){t&&p(a)}}}function q(t){let a;return{c(){a=f("Name")},l(t){a=u(t,"Name")},m(t,e){h(t,a,e)},d(t){t&&p(a)}}}function z(t){let a;return{c(){a=f("Default")},l(t){a=u(t,"Default")},m(t,e){h(t,a,e)},d(t){t&&p(a)}}}function F(t){let a;return{c(){a=f("Description")},l(t){a=u(t,"Description")},m(t,e){h(t,a,e)},d(t){t&&p(a)}}}function G(t){let a;return{c(){a=f("Change")},l(t){a=u(t,"Change")},m(t,e){h(t,a,e)},d(t){t&&p(a)}}}function L(t){let a,e,n,i,f,m,d,u;return a=new R({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),n=new R({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[F]},$$scope:{ctx:t}}}),d=new R({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),{c(){o(a.$$.fragment),e=E(),o(n.$$.fragment),i=E(),o(f.$$.fragment),m=E(),o(d.$$.fragment)},l(t){r(a.$$.fragment,t),e=k(t),r(n.$$.fragment,t),i=k(t),r(f.$$.fragment,t),m=k(t),r(d.$$.fragment,t)},m(t,o){s(a,t,o),h(t,e,o),s(n,t,o),h(t,i,o),s(f,t,o),h(t,m,o),s(d,t,o),u=!0},p(t,e){const o={};1024&e&&(o.$$scope={dirty:e,ctx:t}),a.$set(o);const r={};1024&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const s={};1024&e&&(s.$$scope={dirty:e,ctx:t}),f.$set(s);const $={};1024&e&&($.$$scope={dirty:e,ctx:t}),d.$set($)},i(t){u||($(a.$$.fragment,t),$(n.$$.fragment,t),$(f.$$.fragment,t),$(d.$$.fragment,t),u=!0)},o(t){c(a.$$.fragment,t),c(n.$$.fragment,t),c(f.$$.fragment,t),c(d.$$.fragment,t),u=!1},d(t){l(a,t),t&&p(e),l(n,t),t&&p(i),l(f,t),t&&p(m),l(d,t)}}}function Q(t){let a,e;return a=new P({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){o(a.$$.fragment)},l(t){r(a.$$.fragment,t)},m(t,n){s(a,t,n),e=!0},p(t,e){const n={};1024&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){e||($(a.$$.fragment,t),e=!0)},o(t){c(a.$$.fragment,t),e=!1},d(t){l(a,t)}}}function U(t){let a,e,n,i;return a=new O({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),n=new _({}),{c(){o(a.$$.fragment),e=E(),o(n.$$.fragment)},l(t){r(a.$$.fragment,t),e=k(t),r(n.$$.fragment,t)},m(t,o){s(a,t,o),h(t,e,o),s(n,t,o),i=!0},p(t,e){const n={};1024&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){i||($(a.$$.fragment,t),$(n.$$.fragment,t),i=!0)},o(t){c(a.$$.fragment,t),c(n.$$.fragment,t),i=!1},d(t){l(a,t),t&&p(e),l(n,t)}}}function W(t){let a,e;return{c(){a=i("pre"),e=f(t[4])},l(n){a=m(n,"PRE",{});var o=d(a);e=u(o,t[4]),o.forEach(p)},m(t,n){h(t,a,n),v(a,e)},p(t,a){16&a&&w(e,t[4])},d(t){t&&p(a)}}}function X(t){let a,e,w,T,C,I,V,B,M,O,_,P,R,K,N,S,J,Y,q,z,F,G,L,Q,X,tt,at,et,nt,ot,rt;S=new n({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),S.$on("click",t[5]);let st=t[3]&&A(t),$t=t[2]&&Z(t);return Q=new x({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),ot=new y({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){a=E(),e=i("div"),w=i("h1"),T=f("Modal"),C=E(),I=i("p"),V=f("A modal dialog that can contain any content, per\r\n    "),B=i("a"),M=f("https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal"),O=f("\r\n    ."),_=E(),P=i("h2"),R=f("Demo"),K=E(),N=i("div"),o(S.$$.fragment),J=E(),st&&st.c(),Y=E(),$t&&$t.c(),q=E(),z=i("h2"),F=f("Properties"),G=E(),L=i("div"),o(Q.$$.fragment),X=E(),tt=i("h2"),at=f("Code"),et=E(),nt=i("div"),o(ot.$$.fragment),this.h()},l(t){D('[data-svelte="svelte-1irkbet"]',document.head).forEach(p),a=k(t),e=m(t,"DIV",{class:!0});var n=d(e);w=m(n,"H1",{});var o=d(w);T=u(o,"Modal"),o.forEach(p),C=k(n),I=m(n,"P",{});var s=d(I);V=u(s,"A modal dialog that can contain any content, per\r\n    "),B=m(s,"A",{href:!0,target:!0});var $=d(B);M=u($,"https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal"),$.forEach(p),O=u(s,"\r\n    ."),s.forEach(p),_=k(n),P=m(n,"H2",{});var c=d(P);R=u(c,"Demo"),c.forEach(p),K=k(n),N=m(n,"DIV",{class:!0});var l=d(N);r(S.$$.fragment,l),J=k(l),st&&st.l(l),l.forEach(p),Y=k(n),$t&&$t.l(n),q=k(n),z=m(n,"H2",{});var i=d(z);F=u(i,"Properties"),i.forEach(p),G=k(n),L=m(n,"DIV",{class:!0});var f=d(L);r(Q.$$.fragment,f),f.forEach(p),X=k(n),tt=m(n,"H2",{});var g=d(tt);at=u(g,"Code"),g.forEach(p),et=k(n),nt=m(n,"DIV",{class:!0});var h=d(nt);r(ot.$$.fragment,h),h.forEach(p),n.forEach(p),this.h()},h(){document.title="Modal Dialog | Svelte Toolkit",g(B,"href","https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal"),g(B,"target","_blank"),g(N,"class","block"),g(L,"class","block"),g(nt,"class","block"),g(e,"class","container")},m(t,n){h(t,a,n),h(t,e,n),v(e,w),v(w,T),v(e,C),v(e,I),v(I,V),v(I,B),v(B,M),v(I,O),v(e,_),v(e,P),v(P,R),v(e,K),v(e,N),s(S,N,null),v(N,J),st&&st.m(N,null),v(e,Y),$t&&$t.m(e,null),v(e,q),v(e,z),v(z,F),v(e,G),v(e,L),s(Q,L,null),v(e,X),v(e,tt),v(tt,at),v(e,et),v(e,nt),s(ot,nt,null),rt=!0},p(t,[a]){const n={};1024&a&&(n.$$scope={dirty:a,ctx:t}),S.$set(n),t[3]?st?(st.p(t,a),8&a&&$(st,1)):(st=A(t),st.c(),$(st,1),st.m(N,null)):st&&(H(),c(st,1,1,(()=>{st=null})),b()),t[2]?$t?$t.p(t,a):($t=Z(t),$t.c(),$t.m(e,q)):$t&&($t.d(1),$t=null);const o={};1024&a&&(o.$$scope={dirty:a,ctx:t}),Q.$set(o);const r={};1040&a&&(r.$$scope={dirty:a,ctx:t}),ot.$set(r)},i(t){rt||($(S.$$.fragment,t),$(st),$(Q.$$.fragment,t),$(ot.$$.fragment,t),rt=!0)},o(t){c(S.$$.fragment,t),c(st),c(Q.$$.fragment,t),c(ot.$$.fragment,t),rt=!1},d(t){t&&p(a),t&&p(e),l(S),st&&st.d(),$t&&$t.d(),l(Q),l(ot)}}}function tt(t,a,e){let n,o="",r="",s="",$=!1;return e(4,n='\n{#if visible}\n  <Modal>\n    <div slot="header">Enter your email:</div>\n    <div slot="body">\n      <div class="block">\n        <TextBox contentType="email" bind:value={email} placeholder="Email" autofocus />\n      </div>\n      <div class="block">\n        <TextBox contentType="email" bind:value={confirmEmail} placeholder="Confirm email" />\n      </div>\n    </div>\n    <div slot="footer">\n      <DialogButton confirm on:click={handleOk}>OK</DialogButton>\n      <DialogButton cancel on:click={handleCancel}>Cancel</DialogButton>\n    </div>\n  </Modal>\n{/if}'.trim()),[o,r,s,$,n,function(){e(3,$=!$)},function(){o===r?(e(2,s="Thank you for confirming your email!"),e(3,$=!1)):alert("The email addresses don't match, please try again.")},function(){e(3,$=!1)},function(t){o=t,e(0,o)},function(t){r=t,e(1,r)}]}class at extends t{constructor(t){super(),a(this,t,tt,X,e,{})}}export{at as default};