import Link from 'next/link';

const Footer = () => {
  const today = new Date();
  const githubUrl = 'https://github.com/bwmmgw/';

  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footerBrand">
          <div className="logoContainer">
            <div className="footerLogoIcon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="4" fill="#000000" />
                <path
                  fill="none"
                  stroke="white"
                  strokeWidth="1.2"
                  d="M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6Z
                     M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"
                />
              </svg>
            </div>
            <div className="brandText">
              <span className="brandName">iahc Network.</span>
              <span className="brandTagline">Innovating Tomorrow</span>
            </div>
          </div>
          <p className="companyDescription">
            Creating cutting-edge solutions for the digital age. We transform
            complex challenges into intuitive experiences.
          </p>
        </div>

        <div className="footerLinks">
          <div className="linkGroup">
            <h3 className="linkHeading">Company</h3>
            <ul className="linkList">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="linkGroup">
            <h3 className="linkHeading">Legal</h3>
            <ul className="linkList">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/website-terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="copyright">
          Copyright &copy; {today.getFullYear()} iahc Network. All rights reserved.
        </div>
        <div className="socialLinks">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
            aria-label="GitHub Profile"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" width="24" height="24">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;