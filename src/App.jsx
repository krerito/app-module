import NavAtem from './components/navatem';
import Card from './components/card'
import CardPost from './components/post';

function App({selectedCard}) {
  let posts = [
    {
      id: '1',
      tittlePost: 'Primer post',
      descriptionPost: 'Pinche descripcion pitera',
      datePost: '12/14/2023',
    },
    {
      id: '2',
      tittlePost: 'Segundo post',
      descriptionPost: 'Pinche descripcion chingona',
      datePost: '12/14/2023',
    },
    {
      id: '3',
      tittlePost: 'Tercera post',
      descriptionPost: 'Manden armas a siria',
      datePost: '12/14/2023',
    },
  ]

  return (
    <>
      <NavAtem />
      <section style={{
        display: 'flex',
      }}>
        <div className="cards-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%'
          }}
        >
          {posts.map
            (post =>
              <Card
                key={post.id}
                id={post.id}
                tittlePost={post.tittlePost}
                descriptionPost={post.descriptionPost}
                datePost={post.datePost}
              />
            )
          }
        </div>
        <div className="card-post-container"
          style={{
            width: '60%',
          }}>
          <CardPost 
            key={posts.id}
            tittlePost={posts.tittlePost}
            descriptionPost={posts.descriptionPost}
            datePost={posts.datePost} />
        </div>
      </section>
    </>
  )
}

export default App
