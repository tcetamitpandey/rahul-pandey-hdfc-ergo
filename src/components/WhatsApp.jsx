import "../styles/whatsapp.css";

export default function WhatsApp() {
  return (
    <div className="whatsapp_wrapper">
      <a
        href="https://wa.me/918652339403?text=I'm%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp chat"
      >
        <img height={50} src="/whatsapp.png" alt="Contact Me" />
      </a>
    </div>
  );
}
