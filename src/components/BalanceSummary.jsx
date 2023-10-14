import { useEffect } from "react";
import "./BalanceSummary.css";
import { useState } from "react";
import data from "../data";
const BalanceSummary = () => {
  const [weekData, setWeekData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    /*    const response = await fetch("../data.json");
    const data = await response.json(); */
    setWeekData(data);
  };

  const setPercentage = (value) => {
    switch (true) {
      case value >= 80:
        return "percent-over-80";
      case value >= 70:
        return "percent-over-70";
      case value >= 50:
        return "percent-over-50";
      case value >= 35:
        return "percent-over-35";
      case value >= 25:
        return "percent-over-25";
      case true:
        return "percent-over-10";
      case value >= 1 && value < 10:
        return "percent-less-10";
    }
  };

  return (
    <section className="balance-section">
      <header>
        <h1>
          My balance<span>$921.48</span>
        </h1>
        <svg
          width="72"
          height="48"
          viewBox="0 0 72 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#382314" cx="48" cy="24" r="24" />
            <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
          </g>
        </svg>
      </header>
      <section className="spending-card">
        <h2> Spending - Last 7 days</h2>
        <div className="chart-container">
          <ul>
            {weekData &&
              weekData.map((day) => {
                return (
                  <li key={day.amount + day.day}>
                    <span className={`${setPercentage(day.amount)}`}></span>
                    {day.day}
                  </li>
                );
              })}
          </ul>
        </div>

        <footer className="spending-footer">
          <div>
            <span>Total this month</span>$478.33
          </div>
          <div>
            <span>+2.4%</span> from last month
          </div>
        </footer>
      </section>
    </section>
  );
};

export default BalanceSummary;
