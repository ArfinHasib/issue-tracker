import Image from "next/image";
import Pagination from "./components/Pagination";
import LatestIssues from "./LatestIssues";
import Issueummary from "./Issueummary";
import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

export default async function Home() {
	const open = await prisma.issue.count({ where: { status: "OPEN" } });
	const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
	const inProgress = await prisma.issue.count({
		where: { status: "IN_PROGRESS" },
	});

	return (
		<Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
			<Flex direction='column' gap={"5"}>
				<Issueummary
					open={open}
					inProgress={inProgress}
					closed={closed}
				/>
				<IssueChart
					open={open}
					inProgress={inProgress}
					closed={closed}
				/>
			</Flex>
			<LatestIssues />
		</Grid>
	);
}

export const metadata: Metadata = {
	title: "Issue Tracker - Dashboard",
	description: "View a summary of project issues",
	// twitter: @ArfinHasib007,
};
