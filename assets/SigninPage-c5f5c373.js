import{P as f,r as l,u as y,j as e,e as C,g as I,c as P,f as b}from"./index-33fa18ad.js";import{B as k,S as B}from"./BackgroundLayout-af44d1b7.js";import{u as v,g as E,F,S as u,T as h,I as t,d as T,n as V,e as z,a as L,p as N,c as R,q as W,C as q,m as D}from"./CustomizedSnackbar-35f4190d.js";import{C as H}from"./assertThisInitialized-a7341642.js";const p=({isLoading:r})=>{const[a,o]=l.useState(!1),[d,c]=l.useState(!1),[n,g]=l.useState(!1),x=i=>{s.handleChange(i),o(!s.errors.email)},S=y(),j=i=>{s.handleChange(i),c(!s.errors.password)},m=(i,{resetForm:w})=>{w(),o(!1),c(!1),S(I(i))},s=v({initialValues:{email:"",password:""},validationSchema:E(),onSubmit:m});return e.jsxs(e.Fragment,{children:[e.jsxs(F,{className:s.touched.email&&!s.errors.email&&a?"correct":s.touched.email&&s.errors.email?"error":"",style:{zIndex:100},onSubmit:s.handleSubmit,children:[e.jsxs(u,{children:[e.jsx(h,{disabled:r,style:{marginBottom:"14px"},type:"email",name:"email",placeholder:"Email",value:s.values.email,error:s.touched.email&&s.errors.email,correct:s.touched.email&&!s.errors.email&&a,onChange:x,onBlur:s.handleBlur}),s.touched.email&&e.jsx(e.Fragment,{children:a?e.jsx(t,{src:T,alt:"Done"}):e.jsx(t,{src:C,alt:"error"})})]}),s.touched.email&&s.errors.email&&e.jsx(V,{children:s.errors.email}),e.jsxs(u,{children:[e.jsx(h,{disabled:r,type:n?"text":"password",name:"password",placeholder:"Password",value:s.values.password,error:s.touched.password&&s.errors.password,correct:s.touched.password&&!s.errors.password&&d,onChange:j,onBlur:s.handleBlur}),e.jsx(t,{src:n?z:L,alt:n?"Hide":"Show",onClick:()=>g(!n)})]}),s.touched.password&&s.errors.password&&e.jsx(N,{children:s.errors.password})]}),e.jsxs(R,{type:"submit",disabled:!a||!d||r,onClick:()=>m(s.values,s),children:["Sign In ",r&&e.jsx(H,{size:20})]})]})};p.propTypes={isLoading:f.bool.isRequired};const K=()=>{const{error:r,isLoading:a}=P(o=>({error:o.auth.error,isLoading:b(o)}));return e.jsxs(k,{children:[e.jsxs(W,{children:[e.jsx(B,{children:"Sign In"}),e.jsx(p,{isLoading:a}),e.jsx(q,{to:"/signup",children:"Registration"})]}),r&&e.jsx(D,{severity:"error",message:r})]})};export{K as SigninPage,K as default};