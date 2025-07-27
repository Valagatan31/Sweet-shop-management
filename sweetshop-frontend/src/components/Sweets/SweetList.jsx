import { useEffect, useState } from "react";
import API from "../../api";
import SweetCard from "./SweetCard";
import './SweetList.css';   

export default function SweetList() {
  const [sweets, setSweets] = useState([]);

  const fetchSweets = async () => {
    const res = await API.get("/sweets");
    setSweets(res.data);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  const handlePurchase = async (id) => {
    await API.post(`/sweets/${id}/purchase`);
    fetchSweets();
  };

  return (
    <div className="sweet-list">
      {sweets.map((s) => (
        <SweetCard key={s._id} sweet={s} onPurchase={handlePurchase} />
      ))}
    </div>
  );
}
