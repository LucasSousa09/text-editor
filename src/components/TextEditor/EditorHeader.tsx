import { motion } from 'framer-motion'
import { useState } from 'react'

export function EditorHeader(){
    const [theme, setTheme] = useState(true)

    return (
        <header className="p-4 w-full">
            <motion.button
                onClick={() => setTheme(state => !state)} 
                className="h-6 w-6 bg-yellow-100 overflow-clip"

                animate={{
                    rotate: theme ? 180 : 0,
                    borderRadius: theme ? "50%" : "20%"
                }}

                transition={{
                    duration: 0.5
                }}
            >
                <motion.div 
                    className="h-6 w-6 bg-slate-900"
                    
                    initial={{
                        y: theme ? 0 : 50,
                    }}

                    animate={{
                        y: theme ? 50 : 0,
                    }}

                    transition={{
                        duration: 0.5
                    }}
                />
            </motion.button>
        </header>
    )
}