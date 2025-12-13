import "../styles/footer.css"
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer_container">

      <div className="footer_top">

        <div className="footer_brand">
          <h3>HDFC ERGO Health Insurance Advisor</h3>
          <p>Ayodhya & Faizabad, Uttar Pradesh</p>
        </div>

        <div className="footer_legal">
          <p>
            This website is owned and operated by an authorized insurance advisor.
            It is not an official website of HDFC ERGO General Insurance Company Ltd.
          </p>
        </div>

      </div>

      <div className="footer_disclaimer">
        <p>
          Disclaimer: Insurance is the subject matter of solicitation.
          Policy terms, conditions, benefits, and exclusions are governed by the
          respective policy documents issued by HDFC ERGO General Insurance Company Ltd.
        </p>

        <p>
          IRDAI Registration No: XXXXXXX | License valid till: DD/MM/YYYY
        </p>
      </div>

      <div className="footer_bottom">
        <span>© 2025 Rahul Pandey. All rights reserved.</span>
        <span>
          Made with <FaHeart className="footer_heart" /> by Amit Pandey
        </span>
      </div>

    </footer>
  );
}
