import React from "react";
import testi_1 from "../../assets/testimonial-1.jpg"
import testi_2 from "../../assets/testimonial-2.jpg"
import testi_3 from "../../assets/testimonial-3.jpg"
import testi_4 from "../../assets/testimonial-4.jpg"

const TestimonialSection = () => {
  return (
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <div class="text-center">
          <h6 class="section-title bg-white text-center text-primary px-3">
            Sponsors
          </h6>
          <h1 class="mb-5">Partners</h1>
        </div>
        <div class="owl-carousel testimonial-carousel position-relative">
          <div class="testimonial-item bg-white text-center border p-4">
            <img
              class="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src={testi_1}
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 class="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div class="testimonial-item bg-white text-center border p-4">
            <img
              class="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src={testi_2}
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 class="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p class="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div class="testimonial-item bg-white text-center border p-4">
            <img
              class="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src={testi_3}
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 class="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p class="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div class="testimonial-item bg-white text-center border p-4">
            <img
              class="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src={testi_4}
              style={{ width: "80px", height: "80px" }}
              alt=""
            />
            <h5 class="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p class="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
