"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[392],{2851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(5893),i=n(1151);const a={},o="LD_PRELOAD",s={id:"hpc-tutorials/important-environment-variables/ld-preload",title:"LD_PRELOAD",description:"LD_PRELOAD is used by Linux to intercept functions in a program and replace their",source:"@site/docs/02-hpc-tutorials/03-important-environment-variables/ld-preload.md",sourceDirName:"02-hpc-tutorials/03-important-environment-variables",slug:"/hpc-tutorials/important-environment-variables/ld-preload",permalink:"/spcai/docs/hpc-tutorials/important-environment-variables/ld-preload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LD_LIBRARY_PATH",permalink:"/spcai/docs/hpc-tutorials/important-environment-variables/ld-library-path"},next:{title:"LIBRARY_PATH",permalink:"/spcai/docs/hpc-tutorials/important-environment-variables/library-path"}},c={},l=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"ld_preload",children:(0,r.jsx)(t.code,{children:"LD_PRELOAD"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"LD_PRELOAD"})," is used by Linux to intercept functions in a program and replace their\r\nimplementation with a custom implementation. One use case that comes up in HPC is\r\nthe interception of I/O interfaces such as POSIX and routing their I/O commands to\r\na custom filesystem."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"LD_PRELOAD"})," is organized as a colon-separated list."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'export LD_PRELOAD="/path1:/path2:/path3"\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"LD_PRELOAD"})," contains three paths in this example."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(7294);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);