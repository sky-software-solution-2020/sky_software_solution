'use client'

import { useSearchParams } from "next/navigation"

export default function Questions() {
   const params = useSearchParams()
   const value = params.get("value")

   const language = Buffer.from(value, 'hex').toString('utf-8')


   const getRandomItem = (array, count) => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));

         [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      return arr.slice(0, count);
   };


   return (

      <div className="h-screen w-screen flex items-center justify-center">
         <h1 className="text-2xl font-bold text-blue-600">This Page is Under Constructions.</h1>
      </div>

   )
}