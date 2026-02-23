import { useState } from "react"

export const Form = () => {

    const [post, setPost] = useState("")
    const [posts, setPosts] = useState<string[]>([])

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPost(e.target.value)
    }

    const handleReset = () => {
        setPost("")
    }

    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPosts([post, ...posts])
        setPost("")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                value={post}
                onChange={handleOnChange}
                className="p-4 text-xl border rounded-xl"
                name="post"
                type="text"
                placeholder="Escribe un post"/>
                <button type="submit" className="bg-blue-500 text-white p-4 rounded-xl">Publicar</button>
                <button type="button" className="bg-red-500 text-white p-4 rounded-xl" onClick={handleReset}>Reset</button>
            </form>
            <div>
                {
                    posts.map((val, idx) => <p key={idx}>{val}</p>)
                }
            </div>
        </>
    )
}