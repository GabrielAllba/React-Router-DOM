import { Link } from "react-router-dom"

const PRODUCTS = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'},
]


const ProductsPage = () => {
    return (
      <>
        <h1>Product Page</h1>
        <p>
          go to <Link to="/">the home page</Link>
        </p>
        <ul>
          {PRODUCTS.map((prod) => (
            <li key={prod.id}>
                <Link to={`${prod.id}`} relative="product">{prod.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
}

export default ProductsPage