'use client';

interface SectionsNavProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export default function SectionsNav({ currentSection, onSectionChange }: SectionsNavProps) {
  return (
    <div className="sections-nav">
      <button 
        className={`section-btn ${currentSection === 'books' ? 'active' : ''}`} 
        onClick={() => onSectionChange('books')}
      >
        Books
      </button>
      <button 
        className={`section-btn ${currentSection === 'pyqs' ? 'active' : ''}`} 
        onClick={() => onSectionChange('pyqs')}
      >
        Previous Year Questions
      </button>
      <button 
        className={`section-btn ${currentSection === 'notes' ? 'active' : ''}`} 
        onClick={() => onSectionChange('notes')}
      >
        Notes
      </button>
    </div>
  );
} 