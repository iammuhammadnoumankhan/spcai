"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[8858],{8012:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(5893),r=i(1151);const s={},l="Nyx",a={id:"jarvis/jarvis-cd/packages/nyx",title:"Nyx",description:"https://amrex-astro.github.io/Nyx/",source:"@site/docs/05-jarvis/02-jarvis-cd/08-packages/nyx.md",sourceDirName:"05-jarvis/02-jarvis-cd/08-packages",slug:"/jarvis/jarvis-cd/packages/nyx",permalink:"/docs/jarvis/jarvis-cd/packages/nyx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LAMMPS",permalink:"/docs/jarvis/jarvis-cd/packages/lammps"},next:{title:"OpenFOAM",permalink:"/docs/jarvis/jarvis-cd/packages/openfoam"}},o={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configure the &quot;inputs&quot; file under <strong>LyA</strong> directory",id:"configure-the-inputs-file-under-lya-directory",level:3},{value:"Run the Nyx Application",id:"run-the-nyx-application",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nyx",children:"Nyx"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://amrex-astro.github.io/Nyx/",children:"https://amrex-astro.github.io/Nyx/"})}),"\n",(0,t.jsx)(n.p,{children:"Nyx code solves equations of compressible hydrodynamics on an adaptive grid hierarchy coupled with an N-body treatment of dark matter. The gas dynamics in Nyx uses a finite volume methodology on a set of 3-D Eulerian grids; dark matter is represented as discrete particles moving under the influence of gravity. Particles are evolved via a particle-mesh method, using Cloud-in-Cell deposition/interpolation scheme. Both baryonic and dark matter contribute to the gravitational field. In addition, Nyx includes physics needed to accurately model the intergalactic medium: in optically thin limit and assuming ionization equilibrium, the code calculates heating and cooling processes of the primordial-composition gas in an ionizing ultraviolet background radiation field. Additional physics capabilities are under development"}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Dependencies: MPI and "parallel hdf5"'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install ARMex"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/AMReX-Codes/amrex.git\r\nmkdir amrex/build && cd amrex/build\r\ncmake .. -DAMReX_HDF5=ON -DAMReX_PARTICLES=ON -DAMReX_PIC=ON -DBUILD_SHARED_LIBS=ON -DCMAKE_INSTALL_PREFIX=$HOME/amrex/install\r\nmake -j 8\r\nmake install\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Install Nyx"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/AMReX-astro/Nyx.git\r\ncd Nyx\r\nmkdir build && cd build\r\ncmake .. -DCMAKE_PREFIX_PATH=$HOME/amrex/install/ -DAMReX_DIR=$HOME/amrex/install/Tools/CMake/ -DNyx_SINGLE_PRECISION_PARTICLES=OFF -DNyx_OMP=OFF\r\nmake -j 8\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:['The Nyx executable reads run-time information from an \u201cinputs\u201d file which you designate on the command line. Most executable directories have an "inputs" file. Nyx has several different executables. Here I only show how to run the ',(0,t.jsx)(n.strong,{children:"LyA"})," example."]}),"\n",(0,t.jsxs)(n.h3,{id:"configure-the-inputs-file-under-lya-directory",children:['Configure the "inputs" file under ',(0,t.jsx)(n.strong,{children:"LyA"})," directory"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["By default, Nyx doesn't output HDF5 files. To enable Nyx to write HDF5 files, adding ",(0,t.jsx)(n.code,{children:"nyx.write_hdf5 = 1"}),' to the "inputs" file. For example:']}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# ------------------  INPUTS TO MAIN PROGRAM  -------------------\r\nmax_step = 200\r\n\r\nnyx.ppm_type         = 1\r\nnyx.use_colglaz      = 0\r\nnyx.corner_coupling  = 1\r\nnyx.write_hdf5       = 1  # add this line\r\nnyx.strang_split     = 0\r\nnyx.sdc_split        = 1\r\nnyx.add_ext_src      = 0\r\nnyx.heat_cool_type   = 11\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"nyx.initial_z"})," and ",(0,t.jsx)(n.code,{children:"nyx.final_z"}),", z corresponds to time, but it is negative. ",(0,t.jsx)(n.code,{children:"nyx.initial_z"})," is larger than ",(0,t.jsx)(n.code,{children:"nyx.final_z"}),". For example:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nyx.initial_z = 190.0\r\nnyx.final_z = 170.0\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Nyx needs to initialize binary particles. I want it to read from a binary file. By default, there is a binary file ",(0,t.jsx)(n.code,{children:"64sssss_20mpc.nyx"})," in LyA directory. Here are some related parameters:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# >>>>>>>>>>>>>  PARTICLE INIT OPTIONS <<<<<<<<<<<<<<<<\r\nnyx.particle_init_type = BinaryFile\r\nnyx.binary_particle_file = 64sssss_20mpc.nyx\r\nparticles.nparts_per_read = 2097152\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note: If ",(0,t.jsx)(n.code,{children:"64sssss_20mpc.nyx"})," is located in a different directory, you need to use the absolute path of the file."]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:['Nyx will generate two kinds of files: \u201cplotfiles\u201d and \u201ccheckpoint\u201d files. The "plotfiles" are used for visualization and the "checkpoint" files for restarting the code. The "plotfiles" are written in AMReX plotfile binary format by default. You can tell Nyx to output HDF5 file by adding ',(0,t.jsx)(n.code,{children:"nyx.write_hdf5 = 1"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'3.1 Set "plotfiles" related parameters'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# PLOTFILES\r\namr.plot_files_output = 1\r\namr.plot_file       = /mnt/ssd/jye20/LyA_test/plt\r\namr.plot_int        = -1\r\nnyx.plot_z_values   = 188.0 184.0 182.0\r\n\r\namr.plot_vars        = density xmom ymom zmom rho_e Temp phi_grav\r\n#amr.derive_plot_vars = particle_mass_density particle_count\n"})}),"\n",(0,t.jsx)(n.p,{children:"amr.plot_files_output: This is set to 1 to enable plot files. If you don't want to output plot files, set it to 0."}),"\n",(0,t.jsxs)(n.p,{children:["amr.plot_file: This is the base name for the plotfile, e.g. plt. If you set it to be ",(0,t.jsx)(n.code,{children:"/mnt/ssd/jye20/LyA_test/plt"}),", ",(0,t.jsx)(n.code,{children:"/mnt/ssd/jye20/LyA_test"})," is the output directory."]}),"\n",(0,t.jsx)(n.p,{children:"nyx.plot_z_values: Specify a list of z values for which Nyx will save a snapshot."}),"\n",(0,t.jsx)(n.p,{children:"amr.plot_vars: Specify the name of state variables to include in plotfiles"}),"\n",(0,t.jsx)(n.p,{children:"amr.derive_plot_vars: Specify name of derived variables to include in plotfiles"}),"\n",(0,t.jsx)(n.p,{children:"3.2 Set checkpoint file parameters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# CHECKPOINT FILES\r\namr.checkpoint_files_output = 1\r\namr.check_file        = /mnt/ssd/jye20/LyA_test/chk\r\namr.check_int         = 100\r\namr.checkpoint_nfiles = 64\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Resolution related parameters"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"amr.n_cell           =  64  64  64\r\namr.max_grid_size    = 32\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Reference: ",(0,t.jsx)(n.a,{href:"https://amrex-astro.github.io/Nyx/docs_html/NyxInputs.html#examples-of-usage-2",children:"Nyx document"})]}),"\n",(0,t.jsx)(n.h2,{id:"run-the-nyx-application",children:"Run the Nyx Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Enter into the ",(0,t.jsx)(n.strong,{children:"LyA"})," executable directory"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./nyx_LyA ./inputs\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(7294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);