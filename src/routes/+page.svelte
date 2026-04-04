<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	// ── Email copy ──────────────────────────────────────────────
	let copied = $state(false);
	let copyTimeout;

	function handleEmailClick() {
		navigator.clipboard.writeText('richard.bernard2026@gmail.com').then(() => {
			copied = true;
			clearTimeout(copyTimeout);
			copyTimeout = setTimeout(() => (copied = false), 2000);
		});
	}

	let calloutCopied = $state(false);
	let calloutCopyTimeout;

	function handleCalloutEmailClick() {
		navigator.clipboard.writeText('richard.bernard2026@gmail.com').then(() => {
			calloutCopied = true;
			clearTimeout(calloutCopyTimeout);
			calloutCopyTimeout = setTimeout(() => (calloutCopied = false), 2000);
		});
	}

	// ── Parallax ────────────────────────────────────────────────
	let scrollY = $state(0);

	onMount(() => {
		// ── Hero: left identity block ──────────────────────────
		gsap.from('#hero-left', {
			y: 30,
			opacity: 0,
			duration: 0.8,
			delay: 0.2,
			ease: 'power2.out'
		});

		// ── Hero: photo ─────────────────────────────────────────
		gsap.from('#hero-photo', {
			opacity: 0,
			duration: 0.8,
			delay: 0.4,
			ease: 'power2.out'
		});

		// ── Hero: right CTA buttons ──────────────────────────────
		gsap.from('#hero-right', {
			y: 20,
			opacity: 0,
			duration: 0.8,
			delay: 0.5,
			ease: 'power2.out'
		});

		// ── Venture: left copy block ─────────────────────────────
		gsap.from('#venture-left', {
			x: -40,
			opacity: 0,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '#venture-left',
				start: 'top 80%'
			}
		});

		// ── Venture: right stats card ────────────────────────────
		gsap.from('#venture-right', {
			x: 40,
			opacity: 0,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '#venture-right',
				start: 'top 80%'
			}
		});

		// ── Academics: section header ─────────────────────────────
		gsap.from('#academics-header', {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '#academics-header',
				start: 'top 85%'
			}
		});

		// ── Academics: timeline cards (alternating) ───────────────
		gsap.utils.toArray('.timeline-card').forEach((card, i) => {
			const isLeft = i % 2 === 0;
			gsap.from(card, {
				x: isLeft ? -40 : 40,
				opacity: 0,
				duration: 0.7,
				delay: i * 0.15,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: card,
					start: 'top 85%'
				}
			});
		});

		// ── Academics: achievement cards ──────────────────────────
		gsap.from('.achievement-card', {
			y: 30,
			opacity: 0,
			duration: 0.6,
			stagger: 0.1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '#achievements-row',
				start: 'top 90%'
			}
		});

		// ── Projects: section header ──────────────────────────────
		gsap.from('#projects-header', {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '#projects-header',
				start: 'top 85%'
			}
		});

		// ── Projects: cards staggered fade-up ─────────────────────
		gsap.from('.project-card', {
			y: 40,
			opacity: 0,
			duration: 0.7,
			stagger: 0.15,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '#projects-grid',
				start: 'top 85%'
			}
		});

		// ── Projects: card hover animations ───────────────────────
		document.querySelectorAll('.project-card').forEach((card) => {
			card.addEventListener('mouseenter', () => gsap.to(card, { y: -4, duration: 0.3, ease: 'power2.out' }));
			card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' }));
		});

		// ── Projects: callout bar ──────────────────────────────────
		gsap.from('#projects-callout', {
			opacity: 0,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '#projects-callout',
				start: 'top 90%'
			}
		});
	});
</script>

<svelte:window on:scroll={() => (scrollY = window.scrollY)} />

<!-- ══════════════════════════════════════════════════════════════
     HERO
══════════════════════════════════════════════════════════════ -->
<section
	class="relative min-h-screen bg-[#0A0F2C] flex items-center overflow-hidden"
	style="padding-top: 80px;"
