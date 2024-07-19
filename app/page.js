'use client'
import QuoteItem from "./components/QuoteItem";
import { useState } from 'react'

const sampleResponse = [
  {
    "_id": "cOuSBYiscf",
    "author": "Albert Einstein",
    "content": "I never think of the future - it comes soon enough.",
    "tags": [
      "Future"
    ],
    "authorSlug": "albert-einstein",
    "length": 51,
    "dateAdded": "2023-04-06",
    "dateModified": "2023-04-14"
  }
]

function handleButtonClick() {
  console.log('Button clicked')
}

export default function Home() {
  const quote = sampleResponse[0]
  return (
    <main className="" id="quote-box">
      <QuoteItem
        quote={quote}
      />
      <button onClick={handleButtonClick}>New Quote</button>
    </main>
  );
}
