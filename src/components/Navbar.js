import { Link, useNavigate } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import UserMenu from "./UserMenu";
import logo from '../assets/logo.svg';
import clear from '../assets/clear-x.svg';
import ThickMenu from '../assets/thick-menu.svg';
import { useEffect, useState } from "react";

function Navbar(props) {
  const { loggedIn, activePage } = props;
  let navigate = useNavigate(); // to push an endpoint, call `navigate("/path");`

  const [showMobileNavbar, handleShowNavbar] = useState(false);
  const [shouldHaveListener, handleShouldHaveListener] = useState(false);

  useEffect(() => {
		let eventListener = null;
		if(shouldHaveListener) {
			eventListener = eventListener = hideMenu.bind(this);
			document.addEventListener('click', eventListener);
		}

		return () => {
			if(eventListener) {
				document.removeEventListener('click', eventListener);
			}
		}
	}, [showMobileNavbar, shouldHaveListener])

  const showMenu = show => {
		if(!show) {
			hideMenu();
			return;
		}
		
		handleShowNavbar(true);
		handleShouldHaveListener(true);

	}

  const hideMenu = (event) => {
		const element = document.getElementById('nav');
    const element2 = document.getElementById('dropdown');
		if((!element && !element2) || (event && !element.contains(event.target) && !element2.contains(event.target))) {
			handleShowNavbar(false);
			handleShouldHaveListener(false);
		}
	}

  const nonavbar = [];
  return (
    <>
		{!nonavbar.includes(activePage) &&
		<>
			<div className={`z-30 w-full absolute`}>
				<nav className={`select-none bg-gray-500 w-full`}>
          <div id="nav" className={`w-full flex flex-col lg:flex-row bg-gray-500 shadow-navbar`}>
            <div className="max-w-7xl w-full px-2 sm:px-6 lg:px-8 h-20 py-2 flex flex-col lg:flex-row mx-auto">
              <div id="toppartofnav" className={`bg-transparent`}>
                <div className="h-16 flex flex-row">
                  <div className={`block lg:hidden my-auto bg-transparent mr-2`} onClick={() => {if(showMobileNavbar) {handleShowNavbar(false); handleShouldHaveListener(false);} else {showMenu(!showMobileNavbar);}}}>
                    <img src={showMobileNavbar ? clear : ThickMenu} className={`select-none h-6 w-6 sm:h-8 sm:w-8`} />
                  </div>
	 								<Link className="flex-1 flex" to="/">
	 									<img className="h-12 my-auto z-10 w-auto select-none" src={logo} alt="MAD"/>
	 								</Link>
                </div>
              </div>
              <div className="h-8 mx-8 my-auto border-l border-gray-70"/>
              <div className="z-30 flex flex-col lg:flex-row w-full">
                <div className="w-full ml-0 flex flex-col lg:flex-row mr-4 lg:ml-4" >
                  <div className="w-full block lg:flex">
                    <div className={`${showMobileNavbar ? 'block lg:block' : 'hidden lg:block'} lg:my-auto bg-gray-500 w-full`}>
                      <nav id="dropdown" role="navigation" className="flex flex-col lg:flex-row w-full lg:w-auto pb-2 lg:pb-0">
                        <NavbarLinks activePage={activePage} activeClass={'active'}/>
                        <div className="text-gray-text-light my-auto lg:pl-6 lg:ml-auto cursor-pointer"><UserMenu /></div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
				</nav>
			</div>

		</>
		}
		</>
  );
	return (
		<>
		{!nonavbar.includes(activePage) ?
		<>
			<div className={`z-30 w-full`}>
				<nav className={`select-none bg-gray-500 shadow-navbar z-30`}>
					<div className="h-20 py-2 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							{loggedIn?
								<>					
								<div className="flex w-full">
									<Link className="flex-1 flex" to="/">
										<img className="h-16 z-10 w-auto select-none" src={logo} alt="MAD"/>
									</Link>
                  <div className="h-full border-l border-gray-70"/>
                  <div className="flex sm:flex-1">
										<div className="my-auto mr-auto flex">
											<NavbarLinks activePage={activePage} activeClass={'active'}/>
										</div>
									</div>
									<UserMenu /> {/*ethAlias={ethAlias} ethAvatar={ethAvatar} provider={provider} logout={logout} changeNetwork={(chain)=>changeNetwork(chain)} fm={fm} torus={torus} ethAccount={ethAccount} handleShowProfile={showMenu} showProfile={showProfile} handleOpen={handleOpen} */}
								</div>
								
								</>
							:
								<div className="flex-1 flex">
									<Link className="flex-shrink flex items-center" to="/">
										<img className="h-12 z-10 w-auto" src={logo} alt="MAD"/>
									</Link>
                  <div className="my-auto mx-4 sm:mx-12 h-10 border-l border-gray-70 flex-grow-0 flex-shrink"/>
                  <div className="flex sm:flex-1">
										<div className="my-auto mr-auto flex">
											<NavbarLinks activePage={activePage} activeClass={'active'}/>
										</div>
									</div>
                  <UserMenu />
								</div>
							}
						
						</div>
					</div>
				</nav>
			</div>

		</>
		:
		<>
		</>
		}
		</>
	);
}

export default Navbar;
