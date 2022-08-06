import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link'


export function NavSup () {
    return (
      <Navbar bg='dark' expand='lg' variant='dark'>
          <Container>
              <Navbar.Brand as={Link} href='/' className="nav-link text-light">
                <a className='text-white-50 px-2'>Vendas</a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto'>
                      <Nav.Link
                          className="nav-link"
                          as={Link}
                          href='/dashboard'
                      >
                          <a className="nav-link">Dashboard</a>
                      </Nav.Link>
                      <Nav.Link
                          className="nav-link"
                          as={Link}
                          href='/products'
                      >
                          <a className="nav-link">Produtos</a>
                      </Nav.Link>
                  </Nav>
                  <Nav>
                      <NavDropdown
                          align='end'
                          title='Bernardo'
                          id='basic-nav-dropdown'
                      >
                          <NavDropdown.Item href='#action/3.1'>
                              Perfil
                          </NavDropdown.Item>
                          <NavDropdown.Item href='#action/3.3'>
                              Configurações
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href='#action/3.4'>
                              Sair
                          </NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    )
  
}

