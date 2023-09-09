import{n as i,P as t,j as e,L as M,r as a,c as P,q as R,t as I}from"./index-a7df8e78.js";import{T as W}from"./TitlePage-9ea1b478.js";import{E as B}from"./EllipsesLayout-0275976e.js";import{U as _,B as U}from"./Button Pagination-b5f4688b.js";import{C as V}from"./ListCardsTwo.styled-d8d49121.js";const Y="/project-Dream4IT/assets/down-arrow-svgrepo-com-8dce313c.svg",N="/project-Dream4IT/assets/loop-svgrepo-com-a28bd999.svg";i.div`
    display: flex;
    max-width: 335px;
`;const G=i.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,H=i.div`
  padding: 80px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 32px 60px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 158px 110px 62px 110px;
  }
`,J=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 40px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    margin-top: 60px;

  }
  @media only screen and (min-width: 768px) {
    margin-top: 80px;

  }
`,K=i.input`
max-width: 335px;
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: transparent;
  color: #f3f3f3;
  outline: none;
  z-index:9;
  @media only screen and (min-width: 768px) {
    width: 265px;
    padding: 15px;
    padding-left: 24px;
    font-size: 17px;
  }
  
 :focus{
      border: 1px solid rgba(243, 243, 243, .5);
     
    }
  ::placeholder{
        color: #f3f3f3;
        font-size: 14px;
        @media only screen and (min-width: 768px){
    padding: 15px ;
    font-size: 17px;
  }
    }
    :focus::placeholder {
    color: transparent; 
  }

  ::before {
    content: "";
    background-image: url(${N}); 
    background-repeat: no-repeat;
    background-position: left center; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px; 
    width: 16px;
    height: 16px;
    z-index: 10; 
  }

`;i.select`
  max-width: 335px;
  position: relative;
  ${""}
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: #161f37;
  color: #f3f3f3;
  outline: none;
  appearance: none;
  @media only screen and (min-width: 768px) {
    width: 200px;
    ${""}
    padding: 18px 24px;
    font-size: 17px;
  } 
  ::after {
    content: "";
    background-image: url(${Y});
    background-repeat: no-repeat;
    background-position: right center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px; 
    width: 16px; 
    height: 16px; 
  }
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
  }
`;const Q=i.div``,X=i.img`
  width: 335px;
  height: auto;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: 342px;
    
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    ${""}
  }
