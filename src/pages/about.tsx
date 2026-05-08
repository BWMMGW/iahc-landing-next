import Head from 'next/head';
import GravatarHovercard from '@/components/GravatarHovercard';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About us - iahc Network</title>
      </Head>
      <div>
        <p>
          In 2025 Bamdad Nabavianpour and his friend, Arsham Hadian wanted to create
          a network. They started from small projects like Minecraft server and
          Minecraft Mods. Their company was getting better. They also tried other
          projects. Today iahc is a studio full of programmers. We are trying to
          give you the best services. In iahc we write posts, we give you host
          services, we sell domains, we also offer you CDN and even more.
        </p>

        <GravatarHovercard />
      </div>
    </>
  );
}