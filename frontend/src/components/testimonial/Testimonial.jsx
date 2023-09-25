import "./Testimonial.scss";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="tContainer">
        <h1>What's People Say About Us</h1>
        <div className="tContainerList">
          <div className="tContainerListItem">
            <div className="tListItem">
              <h1>Saugat Paudel</h1>
              <span>Student</span>
            </div>
            <p>
            Using the Building Tenant System has been a game-changer for me.
             The platform is incredibly user-friendly, making it a breeze to find and secure the perfect rental property. 
             The transparency and security features gave me peace of mind throughout the process.
             I highly recommend it to anyone in search of a hassle-free rental experience.
              It's simply fantastic!
            </p>
          </div>
          <div className="tContainerListItem">
            <div className="tListItem">
              <h1>Sachin Bhattarai</h1>
              <span>Bartender</span>
            </div>
            <p>
            The Building Tenant System has been so useful for me.
             The platform is easy to use, and I found my dream rental property in no time.
              The convenience of scheduling, viewings, and 
              communicating with property owners has made the entire process a breeze.
            I highly recommend it.
            </p>
          </div>
          <div className="tContainerListItem">
            <div className="tListItem">
              <h1>Sushant Gautam</h1>
              <span>Landlord Owner</span>
            </div>
            <p>
            the Building Tenant System has been doing a great job for me.
              and I rent my  property within minutes. 
             The process was smooth, from uploading to securing the rental.
              Plus, the support team is responsive and helpful. I highly recommend this platform to
               anyone in search of their perfect rental home or to rent your property. 
            It's made my life so much easier!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
