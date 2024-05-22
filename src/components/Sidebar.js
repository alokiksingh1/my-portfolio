
import React from 'react';

const Sidebar = () => (
  <aside className="sidebar" data-sidebar>
    <div className="sidebar-info">
      <figure className="avatar-box">
        <img src="/assets/images/my-avatar.png" alt="Alokik Singh" width="80" />
      </figure>
      <div className="info-content">
        <h1 className="name" title="Alokik Singh Kinra">Alokik Singh Kinra</h1>
        <p className="title">Computer Science Student</p>
      </div>
      <button className="info_more-btn" data-sidebar-btn>
        <span>Show Contact Information</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>
    {/* Add other sidebar elements here */}
  </aside>
);

export default Sidebar;
