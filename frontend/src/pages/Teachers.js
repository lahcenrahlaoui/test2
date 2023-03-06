import Teacher from "../components/Teacher";

import { useState } from "react";

const Teachers = () => {
    const x = [
        250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263,
        264, 265, 266, 267, 268, 269, 270
    ];
    const [teacher, setTeacher] = useState([
        {
            id: 1,
            fname: "Dalia",
            lname: "Lilith",
            email: "lpeet0@opera.com",
            language: "Kurdish",
            description:
                "Displaced spiral fracture of shaft of right femur, subsequent encounter for open fracture type I or II with routine healing",
            img: "https://i.pravatar.cc/250"+x[0],
            price: 5536,
            rating: 3.1+"🌟",
        },
        {
            id: 2,
            fname: "Fancie",
            lname: "Darell",
            email: "dmunehay1@nyu.edu",
            language: "Maltese",
            description: "Melanocytic nevi",
            img: "https://i.pravatar.cc/250"+x[1],
            price: 6039,
            rating: 3.0+"🌟",
        },
        {
            id: 3,
            fname: "Emelyne",
            lname: "Meir",
            email: "mmarcos2@clickbank.net",
            language: "Zulu",
            description:
                "Laceration of unspecified blood vessel at shoulder and upper arm level, left arm, subsequent encounter",
            img: "https://i.pravatar.cc/"+x[2],
            price: 3424,
            rating: 4.9+"🌟",
        },
        {
            id: 4,
            fname: "Foster",
            lname: "Karola",
            email: "kateridge3@wordpress.com",
            language: "Tsonga",
            description:
                "Galeazzi's fracture of right radius, subsequent encounter for closed fracture with routine healing",
            img: "https://i.pravatar.cc/"+x[3],
            price: 5946,
            rating: 4.9+"🌟",
        },
        {
            id: 5,
            fname: "Miner",
            lname: "Grier",
            email: "gbragger4@mysql.com",
            language: "Maltese",
            description: "Other superficial bite of left knee",
            img: "https://i.pravatar.cc/"+x[4],
            price: 6636,
            rating: 3.3+"🌟",
        },
        {
            id: 6,
            fname: "Jilli",
            lname: "Mile",
            email: "mpietruszka5@cdc.gov",
            language: "Khmer",
            description: "Congenital hydronephrosis",
            img: "https://i.pravatar.cc/"+x[5],
            price: 2515,
            rating: 3.3+"🌟",
        },
        {
            id: 7,
            fname: "Layne",
            lname: "Gracie",
            email: "gbriar6@infoseek.co.jp",
            language: "Dzongkha",
            description:
                "Strain of muscle and tendon of long extensor muscle of toe at ankle and foot level, left foot, subsequent encounter",
            img: "https://i.pravatar.cc/"+x[6],
            price: 4130,
            rating: 4.1+"🌟",
        },
        {
            id: 8,
            fname: "Bernie",
            lname: "Elicia",
            email: "eantley7@reddit.com",
            language: "Latvian",
            description: "Other Hodgkin lymphoma, intrapelvic lymph nodes",
            img: "https://i.pravatar.cc/"+x[7],
            price: 6002,
            rating: 3.0+"🌟",
        },
        {
            id: 9,
            fname: "Binny",
            lname: "Kriste",
            email: "kmottram8@google.co.jp",
            language: "Malay",
            description:
                "Exposure to other furniture fire due to burning cigarette, initial encounter",
            img: "https://i.pravatar.cc/"+x[8],
            price: 6097,
            rating: 4.2+"🌟",
        },
        {
            id: 10,
            fname: "Gun",
            lname: "Gael",
            email: "gtschursch9@accuweather.com",
            language: "Khmer",
            description:
                "Corrosion of third degree of right axilla, initial encounter",
            img: "https://i.pravatar.cc/"+x[9],
            price: 6828,
            rating: 4.3+"🌟",
        },
        {
            id: 11,
            fname: "Liam",
            lname: "Basilius",
            email: "bparsalla@buzzfeed.com",
            language: "Chinese",
            description: "Other antepartum hemorrhage, second trimester",
            img: "https://i.pravatar.cc/"+x[10],
            price: 9634,
            rating: 3.6+"🌟",
        },
        {
            id: 12,
            fname: "Griffith",
            lname: "Viole",
            email: "vbomeb@free.fr",
            language: "Zulu",
            description:
                "Maternal care for (suspected) central nervous system malformation in fetus",
            img: "https://i.pravatar.cc/"+x[11],
            price: 9816,
            rating: 3.8+"🌟",
        },
        {
            id: 13,
            fname: "Marika",
            lname: "Catlee",
            email: "cgaitherc@google.fr",
            language: "Azeri",
            description:
                "Toxic effect of fiberglass, intentional self-harm, subsequent encounter",
            img: "https://i.pravatar.cc/"+x[12],
            price: 1242,
            rating: 4.4+"🌟",
        },
        {
            id: 14,
            fname: "Paola",
            lname: "Waiter",
            email: "whemphreyd@latimes.com",
            language: "Bulgarian",
            description:
                "Greenstick fracture of shaft of radius, unspecified arm",
            img: "https://i.pravatar.cc/"+x[13],
            price: 1938,
            rating: 4.4+"🌟",
        },
        {
            id: 15,
            fname: "Harold",
            lname: "Pamela",
            email: "pburlee@china.com.cn",
            language: "Nepali",
            description: "Chronic embolism and thrombosis of right tibial vein",
            img: "https://i.pravatar.cc/"+x[14],
            price: 9090,
            rating: 4.2+"🌟",
        },
        {
            id: 16,
            fname: "Jolynn",
            lname: "Pamela",
            email: "pheelisf@wunderground.com",
            language: "Nepali",
            description: "Unspecified disorder of refraction",
            img: "https://i.pravatar.cc/"+x[15],
            price: 8622,
            rating: 3.2+"🌟",
        },
        {
            id: 17,
            fname: "Mallissa",
            lname: "Hew",
            email: "holeszczakg@wikia.com",
            language: "Bislama",
            description: "Achilles tendinitis",
            img: "https://i.pravatar.cc/"+x[16],
            price: 3722,
            rating: 5.0+"🌟",
        },
        {
            id: 18,
            fname: "Karlene",
            lname: "Farleigh",
            email: "fmayworthh@shinystat.com",
            language: "Gagauz",
            description:
                "Poisoning by antidiarrheal drugs, undetermined, subsequent encounter",
            img: "https://i.pravatar.cc/"+x[17],
            price: 4438,
            rating: 4.2+"🌟",
        },
        {
            id: 19,
            fname: "Annabell",
            lname: "Sashenka",
            email: "sivashevi@ftc.gov",
            language: "Icelandic",
            description:
                "Poisoning by antiviral drugs, undetermined, initial encounter",
            img: "https://i.pravatar.cc/"+x[18],
            price: 8006,
            rating: 4.7+"🌟",
        },
        {
            id: 20,
            fname: "Kellia",
            lname: "Morgan",
            email: "mtrenholmej@seesaa.net",
            language: "Assamese",
            description:
                "Anaplastic large cell lymphoma, ALK-positive, extranodal and solid organ sites",
            img: "https://i.pravatar.cc/"+x[19],
            price: 4033,
            rating: 4.4+"🌟",
        },
    ]);
    return (
        <div>
            {teacher && teacher.map((t) => <Teacher key={t.id} teacher={t} />)}
        </div>
    );
};

export default Teachers;
