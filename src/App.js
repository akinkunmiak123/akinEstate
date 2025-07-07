import "./App.css"
import Pages from "./components/pages/Pages"
import { CompareProvider } from  './utils/CompareContext'
function App() {
  return (
    <CompareProvider>
      <Pages />
     
    </CompareProvider>
  )
}

export default App
