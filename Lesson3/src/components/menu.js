import React from 'react';

const Menu = props => {

  const arr = [
    {name: 'Main', href: '#', key: 1},
    {name: 'Product', href: '#', key: 2},
    {name: 'Reviews', href: '#', key: 3},
    {name: 'Contacts', href: '#', key: 4}
  ];

  const menuArr = arr.map((item) => {
    return <li className="nav-link" key={item.key}><a className="nav-link active" href={item.href}>{item.name}</a></li>
  });

  return (
    <div className="menu">
      <ul className="d-flex justify-content-start">
        { menuArr }
      </ul>
    </div>
  );
};

export default Menu;