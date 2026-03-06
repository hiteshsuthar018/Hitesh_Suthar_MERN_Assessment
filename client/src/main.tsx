import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EmployeeProvider } from "./context/EmployeeContext";


createRoot(document.getElementById('root')!).render(
    <EmployeeProvider>
    <App />
    </EmployeeProvider>
)
