export type TimelineItem = {
  title: string;
  period: string;
  subtitle: string;
  skills: string[];
  category: string;
};

export const timeline: TimelineItem[] = [
	{
		title: "iSolutions s.r.l.",
		period: "2019 - Now",
		subtitle: "Support Dept Developer",
		skills: ["SQL","C#","VB","HTML","CSS","JS","GIT","GRAFANA"],
		category: "work"
	},
	{
		title: "Dublin, Ireland",
		period: "Dec 2024",
		subtitle: "Intensive English Course",
		skills: ["ENGLISH","COMMUNICATION","SOCIAL INTERACTION"],
		category: "education"
	},	
	{
		title: "Code Academy",
		period: "June 2024",
		subtitle: "Learn Fundamentals",
		skills: ["HTML","CSS","JS"],
		category: "education"
	},
	{
		title: "Started hybrid training",
		period: "Sept 2023",
		subtitle: "Discipline & Mental Wellbeing",
		skills: ["FITNESS", "RESILIENCE", "FOCUS"],
		category: "personal"
	},
	{
		title: "Partech Spa",
		period: "July 2018",
		subtitle: "Jr Systems Engineer Course",
		skills: ["FIREWALL","VPN","ACTIVE DIRECTORY","SQL"],
		category: "education"
	},
];