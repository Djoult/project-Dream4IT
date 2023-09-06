import{P as l,r as d,j as e,n as g,c as w,m as C,o as x}from"./index-444bc74d.js";import{T as j}from"./TitlePage-5ae8bfed.js";import{E as y}from"./EllipsesLayout-40398663.js";import{C as E}from"./CardTwo-c614f61f.js";import{L as T,C as k}from"./ListCardsTwo.styled-1f9db880.js";import{U as D,B as F}from"./Button Pagination-5ce73932.js";const m=({items:s,onDel:o})=>{const[i,c]=d.useState(9);d.useEffect(()=>{const n=()=>{window.innerWidth>1440?c(9):c(8)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const{firstContentIndex:p,lastContentIndex:t,nextPage:a,prevPage:r,page:f,setPage:h,totalPages:u}=D({contentPerPage:i,count:s.length}),P=async n=>{await o(n)},v=s.slice(p,t).map(n=>e.jsx(E,{...n,onDelete:P},n._id));return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:v}),e.jsx(k,{children:e.jsx(F,{prevPage:r,totalPages:u,nextPage:a,page:f,setPage:h,pageType:"favorite"})})]})};m.propTypes={items:l.array,onDel:l.func};const L=g.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,S=g.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,A=()=>{const[s,o]=d.useState([]),i=w(t=>t.auth.token);d.useEffect(()=>{C(i),(async()=>{try{await x.get("api/recipes/favorite").then(a=>{const r=a.data;o(r.hits)})}catch(a){console.error("Error fetching coctails",a)}})()},[i]);const c=async t=>{try{await x.patch(`api/recipes/favorite/${t}`)}catch(a){console.error("Error deleting",a)}},p=t=>{c(t);const a=s.filter(r=>r._id!==t);o(a)};return e.jsx(e.Fragment,{children:e.jsxs(L,{children:[e.jsx(y,{}),e.jsx(S,{children:e.jsx(j,{titlePage:"Favorites"})}),e.jsx(m,{items:s,onDel:p})]})})};export{A as default};
