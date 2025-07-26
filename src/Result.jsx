
import { useEffect, useState } from "react";
import axios from "axios";
import FlightCard from "./FlightCard";
import {Link, useSearchParams} from "react-router";



const FlightResults = () => {
    const [params] = useSearchParams();
    const origin = params.get("origin");
    const destination = params.get("destination");

    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchFlights = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `https://api.aviationstack.com/v1/flights?access_key=0480ae4b5914a08b38070b5a68b7ff09&dep_iata=${origin}&arr_iata=${destination}`
                );
                setFlights(res.data.data || []);
            } catch (err) {
                setError("خطا در دریافت اطلاعات پرواز");
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, [origin, destination]);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-blue-700">
                        پروازها از {origin} به {destination}
                    </h2>
                    <Link
                        to="/"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        بازگشت
                    </Link>
                </div>

                {loading && <p>در حال دریافت اطلاعات...</p>}
                {error && <p className="text-red-500">{error}</p>}

                <div className="space-y-4">
                    {flights.map((flight, index) => (
                        <FlightCard key={index} flight={flight} />
                    ))}
                </div>

                {!loading && flights.length === 0 && (
                    <p className="text-gray-500 text-center mt-10">هیچ پروازی یافت نشد.</p>
                )}
            </div>
        </div>
    );
};

export default FlightResults;
