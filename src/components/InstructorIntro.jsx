import React from "react";

function InstructorIntro() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-6 !mt-12">
      <div className="flex flex-col items-center justify-center w-full text-center text-creamyTexture text-[13px] sm:text-sm md:text-base">
        <h4>
          <strong> नमस्कार साथियों </strong>
        </h4>
        <p>
          <strong>
            सीधा&nbsp; कंपनी खाईवाल के पास गेम प्ले करे बिंदास 1001% पेमेंट की
            गारंटी के साथ आपका अपना भाई
          </strong>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full text-center space-y-2">
        <p className="text-white text-xl">
          <strong>Pawan Bhai</strong>
        </p>
        <a
          href="https://wa.me/+917082450947"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/whatsapp-button.png"
            alt="connect on Whatsapp"
            height={69}
            width={200}
            className="w-36 sm:w-40 lg:w-[200px] h-12 sm:h-14 lg:h-[69px] "
          />
        </a>
      </div>
    </div>
  );
}

export default InstructorIntro;
