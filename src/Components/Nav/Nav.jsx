import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Grocery from '../Grocery/Grocery'
// import App from '../../App'
import Todo from '../Todo/Todo';
import Home from '../Home/Home';

 export default class Nav extends Component {
   render(){
     return(
     <>
     <Router>
         <div>
           <nav>
             <ul>
               <li>
                 <Link to="/">Home</Link>

               </li>
               <li>
                 <Link to="/todos/">Todo</Link>
               </li>
               <li>
                 <Link to="/groceries/">Groceries</Link>
               </li>
             </ul>
           </nav>


         </div>
           <Route exact path="/" render={() => <h1>Hello</h1>} component={Home} />
           <Route path="/todos" component={Todo} />
           <Route path="/groceries" component={Grocery} />

       </Router>
     </>
     )
   }

}
