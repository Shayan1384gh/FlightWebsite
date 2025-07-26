import FlightForm from "./FlightForm";
import {Route, Router, Routes} from "react-router";
import FlightResults from "./Result";


const App = ()=>{
    return (
            <Router>
                <Routes>
                    <Route path="/" component={FlightForm}/>
                    <Route path="/results" element={<FlightResults/>} />
                </Routes>
            </Router>
    )
}

export default App;