'use client'
import QuoteItem from "./components/QuoteItem";

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
  const response = sampleResponse[0]
  const quoteText = response["content"]
  const quoteAuthor = response["author"]
  return (
    <main className="" id="quote-box">
      <QuoteItem
        text={quoteText}
        author={quoteAuthor}
      />
      <button onClick={handleButtonClick}>New Quote</button>
    </main>
  );
}
