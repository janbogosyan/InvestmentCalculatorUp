import { calculateInvestmentResults } from "../util/investment";

export default function Results({input}){
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);

    return(
      <p>Results..</p>

    );
}

//input
//initialInvestment: 10000,
//annualInvestment: 1200,
//expectedReturn: 6,
//duration: 10