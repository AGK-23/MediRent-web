import{j as e,t as P}from"./index-BWoieiwW.js";import{r as c}from"./react-apexcharts-chunk-Cs4qZfgr.js";import{S as F}from"./Spinner-C7OuFHtl.js";import"./react-datepicker-chunk-B8QU4_4d.js";const R=({active:d,setActive:x,avatars:a,setAvatars:o,fileList:i,setFileList:m,handleFilesUpload:h,imageLoading:n})=>{const[k,p]=c.useState(""),[C,u]=c.useState(0),f=r=>{const s=r.target.files,N=4,v=2*1024*1024;s&&Array.from(s).forEach(t=>{if(a.length<N)if(t.size>v)alert(`File ${t.name} is too large. Please select a file smaller than 2MB.`),p(`File ${t.name} is too large. Please select a file smaller than 2MB.`);else{const y=URL.createObjectURL(t),w=t;m(l=>[...l,w]),o(l=>[...l,y]),u(l=>l+1)}else alert("You can only upload a maximum of 4 photos.")})},j=async()=>{if(a.length===0&&i.length===0){P.warning("Please fill in all required fields.");return}console.log("all the image details..",n);try{await h(i)}catch{}},g=()=>{j(),console.log("all the avatars..",a,"all the files..",i)},b=()=>{x(d-1)};return e.jsx("div",{children:e.jsxs("div",{className:"my-10",children:[e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"text-center my-10 font-base md:text-3xl xs:text-xl",children:" PHOTOS"})}),e.jsxs("h1",{className:"md:text-base xs:text-sm text-center text-black font-mormal",children:["Your current package allows you to upload up to  ",e.jsx("b",{className:"font-bold",children:"4 pictures."})]}),e.jsxs("div",{className:"grid justify-between items-center py-2 md:grid-cols-1 xs:grid-cols-1 xs:gap-5 lg:gap-5",children:[e.jsxs("div",{className:"",children:[e.jsx("label",{htmlFor:"avatar",className:"block text-sm font-medium text-gray-700"}),e.jsxs("label",{htmlFor:"file-input",className:"border-[2px] border-dashed px-10 py-10 mt-8 flex justify-center items-center border-third",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"my-4 text-2xl text-black font-semibold text-center",children:"Drag & Drop Files here"}),e.jsx("span",{className:"px-5 py-3 bg-blue-900 text-white rounded-lg bg-third cursor-pointer",children:e.jsx("div",{className:"text-center text-white md:text-base xs:text-xs",children:"Open the file browser"})})]}),e.jsx("span",{className:"",children:e.jsx("input",{type:"file",name:"avatar",id:"file-input",accept:".jpg,.jpeg,.png",onChange:f,className:"sr-only",multiple:!0})})]})]}),e.jsx("div",{className:"grid md:grid-cols-5 xs:grid-cols-1 gap-2",children:a.map((r,s)=>e.jsx("div",{className:"flex items-center h-full bg-white rounded overflow-hidden p-2 border-dashed border-2 border-gray-300",children:e.jsx("div",{className:"flex flex-row",children:e.jsx("span",{className:"inline-block h-full w-full rounded overflow-hidden p-2",children:e.jsx("img",{src:r,alt:`avatar-${s}`,className:"h-full w-full object-cover rounded"})})})},s))})]}),e.jsxs("div",{className:"flex justify-between pb-10",children:[e.jsx("div",{className:"flex justify-end z-10 relative mt-4  mr-3",children:e.jsx("button",{onClick:g,className:"flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-4",disabled:n,children:n?e.jsx("div",{className:"flex items-center px-6",children:e.jsx("div",{children:e.jsx("img",{alt:"",src:F,className:"text-[1px] text-white"})})}):e.jsx("span",{className:"",children:"Next"})})}),e.jsx("div",{className:"flex justify-end z-10 relative mt-4 ",children:e.jsx("button",{onClick:b,className:"flex justify-end z-10 relative bg-rose-500 text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10",children:e.jsx("span",{className:"",children:"Previous"})})})]})]})})};export{R as default};
