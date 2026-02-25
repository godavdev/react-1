import { useEffect, useState } from "react"

export const Feed = () => {

    const [val, setVal] = useState(false)


    useEffect(() => {
        if (val) {
            console.log("El valor es true")
        } else {
            console.log("El valor es false")
        }
    }, [val])



    console.log("Renderizando el feed")



    const toggle = () => {
        setVal(!val)
    }
    

    return <div className={val ? "bg-red-500" : "bg-blue-500"} onClick={toggle}>
        <h1 className="text-white text-5xl">Feed</h1>
    </div>
}