import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";

// shared configuration
export const baseOptions: HomeLayoutProps = {
	nav: {
		title: "vProxy Cloud 文檔中心",
	},
	links: [
		{
			text: "文檔首頁",
			url: "/docs",
			active: "nested-url",
		},
		{
			text: "客戶中心",
			url: "https://client.vproxy.cloud",
			active: "nested-url",
		},
		{
			text: "Discord",
			url: "https://discord.vproxy.cloud",
			active: "nested-url",
		},
	],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
	...baseOptions,
	tree: pageTree,
};
