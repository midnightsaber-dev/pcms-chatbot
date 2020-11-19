function configureDropDownLists(ddl,ddl2) {
    var Chin= ['Haka', 'Htantalang', 'Falam', 'Rihkhawdar', 'Htonzan', 'Chihka', 'Mindat', 'Kanpetlet', 'Matupi', 'Razue', 'Paletwa', 'Sami'];
            
    var Kachin = ['Myitkyina', 'Sinbo', 'Chibwe', 'Injangyang', 'Tanai', 'Shingbweyang', 'Tsawlaw', 'Waingmaw', 'Sadon', 'Bahmo', 'Mansi', 'Momauk', 'Lweje', 'Dawhpunyang', 'Shwegu', 'Myohla', 'Mohnyin', 'Hopin', 'Mogaung', 'Hpakant', 'Kamaing', 'Putao', 'Kaunglanghpu', 'Machanbaw', 'Naungmung', 'Pangnamdim', 'Sumprabum' ];
                 
    var Kayah = ['Loikaw', 'Demawso', 'Hpruso', 'Shataw', 'Bawlake', 'Ywathit', 'Hpasaung', 'Mese' ];
            
    var Kayin = ['Hpaan', 'Hlaingbwe', 'Paingkyone', 'Papun', 'Kamamaung', 'Thandaunggyi', 'Thandaung', 'Leiktho', 'Bawgali', 'Kawkareik', 'Kyondo', 'Kyainseikkyi', 'Payathonzu', 'Kyeikdon', 'Myawady' ];
            
    var Mon = ['Mawlamyine', 'Chaungzon', 'Kyaikmaraw', 'Mudon', 'Thanbhyuzayat', 'Kyaikkami', 'Ye', 'Lamaing' , 'Khawsa', 'Thaton', 'Bilin', 'Kyaikhto', 'Paung' ];
            
    var Rakhine = ['Sittway', 'Pauktaw', 'Ponnagyun', 'Rathedaung', 'Myauk-U', 'Kyauktaw', 'Minbya', 'Myebon',  'Kyaukpyu', 'Ann', 'Manaung', 'Rambree', 'Maungdaw', 'Taungbroletwe', 'Buthidaung', 'Thandwe', 'Gwe', 'Kyeintali', 'Taunggup', 'Ma-ei'];
            
     var Shan= ['Taunggyi', 'Ayetharyar', 'Shwenyaung', 'Kyauktalonegyi', 'Hopong', 'Hsihseng', 'Kalaw', 'Aungpan' , 'Nyaungshwe', 'Pekon', 'Pindaya', 'Pinlaung', 'Naungtayar', 'Yaksawk', 'Indaw', 'Ywangan', 'Lenghke', 'Homein', 'Mawkmai', 'Mongpan', 'Mohnai', 'Kengtaung', 'Loilem', 'Panglon', 'Kunhing', 'Kyethi', 'Mongnawng', 'Laihka', 'Monghsu', 'Mongkung', 'Namsam', 'Lashio', 'Mongyai', 'Tangyan', 'Theinni', 'Kunglong', 'Kyaukme', 'Mongngaw', 'Hsipaw', 'Mabein', 'Mantone', 'Moemeik', 'Namtu', 'Namhsan', 'NaungCho', 'Laukkai', 'Chinshuihaw', 'Konggyan', 'Muse', 'Mongko', 'Manhio', 'Kutkai', 'Tamonye', 'Namhkam', 'Hopang', 'Namtic', 'Panlon', 'Mongmao', 'Panwinng', 'Metman', 'Nahpan', 'Pangsang', 'Mangkam', 'Kengtong', 'Monghkat', 'Mongla', 'Mongyang', 'Mongpawk', 'Monghpyak', 'Mongyaung', 'Mongyu', 'Mongsat', 'Monghkok', 'Mongping', 'Tongta', 'Mongton', 'Pungpahkyem', 'Tachileik', 'Talay', 'Kenglap' ];
            
     var Ayeyawady  = ['Pathein', 'Shwethaungyan', 'Ngwesaung', 'Kangyidaung', 'Kyonpyaw', 'Kyaunggon', 'Ngapudaw', 'Ngayokkaung', 'Thabaung', 'Yegyi', 'Ngathaingchaung', 'Hinthada', 'Ingabu', 'Kyangin', 'Lemyethna', 'Myanaung', 'Kanaung', 'Zalun', 'Labutta', 'Pyinzalu', 'Hainggyigyun', 'Mawlamyinekyun', 'Maubin', 'Danubyu', 'Nyaungdon', 'Pantanaw', 'Myaungmya', 'Einme', 'Wakema', 'Pyapon', 'Ama', 'Bogale', 'Dedaye', 'Kyaiklat'];
            
     var Bago = ['Bago', 'Daik –U', 'Kawa', 'Kyaukdaga', 'Penwegon', 'Nyaunglaybin', 'Madauk', 'Pyundaza', 'Shwekyin', 'Thanatpin', 'Waw', 'Pyay', 'Padaung', 'Paukkaung', 'Paungde', 'Shwedaung', 'Thegon', 'Taungoo', 'Kaytumati', 'Tanttabin', 'Kyaukkyi', 'Oktwin', 'Phyu', 'Yedashe', 'Thayawady', 'Thonze', 'Gyobingauk', 'Letpandan', 'Minhla', 'Monyo', 'Nattalin', 'Okpo', 'Zigon' ];
            
     var Magwe = ['Magwe', 'Chauk', 'Myothit', 'Natmauk', 'Taungdwingyi', 'Yenangyaung', 'Gangaw', 'Htilin',  'Saw', 'Kyauktu', 'Minbu', 'Sagu', 'Ngape', 'Pwintbyu', 'Salin', 'Sidoktaya', 'Pakokku', 'Myaing', 'Pauk', 'Seikphyu', 'Yezagyo', 'Thayet', 'Aunglan', 'Kanma', 'Mindom', 'Minhla', 'Sinbaungwe'];
            
    var Mandalay = ['Oktarathiri', 'Pobbathiri', 'Zeyathiri', 'Tatkon', 'Dakkhinathiri', 'Zabuthiri', 'Lewe', 'Pyinmana',  'Aungmyaytharzan', 'Chanayetharzan', 'Chanmyatharzi', 'Maha aungmyay', 'Pyigyidagon', 'Amarapura', 'Myitnge', 'Patheingyi', 'Kyaukse', 'Myittha', 'Singaing', 'Tada-U', 'Meikhtila', 'Mahlaing', 'Thazi', 'Wundwin', 'Myingyan', 'Kyaukpadaung', 'Nahtogyi', 'Ngazun', 'Taungtha', 'Nyaung –U', 'Bagan', 'Ngathayauk', 'Pyinoolwin', 'Madaya', 'Mogok', 'Singu', 'Thabeikkyin', 'Tagaung', 'Yemethin', 'Pyawbwe' ];
            
     var Sagaing = ['Sagaing', 'Myaung', 'Myinmu', 'Hkamti', 'Homalin', 'Lahe', 'Layshi', 'Swammara',  'Namyung', 'Pansaung', 'Kalaymyo', 'Kalewa', 'Mingin', 'Katha', 'Banmauk', 'Tigyain', 'Indaw', 'Kawlin', 'Pinlebu', 'Wuntho', 'Mawleik', 'Paungbyin', 'Monywa', 'Ayadaw', 'Budalin', 'Chaung –U', 'Kani', 'Pale', 'Salingyi', 'Yinmabin', 'Shwebo', 'Tabayin', 'Kanbalu', 'Kin-U', 'Kyunhla', 'Taze', 'Wetlet', 'Ye-U', 'Tamu', 'Myothit', 'Khampat'];
            
            
     var Thaninthayi = ['Dawe', 'Myittar', 'Launglon', 'Thayetchaung', 'Yebyu', 'Kaleinaung', 'Kawthaung', 'Kamaukgyi',  'Bokpyin', 'Pyigyimandaing', 'Karathuri', 'Myeik', 'Kyunsu', 'Palaw', 'Palauk', 'Thaninthayi'];

            
      var Yangon = ['Botahtaung', 'Dagon Myothit(East)', 'Dagon Myothit(North)', 'Dagon Myothit(South)', 'Dagon Myothit(Seikkan)', 'Dawpon', 'Mingalartaungnyunt', 'Okkalapa(north)',  'Okkalapa(south)', 'Pazundaung', 'Tamwe', 'Thaketa', 'Thingangyun', 'Yankin', 'Hlaingthayar', 'Hlegu', 'Hmawbi', 'Htantabin', 'Insein', 'Mingalardon', 'Taukkyant', 'Shwepyitha', 'Taikkyi', 'Aphyauk', 'Okkan', 'Cocokyun', 'Dala', 'Kawhmu', 'Khayan', 'Kungyangon', 'Kyauktan', 'Tada', 'Seikkyikhanaungto', 'Thanlyin', 'Thongwa', 'Twante', 'Ahlon', 'Bahan', 'Dagon', 'Hlaing', 'Kamayut', 'Kyauktada', 'Kyimyindagin', 'Lanmadaw', 'Latha', 'Mayangone', 'Pabedan', 'Sanchaung', 'Seikkan'];
            
            

    switch (ddl.value) {
        case 'Chin':
            ddl2.options.length = 0;
            for (i = 0; i < Chin.length; i++) {
                createOption(ddl2, Chin[i], Chin[i]);
            }
            break;
        case 'Kachin':
            ddl2.options.length = 0; 
        for (i = 0; i < Kachin.length; i++) {
            createOption(ddl2, Kachin[i], Kachin[i]);
            }
            break;
        case 'Kayah':
            ddl2.options.length = 0;
            for (i = 0; i < Kayah.length; i++) {
                createOption(ddl2, Kayah[i], Kayah[i]);
            }
            break;
        case 'Kayin':
            ddl2.options.length = 0;
            for (i = 0; i < Kayin.length; i++) {
                createOption(ddl2, Kayin[i], Kayin[i]);
            }
            break;
        case 'Mon':
            ddl2.options.length = 0;
            for (i = 0; i < Mon.length; i++) {
                createOption(ddl2, Mon[i], Mon[i]);
            }
            break;
        case 'Rakhine':
            ddl2.options.length = 0;
            for (i = 0; i < Rakhine.length; i++) {
                createOption(ddl2, Rakhine[i], Rakhine[i]);
            }
            break;
            case 'Shan':
            ddl2.options.length = 0;
            for (i = 0; i < Shan.length; i++) {
                createOption(ddl2, Shan[i], Shan[i]);
            }
            break;
        case 'Ayeyawady':
            ddl2.options.length = 0;
            for (i = 0; i < Ayeyawady.length; i++) {
                createOption(ddl2, Ayeyawady[i], Ayeyawady[i]);
            }
            break;
            
        case 'Bago':
            ddl2.options.length = 0;
            for (i = 0; i < Bago.length; i++) {
                createOption(ddl2, Bago[i], Bago[i]);
            }
            break;
         case 'Magwe':
            ddl2.options.length = 0;
            for (i = 0; i < Magwe.length; i++) {
                createOption(ddl2, Magwe[i], Magwe[i]);
            }
            break;
         case 'Mandalay':
            ddl2.options.length = 0;
            for (i = 0; i < Mandalay.length; i++) {
                createOption(ddl2, Mandalay[i], Mandalay[i]);
            }
            break;
        case 'Sagaing':
            ddl2.options.length = 0;
            for (i = 0; i < Sagaing.length; i++) {
                createOption(ddl2, Sagaing[i], Sagaing[i]);
            }
            break;
        case 'Thaninthayi':
            ddl2.options.length = 0;
            for (i = 0; i < Thaninthayi.length; i++) {
                createOption(ddl2, Thaninthayi[i], Thaninthayi[i]);
            }
            break;
            
        case 'Yangon':
            ddl2.options.length = 0;
            for (i = 0; i < Yangon.length; i++) {
                createOption(ddl2, Yangon[i], Yangon[i]);
            }
            break;
            
            
            
            default:
                ddl2.options.length = 0;
            break;
    }

}

    function createOption(ddl, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        ddl.options.add(opt);
    }