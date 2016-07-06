import Home from '../components/Home.jsx';
import Main from '../components/Main.jsx';

// const routes = () => (
//   <Route path="/" component={Main}>
//     <IndexRoute component={Home} />
//   </Route>
// )

// { path: 'about', component: About },
// { path: 'inbox', component: Inbox },

const routes = {
  path: '/',
  component: Main,
  indexRoute: { component: Home },
  childRoutes: [
    
  ]
};

export default routes;
