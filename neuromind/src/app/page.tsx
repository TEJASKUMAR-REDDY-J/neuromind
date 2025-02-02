export default function HomePage() {
    return (
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary">Welcome to Neuromind</h1>
        <p className="mt-4 text-lg text-text">
          A futuristic space for my projects, thoughts, and ideas.
        </p>
        <div className="mt-6">
          <video className="w-full max-w-3xl mx-auto rounded-lg shadow-xl" autoPlay loop muted>
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
  