export const resultsArr = [
  "REAL SATTA KING RESULT SITE ON INTERNET",
  "SHRI GANESH SATTA KING RESULT SITE ON INTERNET",
  "A7 SATTA KING RESULT SITE ON INTERNET",
  "SHRI GANESH SATTA CHART 2025 SITE ON INTERNET",
  "DELHI BAZAR SATTA CHART 2025 SITE ON INTERNET",
];

export const listTiming = [
  "🎯 पालिका बाजार...1:20pm",
  "🎯 प्रयागराज...........2:00pm",
  "🎯 दिल्लीबाजार .....3:00pm ",
  "🎯 श्री गणेश...........4:30 Pm",
  "🎯 रूप नगर...........5:10pm",
  "🎯 फरीदाबाद........5:50 pm",
  "🎯 फतेहपुर...........7:10 pm",
  "🎯 गाज़ियाबाद......8:50 pm",
  "🎯 नोएडानाइट....10:00 pm",
  "🎯 गली.................11:15pm",
  "🎯 दिसावर ............3:00 am",
];

export const aboutSattaKing = [
  {
    heading: "WHAT IS SATTA KING",
    info: "REAL Satta king is a popular form of lottery and gambling that originated in India. It involves betting on numbers and is widely played across the country. The game holds cultural significance and has a rich history dating back several decades.",
  },
  {
    heading: "Evolution of A7 Satta King",
    info: 'The history of satta king can be traced back to the pre-independence era when it was known as "Ankada Jugar" or "Matka Gambling." Initially played in a more informal setting, the game gradually gained popularity and evolved into its current form. Over the years, satta king has become ingrained in Indian society, with millions of players participating in various satta king games.',
  },
  {
    heading: "Popular DPBOSS Satta King Games",
    info: "Several satta king games have emerged over time, each with its own unique rules and gameplay. Some of the most popular satta king games include:",
    description: [
      {
        title: "Disawar",
        desc: "Disawar is one of the oldest and most widely played satta king games. It involves betting on a single number between 00 and 99.",
      },
      {
        title: "Gali",
        desc: "Gali is another popular satta king game, particularly in northern India. Players bet on numbers ranging from 00 to 99, with the winning number declared based on a predetermined formula.",
      },
      {
        title: "Faridabad",
        desc: "Faridabad satta king game is named after the city of Faridabad in Haryana. It follows a similar format to Disawar and Gali, with players betting on numbers between 00 and 99.",
      },
      {
        title: "Ghaziabad",
        desc: "Ghaziabad is a prominent satta king game played in the Ghaziabad region of Uttar Pradesh. It operates on the same principles as other satta king games, with players selecting numbers and awaiting the results.",
      },
    ],
  },
  {
    heading: "Understanding Satta King Results",
    info: 'Satta king results are determined through a process known as the "satta result." This process involves drawing random numbers from a predetermined set and declaring the winning number based on specific criteria. The results are typically announced through various mediums, including online platforms and local satta king markets.',
  },
  {
    heading: "Predicting Satta King Game Results",
    info: "Predicting satta king game results is a challenging task due to the random nature of the game. However, some players employ strategies and methods to improve their chances of winning. These may include analyzing past results, studying patterns, and considering various factors that could influence the outcome",
  },
];

export const locations = [
  " Sadar Bazar ",
  " Gwalior ",
  " Shri Ganesh ",
  " Faridabad ",
  " ghaziabad ",
  " Gali ",
  " Disawar ",
  " Fatehpur ",
  " Noida Night ",
  " Delhi Bazaar ",
  " Roop Nagar ",
  " Moradabad ",
  " Palika Bazar ",
  " Prayagraj ",
  " Charminar Market ",
  " Meena Bazar ",
  " Rampur ",
  " Aligarh night ",
];

export const formatTime = (timeString) => {
  try {
    let date;
    if (timeString && !isNaN(new Date(timeString).getTime())) {
      date = new Date(timeString);
    } else {
      const [hours, minutes] = timeString.split(":");
      date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
    }

    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleTimeString("en-US", options);
  } catch (error) {
    return timeString;
  }
};
