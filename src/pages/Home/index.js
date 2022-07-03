import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = async () => {
    try {
      const response = await api.get("trips");
      setTrips(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
