import './App.css'
import Header from './components/Header'
import UseLink from './components/UseLink'

function App() {

  return (
    <>
      <Header />

      <div>
        <UseLink
        title={"Links Úteis"}/>
        <ul>
          <li>link1</li>
          <li>link2</li>
        </ul>
      </div>
    </>
  )
}

export default App
