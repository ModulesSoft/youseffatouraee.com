const ViewsAndTexts = (isMobile, width, height, texts) => {
  let viewsAndTexts = {
    laptop: {
      view: isMobile ? "1395 930 72 72" : "1390 910 72 72",
    },
    bachelor: {
      view: isMobile ? "1350 890 60 45" : "1350 890 60 35",
    },
    certificate: {
      view: isMobile ? "1314 890 60 45" : "1302 890 60 35",
    },
    skills: {
      view: isMobile ? "1319 915 80 65" : "1300 920 60 35",
    },
    garageHobbies: {
      view: isMobile ? "1083 850 515 290" : "1062 850 200 180",
    },
    door: {
      view: isMobile ? "1070 500 430 600" : "1062 800 400 280",
    },
    general: {
      view: isMobile ? "0 400 530 700" : "0 0 1920 1080",
    },
    walking: {
      view: isMobile ? "900 380 530 700" : "300 0 1620 1080",
    },
    woods: {
      view: isMobile ? "300 200 827 1092" : "100 200 1200 840",
    },
    mountain: {
      view: isMobile ? "970 0 530 700" : "970 100 600 420",
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
