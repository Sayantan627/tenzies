const Die = (props) => {
  return (
    <div
      className={`die-face ${props.isHeld ? "die-held" : ""}`}
      onClick={props.holdDice}
    >
      <h2 className="die-number">{props.value}</h2>
    </div>
  );
};
export default Die;
