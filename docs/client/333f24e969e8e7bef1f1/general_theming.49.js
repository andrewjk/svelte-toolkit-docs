(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{47:function(e,t,c){"use strict";c.r(t);var o=c(0);function b(e){let t,c,b,r,n,j,O,a,l,i,s,h,p,d,m,u,f,g,v,y,T,w,C,E,D,q,P,k,S,M,H,Y,x,A,R,J,W,I,V,Z,z,B,F,G="\n<style>\n  :root {\n    --info-color: green;\n  }\n</style>".trim()+"",K='\nimport { loadTheme } from "svelte-toolkit";\n\nonMount(() => {\n  loadTheme({\n    "--info-color": "pink"\n  });\n});'.trim()+"",L='\nimport { getTheme } from "svelte-toolkit";\n\nonMount(() => {\n  alert(getTheme());\n});'.trim()+"";return{c(){t=Object(o.ib)(),c=Object(o.D)("div"),b=Object(o.D)("h1"),r=Object(o.nb)("Theming"),n=Object(o.ib)(),j=Object(o.D)("p"),O=Object(o.nb)("Theming is handled using CSS custom properties. The properties that are supported are listed\r\n    "),a=Object(o.D)("a"),l=Object(o.nb)("here"),i=Object(o.nb)(". There are two main ways you can set these properties."),s=Object(o.ib)(),h=Object(o.D)("h2"),p=Object(o.nb)("Styles"),d=Object(o.ib)(),m=Object(o.D)("p"),u=Object(o.nb)("You can set custom properties in the style tag of your component:"),f=Object(o.ib)(),g=Object(o.D)("pre"),v=Object(o.nb)(G),y=Object(o.ib)(),T=Object(o.D)("p"),w=Object(o.nb)("When setting custom properties in the style tag, you need to make sure you set all related\r\n    colors (e.g. if you set --info-color, you will also need to set --info-hover-color)."),C=Object(o.ib)(),E=Object(o.D)("h2"),D=Object(o.nb)("loadTheme"),q=Object(o.ib)(),P=Object(o.D)("p"),k=Object(o.nb)("Alternatively, you can pass an object into the loadTheme method in the onMount method of your\r\n    component:"),S=Object(o.ib)(),M=Object(o.D)("pre"),H=Object(o.nb)(K),Y=Object(o.ib)(),x=Object(o.D)("p"),A=Object(o.nb)("The loadTheme method will set related colors (e.g. in the example above it will set\r\n    --info-hover-color as well as --info-color) but as it's called on onMount the original colors\r\n    will be displayed briefly before the theme colors are loaded."),R=Object(o.ib)(),J=Object(o.D)("h2"),W=Object(o.nb)("getTheme"),I=Object(o.ib)(),V=Object(o.D)("p"),Z=Object(o.nb)("You can use the getTheme method to get all colors that have been set (including related\r\n    colors if set through loadTheme):"),z=Object(o.ib)(),B=Object(o.D)("pre"),F=Object(o.nb)(L),this.h()},l(e){Object(o.Z)('[data-svelte="svelte-1431t04"]',document.head).forEach(o.C),t=Object(o.q)(e),c=Object(o.p)(e,"DIV",{class:!0});var N=Object(o.n)(c);b=Object(o.p)(N,"H1",{});var Q=Object(o.n)(b);r=Object(o.r)(Q,"Theming"),Q.forEach(o.C),n=Object(o.q)(N),j=Object(o.p)(N,"P",{});var U=Object(o.n)(j);O=Object(o.r)(U,"Theming is handled using CSS custom properties. The properties that are supported are listed\r\n    "),a=Object(o.p)(U,"A",{href:!0});var X=Object(o.n)(a);l=Object(o.r)(X,"here"),X.forEach(o.C),i=Object(o.r)(U,". There are two main ways you can set these properties."),U.forEach(o.C),s=Object(o.q)(N),h=Object(o.p)(N,"H2",{});var $=Object(o.n)(h);p=Object(o.r)($,"Styles"),$.forEach(o.C),d=Object(o.q)(N),m=Object(o.p)(N,"P",{});var _=Object(o.n)(m);u=Object(o.r)(_,"You can set custom properties in the style tag of your component:"),_.forEach(o.C),f=Object(o.q)(N),g=Object(o.p)(N,"PRE",{lang:!0});var ee=Object(o.n)(g);v=Object(o.r)(ee,G),ee.forEach(o.C),y=Object(o.q)(N),T=Object(o.p)(N,"P",{});var te=Object(o.n)(T);w=Object(o.r)(te,"When setting custom properties in the style tag, you need to make sure you set all related\r\n    colors (e.g. if you set --info-color, you will also need to set --info-hover-color)."),te.forEach(o.C),C=Object(o.q)(N),E=Object(o.p)(N,"H2",{});var ce=Object(o.n)(E);D=Object(o.r)(ce,"loadTheme"),ce.forEach(o.C),q=Object(o.q)(N),P=Object(o.p)(N,"P",{});var oe=Object(o.n)(P);k=Object(o.r)(oe,"Alternatively, you can pass an object into the loadTheme method in the onMount method of your\r\n    component:"),oe.forEach(o.C),S=Object(o.q)(N),M=Object(o.p)(N,"PRE",{lang:!0});var be=Object(o.n)(M);H=Object(o.r)(be,K),be.forEach(o.C),Y=Object(o.q)(N),x=Object(o.p)(N,"P",{});var re=Object(o.n)(x);A=Object(o.r)(re,"The loadTheme method will set related colors (e.g. in the example above it will set\r\n    --info-hover-color as well as --info-color) but as it's called on onMount the original colors\r\n    will be displayed briefly before the theme colors are loaded."),re.forEach(o.C),R=Object(o.q)(N),J=Object(o.p)(N,"H2",{});var ne=Object(o.n)(J);W=Object(o.r)(ne,"getTheme"),ne.forEach(o.C),I=Object(o.q)(N),V=Object(o.p)(N,"P",{});var je=Object(o.n)(V);Z=Object(o.r)(je,"You can use the getTheme method to get all colors that have been set (including related\r\n    colors if set through loadTheme):"),je.forEach(o.C),z=Object(o.q)(N),B=Object(o.p)(N,"PRE",{lang:!0});var Oe=Object(o.n)(B);F=Object(o.r)(Oe,L),Oe.forEach(o.C),N.forEach(o.C),this.h()},h(){document.title="Theming | Svelte Toolkit",Object(o.h)(a,"href","general/themeproperties"),Object(o.h)(g,"lang","javascript"),Object(o.h)(M,"lang","javascript"),Object(o.h)(B,"lang","javascript"),Object(o.h)(c,"class","container")},m(e,G){Object(o.P)(e,t,G),Object(o.P)(e,c,G),Object(o.e)(c,b),Object(o.e)(b,r),Object(o.e)(c,n),Object(o.e)(c,j),Object(o.e)(j,O),Object(o.e)(j,a),Object(o.e)(a,l),Object(o.e)(j,i),Object(o.e)(c,s),Object(o.e)(c,h),Object(o.e)(h,p),Object(o.e)(c,d),Object(o.e)(c,m),Object(o.e)(m,u),Object(o.e)(c,f),Object(o.e)(c,g),Object(o.e)(g,v),Object(o.e)(c,y),Object(o.e)(c,T),Object(o.e)(T,w),Object(o.e)(c,C),Object(o.e)(c,E),Object(o.e)(E,D),Object(o.e)(c,q),Object(o.e)(c,P),Object(o.e)(P,k),Object(o.e)(c,S),Object(o.e)(c,M),Object(o.e)(M,H),Object(o.e)(c,Y),Object(o.e)(c,x),Object(o.e)(x,A),Object(o.e)(c,R),Object(o.e)(c,J),Object(o.e)(J,W),Object(o.e)(c,I),Object(o.e)(c,V),Object(o.e)(V,Z),Object(o.e)(c,z),Object(o.e)(c,B),Object(o.e)(B,F)},p:o.T,i:o.T,o:o.T,d(e){e&&Object(o.C)(t),e&&Object(o.C)(c)}}}t.default=class extends o.a{constructor(e){super(),Object(o.O)(this,e,null,b,o.bb,{})}}}}]);