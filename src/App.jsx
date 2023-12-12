import NavAtem from './components/navatem';
import Card from './components/card'

function App() {
  return (
    <>
      <NavAtem />
      <div className="cards-container"
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
