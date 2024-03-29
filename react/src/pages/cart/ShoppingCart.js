import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';
import CartModal from './CartModal';
import {api} from 'utils/api';
import {useSelector} from 'react-redux';

const ShoppingCart = () => {
    const [, settotlaPrice] = useState(0);
    const [show, setShow] = useState(false)
    const [totalCost, setTotalCost] = useState(0);
    const [cartItems, setCartItems] = useState([])
    const bas = useSelector((state) => state.Auth.basket);

    const dataTosend = () => {
        return bas.map(item => ({
            product: item.id,
            quantity: item.Quantity
        }));
    }
    const getItems = () => {
        return new Promise(async (resolve, reject) => {


            await api.post("/order/items/", dataTosend(), axiosConfig).then((res) => {
                settotlaPrice(res?.data?.total_price)
                if (res?.data?.total_price === 0) {
                    settotlaPrice("0.000")
                }
                console.log(res?.data)
                setCartItems(res?.data?.products)
                setTotalCost(res?.data?.total_price)
                resolve(res)

            }).catch((e) => {

                reject(e)
            })
        })
    }
    useEffect(() => {
        getItems().then((data) => {

        }).catch((e) => {

        })
        // eslint-disable-next-line
    }, [bas])
    // console.log(bas)
    const headers = {
        'Authorization': "Bearer " + localStorage.getItem("Token"),

    };
    const axiosConfig = {
        headers: headers,

    };
    useEffect(() => {
       // setTotalCost(getSubtotal(cartItems));
      // handleRemove()

    }, [cartItems]);


    return (
        <>
            <Card>
                <Card.Header>
                    <Row className="justify-content-between">
                        <Col md="auto">
                            <h5 className="mb-3 mb-md-0">
                                Panier ({cartItems?.length} Articles)
                            </h5>
                        </Col>
                        <Col md="auto">
                            <IconButton
                                className="border-300 me-2"
                                iconClassName="me-1"
                                variant="outline-secondary"
                                size="sm"
                                icon="chevron-left"
                                transform="shrink-4"
                                as={Link}
                                to="/products"
                            >
                                Continuer vos achats
                            </IconButton>
                            <Button
                                onClick={() => setShow(true)}
                                variant="primary"
                                size="sm"
                            >
                                Vérifier
                            </Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="p-0">
                    {cartItems.length > 0 ? (
                        <>
                            <Row className="gx-card mx-0 bg-200 text-900 fs--1 fw-semi-bold">
                                <Col xs={9} md={8} className="py-2">
                                    Nom
                                </Col>
                                <Col xs={3} md={4}>
                                    <Row>
                                        <Col md={8} className="py-2 d-none d-md-block text-center">
                                            Quantité
                                        </Col>
                                        <Col xs={12} md={4} className="text-end py-2">
                                            Prix
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {cartItems.map(product => (
                                <CartItem key={product.id}
                                          getItems={getItems}
                                      //    handleRemove={handleRemove}
                                          product={product}/>
                            ))}
                            <Row className="fw-bold gx-card mx-0">
                                <Col xs={9} md={8} className="py-2 text-end text-900">
                                    Total
                                </Col>
                                <Col className="px-0">
                                    <Row className="gx-card mx-0">
                                        <Col md={7} className="py-2 d-none d-md-block text-center">
                                            {cartItems.length} (Articles)
                                        </Col>
                                        <Col
                                            xs={12}
                                            md={5}
                                            className="text-end py-2 text-nowrap px-x1"
                                        >
                                            {parseFloat(totalCost).toFixed(3)} TND
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <p className="p-x1 mb-0 bg-light">
                            Vous n'avez aucun article dans votre panier. Allez-y et commencez
                             achats!
                        </p>
                    )}
                </Card.Body>

                {cartItems.length > 0 && (
                    <Card.Footer className="bg-light d-flex justify-content-end">
                        <Button
                            onClick={() => setShow(true)}
                            variant="primary"
                            size="sm"
                        >
                            Vérifier
                        </Button>
                    </Card.Footer>
                )}
            </Card>
            <CartModal show={show} setShow={setShow} cartItems={cartItems}/>
        </>
    );
};

export default ShoppingCart;
