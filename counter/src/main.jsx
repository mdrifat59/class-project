 import { createRoot } from 'react-dom/client' 
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(<App /> ,
)

/*
    <App pros={'hello'} />
    const app = new App(pros)
    app.render()
*/