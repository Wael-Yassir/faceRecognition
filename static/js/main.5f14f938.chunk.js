(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{218:function(e,t,n){},484:function(e,t,n){},485:function(e,t,n){},769:function(e,t,n){},770:function(e,t,n){},771:function(e,t,n){},772:function(e,t,n){},773:function(e,t,n){},775:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(10),i=n.n(s),c=n(26),r=n.n(c),l=(n(218),n(206)),o=n(207),b=n(213),d=n(212),u=n(208),j=n.n(u),h=n(117),m=n.n(h),p=(n(484),function(e){var t=e.onRouteChange;return e.isSignedIn?Object(a.jsx)("nav",{children:Object(a.jsx)("p",{onClick:function(){return t("signIn")},className:"f3 _pa2 black underline link dim pointer",children:"Sign Out"})}):Object(a.jsxs)("nav",{children:[Object(a.jsx)("p",{onClick:function(){return t("signIn")},className:"f3 _pa2 black underline link dim pointer",children:"Sign In"}),Object(a.jsx)("p",{onClick:function(){return t("register")},className:"f3 _pa2 black underline link dim pointer",children:"Register"})]})}),g=n(209),f=n.n(g),x=n.p+"static/media/brain.f61be25e.png",O=(n(485),n(486),function(){return Object(a.jsx)("div",{className:"ma4 mt0",children:Object(a.jsx)(f.a,{className:"Tilt br3 shadow-2",options:{max:55},children:Object(a.jsx)("div",{className:"Tilt-inner",children:Object(a.jsx)("img",{src:x,alt:"brain"})})})})}),v=(n(769),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"pt3 f3 center",children:"This Magic Brain will detect faces in your pictures. Git it a try."}),Object(a.jsx)("div",{className:"",children:Object(a.jsxs)("div",{className:"center form pa4 br3 shadow-5",children:[Object(a.jsx)("input",{id:"imgLink",className:"w-70 f4 pa2 br2",type:"text",onChange:t}),Object(a.jsx)("button",{id:"detect",className:"w-30 grow f4 ph3 link pv2 white br2",onClick:n,children:"Detect"})]})})]})}),w=function(){return Object(a.jsxs)("div",{className:!0,children:[Object(a.jsx)("div",{className:"center white f3 pt3",children:"Wael, your current rank is ..."}),Object(a.jsx)("div",{className:"center white f1",children:"#5"})]})},N=(n(770),function(e){var t=e.boxes,n=e.imageUrl;return e.isValidInput?Object(a.jsx)("div",{className:"center pa4 br3",children:Object(a.jsxs)("div",{className:"absolute",children:[Object(a.jsx)("img",{id:"inputImage",src:n,alt:"",width:"600px",height:"auto"}),t.map((function(e){return Object(a.jsx)("div",{className:"bounding-box",style:{top:e.topRow,bottom:e.botRow,left:e.leftCol,right:e.rightCol}})}))]})}):Object(a.jsx)("div",{className:"f2 tc pa4 fw6",children:"Enter a valid Url!"})}),k=(n(771),function(e){var t=e.onRouteChange;return Object(a.jsx)("article",{className:"br3 ba b--black-10 mv6 w-50-m w-25-l center",children:Object(a.jsx)("main",{className:"pa5 black-80 w-90",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0 tc",children:"Sign In"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)("input",{className:"ph3 pv2 input-reset ba2 b--black bg-transparent grow pointer f6 fw9",type:"submit",value:"Sign In",onClick:function(){return t("home")}})}),Object(a.jsx)("div",{className:"lh-copy mt3",children:Object(a.jsx)("a",{onClick:function(){return t("register")},href:"#0",className:"f5 link dim black db tc",children:"Register"})})]})})})}),C=(n(772),function(e){var t=e.onRouteChange;return Object(a.jsx)("article",{className:"br3 ba b--black-10 mv6 w-50-m w-25-l center",children:Object(a.jsx)("main",{className:"pa5 black-80 w-90",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0 tc",children:"Register"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"user-name",children:"Name"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"user-name",id:"user-name"})]}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)("input",{className:"ph3 pv2 input-reset ba2 b--black bg-transparent grow pointer f6 fw9",type:"submit",value:"Register",onClick:function(){return t("home")}})})]})})})}),I=(n(773),new m.a.App({apiKey:"00b066ae3ef849029ca6a781a5a8f07b"})),y={particles:{number:{value:90,density:{enable:!0,value_area:800}}}},S=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0}):"signIn"===t&&e.setState({isSignedIn:!1}),e.setState({route:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input,isValidInput:!0}),I.models.predict(m.a.FACE_DETECT_MODEL,e.state.input,{video:!1}).then((function(t){return e.displayFaceBox(e.claculateFacesLocation(t))})).catch((function(){return e.setState({isValidInput:!1})}))},e.claculateFacesLocation=function(t){var n=t.outputs[0].data.regions,a=document.getElementById("inputImage"),s=a.width,i=a.height;return n.map((function(t){var n=t.region_info.bounding_box;return e.getFaceBox(n,s,i)}))},e.getFaceBox=function(e,t,n){return{leftCol:e.left_col*t,rightCol:t-e.right_col*t,topRow:e.top_row*n,botRow:n-e.bottom_row*n}},e.displayFaceBox=function(t){e.setState({boxes:t})},e.state={input:"",imageUrl:"",isValidInput:!0,boxes:[],route:"signIn",isSignedIn:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,s=e.route,i=e.boxes,c=e.isValidInput;return Object(a.jsxs)("div",{children:[Object(a.jsx)(j.a,{className:"particles",params:y}),Object(a.jsx)(p,{onRouteChange:this.onRouteChange,isSignedIn:t}),"home"===s?Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{}),Object(a.jsx)(w,{}),Object(a.jsx)(v,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(a.jsx)(N,{boxes:i,imageUrl:n,isValidInput:c})]}):"signIn"===s?Object(a.jsx)(k,{onRouteChange:this.onRouteChange}):Object(a.jsx)(C,{onRouteChange:this.onRouteChange})]})}}]),n}(s.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,776)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};n(774);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),R()}},[[775,1,2]]]);
//# sourceMappingURL=main.5f14f938.chunk.js.map