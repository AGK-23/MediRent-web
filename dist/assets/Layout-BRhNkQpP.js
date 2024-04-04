import{b as L,j as e,L as i,a as j,O as p}from"./index-BWoieiwW.js";import{r as o}from"./react-apexcharts-chunk-Cs4qZfgr.js";import{R as g}from"./index-DoWaVfqn.js";import{b as N}from"./index-Bm3AOsyh.js";import{F as v}from"./index-BES1jcv2.js";import{a as w}from"./index-BpOoPbsu.js";import{u as $}from"./useMediaQuery-k7dZ-CCC.js";import{a as S,H as F,A as T,L as b}from"./index-sJnsyvDR.js";import{P as y}from"./index-BQfUhZNr.js";import"./react-datepicker-chunk-B8QU4_4d.js";import"./iconBase-TPT4t0Bk.js";const C=({OpenScreen:n,open:a})=>{const m=L(),[c,x]=o.useState("Dashboard"),h=$("(min-width: 1024px)"),[E,d]=o.useState(""),[l,t]=o.useState("Dashboard"),[s,O]=o.useState({nameFour:"Dashboard",nameFive:"Tenants",nameSix:"My Listings",nameEight:"Wallet",nameTen:"Lease"}),k=[{id:0,title:"Dashboard",src:e.jsx(g,{}),to:"/admin/dashboard/landlord",show:!0},{id:2,title:"My Listings",src:e.jsx(y,{}),to:"/admin/dashboard/listing",show:!0},{id:3,title:"Tenants",src:e.jsx(b,{}),to:"/admin/dashboard/landlord",show:!1},{id:1,title:"Wallet",src:e.jsx(N,{}),to:"/admin/dashboard/landlord",show:!1},{id:7,title:"Lease",src:e.jsx(w,{}),gap:!0,to:"/admin/dashboard/landlord",show:!1}],f=()=>{localStorage.removeItem("token"),localStorage.removeItem("accessToken"),m("/auth/login")};return e.jsxs("div",{className:"",children:[h&&e.jsx("div",{children:e.jsx("div",{className:"flex relative",children:e.jsx("div",{className:"flex relative",children:e.jsx("div",{className:"fixed z-10 ",children:e.jsxs("div",{className:` ${a?"w-full":"w-[4rem]"} flex flex-col justify-between relative h-screen py-4 px-2 border-r-[1px] border-gray-200 duration-300 z-20 bg-white`,children:[e.jsxs("div",{className:"",children:[e.jsxs("div",{children:[e.jsx("img",{src:S,className:`absolute cursor-pointer -right-3 top-14 w-7 bg-white
                                                border-[1px] border-gray-300 z-20 rounded-full  ${!a&&"rotate-180"}`,onClick:n}),e.jsx(i,{to:"/admin/dashboard/landlord",className:"flex gap-x-4 items-center",children:e.jsx("h1",{className:`text-slate-600 origin-left font-medium text-xl duration-200 ${!a&&"scale-0"}`,children:e.jsx("div",{className:" text-start flex justify-start mx-auto text-primary cursor-pointer",children:e.jsx(i,{to:"/",className:"",children:e.jsx("img",{alt:"",src:j,className:"text-[1px] w-32 h-16 cursor-pointer"})})})})})]}),e.jsx("div",{className:"flex justify-between flex-col h-full ",children:e.jsx("ul",{className:"pt-6",children:k.map((r,u)=>e.jsx(i,{className:"",to:r.to,children:e.jsx("div",{onMouseOver:()=>{r.title,x(r.title)},className:`flex rounded-md p-2 cursor-pointer  text-slate-700 text-sm items-center gap-x-4 
                                                            ${r.gap?"mt-4":"mt-2"} 
                                                            ${r.show===!0?" hover:bg-third hover:text-white":""} `,children:e.jsx("li",{className:"flex flex-row w-full",children:e.jsxs("span",{className:"flex justify-between w-full",children:[e.jsxs("span",{className:"flex flex-row",children:[e.jsx("span",{className:"text-lg",children:r.src}),e.jsx("span",{className:`${!a&&"hidden"} ml-2 origin-left duration-200 font-medium`,children:r.title})]}),e.jsx("span",{className:` ${a?"flex":"hidden"} ml-4 flex justify-center items-center`,children:r.arrow?e.jsx(F,{}):""})]})},u)})},u))})})]}),e.jsx("div",{children:e.jsxs("button",{onClick:f,className:"flex flex-row items-center cursor-pointer",children:[e.jsx("span",{className:"text-lg",children:e.jsx(v,{})}),e.jsx("span",{className:`${!a&&"hidden"} ml-2 origin-left duration-200 font-medium`,children:"Logout"})]})})]})})})})}),!h&&e.jsxs("div",{className:"block",children:[e.jsx(T,{OpenScreen:n}),e.jsx("div",{className:"flex ",children:e.jsxs("div",{className:"relative z-40 ",children:[e.jsx("div",{onClick:n,className:`
                                fixed left-0 top-0 bg-slate-800 bg-opacity-75 md:bg-opacity-50 w-full min-h-screen
                                ${a?"left-0":"left-[-100%]"}
                            `}),e.jsx("div",{className:"relative",children:e.jsx("div",{className:" justify-between flex-col bg-white relative flex",children:e.jsx("div",{className:"block relative",children:e.jsxs("div",{className:`
                                            bg-white fixed h-fit top-[0px] overflow-y-auto bottom-0 py-10 px-4 md:w-[450px] w-fit
                                                duration-500 ${a?"left-0":"left-[-100%]"}
                                            `,style:{height:"100%",flex:"1",padding:"1rem 1.1rem 1rem 1rem",overflowY:"auto",overflowX:"hidden"},children:[e.jsx(i,{to:"/admin/dashboard/landlord",className:"flex gap-x-4 items-center",children:e.jsx("h1",{className:`text-slate-600 origin-left font-medium text-xl duration-200 ${!a&&"scale-0"}`,children:e.jsx("div",{className:" text-start flex justify-start mx-auto text-primary cursor-pointer",children:e.jsx(i,{to:"/",className:"",children:e.jsx("img",{alt:"",src:j,className:"text-[1px] w-32 h-16 cursor-pointer"})})})})}),e.jsxs("div",{className:"flex justify-between flex-col mt-10 h-full",children:[e.jsx(e.Fragment,{children:e.jsx("div",{className:"overflow-x-auto md:w-full sm:w-full",children:e.jsx("div",{className:`${l===s.nameOne||s.nameTwo||s.nameThree,""} px-1 text-left md:cursor-pointer group py-0`,children:e.jsxs("div",{children:[e.jsx(i,{to:"/admin/dashboard/landlord",children:e.jsx("div",{onClick:()=>{l!==s.nameFour?t(s.nameFour):t(""),d("")},className:`${l===s.nameFour?" bg-third":""} mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 w-full`,children:e.jsx("span",{className:"flex justify-between w-full ",children:e.jsxs("span",{className:"flex flex-row",children:[e.jsx("span",{className:"text-lg",children:e.jsx(g,{})}),e.jsx("span",{className:`${!a&&"hidden"} ml-2 origin-left duration-200 font-medium`,children:s.nameFour})]})})})}),e.jsx(i,{to:"/admin/dashboard/listing",children:e.jsx("div",{onClick:()=>{l!==s.nameSix?t(s.nameSix):t(""),d("")},className:`${l===s.nameSix?"bg-third":""} mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 w-full`,children:e.jsx("span",{className:"flex justify-between w-full ",children:e.jsxs("span",{className:"flex flex-row",children:[e.jsx("span",{className:"text-lg",children:e.jsx(y,{})}),e.jsx("span",{className:`${!a&&"hidden"} ml-2 origin-left duration-200 font-medium`,children:s.nameSix})]})})})}),e.jsx(i,{to:"/admin/dashboard/landlord",children:e.jsx("div",{onClick:()=>{l!==s.nameFive?t(s.nameFive):t(""),d("")},className:`${l===s.nameFive?"bg-third":""} mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4  w-full`,children:e.jsx("span",{className:"flex justify-between w-full ",children:e.jsxs("span",{className:"flex flex-row",children:[e.jsx("span",{className:"text-lg",children:e.jsx(b,{})}),e.jsx("span",{className:`${!a&&"hidden"} ml-2 origin-left duration-200 font-medium`,children:s.nameFive})]})})})}),e.jsx(i,{to:"/admin/dashboard/landlord",children:e.jsx("div",{onClick:()=>{l!==s.nameEight?t(s.nameEight):t(""),d("")},className:`${l===s.nameEight?"bg-third":""} mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 w-full`,children:e.jsx("span",{className:"flex justify-between w-full ",children:e.jsxs("span",{className:"flex flex-row",children:[e.jsx("span",{className:"text-lg",children:e.jsx(N,{})}),e.jsx("span",{className:`${!a&&"hidden"} ml-2 origin-left duration-200 font-medium`,children:s.nameEight})]})})})}),e.jsx(i,{to:"/admin/dashboard/landlord",children:e.jsx("div",{onClick:()=>{l!==s.nameTen?t(s.nameTen):t(""),d("")},className:`${l===s.nameTen?"bg-third":""} mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 w-full`,children:e.jsx("span",{className:"flex justify-between w-full ",children:e.jsxs("span",{className:"flex flex-row",children:[e.jsx("span",{className:"text-lg",children:e.jsx(w,{})}),e.jsx("span",{className:`${!a&&"hidden"} ml-2 origin-left duration-200 font-medium`,children:s.nameTen})]})})})})]})})})}),e.jsx("div",{children:e.jsxs("button",{onClick:f,className:"px-1 flex flex-row items-center cursor-pointer mr-4 rounded-md p-2   text-slate-700 text-sm  gap-x-4 w-full",children:[e.jsx("span",{className:"text-lg",children:e.jsx(v,{})}),e.jsx("span",{className:`${!a&&"hidden"} ml-2 origin-left duration-200 font-medium`,children:"Logout"})]})})]})]})})})})]})})]})]})},Y=()=>{const[n,a]=o.useState(!1),m=$("(min-width: 1024px)"),c=()=>{a(!n)};return e.jsxs("div",{className:"",children:[e.jsx(C,{OpenScreen:c,open:n}),m?e.jsx("div",{className:"flex",children:e.jsx("div",{className:`${n?"ml-[13.2rem]":"ml-[4.2rem]"} relative flex flex-col w-full duration-200`,children:e.jsx(p,{})})}):e.jsx("div",{className:"flex ",children:e.jsx("div",{className:"relative flex flex-col w-full duration-200",children:e.jsx(p,{})})})]})};export{Y as default};
