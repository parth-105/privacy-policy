export interface AppPrivacyPolicy {
  id: string;
  name: string;
  slug: string;
  description: string;
  lastUpdated: string;
  sections: PrivacySection[];
}

export interface PrivacySection {
  title: string;
  content: string;
}

/**
 * Apps Privacy Policy Data
 * 
 * To add a new app:
 * 1. Add a new object to this array
 * 2. Set the slug (this becomes the URL: /your-slug)
 * 3. Add sections with title and content
 * 4. The app will automatically appear on the home page
 * 
 * Example:
 * {
 *   id: "my-app",
 *   name: "My App",
 *   slug: "my-app",
 *   description: "App description",
 *   lastUpdated: "2024-12-19",
 *   sections: [
 *     { title: "Introduction", content: "..." },
 *     { title: "Data Collection", content: "..." }
 *   ]
 * }
 */
export const apps: AppPrivacyPolicy[] = [
  {
    id: "live-wallpaper-3d-4k",
    name: "Live Wallpaper 3D 4K",
    slug: "live-wallpaper-3d-4k",
    description: "Beautiful 3D and 4K live wallpapers for your device",
    lastUpdated: "2024-12-19",
    sections: [
      {
        title: "Introduction",
        content: `Welcome to Live Wallpaper 3D 4K ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience while using our mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use the App.`
      },
      {
        title: "Information We Collect",
        content: `Live Wallpaper 3D 4K is designed with your privacy in mind. We collect minimal information to provide you with the best experience:

**Information You Provide:**
- Gallery Access: If you choose to set wallpapers from your device's gallery, the App may request access to your photo library. This access is used solely to allow you to select and set images as wallpapers. We do not collect, store, or transmit any images from your gallery.

**Automatically Collected Information:**
- Device Information: We may collect basic device information such as device model, operating system version, and screen resolution to optimize wallpaper display and app performance.
- Usage Data: We may collect information about how you interact with the App, such as which wallpapers you view or set, to improve our services and user experience.

**No Authentication Required:**
- Our App does not require user registration or authentication. You can use all features of the App without creating an account or providing personal information.`
      },
      {
        title: "How We Use Your Information",
        content: `We use the information we collect for the following purposes:

- **To Provide Services**: To deliver wallpapers and allow you to set them as your device wallpaper, including wallpapers from your gallery.
- **To Improve the App**: To understand how users interact with the App and to enhance functionality, performance, and user experience.
- **To Personalize Experience**: To recommend wallpapers that may interest you based on your usage patterns.
- **To Ensure Security**: To detect, prevent, and address technical issues and security vulnerabilities.`
      },
      {
        title: "Gallery Access and Your Photos",
        content: `When you grant the App permission to access your photo gallery:

- **Local Access Only**: All gallery access is processed locally on your device. We do not upload, store, or transmit any of your photos to our servers or third parties.
- **No Data Collection**: We do not collect, copy, or store any images from your gallery.
- **Your Control**: You can revoke gallery access at any time through your device's settings. The App will continue to function with built-in wallpapers even if gallery access is revoked.
- **Privacy First**: Your personal photos remain private and are never shared with us or any third parties.`
      },
      {
        title: "Data Storage and Security",
        content: `- **Local Storage**: All app preferences and settings are stored locally on your device.
- **No Cloud Storage**: We do not store your personal information or photos on our servers.
- **Security Measures**: While we implement reasonable security measures, please note that no method of transmission over the internet or electronic storage is 100% secure.`
      },
      {
        title: "Third-Party Services",
        content: `The App may use third-party services for analytics and app functionality. These services may collect information used to identify you. We use:

- **Analytics Services**: To understand app usage and improve our services. These services may collect device identifiers and usage statistics.
- **Ad Services** (if applicable): To provide free content, the App may display advertisements. Ad providers may collect information to serve relevant ads.

We encourage you to review the privacy policies of any third-party services used in the App.`
      },
      {
        title: "Children's Privacy",
        content: `Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.`
      },
      {
        title: "Your Rights and Choices",
        content: `You have the following rights regarding your information:

- **Access**: You can access and view the information we collect through the App.
- **Control**: You can control app permissions through your device settings, including revoking gallery access.
- **Opt-Out**: You can stop using the App at any time and delete it from your device.
- **Data Deletion**: Since we store minimal data locally, uninstalling the App will remove all locally stored information.`
      },
      {
        title: "Changes to This Privacy Policy",
        content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`
      },
    ]
  }
];

// Helper function to get app by slug
export function getAppBySlug(slug: string): AppPrivacyPolicy | undefined {
  return apps.find(app => app.slug === slug);
}

// Helper function to get all apps
export function getAllApps(): AppPrivacyPolicy[] {
  return apps;
}

