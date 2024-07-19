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
  const [failedFetch, setFailedFetch] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleButtonClick = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(apiUrl)
      const content = await response.json()
      setQuote(content[0])
      setFailedFetch(false)
      setIsLoading(false)
    } catch {
      setFailedFetch(true)
      setIsLoading(false)
    }
  }

  useEffect(() => { handleButtonClick() }, [])

  const failedMessage = "Failed to Fetch. Please try again after a few moments..."
  return (
    <main className="" id="quote-box">
      {
        isLoading ? <div>"Loading..."</div> :
          <QuoteItem
            quote={failedFetch ? { content: failedMessage, author: "Random Quote Machine" } : quote}
          />
      }
      <button onClick={handleButtonClick}>New Quote</button>
    </main>
  );
}
