import { Button, Divider, GridLayout } from "@crhis35/plazakit";
import Image from "next/image";
import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-[#0D1421] py-10 px-16 flex flex-col gap-10">
			<GridLayout columns='repeat(4, 1fr)' columnGap='20px' rowGap='20px'>
				<div className="flex flex-col gap-5">
					<Image src='/icons/concertPlazaLogo.svg' width={200} height={150} alt='Concert Plaza Logo' />

					<p>Conectando fans, artistas y empresarios en el mundo de la música en vivo.</p>
				</div>

				<div className="flex flex-col gap-5">
					<h3 className="text-xl font-bold">Accesos rápidos</h3>

					<ul className="flex flex-col gap-2">
						<li>
							<a href='#'>Sobre nosotros</a>
						</li>
						<li>
							<a href='#'>Eventos</a>
						</li>
						<li>
							<a href='#'>Empresarios</a>
						</li>
						<li>
							<a href='#'>Portal de artistas</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-5">
					<h3 className="text-xl font-bold">Soporte</h3>

					<ul className="flex flex-col gap-2">
						<li>
							<a href='#'>Centro de ayuda</a>
						</li>
						<li>
							<a href='#'>Términos de servicio</a>
						</li>
						<li>
							<a href='#'>Políticas de privacidad</a>
						</li>
						<li>
							<a href='#'>¿Como contactarnos?</a>
						</li>
					</ul>
				</div>

				<form className="flex flex-col gap-5">
					<h3 className="text-xl font-bold">¡Tu entrada al mundo de los mejores conciertos!</h3>

					<p>Suscríbete a nuestro boletín y sé el primero en enterarte de los próximos conciertos, ofertas exclusivas y novedades del mundo de la música.</p>

					<div className="flex gap-5">
						<input type="email" placeholder="Escriba su e-mail" className="bg-[#202531] py-2 px-5 rounded-md" />

						<Button className="p-2 h-10 rounded-md">Suscribirme</Button>
					</div>
				</form>
			</GridLayout>

			<Divider />

			<div className="flex justify-between items-center">
				<div className="flex gap-5">
					<a href='#'>
						<Image src='/icons/facebook.svg' width={30} height={30} alt='Facebook' />
					</a>

					<a href='#'>
						<Image src='/icons/youtube.svg' width={30} height={30} alt='Twitter' />
					</a>

					<a href='#'>
						<Image src='/icons/instagram.svg' width={30} height={30} alt='Instagram' />
					</a>
				</div>

				<p>© 2024 Concert Plaza. Todos los derechos reservados.</p>
			</div>
		</footer>
	)
}
