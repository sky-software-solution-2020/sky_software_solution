'use client'

import { useSearchParams } from "next/navigation"


export default function Questions(){
    const params = useSearchParams()
    const value = params.get("value")

    const language = Buffer.from(value, 'hex').toString('utf-8')
 return(
    
    <>
    <h1>{language}</h1>
    </>
    
 )
}