import "modules/_common_layout/Footer/Footer.scss";
import FooterCta from "./FooterCta/FooterCta";
import FooterLegals from "./FooterLegals/FooterLegals";
import FooterTop from "./FooterTop/FooterTop";

function Footer() {
  return (
    <section className="footer" aria-label="Pied de page">
      <FooterTop />
      <FooterCta />
      <FooterLegals />
    </section>
  );
}

export default Footer;
