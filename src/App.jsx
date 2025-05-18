import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const questions=[
{question:"kutya",
  id:123,
  answer:"best friend"
},
{question:"macska",
  id:456,
  answer:"best friend2"
},
{question:"eger",
  id:789,
  answer:"best friend3"
},
{question:"pakkany",
  id:101,
  answer:"best friend4"
},
{question:"borz",
  id:102,
  answer:"best friend5"
},
{question:"nyest",
  id:103,
  answer:"best friend6"
},

]

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(123)

  return (
    <>
  

    </>
  )
}

export default App
