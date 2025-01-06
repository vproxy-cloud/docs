import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { I18nProvider } from "fumadocs-ui/i18n";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s - vProxy Cloud",
		default: "vProxy Cloud 文檔中心",
	},
	description: "vProxy Cloud 文檔中心",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex min-h-screen flex-col">
				<I18nProvider
					locale="cn"
					translations={{
						cn: {
							name: "繁體中文",
							toc: "目錄",
							search: "搜索文檔",
							searchNoResult: "無任何結果",
							previousPage: "上一頁",
							nextPage: "下一頁",
						},
					}}
				>
					<RootProvider>{children}</RootProvider>
				</I18nProvider>
			</body>
		</html>
	);
}
