
/*
var data = [{
	id: 1,
	title: 'Африка',
	area: '30,221,532'
	population: '1,032,532,974 (2011)',
	countries: '55'
}, {
	id: 2,
	title: 'Азия',
	area: '44,579,000'
	population: '4,164,252,000',
	countries: '49 (+5 частично непризнанных)'
}, {
	id: 3,
	title: 'Европа',
	area: '10,180,000'
	population: '739,165,030',
	countries: '50'	
}]

['Африка', '30,221,532', '1,032,532,974 (2011)', '55'], 
				 ['Азия', '44,579,000', '4,164,252,000', '49 (+5 частично непризнанных)'], 
				 ['Европа', '10,180,000', '739,165,030', '50'], 
				 ['Австралия и Океания', '8,520,000', '33,800,000', '14'],
				 ['Америка', '42,549,000', '953,700,000', '35+23'],
				 ['Антарктида', '14,107,000', '-', '-']
*/

var data = [
  {
    "User Id": 0,
    "Full Name": "Terry Schiller",
    "Country": "Libya",
    "Email": "Oda_Miller@brandyn.biz",
    "Created At": "1992-05-23T00:34:24.058Z"
  },
  {
    "User Id": 1,
    "Full Name": "Merlin DuBuque",
    "Country": "British Indian Ocean Territory",
    "Email": "Brenden@jaquan.com",
    "Created At": "1991-04-08T04:55:36.317Z"
  },
  {
    "User Id": 2,
    "Full Name": "Hardy Yost",
    "Country": "Serbia and Montenegro",
    "Email": "Kiley@ashlee.tv",
    "Created At": "2004-03-25T08:36:48.627Z"
  },
  {
    "User Id": 3,
    "Full Name": "Guido Keebler",
    "Country": "Mexico",
    "Email": "Eloy@robbie.net",
    "Created At": "2004-03-10T21:40:38.962Z"
  },
  {
    "User Id": 4,
    "Full Name": "Mateo Price",
    "Country": "Equatorial Guinea",
    "Email": "Jailyn.Turcotte@eleazar.name",
    "Created At": "1997-02-03T05:06:14.785Z"
  },
  {
    "User Id": 5,
    "Full Name": "Ethan Bode",
    "Country": "Saint Martin",
    "Email": "Ethyl.Russel@hailee.me",
    "Created At": "1987-11-04T07:06:43.153Z"
  },
  {
    "User Id": 6,
    "Full Name": "Hosea Schiller",
    "Country": "Sweden",
    "Email": "Lonnie.Becker@harrison.name",
    "Created At": "1995-04-23T19:52:02.425Z"
  },
  {
    "User Id": 7,
    "Full Name": "Hillard Ondricka",
    "Country": "North Vietnam",
    "Email": "Damian_Steuber@bella.io",
    "Created At": "1982-04-19T23:12:39.782Z"
  },
  {
    "User Id": 8,
    "Full Name": "Alfonzo Wuckert",
    "Country": "Uzbekistan",
    "Email": "Sylvester@audra.me",
    "Created At": "1990-06-23T22:41:59.778Z"
  },
  {
    "User Id": 9,
    "Full Name": "D'angelo Bauch Jr.",
    "Country": "South Georgia and the South Sandwich Islands",
    "Email": "Ericka@philip.biz",
    "Created At": "2003-11-04T01:58:37.252Z"
  },
  {
    "User Id": 10,
    "Full Name": "Gregory Kuvalis",
    "Country": "San Marino",
    "Email": "Nels@percy.info",
    "Created At": "1999-05-24T23:39:40.711Z"
  },
  {
    "User Id": 11,
    "Full Name": "Frieda Schaefer",
    "Country": "Saint Helena",
    "Email": "Conner@willie.me",
    "Created At": "1985-02-07T11:05:31.297Z"
  },
  {
    "User Id": 12,
    "Full Name": "Lolita Simonis DVM",
    "Country": "São Tomé and Príncipe",
    "Email": "Kareem.Zemlak@gerda.biz",
    "Created At": "1993-07-10T09:55:41.239Z"
  },
  {
    "User Id": 13,
    "Full Name": "Tamia Greenfelder",
    "Country": "Luxembourg",
    "Email": "Guillermo_Harvey@bella.co.uk",
    "Created At": "2008-06-11T19:01:20.466Z"
  },
  {
    "User Id": 14,
    "Full Name": "Dr. Jaylen Ruecker",
    "Country": "Andorra",
    "Email": "Nikolas@zetta.io",
    "Created At": "1983-11-08T09:52:12.206Z"
  },
  {
    "User Id": 15,
    "Full Name": "Mina Corwin Jr.",
    "Country": "Cyprus",
    "Email": "Cali@dulce.me",
    "Created At": "1993-09-06T19:56:42.324Z"
  },
  {
    "User Id": 16,
    "Full Name": "Clotilde Homenick",
    "Country": "Algeria",
    "Email": "Mona@ryleigh.us",
    "Created At": "1982-03-18T08:18:59.935Z"
  },
  {
    "User Id": 17,
    "Full Name": "Diego Collins",
    "Country": "Saint Vincent and the Grenadines",
    "Email": "Brooke@jeffrey.io",
    "Created At": "1994-12-02T09:14:54.715Z"
  },
  {
    "User Id": 18,
    "Full Name": "Madisen Lubowitz",
    "Country": "Palestinian Territories",
    "Email": "Ericka@raquel.name",
    "Created At": "1980-09-19T07:08:58.182Z"
  },
  {
    "User Id": 19,
    "Full Name": "Shanie Powlowski",
    "Country": "North Vietnam",
    "Email": "Claude@vella.info",
    "Created At": "2009-06-09T15:32:05.552Z"
  },
  {
    "User Id": 20,
    "Full Name": "Hilton Hilll",
    "Country": "Nauru",
    "Email": "Natasha@colten.biz",
    "Created At": "2012-04-14T17:22:32.347Z"
  },
  {
    "User Id": 21,
    "Full Name": "Eddie Crooks",
    "Country": "Malaysia",
    "Email": "Rachelle@larry.co.uk",
    "Created At": "2003-10-31T23:01:06.276Z"
  },
  {
    "User Id": 22,
    "Full Name": "Corrine Wuckert DDS",
    "Country": "Djibouti",
    "Email": "Oral_Lockman@darrin.me",
    "Created At": "2000-11-04T04:51:07.841Z"
  },
  {
    "User Id": 23,
    "Full Name": "Golden Strosin",
    "Country": "Yemen",
    "Email": "Mckenzie.Kutch@alexzander.biz",
    "Created At": "1987-09-18T13:09:48.007Z"
  },
  {
    "User Id": 24,
    "Full Name": "Mrs. Alfonso Kassulke",
    "Country": "Italy",
    "Email": "Alysa.Schmeler@eleanora.co.uk",
    "Created At": "2000-04-20T14:16:06.970Z"
  },
  {
    "User Id": 25,
    "Full Name": "Earnest Reynolds",
    "Country": "Moldova",
    "Email": "Nannie.Auer@rosalyn.info",
    "Created At": "1989-09-12T03:43:42.404Z"
  },
  {
    "User Id": 26,
    "Full Name": "Keaton Turcotte",
    "Country": "New Caledonia",
    "Email": "Clifton_Jewess@madeline.co.uk",
    "Created At": "1985-02-01T10:20:15.189Z"
  },
  {
    "User Id": 27,
    "Full Name": "Pat Leuschke",
    "Country": "Kiribati",
    "Email": "Unique.Langosh@zane.info",
    "Created At": "1998-03-08T03:29:13.521Z"
  },
  {
    "User Id": 28,
    "Full Name": "Sandy Balistreri",
    "Country": "Guernsey",
    "Email": "Audra@astrid.biz",
    "Created At": "1987-12-14T05:18:09.478Z"
  },
  {
    "User Id": 29,
    "Full Name": "Fleta Cruickshank Sr.",
    "Country": "Greece",
    "Email": "Kaley_Luettgen@kailee.biz",
    "Created At": "2012-10-17T14:54:43.340Z"
  },
  {
    "User Id": 30,
    "Full Name": "Gregg Schoen II",
    "Country": "Iceland",
    "Email": "Americo@serena.name",
    "Created At": "2001-02-19T15:49:07.538Z"
  },
  {
    "User Id": 31,
    "Full Name": "Mr. Lee Bauch",
    "Country": "Turks and Caicos Islands",
    "Email": "Stephan.Stokes@alexandrine.biz",
    "Created At": "2010-01-29T10:27:53.763Z"
  },
  {
    "User Id": 32,
    "Full Name": "Garrick Marquardt",
    "Country": "Niue",
    "Email": "Taya.Mueller@terry.me",
    "Created At": "2009-05-05T04:31:57.004Z"
  },
  {
    "User Id": 33,
    "Full Name": "Mohammed Runolfsdottir",
    "Country": "Liberia",
    "Email": "Flo@sheila.name",
    "Created At": "2002-05-21T06:44:15.552Z"
  },
  {
    "User Id": 34,
    "Full Name": "Mrs. Shanel Stamm",
    "Country": "Vietnam",
    "Email": "Lela_Will@amanda.me",
    "Created At": "1982-05-14T09:22:35.786Z"
  },
  {
    "User Id": 35,
    "Full Name": "Will Sporer",
    "Country": "Benin",
    "Email": "Daniella_Legros@henderson.io",
    "Created At": "2004-02-26T15:53:00.876Z"
  },
  {
    "User Id": 36,
    "Full Name": "Jackson Schaden",
    "Country": "Mozambique",
    "Email": "Jaren@mathilde.me",
    "Created At": "2001-02-13T00:24:32.047Z"
  },
  {
    "User Id": 37,
    "Full Name": "Houston Pfannerstill",
    "Country": "Mozambique",
    "Email": "Margot.Nolan@shanna.us",
    "Created At": "2007-04-05T07:34:57.010Z"
  },
  {
    "User Id": 38,
    "Full Name": "Lloyd Kuhic",
    "Country": "South Africa",
    "Email": "Roy_Cartwright@genevieve.ca",
    "Created At": "1984-08-14T22:46:08.045Z"
  },
  {
    "User Id": 39,
    "Full Name": "Dr. Fiona Bernier",
    "Country": "Algeria",
    "Email": "Autumn_Balistreri@travis.name",
    "Created At": "2010-05-25T11:44:55.329Z"
  },
  {
    "User Id": 40,
    "Full Name": "Mr. Cody Stamm",
    "Country": "Mozambique",
    "Email": "Zetta_Mann@brody.biz",
    "Created At": "1985-02-15T21:00:42.663Z"
  },
  {
    "User Id": 41,
    "Full Name": "Hal Bartell",
    "Country": "Algeria",
    "Email": "Micah.Towne@greta.co.uk",
    "Created At": "2006-09-03T16:51:21.096Z"
  },
  {
    "User Id": 42,
    "Full Name": "Willow Runolfsson",
    "Country": "Zambia",
    "Email": "Elmer_Quigley@ludie.ca",
    "Created At": "2011-12-28T15:51:49.474Z"
  },
  {
    "User Id": 43,
    "Full Name": "Van Hermiston",
    "Country": "Jamaica",
    "Email": "Roxanne@claudie.tv",
    "Created At": "2001-07-24T17:04:48.729Z"
  },
  {
    "User Id": 44,
    "Full Name": "Aaron Bode",
    "Country": "Guyana",
    "Email": "Kip@madelyn.tv",
    "Created At": "2008-01-21T11:10:01.007Z"
  },
  {
    "User Id": 45,
    "Full Name": "Matilda Bins",
    "Country": "Macedonia",
    "Email": "Lucas@anissa.us",
    "Created At": "1983-05-18T11:56:47.895Z"
  },
  {
    "User Id": 46,
    "Full Name": "Haven Klocko IV",
    "Country": "Netherlands",
    "Email": "Gretchen_Reichel@pierre.ca",
    "Created At": "1987-07-05T16:15:09.093Z"
  },
  {
    "User Id": 47,
    "Full Name": "Retta Williamson",
    "Country": "Serbia and Montenegro",
    "Email": "Destin_Effertz@ellis.info",
    "Created At": "1980-02-15T15:18:12.071Z"
  },
  {
    "User Id": 48,
    "Full Name": "Evalyn Wilkinson",
    "Country": "Rwanda",
    "Email": "Keshaun@maureen.co.uk",
    "Created At": "1995-09-22T08:25:57.918Z"
  },
  {
    "User Id": 49,
    "Full Name": "Edwardo Guªann",
    "Country": "Haiti",
    "Email": "Bennett@yoshiko.org",
    "Created At": "1989-01-19T10:15:02.910Z"
  },
  {
    "User Id": 50,
    "Full Name": "Willis Pouros",
    "Country": "Ukraine",
    "Email": "Darion_Brown@stefanie.biz",
    "Created At": "1995-06-06T20:32:36.761Z"
  },
  {
    "User Id": 51,
    "Full Name": "Whitney Quitzon",
    "Country": "Romania",
    "Email": "Waino_Reichel@reynold.net",
    "Created At": "1981-07-27T07:10:27.186Z"
  },
  {
    "User Id": 52,
    "Full Name": "Magdalena Blick",
    "Country": "China",
    "Email": "Cassie_Weimann@orion.me",
    "Created At": "1997-11-29T00:39:55.068Z"
  },
  {
    "User Id": 53,
    "Full Name": "Daphnee King",
    "Country": "Macau SAR China",
    "Email": "Fanny_Bednar@berniece.com",
    "Created At": "1989-01-25T17:05:54.979Z"
  },
  {
    "User Id": 54,
    "Full Name": "Jailyn Flatley",
    "Country": "Dominican Republic",
    "Email": "Oma@mateo.co.uk",
    "Created At": "1984-11-02T12:19:30.477Z"
  },
  {
    "User Id": 55,
    "Full Name": "Alicia Watsica V",
    "Country": "Brazil",
    "Email": "Cedrick@jarrod.us",
    "Created At": "1992-03-15T17:47:36.657Z"
  },
  {
    "User Id": 56,
    "Full Name": "Mustafa Hegmann",
    "Country": "Fiji",
    "Email": "Alexys@maiya.tv",
    "Created At": "1987-09-09T14:07:44.043Z"
  },
  {
    "User Id": 57,
    "Full Name": "Dr. Katharina Stoltenberg",
    "Country": "Saint Lucia",
    "Email": "Alexa.Swaniawski@jarred.info",
    "Created At": "1980-09-24T09:53:43.291Z"
  },
  {
    "User Id": 58,
    "Full Name": "Ona Renner",
    "Country": "Cayman Islands",
    "Email": "Ignatius.Miller@ophelia.me",
    "Created At": "1997-12-22T20:24:51.625Z"
  },
  {
    "User Id": 59,
    "Full Name": "Ryan Carroll",
    "Country": "Saint Lucia",
    "Email": "Conrad.Moen@eulalia.biz",
    "Created At": "2001-08-20T00:59:16.207Z"
  },
  {
    "User Id": 60,
    "Full Name": "Emilio Kihn IV",
    "Country": "Czech Republic",
    "Email": "Jolie_Wunsch@johnson.name",
    "Created At": "2004-07-03T14:50:32.441Z"
  },
  {
    "User Id": 61,
    "Full Name": "Miss Jerel Hamill",
    "Country": "Armenia",
    "Email": "Drew_Harris@shanon.biz",
    "Created At": "2012-12-18T04:12:42.440Z"
  },
  {
    "User Id": 62,
    "Full Name": "Christy Schamberger",
    "Country": "Iceland",
    "Email": "Kenyatta@perry.org",
    "Created At": "1990-04-06T00:08:26.656Z"
  },
  {
    "User Id": 63,
    "Full Name": "Margarete Jacobs",
    "Country": "Panama",
    "Email": "Letitia@amir.co.uk",
    "Created At": "2001-12-07T11:58:28.794Z"
  },
  {
    "User Id": 64,
    "Full Name": "Ruthie Beatty",
    "Country": "Vanuatu",
    "Email": "Jena_Rutherford@simone.info",
    "Created At": "1992-05-22T15:22:35.677Z"
  },
  {
    "User Id": 65,
    "Full Name": "Francesco Rath V",
    "Country": "Armenia",
    "Email": "Pascale@liliana.info",
    "Created At": "1984-09-03T21:52:48.788Z"
  },
  {
    "User Id": 66,
    "Full Name": "Horace Anderson",
    "Country": "Cyprus",
    "Email": "Lennie.Swift@kathryne.me",
    "Created At": "1988-02-25T10:54:06.909Z"
  },
  {
    "User Id": 67,
    "Full Name": "Sarina Stiedemann",
    "Country": "Micronesia",
    "Email": "Efrain.Johnston@peggie.info",
    "Created At": "1994-12-21T00:02:32.622Z"
  },
  {
    "User Id": 68,
    "Full Name": "Bridget Mertz",
    "Country": "Côte d’Ivoire",
    "Email": "Nicola@micheal.tv",
    "Created At": "1991-10-26T22:51:45.463Z"
  },
  {
    "User Id": 69,
    "Full Name": "Miss Jairo Dooley",
    "Country": "Palestinian Territories",
    "Email": "Jayson.Hansen@sylvester.com",
    "Created At": "2002-06-08T21:18:52.409Z"
  },
  {
    "User Id": 70,
    "Full Name": "Brennon Barton",
    "Country": "Trinidad and Tobago",
    "Email": "Tony@delphine.io",
    "Created At": "1999-02-11T09:49:46.950Z"
  },
  {
    "User Id": 71,
    "Full Name": "Maya Pfannerstill",
    "Country": "Panama",
    "Email": "Rey_Fay@derrick.net",
    "Created At": "1999-12-04T17:36:37.314Z"
  },
  {
    "User Id": 72,
    "Full Name": "Orie Heaney",
    "Country": "Portugal",
    "Email": "Dereck.Waters@madeline.us",
    "Created At": "1980-10-02T10:17:04.396Z"
  },
  {
    "User Id": 73,
    "Full Name": "Amiya Altenwerth",
    "Country": "Myanmar [Burma]",
    "Email": "Verla@adelle.us",
    "Created At": "2010-02-12T22:49:11.019Z"
  },
  {
    "User Id": 74,
    "Full Name": "Malcolm Torphy",
    "Country": "Metropolitan France",
    "Email": "Gretchen.Muller@valentina.biz",
    "Created At": "1989-11-10T00:09:59.462Z"
  },
  {
    "User Id": 75,
    "Full Name": "Lillian Harris",
    "Country": "Vietnam",
    "Email": "Jameson@zelma.biz",
    "Created At": "2008-09-12T05:41:28.494Z"
  },
  {
    "User Id": 76,
    "Full Name": "Brook VonRueden",
    "Country": "Norway",
    "Email": "Esta@jasper.ca",
    "Created At": "2011-07-03T06:17:24.022Z"
  },
  {
    "User Id": 77,
    "Full Name": "Claudie Ebert",
    "Country": "Kenya",
    "Email": "Rebeka.Stokes@audreanne.me",
    "Created At": "1996-01-23T18:54:39.801Z"
  },
  {
    "User Id": 78,
    "Full Name": "Raphaelle West PhD",
    "Country": "Oman",
    "Email": "Elena@malvina.name",
    "Created At": "2014-01-08T10:02:49.172Z"
  },
  {
    "User Id": 79,
    "Full Name": "Julianne Hand",
    "Country": "Luxembourg",
    "Email": "Devante_Champlin@emerald.ca",
    "Created At": "2007-11-04T14:39:11.442Z"
  },
  {
    "User Id": 80,
    "Full Name": "Zack Hackett",
    "Country": "Isle of Man",
    "Email": "Cleta@lyric.biz",
    "Created At": "1992-01-05T02:53:37.971Z"
  },
  {
    "User Id": 81,
    "Full Name": "Nakia Bauch",
    "Country": "Hong Kong SAR China",
    "Email": "Elnora@melissa.biz",
    "Created At": "2003-08-21T15:38:24.345Z"
  },
  {
    "User Id": 82,
    "Full Name": "Rashawn Kiehn",
    "Country": "Johnston Island",
    "Email": "Erica_Powlowski@shany.tv",
    "Created At": "2001-04-03T03:23:11.176Z"
  },
  {
    "User Id": 83,
    "Full Name": "Graham Braun",
    "Country": "Kazakhstan",
    "Email": "Michael_Gislason@lina.us",
    "Created At": "2001-07-25T07:41:22.767Z"
  },
  {
    "User Id": 84,
    "Full Name": "Dexter Bartoletti",
    "Country": "Tunisia",
    "Email": "Jovani_Bergstrom@jermaine.info",
    "Created At": "1980-02-05T11:33:50.094Z"
  },
  {
    "User Id": 85,
    "Full Name": "Gladyce Ritchie",
    "Country": "Tanzania",
    "Email": "Isaiah_Rutherford@lola.biz",
    "Created At": "2001-07-28T01:22:45.201Z"
  },
  {
    "User Id": 86,
    "Full Name": "Kelton Altenwerth V",
    "Country": "Hungary",
    "Email": "Elise@shanna.ca",
    "Created At": "1983-08-13T19:13:41.081Z"
  },
  {
    "User Id": 87,
    "Full Name": "Arthur Bernier",
    "Country": "New Caledonia",
    "Email": "Ima@fanny.com",
    "Created At": "1991-12-03T06:44:49.133Z"
  },
  {
    "User Id": 88,
    "Full Name": "Brook Senger IV",
    "Country": "Chile",
    "Email": "Samara@kyle.biz",
    "Created At": "1987-10-17T20:15:37.049Z"
  },
  {
    "User Id": 89,
    "Full Name": "Audrey Lehner",
    "Country": "Niger",
    "Email": "Ewald.Kuvalis@cathryn.info",
    "Created At": "1995-08-27T17:29:35.111Z"
  },
  {
    "User Id": 90,
    "Full Name": "Lyda Bernier",
    "Country": "Tokelau",
    "Email": "Florence@elnora.me",
    "Created At": "2014-08-27T04:06:16.366Z"
  },
  {
    "User Id": 91,
    "Full Name": "Turner Treutel",
    "Country": "Sierra Leone",
    "Email": "Ivory.Brakus@weldon.tv",
    "Created At": "1987-12-21T00:30:24.498Z"
  },
  {
    "User Id": 92,
    "Full Name": "Miss Rafael Kiehn",
    "Country": "Jamaica",
    "Email": "Cooper@payton.biz",
    "Created At": "2007-02-22T18:18:02.619Z"
  },
  {
    "User Id": 93,
    "Full Name": "Edwina Kovacek",
    "Country": "Central African Republic",
    "Email": "Dusty@gene.info",
    "Created At": "2007-10-16T07:06:26.243Z"
  },
  {
    "User Id": 94,
    "Full Name": "Kim Jenkins",
    "Country": "Haiti",
    "Email": "Mason@dagmar.co.uk",
    "Created At": "2007-09-20T20:13:07.686Z"
  },
  {
    "User Id": 95,
    "Full Name": "Irma Bednar",
    "Country": "Panama",
    "Email": "Lonie@garnett.org",
    "Created At": "1993-06-24T21:38:00.466Z"
  },
  {
    "User Id": 96,
    "Full Name": "Mrs. Julianne Considine",
    "Country": "North Korea",
    "Email": "Rosendo@isidro.tv",
    "Created At": "1983-09-11T18:31:13.228Z"
  },
  {
    "User Id": 97,
    "Full Name": "Dallas Schmidt",
    "Country": "China",
    "Email": "Boyd@jillian.us",
    "Created At": "2001-04-15T00:45:04.247Z"
  },
  {
    "User Id": 98,
    "Full Name": "Mrs. Angelina Kovacek",
    "Country": "Norway",
    "Email": "Sydni.Crist@llewellyn.info",
    "Created At": "2009-01-26T01:57:31.318Z"
  },
  {
    "User Id": 99,
    "Full Name": "Mckayla Bechtelar",
    "Country": "Falkland Islands",
    "Email": "Carson_Hermiston@eliza.name",
    "Created At": "2005-06-03T16:34:06.745Z"
  }
];






