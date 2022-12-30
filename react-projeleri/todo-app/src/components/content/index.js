import React from 'react'
import Footer from '../Footer'
import List from './list/index'

const Content = () => {
  return (
    <>
        <main className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
        <List />
        </main>
        <Footer />
    </>
  )
}

export default Content