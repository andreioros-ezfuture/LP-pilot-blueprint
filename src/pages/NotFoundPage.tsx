import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-primary">
            Pagina nu a fost gasita
          </h1>
          <p className="text-body mt-4 text-lg">
            Pagina pe care o cauti nu exista sau a fost mutata.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button>Inapoi la pagina principala</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
