import styles from "./Button.module.css"

export default function Button({text}: {text: string}){
    const expenses = [{id: 1, name: "McDonalds", amount: 16.54, category: "Food", reoccuring: false}, {id: 2, name: "Mortgage", amount: 879.65, category: "Housing", reoccuring: true}, {id: 3, name: "Credit Card Payment", amount: 30.76, category: "Debt", reoccuring: false}]
    return(
        <button className = {styles.button}>{text}</button>
    )
}