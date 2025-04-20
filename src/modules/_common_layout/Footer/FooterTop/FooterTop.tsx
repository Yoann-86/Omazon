import "modules/_common_layout/Footer/FooterTop/FooterTop.scss";

function FooterTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="button-reset footer-top--btn"
      onClick={scrollToTop}
    >
      <div className="footer-top">
        <p>Retour en haut</p>
      </div>
    </button>
  );
}

export default FooterTop;
