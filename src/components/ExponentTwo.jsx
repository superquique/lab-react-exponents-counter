const ExponentTwo = ({n}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{n} * {n} = <span className="total">{n*n}</span></p>
  </div>
);

export default ExponentTwo;