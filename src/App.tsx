import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import LandingPage from './pages/LandingPage';
import UseCasePage from './pages/UseCasePage';
import NotFoundPage from './pages/NotFoundPage';
import { AdminLogin } from './admin/AdminLogin';
import { AdminDashboard } from './admin/AdminDashboard';
import CookieConsent from './components/layout/CookieConsent';

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-warm-white flex items-center justify-center px-6">
          <div className="text-center max-w-lg">
            <h1 className="text-3xl font-heading font-extrabold text-primary">
              A aparut o eroare
            </h1>
            <p className="text-body mt-4 text-lg">
              Ne pare rau, ceva nu a functionat corect.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-8 inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors cursor-pointer"
            >
              Reincarca pagina
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/exemplu/:slug" element={<UseCasePage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </AppProvider>
    </ErrorBoundary>
  );
}
