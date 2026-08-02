import iconBrush from "@/assets/icons/icon-brush.svg";
import iconCode from "@/assets/icons/icon-code-white.svg";
import iconProfile from "@/assets/icons/icon-profil.svg";

export const skills = [
	{
		title: "Design",
		icon: iconBrush,
		iconAlt: "Icône de pinceau",
		description: "Je peux designer un site web, un logo, et plus encore.",
		listTitle: "Je maîtrise :",
		items: [
			"Photoshop",
			"Illustrator",
			"Adobe XD",
			"InDesign",
			"Figma",
			"Webflow",
		],
		accent: false,
	},
	{
		title: "Développement",
		icon: iconCode,
		iconAlt: "Icône de développement",
		description: "J'aime coder par moi-même et j'adore créer des sites.",
		listTitle: "Je sais utiliser :",
		items: [
			"HTML / CSS / JS",
			"React / Vue / Astro",
			"PHP / Symfony",
			"Ruby / Ruby on Rails",
			"GSAP",
			"SQL / NoSQL",
			"Git / GitHub",
		],
		accent: true,
	},
	{
		title: "Soft Skills",
		icon: iconProfile,
		iconAlt: "Icône de personne",
		description: "J'allie créativité et rigueur pour travailler efficacement.",
		listTitle: "Mes points forts :",
		items: [
			"Adaptabilité",
			"Rigueur",
			"Créativité",
			"Autonomie",
			"Initiative",
			"Efficacité",
		],
		accent: false,
	},
];

export const nextSkills = [
	{
		title: "Next.js",
		description: "Pour pousser le développement React encore plus loin.",
	},
	{
		title: "Three.js & Spline",
		description: "Pour créer et intégrer des modèles 3D dans mes projets web.",
	},
];
