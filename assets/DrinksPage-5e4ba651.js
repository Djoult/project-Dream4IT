import{n as r,P as n,j as e,L as P,r as h}from"./index-fea5ca73.js";import{T as I}from"./TitlePage-0fb3678e.js";import{E as R}from"./EllipsesLayout-60aff9c3.js";import{U as T,B as q,i as m}from"./Button Pagination-50fd0cb5.js";import{C as z}from"./ListCardsTwo.styled-d76168a8.js";const F="/project-Dream4IT/assets/down-arrow-svgrepo-com-8dce313c.svg",L="/project-Dream4IT/assets/loop-svgrepo-com-a28bd999.svg";r.div`
    display: flex;
    max-width: 335px;
`;const M=r.div`
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
`,$=r.div`
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
`,E=r.input`
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
    background-image: url(${L}); 
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

`,u=r.select`
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
    background-image: url(${F});
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
`,B=r.p`
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,O=r.h2`
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
`,U=r.ul`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  width: 335px;
`,f=({_id:i,drink:o,drinkThumb:s})=>e.jsxs(A,{children:[e.jsx(P,{to:`/recipe/${i}`,children:e.jsx(D,{src:s})}),e.jsxs(U,{children:[e.jsx(O,{children:o}),e.jsx(B,{children:"Ingredients"})]})]});f.propTypes={drink:n.string,drinkThumb:n.string};const Y=r.ul`
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
`,w=({items:i})=>{const{firstContentIndex:o,lastContentIndex:s,nextPage:x,prevPage:d,page:g,setPage:c,totalPages:l}=T({contentPerPage:9,count:i.length}),t=i.slice(o,s).map(a=>e.jsx(f,{...a},a._id.$oid));return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:t}),e.jsx(z,{children:e.jsx(q,{prevPage:d,totalPages:l,nextPage:x,page:g,setPage:c})})]})};w.propTypes={items:n.arrayOf(n.shape({_id:n.string.isRequired,drink:n.string.isRequired,drinkThumb:n.string.isRequired})).isRequired};const j=({filter:i,onFilterChange:o})=>e.jsx(E,{type:"text",name:"text",placeholder:"Enter the text",value:i,onChange:o});j.propTypes={filter:n.string.isRequired,onFilterChange:n.func.isRequired};const y=({category:i,filter:o,onFilterChange:s,ingredient:x,onCategoryChange:d,onIngredientChange:g})=>{const c=Array.from(new Set(m.map(t=>t.category))),l=Array.from(new Set(m.flatMap(t=>t.ingredients.map(a=>a.title))));return e.jsxs($,{children:[e.jsx(j,{filter:o,onFilterChange:s}),e.jsxs(u,{onChange:d,value:i,children:[e.jsx("option",{value:"all",children:"All categories"}),c.map((t,a)=>e.jsx("option",{value:t,children:t},a))]}),e.jsxs(u,{onChange:g,value:x,children:[e.jsx("option",{value:"all",children:"All ingredients"}),l.map((t,a)=>e.jsx("option",{value:t,children:t},a))]})]})};y.propTypes={category:n.string.isRequired,ingredient:n.string.isRequired,onCategoryChange:n.func.isRequired,onIngredientChange:n.func.isRequired,filter:n.string.isRequired,onFilterChange:n.func.isRequired};const J=()=>{const[i,o]=h.useState(""),[s,x]=h.useState("all"),[d,g]=h.useState("all"),c=p=>{o(p.target.value)},l=p=>{x(p.target.value)};console.log("handleCategoryChange",l);const t=p=>{g(p.target.value)},a=m.filter(p=>{const b=s==="all"||p.category===s,C=d==="all"||p.ingredients.some(k=>k.title===d),v=i===""||p.drink.toLowerCase().includes(i.toLowerCase());return b&&C&&v});return e.jsx(e.Fragment,{children:e.jsxs(M,{children:[e.jsx(R,{}),e.jsxs(S,{children:[e.jsx(I,{titlePage:"Drinks"}),e.jsx(y,{filter:i,category:s,ingredient:d,onFilterChange:c,onCategoryChange:l,onIngredientChange:t}),e.jsx(w,{items:a})]})]})})};export{J as default};
