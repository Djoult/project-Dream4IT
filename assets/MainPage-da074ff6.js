import{n as t,l as x,P as o,m,j as e,S as h,r as d,o as f}from"./index-14bd18e7.js";import{E as w}from"./EllipsesLayout-169d0600.js";const c="/project-Dream4IT/assets/hero-desktop-5baff696.jpg",b=t.section`
  background-color: ${x.mainBgColor};
  outline: 1px solid yellow;
  min-height: 100%;
  padding-left: 20px;

  @media (min-width: 768px) {
    padding-left: 32px;
  }
  @media (min-width: 1180px) {
    padding-left: 100px;
  }
`,C=t.div`
  display: flex-inline;
  justify-content: st;
  flex-direction: column;
  padding-top: 120px;

  @media (min-width: 768px) {
    padding-top: 180px;
  }
  @media (min-width: 1180px) {
    padding-top: 160px;
  }
`,j=t.div`
  height: 740px;
  background-size: 640px 790px;
  background-repeat: no-repeat;
  background-position: top 106 left 250;
  background-image: linear-gradient(
      0.95deg,
      #0a0a11 -0.56%,
      rgba(10, 10, 17, 0) 21.93%
    ),
    linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url("${c}");

  @media screen and (min-width: 480px) {
    height: 790px;
    background-size: 680px 790px;
    background-repeat: no-repeat;
    background-position: top 0 left 120px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${c}");
  }
  @media screen and (min-width: 768px) {
    height: 790px;
    margin: 0 auto;
    background-size: 680px 790px;
    background-repeat: no-repeat;
    background-position: top 0 left 320px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${c}");
  }
  @media screen and (min-width: 1180px) {
    height: 790px;
    margin: 0 auto;
    background-size: 700px 790px;
    background-repeat: no-repeat;
    background-position: top 0 right 0px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${c}");
  }
`,y=t.h1`
  max-width: 280px;
  color: ${x.textMainColor};
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    max-width: 480px;
    font-size: 56px;
    line-height: 60px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 715px;
    font-size: 64px;
    line-height: 68px;
  }
`,_=t.p`
  max-width: 270px;
  color: ${x.textMainColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 500px;
  }
`,u=({title:i,description:r,children:g})=>{const l=m(),s=()=>{l("/add")};return e.jsx(b,{children:e.jsx(j,{children:e.jsxs(C,{children:[i&&e.jsx(y,{children:i}),r&&e.jsx(_,{children:r}),e.jsx(h,{type:"button",onClick:s,children:"Add recipe"}),g]})})})};u.propTypes={title:o.string,description:o.string,children:o.oneOfType([o.arrayOf(o.element),o.element])};const z="_nameCategory_defzu_1",v="_cocktailList_defzu_17",P="_imgContainer_defzu_23",D="_imgCocktail_defzu_28",E="_nameAndIngridients_defzu_33",I="_nameCocktail_defzu_39",L="_ingredients_defzu_52",a={nameCategory:z,cocktailList:v,imgContainer:P,imgCocktail:D,nameAndIngridients:E,nameCocktail:I,ingredients:L},p=({categoryDrink:i})=>{const[r,g]=d.useState([]),[l,s]=d.useState(3);return d.useEffect(()=>{f.get("api/recipes/main-page",{params:{category:i.toLowerCase()}}).then(n=>{const k=n.data;g(k[0].hits)}).catch(n=>{console.error("Error fetching drinks:",n)})},[i]),d.useEffect(()=>{const n=()=>{window.innerWidth>768?s(3):window.innerWidth>375?s(2):s(1)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e.jsxs("div",{children:[e.jsx("h2",{className:a.nameCategory,children:i}),e.jsx("ul",{className:a.cocktailList,children:r.slice(0,l).map(n=>e.jsxs("li",{children:[e.jsx("div",{className:a.imgContainer,children:e.jsx("img",{src:n.drinkThumb,alt:n.drink,className:a.imgCocktail})}),e.jsxs("div",{className:a.nameAndIngridients,children:[e.jsx("p",{className:a.nameCocktail,children:n.drink}),e.jsx("p",{className:a.ingredients,children:"Ingredients"})]})]},n.drink))})]})},N=t.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,S=t.div`
  text-align: center;
  margin-top: 80px;
`,$=t.div`
  max-width: 1240px;
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,A=()=>{const i=m(),r=()=>{i("/drinks")};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Craft Your Perfect Drink with Drink Master",description:`Unlock your inner mixologist with Drink Master, 
        your one-stop destination for exploring, crafting, 
        and mastering the world's finest beverages. `}),e.jsxs(N,{children:[e.jsx(w,{}),e.jsxs($,{children:[" ",e.jsx(p,{categoryDrink:"Punch/party drink"}),e.jsx(p,{categoryDrink:"Cocktail"}),e.jsx(p,{categoryDrink:"Shake"}),e.jsx(p,{categoryDrink:"Other/Unknown"}),e.jsx(S,{children:e.jsx(h,{onClick:r,children:"Other drinks"})})]})]})]})};export{$ as Container,A as default};
