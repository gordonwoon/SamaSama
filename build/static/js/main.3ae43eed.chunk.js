(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/onetwo.22e04a1a.mp4"},18:function(e,t,n){e.exports=n.p+"static/media/PORTRAIT.e022c66d.jpg"},26:function(e,t,n){e.exports=n.p+"static/media/heartbeat.db8fdeae.mp3"},32:function(e,t,n){e.exports=n(68)},37:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a,i,o,r,c,l=n(1),s=n.n(l),u=n(16),m=n.n(u),p=(n(37),n(9)),d=n(20),h=new d.MTLLoader,f=new d.OBJLoader,g=[],E=["kuti_giraffe","kuti_snake2","kuti_monkey","kuti_lizard","kuti_goldfish","kuti_pig"],b=["mat1","mat2","mat3","mat4","mat5","mat6"],v=window.innerWidth/2,w=window.innerHeight/2;function y(){v=window.innerWidth/4,w=window.innerHeight/4,i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}document.addEventListener("mousemove",function(e){2*(e.clientX-v),2*(e.clientY-w)},!1),function(){(a=document.createElement("div")).id="kuti-background",document.body.appendChild(a),(i=new p.PerspectiveCamera(95,window.innerWidth/window.innerHeight,1,2e3)).position.z=25,o=new p.Scene;var e=new p.AmbientLight(13421772,1);o.add(e);var t=new p.PointLight(16777215,1);i.add(t);var n=new p.DirectionalLight(16777215);n.position.set(1,1,1).normalize(),n.intensity=1,o.add(n),o.add(i),function(){var e=function(e){if(e.lengthComputable){var t=e.loaded/e.total*100;console.log(Math.round(t,2)+"% downloaded")}},t=function(){console.log("Error encountered while loading kuti")};E.forEach(function(n,a){h.load("kuti_animals/".concat(b[a],".mtl"),function(a){a.preload(),f.setMaterials(a).load("kuti_animals/".concat(n,".obj"),function(e){g.push(e)},e,t)})})}(),function e(){if(g.length<E.length)setTimeout(function(){e()},100);else{for(var t=0;t<50;t++){var n=Math.floor(Math.random()*E.length),a=g[n].clone();a.traverse(function(e){if(e instanceof p.Mesh){var t=new p.Color(16777215);t.setHex(16777215*Math.random()),e.material.color=t}}),a.position.x=100*Math.random()-50,a.position.y=100*Math.random()-50,a.position.z=100*Math.random()-50,a.rotation.x=2*Math.random()*Math.PI,a.rotation.y=2*Math.random()*Math.PI,a.opacity=50,a.matrixAutoUpdate=!1,a.updateMatrix(),c.add(a)}o.add(c)}}(),c=new p.Object3D,(r=new p.WebGLRenderer).setSize(window.innerWidth,window.innerHeight),r.sortObjects=!1,a.appendChild(r.domElement),window.addEventListener("resize",y,!1)}(),function e(){requestAnimationFrame(e);!function(){i.lookAt(o.position);var e=Date.now();c.rotation.x=.5*Math.sin(7e-4*e),c.rotation.y=.5*Math.sin(3e-4*e),c.rotation.z=.5*Math.sin(2e-4*e),r.render(o,i)}()}();var x=n(4),C=n(5),O=n(7),N=n(6),k=n(8),j=n(70),M=n(69),T=n(11),I=n(17),A=n.n(I),P=n(26),W=n.n(P),D=n(30),L=function(e){T.b.fromTo(e,1,{opacity:0},{opacity:1,ease:T.a.easeInOut})},R=function(e){T.b.fromTo(e,1,{opacity:1},{opacity:0,ease:T.a.easeInOut})},S=function(e){var t=e.innerText;e.innerText="",Object(D.a)(t).forEach(function(t){var n=document.createElement("div");n.style="float: left;";var a=document.createTextNode(" "===t?"\xa0":t);n.appendChild(a),e.appendChild(n)})},z=function(e){function t(e){var n;return Object(x.a)(this,t),(n=Object(O.a)(this,Object(N.a)(t).call(this,e))).handleNext=function(){R(n.pageContainer.current),n.audio.pause(),setTimeout(function(){n.props.history.push("/page2")},1e3)},n.pageContainer=s.a.createRef(),n.heartBtn=s.a.createRef(),n.audio=new Audio(W.a),n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=this;L(this.pageContainer.current),T.b.fromTo(this.heartBtn.current,.5,{opacity:0},{opacity:1,delay:2,ease:T.a.easeInOut,onComplete:function(){e.audio.play()}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-container",ref:this.pageContainer},s.a.createElement("video",{className:"video-bg",loop:!0,autoPlay:!0,muted:!0},s.a.createElement("source",{src:A.a,type:"video/mp4"})),s.a.createElement("button",{className:"heart-btn center",onClick:this.handleNext,ref:this.heartBtn},"Start"))}}]),t}(s.a.Component),H=n(27),_=n.n(H),B=n(71),F=n(21),J=n(22),q=Object(B.a)(function(e){return s.a.createElement("div",{className:"navigation"},s.a.createElement("button",{className:"home-btn",onClick:function(){e.history.push("/")}},s.a.createElement(J.a,{icon:F.b,className:"icon-home"})),s.a.createElement("button",{className:"back-btn",onClick:function(){e.onNext()}},s.a.createElement("p",null,"NEXT"),s.a.createElement(J.a,{icon:F.a,className:"icon-right"})))}),Q=(n(58),n(60),function(e){function t(e){var n;return Object(x.a)(this,t),(n=Object(O.a)(this,Object(N.a)(t).call(this,e))).handleSwipe=function(e,t){console.log(t)},n.handleNext=function(){R(n.pageContainer.current),setTimeout(function(){n.props.history.push("/page3")},1e3)},n.pageContainer=s.a.createRef(),n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){L(this.pageContainer.current)}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-container",ref:this.pageContainer},s.a.createElement("video",{className:"video-bg",loop:!0,autoPlay:!0,muted:!0},s.a.createElement("source",{src:A.a,type:"video/mp4"})),s.a.createElement("div",{className:"text-box center animated fadeIn text-30"},s.a.createElement("p",{className:"question1"},"Can you impact"),s.a.createElement(_.a,Object.assign({className:"answer-box",beforeChange:this.handleSwipe},{arrows:!1,infinite:!0,slidesToShow:3,swipeToSlide:!0,focusOnSelect:!0,centerMode:!0,centerPadding:"-80px",adaptiveHeight:!0}),["Money","Environment","Family","Artistic Expression","Empowerment","Education","Ambition"].map(function(e,t){return s.a.createElement("div",{key:t},e)})),s.a.createElement("p",{className:"question2"},"with a migrant worker?")),s.a.createElement(q,{onNext:this.handleNext}))}}]),t}(s.a.Component)),X=function(e){function t(e){var n;return Object(x.a)(this,t),(n=Object(O.a)(this,Object(N.a)(t).call(this,e))).handleNext=function(){R(n.pageContainer.current),setTimeout(function(){n.props.history.push("/page4")},1e3)},n.pageContainer=s.a.createRef(),n.text=s.a.createRef(),n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;L(this.pageContainer.current),e=this.text.current,S(e),e.childNodes.forEach(function(e,t){T.c.from(e,.1,{opacity:0,delay:.25*t})}),setTimeout(function(){t.handleNext()},3e3)}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-container",ref:this.pageContainer},s.a.createElement("p",{className:"centerY text-50",style:{marginLeft:"10%"},ref:this.text},"Meet Joy."))}}]),t}(s.a.Component),Y=n(18),G=n.n(Y),U=function(e){function t(e){var n;return Object(x.a)(this,t),(n=Object(O.a)(this,Object(N.a)(t).call(this,e))).handleNext=function(){R(n.pageContainer.current),setTimeout(function(){n.props.history.push("/page4")},1e3)},n.pageContainer=s.a.createRef(),n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){L(this.pageContainer.current)}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-container",ref:this.pageContainer},s.a.createElement("img",{className:"img-potrait",src:G.a,alt:"sampleImage"}),s.a.createElement("p",{className:"text-potrait animated fadeIn"},s.a.createElement("p",null,s.a.createElement("span",null,"Age  "),"24"),s.a.createElement("p",null,s.a.createElement("span",null,"Qualification  "),"Engineering Degree"),s.a.createElement("p",null,s.a.createElement("span",null,"Work  "),"Construction Worker"),s.a.createElement("p",null,s.a.createElement("span",null,"Earns  "),"900/month"),s.a.createElement("p",null,s.a.createElement("span",null,"Paid  "),"10k for agency fees"),s.a.createElement("p",null,s.a.createElement("span",null,"Family needs  "),"500/month")),s.a.createElement(q,{onNext:this.handleNext}))}}]),t}(s.a.Component),K=function(e){function t(e){var n;return Object(x.a)(this,t),(n=Object(O.a)(this,Object(N.a)(t).call(this,e))).handleNext=function(){R(n.pageContainer.current),setTimeout(function(){n.props.history.push("/page4")},1e3)},n.pageContainer=s.a.createRef(),n}return Object(k.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){L(this.pageContainer.current)}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-container",ref:this.pageContainer},s.a.createElement("img",{className:"img-potrait",src:G.a,alt:"sampleImage"}),s.a.createElement("p",{className:"text-potrait animated fadeIn"},s.a.createElement("p",null,s.a.createElement("span",null,"Age  "),"24"),s.a.createElement("p",null,s.a.createElement("span",null,"Qualification  "),"Engineering Degree"),s.a.createElement("p",null,s.a.createElement("span",null,"Work  "),"Construction Worker"),s.a.createElement("p",null,s.a.createElement("span",null,"Earns  "),"900/month"),s.a.createElement("p",null,s.a.createElement("span",null,"Paid  "),"10k for agency fees"),s.a.createElement("p",null,s.a.createElement("span",null,"Family needs  "),"500/month")),s.a.createElement(q,{onNext:this.handleNext}))}}]),t}(s.a.Component),V=(n(62),n(64),n(66),function(e){function t(){return Object(x.a)(this,t),Object(O.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return s.a.createElement(j.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(M.a,{path:"/",exact:!0,component:z}),s.a.createElement(M.a,{path:"/page2",exact:!0,component:Q}),s.a.createElement(M.a,{path:"/page3",exact:!0,component:X}),s.a.createElement(M.a,{path:"/page4",exact:!0,component:U}),s.a.createElement(M.a,{path:"/page5",exact:!0,component:K})))}}]),t}(s.a.Component));m.a.render(s.a.createElement(V,null),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.3ae43eed.chunk.js.map