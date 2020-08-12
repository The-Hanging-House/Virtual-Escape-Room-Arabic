import React from'react'

// import Scene1 from '../../components/gameplay/Scene1'
// import Scene2 from '../../components/gameplay/Scene2'
const Scene1 = React.lazy(() => import('../gameplay/Scene1'));
const Scene2 = React.lazy(() => import('../gameplay/Scene2'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
    { path: '/scene1', name: 'scene2', component:Scene1 }, 
    { path: '/scene2',  name: 'scene2', component:Scene2 }, 
    // { path: '/dashboard', name: 'Dashboard', component: Scene1 },
   
    
  ];

  
  export default routes;