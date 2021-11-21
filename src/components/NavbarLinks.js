import React from 'react';
import {Link} from 'react-router-dom';
const NavbarLinks = (props) => {
    const {activePage} = props;
    
    return(
        <>
          <Link to="/auction" className={`select-none my-auto text-10 xs:text-15 block lg:pr-8 py-2 hover:text-white ${activePage == '/auction' ? 'text-white' : 'text-gray-60'}`}>
            Auction
          </Link>
          <Link to="/lease" className={`select-none my-auto text-10 xs:text-15 block lg:px-8 py-2 hover:text-white ${activePage == '/lease' ? 'text-white' : 'text-gray-60'}`}>
            Lease My Estates
          </Link>
          <Link to="/docs" className={`select-none my-auto text-10 xs:text-15 block lg:pl-8 py-2 hover:text-white ${activePage == '/docs' ? 'text-white' : 'text-gray-60'}`}>
            DOCS
          </Link>
        </>
       );
}
export default NavbarLinks;