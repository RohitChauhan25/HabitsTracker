import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  const date = new Date()
  return (
    <Nav>
      <Container className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold"> Habits Tracker</h3>
        <span>{date.toDateString()}</span>
      </Container>
    </Nav>
  )
}

export default Header
