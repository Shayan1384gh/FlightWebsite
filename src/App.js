import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightForm from "./FlightForm";
import FlightResults from "./Result";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FlightForm />} />
                <Route path="/results" element={<FlightResults />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
