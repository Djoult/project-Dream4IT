import{r as p,j as e}from"./index-5b9af279.js";import{B as u,S as c}from"./BackgroundLayout-a32af394.js";import{F as d,T as t,S as g,a as x,C as h}from"./SignInPage.styled-169a41ea.js";const S=()=>{const[n,r]=p.useState({email:"",password:""}),s=a=>{const{name:i,value:l}=a.target;r(m=>({...m,[i]:l}))},o=a=>{a.preventDefault(),console.log("Submit Login")};return e.jsxs(d,{style:{zIndex:100},onSubmit:o,children:[e.jsx(t,{type:"email",name:"email",placeholder:"Email",value:n.email,onChange:s}),e.jsx(t,{type:"password",name:"password",placeholder:"Password",value:n.password,onChange:s}),e.jsx(g,{type:"submit",children:"Sign In"})]})},y=()=>e.jsx(u,{children:e.jsxs(x,{children:[e.jsx(c,{children:"Sign In"}),e.jsx(S,{}),e.jsx(h,{to:"/signup",children:"Registration"})]})});export{y as SigninPage,y as default};
