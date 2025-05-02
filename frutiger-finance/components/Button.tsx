import '@/components/Button.module.css'
export default function Button({text, color}: {text: string, color: string}){
    return(
        <button style={{
            backgroundColor: color,
            width:100,
            height:50 
        }}>{text}</button>
    )
}