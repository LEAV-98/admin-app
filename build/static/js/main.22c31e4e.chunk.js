(this["webpackJsonpproduct-crud"]=this["webpackJsonpproduct-crud"]||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),s=n.n(r),i=n(50),o=n(30),l=n.n(o),d=n(37),j=n(19),b=n(17),u=n(22),m=n(14),h=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dbnds4vtj/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dbnds4vtj/upload",{method:"POST",body:n});case 7:if(!(c=e.sent).ok){e.next=15;break}return e.next=11,c.json();case 11:return a=e.sent,e.abrupt("return",a.secure_url);case 15:return e.next=17,c.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),p=n(59),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(j.a)(t,2),a=n[0],r=n[1],s=function(){r(e)},i=function(e){var t=e.target;r(Object(m.a)(Object(m.a)({},a),{},Object(p.a)({},t.name,t.value)))};return[a,i,s]},O=n(81);n(134),n(135);O.a.initializeApp({apiKey:"AIzaSyAEArYtb3MI9ZedEastLZhMmfDZuDtoEgE",authDomain:"pizzeria-30f98.firebaseapp.com",projectId:"pizzeria-30f98",storageBucket:"pizzeria-30f98.appspot.com",messagingSenderId:"1057742808526",appId:"1:1057742808526:web:d8ee967a034c4f1e75779f"});var f=n(28),v=n.n(f),g=n(197),N=n(203),w=n(6),y=n(210),C=n(198),S=n(199),P=n(202),z=n(75),E=n(201),k=n(200),A=n(104),D=n.n(A),F=n(105),L=n.n(F),I=n(192),B=n(195),T=n(196),M=n(100),q=n.n(M),_=n(101),Y=n.n(_),U=n(102),G=n.n(U),W=n(103),H=n.n(W),R="[Auth] Login",V="[Auth] Logout",X=function(e,t){return function(n){O.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;t.uid===(t.uid,void O.a.firestore().collection("roles").onSnapshot((function(e){return e.docs.map((function(e){return Object(m.a)({},e.data())}))[0]})))&&(n(Z(t.uid,t.displayName,t.email)),v.a.fire({title:"Bienvenido Admin",icon:"success",showConfirmButton:!1,timer:2e3}))})).catch((function(e){v.a.fire({title:"Credenciales Inv\xe1lidas",icon:"error",showConfirmButton:!1,timer:2e3})}))}},Z=function(e,t,n){return{type:R,payload:{uid:e,displayName:t,email:n}}},J=function(){return{type:V}},K=n(2),Q=function(){var e=Object(i.b)(),t=function(){console.log("logout"),e(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.auth().signOut();case 2:t(J()),v.a.fire({title:"Hasta Luego!",icon:"warning",showConfirmButton:!1,timer:2e3});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("div",{children:[Object(K.jsxs)(I.a,{button:!0,children:[Object(K.jsx)(b.b,{className:"text-dark",to:"/",children:Object(K.jsx)(B.a,{children:Object(K.jsx)(q.a,{})})}),Object(K.jsx)(b.b,{className:"text-dark",to:"/",children:"Dashboard"})]}),Object(K.jsxs)(I.a,{button:!0,children:[Object(K.jsx)(b.b,{className:"text-dark",to:"/orders",children:Object(K.jsx)(B.a,{children:Object(K.jsx)(Y.a,{})})}),Object(K.jsx)(b.b,{className:"text-dark",to:"/orders",children:"Ordenes"})]}),Object(K.jsxs)(I.a,{button:!0,children:[Object(K.jsx)(b.b,{className:"text-dark",to:"/products",children:Object(K.jsx)(B.a,{children:Object(K.jsx)(G.a,{})})}),Object(K.jsx)(b.b,{className:"text-dark",to:"/products",children:"Productos"})]}),Object(K.jsxs)(I.a,{button:!0,children:[Object(K.jsx)(B.a,{onClick:t,children:Object(K.jsx)(H.a,{})}),Object(K.jsx)(T.a,{primary:"Cerrar Sesi\xf3n",onClick:t})]})]})})},$=Object(g.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(p.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}})),ee=function(){var e=$(),t=a.a.useState(!1),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(C.a,{position:"absolute",className:Object(w.a)(e.appBar,c&&e.appBarShift),style:{backgroundColor:"#222327"},children:Object(K.jsxs)(S.a,{className:e.toolbar,children:[Object(K.jsx)(k.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},className:Object(w.a)(e.menuButton,c&&e.menuButtonHidden),children:Object(K.jsx)(D.a,{})}),Object(K.jsx)(z.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Dashboard Pizza App"})]})}),Object(K.jsxs)(y.a,{variant:"permanent",classes:{paper:Object(w.a)(e.drawerPaper,!c&&e.drawerPaperClose)},open:c,style:{backgroundColor:"black"},children:[Object(K.jsx)("div",{className:e.toolbarIcon,children:Object(K.jsx)(k.a,{onClick:function(){r(!1)},children:Object(K.jsx)(L.a,{})})}),Object(K.jsx)(E.a,{}),Object(K.jsx)(P.a,{children:Object(K.jsx)(Q,{})})]})]})},te=Object(g.a)((function(e){return{root:{display:"flex"},content:{paddingTop:"5rem",flexGrow:1,height:"100vh",overflow:"auto"}}})),ne=function(){var e,t=x({title:"",description:"",precio:""}),n=Object(j.a)(t,2),c=n[0],a=n[1],r=c.title,s=c.description,i=c.precio,o=function(){var t=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,h(e);case 3:a=t.sent,console.log(a),O.a.firestore().collection("products").add(Object(m.a)(Object(m.a)({},c),{},{tipo:document.querySelector("#exampleFormControlSelect2").value,imagenUrl:a})),v.a.fire("Saved","Pizza a\xf1adida con exito","success");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=te();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("div",{className:u.root,children:[Object(K.jsx)(N.a,{}),Object(K.jsx)(ee,{}),Object(K.jsx)("main",{className:u.content,children:Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:Object(K.jsxs)("div",{className:"col-md-6 col-md-8 mx-auto",children:[Object(K.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(K.jsx)("h1",{children:"A\xf1adir Producto"}),Object(K.jsx)(b.b,{to:"/products",children:"Volver"})]}),Object(K.jsx)("div",{children:Object(K.jsxs)("form",{onSubmit:o,children:[Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{children:"Nombre"}),Object(K.jsx)("input",{className:"form-control",type:"text",value:r,name:"title",onChange:a})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{children:"Precio"}),Object(K.jsx)("input",{className:"form-control",type:"text",value:i,name:"precio",onChange:a})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{children:"Descripci\xf3n"}),Object(K.jsx)("input",{className:"form-control",type:"text",value:s,name:"description",onChange:a})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleFormControlSelect2",children:"Tipo de producto"}),Object(K.jsxs)("select",{className:"form-control",id:"exampleFormControlSelect2",children:[Object(K.jsx)("option",{children:"Pizzas"}),Object(K.jsx)("option",{children:"Pastas"}),Object(K.jsx)("option",{children:"Combos"})]})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("p",{children:"Imagen "}),Object(K.jsx)("input",{className:"form-control-file",type:"file",onChange:function(t){e=t.target.files[0]}})]}),Object(K.jsx)("button",{className:"btn btn-success",children:"A\xf1adir"})]})})]})})})})]})})},ce=Object(g.a)((function(e){return{root:{display:"flex"},content:{paddingTop:"5rem",flexGrow:1,height:"100vh",overflow:"auto"}}})),ae=function(){var e,t=Object(u.g)().productId,n=Object(c.useState)({}),a=Object(j.a)(n,2),r=a[0],s=a[1],i=x({title:"",description:"",imagenUrl:"",precio:"",uid:""}),o=Object(j.a)(i,2),p=o[0],f=o[1],g=p.title,w=p.description,y=p.precio,C=Object(c.useState)(!1),S=Object(j.a)(C,2),P=S[0],z=S[1];Object(c.useEffect)((function(){return O.a.firestore().collection("products").onSnapshot((function(e){var n=e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())}));s(n.filter((function(e){return e.id===t}))),z(!0)})),function(){z(!1),s([])}}),[t]);var E=function(){var t=Object(d.a)(l.a.mark((function t(n){var c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==g&&""!==w&&""!==y){t.next=4;break}return v.a.fire("Error","Campos vacios","error"),t.abrupt("return");case 4:if(""!==e){t.next=7;break}return v.a.fire("Error","Ingrese una imagen para reemplazar","error"),t.abrupt("return");case 7:if(c=O.a.firestore(),a="",console.log(e),void 0===e){t.next=14;break}return t.next=13,h(e);case 13:a=t.sent;case 14:return console.log(a),t.next=17,c.doc("products/".concat(r[0].id)).update(Object(m.a)(Object(m.a)({},p),{},{tipo:document.querySelector("#exampleFormControlSelect2").value,imagenUrl:""===a?r[0].imagenUrl:a}));case 17:v.a.fire("Saved","Pizza editada con exito","success");case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=ce();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("div",{className:k.root,children:[Object(K.jsx)(N.a,{}),Object(K.jsx)(ee,{}),Object(K.jsx)("main",{className:k.content,children:Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:P&&Object(K.jsxs)("div",{className:"col-md-6 col-md-8 mx-auto",children:[Object(K.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(K.jsx)("h1",{children:"Editar Producto"}),Object(K.jsx)(b.b,{to:"/products",children:"Volver"})]}),Object(K.jsx)("div",{children:Object(K.jsxs)("form",{onSubmit:E,children:[Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsxs)("label",{children:["Nombre Anterior: ",r[0].title]}),Object(K.jsx)("input",{className:"form-control",type:"text",value:g,name:"title",onChange:f})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsxs)("label",{children:["Precio Anterior: ",r[0].precio]}),Object(K.jsx)("input",{className:"form-control",type:"text",value:y,name:"precio",onChange:f})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsxs)("label",{children:["Descripci\xf3n Anterior: ",Object(K.jsx)("br",{})," ",r[0].description]}),Object(K.jsx)("input",{className:"form-control",type:"text",value:w,name:"description",onChange:f})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleFormControlSelect2",children:"Tipo de producto"}),Object(K.jsxs)("select",{className:"form-control",id:"exampleFormControlSelect2",children:[Object(K.jsx)("option",{children:"Pizzas"}),Object(K.jsx)("option",{children:"Pastas"}),Object(K.jsx)("option",{children:"Combos"})]})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("p",{children:"Imagen Anterior"}),Object(K.jsx)("p",{children:"Nota: Si no selecciona una nueva imagen se conservar\xe1 la ultima subida"}),Object(K.jsx)("img",{className:"img-fluid my-1",src:r[0].imagenUrl,alt:"img"}),Object(K.jsx)("input",{className:"form-control-file",type:"file",onChange:function(t){e=t.target.files[0]}})]}),Object(K.jsx)("button",{className:"btn btn-success",children:"Confirmar Edicion"})]})})]})})})})]})})},re=n(211),se=n(205),ie=n(207),oe=n(106),le=n.n(oe),de=n(204),je=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),be=function(){var e=je(),t=x({email:"admin@admin.com",password:"admin123"}),n=Object(j.a)(t,2),c=n[0],a=n[1],r=Object(i.b)(),s=c.email,o=c.password;return Object(K.jsxs)(de.a,{component:"main",maxWidth:"xs",children:[Object(K.jsx)(N.a,{}),Object(K.jsxs)("div",{className:e.paper,children:[Object(K.jsx)(re.a,{className:e.avatar,children:Object(K.jsx)(le.a,{})}),Object(K.jsx)(z.a,{component:"h1",variant:"h5",children:"Pizzeria Mickuy - Inicio de sesi\xf3n"}),Object(K.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),r(X(s,o))},children:[Object(K.jsx)(ie.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:s,onChange:a,autoComplete:"email",autoFocus:!0}),Object(K.jsx)(ie.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",value:o,onChange:a,label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(K.jsx)(se.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Ingresar"})]})]})]})},ue=n(29),me=n.n(ue),he=n(110),pe=Object(g.a)((function(e){return{root:{display:"flex"},content:{paddingTop:"5rem",flexGrow:1,height:"100vh",overflow:"auto"}}})),xe=function(){var e,t=Object(u.g)().id,n=Object(c.useState)({}),a=Object(j.a)(n,2),r=a[0],s=a[1];Object(c.useEffect)((function(){return O.a.firestore().collection("orders").onSnapshot((function(e){var n=e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())}));s(n.find((function(e){return e.id===t})))})),function(){s({})}}),[t]);var i=function(e,t,n,c,a){he.a.send("service_nptoez9","template_02",{nombre:e,email:t,telefono:n,direccion:c,referencia:a},"user_nbPwIqFvVKAT6kA4MWQTq").then((function(e){console.log("SUCCESS!",e.status,e.text),v.a.fire({title:"Pedido Enviado",text:"Enviando correo a "+t,icon:"success",showConfirmButton:!1,timer:4e3})}),(function(e){console.log("FAILED...",e),v.a.fire({title:"Error al realizar pedido, pruebe mas tarde",text:e,icon:"success",showConfirmButton:!1,timer:4e3})}))},o=pe();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("div",{className:o.root,children:[Object(K.jsx)(N.a,{}),Object(K.jsx)(ee,{}),Object(K.jsx)("main",{className:o.content,children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)(b.b,{to:"/orders",className:"btn btn-info my-2",children:"Volver"}),Object(K.jsxs)("div",{className:"row",children:[Object(K.jsxs)("div",{className:"col-md-8",children:[Object(K.jsxs)("h2",{children:["Pedido N\xb0 ",r.id]}),Object(K.jsxs)("p",{children:["Pedido realizado el"," ",me()(r.tiempo).format("Do MMMM YYYY, h:mm:ss a")]})," ",Object(K.jsxs)("p",{className:"text-capitalize",children:["Nombre del cliente: ",r.nombre]})," ",Object(K.jsxs)("p",{children:["Correo:",r.email]}),Object(K.jsxs)("p",{children:["Precio total: S./",r.precio]}),Object(K.jsxs)("p",{children:["Direcci\xf3n: ",r.direccion]}),Object(K.jsxs)("p",{children:["Referencia: ",r.referencia]}),Object(K.jsxs)("p",{children:["Telefono de Contacto: ",r.telefono]}),Object(K.jsx)("p",{className:"d-inline mr-2",children:"Estado del pedido"}),Object(K.jsx)("button",{className:"Por Confirmar"===r.estado?"btn btn-danger ":"Enviado"===r.estado?"btn btn-warning":"btn btn-success",children:r.estado}),Object(K.jsx)("h3",{children:"El pedido fue"}),Object(K.jsx)("div",{className:"row",children:null===(e=r.shoppingCart)||void 0===e?void 0:e.map((function(e,t){return Object(K.jsxs)("div",{className:"card col-md-6 col-sm-12",children:[Object(K.jsx)("img",{className:"card-img-top",alt:"img",src:e.imagenUrl}),Object(K.jsxs)("div",{className:"card-body",children:[Object(K.jsxs)("p",{className:"card-text",children:["Nombre: ",e.title]}),Object(K.jsxs)("p",{className:"card-text",children:["Cantidad: ",e.cantidad]})]})]},t)}))})]}),"Recibido"===r.estado?Object(K.jsx)("h4",{className:"text-center",children:"Pedido ya culminado"}):Object(K.jsxs)("form",{className:"col-md-4",onSubmit:function(e){e.preventDefault();var t=document.querySelector("#exampleFormControlSelect1").value;O.a.firestore().doc("orders/".concat(r.id)).update(Object(m.a)(Object(m.a)({},r),{},{estado:t})),"Enviado"===t&&i(r.name,r.email,r.telefono,r.direccion,r.referencia)},children:[Object(K.jsx)("h4",{children:"Cambiar el estado del pedido"}),Object(K.jsx)("div",{className:"form-group",children:Object(K.jsx)("select",{className:"form-control",id:"exampleFormControlSelect1",children:"Por Confirmar"===r.estado?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("option",{children:"Enviado"}),Object(K.jsx)("option",{children:"Recibido"})]}):"Enviado"===r.estado?Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("option",{children:"Recibido"})}):Object(K.jsx)(K.Fragment,{})})}),Object(K.jsx)("div",{className:"form-group",children:Object(K.jsx)("input",{type:"submit",value:"Guardar",className:"btn btn-primary"})})]})]})]})})]})})},Oe=function(e){var t=e.order;return Object(K.jsx)("div",{className:"card col-md-4 col-sm-12",children:Object(K.jsxs)("div",{className:"card-body",children:[Object(K.jsxs)("p",{className:"card-title",children:["N\xb0 de pedido: ",t.id]}),Object(K.jsxs)("p",{children:["Fecha y Hora: ",me()(t.tiempo).format("MMMM Do YYYY, h:mm:ss a")," ",Object(K.jsx)("br",{})]}),Object(K.jsx)("p",{className:"card-text d-inline",children:"Estado de pedido "}),Object(K.jsx)("button",{className:"Por Confirmar"===t.estado?"btn btn-warning ":"Enviado"===t.estado?"btn btn-warning":"btn btn-success",children:t.estado}),Object(K.jsx)("div",{children:Object(K.jsx)(b.b,{className:"btn btn-info  mt-2",to:"/orders/".concat(t.id),children:"Ver M\xe1s"})})]})},t.id)},fe=function(e){var t=e.orders;return Object(K.jsx)(K.Fragment,{children:t.map((function(e){return Object(K.jsx)(Oe,{order:e},e.id)}))})},ve=function(){return Object(K.jsx)("div",{className:"loading-container",children:Object(K.jsx)("img",{src:"/img/loading.svg",alt:"loading"})})},ge=function(e){var t=e.orders;return Object(K.jsxs)("table",{className:"table",children:[Object(K.jsx)("thead",{children:Object(K.jsxs)("tr",{children:[Object(K.jsx)("th",{scope:"col",children:"Id"}),Object(K.jsx)("th",{scope:"col",children:"Fecha y Hora"}),Object(K.jsx)("th",{scope:"col",children:"Estado del pedido"}),Object(K.jsx)("th",{scope:"col",children:"Acciones"})]})}),Object(K.jsx)("tbody",{children:t.map((function(e,t){return Object(K.jsxs)("tr",{children:[Object(K.jsx)("th",{scope:"row",children:e.id}),Object(K.jsx)("td",{children:me()(e.tiempo).format("MMMM Do YYYY, h:mm:ss a")}),Object(K.jsx)("td",{children:Object(K.jsx)("button",{className:"Por Confirmar"===e.estado?"btn btn-warning  ":"Enviado"===e.estado?"btn btn-primary":"btn btn-success",children:e.estado})}),Object(K.jsx)("td",{children:Object(K.jsx)(b.b,{className:"btn btn-info ",to:"/orders/".concat(e.id),children:"Ver M\xe1s"})})]},t)}))})]})},Ne=n(107),we=n.n(Ne),ye=n(108),Ce=n.n(ye),Se=Object(g.a)((function(e){return{root:{display:"flex"},content:{paddingTop:"5rem",flexGrow:1,height:"100vh",overflow:"auto"}}})),Pe=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(j.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(0),d=Object(j.a)(l,2),b=d[0],u=d[1];Object(c.useEffect)((function(){return O.a.firestore().collection("orders").orderBy("tiempo","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())}));a(t),o(!0)})),function(){a([])}}),[]);var h=Se();return Object(K.jsx)(K.Fragment,{children:i?Object(K.jsxs)("div",{className:h.root,children:[Object(K.jsx)(N.a,{}),Object(K.jsx)(ee,{}),Object(K.jsx)("main",{className:h.content,children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("h1",{children:"Ordenes"}),Object(K.jsxs)("div",{className:"btn-group my-2",children:[Object(K.jsx)("button",{className:"btn btn-info",onClick:function(){return u(0)},children:Object(K.jsx)(we.a,{})}),Object(K.jsx)("button",{className:"btn btn-info",onClick:function(){return u(1)},children:Object(K.jsx)(Ce.a,{})})]}),Object(K.jsxs)("div",{className:0===b?"view-container":"hide-container",children:[Object(K.jsxs)("h2",{children:["Ordenes del ",me()(Date()).format("LL")]}),Object(K.jsx)(ge,{orders:n.filter((function(e){return me()(e.tiempo).format("LL")===me()(Date()).format("LL")}))}),Object(K.jsx)("h2",{children:"Ordenes de otros dias"}),Object(K.jsx)(ge,{orders:n.filter((function(e){return me()(e.tiempo).format("LL")!==me()(Date()).format("LL")}))})]}),Object(K.jsxs)("div",{className:1===b?"view-container":"hide-container",children:[Object(K.jsxs)("h2",{children:["Ordenes del ",me()(Date()).format("LL")]}),Object(K.jsx)("div",{className:"row",children:Object(K.jsx)(fe,{orders:n.filter((function(e){return me()(e.tiempo).format("LL")===me()(Date()).format("LL")}))})}),Object(K.jsx)("h2",{children:"Ordenes de otros dias"}),Object(K.jsx)("div",{className:"row",children:Object(K.jsx)(fe,{orders:n.filter((function(e){return me()(e.tiempo).format("LL")!==me()(Date()).format("LL")}))})})]})]})})]}):Object(K.jsx)(ve,{})})},ze=n(208),Ee=n(206),ke=n(154),Ae=Object(g.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),De=function(){var e=Ae(),t=Object(w.a)(e.paper,e.fixedHeight);return Object(K.jsxs)("div",{className:e.root,children:[Object(K.jsx)(N.a,{}),Object(K.jsx)(ee,{}),Object(K.jsxs)("main",{className:e.content,children:[Object(K.jsx)("div",{className:e.appBarSpacer}),Object(K.jsxs)(de.a,{maxWidth:"lg",className:e.container,children:[Object(K.jsxs)(Ee.a,{container:!0,spacing:3,children:[Object(K.jsx)(Ee.a,{item:!0,xs:12,children:Object(K.jsx)(ke.a,{className:t,children:Object(K.jsxs)("div",{className:"container d-flex justify-content-center align-items-center flex-column",children:[Object(K.jsx)("h1",{className:"display-4",children:"Bienvenido al administrador de Pizza App"}),Object(K.jsx)("h4",{className:"mt-2",children:"Abajo podr\xe1 visualizar nuestras opciones"})]})})}),Object(K.jsx)(Ee.a,{item:!0,xs:12,md:6,lg:6,children:Object(K.jsx)(ke.a,{className:t,children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("h2",{children:"Productos"}),Object(K.jsx)("p",{children:"Aqu\xed podr\xe1 visualizar los productos que se ofrecen en la interfaz que el cliente visualizar\xe1."}),Object(K.jsx)(b.b,{to:"/products",children:"Ir a Productos"})]})})}),Object(K.jsx)(Ee.a,{item:!0,xs:12,md:6,lg:6,children:Object(K.jsx)(ke.a,{className:t,children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("h2",{children:"Ordenes"}),Object(K.jsx)("p",{children:"Aqu\xed podr\xe1 visualizar las ordernes que los clientes en la aplicaci\xf3n principal realizar\xe1n."}),Object(K.jsx)(b.b,{to:"/orders",children:"Ir a Ordenes"})]})})})]}),Object(K.jsx)(ze.a,{pt:4})]})]})]})},Fe=function(e){var t=e.products,n=e.handleDelete;return Object(K.jsxs)("div",{className:"row",children:[0===t.length&&Object(K.jsx)("h4",{className:"w-100 text-center",children:"No hay productos agregados"}),t.map((function(e,t){return Object(K.jsxs)("div",{className:"card col-sm-6 col-md-4",children:[Object(K.jsx)("img",{className:"card-img-top",src:e.imagenUrl,alt:"img"}),Object(K.jsxs)("div",{className:"card-body",children:[Object(K.jsxs)("h3",{className:"card-title",children:["Nombre: ",e.title]}),Object(K.jsxs)("p",{className:"card-text",children:["Precio: $",e.precio]}),Object(K.jsxs)("p",{className:"card-text",children:["Tipo: ",e.tipo]}),Object(K.jsxs)("p",{children:["Descripci\xf3n: ",e.description]}),Object(K.jsxs)("div",{className:"btn-group ",role:"group",children:[Object(K.jsx)(b.b,{className:"btn btn-success",to:"/edit/".concat(e.id),children:"Editar"}),Object(K.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(e.id)},children:"Eliminar"})]})]})]},t)}))]})},Le=Object(g.a)((function(e){return{root:{display:"flex"},content:{paddingTop:"5rem",flexGrow:1,height:"100vh",overflow:"auto"}}})),Ie=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),s=Object(j.a)(r,2),i=s[0],o=s[1],l=function(e){o(e)},d=function(){O.a.firestore().collection("products").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())}));a(t)}))};Object(c.useEffect)((function(){return d(),function(){a([])}}),[]);var u=function(e){v.a.fire({title:"\xbfEstas seguro que quieres eliminar?",showDenyButton:!1,showCancelButton:!0,confirmButtonText:"Si",denyButtonText:"Don't save",cancelButtonText:"No"}).then((function(t){t.isConfirmed?(O.a.firestore().collection("products").doc(e).delete().then((function(){console.log("Eliminado con exito")})).catch((function(e){return console.log(e)})),v.a.fire("Eliminado","","success")):t.isDenied&&v.a.fire("Changes are not saved","","info")})),d()},h=Le();return Object(K.jsxs)("div",{className:h.root,children:[Object(K.jsx)(N.a,{}),Object(K.jsx)(ee,{}),Object(K.jsx)("main",{className:h.content,children:Object(K.jsxs)("div",{className:"container ",children:[Object(K.jsx)(b.b,{to:"/add",className:"btn btn-primary my-3",children:"Agregar Producto"}),Object(K.jsxs)("div",{className:"bloc-tabs",children:[Object(K.jsx)("button",{className:1===i?"tabs active-tabs":"tabs",onClick:function(){return l(1)},children:"Pizzas"}),Object(K.jsx)("button",{className:2===i?"tabs active-tabs":"tabs",onClick:function(){return l(2)},children:"Pastas"}),Object(K.jsx)("button",{className:3===i?"tabs active-tabs":"tabs",onClick:function(){return l(3)},children:"Combos"})]}),Object(K.jsxs)("div",{className:"content-tabs",children:[Object(K.jsxs)("div",{className:1===i?"content  active-content":"content",children:[Object(K.jsx)("h2",{children:"Pizzas"}),Object(K.jsx)(Fe,{products:n.filter((function(e){return"Pizzas"===e.tipo})),handleDelete:u})]}),Object(K.jsxs)("div",{className:2===i?"content  active-content":"content",children:[Object(K.jsx)("h2",{children:"Pastas"}),Object(K.jsx)(Fe,{products:n.filter((function(e){return"Pastas"===e.tipo})),handleDelete:u})]}),Object(K.jsxs)("div",{className:3===i?"content  active-content":"content",children:[Object(K.jsx)("h2",{children:"Combos"}),Object(K.jsx)(Fe,{products:n.filter((function(e){return"Combos"===e.tipo})),handleDelete:u})]})]})]})})]})},Be=n(74),Te=["isAuthenticated","component"],Me=function(e){var t=e.isAuthenticated,n=e.component,c=Object(Be.a)(e,Te);return Object(K.jsx)(u.b,Object(m.a)(Object(m.a)({},c),{},{component:function(e){return t?Object(K.jsx)(u.a,{to:"/"}):Object(K.jsx)(n,Object(m.a)({},e))}}))},qe=["isAuthenticated","component"],_e=function(e){var t=e.isAuthenticated,n=e.component,c=Object(Be.a)(e,qe);return Object(K.jsx)(u.b,Object(m.a)(Object(m.a)({},c),{},{component:function(e){return t?Object(K.jsx)(n,Object(m.a)({},e)):Object(K.jsx)(u.a,{to:"/login"})}}))},Ye=function(){var e=Object(i.b)(),t=Object(c.useState)(!0),n=Object(j.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),o=Object(j.a)(s,2),m=o[0],h=o[1];return Object(c.useEffect)((function(){O.a.auth().onAuthStateChanged(function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(Z(n.uid,n.displayName,n.email)),h(!0)):h(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,h]),a?Object(K.jsx)(ve,{}):Object(K.jsx)(b.a,{children:Object(K.jsx)("div",{children:Object(K.jsxs)(u.d,{children:[Object(K.jsx)(_e,{isAuthenticated:m,path:"/add",component:ne}),Object(K.jsx)(_e,{exact:!0,isAuthenticated:m,path:"/orders",component:Pe}),Object(K.jsx)(_e,{isAuthenticated:m,path:"/orders/:id",component:xe}),Object(K.jsx)(_e,{isAuthenticated:m,path:"/products",component:Ie}),Object(K.jsx)(_e,{isAuthenticated:m,path:"/edit/:productId",component:ae}),Object(K.jsx)(Me,{path:"/login",component:be,isAuthenticated:m}),Object(K.jsx)(_e,{exact:!0,isAuthenticated:m,path:"/",component:De})]})})})},Ue=n(65),Ge=n(109),We="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ue.c,He=Object(Ue.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return{uid:t.payload.uid,name:t.payload.displayName,email:t.payload.email};case V:return{};default:return e}}}),Re=Object(Ue.d)(He,We(Object(Ue.a)(Ge.a))),Ve=(n(150),function(){return Object(K.jsx)(i.a,{store:Re,children:Object(K.jsx)(Ye,{})})}),Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,214)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(K.jsx)(a.a.StrictMode,{children:Object(K.jsx)(Ve,{})}),document.getElementById("root")),Xe()}},[[151,1,2]]]);
//# sourceMappingURL=main.22c31e4e.chunk.js.map