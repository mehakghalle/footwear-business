import React from "react";
import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >
      <MessageCircle />
    </a>
  );
}

export default WhatsAppButton;