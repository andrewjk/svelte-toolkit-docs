(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{20:function(e,t,c){"use strict";c.r(t);var b=c(0),j=c(2);function O(e,t,c){const b=Object.create(e);return b.item=t[c],b}function a(e){var t,c,j,O,a=e.item+"";return{c(){t=Object(b.z)("div"),c=Object(b.z)("div"),j=Object(b.ab)(a),O=Object(b.X)(),this.h()},l(e){t=Object(b.n)(e,"DIV",{class:!0},!1);var n=Object(b.m)(t);c=Object(b.n)(n,"DIV",{class:!0},!1);var r=Object(b.m)(c);j=Object(b.o)(r,a),r.forEach(b.y),n.forEach(b.y),O=Object(b.o)(e,"\r\n        "),this.h()},h(){Object(b.g)(c,"class","bignum svelte-urxww9"),Object(b.g)(t,"class","panel")},m(e,a){Object(b.I)(e,t,a),Object(b.e)(t,c),Object(b.e)(c,j),Object(b.I)(e,O,a)},p(e,t){e.items&&a!==(a=t.item+"")&&Object(b.W)(j,a)},d(e){e&&(Object(b.y)(t),Object(b.y)(O))}}}function n(e){var t,c=new j.eb({props:{$$slots:{default:[a]},$$scope:{ctx:e}}});return{c(){c.$$.fragment.c()},l(e){c.$$.fragment.l(e)},m(e,j){Object(b.L)(c,e,j),t=!0},p(e,t){var b={};(e.$$scope||e.items)&&(b.$$scope={changed:e,ctx:t}),c.$set(b)},i(e){t||(Object(b.eb)(c.$$.fragment,e),t=!0)},o(e){Object(b.fb)(c.$$.fragment,e),t=!1},d(e){Object(b.w)(c,e)}}}function r(e){for(var t,c,j=e.items,a=[],r=0;r<j.length;r+=1)a[r]=n(O(e,j,r));const o=e=>Object(b.fb)(a[e],1,1,()=>{a[e]=null});return{c(){for(var e=0;e<a.length;e+=1)a[e].c();t=Object(b.A)()},l(e){for(var c=0;c<a.length;c+=1)a[c].l(e);t=Object(b.A)()},m(e,j){for(var O=0;O<a.length;O+=1)a[O].m(e,j);Object(b.I)(e,t,j),c=!0},p(e,c){if(e.items){j=c.items;for(var r=0;r<j.length;r+=1){const o=O(c,j,r);a[r]?(a[r].p(e,o),Object(b.eb)(a[r],1)):(a[r]=n(o),a[r].c(),Object(b.eb)(a[r],1),a[r].m(t.parentNode,t))}for(Object(b.G)(),r=j.length;r<a.length;r+=1)o(r);Object(b.l)()}},i(e){if(!c){for(var t=0;t<j.length;t+=1)Object(b.eb)(a[t]);c=!0}},o(e){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)Object(b.fb)(a[e]);c=!1},d(e){Object(b.x)(a,e),e&&Object(b.y)(t)}}}function o(e){var t,c,O,a,n,o,i,m,u,h,p,l,s,g,f,v,d,y,z,E,$,T,N,x,D,X,C,w,_,S,I,H,P,k,A,R,V,B,L,K,U,J,W,Y,G,Q,q,F,M,Z,ee,te,ce,be,je,Oe,ae,ne,re,oe,ie,me,ue,he,pe,le,se,ge,fe,ve,de,ye,ze,Ee,$e,Te,Ne,xe,De,Xe,Ce,we,_e,Se,Ie,He,Pe,ke,Ae,Re,Ve,Be,Le,Ke,Ue,Je,We,Ye,Ge,Qe,qe,Fe,Me;function Ze(t){e.switcher_index_binding.call(null,t),s=!0,Object(b.b)(()=>s=!1)}let et={$$slots:{default:[r]},$$scope:{ctx:e}};void 0!==e.index&&(et.index=e.index);var tt=new j.db({props:et});function ct(t){e.pagination_pageNumber_binding.call(null,t),f=!0,Object(b.b)(()=>f=!1)}b.j.push(()=>Object(b.i)(tt,"index",Ze));let bt={pageSize:e.pageSize,itemCount:e.itemCount};void 0!==e.pageNumber&&(bt.pageNumber=e.pageNumber);var jt=new j.Q({props:bt});return b.j.push(()=>Object(b.i)(jt,"pageNumber",ct)),{c(){t=Object(b.X)(),c=Object(b.z)("div"),O=Object(b.z)("h1"),a=Object(b.ab)("Pagination"),n=Object(b.X)(),o=Object(b.z)("p"),i=Object(b.ab)("Numbers for navigating through components that contain paged data."),m=Object(b.X)(),u=Object(b.z)("h2"),h=Object(b.ab)("Demo"),p=Object(b.X)(),l=Object(b.z)("div"),tt.$$.fragment.c(),g=Object(b.X)(),jt.$$.fragment.c(),v=Object(b.X)(),d=Object(b.z)("h2"),y=Object(b.ab)("Properties"),z=Object(b.X)(),E=Object(b.z)("div"),$=Object(b.z)("table"),T=Object(b.z)("thead"),N=Object(b.z)("tr"),x=Object(b.z)("th"),D=Object(b.ab)("Name"),X=Object(b.X)(),C=Object(b.z)("th"),w=Object(b.ab)("Default"),_=Object(b.X)(),S=Object(b.z)("th"),I=Object(b.ab)("Description"),H=Object(b.X)(),P=Object(b.z)("th"),k=Object(b.ab)("Change"),A=Object(b.X)(),R=Object(b.z)("tbody"),V=Object(b.z)("tr"),B=Object(b.z)("td"),L=Object(b.ab)("pageNumber"),K=Object(b.X)(),U=Object(b.z)("td"),J=Object(b.ab)("1"),W=Object(b.X)(),Y=Object(b.z)("td"),G=Object(b.ab)("the current page number"),Q=Object(b.X)(),q=Object(b.z)("td"),F=Object(b.z)("input"),M=Object(b.X)(),Z=Object(b.z)("tr"),ee=Object(b.z)("td"),te=Object(b.ab)("pageSize"),ce=Object(b.X)(),be=Object(b.z)("td"),je=Object(b.ab)("10"),Oe=Object(b.X)(),ae=Object(b.z)("td"),ne=Object(b.ab)("the number of items displayed on each page"),re=Object(b.X)(),oe=Object(b.z)("td"),ie=Object(b.z)("input"),me=Object(b.X)(),ue=Object(b.z)("tr"),he=Object(b.z)("td"),pe=Object(b.ab)("itemCount"),le=Object(b.X)(),se=Object(b.z)("td"),ge=Object(b.X)(),fe=Object(b.z)("td"),ve=Object(b.ab)("the total number of items"),de=Object(b.X)(),ye=Object(b.z)("td"),ze=Object(b.z)("input"),Ee=Object(b.X)(),$e=Object(b.z)("h2"),Te=Object(b.ab)("Events"),Ne=Object(b.X)(),xe=Object(b.z)("div"),De=Object(b.z)("table"),Xe=Object(b.z)("thead"),Ce=Object(b.z)("tr"),we=Object(b.z)("th"),_e=Object(b.ab)("Name"),Se=Object(b.X)(),Ie=Object(b.z)("th"),He=Object(b.ab)("Args"),Pe=Object(b.X)(),ke=Object(b.z)("tbody"),Ae=Object(b.z)("tr"),Re=Object(b.z)("td"),Ve=Object(b.ab)("change"),Be=Object(b.X)(),Le=Object(b.z)("td"),Ke=Object(b.ab)("value: the number of the current page"),Ue=Object(b.X)(),Je=Object(b.z)("h2"),We=Object(b.ab)("Code"),Ye=Object(b.X)(),Ge=Object(b.z)("div"),Qe=Object(b.z)("pre"),qe=Object(b.ab)(e.exampleCode),this.h()},l(j){t=Object(b.o)(j,"\r\n\r\n"),c=Object(b.n)(j,"DIV",{class:!0},!1);var r=Object(b.m)(c);O=Object(b.n)(r,"H1",{},!1);var s=Object(b.m)(O);a=Object(b.o)(s,"Pagination"),s.forEach(b.y),n=Object(b.o)(r,"\r\n  "),o=Object(b.n)(r,"P",{},!1);var f=Object(b.m)(o);i=Object(b.o)(f,"Numbers for navigating through components that contain paged data."),f.forEach(b.y),m=Object(b.o)(r,"\r\n\r\n  "),u=Object(b.n)(r,"H2",{},!1);var Fe=Object(b.m)(u);h=Object(b.o)(Fe,"Demo"),Fe.forEach(b.y),p=Object(b.o)(r,"\r\n  "),l=Object(b.n)(r,"DIV",{class:!0},!1);var Me=Object(b.m)(l);tt.$$.fragment.l(Me),g=Object(b.o)(Me,"\r\n    "),jt.$$.fragment.l(Me),Me.forEach(b.y),v=Object(b.o)(r,"\r\n\r\n  "),d=Object(b.n)(r,"H2",{},!1);var Ze=Object(b.m)(d);y=Object(b.o)(Ze,"Properties"),Ze.forEach(b.y),z=Object(b.o)(r,"\r\n  "),E=Object(b.n)(r,"DIV",{class:!0},!1);var et=Object(b.m)(E);$=Object(b.n)(et,"TABLE",{class:!0},!1);var ct=Object(b.m)($);T=Object(b.n)(ct,"THEAD",{},!1);var bt=Object(b.m)(T);N=Object(b.n)(bt,"TR",{},!1);var Ot=Object(b.m)(N);x=Object(b.n)(Ot,"TH",{},!1);var at=Object(b.m)(x);D=Object(b.o)(at,"Name"),at.forEach(b.y),X=Object(b.o)(Ot,"\r\n          "),C=Object(b.n)(Ot,"TH",{},!1);var nt=Object(b.m)(C);w=Object(b.o)(nt,"Default"),nt.forEach(b.y),_=Object(b.o)(Ot,"\r\n          "),S=Object(b.n)(Ot,"TH",{},!1);var rt=Object(b.m)(S);I=Object(b.o)(rt,"Description"),rt.forEach(b.y),H=Object(b.o)(Ot,"\r\n          "),P=Object(b.n)(Ot,"TH",{},!1);var ot=Object(b.m)(P);k=Object(b.o)(ot,"Change"),ot.forEach(b.y),Ot.forEach(b.y),bt.forEach(b.y),A=Object(b.o)(ct,"\r\n      "),R=Object(b.n)(ct,"TBODY",{},!1);var it=Object(b.m)(R);V=Object(b.n)(it,"TR",{},!1);var mt=Object(b.m)(V);B=Object(b.n)(mt,"TD",{},!1);var ut=Object(b.m)(B);L=Object(b.o)(ut,"pageNumber"),ut.forEach(b.y),K=Object(b.o)(mt,"\r\n          "),U=Object(b.n)(mt,"TD",{},!1);var ht=Object(b.m)(U);J=Object(b.o)(ht,"1"),ht.forEach(b.y),W=Object(b.o)(mt,"\r\n          "),Y=Object(b.n)(mt,"TD",{},!1);var pt=Object(b.m)(Y);G=Object(b.o)(pt,"the current page number"),pt.forEach(b.y),Q=Object(b.o)(mt,"\r\n          "),q=Object(b.n)(mt,"TD",{},!1);var lt=Object(b.m)(q);F=Object(b.n)(lt,"INPUT",{type:!0},!1),Object(b.m)(F).forEach(b.y),lt.forEach(b.y),mt.forEach(b.y),M=Object(b.o)(it,"\r\n        "),Z=Object(b.n)(it,"TR",{},!1);var st=Object(b.m)(Z);ee=Object(b.n)(st,"TD",{},!1);var gt=Object(b.m)(ee);te=Object(b.o)(gt,"pageSize"),gt.forEach(b.y),ce=Object(b.o)(st,"\r\n          "),be=Object(b.n)(st,"TD",{},!1);var ft=Object(b.m)(be);je=Object(b.o)(ft,"10"),ft.forEach(b.y),Oe=Object(b.o)(st,"\r\n          "),ae=Object(b.n)(st,"TD",{},!1);var vt=Object(b.m)(ae);ne=Object(b.o)(vt,"the number of items displayed on each page"),vt.forEach(b.y),re=Object(b.o)(st,"\r\n          "),oe=Object(b.n)(st,"TD",{},!1);var dt=Object(b.m)(oe);ie=Object(b.n)(dt,"INPUT",{type:!0},!1),Object(b.m)(ie).forEach(b.y),dt.forEach(b.y),st.forEach(b.y),me=Object(b.o)(it,"\r\n        "),ue=Object(b.n)(it,"TR",{},!1);var yt=Object(b.m)(ue);he=Object(b.n)(yt,"TD",{},!1);var zt=Object(b.m)(he);pe=Object(b.o)(zt,"itemCount"),zt.forEach(b.y),le=Object(b.o)(yt,"\r\n          "),se=Object(b.n)(yt,"TD",{},!1),Object(b.m)(se).forEach(b.y),ge=Object(b.o)(yt,"\r\n          "),fe=Object(b.n)(yt,"TD",{},!1);var Et=Object(b.m)(fe);ve=Object(b.o)(Et,"the total number of items"),Et.forEach(b.y),de=Object(b.o)(yt,"\r\n          "),ye=Object(b.n)(yt,"TD",{},!1);var $t=Object(b.m)(ye);ze=Object(b.n)($t,"INPUT",{type:!0},!1),Object(b.m)(ze).forEach(b.y),$t.forEach(b.y),yt.forEach(b.y),it.forEach(b.y),ct.forEach(b.y),et.forEach(b.y),Ee=Object(b.o)(r,"\r\n\r\n  "),$e=Object(b.n)(r,"H2",{},!1);var Tt=Object(b.m)($e);Te=Object(b.o)(Tt,"Events"),Tt.forEach(b.y),Ne=Object(b.o)(r,"\r\n  "),xe=Object(b.n)(r,"DIV",{class:!0},!1);var Nt=Object(b.m)(xe);De=Object(b.n)(Nt,"TABLE",{class:!0},!1);var xt=Object(b.m)(De);Xe=Object(b.n)(xt,"THEAD",{},!1);var Dt=Object(b.m)(Xe);Ce=Object(b.n)(Dt,"TR",{},!1);var Xt=Object(b.m)(Ce);we=Object(b.n)(Xt,"TH",{},!1);var Ct=Object(b.m)(we);_e=Object(b.o)(Ct,"Name"),Ct.forEach(b.y),Se=Object(b.o)(Xt,"\r\n          "),Ie=Object(b.n)(Xt,"TH",{},!1);var wt=Object(b.m)(Ie);He=Object(b.o)(wt,"Args"),wt.forEach(b.y),Xt.forEach(b.y),Dt.forEach(b.y),Pe=Object(b.o)(xt,"\r\n      "),ke=Object(b.n)(xt,"TBODY",{},!1);var _t=Object(b.m)(ke);Ae=Object(b.n)(_t,"TR",{},!1);var St=Object(b.m)(Ae);Re=Object(b.n)(St,"TD",{},!1);var It=Object(b.m)(Re);Ve=Object(b.o)(It,"change"),It.forEach(b.y),Be=Object(b.o)(St,"\r\n          "),Le=Object(b.n)(St,"TD",{},!1);var Ht=Object(b.m)(Le);Ke=Object(b.o)(Ht,"value: the number of the current page"),Ht.forEach(b.y),St.forEach(b.y),_t.forEach(b.y),xt.forEach(b.y),Nt.forEach(b.y),Ue=Object(b.o)(r,"\r\n\r\n  "),Je=Object(b.n)(r,"H2",{},!1);var Pt=Object(b.m)(Je);We=Object(b.o)(Pt,"Code"),Pt.forEach(b.y),Ye=Object(b.o)(r,"\r\n  "),Ge=Object(b.n)(r,"DIV",{class:!0},!1);var kt=Object(b.m)(Ge);Qe=Object(b.n)(kt,"PRE",{},!1);var At=Object(b.m)(Qe);qe=Object(b.o)(At,e.exampleCode),At.forEach(b.y),kt.forEach(b.y),r.forEach(b.y),this.h()},h(){document.title="Pagination | Svelte Toolkit",Object(b.g)(l,"class","block"),Object(b.g)(F,"type","number"),Object(b.g)(ie,"type","number"),Object(b.g)(ze,"type","number"),Object(b.g)($,"class","table"),Object(b.g)(E,"class","block"),Object(b.g)(De,"class","table"),Object(b.g)(xe,"class","block"),Object(b.g)(Ge,"class","block"),Object(b.g)(c,"class","container"),Me=[Object(b.K)(F,"input",e.input0_input_handler),Object(b.K)(ie,"input",e.input1_input_handler),Object(b.K)(ze,"input",e.input2_input_handler)]},m(j,r){Object(b.I)(j,t,r),Object(b.I)(j,c,r),Object(b.e)(c,O),Object(b.e)(O,a),Object(b.e)(c,n),Object(b.e)(c,o),Object(b.e)(o,i),Object(b.e)(c,m),Object(b.e)(c,u),Object(b.e)(u,h),Object(b.e)(c,p),Object(b.e)(c,l),Object(b.L)(tt,l,null),Object(b.e)(l,g),Object(b.L)(jt,l,null),Object(b.e)(c,v),Object(b.e)(c,d),Object(b.e)(d,y),Object(b.e)(c,z),Object(b.e)(c,E),Object(b.e)(E,$),Object(b.e)($,T),Object(b.e)(T,N),Object(b.e)(N,x),Object(b.e)(x,D),Object(b.e)(N,X),Object(b.e)(N,C),Object(b.e)(C,w),Object(b.e)(N,_),Object(b.e)(N,S),Object(b.e)(S,I),Object(b.e)(N,H),Object(b.e)(N,P),Object(b.e)(P,k),Object(b.e)($,A),Object(b.e)($,R),Object(b.e)(R,V),Object(b.e)(V,B),Object(b.e)(B,L),Object(b.e)(V,K),Object(b.e)(V,U),Object(b.e)(U,J),Object(b.e)(V,W),Object(b.e)(V,Y),Object(b.e)(Y,G),Object(b.e)(V,Q),Object(b.e)(V,q),Object(b.e)(q,F),F.value=e.pageNumber,Object(b.e)(R,M),Object(b.e)(R,Z),Object(b.e)(Z,ee),Object(b.e)(ee,te),Object(b.e)(Z,ce),Object(b.e)(Z,be),Object(b.e)(be,je),Object(b.e)(Z,Oe),Object(b.e)(Z,ae),Object(b.e)(ae,ne),Object(b.e)(Z,re),Object(b.e)(Z,oe),Object(b.e)(oe,ie),ie.value=e.pageSize,Object(b.e)(R,me),Object(b.e)(R,ue),Object(b.e)(ue,he),Object(b.e)(he,pe),Object(b.e)(ue,le),Object(b.e)(ue,se),Object(b.e)(ue,ge),Object(b.e)(ue,fe),Object(b.e)(fe,ve),Object(b.e)(ue,de),Object(b.e)(ue,ye),Object(b.e)(ye,ze),ze.value=e.itemCount,Object(b.e)(c,Ee),Object(b.e)(c,$e),Object(b.e)($e,Te),Object(b.e)(c,Ne),Object(b.e)(c,xe),Object(b.e)(xe,De),Object(b.e)(De,Xe),Object(b.e)(Xe,Ce),Object(b.e)(Ce,we),Object(b.e)(we,_e),Object(b.e)(Ce,Se),Object(b.e)(Ce,Ie),Object(b.e)(Ie,He),Object(b.e)(De,Pe),Object(b.e)(De,ke),Object(b.e)(ke,Ae),Object(b.e)(Ae,Re),Object(b.e)(Re,Ve),Object(b.e)(Ae,Be),Object(b.e)(Ae,Le),Object(b.e)(Le,Ke),Object(b.e)(c,Ue),Object(b.e)(c,Je),Object(b.e)(Je,We),Object(b.e)(c,Ye),Object(b.e)(c,Ge),Object(b.e)(Ge,Qe),Object(b.e)(Qe,qe),Fe=!0},p(e,t){var c={};(e.$$scope||e.items)&&(c.$$scope={changed:e,ctx:t}),!s&&e.index&&(c.index=t.index),tt.$set(c);var j={};e.pageSize&&(j.pageSize=t.pageSize),e.itemCount&&(j.itemCount=t.itemCount),!f&&e.pageNumber&&(j.pageNumber=t.pageNumber),jt.$set(j),e.pageNumber&&(F.value=t.pageNumber),e.pageSize&&(ie.value=t.pageSize),e.itemCount&&(ze.value=t.itemCount),Fe&&!e.exampleCode||Object(b.W)(qe,t.exampleCode)},i(e){Fe||(Object(b.eb)(tt.$$.fragment,e),Object(b.eb)(jt.$$.fragment,e),Fe=!0)},o(e){Object(b.fb)(tt.$$.fragment,e),Object(b.fb)(jt.$$.fragment,e),Fe=!1},d(e){e&&(Object(b.y)(t),Object(b.y)(c)),Object(b.w)(tt),Object(b.w)(jt),Object(b.R)(Me)}}}function i(e,t,c){let j,O,a,n=1,r=10,o=50;return e.$$.update=(e={pageNumber:1,itemCount:1,pageSize:1})=>{e.pageNumber&&c("index",j=n-1),e.itemCount&&c("items",O=[...Array(o).keys()].map(e=>++e)),(e.pageNumber||e.pageSize||e.itemCount)&&c("exampleCode",a=`\nimport { Pagination } from "svelte-toolkit";\n\n<Pagination pageNumber={${n}} pageSize={${r}} itemCount={${o}} />`.trim())},{pageNumber:n,pageSize:r,itemCount:o,index:j,items:O,exampleCode:a,switcher_index_binding:function(e){c("index",j=e),c("pageNumber",n)},pagination_pageNumber_binding:function(e){c("pageNumber",n=e)},input0_input_handler:function(){n=Object(b.cb)(this.value),c("pageNumber",n)},input1_input_handler:function(){r=Object(b.cb)(this.value),c("pageSize",r)},input2_input_handler:function(){o=Object(b.cb)(this.value),c("itemCount",o)}}}t.default=class extends b.a{constructor(e){var t;super(),document.getElementById("svelte-urxww9-style")||((t=Object(b.z)("style")).id="svelte-urxww9-style",t.textContent=".bignum.svelte-urxww9{color:darkgray;font-size:96px;line-height:1.4;text-align:center}",Object(b.e)(document.head,t)),Object(b.H)(this,e,i,o,b.S,[])}}}}]);