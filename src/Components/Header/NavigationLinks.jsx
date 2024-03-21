function NavigationLinks({ ulStyles, liStyles }) {
 return (
      <nav>
        <ul className={ulStyles}>
          <li className={liStyles}><a href="/">Principal</a></li>
          <li className={liStyles}><a href="/">Ofertas</a></li>
          <li className={liStyles}><a href="/">Contacto</a></li>
        </ul>
      </nav>
    );   
}
export default NavigationLinks