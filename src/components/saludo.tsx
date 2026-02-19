export const Saludo = ({nombre, age}:{nombre:string, age: number}) => {

    const isAdult = age >= 18

    return <h1>Hola {nombre} {isAdult ? "Eres adulto" : "Eres menor"} </h1>
}