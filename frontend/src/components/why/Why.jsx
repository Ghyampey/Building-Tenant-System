import "./Why.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBed,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

function Why() {
  return (
    <div class="why">
      <div class="whyContainer">
        <h1>Why choose Us</h1>
        <p>This is what's make our service better than any one!</p>
        <div class="whyContainerList">
          <div class="whyContainerListItem">
            <FontAwesomeIcon icon={faBars} class="iconWhy" />
            <h2>Easy Booking</h2>
            <p>
            Our Building Tenant System simplifies booking with just a few clicks.
             Find your ideal rental property and secure it effortlessly through our user-friendly platform. 
            Say goodbye to rental headaches and hello to convenience.
            </p>
          </div>
          <div class="whyContainerListItem">
            <FontAwesomeIcon icon={faHandHoldingDollar} class="iconWhy" />
            <h2>Affordable Price</h2>
            <p>
              
             "Enjoy affordability at its best with our House Rental System.
               We offer competitive rates that won't break the bank, 
               making it easier than ever to find the perfect home within your budget.
              Your dream rental is now within reach without compromising on cost."
            </p>
          </div>
          <div class="whyContainerListItem">
            <FontAwesomeIcon icon={faBed} class="iconWhy" />
            <h2>100% Quality</h2>
            <p>
            Experience excellence with our Building Tenant System.
             We are committed to delivering 100% quality in every aspect of your rental journey,
              from property listings to customer service. Your satisfaction is our top priority, 
            ensuring that you find a high-quality home that meets all your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
