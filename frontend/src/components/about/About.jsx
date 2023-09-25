import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div class="about">
      <div class="aboutContainer">
        <div class="left">
          <img
            src="https://t3.ftcdn.net/jpg/02/95/84/32/360_F_295843256_DHhyqcBH43tjGliKCvWpjLFivbBkanNe.jpg"
            alt=""
          />
        </div>
        <div class="right">
          <h1>About Us</h1>
          <p>
            Welcome to Building Tenant System, your trusted partner in the world of hassle-free property rentals.
             At Building Tenant System, we're committed to making the process of renting a house or apartment easier, 
             more convenient, and secure for both property owners and tenants.
             Our mission is simple: to redefine the way people find and rent their dream homes. 
             We believe that everyone deserves a comfortable and stress-free rental experience,
              and we've built our platform to reflect that commitment.
              Whether you're a property owner looking for the ideal tenant or a tenant searching for your dream home,
               Building Tenant System is here to simplify the journey.
          </p>
          <Link to ="/AboutUs">
          <button>See More</button></Link>
        </div>
      </div>
    </div>
  );
}

export default About;
