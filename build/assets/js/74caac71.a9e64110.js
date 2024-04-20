"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[3562],{1695:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=r(5893),s=r(1151);const t={},l="Buffer Organizer",o={id:"hermes/components/buffer-organizer",title:"Buffer Organizer",description:'The Buffer Organizer is the "corrector" half of our',source:"@site/docs/03-hermes/08-components/01-buffer-organizer.md",sourceDirName:"03-hermes/08-components",slug:"/hermes/components/buffer-organizer",permalink:"/spcai/docs/hermes/components/buffer-organizer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Programming",permalink:"/spcai/docs/hermes/programming"},next:{title:"Buffer Pool",permalink:"/spcai/docs/hermes/components/buffer-pool"}},c={},a=[{value:"Objectives",id:"objectives",level:2},{value:"Blob Scoring",id:"blob-scoring",level:2},{value:"Importance Score",id:"importance-score",level:3},{value:"Variables that might contribute to the importance score",id:"variables-that-might-contribute-to-the-importance-score",level:4},{value:"Access Score",id:"access-score",level:3},{value:"Variables that contribute to the access score",id:"variables-that-contribute-to-the-access-score",level:4},{value:"How the scores are used",id:"how-the-scores-are-used",level:3},{value:"Ideas",id:"ideas",level:2},{value:"Operations",id:"operations",level:2},{value:"Transfer",id:"transfer",level:3},{value:"Who can initiate Transfer tasks?",id:"who-can-initiate-transfer-tasks",level:4},{value:"Evict(size_t bytes, Targets[])",id:"evictsize_t-bytes-targets",level:3},{value:"Who can initiate Eviction tasks?",id:"who-can-initiate-eviction-tasks",level:4},{value:"Who translates an Eviction into a series of Transfers?",id:"who-translates-an-eviction-into-a-series-of-transfers",level:4},{value:"Single shared file pros",id:"single-shared-file-pros",level:4},{value:"File per rank pros",id:"file-per-rank-pros",level:4},{value:"File per node",id:"file-per-node",level:4},{value:"Triggers",id:"triggers",level:2},{value:"Periodic",id:"periodic",level:3},{value:"Client-triggered",id:"client-triggered",level:3},{value:"System-triggered",id:"system-triggered",level:3},{value:"Requirements for Queue implementation",id:"requirements-for-queue-implementation",level:3},{value:"Design Details",id:"design-details",level:2},{value:"BO RPC Server",id:"bo-rpc-server",level:3},{value:"Buffer Organizer",id:"buffer-organizer-1",level:3},{value:"Work Queues",id:"work-queues",level:4},{value:"Schedulers",id:"schedulers",level:4},{value:"Threads",id:"threads",level:4},{value:"Example Flows",id:"example-flows",level:2},{value:"Hot Put",id:"hot-put",level:3},{value:"BO Eviction Flow",id:"bo-eviction-flow",level:3},{value:"Ideas",id:"ideas-1",level:2},{value:"Experiments",id:"experiments",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"buffer-organizer",children:"Buffer Organizer"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Buffer Organizer"}),' is the "corrector" half of our\r\npredictor/corrector model. It attempts to correct sub-optimal DPE\r\nplacements by moving data among buffers.']}),"\n",(0,i.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Management of hierarchical buffering space","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data flushing"}),"\n",(0,i.jsx)(n.li,{children:"Read acceleration"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Manage data life cycle, or journey","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When is the blob in equilibrium?"}),"\n",(0,i.jsx)(n.li,{children:"How do we eliminate unnecessary data movement?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"blob-scoring",children:"Blob Scoring"}),"\n",(0,i.jsxs)(n.p,{children:["We attempt to meet the above objectives via a ",(0,i.jsx)(n.code,{children:"Blob"})," scoring system. Each ",(0,i.jsx)(n.code,{children:"Blob"})," has two different scores associated with it: the ",(0,i.jsx)(n.strong,{children:"importance score"})," and the ",(0,i.jsx)(n.strong,{children:"access score"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"importance-score",children:"Importance Score"}),"\n",(0,i.jsxs)(n.p,{children:["The importance score is a real number in the range [0, 1] where 0 represents a ",(0,i.jsx)(n.code,{children:"Blob"})," that is not important to the user (i.e., it will not be accessed) and 1 represents a ",(0,i.jsx)(n.code,{children:"Blob"})," that will be accessed either very frequently, very soon, or both."]}),"\n",(0,i.jsx)(n.h4,{id:"variables-that-might-contribute-to-the-importance-score",children:"Variables that might contribute to the importance score"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Blob Size"}),"\n",(0,i.jsx)(n.li,{children:"Blob Name"}),"\n",(0,i.jsx)(n.li,{children:"Recency of Blob access"}),"\n",(0,i.jsx)(n.li,{children:"Frequency of Blob access"}),"\n",(0,i.jsx)(n.li,{children:"User-supplied priority (this is only a hint, not a guarantee)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"access-score",children:"Access Score"}),"\n",(0,i.jsxs)(n.p,{children:["This is a real number in the range [0, 1] where 0 represents a ",(0,i.jsx)(n.code,{children:"Blob"})," with the slowest access time (i.e., all its ",(0,i.jsx)(n.code,{children:"Buffer"}),"s are in the slowest tier) and 1 represents a ",(0,i.jsx)(n.code,{children:"Blob"})," with the quickest access time (all the ",(0,i.jsx)(n.code,{children:"Buffer"}),"s are in the fastest tier)."]}),"\n",(0,i.jsx)(n.h4,{id:"variables-that-contribute-to-the-access-score",children:"Variables that contribute to the access score"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Bandwidth of the tiers that contain the ",(0,i.jsx)(n.code,{children:"Blob"}),"'s ",(0,i.jsx)(n.code,{children:"Buffer"}),"s."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"Blob"})," distribution (i.e., is all the data in a single ",(0,i.jsx)(n.code,{children:"Buffer"}),", or is it spread out among multiple ",(0,i.jsx)(n.code,{children:"Buffer"}),"s on multiple nodes?)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"how-the-scores-are-used",children:"How the scores are used"}),"\n",(0,i.jsxs)(n.p,{children:["The goal of the ",(0,i.jsx)(n.code,{children:"BufferOrganizer"})," is to ensure that each ",(0,i.jsx)(n.code,{children:"Blob"}),"'s access score is closely aligned to its importance score."]}),"\n",(0,i.jsx)(n.h2,{id:"ideas",children:"Ideas"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If a ",(0,i.jsx)(n.code,{children:"Blob"}),"'s ",(0,i.jsx)(n.code,{children:"Bucket"})," has a reference count of 0 (i.e., no process has an open handle to the ",(0,i.jsx)(n.code,{children:"Bucket"}),") then the importance score should be 0. The score is only calculated once at least one process opens the ",(0,i.jsx)(n.code,{children:"Bucket"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"operations",children:"Operations"}),"\n",(0,i.jsxs)(n.p,{children:["All ",(0,i.jsx)(n.code,{children:"BufferOrganizer"})," operations are implemented in terms of 3 simple\r\noperators"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MOVE(BufferID, TargetID)"}),"\n",(0,i.jsx)(n.li,{children:"COPY(BufferID, TargetID)"}),"\n",(0,i.jsx)(n.li,{children:"DELETE(BufferID)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"With these operators, we can build more complex tasks:"}),"\n",(0,i.jsx)(n.h3,{id:"transfer",children:"Transfer"}),"\n",(0,i.jsxs)(n.p,{children:["Move a ",(0,i.jsx)(n.code,{children:"BufferID"})," from one set of ",(0,i.jsx)(n.code,{children:"Target"}),"s to another."]}),"\n",(0,i.jsx)(n.h4,{id:"who-can-initiate-transfer-tasks",children:"Who can initiate Transfer tasks?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The System (load balancing)"}),"\n",(0,i.jsx)(n.li,{children:"The User (producer/consumer)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"evictsize_t-bytes-targets",children:"Evict(size_t bytes, Targets[])"}),"\n",(0,i.jsxs)(n.p,{children:["Move a set of ",(0,i.jsx)(n.code,{children:"BufferId"}),"s from one set of ",(0,i.jsx)(n.code,{children:"Target"}),"s to an unspecified\r\nlocation (could even be swap space)."]}),"\n",(0,i.jsx)(n.h4,{id:"who-can-initiate-eviction-tasks",children:"Who can initiate Eviction tasks?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Put (DPE)"}),"\n",(0,i.jsx)(n.li,{children:"Get (Prefetcher)"}),"\n",(0,i.jsxs)(n.li,{children:["Thread that updates the ",(0,i.jsx)(n.code,{children:"SystemViewState"})," (enforces a minimum\r\ncapacity threshold passed in through the config)."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"who-translates-an-eviction-into-a-series-of-transfers",children:"Who translates an Eviction into a series of Transfers?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DPE?"}),"\n",(0,i.jsx)(n.li,{children:"BO?"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"single-shared-file-pros",children:"Single shared file pros"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Could theoretically reap performance benefits of collective IO\r\noperations, although I don't think we'll ever be able to capitalize\r\non this because each rank must act independently and can't\r\nsynchronize with the other ranks."}),"\n",(0,i.jsx)(n.li,{children:"Less stress on the PFS metadata server."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"file-per-rank-pros",children:"File per rank pros"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Don't have to worry about reserving size for each rank."}),"\n",(0,i.jsx)(n.li,{children:"Don't have to worry about locking."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"file-per-node",children:"File per node"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We'll go with this for the initial implementation."}),"\n",(0,i.jsxs)(n.li,{children:["Don't have to worry about locking or reserving size with respect to\r\nthe buffer organizer. However, since multiple ranks could\r\npotentially write to the same swap file, we need to either","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Filter all swap traffic through the buffer organizer"}),"\n",(0,i.jsx)(n.li,{children:"Synchronize all access to the file"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Won't overload the metadata servers as bad as file per rank."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"triggers",children:"Triggers"}),"\n",(0,i.jsx)(n.p,{children:"The Buffer Organizer can be triggered in 3 ways:"}),"\n",(0,i.jsx)(n.h3,{id:"periodic",children:"Periodic"}),"\n",(0,i.jsx)(n.p,{children:"The period can be controlled by a configuration variable."}),"\n",(0,i.jsx)(n.h3,{id:"client-triggered",children:"Client-triggered"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If, for any reason, a client DPE places data to the swap target, it\r\nwill also trigger the buffer organizer by adding an event to the\r\nbuffer organizer's queue."}),"\n",(0,i.jsx)(n.li,{children:"We store the blob name, the offset into the swap target (for\r\nfile-based targets), and the blob size."}),"\n",(0,i.jsx)(n.li,{children:"When the buffer organizer processes an event, it"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Reads the blob from the swap target into memory."}),"\n",(0,i.jsxs)(n.li,{children:["Calls ",(0,i.jsx)(n.code,{children:"Put"})," to place the blob into the hierarchy. If the ",(0,i.jsx)(n.code,{children:"Put"}),"\r\nfails, it tries again, up to ",(0,i.jsx)(n.code,{children:"num_buffer_organizer_retries"}),"\r\n(configurable) times."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"system-triggered",children:"System-triggered"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Nothing is implemented yet."}),"\n",(0,i.jsx)(n.li,{children:"Should the BO constantly monitor the buffering hierarchy and attempt\r\nto maintain a set of rules (remaining capacity percentage,\r\nthresholds, etc.)?"}),"\n",(0,i.jsx)(n.li,{children:'Should the BO simply carry out "orders" and not attempt to make its\r\nown decisions? If so, who gives the orders?'}),"\n",(0,i.jsx)(n.li,{children:"Should the BO be available for other asynchronous tasks?"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"requirements-for-queue-implementation",children:"Requirements for Queue implementation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(At least) 2 different priority lanes"}),"\n",(0,i.jsx)(n.li,{children:"Node local and remote queues (but only for neighborhoods, not global\r\nqueues)."}),"\n",(0,i.jsx)(n.li,{children:"Need ability to restrict queue length"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"design-details",children:"Design Details"}),"\n",(0,i.jsx)(n.h3,{id:"bo-rpc-server",children:"BO RPC Server"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["RPC is used to route ",(0,i.jsx)(n.code,{children:"BoTask"}),"s to the appropriate Hermes core."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"BO"})," RPC server only has one function:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"bool EnqueueBoTask(BoTask task, Priority priority);\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"[[../images/bo_rpc.png]]"}),"\n",(0,i.jsx)(n.h3,{id:"buffer-organizer-1",children:"Buffer Organizer"}),"\n",(0,i.jsx)(n.h4,{id:"work-queues",children:"Work Queues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Argobots ",(0,i.jsx)(n.strong,{children:"pool"}),"s"]}),"\n",(0,i.jsx)(n.li,{children:"High and low priorities"}),"\n",(0,i.jsx)(n.li,{children:"Basic FIFO queue by default"}),"\n",(0,i.jsx)(n.li,{children:"Completely customizable (e.g., could be a priority queue, min-heap,\r\netc.)"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"schedulers",children:"Schedulers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Argobots ",(0,i.jsx)(n.strong,{children:"scheduler"}),"s"]}),"\n",(0,i.jsx)(n.li,{children:"Takes tasks from the queues and runs them on OS threads as user\r\nlevel threads (basically coroutines)."}),"\n",(0,i.jsx)(n.li,{children:"Completely customizable."}),"\n",(0,i.jsx)(n.li,{children:"By default, one scheduler is associated with a single execution\r\nstream (OS thread)."}),"\n",(0,i.jsx)(n.li,{children:"Only take tasks from low priority queue if high priority queue is\r\nempty?"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"threads",children:"Threads"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Argobots ",(0,i.jsx)(n.strong,{children:"execution stream"}),"s"]}),"\n",(0,i.jsxs)(n.li,{children:["Bound to a ",(0,i.jsx)(n.strong,{children:"processing element"})," (CPU core or hyperthread), and\r\nshouldn't be oversubscribed."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(8883).Z+"",width:"643",height:"495"})}),"\n",(0,i.jsx)(n.h2,{id:"example-flows",children:"Example Flows"}),"\n",(0,i.jsx)(n.h3,{id:"hot-put",children:"Hot Put"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(4494).Z+"",width:"378",height:"956"})}),"\n",(0,i.jsx)(n.h3,{id:"bo-eviction-flow",children:"BO Eviction Flow"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(8425).Z+"",width:"553",height:"524"})}),"\n",(0,i.jsx)(n.h2,{id:"ideas-1",children:"Ideas"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An importance score of 0 could be the signal to flush a ",(0,i.jsx)(n.code,{children:"Blob"})," to the PFS."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"StageIn"})," and ",(0,i.jsx)(n.code,{children:"StageOut"})," APIs"]}),"\n",(0,i.jsxs)(n.li,{children:['Reverse "gravity" for read heavy workloads. ',(0,i.jsx)(n.code,{children:"Blobs"})," trickle up to higher tiers."]}),"\n",(0,i.jsx)(n.li,{children:"Explicitly maintain Target capacity thresholds."}),"\n",(0,i.jsx)(n.li,{children:"Introduce horizontal movement if Topology threshold is exceeded."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"experiments",children:"Experiments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Test the difference between flushing tier by tier vs skipping tiers. For example, a ",(0,i.jsx)(n.code,{children:"Blob"})," moving from RAM to burst buffer could go through NVMe as an intermediate tier, or skip it altogether."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8883:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/bo-9412e1ce05035896279ca164b1375068.png"},8425:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/bo_evict-f585db845536915d3efa4b9225efce29.png"},4494:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/hot_put-0d2d32fadedf6f594a46ecc415ad16d0.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var i=r(7294);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);