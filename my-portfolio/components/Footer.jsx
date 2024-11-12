import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 bg-white dark:bg-gray-900">
      <Link href="/">
        <a className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Home</a>
      </Link>
      <Link href="/projects">
        <a className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Projects</a>
      </Link>
      <a href="#" className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Blogs</a>
    </footer>
  );
}