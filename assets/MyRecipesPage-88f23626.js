import{r as p,j as e,n as i,c as x,q as l,u as m}from"./index-7b349e7b.js";import{T as g}from"./TitlePage-3e1b756e.js";import{E as j}from"./EllipsesLayout-e203b23b.js";import{C as u}from"./CardTwo-1c652b8d.js";import{L as h}from"./ListCardsTwo.styled-754ae30b.js";const C=({items:t})=>{const[a,r]=p.useState(t??[]),o=s=>{const d=a.filter(c=>c._id.$oid!==s);r(d)},n=a.map(s=>e.jsx(u,{...s,onDelete:o},s._id.$oid));return e.jsx(e.Fragment,{children:e.jsx(h,{children:n})})},f=i.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,k=i.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,v=()=>{const t=x(l);return m(),e.jsx(e.Fragment,{children:e.jsxs(f,{children:[e.jsx(j,{}),e.jsx(k,{children:e.jsx(g,{titlePage:"My recipes"})}),e.jsx(C,{items:t})]})})};export{k as Container,v as default};
