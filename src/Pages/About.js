import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Title from "../Components/Title/Title";

const About = () => {
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <div>
                <Container>
                    <Title>About Us</Title>
                    <Row>
                        <Col xs={6}>
                            <img
                                style={{ marginRight:150, width: 500, height: 600 }}
                                src="Images\pexels-ivan-bertolazzi-2681319.jpg"
                                alt="music band"
                            />
                            <figcaption className='figure-caption-start d-flex align-items-start'><h4>What about us is what we are</h4></figcaption>
                        </Col>
                        <Col xs={5}>
                            <div className="d-flex justify-content-md-center p-3 mb-0  fw-bolder">
                                <p>
                                    Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? 
                                    Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , 
                                    The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, 
                                    explain the treatment of excepturi of the blessed sufferings. 
                                    I never said will unfold in him receives at another time he may please the one that those works, we are less than they, 
                                    this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, 
                                    and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
                                    Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. 
                                    The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, 
                                    which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </Fragment>
    );
};

export default About;