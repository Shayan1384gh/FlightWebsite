
import { useState } from "react";
import {useNavigate} from "react-router";


const FlightForm = () => {
    const [formData, setFormData] = useState({ origin: "", destination: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleSearchFlights = () => {
        if (!formData.origin || !formData.destination) {
            setError("کد مبدا و مقصد را وارد کنید");
            return;
        }

        navigate(`/results?origin=${formData.origin}&destination=${formData.destination}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold text-center text-blue-700 mb-4">جستجوی پرواز ✈️</h2>
                <input
                    className="w-full mb-3 p-3 border rounded-md"
                    placeholder="کد مبدا (مثلاً IKA)"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value.toUpperCase() })}
                />
                <input
                    className="w-full mb-3 p-3 border rounded-md"
                    placeholder="کد مقصد (مثلاً IST)"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value.toUpperCase() })}
                />
                <button
                    onClick={handleSearchFlights}
                    className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
                >
                    جستجو
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default FlightForm;
