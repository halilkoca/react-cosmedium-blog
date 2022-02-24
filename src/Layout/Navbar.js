import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import SearchList from '../components/SearchList';
import Button from '../components/Button';
class Navbar extends Component {
render(){
  return (
 <div className="wrap-to-border">
        <div className="navbar-wrap">
        <div className="left-side">
            <h1 className="logo"><Link to="/">halilkoca.com</Link></h1>
        </div>
        <div className="right-side">
            <div className="search-wrap">
                <i className="fa fa-search fa-lg" aria-hidden="true" ></i>
            <Input />
               <SearchList/>
             </div>
            <Link to="/signin" className="signin">Giriş yap</Link>
            <Button title={"Get started"} />
        </div>
    </div>
 </div>
  )
}
}

export default(Navbar);