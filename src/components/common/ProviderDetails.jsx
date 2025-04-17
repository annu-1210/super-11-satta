import React from "react";
import { listTiming } from "./Helper";
import BarsLine from "./BarsLine";

function ProviderDetails() {
  return (
    <section className="w-full flex items-center justify-center bg-yellow-cream shadow-xl border py-4 mx-2 my-5 sm:my-2 rounded-xl leading-6 h-fit border">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <h4>
            <strong>😊आपका भरोसा हमारी पहचान है😊</strong>
          </h4>
          <h4>
            <strong>🔰ऑनलाईन खाईवाल🔰</strong>
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-center">
            <strong>
              {" "}
              ✔
              <span className="text-dark-muted-red font-bold uppercase">
                {" "}
                Pawan Bhai trusted
              </span>{" "}
              ✔
            </strong>
          </p>
          <div className="flex space-x-0.5 mt-2">
            <BarsLine />
          </div>
          <div className="flex flex-col items-start justify-start ">
            {listTiming.map((timing, index) => (
              <p key={index} className="text-start ">
                <span className="text-2xl text-charcoal-gray">🎙</span>
                <strong className="font-bold">{timing}</strong>
              </p>
            ))}
          </div>

          <div className="flex space-x-0.5 mt-1">
            <BarsLine />
          </div>
          <h5>
            <strong>𝗚𝗔𝗠𝗘 𝗣𝗔𝗦𝗦𝗜𝗡𝗚 𝗥𝗔𝗧𝗘</strong>
          </h5>
          <p>
            <strong>➧ 𝗝𝗢𝗗𝗜 10 के  960💸</strong>
          </p>
          <p>
            <strong>➧ 𝗛𝗥𝗙 100 के 960💸</strong>
          </p>
          <div className="flex space-x-0.5 mt-2">
            <BarsLine />
          </div>
          <p className="mt-2">
            <strong>✅*Game play करने के लिये नीचे क्लिक करे</strong>
          </p>
          <a
            href="https://wa.me/+917082450947"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./images/whatsapp-button.png"
              alt="connect on Whatsapp"
              height={52}
              width={150}
            />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center mt-4 space-y-2">
          <p className="">
            <strong>
              ✅ जिस भाई की गेम डिलीट
              <br /> पाई गई तो कोई पैसे नहीं मिलेंगे✅
            </strong>
          </p>
          <div className="flex space-x-0.5 ">
            <BarsLine />
          </div>
          <p className="">
            <strong>
              &reg;NOTE जरूरी सूचना एक पर्ची में सिंगल नंबर की  पासिंग मिलेगी
              डबल नंबर कि नहीं मिलेगी
              <br /> 🌹नोट=केवल 🆗 गेम का ही हिसाब किताब किया जाएगा, चाहे आपकी
              पेमेंट प्लस हो
            </strong>
          </p>
          <div className="flex space-x-0.5 ">
            <BarsLine />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProviderDetails;
