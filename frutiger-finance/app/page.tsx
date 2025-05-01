import Greeting from "@/components/Greeting";
import Button from "@/components/Button";
import '@/styles/page.css'

export default function Home() {
  const expenses = [{id: 1, name: "McDonalds", amount: 16.54, category: "Food", reoccuring: false}, {id: 2, name: "Mortgage", amount: 879.65, category: "Housing", reoccuring: true}, {id: 3, name: "Credit Card Payment", amount: 30.76, category: "Debt", reoccuring: false}]
  return (
    <main>
      <h1 className="home--title">
        <span style={{color: '#3dc9dc'}}>F</span>
        <span style={{color: '#2fa7b9'}}>r</span>
        <span style={{color: '#3dc9dc'}}>u</span>
        <span style={{color: '#2fa7b9'}}>t</span>
        <span style={{color: '#3dc9dc'}}>i</span>
        <span style={{color: '#2fa7b9'}}>g</span>
        <span style={{color: '#3dc9dc'}}>e</span>
        <span style={{color: '#2fa7b9'}}>r </span>
        <span style={{color: '#3dc9dc'}}>F</span>
        <span style={{color: '#2fa7b9'}}>i</span>
        <span style={{color: '#3dc9dc'}}>n</span>
        <span style={{color: '#2fa7b9'}}>a</span>
        <span style={{color: '#3dc9dc'}}>n</span>
        <span style={{color: '#2fa7b9'}}>c</span>
        <span style={{color: '#3dc9dc'}}>e</span>
        </h1>
      <section>
        {expenses.map((expense) => (
          <div key = {expense.id}>
            <p style={{color: '#2e2e2e'}}>
              {expense.name} - ${expense.amount} ({expense.category})
              <label className="recurring--checkbox">
                Recurring?
                <input type = "checkbox" checked ={expense.reoccuring} readOnly />
              </label>
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
