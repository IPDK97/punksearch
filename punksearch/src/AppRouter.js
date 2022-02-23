import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { NonAuthorized } from "./NonAuthorized"

//Application router with all the possible routes that user can go.
export function AppRouter() {
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/notauth" element= {<NonAuthorized/>} />
                    <Route path="*" element= {<NonAuthorized/>} />
                </Routes>
            </div>
        </Router>
    );
}