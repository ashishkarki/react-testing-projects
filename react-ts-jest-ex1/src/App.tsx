import './App.css'
import { Login } from './components/Login'

function App() {
  return (
    <div className='App'>
      <Login />

      <footer
        style={{
          position: 'fixed',
          bottom: '5px',
          left: '0',
          backgroundColor: 'rosybrown',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Reference / Starter code taken from:
        <a href='https://github.com/barosanuemailtest/ts-course-react'>
          Typcript React and Testing
        </a>
      </footer>
    </div>
  )
}

export default App
