import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product'
import { useFetchProduct } from "../customHooks/useFetchProduct";


function HomeScreen() {
  const {products, loading, error} = useFetchProduct();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3} key={item._id}>
            <Product product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
