import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [itemsToMove, setItemsToMove] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);

      const items = [];

      if (width <= 570) {
        items.push('Home');
      }
      if (width <= 650) {
        items.push('Electronics');
      }
      if (width <= 700) {
        items.push('Books');
      }
      if (width <= 750) {
        items.push('Music');
      }
      if (width <= 800) {
        items.push('Movies');
      }
      if (width <= 850) {
        items.push('Clothing');
      }
      if(width<=890) items.push('Games');

      setItemsToMove(items);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        {!itemsToMove.includes('Home') && <li><a href="#">Home</a></li>}
        {!itemsToMove.includes('Electronics') && <li><a href="#">Electronics</a></li>}
        {!itemsToMove.includes('Books') && <li><a href="#">Books</a></li>}
        {!itemsToMove.includes('Music') && <li><a href="#">Music</a></li>}
        {!itemsToMove.includes('Movies') && <li><a href="#">Movies</a></li>}
        {!itemsToMove.includes('Clothing') && <li><a href="#">Clothing</a></li>}
        {!itemsToMove.includes('Games') && <li><a href="#">Games</a></li>}
        <li>
          <div className="more" onClick={toggleDropdown}>
            More ⌵
            {showDropdown && (
              <ul className="dropdown">
                {itemsToMove.includes('Home') && <li><a href="#">Home</a></li>}
                {itemsToMove.includes('Electronics') && <li><a href="#">Electronics</a></li>}
                {itemsToMove.includes('Books') && <li><a href="#">Books</a></li>}
                {itemsToMove.includes('Music') && <li><a href="#">Music</a></li>}
                {itemsToMove.includes('Movies') && <li><a href="#">Movies</a></li>}
                {itemsToMove.includes('Clothing') && <li><a href="#">Clothing</a></li>}
                {itemsToMove.includes('Games') && <li><a href="#">Games</a></li>}
                <li><a href="#">Toys</a></li>
                <li><a href="#">Furniture</a></li>
              </ul>
            )}
          </div>
        </li>
      </ul>
      <div class="search">
    <div>
      <input type="text" placeholder="Search . . ." required/>
    </div>
    </div>
    </nav>
  );
}

export default Navbar;



