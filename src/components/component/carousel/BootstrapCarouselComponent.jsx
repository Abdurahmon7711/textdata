// src/components/bootstrap-carousel.component.js
import React from "react";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.scss";
import CarouselRM from "../../../assets/Nurlan/img/MainPage/CarouselRM.jpg";

class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <div className="carousel__box">
                    <div className="carousel__block">
                      <img
                        className="d-block w-100"
                        src={CarouselRM}
                        alt="Second slide"
                        width="390px"
                        height="387px"
                      />
                      <div className="carousel__text">
                        <div className="carouselTop__text">
                          <h3>William Shekspir</h3>
                          <p>23.06.21</p>
                        </div>
                        <div className="carouselBottom__text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis maecenas tellus mattis id cras pulvinar. Ultrices velit et pellentesque et amet aliquam quam facilisis quam. Urna vulputate placerat tellus ultricies at arcu, in fringilla. Cursus mauris, morbi ut ullamcorper sodales proin varius enim.</p>
                          <p>Tempus, vitae, sed amet, ipsum nulla amet velit. Mattis sed porttitor et in facilisis nisi lacus, habitasse. Tortor mi id vitae orci, non id etiam netus etiam. Accumsan pellentesque commodo non sit purus. Feugiat eget neque placerat ut sed. Et at elementum at integer amet posuere. Purus dolor risus leo, egestas senectus egestas praesent dictum.<br/>
                          Dignissim at massa eu semper pulvinar sit. Purus risus eget eu tempus, at rhoncus habitant libero pellentesque. Adipiscing turpis vestibulum libero, ultricies eu, cursus tellus, nec.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption> */}
                </Carousel.Item>

              
                <Carousel.Item>
                  <div className="carousel__box">
                    <div className="carousel__block">
                      <img
                        className="d-block w-100"
                        src={CarouselRM}
                        alt="Second slide"
                        width="390px"
                        height="387px"
                      />
                      <div className="carousel__text">
                        <div className="carouselTop__text">
                          <h3>William Shekspir</h3>
                          <p>23.06.21</p>
                        </div>
                        <div className="carouselBottom__text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis maecenas tellus mattis id cras pulvinar. Ultrices velit et pellentesque et amet aliquam quam facilisis quam. Urna vulputate placerat tellus ultricies at arcu, in fringilla. Cursus mauris, morbi ut ullamcorper sodales proin varius enim.</p>
                          <p>Tempus, vitae, sed amet, ipsum nulla amet velit. Mattis sed porttitor et in facilisis nisi lacus, habitasse. Tortor mi id vitae orci, non id etiam netus etiam. Accumsan pellentesque commodo non sit purus. Feugiat eget neque placerat ut sed. Et at elementum at integer amet posuere. Purus dolor risus leo, egestas senectus egestas praesent dictum.<br/>
                          Dignissim at massa eu semper pulvinar sit. Purus risus eget eu tempus, at rhoncus habitant libero pellentesque. Adipiscing turpis vestibulum libero, ultricies eu, cursus tellus, nec.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption> */}
                </Carousel.Item>

              
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapCarouselComponent;
