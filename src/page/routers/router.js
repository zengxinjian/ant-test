import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import App from '../../routes/PCContainer';
import Home from '../../routes/Home';

export default ({history, app}) => {
  return (
    <App>
      <Router history={history}>
        <Switch>
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
