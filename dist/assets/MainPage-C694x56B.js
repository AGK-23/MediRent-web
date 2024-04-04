function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Index-LM7tf3iH.js","assets/index-BWoieiwW.js","assets/react-apexcharts-chunk-Cs4qZfgr.js","assets/react-datepicker-chunk-B8QU4_4d.js","assets/react-datepicker-chunk-BRDFbV_Q.css","assets/index-DcesNRtk.css","assets/Index-DDN1DC9_.js","assets/axios-Cm0UX6qg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r,j as s}from"./index-BWoieiwW.js";import{r as e}from"./react-apexcharts-chunk-Cs4qZfgr.js";import"./react-datepicker-chunk-B8QU4_4d.js";const t=e.lazy(()=>r(()=>import("./Index-LM7tf3iH.js"),__vite__mapDeps([0,1,2,3,4,5]))),a=e.lazy(()=>r(()=>import("./Index-DDN1DC9_.js"),__vite__mapDeps([6,1,2,3,4,5,7]))),n=()=>s.jsx(e.Suspense,{fallback:s.jsx(Spinner,{}),children:s.jsxs("div",{className:"h-screen text-lg font-semibold w-full z-0 relative px-6 top-[3rem]",children:[s.jsx("div",{className:"",children:s.jsx(t,{})}),s.jsx("div",{className:"",children:s.jsx(a,{})})]})});export{n as default};
