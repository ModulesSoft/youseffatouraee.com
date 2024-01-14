const ViewsAndTexts = (isMobile, width, height, texts) => {
  let viewsAndTexts = {
    laptop: {
      view: isMobile ? "600 950 60 60" : "600 920 60 60",
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
    door: {
      view: isMobile ? `270 500 530 700` : "262 800 400 280",
    },
    general: {
      view: isMobile ? `1000 500 530 700` : "0 0 1920 1080",
    },
    walking: {
      view: isMobile ? `1300 380 530 700` : "300 0 1620 1080",
    },
    woods: {
      view: isMobile ? `1400 270 530 700` : "700 200 1200 840",
    },
    mountain: {
      view: isMobile ? `970 0 530 700` : "970 100 600 420",
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
