"use client"


import {ThemeProvider} from "next-themes"

export default function Providers({children}){
    return(
        <ThemeProvider enableSystem={true}>
            
            <div className="dark:bg-grey-100 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
                
                {children}
            </div>
        </ThemeProvider>
    )
}