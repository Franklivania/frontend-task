import { useState, useCallback } from 'react'
import './App.css'
import Display from './components/Display'
import Navbar from './components/Navbar'


export default function App() {
  const [active, setActive] = useState<number | null>(0);
  const [lastActive, setLastActive] = useState<number | null>(0);

  const updateActive = useCallback((newActive: number | null) => {
    setLastActive(active);
    setActive(newActive);
  }, [active]);

  const goBack = useCallback(() => {
    setActive(lastActive);
  }, [lastActive]);

  return (
    <main className='relative w-screen h-screen bg-lt-white overflow-hidden'>
      <Navbar active={active} setActive={updateActive} />
      <Display active={active} goBack={goBack} />
    </main>
  )
}
