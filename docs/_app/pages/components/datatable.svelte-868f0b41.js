import{S as t,i as e,s as $,az as n,ai as r,aj as a,k as o,e as s,t as c,j as f,M as l,d as i,n as m,c as p,a as d,g,m as u,b as h,f as y,D as x,o as w,x as v,u as b,v as T,A as D,ad as E,aA as N,l as _,ak as C,al as k,h as P,ag as I,a3 as S,aB as A,a1 as V,ae as W,af as F,am as j,aC as z,an as L,ao as O,F as U,G as H,a4 as B,a5 as M}from"../../chunks/vendor-e9334ee4.js";import{c as R}from"../../chunks/countries-3ee79671.js";const{document:G}=E;function q(t){let e,$=t[21].name+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=t[21].name+"")&&P(e,$)},d(t){t&&i(e)}}}function J(t){let e,$=t[21].title+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=t[21].title+"")&&P(e,$)},d(t){t&&i(e)}}}function K(t){let e,$=t[21].capital+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=t[21].capital+"")&&P(e,$)},d(t){t&&i(e)}}}function Q(t){let e,$=pe(t[21].area)+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=pe(t[21].area)+"")&&P(e,$)},d(t){t&&i(e)}}}function X(t){let e,$=pe(t[21].population)+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=pe(t[21].population)+"")&&P(e,$)},d(t){t&&i(e)}}}function Y(t){let e,$=`${pe(t[21].worldPercent)}%`;return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=`${pe(t[21].worldPercent)}%`)&&P(e,$)},d(t){t&&i(e)}}}function Z(t){let e,$,n,r,a,s,c,l,p,d,g,h;return e=new z({props:{field:"name",header:"Name",sortable:!0,$$slots:{default:[q]},$$scope:{ctx:t}}}),n=new z({props:{field:"title",header:"Title",sortable:!0,$$slots:{default:[J]},$$scope:{ctx:t}}}),a=new z({props:{field:"capital",header:"Capital",sortable:!0,$$slots:{default:[K]},$$scope:{ctx:t}}}),c=new z({props:{field:"area",header:"Area (km²)",sortable:!0,$$slots:{default:[Q]},$$scope:{ctx:t}}}),p=new z({props:{field:"population",header:"Population",sortable:!0,$$slots:{default:[X]},$$scope:{ctx:t}}}),g=new z({props:{field:"worldPercent",header:"World %",sortable:!0,$$slots:{default:[Y]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment),r=o(),f(a.$$.fragment),s=o(),f(c.$$.fragment),l=o(),f(p.$$.fragment),d=o(),f(g.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t),r=m(t),u(a.$$.fragment,t),s=m(t),u(c.$$.fragment,t),l=m(t),u(p.$$.fragment,t),d=m(t),u(g.$$.fragment,t)},m(t,o){w(e,t,o),y(t,$,o),w(n,t,o),y(t,r,o),w(a,t,o),y(t,s,o),w(c,t,o),y(t,l,o),w(p,t,o),y(t,d,o),w(g,t,o),h=!0},p(t,$){const r={};6291456&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const o={};6291456&$&&(o.$$scope={dirty:$,ctx:t}),n.$set(o);const s={};6291456&$&&(s.$$scope={dirty:$,ctx:t}),a.$set(s);const f={};6291456&$&&(f.$$scope={dirty:$,ctx:t}),c.$set(f);const l={};6291456&$&&(l.$$scope={dirty:$,ctx:t}),p.$set(l);const i={};6291456&$&&(i.$$scope={dirty:$,ctx:t}),g.$set(i)},i(t){h||(v(e.$$.fragment,t),v(n.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),v(p.$$.fragment,t),v(g.$$.fragment,t),h=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(a.$$.fragment,t),b(c.$$.fragment,t),b(p.$$.fragment,t),b(g.$$.fragment,t),h=!1},d(t){T(e,t),t&&i($),T(n,t),t&&i(r),T(a,t),t&&i(s),T(c,t),t&&i(l),T(p,t),t&&i(d),T(g,t)}}}function tt(t){let e,$;return{c(){e=s("div"),$=c("No countries were found..."),this.h()},l(t){e=p(t,"DIV",{slot:!0});var n=d(e);$=g(n,"No countries were found..."),n.forEach(i),this.h()},h(){h(e,"slot","empty")},m(t,n){y(t,e,n),x(e,$)},d(t){t&&i(e)}}}function et(t){let e,$,n;function r(e){t[12](e)}let a={items:R,keyField:t[0],pageSize:t[3],itemCount:t[4],type:t[1],$$slots:{empty:[tt,({item:t})=>({21:t}),({item:t})=>t?2097152:0],default:[Z,({item:t})=>({21:t}),({item:t})=>t?2097152:0]},$$scope:{ctx:t}};return void 0!==t[2]&&(a.pageNumber=t[2]),e=new A({props:a}),V.push((()=>W(e,"pageNumber",r))),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,$){w(e,t,$),n=!0},p(t,n){const r={};1&n&&(r.keyField=t[0]),8&n&&(r.pageSize=t[3]),16&n&&(r.itemCount=t[4]),2&n&&(r.type=t[1]),6291456&n&&(r.$$scope={dirty:n,ctx:t}),!$&&4&n&&($=!0,r.pageNumber=t[2],F((()=>$=!1))),e.$set(r)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function $t(t){let e,$=t[21].title+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=t[21].title+"")&&P(e,$)},d(t){t&&i(e)}}}function nt(t){let e,$=t[21].vote_average+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=t[21].vote_average+"")&&P(e,$)},d(t){t&&i(e)}}}function rt(t){let e,$=t[21].vote_count+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=t[21].vote_count+"")&&P(e,$)},d(t){t&&i(e)}}}function at(t){let e,$=(t[21].release_date?new Date(t[21].release_date).toLocaleDateString():"")+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=(t[21].release_date?new Date(t[21].release_date).toLocaleDateString():"")+"")&&P(e,$)},d(t){t&&i(e)}}}function ot(t){let e,$=(t[21].overview.length>200?t[21].overview.substring(0,199).trim()+"…":t[21].overview)+"";return{c(){e=c($)},l(t){e=g(t,$)},m(t,$){y(t,e,$)},p(t,n){2097152&n&&$!==($=(t[21].overview.length>200?t[21].overview.substring(0,199).trim()+"…":t[21].overview)+"")&&P(e,$)},d(t){t&&i(e)}}}function st(t){let e,$,n,r,a,s,c,l,p,d;return e=new z({props:{field:"title",header:"Title",sortable:!0,$$slots:{default:[$t]},$$scope:{ctx:t}}}),n=new z({props:{field:"vote_average",header:"Vote Average",sortable:!0,$$slots:{default:[nt]},$$scope:{ctx:t}}}),a=new z({props:{field:"vote_count",header:"Vote Count",sortable:!0,$$slots:{default:[rt]},$$scope:{ctx:t}}}),c=new z({props:{field:"release_date",header:"Release Date",sortable:!0,$$slots:{default:[at]},$$scope:{ctx:t}}}),p=new z({props:{header:"Overview",$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment),r=o(),f(a.$$.fragment),s=o(),f(c.$$.fragment),l=o(),f(p.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t),r=m(t),u(a.$$.fragment,t),s=m(t),u(c.$$.fragment,t),l=m(t),u(p.$$.fragment,t)},m(t,o){w(e,t,o),y(t,$,o),w(n,t,o),y(t,r,o),w(a,t,o),y(t,s,o),w(c,t,o),y(t,l,o),w(p,t,o),d=!0},p(t,$){const r={};6291456&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const o={};6291456&$&&(o.$$scope={dirty:$,ctx:t}),n.$set(o);const s={};6291456&$&&(s.$$scope={dirty:$,ctx:t}),a.$set(s);const f={};6291456&$&&(f.$$scope={dirty:$,ctx:t}),c.$set(f);const l={};6291456&$&&(l.$$scope={dirty:$,ctx:t}),p.$set(l)},i(t){d||(v(e.$$.fragment,t),v(n.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),v(p.$$.fragment,t),d=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(a.$$.fragment,t),b(c.$$.fragment,t),b(p.$$.fragment,t),d=!1},d(t){T(e,t),t&&i($),T(n,t),t&&i(r),T(a,t),t&&i(s),T(c,t),t&&i(l),T(p,t)}}}function ct(t){let e,$;return{c(){e=s("div"),$=c("Loading movies..."),this.h()},l(t){e=p(t,"DIV",{slot:!0});var n=d(e);$=g(n,"Loading movies..."),n.forEach(i),this.h()},h(){h(e,"slot","loading")},m(t,n){y(t,e,n),x(e,$)},d(t){t&&i(e)}}}function ft(t){let e,$;return{c(){e=s("div"),$=c("No movies were found..."),this.h()},l(t){e=p(t,"DIV",{slot:!0});var n=d(e);$=g(n,"No movies were found..."),n.forEach(i),this.h()},h(){h(e,"slot","empty")},m(t,n){y(t,e,n),x(e,$)},d(t){t&&i(e)}}}function lt(t){let e,$,n,r,a,l,D;return l=new A({props:{data:t[6],loading:t[5],keyField:"id",itemCount:t[8],pageNumber:t[7],pageSize:me,type:t[1],$$slots:{empty:[ft,({item:t})=>({21:t}),({item:t})=>t?2097152:0],loading:[ct,({item:t})=>({21:t}),({item:t})=>t?2097152:0],default:[st,({item:t})=>({21:t}),({item:t})=>t?2097152:0]},$$scope:{ctx:t}}}),l.$on("sort",t[10]),l.$on("page",t[11]),{c(){e=s("p"),$=c("Data from\r\n          "),n=s("a"),r=c("The Movie DB"),a=o(),f(l.$$.fragment),this.h()},l(t){e=p(t,"P",{});var o=d(e);$=g(o,"Data from\r\n          "),n=p(o,"A",{href:!0});var s=d(n);r=g(s,"The Movie DB"),s.forEach(i),o.forEach(i),a=m(t),u(l.$$.fragment,t),this.h()},h(){h(n,"href","https://www.themoviedb.org")},m(t,o){y(t,e,o),x(e,$),x(e,n),x(n,r),y(t,a,o),w(l,t,o),D=!0},p(t,e){const $={};64&e&&($.data=t[6]),32&e&&($.loading=t[5]),256&e&&($.itemCount=t[8]),128&e&&($.pageNumber=t[7]),2&e&&($.type=t[1]),6291456&e&&($.$$scope={dirty:e,ctx:t}),l.$set($)},i(t){D||(v(l.$$.fragment,t),D=!0)},o(t){b(l.$$.fragment,t),D=!1},d(t){t&&i(e),t&&i(a),T(l,t)}}}function it(t){let e,$,n,r;e=new N({props:{header:"With Items",id:"tab1",$$slots:{default:[et]},$$scope:{ctx:t}}});let a="undefined"!=typeof document&&function(t){let e,$;return e=new N({props:{header:"With Data",id:"tab2",$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){w(e,t,n),$=!0},p(t,$){const n={};4194786&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n)},i(t){$||(v(e.$$.fragment,t),$=!0)},o(t){b(e.$$.fragment,t),$=!1},d(t){T(e,t)}}}(t);return{c(){f(e.$$.fragment),$=o(),a&&a.c(),n=_()},l(t){u(e.$$.fragment,t),$=m(t),a&&a.l(t),n=_()},m(t,o){w(e,t,o),y(t,$,o),a&&a.m(t,o),y(t,n,o),r=!0},p(t,$){const n={};4194335&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n),"undefined"!=typeof document&&a.p(t,$)},i(t){r||(v(e.$$.fragment,t),v(a),r=!0)},o(t){b(e.$$.fragment,t),b(a),r=!1},d(t){T(e,t),t&&i($),a&&a.d(t),t&&i(n)}}}function mt(t){let e;return{c(){e=c("Name")},l(t){e=g(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function pt(t){let e;return{c(){e=c("Default")},l(t){e=g(t,"Default")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function dt(t){let e;return{c(){e=c("Description")},l(t){e=g(t,"Description")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function gt(t){let e;return{c(){e=c("Change")},l(t){e=g(t,"Change")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function ut(t){let e,$,n,r,a,s,c,l;return e=new L({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),n=new L({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),a=new L({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment),r=o(),f(a.$$.fragment),s=o(),f(c.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t),r=m(t),u(a.$$.fragment,t),s=m(t),u(c.$$.fragment,t)},m(t,o){w(e,t,o),y(t,$,o),w(n,t,o),y(t,r,o),w(a,t,o),y(t,s,o),w(c,t,o),l=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const o={};4194304&$&&(o.$$scope={dirty:$,ctx:t}),n.$set(o);const s={};4194304&$&&(s.$$scope={dirty:$,ctx:t}),a.$set(s);const f={};4194304&$&&(f.$$scope={dirty:$,ctx:t}),c.$set(f)},i(t){l||(v(e.$$.fragment,t),v(n.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(a.$$.fragment,t),b(c.$$.fragment,t),l=!1},d(t){T(e,t),t&&i($),T(n,t),t&&i(r),T(a,t),t&&i(s),T(c,t)}}}function ht(t){let e,$;return e=new j({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){w(e,t,n),$=!0},p(t,$){const n={};4194304&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n)},i(t){$||(v(e.$$.fragment,t),$=!0)},o(t){b(e.$$.fragment,t),$=!1},d(t){T(e,t)}}}function yt(t){let e;return{c(){e=c("items")},l(t){e=g(t,"items")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function xt(t){let e;return{c(){e=c("An array of items to show in the table. When using this property,\r\n            the table will handle sorting and paging")},l(t){e=g(t,"An array of items to show in the table. When using this property,\r\n            the table will handle sorting and paging")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function wt(t){let e,$,n,r,a,c,l,g;return e=new O({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),a=new O({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),n=s("td"),r=o(),f(a.$$.fragment),c=o(),l=s("td")},l(t){u(e.$$.fragment,t),$=m(t),n=p(t,"TD",{}),d(n).forEach(i),r=m(t),u(a.$$.fragment,t),c=m(t),l=p(t,"TD",{}),d(l).forEach(i)},m(t,o){w(e,t,o),y(t,$,o),y(t,n,o),y(t,r,o),w(a,t,o),y(t,c,o),y(t,l,o),g=!0},p(t,$){const n={};4194304&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),a.$set(r)},i(t){g||(v(e.$$.fragment,t),v(a.$$.fragment,t),g=!0)},o(t){b(e.$$.fragment,t),b(a.$$.fragment,t),g=!1},d(t){T(e,t),t&&i($),t&&i(n),t&&i(r),T(a,t),t&&i(c),t&&i(l)}}}function vt(t){let e;return{c(){e=c("data")},l(t){e=g(t,"data")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function bt(t){let e;return{c(){e=c("An array of items to show in the table. When using this property,\r\n            you will need to handle sorting and paging yourself")},l(t){e=g(t,"An array of items to show in the table. When using this property,\r\n            you will need to handle sorting and paging yourself")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Tt(t){let e,$,n,r,a,c,l,g;return e=new O({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),a=new O({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),n=s("td"),r=o(),f(a.$$.fragment),c=o(),l=s("td")},l(t){u(e.$$.fragment,t),$=m(t),n=p(t,"TD",{}),d(n).forEach(i),r=m(t),u(a.$$.fragment,t),c=m(t),l=p(t,"TD",{}),d(l).forEach(i)},m(t,o){w(e,t,o),y(t,$,o),y(t,n,o),y(t,r,o),w(a,t,o),y(t,c,o),y(t,l,o),g=!0},p(t,$){const n={};4194304&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),a.$set(r)},i(t){g||(v(e.$$.fragment,t),v(a.$$.fragment,t),g=!0)},o(t){b(e.$$.fragment,t),b(a.$$.fragment,t),g=!1},d(t){T(e,t),t&&i($),t&&i(n),t&&i(r),T(a,t),t&&i(c),t&&i(l)}}}function Dt(t){let e;return{c(){e=c("loading")},l(t){e=g(t,"loading")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Et(t){let e;return{c(){e=c("false")},l(t){e=g(t,"false")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Nt(t){let e;return{c(){e=c("Whether the data property is being loaded. If true, the `loading`\r\n            slot will be displayed")},l(t){e=g(t,"Whether the data property is being loaded. If true, the `loading`\r\n            slot will be displayed")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function _t(t){let e,$,n,r,a,c,l,g;return e=new O({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),n=new O({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),a=new O({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment),r=o(),f(a.$$.fragment),c=o(),l=s("td")},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t),r=m(t),u(a.$$.fragment,t),c=m(t),l=p(t,"TD",{}),d(l).forEach(i)},m(t,o){w(e,t,o),y(t,$,o),w(n,t,o),y(t,r,o),w(a,t,o),y(t,c,o),y(t,l,o),g=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const o={};4194304&$&&(o.$$scope={dirty:$,ctx:t}),n.$set(o);const s={};4194304&$&&(s.$$scope={dirty:$,ctx:t}),a.$set(s)},i(t){g||(v(e.$$.fragment,t),v(n.$$.fragment,t),v(a.$$.fragment,t),g=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(a.$$.fragment,t),g=!1},d(t){T(e,t),t&&i($),T(n,t),t&&i(r),T(a,t),t&&i(c),t&&i(l)}}}function Ct(t){let e;return{c(){e=c("keyField")},l(t){e=g(t,"keyField")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function kt(t){let e;return{c(){e=c("The name of the field to use for keying items for updates")},l(t){e=g(t,"The name of the field to use for keying items for updates")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Pt(t){let e,$,n;return{c(){e=s("input"),this.h()},l(t){e=p(t,"INPUT",{type:!0}),this.h()},h(){h(e,"type","text")},m(r,a){y(r,e,a),U(e,t[0]),$||(n=H(e,"input",t[13]),$=!0)},p(t,$){1&$&&e.value!==t[0]&&U(e,t[0])},d(t){t&&i(e),$=!1,n()}}}function It(t){let e,$,n,r,a,c,l,g;return e=new O({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),a=new O({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),l=new O({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),n=s("td"),r=o(),f(a.$$.fragment),c=o(),f(l.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),n=p(t,"TD",{}),d(n).forEach(i),r=m(t),u(a.$$.fragment,t),c=m(t),u(l.$$.fragment,t)},m(t,o){w(e,t,o),y(t,$,o),y(t,n,o),y(t,r,o),w(a,t,o),y(t,c,o),w(l,t,o),g=!0},p(t,$){const n={};4194304&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),a.$set(r);const o={};4194305&$&&(o.$$scope={dirty:$,ctx:t}),l.$set(o)},i(t){g||(v(e.$$.fragment,t),v(a.$$.fragment,t),v(l.$$.fragment,t),g=!0)},o(t){b(e.$$.fragment,t),b(a.$$.fragment,t),b(l.$$.fragment,t),g=!1},d(t){T(e,t),t&&i($),t&&i(n),t&&i(r),T(a,t),t&&i(c),T(l,t)}}}function St(t){let e;return{c(){e=c("pageNumber")},l(t){e=g(t,"pageNumber")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function At(t){let e;return{c(){e=c("1")},l(t){e=g(t,"1")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Vt(t){let e;return{c(){e=c("The current page number")},l(t){e=g(t,"The current page number")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Wt(t){let e,$,n;return{c(){e=s("input"),this.h()},l(t){e=p(t,"INPUT",{type:!0}),this.h()},h(){h(e,"type","number")},m(r,a){y(r,e,a),U(e,t[2]),$||(n=H(e,"input",t[14]),$=!0)},p(t,$){4&$&&I(e.value)!==t[2]&&U(e,t[2])},d(t){t&&i(e),$=!1,n()}}}function Ft(t){let e,$,n,r,a,s,c,l;return e=new O({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),n=new O({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),a=new O({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),c=new O({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment),r=o(),f(a.$$.fragment),s=o(),f(c.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t),r=m(t),u(a.$$.fragment,t),s=m(t),u(c.$$.fragment,t)},m(t,o){w(e,t,o),y(t,$,o),w(n,t,o),y(t,r,o),w(a,t,o),y(t,s,o),w(c,t,o),l=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const o={};4194304&$&&(o.$$scope={dirty:$,ctx:t}),n.$set(o);const s={};4194304&$&&(s.$$scope={dirty:$,ctx:t}),a.$set(s);const f={};4194308&$&&(f.$$scope={dirty:$,ctx:t}),c.$set(f)},i(t){l||(v(e.$$.fragment,t),v(n.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(a.$$.fragment,t),b(c.$$.fragment,t),l=!1},d(t){T(e,t),t&&i($),T(n,t),t&&i(r),T(a,t),t&&i(s),T(c,t)}}}function jt(t){let e;return{c(){e=c("pageSize")},l(t){e=g(t,"pageSize")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function zt(t){let e;return{c(){e=c("10")},l(t){e=g(t,"10")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Lt(t){let e;return{c(){e=c("The number of items displayed on each page")},l(t){e=g(t,"The number of items displayed on each page")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Ot(t){let e,$,n;return{c(){e=s("input"),this.h()},l(t){e=p(t,"INPUT",{type:!0}),this.h()},h(){h(e,"type","number")},m(r,a){y(r,e,a),U(e,t[3]),$||(n=H(e,"input",t[15]),$=!0)},p(t,$){8&$&&I(e.value)!==t[3]&&U(e,t[3])},d(t){t&&i(e),$=!1,n()}}}function Ut(t){let e,$,n,r,a,s,c,l;return e=new O({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),n=new O({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),a=new O({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),c=new O({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment),r=o(),f(a.$$.fragment),s=o(),f(c.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t),r=m(t),u(a.$$.fragment,t),s=m(t),u(c.$$.fragment,t)},m(t,o){w(e,t,o),y(t,$,o),w(n,t,o),y(t,r,o),w(a,t,o),y(t,s,o),w(c,t,o),l=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const o={};4194304&$&&(o.$$scope={dirty:$,ctx:t}),n.$set(o);const s={};4194304&$&&(s.$$scope={dirty:$,ctx:t}),a.$set(s);const f={};4194312&$&&(f.$$scope={dirty:$,ctx:t}),c.$set(f)},i(t){l||(v(e.$$.fragment,t),v(n.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(a.$$.fragment,t),b(c.$$.fragment,t),l=!1},d(t){T(e,t),t&&i($),T(n,t),t&&i(r),T(a,t),t&&i(s),T(c,t)}}}function Ht(t){let e;return{c(){e=c("itemCount")},l(t){e=g(t,"itemCount")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Bt(t){let e;return{c(){e=c("The total number of items")},l(t){e=g(t,"The total number of items")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Mt(t){let e,$,n;return{c(){e=s("input"),this.h()},l(t){e=p(t,"INPUT",{type:!0}),this.h()},h(){h(e,"type","number")},m(r,a){y(r,e,a),U(e,t[4]),$||(n=H(e,"input",t[16]),$=!0)},p(t,$){16&$&&I(e.value)!==t[4]&&U(e,t[4])},d(t){t&&i(e),$=!1,n()}}}function Rt(t){let e,$,n,r,a,c,l,g;return e=new O({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),a=new O({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),l=new O({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),n=s("td"),r=o(),f(a.$$.fragment),c=o(),f(l.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),n=p(t,"TD",{}),d(n).forEach(i),r=m(t),u(a.$$.fragment,t),c=m(t),u(l.$$.fragment,t)},m(t,o){w(e,t,o),y(t,$,o),y(t,n,o),y(t,r,o),w(a,t,o),y(t,c,o),w(l,t,o),g=!0},p(t,$){const n={};4194304&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),a.$set(r);const o={};4194320&$&&(o.$$scope={dirty:$,ctx:t}),l.$set(o)},i(t){g||(v(e.$$.fragment,t),v(a.$$.fragment,t),v(l.$$.fragment,t),g=!0)},o(t){b(e.$$.fragment,t),b(a.$$.fragment,t),b(l.$$.fragment,t),g=!1},d(t){T(e,t),t&&i($),t&&i(n),t&&i(r),T(a,t),t&&i(c),T(l,t)}}}function Gt(t){let e;return{c(){e=c("type")},l(t){e=g(t,"type")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function qt(t){let e;return{c(){e=c("line")},l(t){e=g(t,"line")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Jt(t){let e,$,n,r,a,o,f;return{c(){e=s("select"),$=s("option"),n=c("-"),r=s("option"),a=c("line"),this.h()},l(t){e=p(t,"SELECT",{});var o=d(e);$=p(o,"OPTION",{});var s=d($);n=g(s,"-"),s.forEach(i),r=p(o,"OPTION",{});var c=d(r);a=g(c,"line"),c.forEach(i),o.forEach(i),this.h()},h(){$.__value="-",$.value=$.__value,r.__value="line",r.value=r.__value,void 0===t[1]&&B((()=>t[17].call(e)))},m(s,c){y(s,e,c),x(e,$),x($,n),x(e,r),x(r,a),M(e,t[1]),o||(f=H(e,"change",t[17]),o=!0)},p(t,$){2&$&&M(e,t[1])},d(t){t&&i(e),o=!1,f()}}}function Kt(t){let e,$,n,r,a,c,l,g;return e=new O({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),a=new O({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),l=new O({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),n=s("td"),r=o(),f(a.$$.fragment),c=o(),f(l.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),n=p(t,"TD",{}),d(n).forEach(i),r=m(t),u(a.$$.fragment,t),c=m(t),u(l.$$.fragment,t)},m(t,o){w(e,t,o),y(t,$,o),y(t,n,o),y(t,r,o),w(a,t,o),y(t,c,o),w(l,t,o),g=!0},p(t,$){const n={};4194304&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),a.$set(r);const o={};4194306&$&&(o.$$scope={dirty:$,ctx:t}),l.$set(o)},i(t){g||(v(e.$$.fragment,t),v(a.$$.fragment,t),v(l.$$.fragment,t),g=!0)},o(t){b(e.$$.fragment,t),b(a.$$.fragment,t),b(l.$$.fragment,t),g=!1},d(t){T(e,t),t&&i($),t&&i(n),t&&i(r),T(a,t),t&&i(c),T(l,t)}}}function Qt(t){let e,$,n,r,a,s,c,l,p,d,g,h,x,D,E,N;return e=new j({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),n=new j({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),a=new j({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),c=new j({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),p=new j({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),g=new j({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),x=new j({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),E=new j({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment),r=o(),f(a.$$.fragment),s=o(),f(c.$$.fragment),l=o(),f(p.$$.fragment),d=o(),f(g.$$.fragment),h=o(),f(x.$$.fragment),D=o(),f(E.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t),r=m(t),u(a.$$.fragment,t),s=m(t),u(c.$$.fragment,t),l=m(t),u(p.$$.fragment,t),d=m(t),u(g.$$.fragment,t),h=m(t),u(x.$$.fragment,t),D=m(t),u(E.$$.fragment,t)},m(t,o){w(e,t,o),y(t,$,o),w(n,t,o),y(t,r,o),w(a,t,o),y(t,s,o),w(c,t,o),y(t,l,o),w(p,t,o),y(t,d,o),w(g,t,o),y(t,h,o),w(x,t,o),y(t,D,o),w(E,t,o),N=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const o={};4194304&$&&(o.$$scope={dirty:$,ctx:t}),n.$set(o);const s={};4194304&$&&(s.$$scope={dirty:$,ctx:t}),a.$set(s);const f={};4194305&$&&(f.$$scope={dirty:$,ctx:t}),c.$set(f);const l={};4194308&$&&(l.$$scope={dirty:$,ctx:t}),p.$set(l);const i={};4194312&$&&(i.$$scope={dirty:$,ctx:t}),g.$set(i);const m={};4194320&$&&(m.$$scope={dirty:$,ctx:t}),x.$set(m);const d={};4194306&$&&(d.$$scope={dirty:$,ctx:t}),E.$set(d)},i(t){N||(v(e.$$.fragment,t),v(n.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),v(p.$$.fragment,t),v(g.$$.fragment,t),v(x.$$.fragment,t),v(E.$$.fragment,t),N=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),b(a.$$.fragment,t),b(c.$$.fragment,t),b(p.$$.fragment,t),b(g.$$.fragment,t),b(x.$$.fragment,t),b(E.$$.fragment,t),N=!1},d(t){T(e,t),t&&i($),T(n,t),t&&i(r),T(a,t),t&&i(s),T(c,t),t&&i(l),T(p,t),t&&i(d),T(g,t),t&&i(h),T(x,t),t&&i(D),T(E,t)}}}function Xt(t){let e,$,n,r;return e=new C({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),n=new k({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t)},m(t,a){w(e,t,a),y(t,$,a),w(n,t,a),r=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const a={};4194335&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a)},i(t){r||(v(e.$$.fragment,t),v(n.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),r=!1},d(t){T(e,t),t&&i($),T(n,t)}}}function Yt(t){let e;return{c(){e=c("Name")},l(t){e=g(t,"Name")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function Zt(t){let e;return{c(){e=c("Args")},l(t){e=g(t,"Args")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function te(t){let e,$,n,r;return e=new L({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),n=new L({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t)},m(t,a){w(e,t,a),y(t,$,a),w(n,t,a),r=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const a={};4194304&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a)},i(t){r||(v(e.$$.fragment,t),v(n.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),r=!1},d(t){T(e,t),t&&i($),T(n,t)}}}function ee(t){let e,$;return e=new j({props:{$$slots:{default:[te]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){w(e,t,n),$=!0},p(t,$){const n={};4194304&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n)},i(t){$||(v(e.$$.fragment,t),$=!0)},o(t){b(e.$$.fragment,t),$=!1},d(t){T(e,t)}}}function $e(t){let e;return{c(){e=c("sort")},l(t){e=g(t,"sort")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function ne(t){let e;return{c(){e=c('field: the name of the field that was sorted; sortDirection: "asc"\r\n            or "desc"')},l(t){e=g(t,'field: the name of the field that was sorted; sortDirection: "asc"\r\n            or "desc"')},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function re(t){let e,$,n,r;return e=new O({props:{$$slots:{default:[$e]},$$scope:{ctx:t}}}),n=new O({props:{$$slots:{default:[ne]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t)},m(t,a){w(e,t,a),y(t,$,a),w(n,t,a),r=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const a={};4194304&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a)},i(t){r||(v(e.$$.fragment,t),v(n.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),r=!1},d(t){T(e,t),t&&i($),T(n,t)}}}function ae(t){let e;return{c(){e=c("page")},l(t){e=g(t,"page")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function oe(t){let e;return{c(){e=c("value: the number of the current page")},l(t){e=g(t,"value: the number of the current page")},m(t,$){y(t,e,$)},d(t){t&&i(e)}}}function se(t){let e,$,n,r;return e=new O({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),n=new O({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t)},m(t,a){w(e,t,a),y(t,$,a),w(n,t,a),r=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const a={};4194304&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a)},i(t){r||(v(e.$$.fragment,t),v(n.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),r=!1},d(t){T(e,t),t&&i($),T(n,t)}}}function ce(t){let e,$,n,r;return e=new j({props:{$$slots:{default:[re]},$$scope:{ctx:t}}}),n=new j({props:{$$slots:{default:[se]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t)},m(t,a){w(e,t,a),y(t,$,a),w(n,t,a),r=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const a={};4194304&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a)},i(t){r||(v(e.$$.fragment,t),v(n.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),r=!1},d(t){T(e,t),t&&i($),T(n,t)}}}function fe(t){let e,$,n,r;return e=new C({props:{$$slots:{default:[ee]},$$scope:{ctx:t}}}),n=new k({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}}),{c(){f(e.$$.fragment),$=o(),f(n.$$.fragment)},l(t){u(e.$$.fragment,t),$=m(t),u(n.$$.fragment,t)},m(t,a){w(e,t,a),y(t,$,a),w(n,t,a),r=!0},p(t,$){const r={};4194304&$&&(r.$$scope={dirty:$,ctx:t}),e.$set(r);const a={};4194304&$&&(a.$$scope={dirty:$,ctx:t}),n.$set(a)},i(t){r||(v(e.$$.fragment,t),v(n.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),b(n.$$.fragment,t),r=!1},d(t){T(e,t),t&&i($),T(n,t)}}}function le(t){let e,$;return{c(){e=s("pre"),$=c(t[9])},l(n){e=p(n,"PRE",{});var r=d(e);$=g(r,t[9]),r.forEach(i)},m(t,n){y(t,e,n),x(e,$)},p(t,e){512&e&&P($,t[9])},d(t){t&&i(e)}}}function ie(t){let e,$,D,E,N,_,C,k,P,I,S,A,V,W,F,j,z,L,O,U,H,B,M,R,q,J,K,Q,X,Y,Z;return A=new n({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),L=new r({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),R=new r({props:{$$slots:{default:[fe]},$$scope:{ctx:t}}}),Y=new a({props:{$$slots:{default:[le]},$$scope:{ctx:t}}}),{c(){e=o(),$=s("div"),D=s("h1"),E=c("Data Table"),N=o(),_=s("p"),C=c("A table with data in rows."),k=o(),P=s("p"),I=c("The table works in two main ways: you can either pass in an array of items\r\n    using the `items` property to have the table handle your sorting and paging,\r\n    or you can pass in an array of items using the `data` property and handle\r\n    sorting and paging via the on:sort and on:page events yourself. The first\r\n    way is handy when the array of data doesn't change, whereas the second is\r\n    handy when you are loading your data from a database or web service."),S=o(),f(A.$$.fragment),V=o(),W=s("h2"),F=c("Properties"),j=o(),z=s("div"),f(L.$$.fragment),O=o(),U=s("h2"),H=c("Events"),B=o(),M=s("div"),f(R.$$.fragment),q=o(),J=s("h2"),K=c("Code"),Q=o(),X=s("div"),f(Y.$$.fragment),this.h()},l(t){l('[data-svelte="svelte-1lm9jl8"]',G.head).forEach(i),e=m(t),$=p(t,"DIV",{class:!0});var n=d($);D=p(n,"H1",{});var r=d(D);E=g(r,"Data Table"),r.forEach(i),N=m(n),_=p(n,"P",{});var a=d(_);C=g(a,"A table with data in rows."),a.forEach(i),k=m(n),P=p(n,"P",{});var o=d(P);I=g(o,"The table works in two main ways: you can either pass in an array of items\r\n    using the `items` property to have the table handle your sorting and paging,\r\n    or you can pass in an array of items using the `data` property and handle\r\n    sorting and paging via the on:sort and on:page events yourself. The first\r\n    way is handy when the array of data doesn't change, whereas the second is\r\n    handy when you are loading your data from a database or web service."),o.forEach(i),S=m(n),u(A.$$.fragment,n),V=m(n),W=p(n,"H2",{});var s=d(W);F=g(s,"Properties"),s.forEach(i),j=m(n),z=p(n,"DIV",{class:!0});var c=d(z);u(L.$$.fragment,c),c.forEach(i),O=m(n),U=p(n,"H2",{});var f=d(U);H=g(f,"Events"),f.forEach(i),B=m(n),M=p(n,"DIV",{class:!0});var h=d(M);u(R.$$.fragment,h),h.forEach(i),q=m(n),J=p(n,"H2",{});var y=d(J);K=g(y,"Code"),y.forEach(i),Q=m(n),X=p(n,"DIV",{class:!0});var x=d(X);u(Y.$$.fragment,x),x.forEach(i),n.forEach(i),this.h()},h(){G.title="Data Table | Svelte Toolkit",h(z,"class","block"),h(M,"class","block"),h(X,"class","block"),h($,"class","container")},m(t,n){y(t,e,n),y(t,$,n),x($,D),x(D,E),x($,N),x($,_),x(_,C),x($,k),x($,P),x(P,I),x($,S),w(A,$,null),x($,V),x($,W),x(W,F),x($,j),x($,z),w(L,z,null),x($,O),x($,U),x(U,H),x($,B),x($,M),w(R,M,null),x($,q),x($,J),x(J,K),x($,Q),x($,X),w(Y,X,null),Z=!0},p(t,[e]){const $={};4194815&e&&($.$$scope={dirty:e,ctx:t}),A.$set($);const n={};4194335&e&&(n.$$scope={dirty:e,ctx:t}),L.$set(n);const r={};4194304&e&&(r.$$scope={dirty:e,ctx:t}),R.$set(r);const a={};4194816&e&&(a.$$scope={dirty:e,ctx:t}),Y.$set(a)},i(t){Z||(v(A.$$.fragment,t),v(L.$$.fragment,t),v(R.$$.fragment,t),v(Y.$$.fragment,t),Z=!0)},o(t){b(A.$$.fragment,t),b(L.$$.fragment,t),b(R.$$.fragment,t),b(Y.$$.fragment,t),Z=!1},d(t){t&&i(e),t&&i($),T(A),T(L),T(R),T(Y)}}}let me=20;function pe(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}function de(t,e,$){let n,r="name",a=1,o=10,s=0,c="",f=!0,l=[],i="vote_average",m="desc",p=1,d=0;async function g(){$(5,f=!0);const t=["api_key=ffd0afce8d1c3d7369391dcc1d19dd7f","language=en-US","include_adult=false","include_video=false",`sort_by=${i}.${m}`,"vote_count.gte=1000",`page=${p}`].join("&");await fetch(`https://api.themoviedb.org/3/discover/movie?${t}`).then((t=>t.json())).then((t=>{$(8,d=t.total_results),$(6,l=t.results)})).catch((t=>{throw $(8,d=0),$(6,l=[]),t})),$(5,f=!1)}return D((async()=>{await g()})),t.$$.update=()=>{3&t.$$.dirty&&$(9,n=`\nimport { DataTable, DataTableColumn } from "svelte-toolkit";\n\n<DataTable items={countries} keyField="${r}" type="${c}" let:item>\n  <DataTableColumn field="name" header="Name" sortable>\n    {item.name}\n  </DataTableColumn>\n  <DataTableColumn field="title" header="Title" sortable>\n    {item.title}\n  </DataTableColumn>\n  …\n  <div slot="empty">No countries were found...</div>\n</DataTable>\n\n~ OR ~\n\n<DataTable\n  data={countries}\n  keyField="${r}"\n  {itemCount}\n  {pageNumber}\n  {pageSize}\n  type="${c}"\n  let:item\n  on:sort={handleSort}\n  on:page={handlePage}>\n  <DataTableColumn field="name" header="Name" sortable>\n    {item.name}\n  </DataTableColumn>\n  <DataTableColumn field="title" header="Title" sortable>\n    {item.title}\n  </DataTableColumn>\n  …\n  <div slot="loading">Loading countries...</div>\n  <div slot="empty">No countries were found...</div>\n</DataTable>`.trim())},[r,c,a,o,s,f,l,p,d,n,async function(t){i=t.detail.sort,m=t.detail.sortDirection,g()},function(t){$(7,p=t.detail),g()},function(t){a=t,$(2,a)},function(){r=this.value,$(0,r)},function(){a=I(this.value),$(2,a)},function(){o=I(this.value),$(3,o)},function(){s=I(this.value),$(4,s)},function(){c=S(this),$(1,c)}]}class ge extends t{constructor(t){super(),e(this,t,de,ie,$,{})}}export{ge as default};
