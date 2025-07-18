import { Link } from "react-router";

const Privacy = () => {
  return (
    <div className="flex flex-col items-start gap-2 w-[75vw] mx-auto my-25">
      <Link to="/" className="primary-btn mb-6">
        ← Back
      </Link>
      <h2>Privacy Policy</h2>
      <h4>General Information </h4>
      <p>
        This website (lukas-fritsch.de) is a static site that does not collect
        any personal data. It does not use cookies, tracking tools, analytics,
        or embedded third-party content.{" "}
      </p>
      <h4>Hosting</h4>{" "}
      <p>
        This site is hosted on Render.com. When you visit the site, technical
        data such as your IP address, the time of access, and browser
        information may be stored temporarily in server log files for
        operational and security reasons. These logs are automatically deleted
        after a short period and are not used for analytics or tracking.{" "}
      </p>
      <h4>External Links</h4>{" "}
      <p>
        This website contains links to external third-party websites. The
        respective provider or operator is always responsible for the content
        and data processing on those websites. Once you click an external link,
        their privacy policy applies.
      </p>
      <h4>Responsible for Content</h4>{" "}
      <p>
        (§ 55 Abs. 2 RStV) Lukas Fritsch Buxtehuder Str. 38 21073 Hamburg
        Germany
      </p>
    </div>
  );
};

export default Privacy;
