"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[7900],{8731:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>k});var s=r(5893),c=r(1151);const i={},o="VPIC Kokkos",t={id:"jarvis/jarvis-cd/packages/vpic-kokkos",title:"VPIC Kokkos",description:"Installation",source:"@site/docs/05-jarvis/02-jarvis-cd/08-packages/vpic-kokkos.md",sourceDirName:"05-jarvis/02-jarvis-cd/08-packages",slug:"/jarvis/jarvis-cd/packages/vpic-kokkos",permalink:"/docs/jarvis/jarvis-cd/packages/vpic-kokkos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenFOAM",permalink:"/docs/jarvis/jarvis-cd/packages/openfoam"},next:{title:"VPIC",permalink:"/docs/jarvis/jarvis-cd/packages/vpic"}},a={},k=[{value:"Installation",id:"installation",level:2},{value:"The generic example",id:"the-generic-example",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vpic-kokkos",children:"VPIC Kokkos"}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'scspkg create vpic_kokkos\r\nscspkg env prepend vpic_kokkos CPATH ${PWD}/include/kokkos\r\ncd $(scspkg pkg root vpic_kokkos)/..\r\nrm -rf vpic_kokkos\r\ngit clone --recursive git@github.com:lanl/vpic-kokkos.git vpic_kokkos\r\ncd $(scspkg pkg root vpic_kokkos)\r\ngit submodule update --init --recursive\r\nmkdir build\r\ncd build\r\ncmake ../ \\\r\n-DKokkos_ENABLE_OPENMP=ON \\\r\n-DENABLE_KOKKOS_CUDA=OFF \\\r\n-DBUILD_INTERNAL_KOKKOS=ON \\\r\n-DCMAKE_CXX_FLAGS="-g -O2 -rdynamic" \\\r\n-DCMAKE_INSTALL_PREFIX=$(scspkg pkg root vpic_kokkos)\r\nmake -j8\r\nmake install\r\nmodule load vpic_kokkos\n'})}),"\n",(0,s.jsx)(n.h2,{id:"the-generic-example",children:"The generic example"}),"\n",(0,s.jsx)(n.p,{children:"Compile:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"vpic $(scspkg pkg root vpic_kokkos)/sample/generic\r\nvpic $(scspkg pkg root vpic_kokkos)/test/integrated/energy_comparison/weibel.deck\r\nvpic $(scspkg pkg root vpic_kokkos)/test/integrated/to_completion/dump.deck\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mkdir mytests\r\ncd mytests\r\n\r\nmpirun -n 2 ../generic.Linux\r\nmpirun -n 2 ../weibel.deck.Linux\r\nmpirun -n 2 ../dump.deck.Linux\r\ncd ../\n"})}),"\n",(0,s.jsx)(n.p,{children:"NOTE: many of the sample decks don't work. The unit tests work, but aren't\r\nreally physically accurate and are just unit tests."})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>o});var s=r(7294);const c={},i=s.createContext(c);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);