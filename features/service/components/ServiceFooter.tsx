import type { ReactNode } from "react";
import Image from "next/image";

import logoSrc from "@/app/SEREYKHMER_logo.png";
import {
	FOOTER_CONTACT,
	FOOTER_CONTACT_COLUMN_TITLE,
	FOOTER_HEADLINE_LINES,
	FOOTER_QUICK_LINKS_TITLE,
	FOOTER_SOCIAL,
	HEADER_CONTACT_CTA,
	HEADER_NAV_ITEMS,
	HERO,
} from "@/features/home/data/home-copy";
import { cn } from "@/shared/lib/utils";

function SocialCircle({
	href,
	label,
	children,
}: {
	href: string;
	label: string;
	children: ReactNode;
}) {
	const external = href.startsWith("http");
	return (
		<a
			href={href}
			aria-label={label}
			className="inline-flex size-10 items-center justify-center rounded-full bg-white text-brand-navy transition hover:bg-white/90"
			{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
		>
			<span className="size-6 [&>svg]:h-full [&>svg]:w-full">{children}</span>
		</a>
	);
}

export function ServiceFooter() {
	return (
		<footer className="w-full bg-brand-navy text-white mt-[80px]">
			{/* Main footer block */}
			<div className="relative w-full overflow-visible">
				{/* Decorative background graphic — bottom-right */}
				<Image
					src="/graphic/footerBottomRight.svg"
					alt=""
					width={420}
					height={520}
					aria-hidden="true"
					className="pointer-events-none absolute bottom-0 right-0 z-0 h-auto w-auto max-h-[min(55vh,520px)] max-w-[min(90vw,420px)] select-none"
				/>

				{/* CTA pill — floats above, negative top margin pulls it up over the section above */}
				<div className="absolute inset-x-0 top-0 z-30 flex justify-center px-4 sm:px-6 -mt-14 sm:-mt-16">
					<div className="w-full max-w-[1100px]">
						<div className="flex h-[100px] w-full items-center justify-between gap-3 rounded-[30px] border border-[#2a3f5c] bg-white px-4 shadow-[4px_4px_0_0_#37517C] sm:gap-6 sm:px-10 lg:px-12">
							{/* Logo */}
							<a
								href="#top"
								className="relative flex min-w-0 shrink items-center"
							>
								<Image
									src={logoSrc}
									alt="SEREY KHMER"
									width={300}
									height={98}
									className="h-14 w-auto max-w-[min(100%,270px)] object-contain object-left sm:h-[68px] sm:max-w-none md:h-[80px]"
								/>
							</a>

							{/* Right side: contact button + telegram icon */}
							<div className="flex shrink-0 items-center justify-end">
								<a
									href="#contact"
									lang="km"
									className="inline-flex h-[60px] w-[275px] max-w-full shrink-0 items-center justify-center rounded-full bg-linear-to-r from-[#37517C] from-0% to-[rgb(55_81_124/0.75)] to-100% px-4 text-[25px] font-semibold leading-tight text-white shadow-[inset_4px_4px_0_0_#37517C] transition hover:brightness-110"
								>
									{HERO.cta}
								</a>
								<a
									href={FOOTER_SOCIAL.telegram}
									aria-label="Telegram"
									className="inline-flex h-[57px] w-[75px] shrink-0 items-center justify-center rounded-[180px] bg-linear-to-r from-[#37517C] from-0% to-[rgb(55_81_124/0.75)] to-100% text-white transition hover:brightness-110"
								>
									<span className="sr-only">Telegram</span>
									<svg
										className="size-6"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M20.6 4.6 2.9 11.8c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.7 5.1c.2.6.1.8.7.8.4 0 .6-.2.9-.4l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.1-.4-1.6-1.4-1.1Zm-2.4 3.1-8.8 7.9-.3 3.3-1.2-3.9 10.4-6.6c.5-.3.9-.1.6.3Z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Main footer content grid */}
				<div className="relative z-10 flex w-full flex-col">
					{/* Spacer to clear the absolutely-positioned pill */}
					<div
						className="pointer-events-none shrink-0 pt-20 sm:pt-24 lg:pt-16"
						aria-hidden
					/>

					<div className="flex min-h-0 flex-1 flex-col px-4 pb-12 sm:px-6">
						<div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 grid-rows-[auto_auto] gap-10 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:grid-rows-[minmax(0,1fr)] lg:gap-x-0 lg:gap-y-0 lg:items-stretch">

							{/* Left: Headline + CTA button */}
							<div
								lang="km"
								className="row-start-1 flex h-full min-h-0 w-full flex-col items-start justify-center pr-2 text-left lg:col-start-1 lg:row-start-1 lg:border-r lg:border-white lg:pr-4"
							>
								<div className="flex w-full max-w-xl flex-col items-start gap-8 text-start py-8 lg:py-10">
									<h2 className="w-full text-start text-[36px] font-semibold leading-snug tracking-tight lg:text-[40px] lg:leading-tight">
										{FOOTER_HEADLINE_LINES.map((line, i) => (
											<span key={line}>
												{i > 0 ? <br /> : null}
												{line}
											</span>
										))}
									</h2>
									<div className="flex flex-wrap items-center justify-start">
										<a
											href="#contact"
											className="inline-flex h-[75px] w-[275px] max-w-full shrink-0 items-center justify-center rounded-[180px] bg-linear-to-r from-[rgb(255_255_255/0.75)] from-0% to-[#FFFFFF] to-100% text-[25px] font-semibold leading-tight text-brand-navy shadow-[inset_0_0_0_0_#37517C] transition hover:brightness-[1.02]"
											lang="km"
										>
											{HERO.cta}
										</a>
										<a
											href="#contact"
											aria-label={HEADER_CONTACT_CTA}
											className="inline-flex h-[75px] w-[75px] items-center justify-center rounded-full bg-linear-to-r from-[rgb(255_255_255/0.75)] from-0% via-[rgb(255_255_255/0.88)] via-[53%] to-[#FFFFFF] to-100% text-zinc-900 shadow-sm"
										>
											<span className="sr-only">{HEADER_CONTACT_CTA}</span>
											<svg
												className="size-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2}
												aria-hidden
											>
												<title>{HEADER_CONTACT_CTA}</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M17 8l4 4m0 0l-4 4m4-4H3"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>

							{/* Right: Quick links + Contact info + Socials */}
							<div className="row-start-2 flex min-h-0 flex-col justify-center pl-0 lg:col-start-2 lg:row-start-1 lg:h-full lg:pl-[120px] lg:pr-2">
								<div className="flex w-full flex-col items-start gap-10 sm:flex-row sm:items-start sm:justify-start sm:gap-16 py-8 lg:py-10">

									{/* Quick links column */}
									<div lang="km" className="w-full max-w-[200px] text-left">
										<p className="text-[25px] font-semibold text-white">
											{FOOTER_QUICK_LINKS_TITLE}
										</p>
										<ul className="mt-5 space-y-3 text-white/95">
											{HEADER_NAV_ITEMS.map((item) => (
												<li key={item.id}>
													<a
														href={`#${item.id}`}
														className="text-[18px] font-medium transition hover:text-white hover:underline"
													>
														{item.label}
													</a>
												</li>
											))}
										</ul>
									</div>

									{/* Contact column */}
									<div
										lang="km"
										className="w-full max-w-sm space-y-5 text-left"
									>
										<p className="text-[25px] font-semibold text-white">
											{FOOTER_CONTACT_COLUMN_TITLE}
										</p>
										<div className="space-y-4 text-white/95">
											{/* Email */}
											<p className="flex gap-3">
												<span
													className="mt-0.5 shrink-0 text-white/90"
													aria-hidden
												>
													<svg
														className="size-7"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={1.75}
															d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
														/>
													</svg>
												</span>
												<a
													href={`mailto:${FOOTER_CONTACT.email}`}
													className="font-en text-[18px] font-medium break-all underline-offset-2 hover:underline"
													lang="en"
												>
													{FOOTER_CONTACT.email}
												</a>
											</p>

											{/* Phone */}
											<p className="flex gap-3">
												<span
													className="mt-0.5 shrink-0 text-white/90"
													aria-hidden
												>
													<svg
														className="size-7"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={1.75}
															d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
														/>
													</svg>
												</span>
												<a
													href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, "")}`}
													className="font-en text-[18px] font-medium underline-offset-2 hover:underline"
													lang="en"
												>
													{FOOTER_CONTACT.phone}
												</a>
											</p>

											{/* Address */}
											<div className="flex gap-3">
												<span
													className="mt-1 shrink-0 text-white/90"
													aria-hidden
												>
													<svg
														className="size-7"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={1.75}
															d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
														/>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={1.75}
															d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
														/>
													</svg>
												</span>
												<div className="space-y-1 whitespace-pre-wrap text-[18px] font-medium">
													{FOOTER_CONTACT.addressLines.map((line) => (
														<p key={line}>{line}</p>
													))}
												</div>
											</div>
										</div>

										{/* Social icons */}
										<div className="flex flex-wrap gap-3 pt-2">
											<SocialCircle
												href={FOOTER_SOCIAL.facebook}
												label="Facebook"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
												>
													<path d="M13.5 22v-8h2.6l.4-3h-3V9.1c0-.9.2-1.5 1.5-1.5H16.6V5a20 20 0 0 0-2.4-.1c-2.4 0-4.1 1.4-4.1 4.1V11H7.5v3h2.6v8h3.4Z" />
												</svg>
											</SocialCircle>
											<SocialCircle
												href={FOOTER_SOCIAL.tiktok}
												label="TikTok"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
												>
													<path d="M15.7 5.1c.7 1.2 1.8 2 3.3 2.2v3.1c-1.6-.1-3-.6-4.2-1.6v6.4c0 3.2-2.6 5.8-5.8 5.8S3.2 18.4 3.2 15.2s2.6-5.8 5.8-5.8c.4 0 .8 0 1.2.1v3.2a2.7 2.7 0 0 0-1.2-.3c-1.5 0-2.8 1.2-2.8 2.8S7.5 18 9 18s2.8-1.2 2.8-2.8V3.1h3c.2.7.5 1.4.9 2Z" />
												</svg>
											</SocialCircle>
											<SocialCircle
												href={FOOTER_SOCIAL.youtube}
												label="YouTube"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
												>
													<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1 31.6 31.6 0 0 0 .5-5.8 31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12 9.6 15.6z" />
												</svg>
											</SocialCircle>
											<SocialCircle
												href={FOOTER_SOCIAL.telegram}
												label="Telegram"
											>
												<svg
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
												>
													<path d="M20.6 4.6 2.9 11.8c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.7 5.1c.2.6.1.8.7.8.4 0 .6-.2.9-.4l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.1-.4-1.6-1.4-1.1Zm-2.4 3.1-8.8 7.9-.3 3.3-1.2-3.9 10.4-6.6c.5-.3.9-.1.6.3Z" />
												</svg>
											</SocialCircle>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright bar */}
			<div className="flex h-[55px] items-center border-t border-white bg-[#37517C]">
				<div className="mx-auto flex h-full w-full max-w-6xl items-center px-4 sm:px-6">
					<p
						lang="en"
						className={cn(
							"text-left text-[15px] font-medium leading-none text-white sm:text-sm",
							"font-en",
						)}
					>
						{FOOTER_CONTACT.copyright}
					</p>
				</div>
			</div>
		</footer>
	);
}
