import "./Footer.scss";
import FooterCta from "./FooterCta/FooterCta";
import FooterLegals from "./FooterLegals/FooterLegals";
import FooterTop from "./FooterTop/FooterTop";

function Footer() {
  return (
    <section className="footer">
      <FooterTop />
      <FooterCta />
      <FooterLegals />
    </section>
  );
}

export default Footer;
