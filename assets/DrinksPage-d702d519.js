import{n as r,P as n,j as e,L as k,r as m}from"./index-7b349e7b.js";import{T as z}from"./TitlePage-3e1b756e.js";import{E as I}from"./EllipsesLayout-e203b23b.js";import{U as R,B as T,i as f}from"./Button Pagination-6cd9cebd.js";import{C as q}from"./ListCardsTwo.styled-754ae30b.js";const E="/project-Dream4IT/assets/down-arrow-svgrepo-com-8dce313c.svg",F="/project-Dream4IT/assets/loop-svgrepo-com-a28bd999.svg";r.div`
    display: flex;
    max-width: 335px;
`;const L=r.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,S=r.div`
  padding: 80px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 32px 60px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 158px 110px 62px 110px;
  }
`,M=r.div`
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
`,$=r.input`
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
    background-image: url(${F}); 
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

`,w=r.select`
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
    background-image: url(${E});
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
`,A=r.div``,D=r.img`
  width: 335px;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 342px;
    
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    ${""}
  }
`,W=r.p`
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,B=r.h2`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  margin-bottom: 4px;
`,O=r.ul`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  width: 335px;
`,j=({_id:i,drink:d,drinkThumb:a})=>e.jsxs(A,{children:[e.jsx(k,{to:`/recipe/${i}`,children:e.jsx(D,{src:a})}),e.jsxs(O,{children:[e.jsx(B,{children:d}),e.jsx(W,{children:"Ingredients"})]})]});j.propTypes={_id:n.object,drink:n.string,drinkThumb:n.string};const _=r.ul`
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
`,y=({items:i})=>{const[a,x]=m.useState(9);m.useEffect(()=>{const p=()=>{window.innerWidth<=768?x(8):x(9)};return p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]);const{firstContentIndex:l,lastContentIndex:g,nextPage:h,prevPage:c,page:t,setPage:s,totalPages:o}=R({contentPerPage:a,count:i.length}),u=i.slice(l,g).map(p=>e.jsx(j,{...p},p._id.$oid));return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:u}),e.jsx(q,{children:e.jsx(T,{prevPage:c,totalPages:o,nextPage:h,page:t,setPage:s,pageType:"drinks"})})]})};y.propTypes={items:n.arrayOf(n.shape({_id:n.object.isRequired,drink:n.string.isRequired,drinkThumb:n.string.isRequired})).isRequired};const b=({filter:i,onFilterChange:d})=>e.jsx($,{type:"text",name:"text",placeholder:"Enter the text",value:i,onChange:d});b.propTypes={filter:n.string.isRequired,onFilterChange:n.func.isRequired};const C=({category:i,filter:d,onFilterChange:a,ingredient:x,onCategoryChange:l,onIngredientChange:g})=>{const h=Array.from(new Set(f.map(t=>t.category))),c=Array.from(new Set(f.flatMap(t=>t.ingredients.map(s=>s.title))));return e.jsxs(M,{children:[e.jsx(b,{filter:d,onFilterChange:a}),e.jsxs(w,{onChange:l,value:i,children:[e.jsx("option",{value:"all",children:"All categories"}),h.map((t,s)=>e.jsx("option",{value:t,children:t},s))]}),e.jsxs(w,{onChange:g,value:x,children:[e.jsx("option",{value:"all",children:"All ingredients"}),c.map((t,s)=>e.jsx("option",{value:t,children:t},s))]})]})};C.propTypes={category:n.string.isRequired,ingredient:n.string.isRequired,onCategoryChange:n.func.isRequired,onIngredientChange:n.func.isRequired,filter:n.string.isRequired,onFilterChange:n.func.isRequired};const J=()=>{const[i,d]=m.useState(""),[a,x]=m.useState("all"),[l,g]=m.useState("all"),h=o=>{d(o.target.value)},c=o=>{x(o.target.value)};console.log("handleCategoryChange",c);const t=o=>{g(o.target.value)},s=f.filter(o=>{const u=a==="all"||o.category===a,p=l==="all"||o.ingredients.some(P=>P.title===l),v=i===""||o.drink.toLowerCase().includes(i.toLowerCase());return u&&p&&v});return e.jsx(e.Fragment,{children:e.jsxs(L,{children:[e.jsx(I,{}),e.jsxs(S,{children:[e.jsx(z,{titlePage:"Drinks"}),e.jsx(C,{filter:i,category:a,ingredient:l,onFilterChange:h,onCategoryChange:c,onIngredientChange:t}),e.jsx(y,{items:s})]})]})})};export{J as default};
