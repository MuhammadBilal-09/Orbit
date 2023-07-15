import React from 'react'
import "../css/styles.css"
import { Link } from 'react-router-dom';

function Sidebar() {

  return (

    <>
    <body class="sb-nav-fixed">
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <Link class="nav-link" to="/">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseForms" aria-expanded="false" aria-controls="collapseForms">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-clipboard"></i></div>
                                Forms
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseForms" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <Link class="nav-link" to="/login">Login</Link>
                                    <a class="nav-link" href="layout-sidenav-light.html">Register</a>
                                </nav>
                            </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-coins"></i></div>
                                Profit Analysis
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <a class="nav-link" href="login.html">1</a>
                                <a class="nav-link" href="login.html">2</a>
                                <a class="nav-link" href="login.html">3</a>
                                <a class="nav-link" href="login.html">4</a>
                                </nav>
                            </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseOrders" aria-expanded="false"
                            aria-controls="collapseOrders">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-bag-shopping"></i></div>
                                Orders
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseOrders"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion"
                                id="sidenavAccordionOrders">
                                    <a className="nav-link" href="#">Order List</a>
                                    <a className="nav-link" href="#">Order History</a>
                                </nav>
                            </div>
                            <Link class="nav-link collapsed" to="/products"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseProducts" aria-expanded="false"
                            aria-controls="collapseProducts">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-table"></i></div>
                                Products
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseProducts"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion"
                                id="sidenavAccordionProducts">
                                    <a className="nav-link" href="#">Product List</a>
                                    <a className="nav-link" href="#">Add Product</a>
                                </nav>
                            </div>
                            <a class="nav-link" href="tables.html">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-warehouse"></i></div>
                                Inventory
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        ORBIT
                    </div>
                </nav>
            </div>
        </div>   
        </body>
    </>
  );
}

export default Sidebar;
