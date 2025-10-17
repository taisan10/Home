import { Container } from "../UI/UiComponent";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10  text-white">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo + Contact + Social */}
        <div className="space-y-2">
          {/* < Logo /> */}

          {/* Contact Info */}
          <div className="text-sm space-y-1 text-white/80">
            <a href="/" target="_blank" rel="noopener noreferrer">
              bluenosemarketing.com
            </a>
            <p>+91 72319 20002</p>
            <p>+1 (902) 448-5080</p>
            
          {/* </div> */}

          {/* Social Icons with SVG */}
          <div className="flex gap-4 pt-2 mb-1 h-10 -mt-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Bluenosemarketing-61564015683359/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-10 text-white hover:text-[#1877F2] transition-colors "
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.24h3.128V8.412c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.466h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>

            {/* Twitter / X */}
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-10 text-white hover:text-[#1DA1F2] transition-colors"
    fill="currentColor"

                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.555 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a> */}

{/* Instagram */}
<a
  href="https://www.instagram.com/bluenose_marketing?utm_source=ig_web_button_share_sheet&igsh=dGFyenhtd25jN3Ix"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our Instagram"
  className="inline-block hover:opacity-80 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-10 text-white hover:text-pink-600 transition-colors"
    fill="currentColor"
  >
    <path d="M349.33 69.33A93.62 93.62 0 0 1 442.67 162.67v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67A93.62 93.62 0 0 1 69.33 349.33V162.67A93.62 93.62 0 0 1 162.67 69.33h186.66m0-37.33H162.67A130.95 130.95 0 0 0 31.33 162.67v186.66A130.95 130.95 0 0 0 162.67 480h186.66A130.95 130.95 0 0 0 480 349.33V162.67A130.95 130.95 0 0 0 349.33 32z" />
    <path d="M377.33 162.67a23.47 23.47 0 1 1 23.47-23.47 23.47 23.47 0 0 1-23.47 23.47zM256 164a92 92 0 1 1-92 92 92 92 0 0 1 92-92m0-36a128 128 0 1 0 128 128A128 128 0 0 0 256 128z" />
  </svg>
</a>


            {/* YouTube */}
            {/* <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-10 text-white hover:text-[#FF0000] transition-colors"
    fill="currentColor"

                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a2.997 2.997 0 0 0-2.116-2.116C19.539 3.5 12 3.5 12 3.5s-7.539 0-9.382.57a2.997 2.997 0 0 0-2.116 2.116C.5 8.03.5 12 .5 12s0 3.97.57 5.814a2.997 2.997 0 0 0 2.116 2.116C4.461 20.5 12 20.5 12 20.5s7.539 0 9.382-.57a2.997 2.997 0 0 0 2.116-2.116C23.5 15.97 23.5 12 23.5 12s0-3.97-.002-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
              </svg>
            </a> */}

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/bluenose-marketing-digital-marketing-agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                 className="w-5 h-10 text-white hover:text-[#0077B5] transition-colors"
    fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.938v5.668H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.602 0 4.268 2.371 4.268 5.456v6.284zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07s.926-2.07 2.07-2.07 2.07.926 2.07 2.07-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452z" />
              </svg>
            </a>
          


            
       </div>
       <a href="mailto:sales@bluenosemarketing.com" target="_blank" rel="noopener noreferrer">
              sales@bluenosemarketing.com
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="/">Social Media</a>
            </li>
            <li>
              <a href="/">Graphic Designing</a>
            </li>
            <li>
              <a href="/">Video Editing</a>
            </li>
            <li>
              <a href="/">VideoGraphy</a>
            </li>
            {/* <li><a href="/services/content-marketing">Content Marketing</a></li> */}
            {/* <li><a href="/services/design">Digital Design</a></li> */}
            {/* <li><a href="/services/development">Web & Mobile Development</a></li> */}
          </ul>
        </div>

        {/* Column 3: Industries */}
        <div>
          <h4 className="font-semibold mb-4">Our Clients</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="/work/triveeni-events">Triveeni Events</a>
            </li>
            <li>
              <a href="/work/beaver-bank-station-Bar-&-grill">Beaver Bank Station Bar & Grill
</a>
            </li>
            <li>
              <a href="/work/nayya-pizza-&-grill">Nayya Pizza & Grill</a>
            </li>
            <li>
              <a href="/work/adda-indian-eatery">Adda Indian Eatery
</a>
            </li>
            <li>
              <a href="/work/pita-nutso">Pita Nutso</a>
            </li>
            <li>
              <a href="/work/sake-cafe-sushi-bar-&-grill">Sake Cafe | Sushi Bar & Grill</a>
            </li>
            <li>
              <a href="/work/hearthstone-inn">Hearthstone Inn</a>
            </li>
            <li>
              <a href="/work/the-garden-retreat">The Garden Retreat</a>
            </li>
            <li>
              <a href="/work/beshram-bar-and-grill">Besharam Bar and Grill</a>
            </li>
            <li>
              <a href="/work/rivaaj-bedford">Rivaaj Bedford | Cultural Resto-Bar</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="font-semibold mb-4">Pages </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/">Our_Clients</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">Company</a>
            </li>
           
          </ul>
        </div>
      </Container>

      {/* Embedded Map */}
      <Container>
        <div className="w-full h-80 rounded-xl overflow-hidden ring-1 ring-white/10 mt-10">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.4654753839936!2d-63.63251087902276!3d44.659525482942136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a213a9bb324a1%3A0x893bde709f90f7dc!2sBluenose%20Studio!5e0!3m2!1sen!2sca!4v1759469414406!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-white/60">
        © 2024 Bluenose Digital Marketing. All rights
        reserved. &nbsp;
        {/* <a href="/terms" className="underline">
          Terms of Service
        </a>{" "}
        |{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/cookies" className="underline">
          Cookie Policy
        </a> */}
      </div>
    </footer>
  );
}
