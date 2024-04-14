import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  const [new_collection, setNewCollection] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/newcollections').then(res => res.json()).then(e => setNewCollection(e.reverse()))
  },[])
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collections'>
         {new_collection.map(e => {
            return <Item key={e.id} id={e.id} name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} />
         })}
      </div>
    </div>
  )
}

export default NewCollections