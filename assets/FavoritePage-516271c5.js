import{r as C,j as t,n}from"./index-d11967cc.js";import{T as u}from"./TitlePage-a8eca58c.js";import{E as f}from"./EllipsesLayout-059a822b.js";import{C as h}from"./CardTwo-f671c240.js";import{L as k,C as v}from"./ListCardsTwo.styled-0a41969c.js";import{U as w,B as y,i as E}from"./Button Pagination-5517a3a7.js";const T=({items:e})=>{const[a,i]=C.useState(e??[]),{firstContentIndex:o,lastContentIndex:r,nextPage:d,prevPage:p,page:c,setPage:x,totalPages:l}=w({contentPerPage:9,count:e.length}),m=s=>{const j=a.filter(P=>P._id.$oid!==s);i(j)},g=a.slice(o,r).map(s=>t.jsx(h,{...s,onDelete:m},s._id.$oid));return t.jsxs(t.Fragment,{children:[t.jsx(k,{children:g}),t.jsx(v,{children:t.jsx(y,{prevPage:p,totalPages:l,nextPage:d,page:c,setPage:x})})]})},B=n.div`
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
`,$=()=>{const e=E;return t.jsx(t.Fragment,{children:t.jsxs(B,{children:[t.jsx(f,{}),t.jsx(F,{children:t.jsx(u,{titlePage:"Favorites"})}),t.jsx(T,{items:e})]})})};export{F as Container,$ as default};
