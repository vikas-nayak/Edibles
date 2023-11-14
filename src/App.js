import React from 'react'
import Card from './components/Card'
import CardEdit from './components/CardEdit'
import Sidebar from './components/Sidebar'
import Search from './components/Search'


const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      {/* <h1 style={{ display: 'inline-block', color:'white', padding: '24px' }}>Eren Yeager</h1> */}

      <Search />
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: '100px' }}>


        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <CardEdit />
        <CardEdit />
        <CardEdit />
        <CardEdit />
        <CardEdit />
      </div>
    </div>
  )
}

export default App