(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{17:function(e,t,c){"use strict";c.r(t);var b=c(0),O=c(2);function j(e,t,c){const b=Object.create(e);return b.item=t[c],b}function n(e){var t,c,O,j,n=e.item;return{c(){t=Object(b.y)("div"),c=Object(b.y)("div"),O=Object(b.W)(n),j=Object(b.T)(),this.h()},l(e){t=Object(b.n)(e,"DIV",{class:!0},!1);var a=Object(b.m)(t);c=Object(b.n)(a,"DIV",{class:!0},!1);var r=Object(b.m)(c);O=Object(b.o)(r,n),r.forEach(b.x),a.forEach(b.x),j=Object(b.o)(e,"\r\n        "),this.h()},h(){Object(b.g)(c,"class","bignum svelte-urxww9"),Object(b.g)(t,"class","panel")},m(e,n){Object(b.G)(e,t,n),Object(b.e)(t,c),Object(b.e)(c,O),Object(b.G)(e,j,n)},p(e,t){e.items&&n!==(n=t.item)&&Object(b.S)(O,n)},d(e){e&&(Object(b.x)(t),Object(b.x)(j))}}}function a(e){var t,c=new O.Q({props:{$$slots:{default:[n]},$$scope:{ctx:e}}});return{c(){c.$$.fragment.c()},l(e){c.$$.fragment.l(e)},m(e,O){Object(b.J)(c,e,O),t=!0},p(e,t){var b={};(e.$$scope||e.items)&&(b.$$scope={changed:e,ctx:t}),c.$set(b)},i(e){t||(Object(b.ab)(c.$$.fragment,e),t=!0)},o(e){Object(b.bb)(c.$$.fragment,e),t=!1},d(e){Object(b.v)(c,e)}}}function r(e){for(var t,c,O=e.items,n=[],r=0;r<O.length;r+=1)n[r]=a(j(e,O,r));const o=e=>Object(b.bb)(n[e],1,()=>{n[e]=null});return{c(){for(var e=0;e<n.length;e+=1)n[e].c();t=Object(b.z)()},l(e){for(var c=0;c<n.length;c+=1)n[c].l(e);t=Object(b.z)()},m(e,O){for(var j=0;j<n.length;j+=1)n[j].m(e,O);Object(b.G)(e,t,O),c=!0},p(e,c){if(e.items){O=c.items;for(var r=0;r<O.length;r+=1){const o=j(c,O,r);n[r]?(n[r].p(e,o),Object(b.ab)(n[r],1)):(n[r]=a(o),n[r].c(),Object(b.ab)(n[r],1),n[r].m(t.parentNode,t))}for(Object(b.E)(),r=O.length;r<n.length;r+=1)o(r);Object(b.l)()}},i(e){if(!c){for(var t=0;t<O.length;t+=1)Object(b.ab)(n[t]);c=!0}},o(e){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)Object(b.bb)(n[e]);c=!1},d(e){Object(b.w)(n,e),e&&Object(b.x)(t)}}}function o(e){var t,c,j,n,a,o,i,m,u,h,p,l,s,g,f,v,d,x,y,T,E,$,N,D,C,W,w,_,z,S,I,H,P,k,A,R,V,B,G,J,Y,U,L,F,Q,q,K,M,X,Z,ee,te,ce,be,Oe,je,ne,ae,re,oe,ie,me,ue,he,pe,le,se,ge,fe,ve,de,xe,ye,Te,Ee,$e,Ne,De,Ce,We,we,_e,ze,Se,Ie,He,Pe,ke,Ae,Re,Ve,Be,Ge,Je,Ye,Ue,Le,Fe,Qe,qe,Ke,Me,Xe;function Ze(t){e.switcher_index_binding.call(null,t),s=!0,Object(b.b)(()=>s=!1)}let et={$$slots:{default:[r]},$$scope:{ctx:e}};void 0!==e.index&&(et.index=e.index);var tt=new O.P({props:et});function ct(t){e.pagination_pageNumber_binding.call(null,t),f=!0,Object(b.b)(()=>f=!1)}b.j.push(()=>Object(b.i)(tt,"index",Ze));let bt={pageSize:e.pageSize,itemCount:e.itemCount};void 0!==e.pageNumber&&(bt.pageNumber=e.pageNumber);var Ot=new O.I({props:bt});return b.j.push(()=>Object(b.i)(Ot,"pageNumber",ct)),{c(){t=Object(b.T)(),c=Object(b.y)("div"),j=Object(b.y)("h2"),n=Object(b.W)("Pagination"),a=Object(b.T)(),o=Object(b.y)("p"),i=Object(b.W)("Numbers for navigating through components that contain paged data."),m=Object(b.T)(),u=Object(b.y)("h3"),h=Object(b.W)("Demo"),p=Object(b.T)(),l=Object(b.y)("div"),tt.$$.fragment.c(),g=Object(b.T)(),Ot.$$.fragment.c(),v=Object(b.T)(),d=Object(b.y)("h3"),x=Object(b.W)("Properties"),y=Object(b.T)(),T=Object(b.y)("div"),E=Object(b.y)("table"),$=Object(b.y)("thead"),N=Object(b.y)("tr"),D=Object(b.y)("th"),C=Object(b.W)("Name"),W=Object(b.T)(),w=Object(b.y)("th"),_=Object(b.W)("Default"),z=Object(b.T)(),S=Object(b.y)("th"),I=Object(b.W)("Description"),H=Object(b.T)(),P=Object(b.y)("th"),k=Object(b.W)("Change"),A=Object(b.T)(),R=Object(b.y)("tbody"),V=Object(b.y)("tr"),B=Object(b.y)("td"),G=Object(b.W)("pageNumber"),J=Object(b.T)(),Y=Object(b.y)("td"),U=Object(b.W)("1"),L=Object(b.T)(),F=Object(b.y)("td"),Q=Object(b.W)("the current page number"),q=Object(b.T)(),K=Object(b.y)("td"),M=Object(b.y)("input"),X=Object(b.T)(),Z=Object(b.y)("tr"),ee=Object(b.y)("td"),te=Object(b.W)("pageSize"),ce=Object(b.T)(),be=Object(b.y)("td"),Oe=Object(b.W)("10"),je=Object(b.T)(),ne=Object(b.y)("td"),ae=Object(b.W)("the number of items displayed on each page"),re=Object(b.T)(),oe=Object(b.y)("td"),ie=Object(b.y)("input"),me=Object(b.T)(),ue=Object(b.y)("tr"),he=Object(b.y)("td"),pe=Object(b.W)("itemCount"),le=Object(b.T)(),se=Object(b.y)("td"),ge=Object(b.T)(),fe=Object(b.y)("td"),ve=Object(b.W)("the total number of items"),de=Object(b.T)(),xe=Object(b.y)("td"),ye=Object(b.y)("input"),Te=Object(b.T)(),Ee=Object(b.y)("h3"),$e=Object(b.W)("Events"),Ne=Object(b.T)(),De=Object(b.y)("div"),Ce=Object(b.y)("table"),We=Object(b.y)("thead"),we=Object(b.y)("tr"),_e=Object(b.y)("th"),ze=Object(b.W)("Name"),Se=Object(b.T)(),Ie=Object(b.y)("th"),He=Object(b.W)("Args"),Pe=Object(b.T)(),ke=Object(b.y)("tbody"),Ae=Object(b.y)("tr"),Re=Object(b.y)("td"),Ve=Object(b.W)("change"),Be=Object(b.T)(),Ge=Object(b.y)("td"),Je=Object(b.W)("value: the number of the current page"),Ye=Object(b.T)(),Ue=Object(b.y)("h3"),Le=Object(b.W)("Code"),Fe=Object(b.T)(),Qe=Object(b.y)("div"),qe=Object(b.y)("pre"),Ke=Object(b.W)(e.exampleCode),this.h()},l(O){t=Object(b.o)(O,"\r\n\r\n"),c=Object(b.n)(O,"DIV",{class:!0},!1);var r=Object(b.m)(c);j=Object(b.n)(r,"H2",{},!1);var s=Object(b.m)(j);n=Object(b.o)(s,"Pagination"),s.forEach(b.x),a=Object(b.o)(r,"\r\n  "),o=Object(b.n)(r,"P",{},!1);var f=Object(b.m)(o);i=Object(b.o)(f,"Numbers for navigating through components that contain paged data."),f.forEach(b.x),m=Object(b.o)(r,"\r\n\r\n  "),u=Object(b.n)(r,"H3",{},!1);var Me=Object(b.m)(u);h=Object(b.o)(Me,"Demo"),Me.forEach(b.x),p=Object(b.o)(r,"\r\n  "),l=Object(b.n)(r,"DIV",{class:!0},!1);var Xe=Object(b.m)(l);tt.$$.fragment.l(Xe),g=Object(b.o)(Xe,"\r\n    "),Ot.$$.fragment.l(Xe),Xe.forEach(b.x),v=Object(b.o)(r,"\r\n\r\n  "),d=Object(b.n)(r,"H3",{},!1);var Ze=Object(b.m)(d);x=Object(b.o)(Ze,"Properties"),Ze.forEach(b.x),y=Object(b.o)(r,"\r\n  "),T=Object(b.n)(r,"DIV",{class:!0},!1);var et=Object(b.m)(T);E=Object(b.n)(et,"TABLE",{class:!0},!1);var ct=Object(b.m)(E);$=Object(b.n)(ct,"THEAD",{},!1);var bt=Object(b.m)($);N=Object(b.n)(bt,"TR",{},!1);var jt=Object(b.m)(N);D=Object(b.n)(jt,"TH",{},!1);var nt=Object(b.m)(D);C=Object(b.o)(nt,"Name"),nt.forEach(b.x),W=Object(b.o)(jt,"\r\n          "),w=Object(b.n)(jt,"TH",{},!1);var at=Object(b.m)(w);_=Object(b.o)(at,"Default"),at.forEach(b.x),z=Object(b.o)(jt,"\r\n          "),S=Object(b.n)(jt,"TH",{},!1);var rt=Object(b.m)(S);I=Object(b.o)(rt,"Description"),rt.forEach(b.x),H=Object(b.o)(jt,"\r\n          "),P=Object(b.n)(jt,"TH",{},!1);var ot=Object(b.m)(P);k=Object(b.o)(ot,"Change"),ot.forEach(b.x),jt.forEach(b.x),bt.forEach(b.x),A=Object(b.o)(ct,"\r\n      "),R=Object(b.n)(ct,"TBODY",{},!1);var it=Object(b.m)(R);V=Object(b.n)(it,"TR",{},!1);var mt=Object(b.m)(V);B=Object(b.n)(mt,"TD",{},!1);var ut=Object(b.m)(B);G=Object(b.o)(ut,"pageNumber"),ut.forEach(b.x),J=Object(b.o)(mt,"\r\n          "),Y=Object(b.n)(mt,"TD",{},!1);var ht=Object(b.m)(Y);U=Object(b.o)(ht,"1"),ht.forEach(b.x),L=Object(b.o)(mt,"\r\n          "),F=Object(b.n)(mt,"TD",{},!1);var pt=Object(b.m)(F);Q=Object(b.o)(pt,"the current page number"),pt.forEach(b.x),q=Object(b.o)(mt,"\r\n          "),K=Object(b.n)(mt,"TD",{},!1);var lt=Object(b.m)(K);M=Object(b.n)(lt,"INPUT",{type:!0},!1),Object(b.m)(M).forEach(b.x),lt.forEach(b.x),mt.forEach(b.x),X=Object(b.o)(it,"\r\n        "),Z=Object(b.n)(it,"TR",{},!1);var st=Object(b.m)(Z);ee=Object(b.n)(st,"TD",{},!1);var gt=Object(b.m)(ee);te=Object(b.o)(gt,"pageSize"),gt.forEach(b.x),ce=Object(b.o)(st,"\r\n          "),be=Object(b.n)(st,"TD",{},!1);var ft=Object(b.m)(be);Oe=Object(b.o)(ft,"10"),ft.forEach(b.x),je=Object(b.o)(st,"\r\n          "),ne=Object(b.n)(st,"TD",{},!1);var vt=Object(b.m)(ne);ae=Object(b.o)(vt,"the number of items displayed on each page"),vt.forEach(b.x),re=Object(b.o)(st,"\r\n          "),oe=Object(b.n)(st,"TD",{},!1);var dt=Object(b.m)(oe);ie=Object(b.n)(dt,"INPUT",{type:!0},!1),Object(b.m)(ie).forEach(b.x),dt.forEach(b.x),st.forEach(b.x),me=Object(b.o)(it,"\r\n        "),ue=Object(b.n)(it,"TR",{},!1);var xt=Object(b.m)(ue);he=Object(b.n)(xt,"TD",{},!1);var yt=Object(b.m)(he);pe=Object(b.o)(yt,"itemCount"),yt.forEach(b.x),le=Object(b.o)(xt,"\r\n          "),se=Object(b.n)(xt,"TD",{},!1),Object(b.m)(se).forEach(b.x),ge=Object(b.o)(xt,"\r\n          "),fe=Object(b.n)(xt,"TD",{},!1);var Tt=Object(b.m)(fe);ve=Object(b.o)(Tt,"the total number of items"),Tt.forEach(b.x),de=Object(b.o)(xt,"\r\n          "),xe=Object(b.n)(xt,"TD",{},!1);var Et=Object(b.m)(xe);ye=Object(b.n)(Et,"INPUT",{type:!0},!1),Object(b.m)(ye).forEach(b.x),Et.forEach(b.x),xt.forEach(b.x),it.forEach(b.x),ct.forEach(b.x),et.forEach(b.x),Te=Object(b.o)(r,"\r\n\r\n  "),Ee=Object(b.n)(r,"H3",{},!1);var $t=Object(b.m)(Ee);$e=Object(b.o)($t,"Events"),$t.forEach(b.x),Ne=Object(b.o)(r,"\r\n  "),De=Object(b.n)(r,"DIV",{class:!0},!1);var Nt=Object(b.m)(De);Ce=Object(b.n)(Nt,"TABLE",{class:!0},!1);var Dt=Object(b.m)(Ce);We=Object(b.n)(Dt,"THEAD",{},!1);var Ct=Object(b.m)(We);we=Object(b.n)(Ct,"TR",{},!1);var Wt=Object(b.m)(we);_e=Object(b.n)(Wt,"TH",{},!1);var wt=Object(b.m)(_e);ze=Object(b.o)(wt,"Name"),wt.forEach(b.x),Se=Object(b.o)(Wt,"\r\n          "),Ie=Object(b.n)(Wt,"TH",{},!1);var _t=Object(b.m)(Ie);He=Object(b.o)(_t,"Args"),_t.forEach(b.x),Wt.forEach(b.x),Ct.forEach(b.x),Pe=Object(b.o)(Dt,"\r\n      "),ke=Object(b.n)(Dt,"TBODY",{},!1);var zt=Object(b.m)(ke);Ae=Object(b.n)(zt,"TR",{},!1);var St=Object(b.m)(Ae);Re=Object(b.n)(St,"TD",{},!1);var It=Object(b.m)(Re);Ve=Object(b.o)(It,"change"),It.forEach(b.x),Be=Object(b.o)(St,"\r\n          "),Ge=Object(b.n)(St,"TD",{},!1);var Ht=Object(b.m)(Ge);Je=Object(b.o)(Ht,"value: the number of the current page"),Ht.forEach(b.x),St.forEach(b.x),zt.forEach(b.x),Dt.forEach(b.x),Nt.forEach(b.x),Ye=Object(b.o)(r,"\r\n\r\n  "),Ue=Object(b.n)(r,"H3",{},!1);var Pt=Object(b.m)(Ue);Le=Object(b.o)(Pt,"Code"),Pt.forEach(b.x),Fe=Object(b.o)(r,"\r\n  "),Qe=Object(b.n)(r,"DIV",{class:!0},!1);var kt=Object(b.m)(Qe);qe=Object(b.n)(kt,"PRE",{},!1);var At=Object(b.m)(qe);Ke=Object(b.o)(At,e.exampleCode),At.forEach(b.x),kt.forEach(b.x),r.forEach(b.x),this.h()},h(){document.title="Pagination | Svelte Toolkit",Object(b.g)(l,"class","block"),Object(b.g)(M,"type","number"),Object(b.g)(ie,"type","number"),Object(b.g)(ye,"type","number"),Object(b.g)(E,"class","table"),Object(b.g)(T,"class","block"),Object(b.g)(Ce,"class","table"),Object(b.g)(De,"class","block"),Object(b.g)(Qe,"class","block"),Object(b.g)(c,"class","container"),Xe=[Object(b.I)(M,"input",e.input0_input_handler),Object(b.I)(ie,"input",e.input1_input_handler),Object(b.I)(ye,"input",e.input2_input_handler)]},m(O,r){Object(b.G)(O,t,r),Object(b.G)(O,c,r),Object(b.e)(c,j),Object(b.e)(j,n),Object(b.e)(c,a),Object(b.e)(c,o),Object(b.e)(o,i),Object(b.e)(c,m),Object(b.e)(c,u),Object(b.e)(u,h),Object(b.e)(c,p),Object(b.e)(c,l),Object(b.J)(tt,l,null),Object(b.e)(l,g),Object(b.J)(Ot,l,null),Object(b.e)(c,v),Object(b.e)(c,d),Object(b.e)(d,x),Object(b.e)(c,y),Object(b.e)(c,T),Object(b.e)(T,E),Object(b.e)(E,$),Object(b.e)($,N),Object(b.e)(N,D),Object(b.e)(D,C),Object(b.e)(N,W),Object(b.e)(N,w),Object(b.e)(w,_),Object(b.e)(N,z),Object(b.e)(N,S),Object(b.e)(S,I),Object(b.e)(N,H),Object(b.e)(N,P),Object(b.e)(P,k),Object(b.e)(E,A),Object(b.e)(E,R),Object(b.e)(R,V),Object(b.e)(V,B),Object(b.e)(B,G),Object(b.e)(V,J),Object(b.e)(V,Y),Object(b.e)(Y,U),Object(b.e)(V,L),Object(b.e)(V,F),Object(b.e)(F,Q),Object(b.e)(V,q),Object(b.e)(V,K),Object(b.e)(K,M),M.value=e.pageNumber,Object(b.e)(R,X),Object(b.e)(R,Z),Object(b.e)(Z,ee),Object(b.e)(ee,te),Object(b.e)(Z,ce),Object(b.e)(Z,be),Object(b.e)(be,Oe),Object(b.e)(Z,je),Object(b.e)(Z,ne),Object(b.e)(ne,ae),Object(b.e)(Z,re),Object(b.e)(Z,oe),Object(b.e)(oe,ie),ie.value=e.pageSize,Object(b.e)(R,me),Object(b.e)(R,ue),Object(b.e)(ue,he),Object(b.e)(he,pe),Object(b.e)(ue,le),Object(b.e)(ue,se),Object(b.e)(ue,ge),Object(b.e)(ue,fe),Object(b.e)(fe,ve),Object(b.e)(ue,de),Object(b.e)(ue,xe),Object(b.e)(xe,ye),ye.value=e.itemCount,Object(b.e)(c,Te),Object(b.e)(c,Ee),Object(b.e)(Ee,$e),Object(b.e)(c,Ne),Object(b.e)(c,De),Object(b.e)(De,Ce),Object(b.e)(Ce,We),Object(b.e)(We,we),Object(b.e)(we,_e),Object(b.e)(_e,ze),Object(b.e)(we,Se),Object(b.e)(we,Ie),Object(b.e)(Ie,He),Object(b.e)(Ce,Pe),Object(b.e)(Ce,ke),Object(b.e)(ke,Ae),Object(b.e)(Ae,Re),Object(b.e)(Re,Ve),Object(b.e)(Ae,Be),Object(b.e)(Ae,Ge),Object(b.e)(Ge,Je),Object(b.e)(c,Ye),Object(b.e)(c,Ue),Object(b.e)(Ue,Le),Object(b.e)(c,Fe),Object(b.e)(c,Qe),Object(b.e)(Qe,qe),Object(b.e)(qe,Ke),Me=!0},p(e,t){var c={};(e.$$scope||e.items)&&(c.$$scope={changed:e,ctx:t}),!s&&e.index&&(c.index=t.index),tt.$set(c);var O={};e.pageSize&&(O.pageSize=t.pageSize),e.itemCount&&(O.itemCount=t.itemCount),!f&&e.pageNumber&&(O.pageNumber=t.pageNumber),Ot.$set(O),e.pageNumber&&(M.value=t.pageNumber),e.pageSize&&(ie.value=t.pageSize),e.itemCount&&(ye.value=t.itemCount),Me&&!e.exampleCode||Object(b.S)(Ke,t.exampleCode)},i(e){Me||(Object(b.ab)(tt.$$.fragment,e),Object(b.ab)(Ot.$$.fragment,e),Me=!0)},o(e){Object(b.bb)(tt.$$.fragment,e),Object(b.bb)(Ot.$$.fragment,e),Me=!1},d(e){e&&(Object(b.x)(t),Object(b.x)(c)),Object(b.v)(tt),Object(b.v)(Ot),Object(b.N)(Xe)}}}function i(e,t,c){let O,j,n,a=1,r=10,o=50;return e.$$.update=((e={pageNumber:1,itemCount:1,pageSize:1})=>{e.pageNumber&&c("index",O=a-1),e.itemCount&&c("items",j=[...Array(o).keys()].map(e=>++e)),(e.pageNumber||e.pageSize||e.itemCount)&&c("exampleCode",n=`<Pagination pageNumber={${a}} pageSize={${r}} itemCount={${o}} />`.trim())}),{pageNumber:a,pageSize:r,itemCount:o,index:O,items:j,exampleCode:n,switcher_index_binding:function(e){c("index",O=e),c("pageNumber",a)},pagination_pageNumber_binding:function(e){c("pageNumber",a=e)},input0_input_handler:function(){a=Object(b.Y)(this.value),c("pageNumber",a)},input1_input_handler:function(){r=Object(b.Y)(this.value),c("pageSize",r)},input2_input_handler:function(){o=Object(b.Y)(this.value),c("itemCount",o)}}}t.default=class extends b.a{constructor(e){var t;super(),document.getElementById("svelte-urxww9-style")||((t=Object(b.y)("style")).id="svelte-urxww9-style",t.textContent=".bignum.svelte-urxww9{color:darkgray;font-size:96px;line-height:1.4;text-align:center}",Object(b.e)(document.head,t)),Object(b.F)(this,e,i,o,b.O,[])}}}}]);