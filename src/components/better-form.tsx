import { useState } from "react"

interface Post {
    title:string
    content: string
    likesNumber:number
}

export const BetterForm = () => {

    const [formValue, setFormValue] = useState<Post>({content:"", title:"", likesNumber:0})
    const [posts, setPosts] = useState<Post[]>([])

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const handleReset = () => {
        setFormValue({content:"", title:"", likesNumber:0})
    }

    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPosts([formValue, ...posts])
        setFormValue({content:"", title:"", likesNumber:0})
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                value={formValue.title}
                onChange={handleOnChange}
                className="p-4 text-xl border rounded-xl"
                name="title"
                type="text"
                placeholder="Introduce el titulo"/>
                <input 
                value={formValue.content}
                onChange={handleOnChange}
                className="p-4 text-xl border rounded-xl"
                name="content"
                type="text"
                placeholder="Introduce el contenido"/>
                <button type="submit" className="bg-blue-500 text-white p-4 rounded-xl">Publicar</button>
                <button type="button" className="bg-red-500 text-white p-4 rounded-xl" onClick={handleReset}>Reset</button>
            </form>
            <div>
                {
                    posts.map((val, idx) => <p key={idx}>{val.title} - {val.content}</p>)
                }
            </div>
        </>
    )
}