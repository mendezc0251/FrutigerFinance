"use client"
import Button from "@/components/Button";
import { AnimatePresence, motion } from "motion/react"
import {useState} from "react"

export default function Begin() {
  const [isVisible, setIsVisible] = useState(true)
  return (
            <div>
                <AnimatePresence initial={false}>
                  {isVisible ? (<motion.h1
                  initial={{opacity:0, scale:0}}
                  animate={{opacity:1, scale:1}}
                  exit={{opacity:0, scale:0, y:-400}}
                  transition={{type: "spring"}}
                  className="home--title">
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
                  </motion.h1>) : null}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                  {isVisible ? (<motion.div className="home--button"
                  initial ={{opacity:0, scale:0}}
                  animate={{opacity:1, scale:1}}
                  exit={{opacity:1, scale:1, y:400}}
                  >
                    <Button 
                    text="Begin!" 
                    color="#3dc9dc" 
                    hcolor="#2fa7b9" 
                    height={100} 
                    width={200} 
                    font={65}
                    onClick={()=>setIsVisible(false)}/>
                  </motion.div>) : null}
                </AnimatePresence>
            </div>
  );
}