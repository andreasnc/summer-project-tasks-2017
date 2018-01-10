import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Oppgavesett react/redux</h1>
    {' · '}
    <Link to='/oppgave1' activeClassName='page-layout__nav-item--active'>Oppgave 1</Link>
    {' · '}
    <Link to='/oppgave1Fasit' activeClassName='page-layout__nav-item--active'>Oppgave 1 Fasit</Link>
    {' · '}
    <Link to='/oppgave2' activeClassName='page-layout__nav-item--active'>Oppgave 2</Link>
    {' · '}
    <Link to='/oppgave2Fasit' activeClassName='page-layout__nav-item--active'>Oppgave 2 Fasit</Link>
    {' · '}
    <Link to='/oppgave3' activeClassName='page-layout__nav-item--active'>Oppgave 3</Link>
    {' · '}
    <Link to='/oppgave3Fasit' activeClassName='page-layout__nav-item--active'>Oppgave 3 Fasit</Link>
    {' · '}
    <Link to='/oppgave4' activeClassName='page-layout__nav-item--active'>Oppgave 4</Link>
    {' · '}
    <Link to='/oppgave4Fasit' activeClassName='page-layout__nav-item--active'>Oppgave 4 Fasit</Link>
    {' · '}
    <Link to='/oppgave5' activeClassName='page-layout__nav-item--active'>Oppgave 5</Link>
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
