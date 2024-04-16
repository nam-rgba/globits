import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Pages/Layout';
import { Home } from './Pages/Home';
import { Country } from './Pages/Country';
import { CountryData as data} from './assets/CountryData'
import { useState } from 'react';


type Country = {
  name: string
  code: string
  description: string
}

function App() {
  const [countries, setCountries] = useState<Country[]>(data)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="country" element={<Country countries={countries} setCountries={setCountries}/>} />
        </Route>
      </Routes>
    </Router>
  )
}



export default App
