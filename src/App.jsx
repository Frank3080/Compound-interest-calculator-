import React, { useState } from "react";
import Layout from "./components/Layout";
import Numericinput from "./components/Numericinput";
import Sliderinput from "./components/Sliderinput";
import Calculate from "./components/Calculate";
import CalculatedAmounts from "./components/CalculatedAmounts";

function App() {
  const [initAmount, setInitAmout] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [numberOfYears, setNumberOfYears] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  function calculateCompoundInterest() {
    let total = parseInt(initAmount);
    let anualContribution = parseInt(monthlyContribution) + 12;
    for (let i = 0; i < parseInt(numberOfYears); i++) {
      total += anualContribution;
      total *= 1 + parseInt(interestRate) / 100;
      console.log(total);
    }
    setFinalValue(total);
  }

  function reset() {
    setInitAmout(0);
    setMonthlyContribution(0);
    setInterestRate(0);
    setFinalValue(null);
    setNumberOfYears(0);
  }

  return (
    <Layout>
      {finalValue ? (
        <CalculatedAmounts
          finalValue={finalValue}
          numberOfYears={numberOfYears}
          monthlyContribution={monthlyContribution}
          reset={reset}
          initAmount={initAmount}
        />
      ) : (
        <>
          <Numericinput
            title={"Initial Amount"}
            symbol={"$"}
            value={initAmount}
            setValue={setInitAmout}
          />
          <Numericinput
            title={"Monthly Contribution"}
            symbol={"$"}
            value={monthlyContribution}
            setValue={setMonthlyContribution}
          />
          <Numericinput
            title={"Interest Rate"}
            symbol={"%"}
            value={interestRate}
            setValue={setInterestRate}
          />
          <Sliderinput
            title={"Number of years"}
            value={numberOfYears}
            setValue={setNumberOfYears}
          />
          <Calculate evaluate={calculateCompoundInterest} />
          {finalValue && <CalculatedAmounts />}
        </>
      )}
    </Layout>
  );
}

export default App;
