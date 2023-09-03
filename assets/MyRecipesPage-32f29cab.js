import{r as p,j as e,n as i,c as x,o as l,u as m}from"./index-0de1265b.js";import{T as g}from"./TitlePage-5bd2422f.js";import{E as j}from"./EllipsesLayout-fba67292.js";import{C as u}from"./CardTwo-2e67f2b5.js";import{L as h}from"./ListCardsTwo.styled-abb4d785.js";const C=({items:t})=>{const[a,o]=p.useState(t??[]),r=s=>{const d=a.filter(c=>c._id.$oid!==s);o(d)},n=a.map(s=>e.jsx(u,{...s,onDelete:r},s._id.$oid));return e.jsx(e.Fragment,{children:e.jsx(h,{children:n})})},f=i.div`
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