var w = $.ergo({
	etype: 'table-grid',
	height: 400,
	column: {
		// обычный заголовок
		components: {
			content: {
				etype: 'link',
				cls: 'column-text',
				// mixins: ['caret'],
				// onClick: function() {
					// this.states.toggle('up');
				// },
				// states: {
					// 'up:direction': 'up',
					// 'down:direction': 'down'
				// }
				// $caret: {
					// etype: 'line',
					// cls: 'caret'
				// }
			}
			// menuButton: {
				// etype: 'dropdown-box',
				// cls: 'column-dropdown',
				// $dropdown_items: ['По возрастанию', 'По убыванию', '|', 'Фильтр', 'Скрыть колонку']
			// }
		},
		// states: {
			// 'sorted': 'sorted'
		// },
		autoBind: false,
		set: {
			'text': function(v) {this.content.opt('text', v);}
		}		
	},
	columns: [{
		// header: {
			// text: 'ID',
			// sorted: true
		// },
		header: 'ID',
		dataId: 'User Id',
		binding: 'text',
		width: 60
	}, {
		header: 'Full Name',
		dataId: 'Full Name',
		binding: 'text',
	}, {
		header: 'Country',
		dataId: 'Country',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'Email',
		binding: 'text'
	}, {
		header: 'Created At',
		dataId: 'Created At',
		binding: 'text'
	}],
	data: data
});


w.$render('#sample');


