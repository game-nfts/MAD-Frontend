import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import WhitepaperPDF from '../assets/MAD_Whitepaper.pdf';
const NavbarLinks = (props) => {
    const {activePage, showDocs, toggleDocsNavbar, showDocsHandler} = props;
    const navigate = useNavigate();
    
    return(
        <>
          <div className="ml-auto"/>
          <div onClick={() => {
              try {
                document.getElementById('batch-auction-container').scrollIntoView({behavior: 'smooth'});
              } catch(err) {
                navigate('../', {replace: true});
              }
            }} className={`cursor-pointer select-none my-auto text-10 xs:text-15 block lg:mr-6 p-2 hover:bg-white rounded-md hover:text-gray-500 ${activePage === '/auction' ? 'text-white' : 'text-white'}`}>
            AUCTION
          </div>
          <div onClick={() => {
              navigate('../lease', {replace: true});
            }} className={`cursor-pointer select-none my-auto text-10 xs:text-15 block lg:mx-6 p-2 hover:bg-white rounded-md hover:text-gray-500 ${activePage === '/lease' ? 'text-white' : 'text-white'}`}>
            LEASE MY ESTATES
          </div>
          <div onClick={() => {
              try {
                document.getElementById('radical-market-container').scrollIntoView({behavior: 'smooth'});
              } catch(err) {
                navigate('../', {replace: true});
              }
            }} className={`cursor-pointer select-none my-auto text-10 xs:text-15 block lg:mx-6 p-2 hover:bg-white rounded-md hover:text-gray-500 ${activePage === '/lease' ? 'text-white' : 'text-white'}`}>
            RADICAL MARKET
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:w-auto pb-2 lg:pb-0">
            <div data-hover="" data-delay="0" className="nav-link w-dropdown ml-0 mr-0 align-top my-auto">
              <div className={`cursor-pointer select-none my-auto text-10 xs:text-15 block lg:ml-6 p-2 hover:bg-white rounded-md hover:text-gray-500 ${activePage === '/docs' ? 'text-white' : 'text-white'}`} onClick={() => {
                if(showDocs) {
                  toggleDocsNavbar();
                } else {
                  showDocsHandler(!showDocs)
                }
              }}>
                DOCS
              </div>
              {showDocs &&
                <nav id="docs-dropdown" className="flex flex-col block select-none lg:absolute pl-2 md:pb-2 mt-0 lg:mt-2 bg-gray-500 border-r-0 border-b-0 lg:border-r-2 lg:border-b-2 border-gray-70">
                  {/* Change target="blank" to download="MAD_Whitepaper.pdf" if we want to auto download the pdf on click */}
                  <a href={WhitepaperPDF} target="_blank" className="w-dropdown-link text-10 xs:text-15 text-white hover:bg-white rounded-md hover:text-gray-500 pl-2 md:px-0 py-2 lg:pb-2 lg:px-2">{'WHITEPAPER'}</a>
                  <a href="https://wiki.mad.xyz" target="_blank" rel="noreferrer" className="w-dropdown-link text-10 xs:text-15 text-white hover:bg-white rounded-md hover:text-gray-500 pl-2 md:px-0 py-2 lg:pb-2 lg:px-2">{'GITBOOK'}</a>
                </nav>
              }
            </div>
          </div>
        </>
       );
}
export default NavbarLinks;