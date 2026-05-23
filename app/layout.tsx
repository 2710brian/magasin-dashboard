export const metadata = {
  title: "Magasin Dashboard",
  description: "SeniorGuiden dashboard"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
