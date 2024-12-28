import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
// import { Button, GridLayout } from "@crhis35/plazakit";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const artists = [
  {
    title: "Juanes",
    description: "Artista de pop colombiano",
    tag: 'Confirmado',
    image: '/images/juanes.jpg'
  },
  {
    title: "Shakira",
    description: "Artista de pop colombiano",
    tag: 'Confirmado',
    image: '/images/shakira.jpg'
  },
  {
    title: "Maluma",
    description: "Artista de pop colombiano",
    tag: 'Confirmado',
    image: '/images/maluma.jpg'
  },
  {
    title: "J Balvin",
    description: "Artista de pop colombiano",
    tag: 'Confirmado',
    image: '/images/jbalvin.jpg'
  },
  {
    title: "Sebastian Yatra",
    description: "Artista de pop colombiano",
    tag: 'Confirmado',
    image: '/images/sebastian-yatra.jpg'
  }
]

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-16 flex flex-col gap-10 my-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Cátalogo de artistas</h1>

          <Link href="/" className="flex gap-5 text-[#9CF3E6] items-center px-5">
            <Image src='/icons/arrowBack.svg' width={20} height={20} alt='Arrow back' />
            Volver al inicio
          </Link>
        </div>

        <div className="bg-[#14171F] w-full rounded-md">
          <form className="grid grid-cols-4 gap-5 p-5">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Image src='/icons/search.svg' width={20} height={20} alt='Search' />
              </div>
              <input
                type="text"
                placeholder="Buscar artista"
                className="bg-[#202531] py-2 px-12 rounded-md w-full"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Image src='/icons/location.svg' width={20} height={20} alt='Search' />
              </div>
              <select className="bg-[#202531] py-2 px-12 rounded-md w-full">
                <option value="COL">Colombia</option>
                <option value="BRA">Brasil</option>
                <option value="ARG">Argentina</option>
              </select>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Image src='/icons/gender.svg' width={20} height={20} alt='Search' />
              </div>
              <select className="bg-[#202531] py-2 px-12 rounded-md w-full">
                <option value="ALL">Todos los géneros</option>
                <option value="POP">Pop</option>
                <option value="ROCK">Rock</option>
              </select>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Image src='/icons/artist.svg' width={20} height={20} alt='Search' />
              </div>
              <select className="bg-[#202531] py-2 px-12 rounded-md w-full">
                <option value="ALL">Todos los artistas</option>
                <option value="1">1</option>
              </select>
            </div>
          </form>
        </div >

        {/* <GridLayout columns='repeat(auto-fill, minmax(300px, 1fr))' columnGap='20px' rowGap='20px'> */}
        <div className="grid grid-cols-auto gap-5">
          {artists.map(artist => (
            <div key={artist.title} className="bg-[#14171F] rounded-md">
              <Image
                src={artist.image}
                alt={artist.title}
                width={400}
                height={225}
                className="rounded-t-md"
              />

              <div className="px-5 py-5 flex flex-col gap-3">
                <h3 className="text-xl font-bold">{artist.title}</h3>
                <p className="text-sm">{artist.description}</p>

                <Link href="/checkout">
                  <button className="bg-[#9233E9] h-10 rounded px-5 w-full">¡Lo quiero en mi ciudad!</button>
                  {/* <Button className="h-10 w-full">!Lo quiero en mi ciudad!</Button> */}
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* </GridLayout> */}
      </main >

      <Footer />
    </>
  );
}
