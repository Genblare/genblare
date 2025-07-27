export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            Genblare
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            AI-Powered Brand Analysis & Strategy
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Upload your brand assets. Get instant AI insights. Build strategies that convert.
          </p>
        </div>

        {/* Coming Soon / Waitlist */}
        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Launching Soon
          </h2>
          <p className="text-gray-400 mb-6">
            Be the first to revolutionize your brand strategy with AI
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Just updates on our launch.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Brand Analysis</h3>
            <p className="text-gray-400">
              AI-powered insights from your logos, websites, and marketing materials
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Strategy Builder</h3>
            <p className="text-gray-400">
              Get actionable recommendations tailored to your brand
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
            <p className="text-gray-400">
              Monitor your brand's growth and adjust strategies in real-time
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}