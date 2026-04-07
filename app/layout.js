export const metadata = {
  title: "Reshley Atsiaya",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
