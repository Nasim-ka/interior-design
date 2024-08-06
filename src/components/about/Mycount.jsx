import CountUp from "react-countup";
export default function Mycount({ number, title }) {
    return (
      <div className="number">
        <CountUp duration={106/40} className="counter" end={number} />
        <span>{title}</span>
      </div>
    );
  }