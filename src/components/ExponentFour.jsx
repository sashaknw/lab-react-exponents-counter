function ExponentFour({ count })  {
  const result = count * count * count * count;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁴</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} *  ={" "}
        <span className="total">{result}</span>
      </p>
    </div>
  );
   
}

export default ExponentFour;