import{P as l,r as p,j as e,n as g,c as w,o as C,p as x}from"./index-cab73fca.js";import{T as j}from"./TitlePage-e4529212.js";import{E as y}from"./EllipsesLayout-bbfe191a.js";import{C as E}from"./CardTwo-d0324c45.js";import{L as T,C as k}from"./ListCardsTwo.styled-040f7a70.js";import{U as D,B as F}from"./Button Pagination-cfefe1bf.js";const m=({items:s,onDel:o})=>{const[i,c]=p.useState(9);p.useEffect(()=>{const n=()=>{window.innerWidth>1440?c(9):c(8)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const{firstContentIndex:d,lastContentIndex:t,nextPage:a,prevPage:r,page:f,setPage:h,totalPages:u}=D({contentPerPage:i,count:s.length}),P=async n=>{await o(n)},v=s.slice(d,t).map(n=>e.jsx(E,{...n,onDelete:P},n._id));return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:v}),e.jsx(k,{children:e.jsx(F,{prevPage:r,totalPages:u,nextPage:a,page:f,setPage:h,pageType:"favorite"})})]})};m.propTypes={items:l.array,onDel:l.func};const L=g.div`
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
`,A=()=>{const[s,o]=p.useState([]),i=w(t=>t.auth.token);p.useEffect(()=>{C(i),(async()=>{try{await x.get("api/recipes/favorite").then(a=>{const r=a.data;o(r.hits)})}catch(a){console.error("Error fetching coctails",a)}})()},[i]);const c=async t=>{try{await x.patch(`api/recipes/favorite/${t}`)}catch(a){console.error("Error deleting",a)}},d=t=>{c(t);const a=s.filter(r=>r._id!==t);o(a)};return e.jsx(e.Fragment,{children:e.jsxs(L,{children:[e.jsx(y,{}),e.jsx(S,{children:e.jsx(j,{titlePage:"Favorites"})}),e.jsx(m,{items:s,onDel:d})]})})};export{A as default};
