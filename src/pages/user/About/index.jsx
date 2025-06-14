import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        We are a company dedicated to providing the best services to our
        customers.
      </p>
      <p>
        Our team is composed of experienced professionals who are passionate
        about their work.
      </p>
      <p>Contact us for more information!</p>
      <Link to="/">Go to Home page</Link>
    </div>
  )
}

export default About
