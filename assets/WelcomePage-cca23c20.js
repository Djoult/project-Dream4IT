import{n as i,N as r,j as e}from"./index-da92eec8.js";import{B as n,W as s,S as a,a as t,b as c}from"./BackgroundLayout-0e1aef40.js";const p=i.ul`
  display: flex;
  gap: 14px;
  box-sizing: border-box;
`,o=i(r)`
  font-family: Manrope;
  font-size: 14px;

  font-weight: 600;
  line-height: 18px;

  color: #f3f3f3;
  background-color: transparent;

  border-radius: 42px;
  border: 2px solid rgba(243, 243, 243, 0.2);

  padding: 14px 44px;

  transition: color 0.3s, background-color 0.3s,
    transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    padding: 18px 44px;
  }

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
`,x=()=>e.jsx("div",{style:{zIndex:100},children:e.jsxs(p,{children:[e.jsx("li",{children:e.jsx(o,{to:"/signup",children:"Registration"})}),e.jsx("li",{children:e.jsx(o,{to:"/signin",children:"Log In"})})]})}),f=()=>e.jsx(n,{children:e.jsxs(s,{children:[e.jsx(a,{children:"Welcome to the app!"}),e.jsx(t,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),e.jsx(c,{children:e.jsx(x,{})})]})});export{f as default};
