import NavAtem from './components/navatem';
import Card from './components/card'
import CardPost from './components/post';
import React, { useState } from 'react';
import AtemApp from './components/header'


function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const posts = [
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
      datePost: '12/01/2023',
    },
    {
      id: '3',
      tittlePost: 'Tercera post',
      descriptionPost: 'Manden armas a siria',
      datePost: '12/18/2023',
    },
  ]

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <>
      <NavAtem />

      <header>
        <div className="header-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px'
        }}>
          <AtemApp />
        </div>
      </header>

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
          <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
          {posts.map
            (post =>
              <Card
                key={post.id}
                id={post.id}
                tittlePost={post.tittlePost}
                descriptionPost={post.descriptionPost}
                datePost={post.datePost}
                onCardClick={handleCardClick}
              />
            )
          }
        </div>
        <div className="card-post-container"
          style={{
            width: '60%',
          }}>
          {selectedCard && (
            <CardPost
              tittlePost={posts[selectedCard - 1].tittlePost}
              descriptionPost={posts[selectedCard - 1].descriptionPost}
              datePost={posts[selectedCard - 1].datePost}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default App