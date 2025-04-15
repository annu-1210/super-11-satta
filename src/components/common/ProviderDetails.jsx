import React from "react";
import { listTiming } from "./Helper";

function ProviderDetails({ providerName }) {
  return (
    <section className="w-full flex items-center justify-center bg-yellow-cream py-2 shadow-xl border pt-4 mx-2 my-2 rounded-xl leading-6 h-fit border">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <h4>
            <strong>सीधे सट्टा कंपनी का No 1 खाईवाल</strong>
          </h4>
          <p>
            <strong>
              {" "}
              ✰✰
              <span className="text-dark-muted-red">{providerName}</span>
              ✰✰
            </strong>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          {listTiming.map((timing, index) => (
            <p key={index} className="text-center w-full">
              <strong>{timing}</strong>
            </p>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <p>
            <strong>जोड़ी रेट</strong>
          </p>
          <p>
            <strong>जोड़ी रेट 10-------960</strong>
          </p>
          <p>
            <strong>हरूफ रेट 100-----960</strong>
          </p>
          <p>
            <strong>
              {" "}
              ✰✰
              <span className="text-dark-muted-red">{providerName}</span>
              ✰✰
            </strong>
          </p>
          <p>
            <strong>Game Play करने के लिये नीचे लिंक पर क्लिक करे</strong>
          </p>
          <div className="flex flex-col items-center justify-center w-full space-y-5">
            <a href="/">
              <img
                src="./images/whatsapp-button.png"
                alt="connect on Whatsapp"
                height={52}
                width={150}
              />
            </a>
            <p>
              <strong>Click to chat</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProviderDetails;
