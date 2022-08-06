import { Menu } from '../menu'
import { NavSup } from '../navsup'

export function Wrapper(props) {
  
    return (
      <>
        <NavSup />
          <div className="container-fluid">
           <div className="row">
             <Menu/>
             <main className="col-md-9 ms-sm-auto col-lg-11 px-md-4">
                {props.children}
             </main>
           </div>
         </div>
      </>
    )
   
  
}