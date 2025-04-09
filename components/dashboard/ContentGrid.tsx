'use client';

import { useState, useEffect } from 'react';

interface DriveFile {
  id: string;
  name: string;
  displayName: string;
  webViewLink: string;
  mimeType: string;
}

interface ContentGridProps {
  department: string;
  section: string;
}

export default function ContentGrid({ department, section }: ContentGridProps) {
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadContent() {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch files from the Google Drive API route
        const response = await fetch(`/api/google/drive?department=${department}&section=${section}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch files: ${response.statusText}`);
        }
        
        const data = await response.json();
        setFiles(data.files || []);
      } catch (err) {
        console.error('Error loading content:', err);
        setError(err.message || 'Failed to load content. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    
    loadContent();
  }, [department, section]);

  // Helper function to get department name
  function getDepartmentName(depId: string): string {
    const departmentNames: {[key: string]: string} = {
      'computer-science': 'Computer Science',
      'physics': 'Physics',
      'chemistry': 'Chemistry',
      'mathematics': 'Mathematics',
      'botany': 'Botany',
      'zoology': 'Zoology'
    };
    
    return departmentNames[depId] || depId;
  }

  if (loading) {
    return <div className="loading">Loading {section} for {getDepartmentName(department)}...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="content-grid">
      {files.length === 0 ? (
        <div className="no-content">No {section} found for {getDepartmentName(department)}.</div>
      ) : (
        files.map((file, index) => (
          <div key={file.id || index} className="content-card">
            <h3 className="content-title">{file.displayName}</h3>
            <p className="content-info file-type">Type: {file.mimeType?.split('/')[1] || section}</p>
            <p className="content-info file-date">Added: {new Date().toLocaleDateString()}</p>
            <a href={file.webViewLink} className="btn" target="_blank" rel="noopener noreferrer">
              View File
            </a>
          </div>
        ))
      )}
    </div>
  );
}