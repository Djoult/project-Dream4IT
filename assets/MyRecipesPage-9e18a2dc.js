import{P as p,j as e,n as x,r as d,c as h,p as g,q as l}from"./index-ef659eae.js";import{T as y}from"./TitlePage-1be56875.js";import{E as f}from"./EllipsesLayout-8b90f7f5.js";import{C as u}from"./CardTwo-d8aa41fe.js";import{L as j}from"./ListCardsTwo.styled-a5296ee5.js";const m=({items:r,onDel:o})=>{const n=async s=>{await o(s)},i=r.map(s=>e.jsx(u,{...s,onDelete:n},s._id));return e.jsx(e.Fragment,{children:e.jsx(j,{children:i})})};m.propTypes={items:p.array,onDel:p.func};const w=x.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,C=x.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,v=()=>{const[r,o]=d.useState([]),n=h(t=>t.auth.token);d.useEffect(()=>{g(n),(async()=>{try{await l.get("api/recipes/own?limit=9").then(a=>{const c=a.data;o(c.hits)})}catch(a){console.error("Error fetching coctails",a)}})()},[n]);const i=async t=>{try{await l.delete(`api/recipes/own/${t}`)}catch(a){console.error("Error deleting",a)}},s=t=>{i(t);const a=r.filter(c=>c._id!==t);o(a)};return e.jsx(e.Fragment,{children:e.jsxs(w,{children:[e.jsx(f,{}),e.jsx(C,{children:e.jsx(y,{titlePage:"My recipes"})}),e.jsx(m,{items:r,onDel:s})]})})};export{v as default};
