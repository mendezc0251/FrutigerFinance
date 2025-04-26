import Greeting from "@/components/Greeting";
import Button from "@/components/Button"

export default function Home() {
  const expenses = [{id: 1, name: "McDonalds", amount: 16.54, category: "Food", reoccuring: false}, {id: 2, name: "Mortgage", amount: 879.65, category: "Housing", reoccuring: true}, {id: 3, name: "Credit Card Payment", amount: 30.76, category: "Debt", reoccuring: false}]
  return (
    <main>
      <h1>Frutiger Finance</h1>
      <section>
        {expenses.map((expense) => (
          <div key = {expense.id}>
            <p>
              {expense.name} - ${expense.amount} ({expense.category})
            </p>
            <label>
              Reocurring
              <input type = "checkbox" checked ={expense.reoccuring} readOnly />
            </label>
          </div>
        ))}
      </section>
    </main>
  );
}
