import "./FooterLegals.scss";

function FooterLegals() {
  return (
    <div className="footer-legals">
      <div className="footer-legals--list">
        <a href="/">Conditions générales de vente</a>
        <a href="/">Vos informations personnelles</a>
        <a href="/">Cookies</a>
        <a href="/">Annonces basées sur vos centres d'intérêt</a>
      </div>
      <p className="footer-legals--copyright">
        © 2024 Omazon, un clone simplifié de Amazon
      </p>
    </div>
  );
}

export default FooterLegals;