>
	<!-- Parallax gradient blob -->
	<div
		class="absolute inset-0 pointer-events-none"
		style="
			background: radial-gradient(ellipse at 60% 30%, rgba(201,169,110,0.07) 0%, transparent 55%);
			transform: translateY({scrollY * 0.3}px);
			will-change: transform;
		"
	></div>

	<div class="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-16
	            grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] items-center gap-12 md:gap-8">

		<!-- ── LEFT — Identity Block ── -->
		<div
			id="hero-left"
			class="flex flex-col items-center text-center md:items-start md:text-left"
		>
			<p class="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style="color: #C9A96E;">
				Founder · Future Corporate Lawyer
			</p>

			<h1 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
				Richard C. Bernard III
			</h1>

			<p class="text-base md:text-lg text-white/70 font-normal max-w-md leading-relaxed">
				Building Aruon-AI. Pursuing law with a focus on M&amp;A, business, and financial regulations. Incoming undergraduate.
			</p>
		</div>

		<!-- ── CENTER — Photo ── -->
		<div class="flex justify-center">
			<img
				id="hero-photo"
				src="/richard-hero.jpg"
				alt="Richard C. Bernard III — Founder of Aruon-AI"
				class="w-full h-[280px] md:h-[480px] rounded-2xl object-cover object-top"
				style="
					border: 1px solid rgba(201,169,110,0.3);
					box-shadow: 0 8px 32px rgba(0,0,0,0.4);
				"
			/>
		</div>

		<!-- ── RIGHT — CTA Buttons ── -->
		<div
			id="hero-right"
			class="flex flex-col items-center md:items-end gap-4 w-full"
		>
			<!-- Button 1: Visit Aruon-AI -->
			<a
				href="https://aruon.ai/"
				target="_blank"
				rel="noopener noreferrer"
				class="w-full md:w-64 text-center text-sm font-semibold px-8 py-3 rounded-full
				       transition-all duration-200 hover:brightness-110 active:scale-95"
				style="background: #C9A96E; color: #0A0F2C;"
			>
				Visit Aruon-AI
			</a>

			<!-- Button 2: Connect on LinkedIn -->
			<a
				href="https://www.linkedin.com/in/richard-bernard-370b85367/"
				target="_blank"
				rel="noopener noreferrer"
				class="w-full md:w-64 text-center text-sm font-semibold px-8 py-3 rounded-full border
				       transition-all duration-200 hover:bg-[#C9A96E]/10 active:scale-95"
				style="border-color: #C9A96E; color: #C9A96E;"
			>
				Connect on LinkedIn
			</a>

			<!-- Button 3: Send an Email + copy tooltip -->
			<div class="w-full md:w-64 flex flex-col items-center gap-2">
				<a
					href="mailto:richard.bernard2026@gmail.com"
					class="w-full text-center text-sm font-semibold px-8 py-3 rounded-full border border-white
					       text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
				>
					Send an Email
				</a>
				<button
					onclick={handleEmailClick}
					class="text-xs bg-transparent border-none p-0 cursor-pointer
					       transition-opacity duration-200 hover:opacity-70"
					style="color: #C9A96E;"
				>
					{copied ? '✓ Copied!' : 'richard.bernard2026@gmail.com — click to copy'}
				</button>
			</div>
		</div>

	</div>
</section>

<!-- ══════════════════════════════════════════════════════════════
     VENTURE
══════════════════════════════════════════════════════════════ -->
<section id="venture" class="w-full py-24" style="background: #0D1333;">
	<div class="max-w-6xl mx-auto px-6 md:px-12">
		<div class="flex flex-col md:flex-row gap-16 md:gap-12 items-start">

			<!-- ── LEFT — Copy ── -->
			<div id="venture-left" class="flex-1 flex flex-col items-start">
				<p class="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style="color: #C9A96E;">
					My Venture
				</p>

				<h2 class="text-5xl font-bold text-white mb-5 leading-tight">
					Aruon-AI
				</h2>

				<p class="text-base md:text-lg text-white/70 font-normal max-w-md leading-relaxed mb-8">
					The AI receptionist built for small businesses. Aruon AI answers every call automatically — bookings, hours, FAQs — so business owners never miss a customer again.
				</p>

				<ul class="flex flex-col gap-3 mb-10">
					{#each [
						'Answers 80% of calls automatically',
						'Books appointments and sends confirmations in real time',
						'Speaks English and Spanish fluently'
					] as feature (feature)}
						<li class="flex items-start gap-3 text-white/80 text-sm">
							<span class="mt-0.5 font-bold" style="color: #C9A96E;">✔</span>
							{feature}
						</li>
					{/each}
				</ul>

				<a
					href="https://aruon.ai"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm font-semibold px-8 py-3 rounded-full
					       transition-all duration-200 hover:brightness-110 active:scale-95"
					style="background: #C9A96E; color: #0A0F2C;"
				>
					Explore Aruon-AI
				</a>
			</div>

			<!-- ── RIGHT — Stats Card ── -->
			<div id="venture-right" class="flex-1 flex items-start justify-center md:justify-end w-full">
				<div
					class="w-full max-w-sm rounded-2xl p-8 flex flex-col gap-0"
					style="
						background: rgba(255,255,255,0.04);
						border: 1px solid rgba(255,255,255,0.08);
					"
				>
					<!-- Stat 1 -->
					<div class="py-6 text-center">
						<p class="text-5xl font-bold text-white mb-2">80%</p>
						<p class="text-sm text-white/50 tracking-wide">Calls Handled Automatically</p>
					</div>

					<div style="height: 1px; background: rgba(255,255,255,0.08);"></div>

					<!-- Stat 2 -->
					<div class="py-6 text-center">
						<p class="text-5xl font-bold mb-2" style="color: #C9A96E;">$49/mo</p>
						<p class="text-sm text-white/50 tracking-wide">Starting Price</p>
					</div>

					<div style="height: 1px; background: rgba(255,255,255,0.08);"></div>

					<!-- Stat 3 -->
					<div class="py-6 text-center">
						<p class="text-5xl font-bold text-white mb-2">30 Days</p>
						<p class="text-sm text-white/50 tracking-wide">Free Trial</p>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- ══════════════════════════════════════════════════════════════
     PROJECTS & INITIATIVES
