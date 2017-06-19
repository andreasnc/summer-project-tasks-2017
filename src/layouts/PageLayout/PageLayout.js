import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <Link to='/secret' activeClassName='page-layout__nav-item--active'>Secret</Link>
    {' · '}
    <a href={`http://localhost:8080/login`}>Login</a>
    {' · '}
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
