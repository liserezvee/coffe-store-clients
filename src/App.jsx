import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeCard from './componenets/CoffeCard'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees,setCoffees] = useState(loadedCoffees)

  return (
    <>
      <div className='m-20 '>
      <h1 className='text-6xl text-center my-20 text-purple-600'>Your Coffee is here: {coffees.length} </h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => 
        <CoffeCard
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeCard>)
      }
      </div>
      </div>
    </>
  )
}

export default App
