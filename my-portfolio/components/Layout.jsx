import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto px-4 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}