import CartWidget from "./CartWidget";

const navBar = () => {
      return (
            <nav className="navbar navbar-expand-lg bg-dark">
                  <div className="container-fluid ">
                        <a className="navbar-brand text-white p-3"  href="#">
                              Car Sale Colombia
                           

                        </a>
                        <div className="d-flex justify-content-end">
                              <div
                                    className="collapse navbar-collapse "
                                    id="navbarNav"
                              >
                                    <ul className="navbar-nav d-flex">
                                          <li className="nav-item">
                                                <a
                                                      className="nav-link text-white p-3"
                                                      aria-current="page"
                                                      href="#"
                                                >
                                                      Inicio
                                                </a>
                                          </li>
                                          <li className="nav-item">
                                                <a
                                                      className="nav-link text-white p-3"
                                                      href="#"
                                                >
                                                      <p>
                                                            Productos
                                                           
                                                      </p>
                                                </a>
                                          </li>
                                          <li className="nav-item">
                                                <a
                                                      className="nav-link text-white p-3"
                                                      href="#"
                                                >
                                                      Mis compras
                                                      {"      "}
                                                            <CartWidget />
                                                </a>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </nav>
      );
};
export default navBar;
