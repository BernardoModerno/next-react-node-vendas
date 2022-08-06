import { Nav } from '../nav'
import { Menu } from '../menu'

export function Wrapper(props) {
  
    return (
      <>
        <Nav />
          <div className="container-fluid">
           <div className="row">
             <Menu/>
             <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {props.children}
             </main>
           </div>
         </div>
      </>
    )
   
  
}