import{P as i,j as e,L as C,r as p,n as l,c as y,p as T,q as g}from"./index-ec0acdae.js";import{T as h}from"./TitlePage-a45d11ba.js";import{E as k}from"./EllipsesLayout-b0e8f919.js";import{W as B,B as E,S as L,I as F,a as I,T as S,b as D,c as b,d as N,L as W,e as z,f as U,g as _,N as $}from"./NotFoundColection-3a720dd8.js";import{L as q,C as A}from"./ListCardsTwo.styled-0c97e254.js";import{U as G,B as O}from"./Button Pagination-4ee7e032.js";import"./notfound_mobile-76c30311.js";const m=({_id:s,drink:o,instructions:c,drinkThumb:r,onDelete:d})=>{const t=Object.values({drinkThumb:r})[0];return e.jsxs(B,{children:[!t||t===""?e.jsx(E,{children:e.jsx(L,{})}):e.jsx(F,{src:r}),e.jsxs(I,{children:[e.jsx(S,{children:o}),e.jsx(D,{children:"Ingredients"}),e.jsx(b,{children:e.jsx(N,{children:c})})]}),e.jsxs(W,{children:[e.jsx(C,{style:{textDecoration:"none"},to:`/recipe/${s}`,children:e.jsx(z,{children:"See recipe"})}),e.jsx(U,{onClick:()=>d(s),children:e.jsx(_,{style:{width:"24px",height:"24px"}})})]})]})};m.propTypes={_id:i.string,drink:i.string,instructions:i.string,drinkThumb:i.string,onDelete:i.func};const j=({items:s,onDel:o})=>{const[c,r]=p.useState(9);p.useEffect(()=>{const a=()=>{window.innerWidth>1440?r(9):r(8)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]);const{firstContentIndex:d,lastContentIndex:t,nextPage:n,prevPage:x,page:u,setPage:f,totalPages:v}=G({contentPerPage:c,count:s.length}),P=async a=>{await o(a)},w=s.slice(d,t).map(a=>e.jsx(m,{...a,onDelete:P},a._id));return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:w}),e.jsx(A,{children:e.jsx(O,{prevPage:x,totalPages:v,nextPage:n,page:u,setPage:f,pageType:"favorite"})})]})};j.propTypes={items:i.array,onDel:i.func};const R=l.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,H=l.div`
  position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 25px 0 62px 110px;
  }
`,J=l.div`
  margin: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,ee=()=>{const[s,o]=p.useState([]),c=y(t=>t.auth.token);p.useEffect(()=>{T(c),(async()=>{try{await g.get("api/recipes/favorite").then(n=>{const x=n.data;o(x.hits)})}catch(n){console.error("Error fetching coctails",n)}})()},[c]);const r=async t=>{try{await g.patch(`api/recipes/favorite/${t}`)}catch(n){console.error("Error deleting",n)}},d=t=>{r(t);const n=s.filter(x=>x._id!==t);o(n)};return e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsx(k,{}),s.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx(h,{titlePage:"Favorites"})}),e.jsx(j,{items:s,onDel:d})]}):e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(h,{titlePage:"Favorites"})}),e.jsx($,{colection:"favorite"})]})]})})};export{ee as default};
