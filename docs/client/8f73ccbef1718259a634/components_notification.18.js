(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{9:function(e,t,c){"use strict";c.r(t);var b=c(0),j=c(2);function O(e){let t,c,O,o,a,r,n,i,h,l,f,s,v,m,p,u,d,g,E,C,B,T,D,q,y,_,$,N,k,w,I,P,H,A,R,S,L,Q,U,V,x,Y,J,z,Z,F,G,K,M,W,X,ee,te,ce,be,je,Oe,oe,ae,re,ne,ie,he,le,fe,se,ve,me,pe,ue,de,ge,Ee,Ce,Be,Te,De,qe,ye,_e,$e,Ne,ke,we,Ie,Pe,He,Ae,Re,Se,Le,Qe,Ue,Ve,xe,Ye,Je,ze,Ze,Fe,Ge,Ke,Me,We,Xe,et,tt,ct,bt,jt,Ot,ot,at,rt,nt,it,ht,lt,ft,st,vt,mt,pt,ut,dt,gt,Et,Ct,Bt,Tt,Dt,qt,yt,_t,$t,Nt,kt,wt,It,Pt,Ht,At=!1;const Rt=new j.U({props:{content:e[0],type:e[1],closable:e[2],duration:e[3],solid:e[4]}});function St(){At=!0,e[9].call(Je)}return{c(){t=Object(b.gb)(),c=Object(b.C)("div"),O=Object(b.C)("h1"),o=Object(b.jb)("Notification"),a=Object(b.gb)(),r=Object(b.C)("p"),n=Object(b.jb)("A notification that can be shown to the user."),i=Object(b.gb)(),h=Object(b.C)("h2"),l=Object(b.jb)("Demo"),f=Object(b.gb)(),s=Object(b.C)("div"),Object(b.u)(Rt.$$.fragment),v=Object(b.gb)(),m=Object(b.C)("h2"),p=Object(b.jb)("Properties"),u=Object(b.gb)(),d=Object(b.C)("div"),g=Object(b.C)("table"),E=Object(b.C)("thead"),C=Object(b.C)("tr"),B=Object(b.C)("th"),T=Object(b.jb)("Name"),D=Object(b.gb)(),q=Object(b.C)("th"),y=Object(b.jb)("Default"),_=Object(b.gb)(),$=Object(b.C)("th"),N=Object(b.jb)("Description"),k=Object(b.gb)(),w=Object(b.C)("th"),I=Object(b.jb)("Change"),P=Object(b.gb)(),H=Object(b.C)("tbody"),A=Object(b.C)("tr"),R=Object(b.C)("td"),S=Object(b.jb)("type"),L=Object(b.gb)(),Q=Object(b.C)("td"),U=Object(b.jb)("info"),V=Object(b.gb)(),x=Object(b.C)("td"),Y=Object(b.jb)("primary, info, success, warning, or danger"),J=Object(b.gb)(),z=Object(b.C)("td"),Z=Object(b.C)("select"),F=Object(b.C)("option"),G=Object(b.jb)("-"),K=Object(b.C)("option"),M=Object(b.jb)("primary"),W=Object(b.C)("option"),X=Object(b.jb)("info"),ee=Object(b.C)("option"),te=Object(b.jb)("success"),ce=Object(b.C)("option"),be=Object(b.jb)("warning"),je=Object(b.C)("option"),Oe=Object(b.jb)("danger"),oe=Object(b.gb)(),ae=Object(b.C)("tr"),re=Object(b.C)("td"),ne=Object(b.jb)("content"),ie=Object(b.gb)(),he=Object(b.C)("td"),le=Object(b.gb)(),fe=Object(b.C)("td"),se=Object(b.jb)("The content to display in the notification, which can also come from\r\n            slot content"),ve=Object(b.gb)(),me=Object(b.C)("td"),pe=Object(b.C)("input"),ue=Object(b.gb)(),de=Object(b.C)("tr"),ge=Object(b.C)("td"),Ee=Object(b.jb)("closable"),Ce=Object(b.gb)(),Be=Object(b.C)("td"),Te=Object(b.jb)("false"),De=Object(b.gb)(),qe=Object(b.C)("td"),ye=Object(b.jb)("Set to true to display a close button at the right of the\r\n            notification"),_e=Object(b.gb)(),$e=Object(b.C)("td"),Ne=Object(b.C)("label"),ke=Object(b.C)("input"),we=Object(b.jb)("\r\n              Allow closing the notification"),Ie=Object(b.gb)(),Pe=Object(b.C)("tr"),He=Object(b.C)("td"),Ae=Object(b.jb)("duration"),Re=Object(b.gb)(),Se=Object(b.C)("td"),Le=Object(b.jb)("-1"),Qe=Object(b.gb)(),Ue=Object(b.C)("td"),Ve=Object(b.jb)("The number of milliseconds to wait before closing the notification.\r\n            Set to -1 to never close"),xe=Object(b.gb)(),Ye=Object(b.C)("td"),Je=Object(b.C)("input"),ze=Object(b.gb)(),Ze=Object(b.C)("tr"),Fe=Object(b.C)("td"),Ge=Object(b.jb)("solid"),Ke=Object(b.gb)(),Me=Object(b.C)("td"),We=Object(b.jb)("true"),Xe=Object(b.gb)(),et=Object(b.C)("td"),tt=Object(b.jb)("Set to true to make the notification have a solid background"),ct=Object(b.gb)(),bt=Object(b.C)("td"),jt=Object(b.C)("label"),Ot=Object(b.C)("input"),ot=Object(b.jb)("\r\n              Solid notification"),at=Object(b.gb)(),rt=Object(b.C)("h2"),nt=Object(b.jb)("Events"),it=Object(b.gb)(),ht=Object(b.C)("div"),lt=Object(b.C)("table"),ft=Object(b.C)("thead"),st=Object(b.C)("tr"),vt=Object(b.C)("th"),mt=Object(b.jb)("Name"),pt=Object(b.gb)(),ut=Object(b.C)("th"),dt=Object(b.jb)("Args"),gt=Object(b.gb)(),Et=Object(b.C)("tbody"),Ct=Object(b.C)("tr"),Bt=Object(b.C)("td"),Tt=Object(b.jb)("closed"),Dt=Object(b.gb)(),qt=Object(b.C)("td"),yt=Object(b.gb)(),_t=Object(b.C)("h2"),$t=Object(b.jb)("Code"),Nt=Object(b.gb)(),kt=Object(b.C)("div"),wt=Object(b.C)("pre"),It=Object(b.jb)(e[5]),this.h()},l(j){t=Object(b.p)(j),c=Object(b.o)(j,"DIV",{class:!0});var Pt=Object(b.m)(c);O=Object(b.o)(Pt,"H1",{});var Ht=Object(b.m)(O);o=Object(b.q)(Ht,"Notification"),Ht.forEach(b.B),a=Object(b.p)(Pt),r=Object(b.o)(Pt,"P",{});var At=Object(b.m)(r);n=Object(b.q)(At,"A notification that can be shown to the user."),At.forEach(b.B),i=Object(b.p)(Pt),h=Object(b.o)(Pt,"H2",{});var St=Object(b.m)(h);l=Object(b.q)(St,"Demo"),St.forEach(b.B),f=Object(b.p)(Pt),s=Object(b.o)(Pt,"DIV",{class:!0});var Lt=Object(b.m)(s);Object(b.n)(Rt.$$.fragment,Lt),Lt.forEach(b.B),v=Object(b.p)(Pt),m=Object(b.o)(Pt,"H2",{});var Qt=Object(b.m)(m);p=Object(b.q)(Qt,"Properties"),Qt.forEach(b.B),u=Object(b.p)(Pt),d=Object(b.o)(Pt,"DIV",{class:!0});var Ut=Object(b.m)(d);g=Object(b.o)(Ut,"TABLE",{class:!0});var Vt=Object(b.m)(g);E=Object(b.o)(Vt,"THEAD",{});var xt=Object(b.m)(E);C=Object(b.o)(xt,"TR",{});var Yt=Object(b.m)(C);B=Object(b.o)(Yt,"TH",{});var Jt=Object(b.m)(B);T=Object(b.q)(Jt,"Name"),Jt.forEach(b.B),D=Object(b.p)(Yt),q=Object(b.o)(Yt,"TH",{});var zt=Object(b.m)(q);y=Object(b.q)(zt,"Default"),zt.forEach(b.B),_=Object(b.p)(Yt),$=Object(b.o)(Yt,"TH",{});var Zt=Object(b.m)($);N=Object(b.q)(Zt,"Description"),Zt.forEach(b.B),k=Object(b.p)(Yt),w=Object(b.o)(Yt,"TH",{});var Ft=Object(b.m)(w);I=Object(b.q)(Ft,"Change"),Ft.forEach(b.B),Yt.forEach(b.B),xt.forEach(b.B),P=Object(b.p)(Vt),H=Object(b.o)(Vt,"TBODY",{});var Gt=Object(b.m)(H);A=Object(b.o)(Gt,"TR",{});var Kt=Object(b.m)(A);R=Object(b.o)(Kt,"TD",{});var Mt=Object(b.m)(R);S=Object(b.q)(Mt,"type"),Mt.forEach(b.B),L=Object(b.p)(Kt),Q=Object(b.o)(Kt,"TD",{});var Wt=Object(b.m)(Q);U=Object(b.q)(Wt,"info"),Wt.forEach(b.B),V=Object(b.p)(Kt),x=Object(b.o)(Kt,"TD",{});var Xt=Object(b.m)(x);Y=Object(b.q)(Xt,"primary, info, success, warning, or danger"),Xt.forEach(b.B),J=Object(b.p)(Kt),z=Object(b.o)(Kt,"TD",{});var ec=Object(b.m)(z);Z=Object(b.o)(ec,"SELECT",{});var tc=Object(b.m)(Z);F=Object(b.o)(tc,"OPTION",{value:!0});var cc=Object(b.m)(F);G=Object(b.q)(cc,"-"),cc.forEach(b.B),K=Object(b.o)(tc,"OPTION",{value:!0});var bc=Object(b.m)(K);M=Object(b.q)(bc,"primary"),bc.forEach(b.B),W=Object(b.o)(tc,"OPTION",{value:!0});var jc=Object(b.m)(W);X=Object(b.q)(jc,"info"),jc.forEach(b.B),ee=Object(b.o)(tc,"OPTION",{value:!0});var Oc=Object(b.m)(ee);te=Object(b.q)(Oc,"success"),Oc.forEach(b.B),ce=Object(b.o)(tc,"OPTION",{value:!0});var oc=Object(b.m)(ce);be=Object(b.q)(oc,"warning"),oc.forEach(b.B),je=Object(b.o)(tc,"OPTION",{value:!0});var ac=Object(b.m)(je);Oe=Object(b.q)(ac,"danger"),ac.forEach(b.B),tc.forEach(b.B),ec.forEach(b.B),Kt.forEach(b.B),oe=Object(b.p)(Gt),ae=Object(b.o)(Gt,"TR",{});var rc=Object(b.m)(ae);re=Object(b.o)(rc,"TD",{});var nc=Object(b.m)(re);ne=Object(b.q)(nc,"content"),nc.forEach(b.B),ie=Object(b.p)(rc),he=Object(b.o)(rc,"TD",{}),Object(b.m)(he).forEach(b.B),le=Object(b.p)(rc),fe=Object(b.o)(rc,"TD",{});var ic=Object(b.m)(fe);se=Object(b.q)(ic,"The content to display in the notification, which can also come from\r\n            slot content"),ic.forEach(b.B),ve=Object(b.p)(rc),me=Object(b.o)(rc,"TD",{});var hc=Object(b.m)(me);pe=Object(b.o)(hc,"INPUT",{type:!0}),hc.forEach(b.B),rc.forEach(b.B),ue=Object(b.p)(Gt),de=Object(b.o)(Gt,"TR",{});var lc=Object(b.m)(de);ge=Object(b.o)(lc,"TD",{});var fc=Object(b.m)(ge);Ee=Object(b.q)(fc,"closable"),fc.forEach(b.B),Ce=Object(b.p)(lc),Be=Object(b.o)(lc,"TD",{});var sc=Object(b.m)(Be);Te=Object(b.q)(sc,"false"),sc.forEach(b.B),De=Object(b.p)(lc),qe=Object(b.o)(lc,"TD",{});var vc=Object(b.m)(qe);ye=Object(b.q)(vc,"Set to true to display a close button at the right of the\r\n            notification"),vc.forEach(b.B),_e=Object(b.p)(lc),$e=Object(b.o)(lc,"TD",{});var mc=Object(b.m)($e);Ne=Object(b.o)(mc,"LABEL",{});var pc=Object(b.m)(Ne);ke=Object(b.o)(pc,"INPUT",{type:!0}),we=Object(b.q)(pc,"\r\n              Allow closing the notification"),pc.forEach(b.B),mc.forEach(b.B),lc.forEach(b.B),Ie=Object(b.p)(Gt),Pe=Object(b.o)(Gt,"TR",{});var uc=Object(b.m)(Pe);He=Object(b.o)(uc,"TD",{});var dc=Object(b.m)(He);Ae=Object(b.q)(dc,"duration"),dc.forEach(b.B),Re=Object(b.p)(uc),Se=Object(b.o)(uc,"TD",{});var gc=Object(b.m)(Se);Le=Object(b.q)(gc,"-1"),gc.forEach(b.B),Qe=Object(b.p)(uc),Ue=Object(b.o)(uc,"TD",{});var Ec=Object(b.m)(Ue);Ve=Object(b.q)(Ec,"The number of milliseconds to wait before closing the notification.\r\n            Set to -1 to never close"),Ec.forEach(b.B),xe=Object(b.p)(uc),Ye=Object(b.o)(uc,"TD",{});var Cc=Object(b.m)(Ye);Je=Object(b.o)(Cc,"INPUT",{type:!0}),Cc.forEach(b.B),uc.forEach(b.B),ze=Object(b.p)(Gt),Ze=Object(b.o)(Gt,"TR",{});var Bc=Object(b.m)(Ze);Fe=Object(b.o)(Bc,"TD",{});var Tc=Object(b.m)(Fe);Ge=Object(b.q)(Tc,"solid"),Tc.forEach(b.B),Ke=Object(b.p)(Bc),Me=Object(b.o)(Bc,"TD",{});var Dc=Object(b.m)(Me);We=Object(b.q)(Dc,"true"),Dc.forEach(b.B),Xe=Object(b.p)(Bc),et=Object(b.o)(Bc,"TD",{});var qc=Object(b.m)(et);tt=Object(b.q)(qc,"Set to true to make the notification have a solid background"),qc.forEach(b.B),ct=Object(b.p)(Bc),bt=Object(b.o)(Bc,"TD",{});var yc=Object(b.m)(bt);jt=Object(b.o)(yc,"LABEL",{});var _c=Object(b.m)(jt);Ot=Object(b.o)(_c,"INPUT",{type:!0}),ot=Object(b.q)(_c,"\r\n              Solid notification"),_c.forEach(b.B),yc.forEach(b.B),Bc.forEach(b.B),Gt.forEach(b.B),Vt.forEach(b.B),Ut.forEach(b.B),at=Object(b.p)(Pt),rt=Object(b.o)(Pt,"H2",{});var $c=Object(b.m)(rt);nt=Object(b.q)($c,"Events"),$c.forEach(b.B),it=Object(b.p)(Pt),ht=Object(b.o)(Pt,"DIV",{class:!0});var Nc=Object(b.m)(ht);lt=Object(b.o)(Nc,"TABLE",{class:!0});var kc=Object(b.m)(lt);ft=Object(b.o)(kc,"THEAD",{});var wc=Object(b.m)(ft);st=Object(b.o)(wc,"TR",{});var Ic=Object(b.m)(st);vt=Object(b.o)(Ic,"TH",{});var Pc=Object(b.m)(vt);mt=Object(b.q)(Pc,"Name"),Pc.forEach(b.B),pt=Object(b.p)(Ic),ut=Object(b.o)(Ic,"TH",{});var Hc=Object(b.m)(ut);dt=Object(b.q)(Hc,"Args"),Hc.forEach(b.B),Ic.forEach(b.B),wc.forEach(b.B),gt=Object(b.p)(kc),Et=Object(b.o)(kc,"TBODY",{});var Ac=Object(b.m)(Et);Ct=Object(b.o)(Ac,"TR",{});var Rc=Object(b.m)(Ct);Bt=Object(b.o)(Rc,"TD",{});var Sc=Object(b.m)(Bt);Tt=Object(b.q)(Sc,"closed"),Sc.forEach(b.B),Dt=Object(b.p)(Rc),qt=Object(b.o)(Rc,"TD",{}),Object(b.m)(qt).forEach(b.B),Rc.forEach(b.B),Ac.forEach(b.B),kc.forEach(b.B),Nc.forEach(b.B),yt=Object(b.p)(Pt),_t=Object(b.o)(Pt,"H2",{});var Lc=Object(b.m)(_t);$t=Object(b.q)(Lc,"Code"),Lc.forEach(b.B),Nt=Object(b.p)(Pt),kt=Object(b.o)(Pt,"DIV",{class:!0});var Qc=Object(b.m)(kt);wt=Object(b.o)(Qc,"PRE",{});var Uc=Object(b.m)(wt);It=Object(b.q)(Uc,e[5]),Uc.forEach(b.B),Qc.forEach(b.B),Pt.forEach(b.B),this.h()},h(){document.title="Notification | Svelte Toolkit",Object(b.g)(s,"class","block"),F.__value="-",F.value=F.__value,K.__value="primary",K.value=K.__value,W.__value="info",W.value=W.__value,ee.__value="success",ee.value=ee.__value,ce.__value="warning",ce.value=ce.__value,je.__value="danger",je.value=je.__value,void 0===e[1]&&Object(b.c)(()=>e[6].call(Z)),Object(b.g)(pe,"type","text"),Object(b.g)(ke,"type","checkbox"),Object(b.g)(Je,"type","number"),Object(b.g)(Ot,"type","checkbox"),Object(b.g)(g,"class","table"),Object(b.g)(d,"class","block"),Object(b.g)(lt,"class","table"),Object(b.g)(ht,"class","block"),Object(b.g)(kt,"class","block"),Object(b.g)(c,"class","container"),Ht=[Object(b.Q)(Z,"change",e[6]),Object(b.Q)(pe,"input",e[7]),Object(b.Q)(ke,"change",e[8]),Object(b.Q)(Je,"input",St),Object(b.Q)(Ot,"change",e[10])]},m(j,Ht){Object(b.O)(j,t,Ht),Object(b.O)(j,c,Ht),Object(b.e)(c,O),Object(b.e)(O,o),Object(b.e)(c,a),Object(b.e)(c,r),Object(b.e)(r,n),Object(b.e)(c,i),Object(b.e)(c,h),Object(b.e)(h,l),Object(b.e)(c,f),Object(b.e)(c,s),Object(b.R)(Rt,s,null),Object(b.e)(c,v),Object(b.e)(c,m),Object(b.e)(m,p),Object(b.e)(c,u),Object(b.e)(c,d),Object(b.e)(d,g),Object(b.e)(g,E),Object(b.e)(E,C),Object(b.e)(C,B),Object(b.e)(B,T),Object(b.e)(C,D),Object(b.e)(C,q),Object(b.e)(q,y),Object(b.e)(C,_),Object(b.e)(C,$),Object(b.e)($,N),Object(b.e)(C,k),Object(b.e)(C,w),Object(b.e)(w,I),Object(b.e)(g,P),Object(b.e)(g,H),Object(b.e)(H,A),Object(b.e)(A,R),Object(b.e)(R,S),Object(b.e)(A,L),Object(b.e)(A,Q),Object(b.e)(Q,U),Object(b.e)(A,V),Object(b.e)(A,x),Object(b.e)(x,Y),Object(b.e)(A,J),Object(b.e)(A,z),Object(b.e)(z,Z),Object(b.e)(Z,F),Object(b.e)(F,G),Object(b.e)(Z,K),Object(b.e)(K,M),Object(b.e)(Z,W),Object(b.e)(W,X),Object(b.e)(Z,ee),Object(b.e)(ee,te),Object(b.e)(Z,ce),Object(b.e)(ce,be),Object(b.e)(Z,je),Object(b.e)(je,Oe),Object(b.ab)(Z,e[1]),Object(b.e)(H,oe),Object(b.e)(H,ae),Object(b.e)(ae,re),Object(b.e)(re,ne),Object(b.e)(ae,ie),Object(b.e)(ae,he),Object(b.e)(ae,le),Object(b.e)(ae,fe),Object(b.e)(fe,se),Object(b.e)(ae,ve),Object(b.e)(ae,me),Object(b.e)(me,pe),Object(b.eb)(pe,e[0]),Object(b.e)(H,ue),Object(b.e)(H,de),Object(b.e)(de,ge),Object(b.e)(ge,Ee),Object(b.e)(de,Ce),Object(b.e)(de,Be),Object(b.e)(Be,Te),Object(b.e)(de,De),Object(b.e)(de,qe),Object(b.e)(qe,ye),Object(b.e)(de,_e),Object(b.e)(de,$e),Object(b.e)($e,Ne),Object(b.e)(Ne,ke),ke.checked=e[2],Object(b.e)(Ne,we),Object(b.e)(H,Ie),Object(b.e)(H,Pe),Object(b.e)(Pe,He),Object(b.e)(He,Ae),Object(b.e)(Pe,Re),Object(b.e)(Pe,Se),Object(b.e)(Se,Le),Object(b.e)(Pe,Qe),Object(b.e)(Pe,Ue),Object(b.e)(Ue,Ve),Object(b.e)(Pe,xe),Object(b.e)(Pe,Ye),Object(b.e)(Ye,Je),Object(b.eb)(Je,e[3]),Object(b.e)(H,ze),Object(b.e)(H,Ze),Object(b.e)(Ze,Fe),Object(b.e)(Fe,Ge),Object(b.e)(Ze,Ke),Object(b.e)(Ze,Me),Object(b.e)(Me,We),Object(b.e)(Ze,Xe),Object(b.e)(Ze,et),Object(b.e)(et,tt),Object(b.e)(Ze,ct),Object(b.e)(Ze,bt),Object(b.e)(bt,jt),Object(b.e)(jt,Ot),Ot.checked=e[4],Object(b.e)(jt,ot),Object(b.e)(c,at),Object(b.e)(c,rt),Object(b.e)(rt,nt),Object(b.e)(c,it),Object(b.e)(c,ht),Object(b.e)(ht,lt),Object(b.e)(lt,ft),Object(b.e)(ft,st),Object(b.e)(st,vt),Object(b.e)(vt,mt),Object(b.e)(st,pt),Object(b.e)(st,ut),Object(b.e)(ut,dt),Object(b.e)(lt,gt),Object(b.e)(lt,Et),Object(b.e)(Et,Ct),Object(b.e)(Ct,Bt),Object(b.e)(Bt,Tt),Object(b.e)(Ct,Dt),Object(b.e)(Ct,qt),Object(b.e)(c,yt),Object(b.e)(c,_t),Object(b.e)(_t,$t),Object(b.e)(c,Nt),Object(b.e)(c,kt),Object(b.e)(kt,wt),Object(b.e)(wt,It),Pt=!0},p(e,[t]){const c={};1&t&&(c.content=e[0]),2&t&&(c.type=e[1]),4&t&&(c.closable=e[2]),8&t&&(c.duration=e[3]),16&t&&(c.solid=e[4]),Rt.$set(c),2&t&&Object(b.ab)(Z,e[1]),1&t&&pe.value!==e[0]&&Object(b.eb)(pe,e[0]),4&t&&(ke.checked=e[2]),!At&&8&t&&Object(b.eb)(Je,e[3]),At=!1,16&t&&(Ot.checked=e[4]),(!Pt||32&t)&&Object(b.db)(It,e[5])},i(e){Pt||(Object(b.nb)(Rt.$$.fragment,e),Pt=!0)},o(e){Object(b.ob)(Rt.$$.fragment,e),Pt=!1},d(e){e&&Object(b.B)(t),e&&Object(b.B)(c),Object(b.z)(Rt),Object(b.Y)(Ht)}}}function o(e,t,c){let j,O="You might be interested to know this...",o="info",a=!0,r=0,n=!1;return e.$$.update=()=>{31&e.$$.dirty&&c(5,j=`\nimport { Notification } from "svelte-toolkit";\n\n<Notification content="${O}" type="${o}" closable={${a}} duration={${r}} solid={${n}} />\n\n~ OR ~\n\n<Notification type="${o}" closable={${a}} duration={${r}} solid={${n}}>\n  ${O}\n</Notification>`.trim())},[O,o,a,r,n,j,function(){o=Object(b.bb)(this),c(1,o)},function(){O=this.value,c(0,O)},function(){a=this.checked,c(2,a)},function(){r=Object(b.lb)(this.value),c(3,r)},function(){n=this.checked,c(4,n)}]}t.default=class extends b.a{constructor(e){super(),Object(b.N)(this,e,o,O,b.Z,{})}}}}]);