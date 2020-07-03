import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';
import LayoutSignin from './layouts/LayoutSignin';

// Views
import Home from './views/Home';
import Secondary from './views/Secondary';
import Login from './views/Login';
import Signup from './views/Signup';

import Helpline from './views/Helpline';
import Hospitals from './views/Hospitals';
import AboutUs from './views/Aboutus';
import QuarantineCenter from './views/QuarantineCenter';
import TestingCenter from './views/TestingCenter';
import Information from './views/Information';

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/secondary" component={Secondary} layout={LayoutAlternative} />
            <AppRoute exact path="/login" component={Login} layout={LayoutSignin} />
            <AppRoute exact path="/signup" component={Signup} layout={LayoutSignin} />

            <AppRoute exact path="/helpline" component={Helpline} layout={LayoutAlternative} />
            <AppRoute exact path="/hospitals" component={Hospitals} layout={LayoutAlternative} />
            <AppRoute exact path="/quarantineCenter" component={QuarantineCenter} layout={LayoutAlternative} />
            <AppRoute exact path="/testingCenter" component={TestingCenter} layout={LayoutAlternative} />
            <AppRoute exact path="/information" component={Information} layout={LayoutAlternative} />
            <AppRoute exact path="/aboutus" component={AboutUs} layout={LayoutAlternative} />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);
