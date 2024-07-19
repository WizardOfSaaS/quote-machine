function QuoteItem({ text, author }) {
  return (
    <div>
      <div id="text">{text}</div>
      <div id="author">{author}</div>
    </div>
  );
}

export default QuoteItem;
