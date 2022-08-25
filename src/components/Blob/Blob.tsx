import "./Blob.css";

interface Porps {
  mobile?: boolean;
}

const Blob = ({ mobile }: Porps) => {
  return (
    <>
      {mobile ? (
        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg"
        >
          <g transform="translate(163.2770652770996, -3.3955001831054688)">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className="mainStopBlob1"></stop>
                <stop offset="100%" className="mainStopBlob2"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)" className="blob__path">
              <animate
                attributeName="d"
                // dur={"10000ms"}
                // repeatCount="indefinite"
                values="M431,291Q392,332,365.5,368Q339,404,294.5,392Q250,380,214,377.5Q178,375,109,373Q40,371,65.5,310.5Q91,250,82.5,199Q74,148,101,93Q128,38,189,48Q250,58,293.5,78.5Q337,99,389.5,119Q442,139,456,194.5Q470,250,431,291Z"
              ></animate>
            </path>
          </g>
        </svg>
      ) : (
        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg"
        >
          <g transform="translate(163.2770652770996, -3.3955001831054688)">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className="mainStopBlob1"></stop>
                <stop offset="100%" className="mainStopBlob2"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)" className="blob__path">
              <animate
                attributeName="d"
                dur={"10000ms"}
                repeatCount="indefinite"
                values="M439,307Q447,364,388.5,376.5Q330,389,290,384.5Q250,380,189.5,419.5Q129,459,130,389Q131,319,116.5,284.5Q102,250,69,188Q36,126,91.5,99Q147,72,198.5,73Q250,74,297,80.5Q344,87,401.5,108Q459,129,445,189.5Q431,250,439,307Z;
                M405,286.5Q377,323,351,351.5Q325,380,287.5,388Q250,396,190.5,426Q131,456,98,406.5Q65,357,54.5,303.5Q44,250,58,198.5Q72,147,109,109Q146,71,198,70Q250,69,287,95.5Q324,122,368.5,139Q413,156,423,203Q433,250,405,286.5Z;
                M431,291Q392,332,365.5,368Q339,404,294.5,392Q250,380,214,377.5Q178,375,109,373Q40,371,65.5,310.5Q91,250,82.5,199Q74,148,101,93Q128,38,189,48Q250,58,293.5,78.5Q337,99,389.5,119Q442,139,456,194.5Q470,250,431,291Z;
                M439,307Q447,364,388.5,376.5Q330,389,290,384.5Q250,380,189.5,419.5Q129,459,130,389Q131,319,116.5,284.5Q102,250,69,188Q36,126,91.5,99Q147,72,198.5,73Q250,74,297,80.5Q344,87,401.5,108Q459,129,445,189.5Q431,250,439,307Z"
              ></animate>
            </path>
          </g>
        </svg>
      )}
    </>
  );
};

export default Blob;
