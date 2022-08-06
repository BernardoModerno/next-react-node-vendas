import '../../styles/Home.module.css';
import Image from 'next/image';
import logoImg from '../../public/vendas.svg';
import { Container, Form } from 'react-bootstrap';

export default function Home() {
  return (
        <Container className='container text-center dark mt-5'>
          <div class="row">
            <main className="form-signin w-50 m-auto">
              <Form>
                <Image src={logoImg} alt="Vendas" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            
                <div className="form-floating">
                  <input type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating sm">
                  <input type="password" className="form-control mb-2" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
            
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              </Form>
            </main>
         </div>
       </Container>
    )
}
