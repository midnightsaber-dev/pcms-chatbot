const stateAndDivs = [
  {
    name: "Kachin",
    data: [
      "Bahmo",
      "Chibwe",
      "Dawhpunyang",
      "Hopin",
      "Hpakant",
      "Injangyang",
      "Kamaing",
      "Kaunglanghpu",
      "Lweje",
      "Machanbaw",
      "Mansi",
      "Mogaung",
      "Mohnyin",
      "Momauk",
      "Myitkyina",
      "Myohla",
      "Naungmung",
      "Pangnamdim",
      "Putao",
      "Sadon",
      "Shingbweyang",
      "Shwegu",
      "Sinbo",
      "Sumprabum",
      "Tanai",
      "Tsawlaw",
      "Waingmaw",
    ],
  },
  {
    name: "Kayah",
    data: [
      "Bawlake",
      "Demawso",
      "Hpasaung",
      "Hpruso",
      "Loikaw",
      "Mese",
      "Shataw",
      "Ywathit",
    ],
  },
  {
    name: "Kayin",
    data: [
      "Bawgali",
      "Hlaingbwe",
      "Hpaan",
      "Kamamaung",
      "Kawkareik",
      "Kyainseikkyi",
      "Kyeikdon",
      "Kyondo",
      "Leiktho",
      "Myawady",
      "Paingkyone",
      "Papun",
      "Payathonzu",
      "Thandaung",
      "Thandaunggyi",
    ],
  },
  {
    name: "Chin",
    data: [
      "Chihka",
      "Falam",
      "Haka",
      "Htantalang",
      "Htonzan",
      "Kanpetlet",
      "Matupi",
      "Mindat",
      "Paletwa",
      "Razue",
      "Rihkhawdar",
      "Sami",
    ],
  },
  {
    name: "Mon",
    data: [
      "Bilin",
      "Chaungzon",
      "Khawsa",
      "Kyaikhto",
      "Kyaikkami",
      "Kyaikmaraw",
      "Lamaing",
      "Mawlamyine",
      "Mudon",
      "Paung",
      "Thanbhyuzayat",
      "Thaton",
      "Ye",
    ],
  },
  {
    name: "Rakhine",
    data: [
      "Ann",
      "Buthidaung",
      "Gwe",
      "Kyaukpyu",
      "Kyauktaw",
      "Kyeintali",
      "Ma-ei",
      "Manaung",
      "Maungdaw",
      "Minbya",
      "Myauk-U",
      "Myebon",
      "Pauktaw",
      "Ponnagyun",
      "Rambree",
      "Rathedaung",
      "Sittway",
      "Taungbroletwe",
      "Taunggup",
      "Thandwe",
    ],
  },
  {
    name: "Shan",
    data: [
      "Aungpan",
      "Ayetharyar",
      "Chinshuihaw",
      "Homein",
      "Hopang",
      "Hopong",
      "Hsihseng",
      "Hsipaw",
      "Indaw",
      "Kalaw",
      "Kenglap",
      "Kengtaung",
      "Kengtong",
      "Konggyan",
      "Kunglong",
      "Kunhing",
      "Kutkai",
      "Kyaukme",
      "Kyauktalonegyi",
      "Kyethi",
      "Laihka",
      "Lashio",
      "Laukkai",
      "Lenghke",
      "Loilem",
      "Mabein",
      "Mangkam",
      "Manhio",
      "Mantone",
      "Mawkmai",
      "Metman",
      "Moemeik",
      "Mohnai",
      "Monghkat",
      "Monghkok",
      "Monghpyak",
      "Monghsu",
      "Mongko",
      "Mongkung",
      "Mongla",
      "Mongmao",
      "Mongnawng",
      "Mongngaw",
      "Mongpan",
      "Mongpawk",
      "Mongping",
      "Mongsat",
      "Mongton",
      "Mongyai",
      "Mongyang",
      "Mongyaung",
      "Mongyu",
      "Muse",
      "Nahpan",
      "Namhkam",
      "Namhsan",
      "Namsam",
      "Namtic",
      "Namtu",
      "NaungCho",
      "Naungtayar",
      "Nyaungshwe",
      "Panglon",
      "Pangsang",
      "Panlon",
      "Panwinng",
      "Pekon",
      "Pindaya",
      "Pinlaung",
      "Pungpahkyem",
      "Shwenyaung",
      "Tachileik",
      "Talay",
      "Tamonye",
      "Tangyan",
      "Taunggyi",
      "Theinni",
      "Tongta",
      "Yaksawk",
      "Ywangan",
    ],
  },
  {
    name: "Ayeyawady",
    data: [
      "Ama",
      "Bogale",
      "Danubyu",
      "Dedaye",
      "Einme",
      "Hainggyigyun",
      "Hinthada",
      "Ingabu",
      "Kanaung",
      "Kangyidaung",
      "Kyaiklat",
      "Kyangin",
      "Kyaunggon",
      "Kyonpyaw",
      "Labutta",
      "Lemyethna",
      "Maubin",
      "Mawlamyinekyun",
      "Myanaung",
      "Myaungmya",
      "Ngapudaw",
      "Ngathaingchaung",
      "Ngayokkaung",
      "Ngwesaung",
      "Nyaungdon",
      "Pantanaw",
      "Pathein",
      "Pyapon",
      "Pyinzalu",
      "Shwethaungyan",
      "Thabaung",
      "Wakema",
      "Yegyi",
      "Zalun",
    ],
  },
  {
    name: "Bago",
    data: [
      "Bago",
      "Daik –U",
      "Gyobingauk",
      "Kawa",
      "Kaytumati",
      "Kyaukdaga",
      "Kyaukkyi",
      "Letpandan",
      "Madauk",
      "Minhla",
      "Monyo",
      "Nattalin",
      "Nyaunglaybin",
      "Okpo",
      "Oktwin",
      "Padaung",
      "Paukkaung",
      "Paungde",
      "Penwegon",
      "Phyu",
      "Pyay",
      "Pyundaza",
      "Shwedaung",
      "Shwekyin",
      "Tanttabin",
      "Taungoo",
      "Thanatpin",
      "Thayawady",
      "Thegon",
      "Thonze",
      "Waw",
      "Yedashe",
      "Zigon",
    ],
  },
  {
    name: "Magwe",
    data: [
      "Aunglan",
      "Chauk",
      "Gangaw",
      "Htilin",
      "Kanma",
      "Kyauktu",
      "Magwe",
      "Minbu",
      "Mindom",
      "Minhla",
      "Myaing",
      "Myothit",
      "Natmauk",
      "Ngape",
      "Pakokku",
      "Pauk",
      "Pwintbyu",
      "Sagu",
      "Salin",
      "Saw",
      "Seikphyu",
      "Sidoktaya",
      "Sinbaungwe",
      "Taungdwingyi",
      "Thayet",
      "Yenangyaung",
      "Yezagyo",
    ],
  },
  {
    name: "Mandalay",
    data: [
      "Amarapura",
      "Aungmyaytharzan",
      "Bagan",
      "Chanayetharzan",
      "Chanmyatharzi",
      "Dakkhinathiri",
      "Kyaukpadaung",
      "Kyaukse",
      "Lewe",
      "Madaya",
      "Maha aungmyay",
      "Mahlaing",
      "Meikhtila",
      "Mogok",
      "Myingyan",
      "Myitnge",
      "Myittha",
      "Nahtogyi",
      "Ngathayauk",
      "Ngazun",
      "Nyaung –U",
      "Oktarathiri",
      "Patheingyi",
      "Pobbathiri",
      "Pyawbwe",
      "Pyigyidagon",
      "Pyinmana",
      "Pyinoolwin",
      "Singaing",
      "Singu",
      "Tada-U",
      "Tagaung",
      "Tatkon",
      "Taungtha",
      "Thabeikkyin",
      "Thazi",
      "Wundwin",
      "Yemethin",
      "Zabuthiri",
      "Zeyathiri",
    ],
  },
  {
    name: "Sagaing",
    data: [
      "Ayadaw",
      "Banmauk",
      "Budalin",
      "Chaung –U",
      "Hkamti",
      "Homalin",
      "Indaw",
      "Kalaymyo",
      "Kalewa",
      "Kanbalu",
      "Kani",
      "Katha",
      "Kawlin",
      "Khampat",
      "Kin-U",
      "Kyunhla",
      "Lahe",
      "Layshi",
      "Mawleik",
      "Mingin",
      "Monywa",
      "Myaung",
      "Myinmu",
      "Myothit",
      "Namyung",
      "Pale",
      "Pansaung",
      "Paungbyin",
      "Pinlebu",
      "Sagaing",
      "Salingyi",
      "Shwebo",
      "Swammara",
      "Tabayin",
      "Tamu",
      "Taze",
      "Tigyain",
      "Wetlet",
      "Wuntho",
      "Ye-U",
      "Yinmabin",
    ],
  },
  {
    name: "Thaninthayi",
    data: [
      "Bokpyin",
      "Dawe",
      "Kaleinaung",
      "Kamaukgyi",
      "Karathuri",
      "Kawthaung",
      "Kyunsu",
      "Launglon",
      "Myeik",
      "Myittar",
      "Palauk",
      "Palaw",
      "Pyigyimandaing",
      "Thaninthayi",
      "Thayetchaung",
      "Yebyu",
    ],
  },
  {
    name: "Yangon",
    data: [
      "Ahlon",
      "Aphyauk",
      "Bahan",
      "Botahtaung",
      "Cocokyun",
      "Dagon",
      "Dagon Myothit(East)",
      "Dagon Myothit(North)",
      "Dagon Myothit(Seikkan)",
      "Dagon Myothit(South)",
      "Dala",
      "Dawpon",
      "Hlaing",
      "Hlaingthayar",
      "Hlegu",
      "Hmawbi",
      "Htantabin",
      "Insein",
      "Kamayut",
      "Kawhmu",
      "Khayan",
      "Kungyangon",
      "Kyauktada",
      "Kyauktan",
      "Kyimyindagin",
      "Lanmadaw",
      "Latha",
      "Mayangone",
      "Mingalardon",
      "Mingalartaungnyunt",
      "Okkalapa(north)",
      "Okkalapa(south)",
      "Okkan",
      "Pabedan",
      "Pazundaung",
      "Sanchaung",
      "Seikkan",
      "Seikkyikhanaungto",
      "Shwepyitha",
      "Tada",
      "Taikkyi",
      "Tamwe",
      "Taukkyant",
      "Thaketa",
      "Thanlyin",
      "Thingangyun",
      "Thongwa",
      "Twante",
      "Yankin",
    ],
  },
];
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("stateNDiv").addEventListener("focus", getStateNDiv);
});
function getStateNDiv() {
  let selectBox = document.getElementById("stateNDiv");
  while (selectBox.options.length > 0) {
    selectBox.remove(0);
  }
  stateAndDivs.forEach((stateNDiv) => {
    let node = document.createElement("option");
    let textnode = document.createTextNode(stateNDiv.name);
    node.appendChild(textnode);
    document
      .getElementById("stateNDiv")
      .appendChild(node)
      .setAttribute("value", stateNDiv.name);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("township").addEventListener("focus", getTownship);
});
function getTownship() {
  let result = document.getElementById("stateNDiv").value;
  let selectBox = document.getElementById("township");
  while (selectBox.options.length > 0) {
    selectBox.remove(0);
  }
  stateAndDivs.forEach((stateAndDiv) => {
    if (stateAndDiv.name == result) {
      stateAndDiv["data"].forEach((township) => {
        let node = document.createElement("option");
        let textnode = document.createTextNode(township);
        node.appendChild(textnode);
        document
          .getElementById("township")
          .appendChild(node)
          .setAttribute("value", township);
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("stateNDiv").addEventListener("focus", getStateNDiv);
});
function getStateNDiv() {
  let selectBox = document.getElementById("stateNDiv");
  while (selectBox.options.length > 0) {
    selectBox.remove(0);
  }
  stateAndDivs.forEach((stateNDiv) => {
    let node = document.createElement("option");
    let textnode = document.createTextNode(stateNDiv.name);
    node.appendChild(textnode);
    document
      .getElementById("stateNDiv")
      .appendChild(node)
      .setAttribute("value", stateNDiv.name);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("township").addEventListener("focus", getTownship);
});
function getTownship() {
  let result = document.getElementById("stateNDiv").value;
  let selectBox = document.getElementById("township");
  while (selectBox.options.length > 0) {
    selectBox.remove(0);
  }
  stateAndDivs.forEach((stateAndDiv) => {
    if (stateAndDiv.name == result) {
      stateAndDiv["data"].forEach((township) => {
        let node = document.createElement("option");
        let textnode = document.createTextNode(township);
        node.appendChild(textnode);
        document
          .getElementById("township")
          .appendChild(node)
          .setAttribute("value", township);
      });
    }
  });
}

