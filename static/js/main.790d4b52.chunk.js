(this["webpackJsonpwedding-app"]=this["webpackJsonpwedding-app"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},41:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var a=c(6),n=c.n(a),s=c(44),i=c.n(s),r=(c(53),c(54),c(14)),l=c(13),o=c(20),j=c(10),d=c(35),b=c(1),m=n.a.createContext(),h=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(j.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)(""),l=Object(j.a)(r,2),h=l[0],O=l[1],u=Object(a.useState)(""),x=Object(j.a)(u,2),p=x[0],f=x[1],g=Object(a.useState)(!1),N=Object(j.a)(g,2),v=N[0],C=N[1],y=Object(a.useState)(!1),S=Object(j.a)(y,2),I=S[0],w=S[1],A=function(){for(var e=0,t=0;t<s.length;t++){var c=s[t];e+=parseInt(c.cantidad)}return e},T=function(){for(var e=0,t=0;t<s.length;t++){var c=s[t];e+=parseInt(c.cantidad)*c.price}return P(e)},P=function(e){var t=e.toString();return 4===t.length?t=t.slice(0,1)+"."+t.slice(1,4):5===t.length?t=t.slice(0,2)+"."+t.slice(2,5):6===t.length?t=t.slice(0,3)+"."+t.slice(3,6):7===t.length&&(t=t.slice(0,1)+"."+t.slice(1,4)+"."+t.slice(4,7)),t};return Object(b.jsx)(m.Provider,{value:{addCarrito:function(e,t,c,a,n){var r=function(e){return s.some((function(t){return t.id===e}))}(e);if(r){var l=s.find((function(t){return t.id===e}));l.cantidad+=n;var j=s.filter((function(t){return t.id!==e}));i([].concat(Object(o.a)(j),[l]))}else i([].concat(Object(o.a)(s),[{id:e,detail:t,price:c,img:a,cantidad:n}]));A(),T()},removeProducto:function(e){w(!0);var t=s.filter((function(t){return t.id!==e}));i(t)},calculateCantTotal:A,calculatePrecioTotal:T,emptyCart:function(){i([]),window.localStorage.clear()},parseNumber:P,carrito:s,loadOrder:function(e){O(e)},order:h,saveEmail:function(e){f(e)},email:p,SetNotification:function(e){return setTimeout((function(){C(!1),w(!1)}),3e3),Object(b.jsx)(b.Fragment,{children:"add"===e.message?Object(b.jsxs)("div",{className:"notif-add animate__animated animate__slideInUp",children:[Object(b.jsx)(d.a,{}),Object(b.jsx)("h4",{className:"notif-name",children:"\xa1Listo! Regalo agregado"})]}):Object(b.jsxs)("div",{className:"notif-delete animate__animated animate__slideInUp",children:[Object(b.jsx)(d.b,{}),Object(b.jsx)("h4",{className:"notif-name",children:"Regalo eliminado de la lista"})]})})},setNotifAdd:C,notifAdd:v,notifDel:I},children:t})},O=m,u=(c(37),function(){var e=Object(a.useContext)(O).calculateCantTotal;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.b,{className:"cajitaContainer",to:"/cart",children:[Object(b.jsx)("img",{className:"cajita",src:"https://res.cloudinary.com/dw94zgfgu/image/upload/v1648159953/cajas-de-regalo-png-png-image-233094_dz6i2t.png"}),Object(b.jsx)("h5",{className:"cantCarrito",children:e()})]})})}),x=c(46),p=c(45),f=function(){return Object(b.jsx)("main",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light nav-index",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(r.b,{className:"navbar-brand",to:"/",children:Object(b.jsx)("h3",{className:"logoWedding",children:"#FLU&MIYO"})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsxs)(r.b,{className:"active menu-boot",to:"/regalos",children:[Object(b.jsx)("div",{className:"icon-calendar",children:Object(b.jsx)(p.a,{})}),Object(b.jsx)("p",{className:"info",children:"REGALOS"})]}),Object(b.jsxs)(r.b,{className:"active menu-boot",to:"/infoEvento",children:[Object(b.jsx)("div",{className:"icon-calendar",children:Object(b.jsx)(x.a,{})}),Object(b.jsx)("p",{className:"info",children:"INFO DE EVENTOS"})]}),Object(b.jsx)(u,{})]})})]})})})},g=c(2),N=c.n(g),v=c(5),C=c(23),y=(c(38),function(e){var t=e.producto,c=Object(a.useContext)(O).parseNumber;return Object(b.jsx)("div",{className:"tarjetas",children:Object(b.jsx)("div",{className:"tarjeta",children:Object(b.jsx)("div",{children:Object(b.jsxs)(r.b,{className:"tarjeta-contenido",to:"/detail/".concat(t.id),children:[Object(b.jsx)("p",{className:"tarjeta-desc",children:t.include}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:t.img,alt:t.name,className:"cardImg"})}),Object(b.jsx)("p",{className:"detalleProd",children:t.detail}),Object(b.jsx)("div",{className:"tarjeta-contenido-detalle",children:Object(b.jsxs)("h6",{className:"tarjetaPrecio",children:["$ ",c(t.price)]})}),Object(b.jsx)("button",{className:"tarjeta-boton",children:"REGAL\xc1"})]})})})})}),S=function(e){var t=e.productos;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(y,{producto:e},e.id)}))})},I=(c(57),c(58),function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"loader"}),"preparando"===e.tipo?Object(b.jsx)("h3",{className:"loaderDesc1",children:"Preparando todo para tu regalo..."}):"comprando"===e.tipo?Object(b.jsx)("h3",{className:"loaderDesc2",children:"Finalizando tu regalo..."}):Object(b.jsx)("h3",{className:"loaderDesc3",children:"Cargando..."})]})}),w=c(47),A=c(15),T=Object(w.a)({apiKey:"AIzaSyBogStCjauuBJYu6Bh5do213sL_pMlWkBg",authDomain:"app-wedding-49f63.firebaseapp.com",projectId:"app-wedding-49f63",storageBucket:"app-wedding-49f63.appspot.com",messagingSenderId:"246207980879",appId:"1:246207980879:web:df6f5d286dbf3c38a0513a"}),P=Object(A.g)(T),k=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(!0),r=Object(j.a)(i,2),o=r[0],d=r[1],m=Object(l.h)().categoryId;return Object(a.useEffect)((function(){m?Object(A.f)(Object(A.i)(Object(A.c)(P,"regalos"),Object(A.j)("category","==",m),Object(A.h)("price"))).then((function(e){var t=e.docs.map((function(e){return Object(C.a)({id:e.id},e.data())}));s(t)})).catch((function(e){console.log("Error conexion firebase",e)})).finally((function(){d(!1)})):Object(v.a)(N.a.mark((function e(){var t,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(A.f)(Object(A.i)(Object(A.c)(P,"regalos"),Object(A.h)("category")));case 3:t=e.sent,c=t.docs.map((function(e){return Object(C.a)({id:e.id},e.data())})),s(c),d(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[m]),Object(b.jsx)("div",{className:"App-Regalos",children:o?Object(b.jsx)(I,{}):Object(b.jsx)(S,{productos:n})})},E=(c(60),c(36)),D=function(e){var t=e.onAdd,c=(e.stock,e.initial),n=Object(a.useState)(c),s=Object(j.a)(n,2),i=s[0],r=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"contenidoCant",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h5",{className:"cantidad",children:"Cantidad: "})}),Object(b.jsxs)("div",{className:"contadorContainer",children:[Object(b.jsx)("div",{className:"boton",onClick:function(){i>1&&r(i-1)},children:Object(b.jsx)(E.a,{})}),Object(b.jsx)("div",{className:"boxNum",onClick:function(){r(c)},children:Object(b.jsx)("h4",{className:"count",children:i})}),Object(b.jsx)("div",{className:"boton",onClick:function(){r(i+1)},children:Object(b.jsx)(E.b,{})})]})]}),Object(b.jsx)("button",{className:"botonAgregar",onClick:function(){return t(i)},children:"Regalar"})]})},F=function(e){var t=e.item,c=Object(a.useState)(!0),n=Object(j.a)(c,2),s=n[0],i=n[1],l=Object(a.useContext)(O),o=l.addCarrito,d=l.parseNumber,m=l.SetNotification,h=l.setNotifAdd,u=l.notifAdd,x=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(r.b,{to:"/regalos",children:Object(b.jsx)("button",{className:"botonSeguirCompra",children:"Agregar otro regalo"})}),Object(b.jsx)(r.b,{to:"/cart",children:Object(b.jsx)("button",{className:"botonVerCarrito",children:"Ir a la lista de regalos"})})]})};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"itemDetalle",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"itemImg",src:t.img,alt:t.name})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"itemDetail",children:t.detail}),Object(b.jsx)("p",{className:"itemCarac",children:t.include}),Object(b.jsxs)("h4",{className:"itemPrecio",children:["$ ",d(t.price)]}),s?Object(b.jsx)(D,{onAdd:function(e){return function(e){h(!0),o(t.id,t.detail,t.price,t.img,e),i(!1)}(e)},stock:t.stock,initial:1}):Object(b.jsx)(x,{})]})]}),Object(b.jsx)("div",{children:u&&Object(b.jsx)(m,{message:"add"})})]})},_=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(l.h)().paramId;return Object(a.useEffect)((function(){return Object(A.e)(Object(A.d)(P,"regalos",s)).then((function(e){var t=Object(C.a)({id:e.id},e.data());n(t)})).catch((function(e){console.log("Error conexion firebase",e)})).finally((function(){console.log("finalizo")})),function(){n([])}}),[s]),Object(b.jsx)("div",{children:0!==c.length?Object(b.jsx)(F,{item:c}):Object(b.jsx)(I,{})})},B=c(48),z=(c(41),function(e){var t=e.regalo,c=Object(a.useContext)(O),n=c.parseNumber,s=c.removeProducto;return Object(b.jsxs)("div",{className:"regalos",children:[Object(b.jsxs)("div",{className:"regalo",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h6",{children:"Regalo: "})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:t.detail})})]}),Object(b.jsxs)("div",{className:"regalo",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h6",{children:"Cantidad: "})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:t.cantidad})})]}),Object(b.jsxs)("div",{className:"regalo",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h6",{children:"Precio: "})}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["$ ",n(t.price)]})})]}),Object(b.jsxs)("div",{className:"regalo",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h6",{children:"Subtotal: "})}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["$ ",n("".concat(t.cantidad*t.price))]})})]}),Object(b.jsx)("div",{className:"regalo-eliminar",children:Object(b.jsx)("button",{className:"botonEliminarRegalo",onClick:function(){return s(t.id)},children:"Eliminar regalo"})})]})}),L=function(){var e=Object(a.useContext)(O),t=e.carrito,c=e.calculatePrecioTotal,n=e.emptyCart,s=e.removeProducto,i=e.parseNumber,o=e.SetNotification,d=e.notifDel,m=Object(a.useState)(!1),h=Object(j.a)(m,2),u=h[0],x=h[1],p=Object(l.g)(),f=Object(B.useMediaQuery)({query:"(min-width: 990px)"}),g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"tituloCartVacio",children:"\xa1La lista de regalos est\xe1 vac\xeda!"}),Object(b.jsx)("img",{className:"avisoCart",src:"https://res.cloudinary.com/dw94zgfgu/image/upload/v1640988714/cartEmpty_kplei5.png",alt:"carrito-vacio"}),Object(b.jsx)("div",{children:Object(b.jsx)(r.b,{to:"/regalos",children:Object(b.jsx)("button",{className:"btnStartBuy",children:"Empezar a regalar"})})})]})},N=function(){return Object(b.jsxs)("div",{children:[f?Object(b.jsxs)("table",{className:"table table-light table-hover table-carrito",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"table-dark table-tit-prod",scope:"col",children:"Regalo"}),Object(b.jsx)("th",{className:"table-dark table-tit-cant",scope:"col",children:"Cantidad"}),Object(b.jsx)("th",{className:"table-dark table-tit-prec",scope:"col",children:"Precio"}),Object(b.jsx)("th",{className:"table-dark table-tit-stot",scope:"col",children:"Subtotal"}),Object(b.jsx)("th",{className:"table-dark table-tit-tach",scope:"col"})]})}),Object(b.jsxs)("tbody",{children:[t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"prod-name",children:e.detail}),Object(b.jsx)("td",{children:e.cantidad}),Object(b.jsxs)("td",{className:"prod-name",children:["$ ",i(e.price)]}),Object(b.jsxs)("td",{className:"prod-name",children:["$ ",i("".concat(e.cantidad*e.price))]}),Object(b.jsx)("td",{children:Object(b.jsx)("img",{className:"tachito",src:"https://res.cloudinary.com/dw94zgfgu/image/upload/v1641066871/tachito_yzwc0i.svg",alt:"carrito-lleno",onClick:function(){return s(e.id)}})})]},e.id)})),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{colSpan:"2"}),Object(b.jsx)("td",{className:"totalPrecio",children:"TOTAL"}),Object(b.jsxs)("td",{className:"totalPrecio",children:["$ ",c()]}),Object(b.jsx)("td",{})]})]})]}):Object(b.jsxs)("div",{children:[t.map((function(e){return Object(b.jsx)(z,{regalo:e},e.id)})),Object(b.jsxs)("div",{className:"total-regalo",children:["TOTAL: $ ",c()," "]})]}),Object(b.jsx)("button",{className:"botonTerminar",onClick:function(){return v()},children:"Pagar regalo"}),Object(b.jsx)("button",{className:"botonVaciar",onClick:function(){return n()},children:"Vaciar lista"}),d&&Object(b.jsx)(o,{})]})},v=function(){x(!0),setTimeout((function(){p("/formBuy")}),500)};return Object(b.jsx)("div",{children:u?Object(b.jsx)(I,{tipo:"preparando"}):t.length>0?Object(b.jsx)(N,{}):Object(b.jsx)(g,{})})},R=c(11),M=(c(61),function(){var e=Object(a.useContext)(O),t=e.carrito,c=e.calculatePrecioTotal,n=e.emptyCart,s=e.loadOrder,i=e.saveEmail,o=Object(l.g)(),d=Object(a.useState)(!1),m=Object(j.a)(d,2),h=m[0],u=m[1],x=Object(a.useState)({name:"",email:"",phone:"",comment:""}),p=Object(j.a)(x,2),f=p[0],g=p[1],N=function(e){g(Object(C.a)(Object(C.a)({},f),{},Object(R.a)({},e.target.name,e.target.value)))};return Object(b.jsx)(b.Fragment,{children:h?Object(b.jsx)(I,{tipo:"comprando"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"titleForm mt-3",children:"\xa1Tu regalo a un paso!"}),Object(b.jsxs)("form",{onSubmit:function(e){u(!0),i(f.email),e.preventDefault();var a={date:A.a.fromDate(new Date),product:t,total:c(),name:f.name,phone:f.phone,email:f.email,comment:f.comment},r=Object(A.k)(P);Object(A.b)(Object(A.c)(P,"ordenes"),a).then((function(e){var t=e.id;r.commit().then((function(){s(t)}))})).catch((function(e){console.log("Error conexion firebase",e)})).finally((function(){setTimeout((function(){o("/purchaseCompleted"),n()}),500)}))},children:[Object(b.jsxs)("div",{className:"form-floating mb-3 mt-5",children:[Object(b.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"name@example.com",name:"name",onChange:N,required:!0}),Object(b.jsx)("label",{className:"form-compra",children:"Familia"})]}),Object(b.jsxs)("div",{className:"form-floating mb-3",children:[Object(b.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",placeholder:"name@example.com",name:"email",onChange:N,required:!0}),Object(b.jsx)("label",{className:"form-compra",children:"Email"})]}),Object(b.jsxs)("div",{className:"form-floating mb-3",children:[Object(b.jsx)("input",{type:"number",className:"form-control",id:"floatingInput",placeholder:"name@example.com",name:"phone",onChange:N,required:!0}),Object(b.jsx)("label",{className:"form-compra",children:"Celular"})]}),Object(b.jsxs)("div",{className:"form-floating mb-5",children:[Object(b.jsx)("textarea",{className:"form-control",id:"floatingTextarea",placeholder:"name@example.com",name:"comment",onChange:N}),Object(b.jsx)("label",{className:"form-compra",children:"Dedicatoria"})]}),Object(b.jsx)("button",{className:"btnFinish",type:"submit",children:"Finalizar mi compra"}),Object(b.jsx)(r.b,{to:"/cart",children:Object(b.jsx)("button",{className:"btnCancel",children:"Volver"})})]})]})})}),$=(c(62),function(){return Object(b.jsxs)("div",{className:"container-compra",children:[Object(b.jsx)("h4",{className:"detail-compra-tit",children:"\xa1Ya pod\xe9s hacer la transferencia bancaria para concretar tu regalo!"}),Object(b.jsx)("h5",{className:"detail-compra mt-5",children:"Titular"}),Object(b.jsx)("h6",{className:"detail-compra-info",children:"Miy\xe9n Polverini/Florencia Palmieri"}),Object(b.jsx)("h5",{className:"detail-compra mt-3",children:"Banco"}),Object(b.jsx)("h6",{className:"detail-compra-info",children:"BBVA"}),Object(b.jsx)("h5",{className:"detail-compra mt-3",children:"Tipo de cuenta"}),Object(b.jsx)("h6",{className:"detail-compra-info",children:"Caja de Ahorro"}),Object(b.jsx)("h5",{className:"detail-compra mt-3",children:"DNI"}),Object(b.jsx)("h6",{className:"detail-compra-info",children:"33906065"}),Object(b.jsx)("h5",{className:"detail-compra mt-3",children:"CUIL/CUIT"}),Object(b.jsx)("h6",{className:"detail-compra-info",children:"20339060658"}),Object(b.jsx)("h5",{className:"detail-compra mt-3",children:"CBU"}),Object(b.jsx)("h6",{className:"detail-compra-info",children:"0170999940000027467835"}),Object(b.jsx)("h5",{className:"detail-compra mt-3",children:"Alias"}),Object(b.jsx)("h6",{className:"detail-compra-info",children:"miyokun10"})]})}),H=function(e){var t=e.children,c=e.privType,n=Object(a.useContext)(O),s=n.carrito,i=n.order;return"formBuy"===c?0===s.length?Object(b.jsx)(l.a,{to:"/"}):t:"purchaseCompleted"===c?""===i?Object(b.jsx)(l.a,{to:"/"}):t:void 0},U=(c(63),function(){return Object(b.jsxs)("div",{className:"container-info",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"detail-tit mt-3",children:"FIESTA"}),Object(b.jsx)("h5",{className:"detail-info-tit mt-5",children:"Direcci\xf3n"}),Object(b.jsx)("h6",{className:"detail-info",children:"Janos Hurlingham - Gral Pedro D\xedaz 1800"}),Object(b.jsx)("h5",{className:"detail-info-tit mt-3",children:"Localidad"}),Object(b.jsx)("h6",{className:"detail-info",children:"Hurlingham"}),Object(b.jsx)("h5",{className:"detail-info-tit mt-3",children:"Provincia"}),Object(b.jsx)("h6",{className:"detail-info",children:"Buenos Aires"}),Object(b.jsx)("h5",{className:"detail-info-tit mt-3",children:"Fecha y hora"}),Object(b.jsx)("h6",{className:"detail-info mb-5",children:"21 de Octubre 2022 19:00hs"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("iframe",{className:"contMaps",src:"https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d13136.410066541504!2d-58.6521531!3d-34.6015691!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x95bcbfa55fc3fa81%3A0xc0c4db8eab5784c5!2sJanos%20Hurlingham%20Gral.%20Pedro%20D%C3%ADaz%201800%20B1686%20Hurlingham%20Provincia%20de%20Buenos%20Aires!3m2!1d-34.6015691!2d-58.6521531!5e0!3m2!1ses-419!2sar!4v1647960774711!5m2!1ses-419!2sar",width:"600",height:"450",allowfullscreen:"",loading:"lazy"})})]})}),V=(c(64),c(32),function(){return Object(b.jsx)(b.Fragment,{})}),q=(c(66),function(){return Object(b.jsxs)("div",{className:"containerFooter",children:[Object(b.jsx)("div",{className:"barra-div"}),Object(b.jsxs)("div",{className:"footerName",children:[Object(b.jsx)("p",{className:"footer",children:"Copyright \xa9 2022. PolPro."}),Object(b.jsx)("p",{className:"footer",children:"Todos los derechos reservados."})]})]})}),J=(c(67),function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"img-inicio",src:"https://res.cloudinary.com/dw94zgfgu/image/upload/v1648512794/WhatsApp_Image_2022-03-28_at_9.12.50_PM_kylitz.jpg"}),Object(b.jsx)("div",{className:"img-fondo"}),Object(b.jsx)("h4",{className:"parrafo2-portada",children:"Te esperamos en la..."}),Object(b.jsxs)("div",{className:"parrafo2-div",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:"parrafo2-contenido",children:"CEREMONIA"}),Object(b.jsx)("h6",{className:"parrafo2-contenido2",children:"...."}),Object(b.jsx)(r.b,{to:"/infoEvento",children:Object(b.jsx)("button",{className:"botonLlegar",children:"Como llegar"})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:"parrafo2-contenido",children:"FIESTA"}),Object(b.jsx)("h6",{className:"parrafo2-contenido2",children:"JANOS HURLINGHAM"}),Object(b.jsx)(r.b,{to:"/infoEvento",children:Object(b.jsx)("button",{className:"botonLlegar",children:"Como llegar"})})]})]}),Object(b.jsxs)("div",{className:"parrafo-portada",children:[Object(b.jsx)("h6",{children:"Si queres regalarnos algo m\xe1s que tu presencia en esta fecha..."}),Object(b.jsx)(r.b,{to:"/regalos",children:Object(b.jsx)("button",{className:"botonIrRegalo",children:"Hac\xe9 click ac\xe1"})})]}),Object(b.jsx)("video",{className:"video-portada",preload:"auto",muted:!0,loop:!0,autoPlay:!0,src:"https://video.wixstatic.com/video/11062b_7488edba38234bd69b0603ad498efdf5/720p/mp4/file.mp4"}),Object(b.jsx)("h5",{className:"tit-final",children:"\xa1Estamos muy contentos de poder compartir este d\xeda tan importante con ustedes!"}),Object(b.jsx)("img",{className:"img-final",src:"https://res.cloudinary.com/dw94zgfgu/image/upload/v1648488802/Flu_miyo_na7vzr.png"})]})});var G=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(h,{children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(f,{}),Object(b.jsx)(V,{}),Object(b.jsx)("div",{className:"App-header",children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",element:Object(b.jsx)(J,{})}),Object(b.jsx)(l.b,{path:"/flu-miyo",element:Object(b.jsx)(J,{})}),Object(b.jsx)(l.b,{path:"/regalos",element:Object(b.jsx)(k,{})}),Object(b.jsx)(l.b,{path:"/category/:categoryId",element:Object(b.jsx)(k,{})}),Object(b.jsx)(l.b,{path:"/detail/:paramId",element:Object(b.jsx)(_,{})}),Object(b.jsx)(l.b,{path:"/cart",element:Object(b.jsx)(L,{})}),Object(b.jsx)(l.b,{path:"/formBuy",element:Object(b.jsx)(H,{privType:"formBuy",children:Object(b.jsx)(M,{})})}),Object(b.jsx)(l.b,{path:"/purchaseCompleted",element:Object(b.jsx)(H,{privType:"purchaseCompleted",children:Object(b.jsx)($,{})})}),Object(b.jsx)(l.b,{path:"/infoEvento",element:Object(b.jsx)(U,{})}),Object(b.jsx)(l.b,{path:"*",element:Object(b.jsx)("h2",{children:"Not found"})})]})}),Object(b.jsx)(q,{})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,92)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};c(68),c(69);i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),W()}},[[91,1,2]]]);
//# sourceMappingURL=main.790d4b52.chunk.js.map