import { useEffect, useState } from "react";

const TimeRodolf: React.FC = () => {
    const [second, setSecond] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);
    const [hora, setHora] = useState<number>(0);
    const [button, setButton] = useState<boolean>(false);

    function module(value: number) {
        if (value < 10) { return '0' + value }
        else { return value }

    }


    useEffect(() => {
        if (second == 59) {
            setSecond(0)
            setMinute(minute + 1)
            return
        }
        setTimeout(() => {
            if (button) setSecond(second + 1)

        }, 1000);

    }, [second, button])

    useEffect(() => {
        if (minute == 60) {
            setMinute(0)
            setHora(hora + 1)
        }

    }, [minute])

    return <div>
        <h1>{module(hora)} : {module(minute)} : {module(second)}</h1>
        <button onClick={() => setButton(button ? false : true)}>{button ? "Pause" : "Start"}</button>
    </div>
}

export default TimeRodolf;