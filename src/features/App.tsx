import { Navbar } from './layout/Navbar'
import Login from './login/Login'

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 pt-20">
      <Navbar />
      <Login />
    </div>
  )
}

export default App
