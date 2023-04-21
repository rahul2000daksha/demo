import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Piechart from '../components/Piechart';
import Placeholder from '../components/Placeholder';

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [prodData, setProdData] = useState([])
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState(null)
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({ user: "", email: "" });
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getData = () => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        const data = res.data

        setProdData(data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)

        console.log(err);
      })

  }
  const getCategoryData = () => {

    axios.get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        const data = res.data

        setCategories(data)

      })
      .catch((err) => {
        console.log(err);

      })
  }

  const onChangeUser = ({target:{value}}) => {
    setFormData({...formData, user: value });
  }

  const onChangeEmail = ({target:{value}}) => {
    setFormData({...formData, email: value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // setUser(formData.user)
    // setEmail(formData.email)
    setShowModal(false)
  }

  useEffect(() => {
    getData();
    getCategoryData();
  }, [])

  // useEffect(() => {
  //   setUser(formData.user)
  //   setEmail(formData.email)
  // },[formData])
  return (
    <>
      <Modal show={showModal} >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter Name' value={formData.user} onChange={onChangeUser} />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={onChangeEmail} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </Modal>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {formData.user} : {formData.email}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Select Category" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setCategory(null)} href="">All Products</NavDropdown.Item>
                {categories.map((category, index) => <NavDropdown.Item key={index} onClick={() => setCategory(category)} href="">{category}</NavDropdown.Item>)}

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main-container">
        {loading ?
          <>
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </>
          : !category ?
            prodData.map((data, index) => <ProductCard key={index} data={data} />)
            :
            prodData.filter((prod) => prod.category === category).map((data, index) => <ProductCard key={index} data={data} />)

        }
      </div>
      <button onClick={handleShow} className="analyse-btn">ANALYSE</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Categories in Catalogue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Piechart categories={categories} prodData={prodData} />
        </Modal.Body>

      </Modal>
    </>
  )
}

export default Home