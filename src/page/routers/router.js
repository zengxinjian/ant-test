import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import App from '../../routes/PCContainer';
import Home from '../../routes/Home';
import About from '../../routes/About';
import Project from '../../routes/Project';
import Media from '../../routes/Media';
import Details from '../../routes/Details';

export default ({history, app}) => {
  return (
    <App>
      <Router history={history}>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/project" exact component={Project} />
          <Route path="/media" exact component={Media} />
          <Route path="/details/:id" exact component={Details} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </App>
  );
}

// This approach causes the entire page to be refreshed, so deprecated.
//
// export default ({history, app}) => {
//
//   const ExampleIndex = dynamic({
//     app,
//     component: () => import('./routes/Example')
//   });
//   const TestIndex = dynamic({
//     app,
//     component: () => import('./routes/Test')
//   });
//
//   return <Router history={history}>
//       <Switch>
//         <Route exact path={'/'} component={dynamic({app, component: () => import('./routes/IndexPage')})}/>
//         <Route exact path={'/main/example'}
//                render={() => <ExampleIndex breadcrumbName={'layout.index'}/>}/>
//         <Route exact path={'/main/test'} component={TestIndex}/>
//       </Switch>
//   </Router>;
// };
