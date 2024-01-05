import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  render() {
    return (
        <footer class="site-footer">
          <div class="footer-content">
            <nav class="footer-navigation">
              {/* <a href="#privacy">Politique de confidentialité</a>
              <a href="#terms">Conditions d'utilisation</a> */}
            </nav>
            <p class="copy-info">
              &copy; 2024 Adlane Ould Mohand. Tous droits réservés.
            </p>
          </div>
        </footer>
    );
  }
}

export default Footer;
