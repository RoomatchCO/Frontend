import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion"
import "./Nav.css"

const Nav = (props) => {
    return (
        <div className="navbar-contenedor">
            <motion.nav
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                variants={{
                    visible: { left: -100 },
                    hidden: { left: -50 }
                }}
                whileHover={{
                    left: 0,
                    transition: { duration: 0.35 ,ease: "easeOut" },
                }}
                className='navbar'
            >
                <div className='navbar__iconos'>

                    <div className='navbar__icono-contenedor'>
                        <Link to="/buscar" className="navbar__boton">
                            <FaSearch className='navbar__boton__buscar-icono'/>
                        </Link>
                        <h1 className='navbar__texto'>Buscar roomies</h1>
                    </div>
                    <div className='navbar__icono-contenedor'>
                        <Link to="/publicar" className="navbar__boton">
                            <FaMapLocationDot className='navbar__boton__publicar-icono'/>
                        </Link>
                        <h1 className='navbar__texto'>Publicar vivenda</h1>
                    </div>
                    <div className='navbar__icono-contenedor'>
                        <Link to="/perfil" className="navbar__boton">
                            <MdPersonOutline className='navbar__boton__perfil-icono'/>
                        </Link>
                        <h1 className='navbar__texto'>Mi perfil</h1>
                    </div>
                </div>
                
                <Link to="/" className='navbar__logo-contenedor'>
                  <svg className='navbar__logo' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 172.00 107.00">
                    <path fill="#FAFAFA" d="
                      M 87.61 55.42
                      C 70.11 70.78 42.58 60.23 40.39 36.90
                      C 37.94 10.76 68.41 -3.87 87.78 12.98
                      Q 88.16 13.31 88.52 12.96
                      C 97.90 4.01 112.97 3.55 123.06 10.41
                      C 132.32 16.70 137.14 27.41 135.47 38.45
                      C 132.04 61.10 105.41 70.19 88.38 55.42
                      Q 87.99 55.08 87.61 55.42
                      Z
                      M 63.87 12.36
                      C 42.28 17.19 39.88 46.09 60.19 54.88
                      Q 71.35 59.71 83.41 51.35
                      Q 84.21 50.79 83.66 50.00
                      C 77.21 40.71 77.06 27.46 83.83 18.16
                      Q 84.11 17.78 83.76 17.46
                      Q 75.27 9.81 63.87 12.36
                      Z
                      M 129.89 34.15
                      A 22.49 22.49 0.0 0 0 107.40 11.66
                      A 22.49 22.49 0.0 0 0 84.91 34.15
                      A 22.49 22.49 0.0 0 0 107.40 56.64
                      A 22.49 22.49 0.0 0 0 129.89 34.15
                      Z"
                    />
                    <path fill="#FAFAFA" d="
                      M 156.71 102.11
                      C 157.88 94.96 154.20 82.51 144.55 84.79
                      Q 129.25 88.42 113.78 90.91
                      Q 100.16 93.11 88.00 90.14
                      C 73.50 86.59 58.07 80.68 43.25 81.25
                      C 31.31 81.70 20.59 91.22 16.49 102.00
                      Q 16.17 102.82 15.29 102.84
                      L 10.71 102.91
                      Q 9.81 102.93 10.10 102.08
                      Q 13.71 91.46 22.14 83.90
                      C 31.47 75.52 42.79 73.98 54.00 75.62
                      C 73.02 78.40 90.89 87.93 110.50 85.01
                      Q 126.45 82.63 142.14 78.98
                      Q 146.22 78.03 148.92 78.61
                      C 159.30 80.81 163.92 92.27 162.93 101.87
                      A 1.00 0.99 2.6 0 1 161.95 102.76
                      L 157.34 102.85
                      Q 156.58 102.86 156.71 102.11
                      Z"
                    />
                  </svg>
                </Link>
            </motion.nav>
            {props.children}
        </div>
    )
}

export default Nav