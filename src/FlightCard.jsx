
import { FaPlaneDeparture, FaPlaneArrival, FaBuilding, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

const FlightCard = ({ flight }) => {
    return (
        <div className="bg-gradient-to-r from-white via-blue-50 to-white p-5 rounded-xl shadow-md hover:shadow-xl transition border border-blue-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                <div className="text-blue-700 text-lg font-bold flex items-center gap-2">
                    <FaBuilding className="text-blue-500" />
                    {flight.airline?.name || "نامشخص"}
                </div>
                <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                    کد پرواز: <span className="font-medium">{flight.flight.iata || "?"}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                    <FaPlaneDeparture className="text-green-500" />
                    <span>
            مبدا: <strong>{flight.departure.airport || "?"}</strong>
          </span>
                </div>

                <div className="flex items-center gap-2">
                    <FaPlaneArrival className="text-red-500" />
                    <span>
            مقصد: <strong>{flight.arrival.airport || "?"}</strong>
          </span>
                </div>

                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-yellow-600" />
                    <span>
            کشور مبدا: <strong>{flight.departure?.country || "?"}</strong>
          </span>
                </div>

                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-purple-600" />
                    <span>
            کشور مقصد: <strong>{flight.arrival?.country || "?"}</strong>
          </span>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
                <FaInfoCircle className="text-blue-400" />
                وضعیت پرواز:{" "}
                <span className="font-semibold text-gray-800">
          {flight.flight_status || "نامشخص"}
        </span>
            </div>
        </div>
    );
};

export default FlightCard;
