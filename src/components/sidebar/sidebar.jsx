import React from 'react';
import Promo from './promo';
import CollectionsList from './collections-list';
import './sidebar.css';
const Sidebar = () =>
  <aside>
    <Promo/>
    <CollectionsList/>
  </aside>

export default Sidebar;