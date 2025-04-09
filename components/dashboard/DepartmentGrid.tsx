import { FiCode, FiPieChart } from 'react-icons/fi';
import { IoMdAt } from 'react-icons/io';
import { GiChemicalDrop, GiOak, GiTigerHead } from 'react-icons/gi';
import Image from 'next/image';

interface DepartmentGridProps {
  onDepartmentSelect: (department: string) => void;
}

export default function DepartmentGrid({ onDepartmentSelect }: DepartmentGridProps) {
  const departments = [
    {
      id: 'computer-science',
      title: 'Computer Science',
      description: 'Programming, algorithms, and computing fundamentals',
      icon: <FiCode size={32} />,
      color: 'from-purple-600 to-indigo-600',
      pattern: 'pattern-1.svg'
    },
    {
      id: 'physics',
      title: 'Physics',
      description: 'Classical mechanics, quantum physics, and more',
      icon: <IoMdAt size={32} />,
      color: 'from-blue-600 to-cyan-600',
      pattern: 'pattern-2.svg'
    },
    {
      id: 'chemistry',
      title: 'Chemistry',
      description: 'Organic, inorganic, and physical chemistry',
      icon: <GiChemicalDrop size={32} />,
      color: 'from-green-600 to-emerald-600',
      pattern: 'pattern-3.svg'
    },
    {
      id: 'mathematics',
      title: 'Mathematics',
      description: 'Calculus, algebra, and advanced mathematics',
      icon: <FiPieChart size={32} />,
      color: 'from-pink-600 to-rose-600',
      pattern: 'pattern-4.svg'
    },
    {
      id: 'botany',
      title: 'Botany',
      description: 'Plant biology, taxonomy, ecology, and physiology',
      icon: <GiOak size={32} />,
      color: 'from-green-500 to-lime-500',
      pattern: 'pattern-5.svg'
    },
    {
      id: 'zoology',
      title: 'Zoology',
      description: 'Animal biology, behavior, evolution, and conservation',
      icon: <GiTigerHead size={32} />,
      color: 'from-amber-500 to-yellow-400',
      pattern: 'pattern-6.svg'
    }
  ];

  return (
    <div>
      <h2 className="departments-heading">Explore Departments</h2>
      <p className="departments-subheading">Select a department to browse its resources</p>
      
      <div className="departments-grid">
        {departments.map(dept => (
          <div 
            key={dept.id}
            className="department-card-modern" 
            onClick={() => onDepartmentSelect(dept.id)}
          >
            <div className={`department-card-header bg-gradient-to-r ${dept.color}`}>
              <div className="department-icon-container">
                {dept.icon}
              </div>
            </div>
            <div className="department-card-content">
              <h2 className="department-title-modern">{dept.title}</h2>
              <p className="department-info-modern">{dept.description}</p>
              <button className="department-button">
                Browse Resources
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 