import ContactPage from "../../UI/Contactpage";
import { Container } from "../../UI/UiComponent";

export default function Contact() {
  return (
    <Container className="py-16">
      <h1 className="bg-gray-50  text-black text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-sky-500  text-black  rounded-xl shadow">
        <ContactPage />
      </div>
    </Container>
  );
}
