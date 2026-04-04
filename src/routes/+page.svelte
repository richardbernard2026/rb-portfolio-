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
				Richard Bernard III
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
				alt="Richard Bernard III — Founder of Aruon-AI"
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
