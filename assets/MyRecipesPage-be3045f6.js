import{j as e,n,r,p}from"./index-3f7ec34a.js";import{T as d}from"./TitlePage-df1d86f0.js";import{E as l}from"./EllipsesLayout-aa4661ce.js";import{C as x}from"./CardTwo-2e419662.js";import{L as m}from"./ListCardsTwo.styled-3188edd8.js";const g=({items:s})=>{console.log(s);const i=t=>{const a=cocktails.filter(c=>c._id!==t);setCocktails(a)},o=s.map(t=>e.jsx(x,{...t,onDelete:i},t._id));return e.jsx(e.Fragment,{children:e.jsx(m,{children:o})})},h=n.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,f=n.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,w=()=>{const[s,i]=r.useState([]);return r.useEffect(()=>{(async()=>{try{await p.get("api/recipes/search?limit=80").then(t=>{const a=t.data;console.log(a.hits),i(a.hits)})}catch(t){console.error("Error fetching",t)}})()},[]),console.log(`page ${s}`),e.jsx(e.Fragment,{children:e.jsxs(h,{children:[e.jsx(l,{}),e.jsx(f,{children:e.jsx(d,{titlePage:"My recipes"})}),e.jsx(g,{items:s})]})})};export{f as Container,w as default};
