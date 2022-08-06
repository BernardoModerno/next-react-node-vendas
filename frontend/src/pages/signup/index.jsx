import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import logoImg from '../../../public/vendas.svg';

export default function SignUp() {
    return (
        <Container className='container text-center dark mt-5'>
          <Form>
            <Image src={logoImg} alt="Vendas" width="72" height="57"/>
            <div className='form-signin w-50 m-auto'>
              <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome Completo:</Form.Label>
                <Form.Control type='text' placeholder='Digite seu nome completo' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha:</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
            </div>
            <button className="w-50 btn btn-lg btn-primary" type="submit">Registrar-se</button>
          </Form>
        </Container>
    )
}