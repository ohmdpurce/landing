import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main/MainPage.jsx'
import SignUpPage from './pages/signup/SignUpPage.jsx'
const RouterPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/open-account" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPath

