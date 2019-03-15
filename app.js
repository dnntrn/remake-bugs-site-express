// const express = require('express')
// const app = express()
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(3000, () => console.log('Example app listening on port 3000!'))

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next) {
	console.log(req.method, req.path);
	next();
});



app.get("/", function(req, res){
  res.render("index", {});

});

app.get("/calendar", function(req, res){

  res.render("calendar", {});

});


app.get("/about", function(req, res){

	const eBoardProfilesSrc = [
		{
			name: "Veena Arvind",
			title: "President",
			src: "img/profiles/varvind-f2018.jpg",
			alt: "Veena Arvind",
			width: "960",
			height: "960",
			bio: `Sophomore studying Computer Science in CAS. She loves to talk about code
			with other people. In her free time, Veena goes to the gym, makes jewelry,
			and plays card games.`
		},

		{
			name: "Ami Anachiappan",
			title: "Vice President",
			src: "img/profiles/anachiappan-f2018.jpg",
			alt: "Veena Arvind",
			width: "3872",
			height: "2592",
			bio: `Sophomore from California studying Computer Science and Economics. In her free time,
			she loves spending time with family, running, and of course, coding!`
		},

		{
			name: "Edmond Shao",
			title: "Secretary",
			src: "img/profiles/eshao-s2019.jpg",
			alt: "Edmond Shao",
			width: "1368",
			height: "1368",
			bio: `Edmond is a Sophomore at CAS studying Computer Science and minoring in Business Studies.
			Aside from class, he likes cars, being a foodie and traveling.`
		},

		{
			name: "George Ma",
			title: "Treasurer",
			src: "img/profiles/gma-f2018.JPG",
			alt: "George Ma",
			width: "3264",
			height: "2448",
			bio: `Junior from Singapore majoring in Computer Science and Business.
			He likes reading, writing, coding, and gaming.`
		},


		{
			name: "Candice Chen",
			title: "Director of Marketing",
			src: "img/profiles/gma-f2018.JPG",
			alt: "George Ma",
			width: "3264",
			height: "2448",
			bio: `Candice is a junior at Steinhardt majoring in Media, Culture,
			and Communication and minoring in Web Design. If you cannot find her
			outside of class, Candice is traveling or planning for her 23rd country to visit.`
		},


		{
			name: "Deanna Tran",
			title: "Director of Communications",
			src: "img/profiles/dtran-s2019.jpg",
			alt: "Deanna Tran",
			width: "3024",
			height: "4032",
			bio: `Junior in CAS studying Computer Science with minors in Web Design and
			Linguistics. Outside of school, Deanna can be found at a local restaurant or
			art museum.`
		},



		{
			name: "Albert Liu",
			title: "Webmaster",
			src: "img/profiles/aliu-s2019.jpg",
			alt: "Albert Liu",
			width: "666",
			height: "877",
			bio: `Albert enjoys python scripting and long walks in Central Park. In his work time
			he majors in Computer Science and minors in Mathematics at CAS.`
		},




		{
			name: "Shelly Cao",
			title: "Director of Outreach",
			src: "img/profiles/scao-s2019.png",
			alt: "Shelly Cao",
			width: "576",
			height: "716",
			bio: `Shelly is a sophomore majoring in Computer Science with minors in Math and
			Business Study. She comes from a small city in China called Jingzhou and even her
			Chinese friends are clueless as to where it is. In her free time, she loves to
			explore the different boroughs in the city and try food from different cultures.`
		},


		{
			name: "Brian Shih",
			title: "Vice Director of Outreach",
			src: "img/profiles/bshih-s2019.jpg",
			alt: "Brian Shih",
			width: "896",
			height: "896",
			bio: `Brian is a Junior at CAS Majoring in Computer Science and Minoring in Cyber
			Security & Web Development. He is an Australian that was raised in Taiwan. Outside
			of class you can find him writing scripts and drinking Soylent™(Please Sponsor).`
		},



		{
			name: "Aaditya Mehta",
			title: "Project Lead",
			src: "img/profiles/amehta-s2019.png",
			alt: "Aaditya Mehta",
			width: "1242",
			height: "1452",
			bio: `A sophomore studying Economics and Mathematics, Aaditya spends way too much
			time in Stern (#IAmStern). In his free time he likes to listen to music, take long
			walks, and read Econ papers, sometimes simultaneously.`
		},

		{
			name: "Samuel Lin",
			title: "Vice Project Lead",
			src: "img/profiles/slin-s2019.JPG",
			alt: "Samuel Lin",
			width: "3024",
			height: "4032",
			bio: `Samuel is a Sophomore at CAS majoring in Computer Science and Minoring in Web
			Design and Game Design. He was born and raised in Taiwan, but studied in Singapore
			for high school before coming to New York. He is a big foodie and enjoys trying
			foods from different cultures.`
		}

	];




	const foundingProfilesSrc = [
		{
			name: "Nadira Dewji",
			src: "img/profiles/logo_no_title.png",
			alt: "Nadira Dewji",
			width: "1458",
			height: "1246",
			bio: `Alumni who studied Computer Science in CAS. Originally from Tanzania, Nadira loves
			travelling, scuba diving and wildlife. She’s excited about open source principles and
			making impactful contributions.`
		},

		{
			name: "David Klein",
			src: "img/profiles/dklein-f2018.jpg",
			alt: "David Klein",
			width: "1365",
			height: "1365",
			bio: `Alumni from California who studied Biology with three minors, and loves both carbon
			based life and silicon based life to equal extents.`
		},

		{
			name: "Ananditha Raghunath",
			src: "img/profiles/araghunath-f2018.jpg",
			alt: "Ananditha Raghunath",
			width: "1242",
			height: "1242",
			bio: `Alunmi who studied Math and CS at Courant. Having started to code only after she arrived
			at NYU, she’s is excited to mentor new members that may not know how to make their ideas translate
			into tangible code based projects!`
		}

	]


	const facultyProfilesSrc = [
		{
			name: "Joanna Klukowska",
			src: "img/profiles/logo_no_title.png",
			alt: "Joanna Klukowska",
			width: "1458",
			height: "1246",
			bio: `Clinical Assistant Professor of Computer Science at the Courant Institute of Mathematical
			Sciences at New York University.`
		}

	]

  res.render("about", {
		"eBoardProfilesSrcArr": eBoardProfilesSrc,
		"foundingProfilesSrcArr": foundingProfilesSrc,
		"facultyProfilesSrcArr": facultyProfilesSrc
	});

});

app.listen(PORT);
