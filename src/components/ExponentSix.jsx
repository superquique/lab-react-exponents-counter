const ExponentSix = ({n}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{n} * {n} * {n} * {n} * {n} * {n} = <span className="total">{n*n*n*n*n*n}</span></p>
  </div>
);

export default ExponentSix;