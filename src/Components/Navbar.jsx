import React, { useState,useEffect } from 'react'
import "../css/styles.css"

function Navbar() {

     // x-x-x Toggle_btn x-x-x
     const [isSidebarToggled, setIsSidebarToggled] = useState(
        localStorage.getItem('sb|sidebar-toggle') === 'true'
      );
      useEffect(() => {
        if (isSidebarToggled) {
          document.body.classList.add('sb-sidenav-toggled');
        } else {
          document.body.classList.remove('sb-sidenav-toggled');
        }
      }, [isSidebarToggled]);
      const toggleSidebar = () => {
        setIsSidebarToggled(prevState => {
          const newState = !prevState;
          localStorage.setItem('sb|sidebar-toggle', newState);
          return newState;
        });
      };


  return (

    <>
      
      <body class="sb-nav-fixed">
       
          <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            <a class="navbar-brand ps-3" href="index.html">ORBIT</a>
            {/* <!-- Sidebar Toggle--> */}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={toggleSidebar}><i class="fas fa-bars"></i></button>
            {/* <!-- Navbar Search--> */}
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-secondary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            {/* <!-- Navbar--> */}
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        </body>
      
    </>
  )
}

export default Navbar;