import React from "react";

function InstructorIntro() {
  return (
    <div className="bg-lavender w-full flex flex-col items-center justify-center border-dotted border-[5px] border-black space-y-6 ">
      <div className="flex flex-col items-center justify-center w-full text-center text-[13px] sm:text-sm md:text-base">
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
      <div className="flex flex-col items-center justify-center w-full text-center">
        <p>
          <strong>S.K Bhai</strong>
        </p>
        <a href="/">
          <img
            src="./images/whatsapp-button.png"
            alt="connect on Whatsapp"
            height={69}
            width={200}
            className="w-36 sm:w-40 lg:w-[200px] h-12 sm:h-14 lg:h-[69px]"
          />
        </a>
      </div>
    </div>
  );
}

export default InstructorIntro;
