import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <nav className="flex justify-between p-5 bg-gray-900 shadow-lg">
          <Link href="/" className="text-2xl font-bold text-primary">Neuromind</Link>
          <div className="space-x-6">
            <Link href="/about" className="hover:text-secondary">About</Link>
            <Link href="/projects" className="hover:text-secondary">Projects</Link>
            <Link href="/blog" className="hover:text-secondary">Blog</Link>
          </div>
        </nav>
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
