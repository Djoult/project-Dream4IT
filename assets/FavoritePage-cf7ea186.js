import{P as i,j as e,L as C,r as p,n as h,c as y,q as T,t as m}from"./index-8057a650.js";import{T as j}from"./TitlePage-d5cff4f5.js";import{E as L}from"./EllipsesLayout-09ab5455.js";import{W as k,B,S as E,I as S,a as F,T as I,b as D,c as b,d as N,L as W,e as z,f as U,g as _,N as $}from"./NotFoundColection-2735838d.js";import{L as q,C as A}from"./ListCardsTwo.styled-c573895a.js";import{U as G,B as O}from"./Button Pagination-29d380f7.js";import"./notfound_mobile-76c30311.js";const u=({_id:t,drink:o,instructions:c,drinkThumb:a,onDelete:d})=>{const x=Object.values({drinkThumb:a})[0];return e.jsxs(k,{children:[!x||x===""?e.jsx(B,{children:e.jsx(E,{})}):e.jsx(S,{src:a}),e.jsxs(F,{children:[e.jsx(I,{children:o}),e.jsx(D,{children:"Ingredients"}),e.jsx(b,{children:e.jsx(N,{children:c})})]}),e.jsxs(W,{children:[e.jsx(C,{style:{textDecoration:"none"},to:`/recipe/${t}`,children:e.jsx(z,{children:"See recipe"})}),e.jsx(U,{onClick:()=>d(t),children:e.jsx(_,{style:{width:"24px",height:"24px"}})})]})]})};u.propTypes={_id:i.string,drink:i.string,instructions:i.string,drinkThumb:i.string,onDelete:i.func};const f=({items:t,onDel:o})=>{const[c,a]=p.useState(9);p.useEffect(()=>{const r=()=>{window.innerWidth>1440?a(9):a(8)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]);const{firstContentIndex:d,lastContentIndex:x,nextPage:g,prevPage:s,page:n,setPage:l,totalPages:v}=G({contentPerPage:c,count:t.length}),P=async r=>{await o(r)},w=t.slice(d,x).map(r=>e.jsx(u,{...r,onDelete:P},r._id));return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:w}),e.jsx(A,{children:e.jsx(O,{prevPage:s,totalPages:v,nextPage:g,page:n,setPage:l,pageType:"favorite"})})]})};f.propTypes={items:i.array,onDel:i.func};const R=h.div`
  position: relative;
  // background: #0a0a11;
  margin: 0 auto;
`,H=h.div`
  position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 105px 0 62px 130px;
    
  }
`,J=h.div`
  margin: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,ee=()=>{const[t,o]=p.useState([]),[c,a]=p.useState(!0),d=y(s=>s.auth.token);p.useEffect(()=>{T(d),(async()=>{try{a(!0),await m.get("api/recipes/favorite").then(n=>{const l=n.data;o(l.hits),a(!1)})}catch(n){console.error("Error fetching coctails",n)}})()},[d]);const x=async s=>{try{await m.patch(`api/recipes/favorite/${s}`)}catch(n){console.error("Error deleting",n)}},g=s=>{x(s);const n=t.filter(l=>l._id!==s);o(n)};return e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsx(L,{}),!c&&t.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx(j,{titlePage:"Favorites"})}),e.jsx(f,{items:t,onDel:g})]}):!c&&e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(j,{titlePage:"Favorites"})}),e.jsx($,{colection:"favorite"})]})]})})};export{ee as default};
