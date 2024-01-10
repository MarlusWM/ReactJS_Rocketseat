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
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
          <a href="#">Link 2</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
