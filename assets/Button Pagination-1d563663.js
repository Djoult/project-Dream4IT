import{r as a,n as g,j as e,L as C}from"./index-629be40f.js";const f=t=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:8,height:15,viewBox:"0 0 8 15",...t},a.createElement("path",{d:"M0.355291 0.394637C0.242666 0.518919 0.153312 0.666543 0.0923468 0.829057C0.0313812 0.991571 0 1.16579 0 1.34173C0 1.51767 0.0313812 1.69188 0.0923468 1.8544C0.153312 2.01691 0.242666 2.16454 0.355291 2.28882L5.06911 7.50117L0.355291 12.7135C0.128132 12.9647 0.000514428 13.3054 0.000514428 13.6606C0.000514428 14.0158 0.128132 14.3565 0.355291 14.6077C0.582451 14.8589 0.890546 15 1.2118 15C1.53305 15 1.84114 14.8589 2.0683 14.6077L7.64471 8.44154C7.75734 8.31726 7.84669 8.16964 7.90765 8.00712C7.96862 7.84461 8 7.6704 8 7.49445C8 7.31851 7.96862 7.1443 7.90765 6.98178C7.84669 6.81927 7.75734 6.67165 7.64471 6.54736L2.0683 0.381203C1.60664 -0.129285 0.829104 -0.129285 0.355291 0.394637Z",fill:"#F3F3F3",fillOpacity:.3})),d=t=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:8,height:15,viewBox:"0 0 8 15",...t},a.createElement("path",{d:"M7.64471 0.394637C7.75733 0.518919 7.84669 0.666543 7.90765 0.829057C7.96862 0.991571 8 1.16579 8 1.34173C8 1.51767 7.96862 1.69188 7.90765 1.8544C7.84669 2.01691 7.75733 2.16454 7.64471 2.28882L2.93089 7.50117L7.64471 12.7135C7.87187 12.9647 7.99949 13.3054 7.99949 13.6606C7.99949 14.0158 7.87187 14.3565 7.64471 14.6077C7.41755 14.8589 7.10945 15 6.7882 15C6.46695 15 6.15886 14.8589 5.9317 14.6077L0.35529 8.44154C0.242664 8.31726 0.153311 8.16964 0.0923452 8.00712C0.0313797 7.84461 0 7.67039 0 7.49445C0 7.31851 0.0313797 7.1443 0.0923452 6.98178C0.153311 6.81927 0.242664 6.67165 0.35529 6.54736L5.9317 0.381203C6.39336 -0.129285 7.1709 -0.129285 7.64471 0.394637Z",fill:"#F3F3F3",fillOpacity:.3})),v=({contentPerPage:t,count:p})=>{const[l,r]=a.useState(1),i=Math.ceil(p/t),c=l*t,n=c-t,x=s=>{r(o=>s?o===i?o:o+1:o===1?o:o-1)};return{totalPages:i,nextPage:()=>x(!0),prevPage:()=>x(!1),setPage:s=>{s>i?r(i):s<1?r(1):r(s)},firstContentIndex:n,lastContentIndex:c,page:l}},u=g.button`
  color: #f3f3f3;
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${t=>t.active?"rgba(64, 112, 205, 0.50)":"transparent"};
  border: none;
  outline: none;
  width: 27.81px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`,w=g.p`
  // position: absolute;
  // z-index: 2;
`,m=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`,h=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`,b=({prevPage:t,totalPages:p,nextPage:l,page:r,setPage:i,pageType:c})=>e.jsxs(m,{children:[e.jsx(h,{onClick:t,children:e.jsx(d,{style:{fill:"rgba(243, 243, 243, 0.30)",width:"8px",height:"15px"}})}),[...Array(p).keys()].map(n=>e.jsx("li",{children:e.jsx(C,{to:`/${c}/${n+1}`,children:e.jsx(u,{onClick:()=>i(n+1),active:`${r===n+1?"active":""}`,children:e.jsx(w,{children:n+1})})})},n)),e.jsx(h,{onClick:l,children:e.jsx(f,{style:{fill:"rgba(243, 243, 243, 0.30)",width:"8px",height:"15px"}})})]});export{b as B,v as U};