`,Z=i.p`
  color: rgba(243, 243, 243, 0.5);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ee=i.h2`
  color: #f3f3f3;
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  margin-bottom: 4px;
`,te=i.ul`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  width: 335px;
`,T=({_id:r,drink:d,drinkThumb:p})=>e.jsxs(Q,{children:[e.jsx(M,{to:`/recipe/${r.$oid}`,children:e.jsx(X,{src:p})}),e.jsxs(te,{children:[e.jsx(ee,{children:d}),e.jsx(Z,{children:"Ingredients"})]})]});T.propTypes={_id:t.object,drink:t.string,drinkThumb:t.string};const ne=i.ul`
  margin: 0 auto 80px auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 20px;
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1440px) {
    gap: 80px 20px;
  }
`,F=({items:r})=>{const[p,c]=a.useState(9);a.useEffect(()=>{const n=()=>{window.innerWidth<=768?c(8):c(9)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const{firstContentIndex:l,lastContentIndex:g,nextPage:x,prevPage:h,page:u,setPage:f,totalPages:s}=_({contentPerPage:p,count:r.length}),w=r.slice(l,g).map(n=>e.jsx(T,{...n},n._id.$oid));return e.jsxs(e.Fragment,{children:[e.jsx(ne,{children:w}),e.jsx(V,{children:e.jsx(U,{prevPage:h,totalPages:s,nextPage:x,page:u,setPage:f,pageType:"drinks"})})]})};F.propTypes={items:t.arrayOf(t.shape({_id:t.object.isRequired,drink:t.string.isRequired,drinkThumb:t.string.isRequired})).isRequired};const E=({filter:r,onFilterChange:d})=>e.jsx(K,{type:"text",name:"text",placeholder:"Enter the text",value:r,onChange:d});E.propTypes={filter:t.string.isRequired,onFilterChange:t.func.isRequired};const ie=i.div`
  position: relative;
  max-width: 335px;
`,re=i.button`
  width: 335px;
  padding: 18px 24px;
  border-radius: 200px;
  font-size: 14px;
  background: #161f37;
  color: #f3f3f3;
  outline: none;
  text-align: left;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  margin-bottom: 4px;
  @media only screen and (min-width: 768px) {
    width: 200px;
    padding: 18px 24px;
    font-size: 17px;
    margin-bottom: 0;
  }
`,oe=i.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: #161f37;
  color: #f3f3f3;
  font-size: 17px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 20px;
  max-height: 200px;
  overflow-y: auto;
  display: ${({isOpen:r})=>r?"block":"none"};
  padding-right: 8px;
  z-index: 100;
  scrollbar-width: 8px;
  scrollbar-color: #434d67 transparent;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #434d67;
    border-radius: 20px;
    width: 8px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  user-select: none;
`,se=i.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #0a0a11;
  }
`,ae=i.div`
  color: #f3f3f3;
  font-size: 17px;
`,q=({options:r,value:d,onChange:p,placeholder:c})=>{const[l,g]=a.useState(!1),[x,h]=a.useState(d||""),u=s=>{s!==x&&(h(s),p(s)),g(!1)},f=()=>{g(!l)};return e.jsxs(ie,{children:[e.jsx(re,{onClick:f,children:c?x||e.jsx(ae,{children:c}):x}),l&&e.jsx(oe,{isOpen:l,children:r.map(s=>e.jsx(se,{onClick:()=>u(s),children:s},s))})]})};q.propTypes={options:t.arrayOf(t.string).isRequired,value:t.string.isRequired,onChange:t.func.isRequired,placeholder:t.string};const A=({filter:r,category:d,ingredient:p,onFilterChange:c,onCategoryChange:l,onIngredientChange:g,setFilteredCocktails:x})=>{const[h,u]=a.useState([]),[f,s]=a.useState([]),[w,n]=a.useState([]),b=P(o=>o.auth.token);a.useEffect(()=>{R(b),(async()=>{try{const m=(await I.get("api/recipes/search?limit=90")).data;u(m.hits);const z=Array.from(new Set(m.hits.map(k=>k.category))),y=Array.from(new Set(m.hits.flatMap(k=>k.ingredients.map(S=>S.title))));s([...z]),n([...y])}catch(C){console.error("Error fetching cocktails",C)}})()},[b]);const j=o=>{c(o.target.value),v(o.target.value,d,p)},L=o=>{l(o),v(r,o,p)},$=o=>{g(o),v(r,d,o)},v=(o,C,m)=>{const z=h.filter(y=>{const k=C==="All categories"||y.category===C,S=m==="All ingredients"||y.ingredients.some(O=>O.title===m),D=o===""||y.drink.toLowerCase().includes(o.toLowerCase());return k&&S&&D});x(z)};return e.jsxs(J,{children:[e.jsx(E,{filter:r,onFilterChange:j}),e.jsx(q,{options:["All categories",...f],value:d,onChange:L,placeholder:"All categories"}),e.jsx(q,{options:["All ingredients",...w],value:p,onChange:$,placeholder:"All ingredients"})]})};A.propTypes={category:t.string.isRequired,ingredient:t.string.isRequired,onCategoryChange:t.func.isRequired,onIngredientChange:t.func.isRequired,filter:t.string.isRequired,onFilterChange:t.func.isRequired,setFilteredCocktails:t.func.isRequired};const ge=()=>{const[r,d]=a.useState(""),[p,c]=a.useState("All categories"),[l,g]=a.useState("All ingredients"),[x,h]=a.useState([]),u=P(n=>n.auth.token);a.useEffect(()=>{R(u),(async()=>{try{const j=(await I.get("api/recipes/search?limit=90")).data;h(j.hits)}catch(b){console.error("Error fetching cocktails",b)}})()},[u]);const f=n=>{d(n)},s=n=>{c(n)},w=n=>{g(n)};return e.jsx(e.Fragment,{children:e.jsxs(G,{children:[e.jsx(B,{}),e.jsxs(H,{children:[e.jsx(W,{titlePage:"Drinks"}),e.jsx(A,{filter:r,category:p,ingredient:l,onFilterChange:f,onCategoryChange:s,onIngredientChange:w,setFilteredCocktails:h}),e.jsx(F,{items:x})]})]})})};export{ge as default};
