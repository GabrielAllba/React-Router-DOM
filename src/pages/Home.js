import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <h1>My home page</h1>
            <p>Go to <Link to="product">the list of products</Link></p>
        </>
    )
}

export default HomePage