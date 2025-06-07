'use client'

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"


export default function Questions(){
    const params = useSearchParams()
    const value = params.get("value")

    const language = Buffer.from(value, 'hex').toString('utf-8')
 return(
    
        <Suspense fallback={<div>Loading questions...</div>}>
            <h1>{language}</h1>
        </Suspense>
    
 )
}