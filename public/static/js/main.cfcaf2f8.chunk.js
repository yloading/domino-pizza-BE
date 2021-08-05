(this["webpackJsonpreact-domino-pizza"]=this["webpackJsonpreact-domino-pizza"]||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=(a(97),a(165)),s=Object(o.a)((function(e){return{root:{height:"100vh",backgroundImage:"url(".concat("/assets/pizza.jpeg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},extendedIcon:{marginRight:e.spacing(1)},text:{color:"#fafafa"},appBarWrapper:{width:"80%",margin:"0 auto"},button:{margin:e.spacing(1)},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),fontWeight:"2px"},viewOrders:{color:"#E02C28"},modalButtons:{padding:e.spacing(2,4,3)}}})),l=a(81),d=a(182),j=a(183),b=a(168),u=a(170),h=a(171),p=a(57),O=a(5);function x(){var e=s();return Object(O.jsx)("div",{children:Object(O.jsx)(b.a,{position:"fixed",style:{backgroundColor:"#E4A927"},children:Object(O.jsxs)(u.a,{className:e.appBarWrapper,children:[Object(O.jsx)(h.a,{variant:"h6",style:{color:"#E02C28",flexGrow:"1"},onClick:function(){return p.animateScroll.scrollToTop()},children:"Domino's Pizza"}),Object(O.jsx)(p.Link,{className:e.viewOrders,to:"order",smooth:!0,duration:1e3,children:"See Orders"})]})})})}var m=a(37),g=a(172),f=a(173),v=a(79),C=a.n(v),y=a(185),k=a(174),z=a(135),w=a(175),N=a(184);function T(){var e=s(),t=r.a.useState(!1),a=Object(m.a)(t,2),n=a[0],c=a[1],i=function(){c(!1)};return Object(O.jsx)("div",{children:Object(O.jsxs)(g.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{minHeight:"90vh"},children:[Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(h.a,{className:e.text,variant:"h2",align:"center",gutterBottom:!0,children:"TRIPLE THE FUN IN EVERY BITE!"})}),Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(h.a,{className:e.text,variant:"h5",align:"center",paragraph:!0,children:"Weve changed our delivery areas to better serve you!"})}),Object(O.jsxs)(g.a,{item:!0,children:[Object(O.jsxs)(f.a,{variant:"extended",style:{backgroundColor:"#E4A927"},onClick:function(){c(!0)},children:[Object(O.jsx)(C.a,{className:e.extendedIcon}),"Order Now"]}),Object(O.jsx)(y.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:n,onClose:i,closeAfterTransition:!0,BackdropComponent:k.a,BackdropProps:{timeout:500},children:Object(O.jsx)(z.a,{in:n,children:Object(O.jsxs)("div",{className:e.paper,children:[Object(O.jsx)("h2",{id:"transition-modal-title",children:"Please enter the order in PML format below."}),Object(O.jsx)("p",{id:"transition-modal-description",children:"You can also upload it using the upload button."}),Object(O.jsx)("div",{className:e.textarea,children:Object(O.jsx)(N.a,{variant:"outlined",multiline:!0,rows:10,maxRows:20,style:{display:"inline-block",margin:"0",width:"100"}})}),Object(O.jsxs)("div",{className:"modalButtons",children:[Object(O.jsx)(w.a,{color:"secondary",onClick:i,children:"Cancel"}),Object(O.jsx)(w.a,{variant:"contained",color:"primary",children:"Submit"})]})]})})})]})]})})}var I=a(180),S=a(181),E=a(178),B=a(179),P=a(80),L=a.n(P),F=a(176),W=a(177),H=Object(o.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:"#db9e1c",backgroundColor:"#ffd06d"},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}}));var R=a(58),A=a(82),_=["name","label","value","error","onChange"];var D={Input:function(e){var t=e.name,a=e.label,n=e.value,r=e.error,c=void 0===r?null:r,i=e.onChange,o=Object(A.a)(e,_);return Object(O.jsx)(N.a,Object(R.a)(Object(R.a)({variant:"outlined",label:a,name:t,value:n,onChange:i},o),c&&{error:!0,helperText:c}))}};function J(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),o=i[0],s=i[1],l=function(e,t){var a=H();return{TableContainer:function(e){return Object(O.jsx)(F.a,{className:a.table,children:e.children})},TblHead:function(e){return Object(O.jsx)(W.a,{children:Object(O.jsx)(E.a,{children:t.map((function(e){return Object(O.jsx)(B.a,{children:e.label},e.id)}))})})}}}(0,[{id:"id",label:"Order #"},{id:"id2",label:"Pizza #"},{id:"descrp",label:"Size"},{id:"descrp",label:"Crust"},{id:"descrp",label:"Type"}]),d=l.TableContainer,j=l.TblHead;return Object(n.useEffect)((function(){L.a.get("/api/orders").then((function(e){return r(e.data)}))}),[]),Object(O.jsxs)(I.a,{children:[Object(O.jsx)("h1",{className:"orderHeader",id:"order",children:"Orders"}),Object(O.jsx)(u.a,{children:Object(O.jsx)(D.Input,{label:"Search Order",style:{width:"100%"},onChange:function(e){s(e.target.value)}})}),Object(O.jsxs)(d,{children:[Object(O.jsx)(j,{}),Object(O.jsx)(S.a,{children:a.filter((function(e){return""==o||e.title.toLowerCase().includes(o.toLowerCase())?e:void 0})).map((function(e){return Object(O.jsxs)(E.a,{children:[Object(O.jsx)(B.a,{children:e.order_number}),Object(O.jsx)(B.a,{children:e.pizza_number}),Object(O.jsx)(B.a,{children:e.size}),Object(O.jsx)(B.a,{children:e.crust}),Object(O.jsx)(B.a,{children:e.type})]},e.pizza_id)}))})]})]})}var M=Object(l.a)({typography:{fontFamily:["Kanit","sans-serif"].join(",")}});var Y=function(){var e=s();return Object(O.jsxs)(d.a,{theme:M,children:[Object(O.jsx)(j.a,{}),Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)(x,{}),Object(O.jsx)(T,{})]}),Object(O.jsx)(J,{})]})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,186)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Y,{})}),document.getElementById("root")),G()},97:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.cfcaf2f8.chunk.js.map