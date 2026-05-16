import "./globals.css";

export const metadata = {
  title: "Nguyen Chi Tin | Salesforce Developer",
  description:
    "A premium portfolio CV for Nguyen Chi Tin, Salesforce Developer with strong implementation, integration, and business solution experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
