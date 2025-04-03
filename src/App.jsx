import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const restCountries = fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())

function App() {

  return (
    <>
      <h1>React world on the go........</h1>
      <Suspense fallback={<h4>Coutries are loading....</h4>}>
        <Countries restCountries={restCountries}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
