'use client'

import Questions from "@/components/questionPage/Questions"
import { Suspense } from "react"


export default function QuestionsPage() {

  return (

    <main>
      <Suspense fallback={<div>Loading questions...</div>}>
        <Questions />
      </Suspense>
    </main>

  )
}