import Book from "./Book"

export default function BookList(props){

    return(
        <ul>
            <li>
            <Book 
        title={props.bookList[0].title}
        author={props.bookList[0].author}
        year={props.bookList[0].year_written}
        price={props.bookList[0].price}
        />
            </li>
            <li>
            <Book 
        title={props.bookList[1].title}
        author={props.bookList[1].author}
        year={props.bookList[1].year_written}
        price={props.bookList[1].price}
        />
            </li>
        </ul>
    )
}