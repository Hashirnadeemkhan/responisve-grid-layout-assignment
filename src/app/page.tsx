export default function GradientLayout() {
  return (
    <div className="min-h-screen p-4 bg-gray-900">
      <div className="grid grid-cols-12 grid-rows-[auto_1fr_auto] gap-10 min-h-screen max-w-7xl mx-auto ">
        {/* Header */}
        <header className="col-span-12 bg-gradient-to-r from-purple-600 to-purple-400  p-6">
          <h1 className="text-white text-center">header</h1>
        </header>

        {/* Main Content Grid */}
        <div className="col-span-12 grid grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 bg-gradient-to-b from-teal-300 to-emerald-400  p-10">
            <h2 className="text-white text-center">sidebar</h2>
          </aside>

          {/* Content Area */}
          <div className="col-span-12 md:col-span-9 grid grid-rows-[1fr_auto] gap-10">
            {/* Content-1 */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-400  p-6">
              <h2 className="text-white text-center">Content-1</h2>
            </div>
            
            {/* Content-2 and Content-3 container */}
            <div className="grid grid-cols-2 gap-4 h-[200px]">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500  p-6">
                <h2 className="text-white text-center">Content-2</h2>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6">
                <h2 className="text-white text-center">Content-3</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="col-span-12 bg-gradient-to-r from-purple-600 to-purple-500  p-6">
          <h2 className="text-white text-center">footer</h2>
        </footer>
      </div>
    </div>
  )
}

