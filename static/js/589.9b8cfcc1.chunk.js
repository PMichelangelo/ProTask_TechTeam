"use strict";(self.webpackChunkprotask_techteam=self.webpackChunkprotask_techteam||[]).push([[589],{3439:function(e,r,s){s(2791);r.Z=s.p+"static/media/icons.4cc36313b3fdca6c089cc7d1057fae05.svg"},9589:function(e,r,s){s.r(r),s.d(r,{default:function(){return W}});var n=s(4420),t=s(7689),a=s(5029),o=s(9869),i=s(1413),c=s(5861),u=s(9439),d=s(7757),l=s.n(d),m=s(2791),p=s(1134),_=s(1087),h=s(4695),g=s(8007),w=(0,g.Ry)().shape({name:(0,g.Z_)().required("This field is required"),email:(0,g.Z_)().email("Invalid email").required("This field is required"),password:(0,g.Z_)().required("This field is required")}),f=s(3439),x={wrap:"registerForm_wrap__HOmjm",formWrapper:"registerForm_formWrapper__DJ0BS",contentWrapper:"registerForm_contentWrapper__MZ7JG",switcher:"registerForm_switcher__zgKGw",inputContainer:"registerForm_inputContainer__TEBcW",input:"registerForm_input__uBoqp",button:"registerForm_button__RUMnu",error:"registerForm_error__asv0c",registerButton:"registerForm_registerButton__1kpra",passwordContainer:"registerForm_passwordContainer__0BSzz",passwordInput:"registerForm_passwordInput__4rHgi",showPasswordButtonWrap:"registerForm_showPasswordButtonWrap__Lk2vT",showPasswordButton:"registerForm_showPasswordButton__avuPs",logoIconOuterWrap:"registerForm_logoIconOuterWrap__YqWvX"},v=s(3329),j=function(e){var r=e.onSubmit,s="/auth/register"===(0,t.TH)().pathname,n=(0,m.useId)(),a=(0,m.useId)(),o=(0,m.useId)(),d=(0,p.cI)({resolver:(0,h.X)(w)}),g=d.register,j=d.handleSubmit,N=d.formState.errors,b=d.trigger,F=(0,m.useState)(!1),I=(0,u.Z)(F,2),W=I[0],Z=I[1],y=(0,m.useCallback)(function(){var e=(0,c.Z)(l().mark((function e(s){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:r(s);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[r,b]);return(0,m.useEffect)((function(){var e=function(e){"Enter"===e.key&&(e.preventDefault(),j(y)())};return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}}),[j,y]),(0,v.jsx)("div",{className:x.wrap,children:(0,v.jsx)("form",{onSubmit:j(y),className:x.formWrapper,noValidate:!0,children:(0,v.jsxs)("div",{className:x.contentWrapper,children:[(0,v.jsxs)("div",{className:x.switcher,children:[(0,v.jsx)("button",{className:x.button,disabled:s,children:"Registration"}),(0,v.jsx)(_.OL,{to:"/auth/login",children:(0,v.jsx)("button",{className:x.button,disabled:!s,children:"Log In"})})]}),(0,v.jsxs)("div",{className:x.inputContainer,children:[(0,v.jsx)("input",(0,i.Z)((0,i.Z)({placeholder:"Enter your name",className:x.input,id:o},g("name")),{},{name:"name",required:!0})),N.name&&(0,v.jsx)("p",{className:x.error,children:N.name.message}),(0,v.jsx)("input",(0,i.Z)((0,i.Z)({placeholder:"Enter your email",className:x.input,id:n},g("email")),{},{type:"email",name:"email",required:!0})),N.email&&(0,v.jsx)("p",{className:x.error,children:N.email.message}),(0,v.jsxs)("div",{className:x.passwordContainer,children:[(0,v.jsx)("input",(0,i.Z)((0,i.Z)({placeholder:"Create a password",className:x.passwordInput,id:a},g("password")),{},{type:W?"text":"password",name:"password",required:!0})),(0,v.jsx)("div",{className:x.showPasswordButtonWrap,children:(0,v.jsx)("div",{className:x.showPasswordButton,onClick:function(){Z(!W)},children:(0,v.jsx)("svg",{className:x.logoIconOuterWrap,children:(0,v.jsx)("use",{href:"".concat(f.Z,"#eye-icon"),className:x.logoIconOuter})})})})]}),N.password&&(0,v.jsx)("p",{className:x.error,children:N.password.message}),(0,v.jsx)("button",{className:x.registerButton,type:"submit",children:"Register Now"})]})]})})})},N=(0,g.Ry)().shape({email:(0,g.Z_)().email("Invalid email").required("This field is required"),password:(0,g.Z_)().required("This field is required")}),b={wrap:"loginForm_wrap__Q-v4F",formWrapper:"loginForm_formWrapper__HIQjv",contentWrapper:"loginForm_contentWrapper__fLAPJ",switcher:"loginForm_switcher__Ejbfb",inputContainer:"loginForm_inputContainer__WQcNS",input:"loginForm_input__Z-Ho9",button:"loginForm_button__eEDkD",error:"loginForm_error__8N0LI",loginButton:"loginForm_loginButton__0rQPt",passwordContainer:"loginForm_passwordContainer__5X6Aj",passwordInput:"loginForm_passwordInput__nYgiO",showPasswordButtonWrap:"loginForm_showPasswordButtonWrap__+nPKQ",showPasswordButton:"loginForm_showPasswordButton__2JTHZ",logoIconOuterWrap:"loginForm_logoIconOuterWrap__xasYy"},F=function(e){var r=e.onSubmit,s="/auth/login"===(0,t.TH)().pathname,n=(0,m.useId)(),a=(0,m.useId)(),o=(0,p.cI)({resolver:(0,h.X)(N)}),d=o.register,g=o.handleSubmit,w=o.formState.errors,x=o.trigger,j=(0,m.useState)(!1),F=(0,u.Z)(j,2),I=F[0],W=F[1],Z=(0,m.useCallback)(function(){var e=(0,c.Z)(l().mark((function e(s){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:r(s);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[r,x]);return(0,m.useEffect)((function(){var e=function(e){"Enter"===e.key&&(e.preventDefault(),g(Z)())};return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}}),[g,Z]),(0,v.jsx)("div",{className:b.wrap,children:(0,v.jsx)("form",{onSubmit:g(Z),className:b.formWrapper,noValidate:!0,children:(0,v.jsxs)("div",{className:b.contentWrapper,children:[(0,v.jsxs)("div",{className:b.switcher,children:[(0,v.jsx)(_.OL,{to:"/auth/register",children:(0,v.jsx)("button",{className:b.button,disabled:!s,children:"Registration"})}),(0,v.jsx)("button",{className:b.button,disabled:s,children:"Log In"})]}),(0,v.jsxs)("div",{className:b.inputContainer,children:[(0,v.jsx)("input",(0,i.Z)((0,i.Z)({placeholder:"Enter your email",className:b.input,id:n},d("email")),{},{type:"email",required:!0})),w.email&&(0,v.jsx)("p",{className:b.error,children:w.email.message}),(0,v.jsxs)("div",{className:b.passwordContainer,children:[(0,v.jsx)("input",(0,i.Z)((0,i.Z)({placeholder:"Confirm your password",className:b.passwordInput,id:a},d("password")),{},{type:I?"text":"password",required:!0})),(0,v.jsx)("div",{className:b.showPasswordButtonWrap,children:(0,v.jsx)("div",{className:b.showPasswordButton,onClick:function(){W(!I)},children:(0,v.jsx)("svg",{className:b.logoIconOuterWrap,children:(0,v.jsx)("use",{href:"".concat(f.Z,"#eye-icon"),className:b.logoIconOuter})})})})]}),w.password&&(0,v.jsx)("p",{className:b.error,children:w.password.message}),(0,v.jsx)("button",{className:b.loginButton,type:"submit",children:"Log In Now"})]})]})})})},I={},W=function(){var e=(0,t.UO)().id,r=(0,n.v9)(o.AP),s=(0,n.v9)(o.Hn),i=(0,n.I0)();return(0,v.jsx)("div",{className:I.container,children:(0,v.jsx)("div",{className:I.formContainer,children:"register"===e?(0,v.jsxs)(v.Fragment,{children:[r&&(0,v.jsx)("div",{children:"Loading..."}),(0,v.jsx)(j,{onSubmit:function(e){i((0,a.z2)(e))}}),s&&(0,v.jsx)("div",{className:I.error,children:s})]}):(0,v.jsxs)(v.Fragment,{children:[r&&(0,v.jsx)("div",{children:"Loading..."}),(0,v.jsx)(F,{onSubmit:function(e){i((0,a.x4)(e))}}),s&&(0,v.jsx)("div",{className:I.error,children:s})]})})})}}}]);
//# sourceMappingURL=589.9b8cfcc1.chunk.js.map