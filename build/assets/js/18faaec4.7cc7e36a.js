"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[463],{286:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=i(5893),s=i(1151);const a={},o="Building a Package",l={id:"jarvis/jarvis-cd/building-package",title:"Building a Package",description:"This guide documents how to extend the set of applications that Jarvis is",source:"@site/docs/05-jarvis/02-jarvis-cd/06-building-package.md",sourceDirName:"05-jarvis/02-jarvis-cd",slug:"/jarvis/jarvis-cd/building-package",permalink:"/docs/jarvis/jarvis-cd/building-package",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Repos",permalink:"/docs/jarvis/jarvis-cd/custom-repos"},next:{title:"Python API",permalink:"/docs/jarvis/jarvis-cd/python-api"}},t={},c=[{value:"Bootstrap a <code>Pkg</code>",id:"bootstrap-a-pkg",level:2},{value:"The <code>Pkg</code> Base Class",id:"the-pkg-base-class",level:2},{value:"<code>pkg_id</code> and <code>global_id</code>",id:"pkg_id-and-global_id",level:3},{value:"<code>pkg_dir</code>",id:"pkg_dir",level:3},{value:"<code>shared_dir</code>",id:"shared_dir",level:3},{value:"<code>private_dir</code>",id:"private_dir",level:3},{value:"<code>env</code>",id:"env",level:3},{value:"<code>config</code>",id:"config",level:3},{value:"<code>jarvis</code>",id:"jarvis",level:3},{value:"<code>hostfile</code>",id:"hostfile",level:3},{value:"<code>resource_graph</code>",id:"resource_graph",level:3},{value:"Building a Service or Application",id:"building-a-service-or-application",level:2},{value:"<code>_init</code>",id:"_init",level:3},{value:"<code>_configure_menu</code>",id:"_configure_menu",level:3},{value:"<code>configure</code>",id:"configure",level:3},{value:"<code>start</code>",id:"start",level:3},{value:"<code>stop</code>",id:"stop",level:3},{value:"<code>clean</code>",id:"clean",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"Building an Interceptor",id:"building-an-interceptor",level:2},{value:"<code>configure</code>",id:"configure-1",level:3},{value:"<code>modify_env</code>",id:"modify_env",level:3},{value:"A Note on <code>jarvis-util</code>",id:"a-note-on-jarvis-util",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"building-a-package",children:"Building a Package"}),"\n",(0,r.jsx)(n.p,{children:"This guide documents how to extend the set of applications that Jarvis is\r\nable to deploy. We refer to these as packages (pkgs for short)."}),"\n",(0,r.jsxs)(n.h2,{id:"bootstrap-a-pkg",children:["Bootstrap a ",(0,r.jsx)(n.code,{children:"Pkg"})]}),"\n",(0,r.jsx)(n.p,{children:"You can bootstrap a pkg to the primary repo as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"jarvis repo create [name] [pkg_class]\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pkg_class"})," can be one of:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"service"}),"\n",(0,r.jsx)(n.li,{children:"app"}),"\n",(0,r.jsx)(n.li,{children:"interceptor"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"jarvis repo create hermes service\r\njarvis repo create hermes_mpiio interceptor\r\njarvis repo create gray_scott app\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can then create an example pipeline as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline create test\r\njarvis pipeline append hermes\r\njarvis pipeline append hermes_mpiio\r\njarvis pipeline append gray_scott\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is an example of a pipeline which will deploy Hermes, the Hermes MPI-IO\r\ninterceptor, and Gray Scott, which is an application which performs I/O using\r\nMPI."}),"\n",(0,r.jsxs)(n.h2,{id:"the-pkg-base-class",children:["The ",(0,r.jsx)(n.code,{children:"Pkg"})," Base Class"]}),"\n",(0,r.jsx)(n.p,{children:"This section will go over the variables and methods common across all Pkg types.\r\nThese variables will be initialized automatically."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Pkg:\r\n  def __init__(self):\r\n    self.pkg_dir = '...'\r\n    self.shared_dir = '...'\r\n    self.private_dir = '...'\r\n    self.env = {}\r\n    self.config = {}\r\n    self.global_id = '...'\r\n    self.pkg_id = '...'\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"pkg_id-and-global_id",children:[(0,r.jsx)(n.code,{children:"pkg_id"})," and ",(0,r.jsx)(n.code,{children:"global_id"})]}),"\n",(0,r.jsx)(n.p,{children:"The Global ID (global_id) is the globally unique ID of the a package in all of\r\njarvis. It is a dot-separated string. Typically, the format is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"{pipeline_id}.{pkg_id}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The Package ID (pkg_id) is the unique ID of the package relative to a pipeline.\r\nThis is a simple string (no dots)."}),"\n",(0,r.jsx)(n.p,{children:"For example, from section 5.1, we appended 3 packages: hermes, hermes_mpiio, and\r\ngray_scott. hermes, hermes_mpiio, and gray_scott are also the pkg_ids. The\r\nglobal_ids would be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"test.hermes\r\ntest.hermes_mpiio\r\ntest.gray_scott\n"})}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.global_id\r\nself.pkg_id\n"})}),"\n",(0,r.jsx)(n.h3,{id:"pkg_dir",children:(0,r.jsx)(n.code,{children:"pkg_dir"})}),"\n",(0,r.jsxs)(n.p,{children:["The package directory is the location of the class python file on the filesystem.\r\nFor example, when calling ",(0,r.jsx)(n.code,{children:"jarvis repo create hermes"}),", the directory\r\ncreated by this command will be the pkg_dir."]}),"\n",(0,r.jsx)(n.p,{children:"One use case for the pkg_dir is for creating template configuration files.\r\nFor example, OrangeFS has a complex XML configuration which would be a pain\r\nto repeat in Python. One could include an OrangeFS XML config in their\r\npackage directory and commit as part of their Jarvis repo."}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.pkg_dir\n"})}),"\n",(0,r.jsx)(n.h3,{id:"shared_dir",children:(0,r.jsx)(n.code,{children:"shared_dir"})}),"\n",(0,r.jsx)(n.p,{children:"The shared_dir is a directory stored on a filesystem common across all nodes\r\nin the hostfile. Each node has the same view of data in the shared_dir. The\r\nshared_dir contains data for the specific pkg to avoid conflicts in\r\na pipeline with multiple pkgs."}),"\n",(0,r.jsx)(n.p,{children:"For example, when deploying Hermes, we assume that each node has the Hermes\r\nconfiguration file. Each node is expected to have the same configuration file.\r\nWe store the Hermes config in the shared_dir."}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.shared_dir\n"})}),"\n",(0,r.jsx)(n.h3,{id:"private_dir",children:(0,r.jsx)(n.code,{children:"private_dir"})}),"\n",(0,r.jsx)(n.p,{children:"This is a directory which is common across all nodes, but nodes do not\r\nhave the same view of data."}),"\n",(0,r.jsx)(n.p,{children:"For example, when deploying OrangeFS, it is required that each node has a file\r\ncalled pvfs2tab. It essentially stores the protocol + address that OrangeFS\r\nuses for networking. However, the content of this file is different for\r\neach node. Storing it in the shared_dir would be incorrect. This is why we\r\nneed the private_dir."}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.private_dir\n"})}),"\n",(0,r.jsx)(n.h3,{id:"env",children:(0,r.jsx)(n.code,{children:"env"})}),"\n",(0,r.jsx)(n.p,{children:"Jarvis pipelines store the current environment in a YAML file, which represents\r\na python dictionary. The key is the environment variable name (string) and the\r\nvalue is the intended meaning of the variable. There is a single environment\r\nused for the entire pipeline. Each pipeline stores its own environment to avoid\r\nconflict."}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.env['VAR_NAME']\n"})}),"\n",(0,r.jsx)(n.p,{children:"Environments can be modified using various helper functions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.track_env(env_track_dict)\r\nself.prepend_env(env_name, val)\r\nself.setenv(env_name, val)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Viewing the env YAML file for the current pipeline from the CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat `jarvis path`/env.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"config",children:(0,r.jsx)(n.code,{children:"config"})}),"\n",(0,r.jsxs)(n.p,{children:["The Jarvis configuration is stored in ",(0,r.jsx)(n.code,{children:"{pkg_dir}/{pkg_id}.yaml"}),".\r\nUnlike the environment dict, this stores variables that are specific to\r\nthe package. They are not global to the pipeline."]}),"\n",(0,r.jsx)(n.p,{children:"For example, OrangeFS and Hermes need to know the desired port number and\r\nRPC protocol. This information is specific to the program, not the entire\r\npipeline."}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.config['VAR_NAME']\n"})}),"\n",(0,r.jsx)(n.h3,{id:"jarvis",children:(0,r.jsx)(n.code,{children:"jarvis"})}),"\n",(0,r.jsx)(n.p,{children:"The Jarvis CD configuration manager stores various properties global to\r\nall of Jarvis. The most important information is the hostfile and resource_graph,\r\ndiscussed in the next sections."}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.jarvis\n"})}),"\n",(0,r.jsx)(n.h3,{id:"hostfile",children:(0,r.jsx)(n.code,{children:"hostfile"})}),"\n",(0,r.jsxs)(n.p,{children:["The hostfile contains the set of all hosts that Jarvis has access to.\r\nThe hostfile format is documented ",(0,r.jsx)(n.a,{href:"https://github.com/scs-lab/jarvis-util/wiki/4.-Hostfile",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.jarvis.hostfile\n"})}),"\n",(0,r.jsx)(n.h3,{id:"resource_graph",children:(0,r.jsx)(n.code,{children:"resource_graph"})}),"\n",(0,r.jsx)(n.p,{children:"The resource graph can be queried to get storage and networking information\r\nfor storing large volumes of data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"self.jarvis.resource_graph\n"})}),"\n",(0,r.jsx)(n.h2,{id:"building-a-service-or-application",children:"Building a Service or Application"}),"\n",(0,r.jsx)(n.p,{children:"Services and Applications implement the same interface, but are logically\r\nslightly different. A service is long-running and would typically require\r\nthe users to manually stop it. Applications stop automatically when it\r\nfinishes doing what it's doing. Jarvis can deploy services alongside\r\napplications to avoid the manual stop when benchmarking."}),"\n",(0,r.jsx)(n.h3,{id:"_init",children:(0,r.jsx)(n.code,{children:"_init"})}),"\n",(0,r.jsxs)(n.p,{children:["The Jarvis constructor (",(0,r.jsx)(n.code,{children:"_init"}),") is used to initialize global variables.\r\nDon't assume that self.config is initialized.\r\nThis is to provide an overview of the parameters of this class.\r\nDefault values should almost always be None."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def _init(self):\r\n  self.gray_scott_path = None\n"})}),"\n",(0,r.jsx)(n.h3,{id:"_configure_menu",children:(0,r.jsx)(n.code,{children:"_configure_menu"})}),"\n",(0,r.jsx)(n.p,{children:"The function defines the set of command line options that the user can set.\r\nAn example configure menu is below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def _configure_menu(self):\r\n    \"\"\"\r\n    Create a CLI menu for the configurator method.\r\n    For thorough documentation of these parameters, view:\r\n    https://github.com/scs-lab/jarvis-util/wiki/3.-Argument-Parsing\r\n\r\n    :return: List(dict)\r\n    \"\"\"\r\n    return [\r\n        {\r\n            'name': 'port',\r\n            'msg': 'The port to listen for data on',\r\n            'type': int,\r\n            'default': 8080\r\n        }\r\n    ]\n"})}),"\n",(0,r.jsx)(n.p,{children:"This function is called whenever configuring a package. For example,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"jarvis pkg configure hermes --sleep=10 --port=25\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will configure hermes to sleep for 10 seconds after launching to give enough\r\ntime to fully start Hermes. Sleep is apart of all configure menus by default."}),"\n",(0,r.jsxs)(n.p,{children:["The format of the output dict is documented in more detail\r\n",(0,r.jsx)(n.a,{href:"https://github.com/scs-lab/jarvis-util/wiki/3.-Argument-Parsing",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"configure",children:(0,r.jsx)(n.code,{children:"configure"})}),"\n",(0,r.jsx)(n.p,{children:"It takes as input a\r\ndictionary. The keys of this dict are determined from _configure_menu function\r\noutput. It is responsible for updating the self.config variable appropriately\r\nand generating the application-specific configuration files."}),"\n",(0,r.jsx)(n.p,{children:"Below is an example for Hermes. This example takes as input the port option,\r\nmodifies the hermes_server dict, and then stores the dict in a YAML file\r\nin the shared directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def configure(self, **kwargs):\r\n    \"\"\"\r\n    Converts the Jarvis configuration to application-specific configuration.\r\n    E.g., OrangeFS produces an orangefs.xml file.\r\n\r\n    :param config: The human-readable jarvis YAML configuration for the\r\n    application.\r\n    :return: None\r\n    \"\"\"\r\n    self.update_config(kwargs, rebuild=False)\r\n    hermes_server_conf = {\r\n      'port': self.config['port']\r\n    }\r\n    YamlFile(f'{self.shared_dir}/hermes_server_yaml').save(hermes_server_conf)\n"})}),"\n",(0,r.jsx)(n.p,{children:"This function is called whenever configuring a packge. Specifically, this is\r\ncalled immediately after _configure_menu. For example,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"jarvis pkg configure hermes --sleep=10 --port=25\n"})}),"\n",(0,r.jsx)(n.p,{children:"will make the kwargs dict be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"{\r\n  'sleep': 10,\r\n  'port': 25\r\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"start",children:(0,r.jsx)(n.code,{children:"start"})}),"\n",(0,r.jsxs)(n.p,{children:["The start function is called during ",(0,r.jsx)(n.code,{children:"jarvis pipeline run"})," and ",(0,r.jsx)(n.code,{children:"jarvis pipeline start"}),".\r\nThis function should execute the program itself."]}),"\n",(0,r.jsx)(n.p,{children:"Below is an example for Hermes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def start(self):\r\n    \"\"\"\r\n    Launch an application. E.g., OrangeFS will launch the servers, clients,\r\n    and metadata services on all necessary pkgs.\r\n\r\n    :return: None\r\n    \"\"\"\r\n    self.daemon_pkg = Exec('hermes_daemon',\r\n                            PsshExecInfo(hostfile=self.jarvis.hostfile,\r\n                                         env=self.env,\r\n                                         exec_async=True))\r\n    time.sleep(self.config['sleep'])\r\n    print('Done sleeping')\n"})}),"\n",(0,r.jsx)(n.h3,{id:"stop",children:(0,r.jsx)(n.code,{children:"stop"})}),"\n",(0,r.jsxs)(n.p,{children:["The stop function is called during ",(0,r.jsx)(n.code,{children:"jarvis pipeline run"})," and ",(0,r.jsx)(n.code,{children:"jarvis pipeline stop"}),".\r\nThis function should terminate the program."]}),"\n",(0,r.jsx)(n.p,{children:"Below is an example for Hermes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def stop(self):\r\n    """\r\n    Stop a running application. E.g., OrangeFS will terminate the servers,\r\n    clients, and metadata services.\r\n\r\n    :return: None\r\n    """\r\n    Exec(\'finalize_hermes\',\r\n         PsshExecInfo(hostfile=self.jarvis.hostfile,\r\n                      env=self.env))\r\n    if self.daemon_pkg is not None:\r\n        self.daemon_pkg.wait()\r\n    Kill(\'hermes_daemon\',\r\n         PsshExecInfo(hostfile=self.jarvis.hostfile,\r\n                      env=self.env))\n'})}),"\n",(0,r.jsx)(n.p,{children:"This is not typically implemented for Applications, but it is for Services."}),"\n",(0,r.jsx)(n.h3,{id:"clean",children:(0,r.jsx)(n.code,{children:"clean"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"clean"})," function is called during ",(0,r.jsx)(n.code,{children:"jarvis pipeline clean"}),".\r\nIt clears all intermediate data produced by a pipeline."]}),"\n",(0,r.jsx)(n.p,{children:"Below is the prototype"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def clean(self):\r\n    """\r\n    Destroy all data for an application. E.g., OrangeFS will delete all\r\n    metadata and data directories in addition to the orangefs.xml file.\r\n\r\n    :return: None\r\n    """\r\n    pass\n'})}),"\n",(0,r.jsx)(n.h3,{id:"status",children:(0,r.jsx)(n.code,{children:"status"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"status"})," function is called during ",(0,r.jsx)(n.code,{children:"jarvis pipeline status"}),"\r\nIt determines whether or not a service is running. This is not typically\r\nimplemented for Applications, but it is for Services."]}),"\n",(0,r.jsx)(n.h2,{id:"building-an-interceptor",children:"Building an Interceptor"}),"\n",(0,r.jsx)(n.p,{children:"Interceptors are used to modify environment variables to route system and library\r\ncalls to new functions."}),"\n",(0,r.jsxs)(n.p,{children:["Interceptors have a slightly different interface -- they only have:\r\n",(0,r.jsx)(n.code,{children:"_init"}),", ",(0,r.jsx)(n.code,{children:"_configure_menu"}),", ",(0,r.jsx)(n.code,{children:"configure"}),", and ",(0,r.jsx)(n.code,{children:"modify_env"}),". The only new function\r\nhere is modify_env. The others were defined in the previous section and behave\r\nthe exact same way."]}),"\n",(0,r.jsx)(n.h3,{id:"configure-1",children:(0,r.jsx)(n.code,{children:"configure"})}),"\n",(0,r.jsx)(n.p,{children:"Configuring an interceptor tends to be a little different. The interceptors\r\nare not typically responsible for generating configuration files like the\r\napplications and services do. These typically are responsible solely for\r\nmodifying the environment."}),"\n",(0,r.jsx)(n.p,{children:"Below, we show an example of configure for the Hermes MPI I/O interceptor:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def configure(self, **kwargs):\r\n    \"\"\"\r\n    Converts the Jarvis configuration to application-specific configuration.\r\n    E.g., OrangeFS produces an orangefs.xml file.\r\n\r\n    :param kwargs: Configuration parameters for this pkg.\r\n    :return: None\r\n    \"\"\"\r\n    self.update_config(kwargs, rebuild=False)\r\n    self.config['HERMES_MPIIO'] = self.find_library('hermes_mpiio')\r\n    if self.config['HERMES_MPIIO'] is None:\r\n        raise Exception('Could not find hermes_mpiio')\r\n    print(f'Found libhermes_mpiio.so at {self.config[\"HERMES_MPIIO\"]}')\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here we use self.find_library() to check if we can find the shared library\r\nhermes_mpiio in the system paths. This function introspects LD_LIBRARY_PATH\r\nand determines if hermes_mpiio is in the path. It saves the path in the pkg\r\nconfiguration (self.config)."}),"\n",(0,r.jsx)(n.h3,{id:"modify_env",children:(0,r.jsx)(n.code,{children:"modify_env"})}),"\n",(0,r.jsx)(n.p,{children:"Below is an example of the MPI I/O interceptor for Hermes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def modify_env(self):\r\n    """\r\n    Modify the jarvis environment.\r\n\r\n    :return: None\r\n    """\r\n    self.prepend_env(\'LD_PRELOAD\', self.config[\'HERMES_MPIIO\'])\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"a-note-on-jarvis-util",children:["A Note on ",(0,r.jsx)(n.code,{children:"jarvis-util"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"jarvis-cd"})," aims to provide structure to storing configuration files for simplifying\r\ncomplex benchmarks."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"jarvis-util"})," is primarily responsible for handling program execution. This\r\nincludes things like executing MPI and PSSH in Python. This is where the\r\n",(0,r.jsx)(n.code,{children:"Exec"})," and ",(0,r.jsx)(n.code,{children:"PsshExecInfo"})," data structures come from. More information\r\non ",(0,r.jsx)(n.code,{children:"jarvis-util"})," can be found ",(0,r.jsx)(n.a,{href:"https://github.com/scs-lab/jarvis-util/wiki",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var r=i(7294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);