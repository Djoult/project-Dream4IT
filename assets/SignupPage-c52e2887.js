import{r as l,j as s}from"./index-8fe2ac0a.js";import{B as S,S as w}from"./BackgroundLayout-5a602f00.js";import{u as j,g as f,F as y,T as n,S as u,I as t,d as C,e as B,N as I,a as b,b as v,c as P,f as E,h as F,C as k}from"./SignInPage.styled-f50933a0.js";const V=()=>{const[r,i]=l.useState(!1),[d,m]=l.useState(!1),[o,h]=l.useState(!1),p=a=>{e.handleChange(a),i(!e.errors.email)},x=a=>{e.handleChange(a),m(!e.errors.password)},c=async(a,{resetForm:g})=>{console.log("Submit SignIn",a),i(!1),m(!1),g()},e=j({initialValues:{username:"",email:"",password:""},validationSchema:f(),onSubmit:c});return s.jsxs(s.Fragment,{children:[s.jsxs(y,{className:e.touched.email&&!e.errors.email&&r?"correct":e.touched.email&&e.errors.email?"error":"",style:{zIndex:100},onSubmit:e.handleSubmit,children:[s.jsx(n,{style:{marginBottom:"14px"},type:"text",name:"username",placeholder:"Username",value:e.values.username,onChange:e.handleChange,onBlur:e.handleBlur}),s.jsxs(u,{children:[s.jsx(n,{style:{marginBottom:"14px"},type:"email",name:"email",placeholder:"Email",value:e.values.email,error:e.touched.email&&e.errors.email,correct:e.touched.email&&!e.errors.email&&r,onChange:p,onBlur:e.handleBlur}),e.touched.email&&s.jsx(s.Fragment,{children:r?s.jsx(t,{src:C,alt:"Done"}):s.jsx(t,{src:B,alt:"error"})})]}),e.touched.email&&e.errors.email&&s.jsx(I,{children:e.errors.email}),s.jsxs(u,{children:[s.jsx(n,{type:o?"text":"password",name:"password",placeholder:"Password",value:e.values.password,error:e.touched.password&&e.errors.password,correct:e.touched.password&&!e.errors.password&&d,onChange:x,onBlur:e.handleBlur}),s.jsx(t,{src:o?b:v,alt:o?"Hide":"Show",onClick:()=>h(!o)})]}),e.touched.password&&e.errors.password&&s.jsx(P,{children:e.errors.password})]}),s.jsx(E,{type:"submit",disabled:!r||!d,onClick:()=>c(e.values,e),children:"Sign Up"})]})},L=()=>s.jsx(S,{children:s.jsxs(F,{children:[s.jsx(w,{children:"Registration"}),s.jsx(V,{}),s.jsx(k,{to:"/signin",children:"Sign In"})]})});export{L as SignupPage,L as default};
