"use client"
import '@/components/Button.module.css'
import {useState} from "react"
export default function Button({text, color, hcolor, height, width, font, onClick}: {text: string, color: string, hcolor: string, height: number, width: number, font: number, onClick: any}){
    const [hover, setHover] = useState(true)
    return(
        <button
        onMouseEnter={()=>setHover(false)}
        onMouseLeave={()=>setHover(true)} 
        onClick={onClick}
        style={{
            backgroundColor: hover ? color: hcolor,
            width:width,
            height:height,
            fontSize: font
        }}>{text}</button>
    )
}