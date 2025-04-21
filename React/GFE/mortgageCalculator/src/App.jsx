import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [showMortgage, setShowMortgage] = useState(false);

  const [mortgageDetails, setMortageDetails] = useState({
    amount: 0,
    years: 0,
    rate: 0,
  });

  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [interestPaid, setIntrestPaid] = useState(0);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMortageDetails({ ...mortgageDetails, [name]: value });
  };

  const calculateMortgage = useMemo(() => {
    const { amount, years, rate } = mortgageDetails;

    const principal = parseFloat(amount);
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseFloat(years) * 12;

    if (!principal || !monthlyRate || !numberOfPayments) return 0;

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalAmountPaid = monthlyPayment * numberOfPayments;
    const interest = totalAmountPaid - monthlyPayment;

    setMonthlyAmount(monthlyPayment.toFixed(2));
    setTotalAmount(totalAmountPaid.toFixed(2));
    setIntrestPaid(interest.toFixed(2));
  }, [mortgageDetails]);

  const handleCalculate = () => {
    if (!showMortgage) {
      setShowMortgage(true);
    }
    calculateMortgage;
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mb-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Mortgage Calculator
          </h1>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Loan Amount:
              </label>
              <input
                type="number"
                name="amount"
                value={mortgageDetails.amount}
                onChange={(e) => handleOnChange(e)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Loan Term (years):
              </label>
              <input
                type="number"
                name="years"
                value={mortgageDetails.years}
                onChange={(e) => handleOnChange(e)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">
                Interest Rate (%):
              </label>
              <input
                type="number"
                name="rate"
                value={mortgageDetails.rate}
                onChange={(e) => handleOnChange(e)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            onClick={() => handleCalculate()}
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Calculate
          </button>
        </div>

        {showMortgage && (
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-2 text-center">
            <p className="text-lg text-gray-700 font-semibold">
              Monthly Payment Amount:
              <span className="text-blue-600">$ {monthlyAmount}</span>
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              Total Payment Amount:
              <span className="text-blue-600">$ {totalAmount}</span>
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              Total Interest Paid:
              <span className="text-blue-600">$ {interestPaid}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
