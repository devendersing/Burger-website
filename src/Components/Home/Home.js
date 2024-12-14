import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
  render() {
    return (
      <div>
      
      <div>
      <div className='sonu'>
        <h2><b><center>TYPES OF COMBO WE SERVE</center></b></h2>
</div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='pen'>
                <img src="Gallery/11.avif" alt="Pizza image" className="img-fluid"/>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              {/* <button className="button-86" role="button">Book your order</button> */}
              <h2><b style={{ color: 'brown' }}>Start Book your Order</b></h2>
              <button className="button-28" role="button">Order Deliver</button>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='term'>
              <img src="Gallery/12.avif" alt="Pizza image" className="img-fluid" data-aos="fade-right" />
              <h2>Want 100 bonus Crowns?</h2>
              <p>Which Million Dollar Whopper contest finalist did you love most? Let us know to earn 100 bonus Crowns. See terms.</p>
              <button>order now</button>
            </div>
            </div>
      
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='termo'>
              <img src="Gallery/13.avif" alt="Pizza image" className="img-fluid"  data-aos="fade-left" />
              <h2>Want 100 bonus Crowns?</h2>
              <p>Which Million Dollar Whopper® contest finalist did you love most? Let us know to earn 100 bonus Crowns. See terms.</p>
              <button>Order Now</button>
            </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='termon'>
              <img src="Gallery/14.avif" alt="Pizza image" className="img-fluid"data-aos="flip-down"  />
              <h2>Made By Flame Unauth</h2>
              <p>Taste the flame-grilled difference. Savor this hot and juicy deal. Get two Whopper® Jr. sandwiches for $5! Experience the irresistible taste, perfect for satisfying your hunger</p>
              <button>Order Now</button>
            </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='termono'>
              <img src="Gallery/15.avif" alt="Pizza image" className="img-fluid"  data-aos="flip-up" />
              <h2>Want 100 bonus Crowns?</h2>
              <p>Which Million Dollar Whopper® contest finalist did you love most? Let us know to earn 100 bonus Crowns. See terms.</p>
              <button>Order Now</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      


      
    );
  }
}

export default Home;
