import { useRef, useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)
    const counterRef = useRef(0)

    const increment = () => {
        setCount(count + 1)
    }
    const increment3 = () => {
        setCount((a) => a + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    const incrementRef = () => {
        counterRef.current +=1
    }

    const decrementRef = () => {
        counterRef.current -= 1
    }

    const resetRef = () => {
        counterRef.current = 0
    }

    return (
    <div className="bg-slate-700 text-white w-screen flex flex-col gap-6 text-5xl items-center justify-center">
        <button className="bg-white text-slate-700 p-4 rounded-2xl border-red-500 border-2" onClick={increment3}>Incrementar 3</button>
        <button className="bg-white text-slate-700 p-4 rounded-2xl border-red-500 border-2" onClick={increment}>Incrementar</button>
        <button className="bg-white text-slate-700 p-4 rounded-2xl border-red-500 border-2" onClick={decrement}>Decrementar</button>
        <button className="bg-white text-slate-700 p-4 rounded-2xl border-red-500 border-2" onClick={reset}>Reset</button>
        <button className="bg-white text-slate-700 p-4 rounded-2xl border-red-500 border-2" onClick={incrementRef}>Incrementar ref</button>
        <button className="bg-white text-slate-700 p-4 rounded-2xl border-red-500 border-2" onClick={decrementRef}>Decrementar ref</button>
        <button className="bg-white text-slate-700 p-4 rounded-2xl border-red-500 border-2" onClick={resetRef}>Reset ref</button>
        <h1 className={count > 10 ? "text-9xl" : ""}>Counter: {count}</h1>
        <h1 className={count > 10 ? "text-9xl" : ""}>Ref: {counterRef.current}</h1>
    </div>
    )
}