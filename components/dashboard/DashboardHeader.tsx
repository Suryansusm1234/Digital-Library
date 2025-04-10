'use client';

import {  useUser } from '@clerk/nextjs';

export default function DashboardHeader() {
  const {  user } = useUser();
  
  return (
    <header className="dashboard-header">
      <div className="container">
        <div className="dashboard-header-content">
          <div className="dashboard-title-area">
            <div className="title-row">
              <h1 className="dashboard-title">Digital Library</h1>
              {user && (
                <div className="dashboard-welcome">
                  <p>Welcome, <span className="user-name">{user.firstName || 'Scholar'}</span>!</p>
                </div>
              )}
            </div>
            <p className="dashboard-subtitle">Access resources for your academic journey</p>
          </div>
        </div>
      </div>
    </header>
  );
} 