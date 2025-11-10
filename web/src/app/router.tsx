import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import IndexPage from '@/pages/home/index';
import CoursesPage from '@/pages/courses/courses';
import AboutPage from '@/pages/about/about';
import VolunteerPage from '@/pages/volunteer/volunteer';
import RegisterPage from '@/pages/register/register';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<IndexPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/volunteer" element={<VolunteerPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>
  )
);

export default router;
