// import Header from "./Header";
// import Footer from "./Footer";
// export default function Layout({ children }) {
//   return (
//     <div className="min-h-screen bg-neutral-950 text-white selection:bg-sky-400/30 ">
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// }

import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  useEffect(() => {
    const blockActions = (e) => e.preventDefault();

    document.addEventListener("contextmenu", blockActions);     // Disable right-click
    document.addEventListener("dragstart", blockActions);       // Disable drag
    document.addEventListener("selectstart", blockActions);     // Disable text selection

    return () => {
      document.removeEventListener("contextmenu", blockActions);
      document.removeEventListener("dragstart", blockActions);
      document.removeEventListener("selectstart", blockActions);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-sky-400/30 select-none">
      <Header />
      <main className="pointer-events-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
