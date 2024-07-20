function QuoteItem({ quote }) {
  const { content, author } = quote;
  return (
    <div>
      <div id="text">{`"${content}"`}</div>
      <div id="author">-- {author}</div>
    </div>
  );
}

export default QuoteItem;
