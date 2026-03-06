import React from 'react';
import CoursesPage from '../components/CoursesPage.jsx';
import LayoutHeaderNav from '../components/LayoutHeaderNav.jsx';

export default function Courses() {
  return (
    <>
      <LayoutHeaderNav alwaysVisible />
      <CoursesPage />
    </>
  );
}