import{S as e,i as a,s as t,bb as r,bc as n,a1 as s,ae as o,aJ as l,k as $,e as f,t as c,j as i,M as d,d as m,n as u,c as h,a as p,g as v,m as g,b as E,f as b,D as w,o as x,af as y,h as k,x as V,u as D,v as C,aZ as R,E as H,bd as I}from"../../chunks/vendor-f76ba110.js";function P(e){let a,t;return a=new R({}),{c(){i(a.$$.fragment)},l(e){g(a.$$.fragment,e)},m(e,r){x(a,e,r),t=!0},i(e){t||(V(a.$$.fragment,e),t=!0)},o(e){D(a.$$.fragment,e),t=!1},d(e){C(a,e)}}}function q(e){let a,t;return a=new R({props:{id:"four-numbers-input"}}),{c(){i(a.$$.fragment)},l(e){g(a.$$.fragment,e)},m(e,r){x(a,e,r),t=!0},p:H,i(e){t||(V(a.$$.fragment,e),t=!0)},o(e){D(a.$$.fragment,e),t=!1},d(e){C(a,e)}}}function L(e){let a,t;return{c(){a=f("label"),t=c("Please enter four numbers:"),this.h()},l(e){a=h(e,"LABEL",{for:!0,slot:!0});var r=p(a);t=v(r,"Please enter four numbers:"),r.forEach(m),this.h()},h(){E(a,"for","four-numbers-input"),E(a,"slot","label")},m(e,r){b(e,a,r),w(a,t)},d(e){e&&m(a)}}}function N(e){let a,t;return a=new R({props:{contentType:"password",id:"two-passwords-input"}}),{c(){i(a.$$.fragment)},l(e){g(a.$$.fragment,e)},m(e,r){x(a,e,r),t=!0},p:H,i(e){t||(V(a.$$.fragment,e),t=!0)},o(e){D(a.$$.fragment,e),t=!1},d(e){C(a,e)}}}function T(e){let a,t;return{c(){a=f("label"),t=c("Enter two fields that are the same:"),this.h()},l(e){a=h(e,"LABEL",{for:!0,slot:!0});var r=p(a);t=v(r,"Enter two fields that are the same:"),r.forEach(m),this.h()},h(){E(a,"for","two-passwords-input"),E(a,"slot","label")},m(e,r){b(e,a,r),w(a,t)},d(e){e&&m(a)}}}function j(e){let a,t;return a=new R({props:{contentType:"password"}}),{c(){i(a.$$.fragment)},l(e){g(a.$$.fragment,e)},m(e,r){x(a,e,r),t=!0},p:H,i(e){t||(V(a.$$.fragment,e),t=!0)},o(e){D(a.$$.fragment,e),t=!1},d(e){C(a,e)}}}function A(e){let a;return{c(){a=c("Check it")},l(e){a=v(e,"Check it")},m(e,t){b(e,a,t)},d(e){e&&m(a)}}}function B(e){let a,t,R,H,I,B,S,J,M,Z,z,F,G,K,O,Q,U,W,X,Y,_,ee,ae,te,re,ne,se,oe,le,$e,fe,ce,ie,de,me,ue,he,pe,ve,ge,Ee,be,we,xe,ye,ke,Ve;function De(a){e[7](a)}F=new r({props:{validator:e[4]}});let Ce={label:"Please enter something:",name:"field1",validator:e[4],required:!0,minlength:"2",maxlength:"10",friendlyName:"Required field",$$slots:{default:[P]},$$scope:{ctx:e}};function Re(a){e[8](a)}void 0!==e[0]&&(Ce.value=e[0]),W=new n({props:Ce}),s.push((()=>o(W,"value",De)));let He={name:"field2",validator:e[4],regex:/^\d{4}$/,friendlyName:"Regex field",$$slots:{label:[L],default:[q]},$$scope:{ctx:e}};function Ie(a){e[9](a)}void 0!==e[1]&&(He.value=e[1]),re=new n({props:He}),s.push((()=>o(re,"value",Re)));let Pe={name:"field3",validator:e[4],friendlyName:"Password",$$slots:{label:[T],default:[N]},$$scope:{ctx:e}};function qe(a){e[10](a)}void 0!==e[2]&&(Pe.value=e[2]),ce=new n({props:Pe}),s.push((()=>o(ce,"value",Ie)));let Le={name:"field4",validator:e[4],compareTo:"field3",friendlyName:"Confirm password",$$slots:{default:[j]},$$scope:{ctx:e}};return void 0!==e[3]&&(Le.value=e[3]),me=new n({props:Le}),s.push((()=>o(me,"value",qe))),ve=new l({props:{$$slots:{default:[A]},$$scope:{ctx:e}}}),ve.$on("click",e[6]),{c(){a=$(),t=f("div"),R=f("h1"),H=c("Validation"),I=$(),B=f("p"),S=c("Validation for form elements."),J=$(),M=f("h2"),Z=c("Demo"),z=$(),i(F.$$.fragment),G=$(),K=f("div"),O=f("h4"),Q=c("Required"),U=$(),i(W.$$.fragment),Y=$(),_=f("div"),ee=f("h4"),ae=c("Regex"),te=$(),i(re.$$.fragment),se=$(),oe=f("div"),le=f("h4"),$e=c("Compare"),fe=$(),i(ce.$$.fragment),de=$(),i(me.$$.fragment),he=$(),pe=f("div"),i(ve.$$.fragment),ge=$(),Ee=f("h2"),be=c("Code"),we=$(),xe=f("div"),ye=f("pre"),ke=c(e[5]),this.h()},l(r){d('[data-svelte="svelte-ru15y9"]',document.head).forEach(m),a=u(r),t=h(r,"DIV",{class:!0});var n=p(t);R=h(n,"H1",{});var s=p(R);H=v(s,"Validation"),s.forEach(m),I=u(n),B=h(n,"P",{});var o=p(B);S=v(o,"Validation for form elements."),o.forEach(m),J=u(n),M=h(n,"H2",{});var l=p(M);Z=v(l,"Demo"),l.forEach(m),z=u(n),g(F.$$.fragment,n),G=u(n),K=h(n,"DIV",{class:!0});var $=p(K);O=h($,"H4",{});var f=p(O);Q=v(f,"Required"),f.forEach(m),U=u($),g(W.$$.fragment,$),$.forEach(m),Y=u(n),_=h(n,"DIV",{class:!0});var c=p(_);ee=h(c,"H4",{});var i=p(ee);ae=v(i,"Regex"),i.forEach(m),te=u(c),g(re.$$.fragment,c),c.forEach(m),se=u(n),oe=h(n,"DIV",{class:!0});var E=p(oe);le=h(E,"H4",{});var b=p(le);$e=v(b,"Compare"),b.forEach(m),fe=u(E),g(ce.$$.fragment,E),de=u(E),g(me.$$.fragment,E),E.forEach(m),he=u(n),pe=h(n,"DIV",{class:!0});var w=p(pe);g(ve.$$.fragment,w),w.forEach(m),ge=u(n),Ee=h(n,"H2",{});var x=p(Ee);be=v(x,"Code"),x.forEach(m),we=u(n),xe=h(n,"DIV",{class:!0});var y=p(xe);ye=h(y,"PRE",{});var k=p(ye);ke=v(k,e[5]),k.forEach(m),y.forEach(m),n.forEach(m),this.h()},h(){document.title="Validation | Svelte Toolkit",E(K,"class","block"),E(_,"class","block"),E(oe,"class","block"),E(pe,"class","block"),E(xe,"class","block"),E(t,"class","container")},m(e,r){b(e,a,r),b(e,t,r),w(t,R),w(R,H),w(t,I),w(t,B),w(B,S),w(t,J),w(t,M),w(M,Z),w(t,z),x(F,t,null),w(t,G),w(t,K),w(K,O),w(O,Q),w(K,U),x(W,K,null),w(t,Y),w(t,_),w(_,ee),w(ee,ae),w(_,te),x(re,_,null),w(t,se),w(t,oe),w(oe,le),w(le,$e),w(oe,fe),x(ce,oe,null),w(oe,de),x(me,oe,null),w(t,he),w(t,pe),x(ve,pe,null),w(t,ge),w(t,Ee),w(Ee,be),w(t,we),w(t,xe),w(xe,ye),w(ye,ke),Ve=!0},p(e,[a]){const t={};16&a&&(t.validator=e[4]),F.$set(t);const r={};16&a&&(r.validator=e[4]),2048&a&&(r.$$scope={dirty:a,ctx:e}),!X&&1&a&&(X=!0,r.value=e[0],y((()=>X=!1))),W.$set(r);const n={};16&a&&(n.validator=e[4]),2048&a&&(n.$$scope={dirty:a,ctx:e}),!ne&&2&a&&(ne=!0,n.value=e[1],y((()=>ne=!1))),re.$set(n);const s={};16&a&&(s.validator=e[4]),2048&a&&(s.$$scope={dirty:a,ctx:e}),!ie&&4&a&&(ie=!0,s.value=e[2],y((()=>ie=!1))),ce.$set(s);const o={};16&a&&(o.validator=e[4]),2048&a&&(o.$$scope={dirty:a,ctx:e}),!ue&&8&a&&(ue=!0,o.value=e[3],y((()=>ue=!1))),me.$set(o);const l={};2048&a&&(l.$$scope={dirty:a,ctx:e}),ve.$set(l),(!Ve||32&a)&&k(ke,e[5])},i(e){Ve||(V(F.$$.fragment,e),V(W.$$.fragment,e),V(re.$$.fragment,e),V(ce.$$.fragment,e),V(me.$$.fragment,e),V(ve.$$.fragment,e),Ve=!0)},o(e){D(F.$$.fragment,e),D(W.$$.fragment,e),D(re.$$.fragment,e),D(ce.$$.fragment,e),D(me.$$.fragment,e),D(ve.$$.fragment,e),Ve=!1},d(e){e&&m(a),e&&m(t),C(F),C(W),C(re),C(ce),C(me),C(ve)}}}function S(e,a,t){let r,n="",s="",o="",l="",$=new I(!1);return t(5,r=""),[n,s,o,l,$,"",function(){t(4,$.active=!0,$),$.validate()},function(e){n=e,t(0,n)},function(e){s=e,t(1,s)},function(e){o=e,t(2,o)},function(e){l=e,t(3,l)}]}class J extends e{constructor(e){super(),a(this,e,S,B,t,{})}}export{J as default};
