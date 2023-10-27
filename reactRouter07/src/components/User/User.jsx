import React from 'react'
import {useParams} from "react-router-dom"

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-white-500 text-black text-3xl text-center py-5'>
      
      <div id="hackerrank1">
  <img src="https://hackerrank.com/images/logo.svg" alt="HackerRank logo" />
  <div className="header-nav">
    <a href="#">Products</a>
    <a href="#">Solutions</a>
    <a href="#">Resources</a>
    <a href="#">Contact us</a>
    <a href="#">Log in</a>
    <a href="#">For developers</a>
    <button type="button">Request demo</button>
    <button type="button">Sign up</button>
    <a href="#">Pricing</a>
  </div>
  <div className="hero-section">
    <h1>Skills speak louder than words</h1>
    <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
    <button type="button">Sign up</button>
    <button type="button">Request demo</button>
  </div>
  <div className="stats-section">
    <h2>Over 40% of developers worldwide and 3,000 companies use HackerRank</h2>
    <ul>
      <li><img src="https://hackerrank.com/images/logos/peloton.png" alt="Peloton logo" /></li>
      <li><img src="https://hackerrank.com/images/logos/atlassian.png" alt="Atlassian logo" /></li>
      <li><img src="https://hackerrank.com/images/logos/bloomberg.png" alt="Bloomberg logo" /></li>
      <li><img src="https://hackerrank.com/images/logos/vmware.png" alt="VMware logo" /></li>
      <li><img src="https://hackerrank.com/images/logos/stripe.png" alt="Stripe logo" /></li>
      <li><img src="https://hackerrank.com/images/logos/goldmansachs.png" alt="Goldman Sachs logo" /></li>
      <li><img src="https://hackerrank.com/images/logos/adobe.png" alt="Adobe logo" /></li>
      <li><img src="https://hackerrank.com/images/logos/linkedin.png" alt="LinkedIn logo" /></li>
    </ul>
  </div>
  <div className="footer">
    <p>Copyright &copy; 2023 HackerRank</p>
    <a href="#">Privacy Policy</a>
    <a href="#">Terms of Service</a>
  </div>
</div>      
      </div>
  )
}

export default User