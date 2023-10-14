const BalanceSummary = () => {
  return (
    <div>
      <header>
        <div>
          My balance <span>$921.48</span>
        </div>
        <img src="../public/images/logo.svg" alt="" />
      </header>
      <section className="spending-card">
        <h1> Spending - Last 7 days</h1>
        <ul>
          <li>mon</li>
          <li>tue</li>
          <li>wed</li>
          <li>thu</li>
          <li>fri</li>
          <li>sat</li>
          <li>sun</li>
        </ul>
        <div className="spending-footer">
          <div>Total this month $478.33</div>
          <div>
            +2.4% from last month Challenge by Frontend Mentor. Coded by Your
            Name Here.
          </div>
        </div>
      </section>
    </div>
  );
};

export default BalanceSummary;
