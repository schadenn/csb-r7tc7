(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(6),o=r.n(n),i=r(3),l=r(4),a=(r(13),r(8)),d={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},s={borderColor:"#2196f3"},j={borderColor:"#00e676"},b={borderColor:"#ff1744"},u=r(0);function O(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),r=t[0],n=t[1],o=Object(c.useState)(!1),O=Object(l.a)(o,2),h=O[0],x=O[1],f=Object(c.useState)(80),g=Object(l.a)(f,2),p=g[0],v=g[1],m=Object(c.useState)(!1),w=Object(l.a)(m,2),y=w[0],C=w[1],k=function(e){var t=JSON.parse(e).data;console.log(t);var r=Object.entries(t.brands).map((function(e){var t,r,c,n=Object(l.a)(e,2),o=n[0],i=n[1];return{id:o,name:null===i||void 0===i?void 0:i.displayName,icon:null===i||void 0===i||null===(t=i.icon)||void 0===t?void 0:t.url,feature:null===i||void 0===i||null===(r=i.feature)||void 0===r?void 0:r.url,logo:null===i||void 0===i||null===(c=i.logo)||void 0===c?void 0:c.url}}));n(r)},S=Object(c.useCallback)((function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return C(!0)},t.onload=function(){try{k(t.result)}catch(e){C(!0)}},e.forEach((function(e){return t.readAsText(e)}))}),[]),D=Object(a.a)({onDrop:S}),I=D.getRootProps,A=D.getInputProps,N=D.isDragActive,R=D.isDragAccept,F=D.isDragReject,J=Object(c.useMemo)((function(){return Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},d),N?s:{}),R?j:{}),F?b:{})}),[N,F,R]);return Object(u.jsxs)("div",{className:"App",children:[y&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{style:{color:"red"},children:"This file doesn't look right."}),Object(u.jsx)("button",{onClick:function(){return C(!1)},children:"Okay"}),Object(u.jsx)("br",{})]}),Object(u.jsx)("h3",{children:"Via file import"}),Object(u.jsxs)("div",Object(i.a)(Object(i.a)({},I({style:J})),{},{children:[Object(u.jsx)("input",Object(i.a)({},A())),N?Object(u.jsx)("p",{children:"Drop the file here..."}):Object(u.jsx)("p",{children:"Drag 'n' drop the merchant list file here, or click to select file"})]})),Object(u.jsx)("h3",{children:"Paste directly"}),Object(u.jsx)("textarea",{rows:"30",cols:"80",onChange:function(e){e.target.value&&k(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{placeholder:"image width",type:"text",onChange:function(e){return v(e.target.value)}}),Object(u.jsx)("button",{onClick:function(){x(!0)},children:"Show images"}),h&&Object(u.jsxs)("table",{children:[Object(u.jsxs)("thead",{children:[Object(u.jsx)("td",{children:"Id"}),Object(u.jsx)("td",{children:"Name"}),Object(u.jsx)("td",{children:"Icon"}),Object(u.jsx)("td",{children:"Feature"}),Object(u.jsx)("td",{children:"Logo"})]}),r.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.icon,width:p})}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.feature,width:p})}),Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.logo,width:p})})]})}))]})]})}var h=document.getElementById("root");o.a.render(Object(u.jsx)(c.StrictMode,{children:Object(u.jsx)(O,{})}),h)}},[[17,1,2]]]);
//# sourceMappingURL=main.2ce184c2.chunk.js.map