import React from 'react';
import { createRoot } from 'react-dom/client';
import CoursesPage from './pages/Courses.jsx';

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/main.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<CoursesPage />);
}