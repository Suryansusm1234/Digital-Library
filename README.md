# College Library Management System

## Overview
A comprehensive digital library management system developed for college . This platform provides students with easy access to educational resources including books, previous year question papers (PYQs), and study notes across multiple departments.Here is the clink to the [Live website](https://college-library-sage.vercel.app/)

## Features
- **Authentication**: Secure login system powered by Clerk
- **Multi-Department Support**: Resources for:
  - Computer Science
  - Mathematics
  - Physics
  - Chemistry
  - Botany
  - Zoology

- **Resource Categories**:
  - Books (Academic textbooks and reference materials)
  - PYQs (Previous Year Question Papers)
  - Notes (Study materials and lecture notes)

## Technology Stack
- **Frontend**:
  - Next.js 15.2.4
  - React 19.0.0
  - TailwindCSS
  - React Icons

- **Backend**:
  - Next.js API Routes
  - Google Drive API (for file storage)
  - Clerk Authentication

- **Development Tools**:
  - TypeScript
  - ESLint
  - Visual Studio Code

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Google Cloud Platform account
- Clerk account

### Environment Variables
Create a `.env.local` file with:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
GOOGLE_CREDENTIALS=your_google_service_account_credentials
```

### Installation
```bash
# Clone the repository
git clone https://github.com/CODE-CREW24/College-Library-.git

# Navigate to project directory
cd College-Library-

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure
```
College-Library-/
├── app/
│   ├── api/              # API routes
│   ├── dashboard/        # Dashboard pages
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
├── public/              # Static assets
└── styles/              # CSS styles
```

## API Routes
- `GET /api/google/drive`
  - Parameters:
    - `department`: Department name (e.g., 'computer-science')
    - `section`: Resource type (e.g., 'books', 'pyqs', 'notes')
  - Returns: List of files from Google Drive

## Authentication
The system uses Clerk for authentication with:
- Email/Password login
- Protected routes
- User session management

## File Storage
Files are stored in Google Drive with:
- Separate folders for each department
- Categorized sections (books, PYQs, notes)
- Automatic file listing and access control

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## License
This project is proprietary software belonging to Suryansu Sanjeebani Mohanty .

## Acknowledgments
- Google Cloud Platform for file storage
- Clerk for authentication services
- All contributors from the Department of Computer Science
- CODE-CREW members for their dedication

## Contact
For any queries, please contact:
- ssanjeebanimohanty@gmail.com