══════════════════════════════════════════════════════════════ -->
<section id="projects" class="w-full py-24" style="background: #0D1333;">
	<div class="max-w-6xl mx-auto px-6 md:px-12">

		<!-- ── Section Header ── -->
		<div id="projects-header" class="flex flex-col items-center text-center mb-16">
			<p class="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style="color: #C9A96E;">
				What I'm Building
			</p>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
				Projects &amp; Initiatives
			</h2>
			<p class="text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
				From AI ventures to community impact — each project is a deliberate step toward a larger vision.
			</p>
			<div class="mt-4" style="width: 60px; height: 1px; background: rgba(201,169,110,0.2);"></div>
		</div>

		<!-- ── Cards Grid ── -->
		<div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">

			<!-- Card 1: Aruon-AI -->
			<div
				role="article"
				class="project-card rounded-2xl p-8 flex flex-col transition-colors duration-300"
				style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
				onmouseenter={(e) => e.currentTarget.style.borderColor='rgba(201,169,110,0.4)'}
				onmouseleave={(e) => e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}
			>
				<div class="flex items-start justify-between mb-4">
					<span
						class="text-xs font-semibold px-3 py-1 rounded-full"
						style="background: #C9A96E; color: #0A0F2C;"
					>Active · Founder</span>
				</div>
				<div class="text-4xl mb-0">🤖</div>
				<h3 class="text-2xl font-bold text-white mt-4 mb-1">Aruon-AI</h3>
				<p class="text-sm mb-4" style="color: rgba(201,169,110,0.8);">AI Receptionist for Small Businesses</p>
				<p class="text-sm text-white/70 leading-relaxed mb-5">
					The AI receptionist built for small businesses. Aruon AI answers every call automatically — handling bookings, hours, and FAQs — so business owners never miss a customer again. Operational at $49/month with a 30-day free trial.
				</p>
				<ul class="flex flex-col gap-2 mb-6">
					{#each [
						'Answers 80% of calls automatically',
						'Books appointments in real time',
						'English and Spanish fluency'
					] as feat (feat)}
						<li class="flex items-start gap-2 text-sm text-white/70">
							<span class="font-bold mt-0.5" style="color: #C9A96E;">✔</span>{feat}
						</li>
					{/each}
				</ul>
				<a
					href="https://aruon.ai"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-auto text-center text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
					style="background: #C9A96E; color: #0A0F2C;"
				>Visit Aruon-AI →</a>
			</div>

			<!-- Card 2: Prosperity Mandate -->
			<div
				role="article"
				class="project-card rounded-2xl p-8 flex flex-col transition-colors duration-300"
				style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
				onmouseenter={(e) => e.currentTarget.style.borderColor='rgba(201,169,110,0.4)'}
				onmouseleave={(e) => e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}
			>
				<div class="flex items-start justify-between mb-4">
					<span
						class="text-xs font-semibold px-3 py-1 rounded-full"
						style="border: 1px solid #C9A96E; color: #C9A96E;"
					>Active · CEO &amp; Director of Curriculum</span>
				</div>
				<div class="text-4xl mb-0">📋</div>
				<h3 class="text-2xl font-bold text-white mt-4 mb-1">The Prosperity Mandate</h3>
				<p class="text-sm mb-4" style="color: rgba(201,169,110,0.8);">AI &amp; Financial Literacy for Every Texas High School</p>
				<p class="text-sm text-white/70 leading-relaxed mb-5">
					A Frontera Leadership Institute initiative delivering turnkey, FERPA-compliant AI and financial literacy pilots to under-resourced Title I districts in South Texas — at zero cost to the district, funded by corporate workforce investment.
				</p>
				<ul class="flex flex-col gap-2 mb-6">
					{#each [
						'12-week AI & Financial Literacy intensives',
						'Corporate-funded, zero cost to districts',
						'Policy pipeline to the Texas SBOE'
					] as feat (feat)}
						<li class="flex items-start gap-2 text-sm text-white/70">
							<span class="font-bold mt-0.5" style="color: #C9A96E;">✔</span>{feat}
						</li>
					{/each}
				</ul>
				<a
					href="https://www.prosperitymandate.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-auto text-center text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-[#C9A96E]/10 active:scale-95"
					style="border: 1px solid #C9A96E; color: #C9A96E;"
				>Visit Initiative →</a>
			</div>

			<!-- Card 3: Life Blueprint Club -->
			<div
				role="article"
				class="project-card rounded-2xl p-8 flex flex-col transition-colors duration-300"
				style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
				onmouseenter={(e) => e.currentTarget.style.borderColor='rgba(201,169,110,0.4)'}
				onmouseleave={(e) => e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}
			>
				<div class="flex items-start justify-between mb-4">
					<span
						class="text-xs font-semibold px-3 py-1 rounded-full"
						style="border: 1px solid rgba(255,255,255,0.3); color: white;"
					>Founder · BECHS</span>
				</div>
				<div class="text-4xl mb-0">🎯</div>
				<h3 class="text-2xl font-bold text-white mt-4 mb-1">Life Blueprint Club</h3>
				<p class="text-sm mb-4" style="color: rgba(201,169,110,0.8);">Financial &amp; Technological Literacy at BECHS</p>
				<p class="text-sm text-white/70 leading-relaxed mb-5">
					Founded at Brownsville Early College High School to prepare students for life after graduation. Through structured workshops, members build real-world skills in budgeting, AI tools, and workforce readiness — skills the standard curriculum doesn't cover.
				</p>
				<ul class="flex flex-col gap-2 mb-6">
					{#each [
						'Financial literacy workshops',
						'AI productivity training',
						'Workforce readiness curriculum'
					] as feat (feat)}
						<li class="flex items-start gap-2 text-sm text-white/70">
							<span class="font-bold mt-0.5" style="color: #C9A96E;">✔</span>{feat}
						</li>
					{/each}
				</ul>
				<a
					href="/life-blueprint"
					class="mt-auto text-center text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-white/10 active:scale-95"
					style="border: 1px solid white; color: white;"
				>View Initiative →</a>
			</div>

		</div>

		<!-- ── Callout Bar ── -->
		<div
			id="projects-callout"
			class="w-full rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
			style="background: rgba(201,169,110,0.08); border-top: 1px solid rgba(201,169,110,0.15); border-bottom: 1px solid rgba(201,169,110,0.15);"
		>
			<div class="text-center md:text-left">
				<p class="text-lg font-bold text-white mb-1">Have a project or partnership in mind?</p>
				<p class="text-sm text-white/60">I'm always open to meaningful collaborations.</p>
			</div>
			<div class="flex flex-col items-center gap-2">
				<a
					href="mailto:richard.bernard2026@gmail.com"
					class="shrink-0 text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
					style="background: #C9A96E; color: #0A0F2C;"
				>Get in Touch →</a>
				<button
					onclick={handleCalloutEmailClick}
					class="text-xs bg-transparent border-none p-0 cursor-pointer transition-opacity duration-200 hover:opacity-70"
					style="color: #C9A96E;"
				>
					{calloutCopied ? '✓ Copied!' : 'richard.bernard2026@gmail.com — click to copy'}
				</button>
			</div>
		</div>

	</div>
