import{r as i,j as t,n as g,p as u}from"./index-fc2b84b5.js";import{T as C}from"./TitlePage-980d58c5.js";import{E as v}from"./EllipsesLayout-4ec7b71a.js";import{C as k}from"./CardTwo-6398c3dc.js";import{L as E,C as w}from"./ListCardsTwo.styled-97f130ca.js";import{U as F,B as x}from"./Button Pagination-4e033cb0.js";const T=({items:e})=>{const[o,a]=i.useState([]),{firstContentIndex:s,lastContentIndex:m,nextPage:r,prevPage:c,page:p,setPage:d,totalPages:l}=F({contentPerPage:8,count:e.length}),f=n=>{const j=o.filter(P=>P._id!==n);a(j)},h=e.slice(s,m).map(n=>t.jsx(k,{...n,onDelete:f},n._id));return t.jsxs(t.Fragment,{children:[t.jsx(E,{children:h}),t.jsxs(w,{children:[t.jsx(x,{namePage:"favorite",prevPage:c,totalPages:l,nextPage:r,page:p,setPage:d}),t.jsx(x,{prevPage:c,totalPages:l,nextPage:r,page:p,setPage:d,pageType:"favorite"})]})]})},y=g.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,B=g.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,A=()=>{const[e,o]=i.useState([]);return i.useEffect(()=>{u.get("api/recipes/favorite").then(a=>{const s=a.data;console.log(s.hits),o(s.hits)}).catch(a=>{console.error("Error fetching drinks:",a)})},[]),console.log(`page ${e}`),t.jsx(t.Fragment,{children:t.jsxs(y,{children:[t.jsx(v,{}),t.jsx(B,{children:t.jsx(C,{titlePage:"Favorites"})}),t.jsx(T,{items:e})]})})};export{B as Container,A as default};
