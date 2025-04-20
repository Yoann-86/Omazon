import "modules/_common_layout/Footer/FooterCta/FooterCta.scss";

function FooterCta() {
  return (
    <div className="footer-cta">
      <div className="footer-cta--container">
        <h3>Vous aussi, gagnez de l'argent avec Omazon !</h3>
        <p>
          Transformez vos passions en revenus.
          <br />
          Rejoignez notre communauté de vendeurs dès aujourd'hui !
        </p>
        <button type="button">Devenez vendeur sur Omazon</button>
      </div>
      <div className="footer-cta--footer-logo">
        <img src="/logos/omazon.svg" alt="Logo Omazon" />
      </div>
    </div>
  );
}

export default FooterCta;
