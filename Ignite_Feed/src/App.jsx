import Header from "./components/Header"
import './global.css'
import AppStyle from './App.module.css'
import Sidebar from "./components/Sidebar"
import Posts from "./components/Posts"


function App() {

  /*vamos colocar as informações do posts.jsx não estáticos*/
  const posts = [
    {
      id: 1,
      author:{
        avatarUrl: 'https://avatars.githubusercontent.com/u/90402449?s=48&v=4',
        name: 'Leandro Weber',
        role: 'Web Developer'
      },
      content: [
        { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In saepe illo ipsa quasi tempore repellat, minus dolores eos nobis dolorem. Dolores beatae molestias cupiditate, perferendis dignissimos nobis explicabo odio nemo.'},

        { type: 'link', content: '#webdev'}
      ],
      publishedAt: new Date(),
    },
  ]

  return (
    <>
    <header>
      <Header/>
    </header>

    <div className= {AppStyle.wrapper}>
      <aside>
        <Sidebar />
      </aside>

      <main>
       {posts.map(post => {
        return (
        <Posts 
        key={post.id}
        author= {post.author}
        content= {post.content}
        publishedAt= {post.publishedAt}
        />
        
        )
       })}
      </main>
    </div>
    </>
  )
}

export default App
