/* State and Division */
const stateAndDivs = [
  {
    name: "Kachin",
    data: [
      "Myitkyina",
      "Sinbo",
      "Chibwe",
      "Injangyang",
      "Tanai",
      "Shingbweyang",
      "Tsawlaw",
      "Waingmaw",
      "Sadon",
      "Bahmo",
      "Mansi",
      "Momauk",
      "Lweje",
      "Dawhpunyang",
      "Shwegu",
      "Myohla",
      "Mohnyin",
      "Hopin",
      "Mogaung",
      "Hpakant",
      "Kamaing",
      "Putao",
      "Kaunglanghpu",
      "Machanbaw",
      "Naungmung",
      "Pangnamdim",
      "Sumprabum",
    ],
  },
  {
    name: "Kayah",
    data: [
      "Loikaw",
      "Demawso",
      "Hpruso",
      "Shataw",
      "Bawlake",
      "Ywathit",
      "Hpasaung",
      "Mese",
    ],
  },
  {
    name: "Kayin",
    data: [
      "Hpaan",
      "Hlaingbwe",
      "Paingkyone",
      "Papun",
      "Kamamaung",
      "Thandaunggyi",
      "Thandaung",
      "Leiktho",
      "Bawgali",
      "Kawkareik",
      "Kyondo",
      "Kyainseikkyi",
      "Payathonzu",
      "Kyeikdon",
      "Myawady",
    ],
  },
  {
    name: "Chin",
    data: [
      "Haka",
      "Htantalang",
      "Falam",
      "Rihkhawdar",
      "Htonzan",
      "Chihka",
      "Mindat",
      "Kanpetlet",
      "Matupi",
      "Razue",
      "Paletwa",
      "Sami",
    ],
  },
  {
    name: "Mon",
    data: [
      "Mawlamyine",
      "Chaungzon",
      "Kyaikmaraw",
      "Mudon",
      "Thanbhyuzayat",
      "Kyaikkami",
      "Ye",
      "Lamaing",
      "Khawsa",
      "Thaton",
      "Bilin",
      "Kyaikhto",
      "Paung",
    ],
  },
  {
    name: "Rakhine",
    data: [
      "Sittway",
      "Pauktaw",
      "Ponnagyun",
      "Rathedaung",
      "Myauk-U",
      "Kyauktaw",
      "Minbya",
      "Myebon",
      "Kyaukpyu",
      "Ann",
      "Manaung",
      "Rambree",
      "Maungdaw",
      "Taungbroletwe",
      "Buthidaung",
      "Thandwe",
      "Gwe",
      "Kyeintali",
      "Taunggup",
      "Ma-ei",
    ],
  },
  {
    name: "Shan",
    data: [
      "Taunggyi",
      "Ayetharyar",
      "Shwenyaung",
      "Kyauktalonegyi",
      "Hopong",
      "Hsihseng",
      "Kalaw",
      "Aungpan",
      "Nyaungshwe",
      "Pekon",
      "Pindaya",
      "Pinlaung",
      "Naungtayar",
      "Yaksawk",
      "Indaw",
      "Ywangan",
      "Lenghke",
      "Homein",
      "Mawkmai",
      "Mongpan",
      "Mohnai",
      "Kengtaung",
      "Loilem",
      "Panglon",
      "Kunhing",
      "Kyethi",
      "Mongnawng",
      "Laihka",
      "Monghsu",
      "Mongkung",
      "Namsam",
      "Lashio",
      "Mongyai",
      "Tangyan",
      "Theinni",
      "Kunglong",
      "Kyaukme",
      "Mongngaw",
      "Hsipaw",
      "Mabein",
      "Mantone",
      "Moemeik",
      "Namtu",
      "Namhsan",
      "NaungCho",
      "Laukkai",
      "Chinshuihaw",
      "Konggyan",
      "Muse",
      "Mongko",
      "Manhio",
      "Kutkai",
      "Tamonye",
      "Namhkam",
      "Hopang",
      "Namtic",
      "Panlon",
      "Mongmao",
      "Panwinng",
      "Metman",
      "Nahpan",
      "Pangsang",
      "Mangkam",
      "Kengtong",
      "Monghkat",
      "Mongla",
      "Mongyang",
      "Mongpawk",
      "Monghpyak",
      "Mongyaung",
      "Mongyu",
      "Mongsat",
      "Monghkok",
      "Mongping",
      "Tongta",
      "Mongton",
      "Pungpahkyem",
      "Tachileik",
      "Talay",
      "Kenglap",
    ],
  },
  {
    name: "Ayeyawady",
    data: [
      "Pathein",
      "Shwethaungyan",
      "Ngwesaung",
      "Kangyidaung",
      "Kyonpyaw",
      "Kyaunggon",
      "Ngapudaw",
      "Ngayokkaung",
      "Thabaung",
      "Yegyi",
      "Ngathaingchaung",
      "Hinthada",
      "Ingabu",
      "Kyangin",
      "Lemyethna",
      "Myanaung",
      "Kanaung",
      "Zalun",
      "Labutta",
      "Pyinzalu",
      "Hainggyigyun",
      "Mawlamyinekyun",
      "Maubin",
      "Danubyu",
      "Nyaungdon",
      "Pantanaw",
      "Myaungmya",
      "Einme",
      "Wakema",
      "Pyapon",
      "Ama",
      "Bogale",
      "Dedaye",
      "Kyaiklat",
    ],
  },
  {
    name: "Bago",
    data: [
      "Bago",
      "Daik –U",
      "Kawa",
      "Kyaukdaga",
      "Penwegon",
      "Nyaunglaybin",
      "Madauk",
      "Pyundaza",
      "Shwekyin",
      "Thanatpin",
      "Waw",
      "Pyay",
      "Padaung",
      "Paukkaung",
      "Paungde",
      "Shwedaung",
      "Thegon",
      "Taungoo",
      "Kaytumati",
      "Tanttabin",
      "Kyaukkyi",
      "Oktwin",
      "Phyu",
      "Yedashe",
      "Thayawady",
      "Thonze",
      "Gyobingauk",
      "Letpandan",
      "Minhla",
      "Monyo",
      "Nattalin",
      "Okpo",
      "Zigon",
    ],
  },
  {
    name: "Magwe",
    data: [
      "Magwe",
      "Chauk",
      "Myothit",
      "Natmauk",
      "Taungdwingyi",
      "Yenangyaung",
      "Gangaw",
      "Htilin",
      "Saw",
      "Kyauktu",
      "Minbu",
      "Sagu",
      "Ngape",
      "Pwintbyu",
      "Salin",
      "Sidoktaya",
      "Pakokku",
      "Myaing",
      "Pauk",
      "Seikphyu",
      "Yezagyo",
      "Thayet",
      "Aunglan",
      "Kanma",
      "Mindom",
      "Minhla",
      "Sinbaungwe",
    ],
  },
  {
    name: "Mandalay",
    data: [
      "Oktarathiri",
      "Pobbathiri",
      "Zeyathiri",
      "Tatkon",
      "Dakkhinathiri",
      "Zabuthiri",
      "Lewe",
      "Pyinmana",
      "Aungmyaytharzan",
      "Chanayetharzan",
      "Chanmyatharzi",
      "Maha aungmyay",
      "Pyigyidagon",
      "Amarapura",
      "Myitnge",
      "Patheingyi",
      "Kyaukse",
      "Myittha",
      "Singaing",
      "Tada-U",
      "Meikhtila",
      "Mahlaing",
      "Thazi",
      "Wundwin",
      "Myingyan",
      "Kyaukpadaung",
      "Nahtogyi",
      "Ngazun",
      "Taungtha",
      "Nyaung –U",
      "Bagan",
      "Ngathayauk",
      "Pyinoolwin",
      "Madaya",
      "Mogok",
      "Singu",
      "Thabeikkyin",
      "Tagaung",
      "Yemethin",
      "Pyawbwe",
    ],
  },
  {
    name: "Sagaing",
    data: [
      "Sagaing",
      "Myaung",
      "Myinmu",
      "Hkamti",
      "Homalin",
      "Lahe",
      "Layshi",
      "Swammara",
      "Namyung",
      "Pansaung",
      "Kalaymyo",
      "Kalewa",
      "Mingin",
      "Katha",
      "Banmauk",
      "Tigyain",
      "Indaw",
      "Kawlin",
      "Pinlebu",
      "Wuntho",
      "Mawleik",
      "Paungbyin",
      "Monywa",
      "Ayadaw",
      "Budalin",
      "Chaung –U",
      "Kani",
      "Pale",
      "Salingyi",
      "Yinmabin",
      "Shwebo",
      "Tabayin",
      "Kanbalu",
      "Kin-U",
      "Kyunhla",
      "Taze",
      "Wetlet",
      "Ye-U",
      "Tamu",
      "Myothit",
      "Khampat",
    ],
  },
  {
    name: "Thaninthayi",
    data: [
      "Dawe",
      "Myittar",
      "Launglon",
      "Thayetchaung",
      "Yebyu",
      "Kaleinaung",
      "Kawthaung",
      "Kamaukgyi",
      "Bokpyin",
      "Pyigyimandaing",
      "Karathuri",
      "Myeik",
      "Kyunsu",
      "Palaw",
      "Palauk",
      "Thaninthayi",
    ],
  },
  {
    Yangon: [
      "Botahtaung",
      "Dagon Myothit(East)",
      "Dagon Myothit(North)",
      "Dagon Myothit(South)",
      "Dagon Myothit(Seikkan)",
      "Dawpon",
      "Mingalartaungnyunt",
      "Okkalapa(north)",
      "Okkalapa(south)",
      "Pazundaung",
      "Tamwe",
      "Thaketa",
      "Thingangyun",
      "Yankin",
      "Hlaingthayar",
      "Hlegu",
      "Hmawbi",
      "Htantabin",
      "Insein",
      "Mingalardon",
      "Taukkyant",
      "Shwepyitha",
      "Taikkyi",
      "Aphyauk",
      "Okkan",
      "Cocokyun",
      "Dala",
      "Kawhmu",
      "Khayan",
      "Kungyangon",
      "Kyauktan",
      "Tada",
      "Seikkyikhanaungto",
      "Thanlyin",
      "Thongwa",
      "Twante",
      "Ahlon",
      "Bahan",
      "Dagon",
      "Hlaing",
      "Kamayut",
      "Kyauktada",
      "Kyimyindagin",
      "Lanmadaw",
      "Latha",
      "Mayangone",
      "Pabedan",
      "Sanchaung",
      "Seikkan",
    ],
  },
];

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
