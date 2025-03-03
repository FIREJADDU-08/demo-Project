import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css';
import Spinner from 'react-bootstrap/Spinner';

function About() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, [])

    function getAllProducts() {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((response) => {
                setProducts(response.products);
                setLoading(false);
                console.log(response);
            })
            .catch(err => {
                console.log(err);

            })
    }

    return (
        <div className="cart-container">
            {
                loading ? (<Spinner animation="border" variant="dark" className="spinner-align"/>) :
                    (
                        products.map((item, index) => {
                            return (
                                <Card key={index} style={{ width: '18rem' }} className="cart-align">
                                    <Card.Img variant="top" src={item.images[0]} style={{ height:"200px",objectFit:"contain" }} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>)
                        })
                    )
            }





        </div>
    )
}
export default About;