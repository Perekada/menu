import React, {useState} from 'react'
import Menu from './Menu'
import Categories from './Categories'
import data from './data'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const[categories] = useState(allCategories);

  const itemFilter = (category) => {
    if (category === 'all'){
      setMenuItems(data)
    }
    else{
      const newItem = data.filter((item) => item.category === category)
      setMenuItems(newItem)
    }

  }



  return  <main>  
  <section className='menu section'>
    <div className='title'>
      <h2>our menu</h2>
      <div className="underline"></div>
    </div>
    <Categories itemFilter={itemFilter} categories={categories} />
    <Menu items={menuItems}  />
      </section>
      </main>
  ;
}

export default App;
