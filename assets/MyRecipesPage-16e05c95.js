import{r as c,j as e,n as i,c as x,p as l,u as m}from"./index-7ea3d0c8.js";import{T as g}from"./TitlePage-22c2f62d.js";import{E as j}from"./EllipsesLayout-ae08f5b5.js";import{C as u}from"./CardTwo-c75d3e17.js";import{L as h}from"./ListCardsTwo.styled-181d3eef.js";const C=({items:t})=>{const[a,r]=c.useState(t??[]),o=s=>{const d=a.filter(p=>p._id.$oid!==s);r(d)},n=a.map(s=>e.jsx(u,{...s,onDelete:o},s._id.$oid));return e.jsx(e.Fragment,{children:e.jsx(h,{children:n})})},f=i.div`
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
