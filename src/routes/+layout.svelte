<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import SEO from '$lib/components/SEO.svelte';

	let { children } = $props();

	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}

	const siteUrl = 'https://richardbernard2026.github.io/rb-portfolio-/';
	const siteImage = `${siteUrl}Portrait.jpeg`;

	function scrollTo(e, id) {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Richard C. Bernard III',
		url: siteUrl,
		sameAs: ['https://aruon.ai', 'https://linkedin.com/in/YOUR_HANDLE'],
		jobTitle: 'Co-Founder & AI Entrepreneur'
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="google-site-verification" content="R5Aj3Y3WCl7sQ5NtGahQmXB2QYj9JxGJ-ptmxNLmXHg" />
	{@html `<script type="application/ld+json">${jsonLd}<\/script>`}
</svelte:head>

<SEO
	title="Richard C. Bernard III — AI Founder & Future Corporate Lawyer"
	description="Co-founder of Aruon-AI. Incoming undergraduate. Pursuing corporate law with a focus on M&A, business, and financial regulations."
	url={siteUrl}
	image={siteImage}
/>

<svelte:window on:scroll={handleScroll} />

<nav
	class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300"
	style="
		background: {scrolled ? 'rgba(10, 15, 44, 0.92)' : 'rgba(10, 15, 44, 0.75)'};
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(255,255,255,0.08);
	"
>
	<!-- Wordmark -->
	<a
		href="/"
		class="text-white font-bold text-lg tracking-widest hover:opacity-80 transition-opacity duration-200"
	>
		Richard C. Bernard III
	</a>

	<!-- Right side -->
	<div class="flex items-center gap-6">
		<!-- Nav links — hidden on mobile -->
		<div class="hidden md:flex items-center gap-6">
			<a
				href="/#venture"
				on:click={(e) => scrollTo(e, 'venture')}
				class="text-white/80 text-sm tracking-wide hover:text-white transition-colors duration-200"
			>
				Venture
			</a>
			<a
				href="/#academics"
				on:click={(e) => scrollTo(e, 'academics')}
				class="text-white/80 text-sm tracking-wide hover:text-white transition-colors duration-200"
			>
				Academics
			</a>
			<a
				href="/#projects"
				on:click={(e) => scrollTo(e, 'projects')}
				class="text-white/80 text-sm tracking-wide hover:text-white transition-colors duration-200"
			>
				Projects
			</a>
			<a
				href="/#profile"
				on:click={(e) => scrollTo(e, 'profile')}
				class="text-white/80 text-sm tracking-wide hover:text-white transition-colors duration-200"
			>
				Profile
			</a>
			<a
				href="#insights"
				class="text-white/80 text-sm tracking-wide hover:text-white transition-colors duration-200"
			>
				Insights
			</a>
		</div>

		<!-- Connect CTA — always visible -->
		<a
			href="/richard-bernard.vcf"
			download="Richard C. Bernard III"
			class="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
			style="background: #C9A96E; color: #0A0F2C;"
		>
			Connect
		</a>
	</div>
</nav>

<!-- Page content offset for fixed navbar -->
<div class="pt-16">
	{@render children()}
</div>
