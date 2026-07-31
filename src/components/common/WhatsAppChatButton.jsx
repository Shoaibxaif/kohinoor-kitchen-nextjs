import { SITE } from "@/constants/siteConfig";

const message = "Hello Kohinoor Kitchens, I would like to know more about your modular kitchen and furniture services.";

export default function WhatsAppChatButton() {
  const phoneNumber = SITE.phone.replace(/\D/g, "");
  const chatUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={chatUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kohinoor Kitchens on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-dark sm:bottom-6 sm:right-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="size-8 fill-current"
      >
        <path d="M16.003 3.002a12.94 12.94 0 0 0-11.19 19.436L3 29l6.738-1.768a12.997 12.997 0 1 0 6.265-24.23Zm0 23.62a10.63 10.63 0 0 1-5.418-1.482l-.389-.231-4 1.05 1.07-3.9-.254-.4a10.637 10.637 0 1 1 8.991 4.963Zm5.83-7.98c-.32-.16-1.894-.935-2.187-1.04-.293-.106-.507-.16-.72.16-.214.32-.827 1.04-1.014 1.254-.187.213-.374.24-.694.08-.32-.16-1.35-.498-2.57-1.59-.95-.85-1.592-1.9-1.778-2.22-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.534.106-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.624-.525-.54-.72-.55h-.614c-.213 0-.56.08-.854.4-.293.32-1.12 1.094-1.12 2.668s1.147 3.095 1.307 3.308c.16.214 2.255 3.443 5.464 4.83.763.33 1.358.527 1.822.675.766.243 1.463.209 2.014.127.614-.092 1.894-.774 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
      </svg>
    </a>
  );
}
