import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
          <h3>welcome to pro shop</h3>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
