export default function Book(props){

    return(
        <article>
            <h2>{props.title}</h2>
            <div>{props.price} $</div>
            <div>{props.year}</div>
            <footer>
                <span>{props.author}</span>
            </footer>
        </article>
    )
}