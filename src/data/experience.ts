import iconBrush from "@/assets/icons/icon-brush.svg";
import iconCode from "@/assets/icons/icon-code.svg";
import iconBubble from "@/assets/icons/icon-bubble.svg";
import iconSearch from "@/assets/icons/icon-loupe.svg";

import logoSandrineFoucher from "@/assets/experiences/logo-SF.png";
import siteSandrineFoucher from "@/assets/experiences/sf-site.webp";

import logoTcheen from "@/assets/experiences/logo-tcheen.webp";

export const experiences = [
	{
		title: "Stage avec Sandrine Foucher",
		date: "Avril - Juin 2023 — 8 semaines",

		icons: [
			{
				name: "Design",
				src: iconBrush,
				alt: "Icône de pinceau",
			},
			{
				name: "Développement",
				src: iconCode,
				alt: "Icône de développement",
			},
			{
				name: "Social Media",
				src: iconBubble,
				alt: "Icône de bulle",
			},
		],

		layoutClass: "stage-sf",

		sections: [
			{
				title: "Design",
				content: [
					"Au sein de l'entreprise de Sandrine Foucher, ma contribution au design a été centrale. J'ai été chargé de créer la charte graphique et le logo, j'ai mis en pratique mes compétences en design graphique pour créer une expérience cohérente et intéressante.",

					"Pour concevoir les visuels, j'ai utilisé des outils tels que Adobe XD, Illustrator et Canva, développant ainsi mes compétences en design. Des maquettes aux visuels pour les réseaux sociaux, chaque aspect a contribué à élargir mes compétences en design.",
				],
				accent: true,
			},

			{
				image: {
					src: logoSandrineFoucher,
					alt: "Logo de Sandrine Foucher",
				},
			},

			{
				title: "Réseaux sociaux",
				content: [
					"J'ai été très impliqué dans la création et à la mise en place des réseaux sociaux. J'étais en charge de développer une présence en ligne, j'ai élaboré un calendrier éditorial et créé des templates pour les posts et stories Instagram.",

					"Je n'ai pas créé de contenu à proprement parler, mon rôle était de guider ma tutrice de stage sur les différents réseaux pour lui apprendre les bonnes pratiques et comment communiquer avec une communauté.",
				],
				accent: true,
			},

			{
				title: "Développement",
				content: [
					"Durant mes 8 semaines de stage, j'ai joué un rôle crucial dans le développement du site web de l'entreprise. Mon principal projet a été le développement du site web en utilisant HTML, CSS et JavaScript. J'ai veillé à rendre le site fluide et intuitif pour répondre au public visé.",

					"Cette expérience m'a permis de renforcer mes compétences en programmation web et d'appliquer mes connaissances théoriques dans un contexte professionnel concret.",
				],
				accent: true,
			},

			{
				image: {
					src: siteSandrineFoucher,
					alt: "Site web de Sandrine Foucher",
				},
			},
		],
	},

	{
		title: "Stage chez Tcheen",
		date: "Janvier 2023 — 2 semaines",

		icons: [
			{
				name: "Découverte",
				src: iconSearch,
				alt: "Icône de loupe",
			},
			{
				name: "Développement",
				src: iconCode,
				alt: "Icône de développement",
			},
		],

		layoutClass: "stage-tcheen",

		sections: [
			{
				image: {
					src: logoTcheen,
					alt: "Logo de Tcheen",
				},
				customClass: "tcheen-logo",
			},

			{
				title: "Présentation de tous les métiers",
				content: [
					"Lors de ce court stage, j'ai eu l'occasion de découvrir toute l'équipe. Cette équipe est composée de 5 personnes et est divisée en trois catégories, j'ai passé du temps avec les trois pôles de l'entreprise.",

					"J'ai découvert le travail des personnes s'occupant de la partie marketing et contact de prestataires, mais aussi celui de la personne qui était chargée de créer les visuels et le design du site web et finalement j'ai terminé le stage avec le développeur.",
				],
				accent: true,
			},

			{
				title: "Développement",
				content: [
					"C'est avec le développeur que j'ai passé le plus de temps. La toute nouvelle maquette pour la refonte du site web m'a été confiée. J'ai dû l'intégrer rapidement avec HTML et CSS afin de faire gagner du temps au développeur et pour me donner un défi.",

					"En parallèle, j'ai découvert le système de base de données et tout le back-end de l'entreprise. J'ai dû comprendre par moi-même comment le système fonctionnait en réalisant des tests et des simulations.",
				],
				accent: true,
			},
		],
	},
];
