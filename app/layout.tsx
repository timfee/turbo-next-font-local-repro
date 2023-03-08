import "./globals.css"
import localFont from "next/font/local"

const Serif = localFont({
  display: "swap",
  preload: true,
  variable: "--font-serif",
  src: [
    {
      path: "../public/fonts/serif-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/serif-regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/serif-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/serif-medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/serif-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/serif-semibold-italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/serif-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/serif-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${Serif.variable} antialiased`}>
      <body>
        <main className="font-serif">{children}</main>
      </body>
    </html>
  )
}
