import Greeting from "@/components/Greeting";
import Button from "@/components/Button";
import '@/styles/page.css'

export default function Home() {
  const expenses = [{id: 1, name: "McDonalds", amount: 16.54, category: "Food", reoccuring: false}, {id: 2, name: "Mortgage", amount: 879.65, category: "Housing", reoccuring: true}, {id: 3, name: "Credit Card Payment", amount: 30.76, category: "Debt", reoccuring: false}]
  return (
    <main>
      <h1 className="home--title">
        <span style={{color: '#2fa7b9'}}>F</span>
        <span style={{color: '#3dc9dc'}}>r</span>
        <span style={{color: '#2fa7b9'}}>u</span>
        <span style={{color: '#3dc9dc'}}>t</span>
        <span style={{color: '#2fa7b9'}}>i</span>
        <span style={{color: '#3dc9dc'}}>g</span>
        <span style={{color: '#2fa7b9'}}>e</span>
        <span style={{color: '#3dc9dc'}}>r </span>
        <span style={{color: '#2fa7b9'}}>F</span>
        <span style={{color: '#3dc9dc'}}>i</span>
        <span style={{color: '#2fa7b9'}}>n</span>
        <span style={{color: '#3dc9dc'}}>a</span>
        <span style={{color: '#2fa7b9'}}>n</span>
        <span style={{color: '#3dc9dc'}}>c</span>
        <span style={{color: '#2fa7b9'}}>e</span>
        </h1>
      <Button text="Begin!"/>
    </main>
  );
}
