'use client';

import { useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DepartmentGrid from '@/components/dashboard/DepartmentGrid';
import ContentGrid from '@/components/dashboard/ContentGrid';
import SectionsNav from '@/components/dashboard/SectionsNav';
import BackButton from '@/components/dashboard/BackButton';
import '@/styles/dashboard.css';

export default function Dashboard() {
  const { isLoaded, userId } = useAuth();
  const [currentSection, setCurrentSection] = useState('books');
  const [currentDepartment, setCurrentDepartment] = useState('');
  const [showDepartments, setShowDepartments] = useState(true);

  // Redirect if not authenticated
  useEffect(() => {
    if (isLoaded && !userId) {
      redirect('/sign-in');
    }
  }, [isLoaded, userId]);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const handleDepartmentSelect = (department: string) => {
    setCurrentDepartment(department);
    setShowDepartments(false);
  };

  const handleBackClick = () => {
    setCurrentDepartment('');
    setShowDepartments(true);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <DashboardHeader />
      
      <div className="container">
        {!showDepartments && (
          <BackButton onClick={handleBackClick} />
        )}
        
        {!showDepartments && (
          <SectionsNav 
            currentSection={currentSection} 
            onSectionChange={handleSectionChange} 
          />
        )}
        
        {showDepartments ? (
          <DepartmentGrid onDepartmentSelect={handleDepartmentSelect} />
        ) : (
          <ContentGrid 
            department={currentDepartment} 
            section={currentSection} 
          />
        )}
      </div>
      
      <Footer />
    </>
  );
} 