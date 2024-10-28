import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappLink = () => {
  return (
    <a
      href="https://wa.me/5514997728374?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!"
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#25d366',
        color: '#FFF',
        borderRadius: '50px',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '1px 1px 2px #888',
        zIndex: 1000,
      }}
      target="_blank"
      rel="noopener noreferrer" // Added for security
    >
      <FontAwesomeIcon icon={faWhatsapp} style={{ marginTop: '16px' }} />
    </a>
  );
};

export default WhatsappLink;