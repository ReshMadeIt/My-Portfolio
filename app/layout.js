export const metadata = {
  title: "ReshMadeIt | Android Developer",
  description: "Android developer building modern Compose apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