</section>

<!-- ══════════════════════════════════════════════════════════════
     ACADEMICS & LEADERSHIP
══════════════════════════════════════════════════════════════ -->
<section id="academics" class="w-full py-24 bg-[#0A0F2C]">
	<div class="max-w-5xl mx-auto px-6 md:px-12">

		<!-- ── Section Header ── -->
		<div id="academics-header" class="flex flex-col items-center text-center mb-16">
			<p class="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style="color: #C9A96E;">
				My Journey
			</p>
			<h2 class="text-3xl md:text-4xl font-bold text-white">
				Academics &amp; Leadership
			</h2>
			<div class="mt-4" style="width: 60px; height: 1px; background: rgba(201,169,110,0.2);"></div>
		</div>

		<!-- ── Timeline ── -->
		<div class="relative">
			<!-- Center line — hidden on mobile, visible md+ -->
			<div
				class="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
				style="width: 1px; background: rgba(201,169,110,0.15);"
			></div>
			<!-- Mobile left line -->
			<div
				class="md:hidden absolute left-3 top-0 bottom-0"
				style="width: 1px; background: rgba(201,169,110,0.15);"
			></div>

			<div class="flex flex-col gap-12">

				{#each [
					{
						side: 'left',
						date: '2022 — 2025',
						title: 'Brownsville Early College High School',
						description: 'Completed high school with a 4.84 GPA while dual-enrolling at the University of Texas Rio Grande Valley. Graduating May 2025 with both a high school diploma and an Associate\'s Degree — simultaneously.',
						tags: ['4.84 GPA', 'Dual Enrollment', "Associate's Degree"]
					},
					{
						side: 'right',
						date: '2023 — 2025',
						title: 'Dual Enrollment — UTRGV',
						description: 'Completed college-level coursework at the University of Texas Rio Grande Valley while still in high school, earning transferable credit hours toward a full undergraduate degree.',
						tags: ['UTRGV', 'College Credit', 'Early College']
					},
					{
						side: 'left',
						date: '2024',
						title: 'Life Blueprint Club — Founder',
						description: 'Founded the Life Blueprint Club at Brownsville Early College High School to equip students with financial and technological literacy. The club prepares students for life after high school through structured workshops covering budgeting, AI tools, and workforce readiness.',
						tags: ['Financial Literacy', 'AI Education', 'Student Leadership']
					},
					{
						side: 'right',
						date: '2024 — Present',
						title: 'AI Productivity & Financial Literacy Educator',
						description: 'Led initiatives teaching fellow students how to leverage AI tools for productivity and apply foundational financial principles — bridging the gap between classroom education and real-world workforce expectations.',
						tags: ['Teaching', 'AI Tools', 'Financial Education']
					},
					{
						side: 'left',
						date: 'Fall 2025',
						title: 'Incoming — UT Austin (CAP Program)',
						description: "Accepted into the Coordinated Admission Program (CAP) at the University of Texas at Austin. Beginning undergraduate studies at UTRGV in Fall 2025, transitioning to UT Austin's main campus in the second semester as a full Longhorn.",
						tags: ['UT Austin', 'CAP Program', 'Undergraduate']
					}
				] as entry (entry.title)}
					<!-- Desktop: alternate left/right. Mobile: all stack left-indented -->
					<div class="relative flex items-start
					            {entry.side === 'left'
					              ? 'md:flex-row md:justify-start pl-8 md:pl-0'
					              : 'md:flex-row-reverse md:justify-start pl-8 md:pl-0'}">

						<!-- Gold dot on center line -->
						<div
							class="absolute hidden md:block top-6 left-1/2 -translate-x-1/2 rounded-full z-10"
							style="width: 10px; height: 10px; background: #C9A96E;"
						></div>
						<!-- Mobile dot on left line -->
						<div
							class="absolute md:hidden top-6 left-3 -translate-x-1/2 rounded-full z-10"
							style="width: 10px; height: 10px; background: #C9A96E;"
						></div>

						<!-- Card — takes up ~45% width on desktop, full on mobile -->
						<div
							class="timeline-card w-full md:w-[45%] rounded-2xl p-6"
							style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
						>
							<p class="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style="color: #C9A96E;">
								{entry.date}
							</p>
							<h3 class="text-base font-bold text-white mb-2 leading-snug">
								{entry.title}
							</h3>
							<p class="text-sm text-white/70 leading-relaxed mb-4">
								{entry.description}
							</p>
							<div class="flex flex-wrap gap-2">
								{#each entry.tags as tag (tag)}
									<span
										class="text-xs font-medium px-3 py-1 rounded-full"
										style="background: rgba(201,169,110,0.15); color: #C9A96E;"
									>
										{tag}
									</span>
								{/each}
							</div>
						</div>

					</div>
				{/each}

			</div>
		</div>

		<!-- ── Achievements Row ── -->
		<div id="achievements-row" class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
			{#each [
				{ icon: '🏅', title: 'AMC Math', subtitle: 'Silver Medal' },
				{ icon: '🎓', title: 'College Board', subtitle: 'First Generation Recognition' },
				{ icon: '📜', title: 'Microsoft Certified', subtitle: 'Word · Word Expert · PowerPoint' },
				{ icon: '🌎', title: 'Conferences', subtitle: 'SXSW · AI Conference · Bitcoin Conference' }
			] as card (card.title)}
				<div
					class="achievement-card rounded-2xl p-6 flex flex-col items-center text-center"
					style="background: rgba(255,255,255,0.04); border: 1px solid rgba(201,169,110,0.15);"
				>
					<span class="text-3xl mb-3">{card.icon}</span>
					<p class="text-sm font-bold text-white mb-1">{card.title}</p>
					<p class="text-xs" style="color: rgba(201,169,110,0.8);">{card.subtitle}</p>
				</div>
			{/each}
		</div>

	</div>
</section>
