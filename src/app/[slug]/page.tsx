import { notFound } from "next/navigation";
import { getAppBySlug } from "@/data/apps";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: "Privacy Policy Not Found",
    };
  }

  return {
    title: `${app.name} - Privacy Policy`,
    description: `Privacy Policy for ${app.name}`,
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
      
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {app.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Privacy Policy
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Last Updated: {new Date(app.lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {app.sections.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  {section.title}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content.split("\n").map((paragraph, pIndex) => {
                    // Handle bold text
                    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                    return (
                      <p key={pIndex} className="mb-4 last:mb-0">
                        {parts.map((part, partIndex) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return (
                              <strong
                                key={partIndex}
                                className="font-semibold text-gray-900 dark:text-white"
                              >
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          return <span key={partIndex}>{part}</span>;
                        })}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            If you have questions about this privacy policy, please contact us
            through the app or our support channels.
          </p>
        </div>
      </div>
    </div>
  );
}

