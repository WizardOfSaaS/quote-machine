'use client'
import QuoteItem from "./components/QuoteItem";
import { useState, useEffect } from 'react'

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
const apiUrl = 'https://api.quotable.io/quotes/random'

export default function Home() {
  const [quote, setQuote] = useState('')

  const handleButtonClick = async () => {
    const response = await fetch(apiUrl)
    const content = await response.json()
    setQuote(content[0])
  }

  useEffect(() => { handleButtonClick() }, [])


  return (
    <main className="" id="quote-box">
      <QuoteItem
        quote={quote}
      />
      <button onClick={handleButtonClick}>New Quote</button>
    </main>
  );
}
