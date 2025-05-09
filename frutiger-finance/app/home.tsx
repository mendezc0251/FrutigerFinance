import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Begin from "@/components/finance"
export default function home(){
    <>
        <Router>
            <Routes>
                <Route>
                    exact
                    path="/"
                    element={<Begin />}
                </Route>
            </Routes>
        </Router>
    </>
}