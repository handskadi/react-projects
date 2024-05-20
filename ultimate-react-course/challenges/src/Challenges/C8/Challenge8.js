// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";

const host = "https://api.frankfurter.app/";
export default function Challenge() {
  const [amount, setAmount] = useState(40);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [outPut, setOutPut] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(
        `${host}latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await res.json();
      setOutPut(await data.rates[to]);
      setIsLoading(false);
    }
    if (from === to) {
      return setOutPut(amount);
    }
    fetchData();
  }, [amount, from, to]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {outPut} {to}
      </p>
    </div>
  );
}
