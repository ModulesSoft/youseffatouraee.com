const ViewsAndTexts = (isMobile, width, height, texts) => {
  let viewsAndTexts = {
    general: {
      view: isMobile
        ? `600 ${1080 - height} ${width} ${height}`
        : "0 0 1920 1080",
    },
    walking: {
      view: isMobile ? "1300 0 620 1080" : "300 0 1620 1080",
    },
    door: {
      view: isMobile
        ? `262 ${1080 - height} ${width} ${height}`
        : "262 800 400 240",
    },
    laptop: {
      view: "590 920 60 60",
    },
    bachelor: {
      view: isMobile ? "550 890 60 45" : "550 890 60 35",
    },
    certificate: {
      view: isMobile ? "514 890 60 45" : "502 890 60 35",
    },
    skills: {
      view: isMobile ? "519 915 80 65" : "500 920 60 35",
    },
    garageHobbies: {
      view: isMobile ? "272 850 390 220" : "262 850 200 180",
    },
    woods: {
      view: isMobile ? "1400 600 600 420" : "1258 600 600 420",
    },
    mountain: {
      view: "970 100 600 420",
    },
  };
  // add texts to viewsAndTexts
  Object.keys(viewsAndTexts).forEach(function (k) {
    viewsAndTexts = {
      ...viewsAndTexts,
      ...{
        [k]: {
          text: texts?.[k],
          view: viewsAndTexts[k]["view"],
        },
      },
    };
  });
  return viewsAndTexts;
};
export default ViewsAndTexts;
