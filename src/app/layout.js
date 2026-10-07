import "./globals.css";

export const metadata = {
  title: "Arman Hossain | Software Engineer & CSE Student",
  description: "Portfolio of Arman Hossain - Computer Science & Engineering Student at PSTU, Software Engineer specializing in Flutter, AI/ML, C# .NET, FastAPI, and IoT Systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
