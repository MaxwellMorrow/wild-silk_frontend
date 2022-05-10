import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function HeroCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 hero fluid"
            src="https://i.ibb.co/YB0MXY1/hero-soap.jpg"
            alt="First slide"
            
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero fluid"
            src="https://i.ibb.co/x7MCpgn/Kora-s-Kiss-Bars.jpg"
            alt="Second slide"
            
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero fluid"
            src="https://i.ibb.co/BKy4rGM/Dish-Soap-Bars.jpg"
            alt="Third slide"
           
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
