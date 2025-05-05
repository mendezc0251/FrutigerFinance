import Button from "@/components/Button";
import {motion} from "motion/react"

export default function Begin(){
    return(
          <div>
              <motion.h1 className="home--title">
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
                </motion.h1>
                <motion.div className="home--button">
                  <Button text="Begin!" color="#3dc9dc" hcolor="#2fa7b9" height={100} width={200} font={65}/>
                </motion.div>
            </div>
    )
}