import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import MainLayout from 'components/Layout/MainLayout';

const Contact = React.lazy(() => import('pages/contact'));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <MainLayout>
            <React.Suspense fallback={<div></div>} >
              <Route exact path="/" component={Contact} />
            </React.Suspense>
          </MainLayout>
        </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default App;
