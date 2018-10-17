import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import About from '../pages/about-us/About'
import Reviews from '../pages/reviews/Reviews'
import Help from '../pages/help/Help'
import Contact from '../pages/contact/Contact'
import Terms from '../pages/terms/Terms'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Forget from '../pages/forget/Forget'

const propTypes = {
  path: PropTypes.string,
  activePage: PropTypes.object.isRequired
}

class PageRoutes extends React.Component {
  render() {
    const { activePage } = this.props

    return (
      <Switch>
        <Route path="/about">
          <About pageData={activePage} />
        </Route>
        <Route path="/reviews">
          <Reviews pageData={activePage} />
        </Route>
        <Route path="/help">
          <Help pageData={activePage} />
        </Route>
        < Route path="/contact">
          <Contact pageData={activePage} />
        </Route>
        < Route path="/terms">
          <Terms pageData={activePage} />
        </Route>
        < Route path="/login">
          <Login pageData={activePage} />
        </Route>
        < Route path="/signup">
          <Signup pageData={activePage} />
        </Route>
        < Route path="/forget">
          <Forget pageData={activePage} />
        </Route>
      </Switch>
    )
  }
}

PageRoutes.propTypes = propTypes
export default PageRoutes
