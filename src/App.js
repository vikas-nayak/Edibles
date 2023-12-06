import React from 'react'
import Card from './components/Card'
import CardEdit from './components/CardEdit'
import Sidebar from './components/Sidebar'
import Search from './components/Search'
import dish from './assets/dish.png';
import AddNew from './components/AddNew'


const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      {/* <h1 style={{ display: 'inline-block', color:'white', padding: '24px' }}>Eren Yeager</h1> */}

      <Search />
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: '100px' }}>


        <Card
          dish={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        />
        <Card
          dish={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        />
        <Card
          dish={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        />
        <Card
          dish={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        />
        <Card
          dish={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        />

        {/* <CardEdit
          dishs={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        /> */}
        <CardEdit
          dishs={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        />
        <CardEdit
          dishs={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        />
        <CardEdit
          dishs={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        />
        <CardEdit
          dishs={dish}
          dishName="Spicy seasoned seafood noodles"
          price="$ 6.99"
          bowls="8"
        />
  <AddNew/>
      </div>
    </div>
  )
}

export default App