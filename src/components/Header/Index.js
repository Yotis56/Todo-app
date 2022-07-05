import React from "react";
import './Header.css'

const Header = ({ children }) => {
  return (
    <section>
       <h1 className="main-title">ToDo list</h1>
      {children}
    </section>
  )
}

export { Header }