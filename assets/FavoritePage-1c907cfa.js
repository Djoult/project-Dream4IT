import{r as C,j as t,n}from"./index-7b349e7b.js";import{T as f}from"./TitlePage-3e1b756e.js";import{E as u}from"./EllipsesLayout-e203b23b.js";import{C as h}from"./CardTwo-1c652b8d.js";import{L as v,C as k}from"./ListCardsTwo.styled-754ae30b.js";import{U as w,B as y,i as T}from"./Button Pagination-6cd9cebd.js";const E=({items:e})=>{const[s,i]=C.useState(e??[]),{firstContentIndex:o,lastContentIndex:r,nextPage:d,prevPage:p,page:c,setPage:x,totalPages:l}=w({contentPerPage:8,count:e.length}),m=a=>{const j=s.filter(P=>P._id.$oid!==a);i(j)},g=s.slice(o,r).map(a=>t.jsx(h,{...a,onDelete:m},a._id.$oid));return t.jsxs(t.Fragment,{children:[t.jsx(v,{children:g}),t.jsx(k,{children:t.jsx(y,{prevPage:p,totalPages:l,nextPage:d,page:c,setPage:x,pageType:"favorite"})})]})},B=n.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,F=n.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,$=()=>{const e=T;return t.jsx(t.Fragment,{children:t.jsxs(B,{children:[t.jsx(u,{}),t.jsx(F,{children:t.jsx(f,{titlePage:"Favorites"})}),t.jsx(E,{items:e})]})})};export{F as Container,$ as default};
