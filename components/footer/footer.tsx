import Image from "next/image";
import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-[#0D1421] py-10 px-5 md:px-16 flex flex-col gap-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
				<div className="flex flex-col gap-5">
					<Image src="/icons/concertPlazaLogo.svg" width={200} height={150} alt="Concert Plaza Logo" />

					<p className="text-white text-sm md:text-base">
						Conectando fans, artistas y empresarios en el mundo de la música en vivo.
					</p>
				</div>

				<div className="flex flex-col gap-5">
					<h3 className="text-xl font-bold text-white">Accesos rápidos</h3>

					<ul className="flex flex-col gap-2 text-sm md:text-base text-white">
						<li>
							<a href="#" className="hover:text-gray-300">Sobre nosotros</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300">Eventos</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300">Empresarios</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300">Portal de artistas</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-5">
					<h3 className="text-xl font-bold text-white">Soporte</h3>

					<ul className="flex flex-col gap-2 text-sm md:text-base text-white">
						<li>
							<a href="#" className="hover:text-gray-300">Centro de ayuda</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300">Términos de servicio</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300">Políticas de privacidad</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300">¿Cómo contactarnos?</a>
						</li>
					</ul>
				</div>

				<form className="flex flex-col gap-5">
					<h3 className="text-xl font-bold text-white">
						¡Tu entrada al mundo de los mejores conciertos!
					</h3>

					<p className="text-white text-sm md:text-base">
						Suscríbete a nuestro boletín y sé el primero en enterarte de los próximos conciertos, ofertas exclusivas y novedades del mundo de la música.
					</p>

					<div className="flex flex-col sm:flex-row gap-3 w-full">
						<input
							type="email"
							placeholder="Escriba su e-mail"
							className="bg-[#202531] text-white w-full sm:w-2/3 py-2 px-5 rounded-md"
						/>
						<button className="p-2 h-10 rounded-md bg-[#9233E9] w-full sm:w-auto text-white">
							Suscribirme
						</button>
					</div>
				</form>
			</div>

			<div className="w-full h-[1px] bg-[#E4E4E7]"></div>

			<div className="flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-white">
				<div className="flex gap-5">
					<a href="#">
						<Image src="/icons/facebook.svg" width={30} height={30} alt="Facebook" />
					</a>
					<a href="#">
						<Image src="/icons/youtube.svg" width={30} height={30} alt="YouTube" />
					</a>
					<a href="#">
						<Image src="/icons/instagram.svg" width={30} height={30} alt="Instagram" />
					</a>
				</div>

				<p className="text-center md:text-left">© 2024 Concert Plaza. Todos los derechos reservados.</p>
			</div>
		</footer>
	);
};
