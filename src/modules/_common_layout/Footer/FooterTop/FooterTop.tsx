import "modules/_common_layout/Footer/FooterTop/FooterTop.scss";

function FooterTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-top">
      <button
        type="button"
        className="button-reset footer-top--btn"
        onClick={scrollToTop}
      >
        Retour en haut
      </button>
    </div>
  );
}

export default FooterTop;
