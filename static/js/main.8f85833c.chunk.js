(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{51:function(e,a,t){e.exports=t(65)},56:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(20),l=t.n(i),c=(t(56),t(39)),m=t(21),s=(t(57),t(6)),o=t(67),u=t(68),d=t(10);var p=function(){return r.a.createElement("div",{className:"homeImg"},r.a.createElement(o.a,null,r.a.createElement("h1",{className:"homeText w-50 text-light"},"Jordan Why Not Zer0.3 Se Available "),r.a.createElement(d.b,{to:"/shop"},r.a.createElement(u.a,{variant:"danger",size:"md",className:"homeText"},"Shop Now"))))},E=t(70),g=[{id:1,name:"Nike Lebron Witness V",price:200,img:"nikeLebronWitnessV.jpg"},{id:2,name:"Nike Kyrie 6",price:150,img:"nikeKyrie6.jpg"},{id:3,name:"Nike Kd 13",price:180,img:"nikeKd13.jpg"},{id:4,name:"Adidas Harden Stepback",price:50,img:"adidasHardenStepback.jpg"},{id:5,name:"Jordan Why Not Zer0.3 Se",price:100,img:"jordanWhyNot.jpg"},{id:6,name:"Nike Zoom Freak",price:120,img:"nikeZoomFreak.jpg"},{id:7,name:"Air Jordan 1 Mid",price:200,img:"airJordan1Mid.jpg"},{id:8,name:"Nike Lebron XVII Low",price:150,img:"nikeLebronXVIILow.jpg"}],h=t(69),f=t(76);var b=function(e){return r.a.createElement(h.a,{className:"p-1",sm:6,lg:4},r.a.createElement(f.a,{className:"shoeCard"},r.a.createElement(d.b,{to:{pathname:"".concat(e.name,"-details"),state:{id:e.id,name:e.name,price:e.price,img:e.img}},className:"nav-link p-0"},r.a.createElement(f.a.Img,{alt:"name",className:"shoeImg",src:e.img})),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,"$",e.price),r.a.createElement(d.b,{to:{pathname:"".concat(e.name,"-details"),state:{id:e.id,name:e.name,price:e.price,img:e.img}},className:"nav-link p-0 text-dark"},r.a.createElement(f.a.Text,{className:"lead"},e.name)))))};var v=function(){var e=Object(n.useState)(g),a=Object(m.a)(e,1)[0].map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,name:e.name,price:e.price,img:e.img})}));return r.a.createElement(o.a,{className:"mt-5"},r.a.createElement(E.a,null,a))},N=t(71);var k=function(e){var a=Object(s.f)().state;return r.a.createElement(o.a,{className:"pl-0 "},r.a.createElement(E.a,{className:"d-flex align-items-center"},r.a.createElement(h.a,{className:"imgCol",sm:12,md:6},r.a.createElement("img",{className:"w-100 bigImg",alt:a.name,src:a.img})),r.a.createElement(h.a,{className:"  text-center"},r.a.createElement("h1",{className:"display-4"},a.name),r.a.createElement("h1",{className:"display-4"},"$",a.price),r.a.createElement(u.a,{onClick:function(){return e.addToCart(a)},className:"mt-4",variant:"outline-info",block:!0},"Add To Cart  "))),r.a.createElement(E.a,null,r.a.createElement(N.a,null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga eos, expedita tempore ducimus quasi fugiat sed molestiae facilis tempora? Reprehenderit possimus consequuntur commodi doloribus itaque temporibus perspiciatis, dolorum, eius repudiandae nemo tempore sapiente. Illo officia quo necessitatibus deserunt sunt numquam, labore qui consequuntur modi, voluptatem impedit tenetur architecto quaerat cum expedita itaque eos sapiente nisi, iure quasi minima perspiciatis? Itaque nihil corrupti possimus porro quam, cum alias nostrum qui delectus excepturi praesentium eaque distinctio iusto blanditiis doloribus ex, incidunt eius et accusamus, eos assumenda nisi maiores amet? Est eum itaque, aliquam vel adipisci molestiae, pariatur illum neque cum illo voluptas.")))},j=t(73);var w=function(e){var a=Object(n.useState)(e.props),t=Object(m.a)(a,2),i=t[0];return t[1],r.a.createElement(o.a,{className:" mt-4"},r.a.createElement(E.a,{className:"d-flex align-items-center"},r.a.createElement(h.a,null,r.a.createElement("img",{className:"cartImg",alt:i.name,src:i.img})),r.a.createElement(h.a,null,r.a.createElement("h2",null,i.name),r.a.createElement("h2",null,"$",i.price),r.a.createElement("input",{type:"number",onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()},onChange:function(a){e.addPairs(i.id,a.target.value)},defaultValue:i.pair}))))};var y=function(e){Object(n.useEffect)((function(){e.shoes&&(document.getElementById("navBadge").innerHTML=e.shoes.length?e.shoes.length:"")}),[e.shoes]);var a=e.shoes&&e.shoes.map((function(a){return r.a.createElement(w,{addPairs:e.addPairs,key:a.id,props:a})}));return r.a.createElement(j.a,{show:e.show,dialogClassName:"cart float-right",onHide:function(){return e.setShow(!1)},animation:!1,scrollable:!0},r.a.createElement(j.a.Body,null,r.a.createElement(u.a,{onClick:function(){return e.setShow(!1)},variant:"light float-right"},"X"),r.a.createElement("h1",{className:"mt-4"},"Your Shopping Bag"),e.shoes&&e.shoes.length>0?a:r.a.createElement(o.a,{className:"text-center mt-5"},r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement("p",{className:"float-left alert"},"Your bag is empty"))),r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement("img",{className:"emptyCart w-50 mb-5",src:"emptyCart.jpg",alt:"empty cart"}))),r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement(d.b,{to:"/shop"},r.a.createElement(u.a,{variant:"outline-info",onClick:function(){return e.setShow(!1)},size:"lg"},"Check Shoes"))))),e.subtotal?r.a.createElement(o.a,{className:"m-2"},r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement("h2",null,"Subtotal:$",e.subtotal)),r.a.createElement(h.a,null,r.a.createElement(u.a,{className:"float-right",size:"lg",variant:"outline-info"},"Checkout")))):""))},x=t(75),S=t(74),C=t(72);var q=function(e){return r.a.createElement(x.a,{className:"top ",bg:"dark"},r.a.createElement(d.b,{to:"/",className:"nav-link  text-light"},"Sneakears4All"),r.a.createElement(S.a,{className:"ml-auto  "},r.a.createElement(d.b,{to:"/",className:"nav-link  text-light"},"Home"),r.a.createElement(d.b,{className:"nav-link  text-light",to:"/shop"},"Shop"),r.a.createElement(S.a.Link,{onClick:function(){return e.setLoadCart(!0)},className:"cartLink text-light"},"Cart ",r.a.createElement(C.a,{id:"navBadge",variant:"light"})," ")))};var O=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),u=o[0],d=o[1],E=Object(n.useState)(0),g=Object(m.a)(E,2),h=g[0],f=g[1];function b(){f((function(){var e=0;return u.map((function(a){e+=a.price*a.pair})),e}))}function N(e){if(e||0===e){var a=Object(c.a)(u);a.splice(e,1),d(a)}}function j(e,a){d((function(t){for(var n=0;n<t.length;n++)e===t[n].id&&("0"===a?N(n):t[n].pair=a);return t})),b()}return Object(n.useEffect)((function(){b()}),[u]),r.a.createElement("div",null,r.a.createElement(q,{setLoadCart:i}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(p,null)),r.a.createElement(s.a,{path:"/shop"},r.a.createElement(v,null)),r.a.createElement(s.a,{path:"/:name-details"},r.a.createElement(k,{addToCart:function(e){var a=u.indexOf(e);if(-1===a)d([].concat(Object(c.a)(u),[e])),j(e.id,1);else{for(var t=Object(c.a)(u),n=0;n<t.length;n++)a===n&&(t[n].pair=parseInt(t[n].pair)+1);d(t),b()}}}))),r.a.createElement(y,{addPairs:j,shoes:u,subtotal:h,show:t,setShow:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.8f85833c.chunk.js.map