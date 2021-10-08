import{S as e,i as o,s as t,k as r,e as n,t as s,M as a,d as i,n as l,c as h,a as c,g as p,b as d,f as u,D as m,E as f}from"../../chunks/vendor-8be92992.js";import{b as y}from"../../chunks/paths-45dac81d.js";function g(e){let o,t,g,v,E,T,w,b,k,P,j,S,R,A,I,M,x,q,C,D,H,Y,B,W,V,$,z,F,G,J,K,L,N,O,Q,U,X,Z,_,ee,oe,te,re,ne,se,ae,ie,le,he,ce,pe,de,ue,me,fe,ye,ge,ve,Ee,Te,we,be,ke,Pe,je,Se,Re,Ae,Ie,Me,xe,qe,Ce,De,He,Ye,Be,We,Ve,$e='\nimport { loadTheme } from "svelte-toolkit";\n\nonMount(() => {\n  loadTheme({\n    "--info-color": "purple"\n  });\n});'.trim()+"",ze='\nimport { getTheme } from "svelte-toolkit";\n\nonMount(() => {\n  alert(getTheme());\n});'.trim()+"",Fe='\n{\n  "theme": {\n    "--info-color": "purple"\n  }\n}'.trim()+"",Ge='\n"scripts": {\n  "theme": "stk theme"\n}'.trim()+"";return{c(){o=r(),t=n("div"),g=n("h1"),v=s("Theming"),E=r(),T=n("p"),w=s("Theming is handled using CSS custom properties. The properties that are\r\n    supported are listed\r\n    "),b=n("a"),k=s("here"),P=s(". There are three main\r\n    ways you can set these properties."),j=r(),S=n("h2"),R=s("Styles"),A=r(),I=n("p"),M=s("You can set custom properties in the style tag of your component:"),x=r(),q=n("pre"),C=s(e[0]),D=r(),H=n("p"),Y=s("When setting custom properties in the style tag, you need to make sure you\r\n    set all related colors (e.g. if you set --info-color, you will also need to\r\n    set --info-hover-color)."),B=r(),W=n("h2"),V=s("loadTheme"),$=r(),z=n("p"),F=s("Alternatively, you can pass an object into the loadTheme method in the\r\n    onMount method of your component:"),G=r(),J=n("pre"),K=s($e),L=r(),N=n("p"),O=s("The loadTheme method will set related colors (e.g. in the example above it\r\n    will set --info-hover-color as well as --info-color) but as it's called on\r\n    onMount the original colors will be displayed briefly before the theme\r\n    colors are loaded. It's most useful for applying user custom themes or other\r\n    dynamic themes."),Q=r(),U=n("p"),X=s("You can use the getTheme method to get all colors that have been set\r\n    (including related colors if set through loadTheme):"),Z=r(),_=n("pre"),ee=s(ze),oe=r(),te=n("h2"),re=s("Script"),ne=r(),se=n("p"),ae=s("Svelte Toolkit also comes with a script that you can use to override the\r\n    styles in the component files themselves. It requires a bit of setup."),ie=r(),le=n("p"),he=s("Install `node-sass` as a dependency:"),ce=r(),pe=n("pre"),de=s("yarn add -D node-sass"),ue=r(),me=n("p"),fe=s("Add a `stk.config.json` file to the root of your site, with content in the\r\n    following format:"),ye=r(),ge=n("pre"),ve=s(Fe),Ee=r(),Te=n("p"),we=s("Add the script entry to your `package.json` file:"),be=r(),ke=n("pre"),Pe=s(Ge),je=r(),Se=n("p"),Re=s("Run the script:"),Ae=r(),Ie=n("pre"),Me=s("yarn theme"),xe=r(),qe=n("p"),Ce=s("The script will only build the theme when the config file has changed or the\r\n    svelte-toolkit dependency has been updated, so you can put it into your\r\n    `package.json` as a predev or prebuild script without impacting performance."),De=r(),He=n("p"),Ye=s("The script will set related colors (e.g. in the example above it will set\r\n    --info-hover-color as well as --info-color), just like using loadTheme."),Be=r(),We=n("p"),Ve=s("Behind the scenes, this script injects new styles directly into the\r\n    components, so you can also change some properties that are impossible to do\r\n    as CSS custom properties, including media query breakpoints."),this.h()},l(r){a('[data-svelte="svelte-1431t04"]',document.head).forEach(i),o=l(r),t=h(r,"DIV",{class:!0});var n=c(t);g=h(n,"H1",{});var s=c(g);v=p(s,"Theming"),s.forEach(i),E=l(n),T=h(n,"P",{});var d=c(T);w=p(d,"Theming is handled using CSS custom properties. The properties that are\r\n    supported are listed\r\n    "),b=h(d,"A",{href:!0});var u=c(b);k=p(u,"here"),u.forEach(i),P=p(d,". There are three main\r\n    ways you can set these properties."),d.forEach(i),j=l(n),S=h(n,"H2",{});var m=c(S);R=p(m,"Styles"),m.forEach(i),A=l(n),I=h(n,"P",{});var f=c(I);M=p(f,"You can set custom properties in the style tag of your component:"),f.forEach(i),x=l(n),q=h(n,"PRE",{lang:!0});var y=c(q);C=p(y,e[0]),y.forEach(i),D=l(n),H=h(n,"P",{});var Je=c(H);Y=p(Je,"When setting custom properties in the style tag, you need to make sure you\r\n    set all related colors (e.g. if you set --info-color, you will also need to\r\n    set --info-hover-color)."),Je.forEach(i),B=l(n),W=h(n,"H2",{});var Ke=c(W);V=p(Ke,"loadTheme"),Ke.forEach(i),$=l(n),z=h(n,"P",{});var Le=c(z);F=p(Le,"Alternatively, you can pass an object into the loadTheme method in the\r\n    onMount method of your component:"),Le.forEach(i),G=l(n),J=h(n,"PRE",{lang:!0});var Ne=c(J);K=p(Ne,$e),Ne.forEach(i),L=l(n),N=h(n,"P",{});var Oe=c(N);O=p(Oe,"The loadTheme method will set related colors (e.g. in the example above it\r\n    will set --info-hover-color as well as --info-color) but as it's called on\r\n    onMount the original colors will be displayed briefly before the theme\r\n    colors are loaded. It's most useful for applying user custom themes or other\r\n    dynamic themes."),Oe.forEach(i),Q=l(n),U=h(n,"P",{});var Qe=c(U);X=p(Qe,"You can use the getTheme method to get all colors that have been set\r\n    (including related colors if set through loadTheme):"),Qe.forEach(i),Z=l(n),_=h(n,"PRE",{lang:!0});var Ue=c(_);ee=p(Ue,ze),Ue.forEach(i),oe=l(n),te=h(n,"H2",{});var Xe=c(te);re=p(Xe,"Script"),Xe.forEach(i),ne=l(n),se=h(n,"P",{});var Ze=c(se);ae=p(Ze,"Svelte Toolkit also comes with a script that you can use to override the\r\n    styles in the component files themselves. It requires a bit of setup."),Ze.forEach(i),ie=l(n),le=h(n,"P",{});var _e=c(le);he=p(_e,"Install `node-sass` as a dependency:"),_e.forEach(i),ce=l(n),pe=h(n,"PRE",{});var eo=c(pe);de=p(eo,"yarn add -D node-sass"),eo.forEach(i),ue=l(n),me=h(n,"P",{});var oo=c(me);fe=p(oo,"Add a `stk.config.json` file to the root of your site, with content in the\r\n    following format:"),oo.forEach(i),ye=l(n),ge=h(n,"PRE",{});var to=c(ge);ve=p(to,Fe),to.forEach(i),Ee=l(n),Te=h(n,"P",{});var ro=c(Te);we=p(ro,"Add the script entry to your `package.json` file:"),ro.forEach(i),be=l(n),ke=h(n,"PRE",{});var no=c(ke);Pe=p(no,Ge),no.forEach(i),je=l(n),Se=h(n,"P",{});var so=c(Se);Re=p(so,"Run the script:"),so.forEach(i),Ae=l(n),Ie=h(n,"PRE",{});var ao=c(Ie);Me=p(ao,"yarn theme"),ao.forEach(i),xe=l(n),qe=h(n,"P",{});var io=c(qe);Ce=p(io,"The script will only build the theme when the config file has changed or the\r\n    svelte-toolkit dependency has been updated, so you can put it into your\r\n    `package.json` as a predev or prebuild script without impacting performance."),io.forEach(i),De=l(n),He=h(n,"P",{});var lo=c(He);Ye=p(lo,"The script will set related colors (e.g. in the example above it will set\r\n    --info-hover-color as well as --info-color), just like using loadTheme."),lo.forEach(i),Be=l(n),We=h(n,"P",{});var ho=c(We);Ve=p(ho,"Behind the scenes, this script injects new styles directly into the\r\n    components, so you can also change some properties that are impossible to do\r\n    as CSS custom properties, including media query breakpoints."),ho.forEach(i),n.forEach(i),this.h()},h(){document.title="Theming | Svelte Toolkit",d(b,"href",`${y}/general/themeproperties`),d(q,"lang","html"),d(J,"lang","javascript"),d(_,"lang","javascript"),d(t,"class","container")},m(e,r){u(e,o,r),u(e,t,r),m(t,g),m(g,v),m(t,E),m(t,T),m(T,w),m(T,b),m(b,k),m(T,P),m(t,j),m(t,S),m(S,R),m(t,A),m(t,I),m(I,M),m(t,x),m(t,q),m(q,C),m(t,D),m(t,H),m(H,Y),m(t,B),m(t,W),m(W,V),m(t,$),m(t,z),m(z,F),m(t,G),m(t,J),m(J,K),m(t,L),m(t,N),m(N,O),m(t,Q),m(t,U),m(U,X),m(t,Z),m(t,_),m(_,ee),m(t,oe),m(t,te),m(te,re),m(t,ne),m(t,se),m(se,ae),m(t,ie),m(t,le),m(le,he),m(t,ce),m(t,pe),m(pe,de),m(t,ue),m(t,me),m(me,fe),m(t,ye),m(t,ge),m(ge,ve),m(t,Ee),m(t,Te),m(Te,we),m(t,be),m(t,ke),m(ke,Pe),m(t,je),m(t,Se),m(Se,Re),m(t,Ae),m(t,Ie),m(Ie,Me),m(t,xe),m(t,qe),m(qe,Ce),m(t,De),m(t,He),m(He,Ye),m(t,Be),m(t,We),m(We,Ve)},p:f,i:f,o:f,d(e){e&&i(o),e&&i(t)}}}function v(e){return["\n<style>\n  :root {\n    --info-color: purple;\n  }\n</style>".trim()]}class E extends e{constructor(e){super(),o(this,e,v,g,t,{})}}export{E as default};
