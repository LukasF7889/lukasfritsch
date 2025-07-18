import { Link } from "react-router";

const Imprint = () => {
  return (
    <div className="flex flex-col items-start gap-2 w-[75vw] mx-auto my-25">
      <Link to="/" className="primary-btn mb-6">
        ← Back
      </Link>
      <h2>Imprint</h2>
      <p>
        According to § 5 TMG
        <br />
        Lukas Fritsch
        <br />
        Buxtehuder Str. 38
        <br />
        21073 Hamburg <br />
        Germany <br />
        Contact: Email: lukas_fritsch@hotmail.de
      </p>
    </div>
  );
};

export default Imprint;
