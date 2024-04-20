"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[6634],{6796:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var i=s(5893),a=s(1151);const l={},r="LAMMPS",t={id:"jarvis/jarvis-cd/packages/lammps",title:"LAMMPS",description:"Installation",source:"@site/docs/05-jarvis/02-jarvis-cd/08-packages/lammps.md",sourceDirName:"05-jarvis/02-jarvis-cd/08-packages",slug:"/jarvis/jarvis-cd/packages/lammps",permalink:"/docs/jarvis/jarvis-cd/packages/lammps",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gadget",permalink:"/docs/jarvis/jarvis-cd/packages/gadget4"},next:{title:"Nyx",permalink:"/docs/jarvis/jarvis-cd/packages/nyx"}},o={},d=[{value:"Installation",id:"installation",level:2},{value:"On Ares",id:"on-ares",level:2},{value:"Using spack",id:"using-spack",level:2},{value:"Building from source",id:"building-from-source",level:2},{value:"Building LAMMPS with ADIOS2",id:"building-lammps-with-adios2",level:3},{value:"Using CMake",id:"using-cmake",level:4},{value:"Usage",id:"usage",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"lammps",children:"LAMMPS"}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h2,{id:"on-ares",children:"On Ares"}),"\n",(0,i.jsx)(n.p,{children:"When you are on Ares, you should ideally find the lammps application already installed as a module. To see if there is a lammps module in ares run the below command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"module spider lammps\r\n#module -r spider '.*lammps*.'\n"})}),"\n",(0,i.jsx)(n.p,{children:"To load the module use. (Note that this loads the default lammps version)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"module load lammps\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-spack",children:"Using spack"}),"\n",(0,i.jsx)(n.p,{children:"You can view the lammps in list of provided packages in spack using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"spack list lammps\n"})}),"\n",(0,i.jsx)(n.p,{children:"To list the details of lammps(version, description, dependencies, etc.)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"spack info lammps\n"})}),"\n",(0,i.jsx)(n.p,{children:"To install lammps with adios2 dependency using spack"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"spack install lammps+adios\n"})}),"\n",(0,i.jsx)(n.h2,{id:"building-from-source",children:"Building from source"}),"\n",(0,i.jsx)(n.p,{children:"You can download the source and the documentation as a tarball"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"mkdir Build_lammps\r\ncd Build_lammps\r\nwget -c https://download.lammps.org/tars/lammps-stable.tar.gz\r\ntar -xzvf lammps*.tar.gz\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now change the directory to the LAMMPS distribution directory that just got uncompressed"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"cd /path/to/lammps \r\nmkdir build; cd build  # create and use a build directory\n"})}),"\n",(0,i.jsx)(n.h3,{id:"building-lammps-with-adios2",children:"Building LAMMPS with ADIOS2"}),"\n",(0,i.jsx)(n.h4,{id:"using-cmake",children:"Using CMake"}),"\n",(0,i.jsx)(n.p,{children:"We are going to install LAMMPS with ADIOS2 using CMake. Note that LAMMPS requires CMake version 3.10 or later. You can check your cmake version using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"cmake --version\n"})}),"\n",(0,i.jsx)(n.p,{children:"In order to build lammps with adios2, the adios2 library need to be on your system or be downloaded and built. Then, you need to tell LAMMPS where it is found on your system."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"# This can be done by providing the adios2 installation directory in PATH variable\r\nexport PATH=/path/of/adios2:$PATH\r\n#This is ADIOS2 installed path in my system: ~/spack/opt/spack/linux-ubuntu22.04-skylake/gcc-11.4.0/adios2-2.9.0-fsrkmnhkjp4ozmq5fsy2ryeaqcuuzhu\n"})}),"\n",(0,i.jsx)(n.p,{children:"One important thing to note here is that if you have ADIOS2 built either with or without MPI then the same has to be matched while building LAMMPS."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"#if ADIOS2 was built with MPI \r\ncmake ../cmake -D PKG_ADIOS=yes -D BUILD_MPI=yes  \r\n#if ADIOS2 was built without MPI then\r\n#cmake ../cmake -D PKG_ADIOS=yes -D BUILD_MPI=no\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now the build files would been written to your build folder.\r\nNow compile them using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"make \r\n#make -j N\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the compilation is successful, you should see a library ",(0,i.jsx)(n.code,{children:"liblammps.a"})," and the LAMMPS executable ",(0,i.jsx)(n.code,{children:"lmp"})," inside the build folder."]}),"\n",(0,i.jsx)(n.p,{children:"Now you can either use LAMMPS by running the executable using from this directory using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"./lmp\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or, you can install the LAMMPS executable into your system with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"make install #copies compiled files into installation location\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["In order to show the usage of lammps with adios2, we can use either ",(0,i.jsx)(n.code,{children:"dump atom/adios"})," or ",(0,i.jsx)(n.code,{children:"dump custom/adios"}),' commands.\r\nWhat these commands do is that these dump a snapshot of atom coordinates every N timesteps in ADIOS-bases "BP" file format, or using a different I/O solutions in adios to a stream that can be read on-line by another program.\r\nHere is the syntax for each:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"dump ID group-ID atom/adios N file.bp\r\ndump ID group-ID custom/adios N file.bp args\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Example usages:\r\nSave the below file as ",(0,i.jsx)(n.code,{children:"lj_fluid.in"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"# create a Lennard-Jones fluid\r\nunits lj\r\natom_style atomic\r\nlattice fcc 0.8442\r\nregion box block 0 20 0 20 0 20\r\ncreate_box 1 box\r\ncreate_atoms 1 box\r\nmass 1 1.0\r\nvelocity all create 1.44 87287 loop geom\r\npair_style lj/cut 2.5\r\npair_coeff 1 1 1.0 1.0 2.5\r\nneighbor 0.3 bin\r\nneigh_modify delay 0 every 20 check no\r\n\r\n# define a group of atoms\r\ngroup fluid type 1\r\n\r\n# dump atom coordinates every 100 timesteps to atoms.bp\r\ndump adios1 fluid atom/adios 100 atoms.bp\r\n\r\n# dump custom quantities every 50 timesteps to custom.bp\r\ndump adios2 fluid custom/adios 50 custom.bp id type x y z vx vy vz\r\n\r\n# run the simulation for 1000 timesteps\r\nrun 1000\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then run lammps by giving this input file as argument as shown:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-linux",children:"lmp -in lj_fluid.in\n"})}),"\n",(0,i.jsx)(n.p,{children:"If this is successful, you should see the below files in the current directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"custom.bp\r\natoms.bp\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that a file ",(0,i.jsx)(n.code,{children:"adios2_config.xml"})," with specific configuration settings is expected in the current working directory. If the file is not present, LAMMPS will create a minimal default file."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>r});var i=s(7294);const a={},l=i.createContext(a);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);