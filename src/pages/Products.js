import { Link } from "react-router-dom"

const ProductsPage = () => {
    return (
        <>
            <h1>Product Page</h1>
            <p>go to <Link to="/">the home page</Link></p>
        </>
    )
}

export default ProductsPage