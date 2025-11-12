import Link from "next/link";
import { getAllApps } from "@/data/apps";

export default function Home() {
  const apps = getAllApps();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Centralized privacy policy hub for all our applications. Select an app to view its privacy policy.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Link
              key={app.id}
              href={`/${app.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {app.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {app.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  Updated: {new Date(app.lastUpdated).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
                <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-block">
                  View Policy →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              About This Service
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This is a centralized privacy policy management system. Each app has its own dedicated privacy policy page that can be easily accessed and shared. All privacy policies are kept up-to-date and comply with applicable privacy regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
