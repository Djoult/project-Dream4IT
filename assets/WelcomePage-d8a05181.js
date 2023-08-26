import{n as r,N as s,j as e}from"./index-98e04a33.js";import{B as n,T as i,S as t,W as a,a as c}from"./BackgroundLayout-aea9b4ce.js";const l=r.ul`
  display: flex;
  gap: 14px;
`,o=r(s)`
  text-decoration: none;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  background-color: transparent;
  font-weight: 600;
  line-height: 18px;
  border-radius: 42px;
  border: 2px solid rgba(243, 243, 243, 0.2);

  padding: 18px 44px;

  transition: color 0.3s, background-color 0.3s,
    transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    background: #f3f3f3;
    color: #000000;
    /* transform: scale(1.02); */
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &.active {
    text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
      -1px 1px 0 black;
  }
`,p=()=>e.jsx("div",{style:{zIndex:100},children:e.jsxs(l,{children:[e.jsx("li",{children:e.jsx(o,{to:"/signup",children:"Registration"})}),e.jsx("li",{children:e.jsx(o,{to:"/signin",children:"Log In"})})]})}),f=()=>e.jsx(n,{children:e.jsxs(i,{children:[e.jsx(t,{children:"Welcome to the app!"}),e.jsx(a,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),e.jsx(c,{children:e.jsx(p,{})})]})});export{f as default};
