import { useEffect, useRef, useState } from "react";


const Timer: React.FC = () => {
    const [secon, setSecon] = useState<number>(0)
    const [minu, setMinu] = useState<number>(59)
    const [But, setBut] = useState<boolean>(false)

    function incrementZero(value: number) {
        return value < 10 ? "0" + value : value
    }
    console.log()

    useEffect(() => {
        if (!But) return
        if (secon == 0) {
            setSecon(59)
            setMinu(minu - 1)
            return
        }

        setTimeout(() => {
            setSecon(secon - 1)

        }, 1000);
    }, [secon, But]);


    return <div>
        <h1>{incrementZero(minu)}:{incrementZero(secon)}</h1>
        <input disabled={But} onChange={(e) => { setMinu(parseInt(e.target.value == '' ? '0' : e.target.value)); setSecon(0) }} placeholder="set your Time" type="number" />
        <button onClick={() => setBut(But ? false : true)}>{But ? "Pause" : "Start"}</button>

    </div>

}

export default Timer; 