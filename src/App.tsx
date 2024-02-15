import './App.css'
import Display from './components/Display'
import Navbar from './components/Navbar'

export default function App() {

  return (
    <main className='relative w-screen h-screen bg-lt-white overflow-hidden'>
      <Navbar />
      <Display />
    </main>
  )
}
