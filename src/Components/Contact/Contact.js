import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <div>
    <div className='tonu'>
    <h1>FOR ANY QUERY FILL THE FORM </h1>
    </div>
    <div className='manu'>
    Customer Service
For general inquiries, order issues, or feedback, our team is ready to assist you. Please contact us via email or phone, and we'll get back to you as soon as possible.
<br></br>
Email: [your-email@example.com]<br></br>
Phone: (123) 456-7890
<br></br><br></br>
Social Media
Stay connected with us on social media! Follow us for updates, promotions, and more.
<br></br>
[Facebook link]
[Twitter link]
[Instagram link]
<br></br><br></br>
Address
If you'd like to visit us in person, here's our location:
<br></br>
Burger King Location
123 Burger King Street
City, State, Zip Code

Business Inquiries
For partnership, franchising, or business inquiries, please contact:
</div>

{/* <form class="form"> */}
<div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">your Email</label>
          <input type="text" id="email" name="email" required=""></input>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button class="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
  {/* <input placeholder="Enter your name" class="input" type="text"/> */}
  {/* <input placeholder="Enter your email" class="input" type="text"/> */}
    {/* <input placeholder="*********" class="input" type="password"/> */}

  {/* <button>Submit</button> */}

{/* <h1> */}
{/* Email: [business-email@example.com]<br></br> */}
{/* Phone: (123) 456-7890</h1> */}


{/* <div className='ram'> */}
      {/* if you wants to try offer and food so please contact your near by burger kings shop <br></br> */}
      {/* Otherwise please contact to helpline  */}
      {/* Number which mention belownif you wants any type of suggestion or any type of query so please do a message to us */}
      {/* <br></br><h1>Thank you to choose burger kings.</h1> */}
      {/* </div> */}
      </div>
      
      
      
    
  )
}