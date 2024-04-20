import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', '88a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '3f1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'cc3'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '997'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'df7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '07f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '9c8'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '7be'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ff5'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '5a0'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '539'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '99e'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'f01'),
    exact: true
  },
  {
    path: '/jobs/',
    component: ComponentCreator('/jobs/', '74f'),
    exact: true
  },
  {
    path: '/jobs/postdoc',
    component: ComponentCreator('/jobs/postdoc', '745'),
    exact: true
  },
  {
    path: '/jobs/software-engineer',
    component: ComponentCreator('/jobs/software-engineer', '5b4'),
    exact: true
  },
  {
    path: '/members',
    component: ComponentCreator('/members', '834'),
    exact: true
  },
  {
    path: '/network',
    component: ComponentCreator('/network', '8ca'),
    exact: true
  },
  {
    path: '/publications',
    component: ComponentCreator('/publications', 'c4a'),
    exact: true
  },
  {
    path: '/research/patents',
    component: ComponentCreator('/research/patents', 'b1d'),
    exact: true
  },
  {
    path: '/research/projects/',
    component: ComponentCreator('/research/projects/', '8fa'),
    exact: true
  },
  {
    path: '/research/projects/chronolog',
    component: ComponentCreator('/research/projects/chronolog', 'e26'),
    exact: true
  },
  {
    path: '/research/projects/coeus',
    component: ComponentCreator('/research/projects/coeus', 'd02'),
    exact: true
  },
  {
    path: '/research/projects/dayu',
    component: ComponentCreator('/research/projects/dayu', 'd99'),
    exact: true
  },
  {
    path: '/research/projects/dtio',
    component: ComponentCreator('/research/projects/dtio', 'b04'),
    exact: true
  },
  {
    path: '/research/projects/hermes',
    component: ComponentCreator('/research/projects/hermes', '6b8'),
    exact: true
  },
  {
    path: '/research/projects/iris',
    component: ComponentCreator('/research/projects/iris', 'd10'),
    exact: true
  },
  {
    path: '/research/projects/labios',
    component: ComponentCreator('/research/projects/labios', '4d5'),
    exact: true
  },
  {
    path: '/research/projects/viper',
    component: ComponentCreator('/research/projects/viper', 'a7b'),
    exact: true
  },
  {
    path: '/research/projects/wisio',
    component: ComponentCreator('/research/projects/wisio', '0ab'),
    exact: true
  },
  {
    path: '/resources/hardware-overview',
    component: ComponentCreator('/resources/hardware-overview', '332'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '680'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fa1'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '9b3'),
            routes: [
              {
                path: '/docs/ares/ares-user-guide',
                component: ComponentCreator('/docs/ares/ares-user-guide', '32f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ares/faq',
                component: ComponentCreator('/docs/ares/faq', 'b1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/ares-research-cluster',
                component: ComponentCreator('/docs/category/ares-research-cluster', '394'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/c-introduction',
                component: ComponentCreator('/docs/category/c-introduction', '79e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/hermes',
                component: ComponentCreator('/docs/category/hermes', 'ebd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/important-environment-variables',
                component: ComponentCreator('/docs/category/important-environment-variables', '6b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/installing-hpc-software',
                component: ComponentCreator('/docs/category/installing-hpc-software', '02f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/linux-introduction',
                component: ComponentCreator('/docs/category/linux-introduction', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chronolog/index',
                component: ComponentCreator('/docs/chronolog/index', '024'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/adapters',
                component: ComponentCreator('/docs/hermes/adapters', '449'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/building-hermes',
                component: ComponentCreator('/docs/hermes/building-hermes', 'af4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/buffer-organizer',
                component: ComponentCreator('/docs/hermes/components/buffer-organizer', 'bf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/buffer-pool',
                component: ComponentCreator('/docs/hermes/components/buffer-pool', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/buffering-target',
                component: ComponentCreator('/docs/hermes/components/buffering-target', '6a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/data-placement',
                component: ComponentCreator('/docs/hermes/components/data-placement', '569'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/data-staging',
                component: ComponentCreator('/docs/hermes/components/data-staging', '258'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/distributed-metadata',
                component: ComponentCreator('/docs/hermes/components/distributed-metadata', 'f04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/examples',
                component: ComponentCreator('/docs/hermes/components/examples', 'abf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/prefetcher',
                component: ComponentCreator('/docs/hermes/components/prefetcher', '1cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/runtime',
                component: ComponentCreator('/docs/hermes/components/runtime', '61c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/tagging',
                component: ComponentCreator('/docs/hermes/components/tagging', '09d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/components/topology',
                component: ComponentCreator('/docs/hermes/components/topology', 'ee9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/configuration',
                component: ComponentCreator('/docs/hermes/configuration', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/containers',
                component: ComponentCreator('/docs/hermes/containers', 'f45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/deploying-hermes',
                component: ComponentCreator('/docs/hermes/deploying-hermes', 'e71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/developer-guide',
                component: ComponentCreator('/docs/hermes/developer-guide', '838'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/doxygen',
                component: ComponentCreator('/docs/hermes/doxygen', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/faq',
                component: ComponentCreator('/docs/hermes/faq', '8b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/main-scenario',
                component: ComponentCreator('/docs/hermes/main-scenario', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hermes/programming',
                component: ComponentCreator('/docs/hermes/programming', '5be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/cpp-introduction/hello-world',
                component: ComponentCreator('/docs/hpc-tutorials/cpp-introduction/hello-world', '28e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/important-environment-variables/cmake-module-path',
                component: ComponentCreator('/docs/hpc-tutorials/important-environment-variables/cmake-module-path', '553'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/important-environment-variables/cmake-prefix-path',
                component: ComponentCreator('/docs/hpc-tutorials/important-environment-variables/cmake-prefix-path', 'bc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/important-environment-variables/cpath',
                component: ComponentCreator('/docs/hpc-tutorials/important-environment-variables/cpath', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/important-environment-variables/java-home',
                component: ComponentCreator('/docs/hpc-tutorials/important-environment-variables/java-home', '738'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/important-environment-variables/ld-library-path',
                component: ComponentCreator('/docs/hpc-tutorials/important-environment-variables/ld-library-path', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/important-environment-variables/ld-preload',
                component: ComponentCreator('/docs/hpc-tutorials/important-environment-variables/ld-preload', '971'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/important-environment-variables/library-path',
                component: ComponentCreator('/docs/hpc-tutorials/important-environment-variables/library-path', '517'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/important-environment-variables/path',
                component: ComponentCreator('/docs/hpc-tutorials/important-environment-variables/path', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/important-environment-variables/pythonpath',
                component: ComponentCreator('/docs/hpc-tutorials/important-environment-variables/pythonpath', '48b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/installing-hpc-software/building-from-scratch',
                component: ComponentCreator('/docs/hpc-tutorials/installing-hpc-software/building-from-scratch', '10e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/installing-hpc-software/building-with-spack',
                component: ComponentCreator('/docs/hpc-tutorials/installing-hpc-software/building-with-spack', 'fe0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/linux-introduction/choosing-an-os',
                component: ComponentCreator('/docs/hpc-tutorials/linux-introduction/choosing-an-os', 'c54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/linux-introduction/ssh',
                component: ComponentCreator('/docs/hpc-tutorials/linux-introduction/ssh', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hpc-tutorials/linux-introduction/using-a-terminal',
                component: ComponentCreator('/docs/hpc-tutorials/linux-introduction/using-a-terminal', '842'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/index',
                component: ComponentCreator('/docs/index', 'cb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/building-package',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/building-package', 'a8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/custom-repos',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/custom-repos', 'cf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/design-motivation',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/design-motivation', '6cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/future-work',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/future-work', '961'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/getting-started',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/getting-started', '308'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/index',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/index', '1ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/cm1',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/cm1', 'ad3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/deepdrivemd',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/deepdrivemd', 'd11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/gadget2',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/gadget2', '3ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/gadget4',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/gadget4', '6e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/lammps',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/lammps', 'd70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/nyx',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/nyx', 'db7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/openfoam',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/openfoam', 'b95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/vpic',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/vpic', '258'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/vpic-kokkos',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/vpic-kokkos', '0e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/packages/wrf',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/packages/wrf', '0d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/python-api',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/python-api', '755'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/resource-graph',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/resource-graph', 'b99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/schedulers',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/schedulers', 'c04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-cd/virtualization',
                component: ComponentCreator('/docs/jarvis/jarvis-cd/virtualization', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-util/argument-parsing',
                component: ComponentCreator('/docs/jarvis/jarvis-util/argument-parsing', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-util/builtin-wrappers',
                component: ComponentCreator('/docs/jarvis/jarvis-util/builtin-wrappers', '6e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-util/hostfile',
                component: ComponentCreator('/docs/jarvis/jarvis-util/hostfile', '06c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-util/index',
                component: ComponentCreator('/docs/jarvis/jarvis-util/index', 'ba4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jarvis/jarvis-util/program-execution',
                component: ComponentCreator('/docs/jarvis/jarvis-util/program-execution', 'ed0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '578'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
