function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-logo-img">
          <img src="./src/assets/saly.svg" />
          <p className="footer-logo-img">TimeCraft.</p>
        </div>
        <nav>
          <div className="footer-section">
            <h3>Quicklinks</h3>
            <li>Landing page</li>
            <li>Testimonials</li>
          </div>
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li>TimeCraft Mobile</li>
              <li>Plannit</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <li>Awka, Anambara</li>
            <li>support@timecraft.com</li>
          </div>
        </nav>
      </div>
      <hr />
      <div className="copyright">
        All right reserved. Pivacy policy | Terms of Service | Contact Us
      </div>
    </>
  );
}

export default Footer;
