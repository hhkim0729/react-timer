(this["webpackJsonpreact-timer"]=this["webpackJsonpreact-timer"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(16),a=c.n(r),s=(c(22),c(10)),u=c(2),i=c(5),j=(c(23),c(1)),o=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),u=Object(i.a)(a,2),o=u[0],b=u[1],l=Object(n.useState)(""),O=Object(i.a)(l,2),h=O[0],p=O[1];return Object(j.jsxs)("div",{className:"input-box",children:[Object(j.jsx)("h1",{children:"I'm late!"}),Object(j.jsx)("img",{src:"https://media.giphy.com/media/Il1VHqlzomIM0/source.gif",alt:"late rabbit",crossOrigin:"anonymous"}),Object(j.jsx)("h3",{children:"How much time do I have left?"}),Object(j.jsx)("input",{type:"number",placeholder:"0",value:c,onChange:function(e){r(e.target.value)}}),Object(j.jsx)("span",{children:"h"}),Object(j.jsx)("input",{type:"number",placeholder:"0",value:o,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("span",{children:"m"}),Object(j.jsx)("input",{type:"number",placeholder:"0",value:h,onChange:function(e){p(e.target.value)}}),Object(j.jsx)("span",{children:"s"}),Object(j.jsx)("div",{className:"link",children:Object(j.jsx)(s.b,{to:{pathname:"/time",state:{hour:c,min:o,sec:h}},children:"Hurry up!"})})]})},b=(c(30),function(e,t){return String(e).padStart(t,"0")}),l=function(){var e=new Date,t=Object(n.useState)(b(e.getHours(),2)),c=Object(i.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(b(e.getMinutes(),2)),u=Object(i.a)(s,2),o=u[0],l=u[1],O=Object(n.useState)(b(e.getSeconds(),2)),h=Object(i.a)(O,2),p=h[0],m=h[1],d=Object(n.useRef)(null);return Object(n.useEffect)((function(){return d.current=setInterval((function(){var e=new Date;a(b(e.getHours(),2)),l(b(e.getMinutes(),2)),m(b(e.getSeconds(),2))}),1e3),function(){return clearInterval(d.current)}}),[]),Object(j.jsxs)("div",{className:"clock",children:[Object(j.jsx)("h1",{children:"Now"}),Object(j.jsxs)("h3",{children:[r," : ",o," : ",p]})]})},O=(c(31),function(e,t){return String(e).padStart(t,"0")}),h=function(e){var t=e.hour?parseInt(e.hour):0,c=e.min?parseInt(e.min):0,r=e.sec?parseInt(e.sec):0,a=Object(n.useRef)(60*t*60+60*c+r),s=Object(n.useRef)(null),u=Object(n.useState)(O(t,2)),o=Object(i.a)(u,2),b=o[0],l=o[1],h=Object(n.useState)(O(c,2)),p=Object(i.a)(h,2),m=p[0],d=p[1],f=Object(n.useState)(O(r,2)),x=Object(i.a)(f,2),v=x[0],g=x[1],I=Object(n.useState)("xUPGcEwTJrHMVuBD9u/giphy.gif"),S=Object(i.a)(I,2),y=S[0],w=S[1];return Object(n.useEffect)((function(){return s.current=setInterval((function(){a.current-=1,g(O(a.current%60,2)),d(O(parseInt(a.current/60),2)),l(O(parseInt(a.current/60/60),2))}),1e3),function(){return clearInterval(s.current)}}),[]),Object(n.useEffect)((function(){a.current<=0&&(w("Ml8ZIPp2dDmaA/source.gif"),clearInterval(s.current))}),[v]),Object(j.jsxs)("div",{className:"timer",children:[Object(j.jsx)("img",{src:"https://media.giphy.com/media/".concat(y),alt:"you're late",crossOrigin:"anonymous"}),Object(j.jsx)("h3",{children:"You have..."}),Object(j.jsxs)("h2",{children:[b," : ",m," : ",v]})]})},p=(c(32),function(e){var t=e.location,c=parseInt(t.state.hour),n=parseInt(t.state.min),r=parseInt(t.state.sec);return Object(j.jsxs)("div",{className:"time",children:[Object(j.jsx)(l,{}),Object(j.jsx)(h,{hour:c,min:n,sec:r})]})});c(33);var m=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(u.a,{path:"/",exact:!0,component:o}),Object(j.jsx)(u.a,{path:"/time",component:p})]})})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.46e11cd8.chunk.js.map