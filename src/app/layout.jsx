import "./globals.css";
import localFont from "next/font/local";
import {Bebas_Neue, Press_Start_2P} from "@next/font/google"
export const metadata = {
  title: "Pokedex",
  description: "Generated by JonisCbum",
};

const press = Press_Start_2P({
  subsets: ['latin'],
  display: "swap",
  weight: ['400'],
  variable: '--font-press'
});

const bebas = Bebas_Neue({
  subsets:['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-bebas'
})

export default function RootLayout({ children }) {
  return (
    <html className={`${bebas.variable} ${press.variable}`} lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
