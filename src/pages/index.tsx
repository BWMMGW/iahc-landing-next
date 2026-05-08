import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>iahc Network</title>
      </Head>
      <div>
        <h5>iahc</h5>
        <p>
          Welcome to iahc — a flexible platform built around three core
          capabilities. Whether you need bespoke software, ready‑to‑use tools,
          or powerful backend infrastructure, we provide the foundation for
          your digital activities.
        </p>

        <h5>Our Three Core Offerings</h5>
        <ul>
          <li>
            <strong>Custom app development & sales</strong> – We build
            tailor‑made applications for clients through private consultations,
            then deliver and license them directly to you.
          </li>
          <li>
            <strong>Owned & managed service suite</strong> – A growing
            collection of integrated applications maintained by iahc, ready for
            you to use without third‑party dependencies.
          </li>
          <li>
            <strong>Infrastructure & hosting services</strong> – From server
            hosting to networking tools (VPN, DNS, and more), we give you the
            technical building blocks to run your own projects.
          </li>
        </ul>

        <p>Why iahc Stands Out</p>
        <ul>
          <li>
            <strong>Unified Experience</strong> – One login, one dashboard, and
            a consistent interface across all offerings.
          </li>
          <li>
            <strong>Community‑First Design</strong> – Features shaped by member
            feedback, ensuring you get exactly what you need.
          </li>
          <li>
            <strong>Scalable & Flexible</strong> – From small teams to large
            organisations, iahc adapts to your ambitions.
          </li>
          <li>
            <strong>Rock‑Solid Security</strong> – Enterprise‑grade encryption
            and 24/7 monitoring keep your data and conversations safe.
          </li>
        </ul>

        <h5>Getting Started Is Easy</h5>
        <p>
          1. Create your free iahc account<br />
          2. Choose the service category that fits your needs<br />
          3. Invite colleagues, friends, or fellow enthusiasts<br />
          4. Dive in – build, host, and connect
        </p>
      </div>
    </>
  );
}