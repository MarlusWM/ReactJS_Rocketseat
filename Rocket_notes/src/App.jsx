import './App.css'
import Button from './components/Button'
import ButtonTxt from './components/ButtonTxt'
import Header from './components/Header'
import Home from './components/Home'
import UseLink from './components/UseLink'


function App() {

  return (
    <>
      <Header />
      <Home />
      <main>
        <article>
          <ButtonTxt title={"Excluir Nota"}/>

          <h1>TÍTULO DA NOTA</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos magni nesciunt vero laudantium consequuntur? Quas accusamus sint mollitia aperiam placeat tempora consectetur molestiae, facilis, doloribus minus incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis quidem fugiat architecto incidunt cupiditate inventore unde ea, possimus distinctio quam sunt recusandae explicabo reprehenderit iusto saepe ullam, omnis tempore!
          </p>

          <div>
            <UseLink
            title={"Links Úteis"}/>
            {/*ABAIXO ESTÁ O CHILDREN NODE COLOCADO COMO PROPS NA FUNÇÃO UseLink*/}
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
              <a href="#">Link 2</a>
              </li>
            </ul>          
          </div>

          <Button title={"Voltar"}/>

      </article>
    </main>
  </>
  )
}

export default App
