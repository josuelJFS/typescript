import { useEffect, useState } from "react";

const TimeJosuel: React.FC = () => {
    const [sec, setSec] = useState<number>(55);
    const [min, setMin] = useState<number>(59);
    const [hor, setHor] = useState<number>(0);

    useEffect(setTimeSec, [sec]);
    useEffect(setTimeMin, [min]);
  

    function setTimeSec() {
        if (sec > 59) {
            setMin(min + 1);
            setSec(0);
            return;
        }
        setTimeout(() => {
            setSec(sec + 1);
        }, 1000);
    }

    function setTimeMin() {
        if (min > 59) {
            setMin(0);
            setHor(hor + 1);
        }
    }

  

    function incrementZero(value: number) {
        return value < 10 ? "0" + value : value;
    }

    return (
        <h1>
            {incrementZero(hor)}:{incrementZero(min)}:{incrementZero(sec)}
        </h1>
    );
};

export default TimeJosuel;
