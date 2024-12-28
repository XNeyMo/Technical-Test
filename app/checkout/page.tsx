'use client'

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = {
  artist: 'Karol G',
  event: 'Mañana Será Bonito Tour',
  tickets: [
    {
      position: 'Lateral SUR 1',
      date: '2022-03-16',
      city: 'Medellín',
      quantity: 1,
      price: 580000,
    },
    {
      position: 'Lateral SUR 1',
      date: '2022-03-29',
      city: 'Barranquilla',
      quantity: 1,
      price: 580000,
    },
    {
      position: 'Campo 2',
      date: '2022-04-11',
      city: 'Tunja',
      quantity: 1,
      price: 580000,
    },
  ],

  totalTickets: 3,
  subtotal: 1740000,
  serviceFee: 98000,
  total: 1838000,
}

const paymentMethods = [
  {
    id: 'card',
    name: 'Tarjeta de Crédito o Débito',
    description: 'Visa, Mastercard, American Express',
    logo: '/icons/card.svg'
  },
  {
    id: 'pseOrBankTransfer',
    name: 'PSE o Transferencia Bancaria',
    description: 'Transferencia directa desde tu banco',
    logo: '/icons/bank.svg'
  },
  {
    id: 'nequi',
    name: 'Nequi',
    description: 'Paga con tu cuenta Nequi',
    logo: '/icons/nequi.svg'
  },
]

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export default function Checkout() {
  const [selectedMethod, setSelectedMethod] = React.useState('card');

  const handlePaymentMethod = (method: string) => {
    setSelectedMethod(method);
  }

  return (
    <>
      <Header />

      <main className="px-5 md:px-16 flex flex-col gap-10 my-10">
        <div className="flex flex-col gap-5 sm:flex-row justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Finalizar compra</h1>

            <Link href="/" className="flex gap-5 text-[#9CF3E6] items-center px-5">
              <Image src='/icons/arrowBack.svg' width={20} height={20} alt='Arrow back' />
              Volver al detalle del evento
            </Link>
          </div>

          <button className="bg-[#DC2626] h-10 rounded px-5">Cancelar compra</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <form className="flex flex-col lg:col-span-2 gap-[20px]">
            {data.tickets.map((ticket, index) => (
              <div key={index} className="flex flex-col gap-5 bg-[#14171F] rounded-md p-5">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl mb-2 font-bold">Detalles de la compra</h2>
                    <p>{ticket.position} {capitalize(format(new Date(ticket.date), 'MMMM dd', { locale: es }))} {ticket.city}</p>
                  </div>

                  <p>{index + 1} de {data.totalTickets}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-3">
                    <label htmlFor={`name-${index}`}>
                      Nombres <span className="text-[#F87171]">*</span>
                    </label>

                    <input
                      type="text"
                      id={`name-${index}`}
                      name={`name-${index}`}
                      placeholder="Nombres"
                      className="bg-[#202531] py-2 px-5 rounded-md"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor={`lastname-${index}`}>
                      Apellidos <span className="text-[#F87171]">*</span>
                    </label>

                    <input
                      type="text"
                      id={`lastname-${index}`}
                      name={`lastname-${index}`}
                      placeholder="Apellidos"
                      className="bg-[#202531] py-2 px-5 rounded-md"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-3">
                    <label htmlFor={`email-${index}`}>
                      Correo electrónico <span className="text-[#F87171]">*</span>
                    </label>

                    <input
                      type="email"
                      id={`email-${index}`}
                      name={`email-${index}`}
                      placeholder="Correo electrónico"
                      className="bg-[#202531] py-2 px-5 rounded-md"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor={`city-${index}`}>
                      Ciudad de residencia <span className="text-[#F87171]">*</span>
                    </label>

                    <input
                      type="text"
                      id={`city-${index}`}
                      name={`city-${index}`}
                      placeholder="Ciudad de residencia"
                      className="bg-[#202531] py-2 px-5 rounded-md"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-3">
                    <label htmlFor={`phone-${index}`}>
                      Número de teléfono celular <span className="text-[#F87171]">*</span>
                    </label>

                    <input
                      type="text"
                      id={`phone-${index}`}
                      name={`phone-${index}`}
                      placeholder="Correo electrónico"
                      className="bg-[#202531] py-2 px-5 rounded-md"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor={`landline-${index}`}>
                      Teléfono fijo
                    </label>

                    <input
                      type="text"
                      id={`landline-${index}`}
                      name={`landline-${index}`}
                      placeholder="Teléfono fijo"
                      className="bg-[#202531] py-2 px-5 rounded-md"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-3">
                    <label htmlFor={`idType-${index}`}>
                      Tipo de documento <span className="text-[#F87171]">*</span>
                    </label>

                    <select
                      id={`idType-${index}`}
                      name={`idType-${index}`}
                      className="bg-[#202531] py-2 px-5 rounded-md"
                    >
                      <option value="">Tipo de documento</option>
                      <option value="CC">Cédula de ciudadanía</option>
                      <option value="CE">Cédula de extranjería</option>
                      <option value="PA">Pasaporte</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor={`idNumber-${index}`}>
                      Número de documento <span className="text-[#F87171]">*</span>
                    </label>

                    <input
                      type="text"
                      id={`idNumber-${index}`}
                      name={`idNumber-${index}`}
                      placeholder="Número de documento"
                      className="bg-[#202531] py-2 px-5 rounded-md"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-5 bg-[#14171F] rounded-md p-5">
              <h2 className="text-xl mb-2 font-bold">Método de pago</h2>

              <div className="grid lg:grid-cols-3 gap-5">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    onClick={() => handlePaymentMethod(method.id)}
                    className={`flex gap-5 cursor-pointer items-start p-5 rounded-lg ${selectedMethod === method.id
                      ? "bg-[#9333E9] text-white"
                      : "bg-[#0D0F14]"
                      }`}
                  >
                    <Image className="mt-1" src={method.logo} width={30} height={30} alt={method.name} />

                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold">{method.name}</h3>
                      <p className={`text-sm ${selectedMethod === method.id ? '' : 'text-[#A1A1AA]'}`}>{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form >

          <div className="flex w-full flex-col gap-5 bg-[#14171F] rounded-md p-5 h-auto self-start">
            <div>
              <h2 className="text-xl mb-2 font-bold">Resumen de la compra</h2>
              <p>{data.artist} - {data.event}</p>
            </div>

            {data.tickets.map((ticket, index) => (
              <div key={index}>
                <div className="flex gap-5 mb-5 items-center justify-between">
                  <div>
                    <p>{ticket.position} {capitalize(format(new Date(ticket.date), 'MMMM dd', { locale: es }))} {ticket.city}</p>
                    <p className="text-[#A1A1AA]">{ticket.quantity} x $ {ticket.price.toLocaleString()}</p>
                  </div>

                  <p className="w-1/4 text-end">$ {ticket.price.toLocaleString()}</p>
                </div>

                <div className="w-full h-[1px] bg-[#2A3141]"></div>
              </div>
            ))}

            <div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$ {data.subtotal.toLocaleString()}</p>
              </div>

              <div className="flex justify-between">
                <p>Costo de servicio</p>
                <p>$ {data.serviceFee.toLocaleString()}</p>
              </div>

              <div className="flex justify-between mb-5">
                <h3 className="text-xl font-bold">Total</h3>
                <p className="text-2xl font-bold text-[#D3ABF6]">$ {data.total.toLocaleString()}</p>
              </div>

              <div className="w-full h-[1px] bg-[#2A3141]"></div>
            </div>

            <button className="h-10 bg-[#9333E9] rounded px-5">Confirmar pago</button>
          </div>
        </div>
      </main >

      <Footer />
    </>
  );
}
