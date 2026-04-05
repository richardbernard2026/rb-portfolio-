<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();

	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
				href="#venture"
				class="text-white/80 text-sm tracking-wide hover:text-white transition-colors duration-200"
			>
				Venture
			</a>
			<a
				href="#academics"
				class="text-white/80 text-sm tracking-wide hover:text-white transition-colors duration-200"
			>
				Academics
			</a>
			<a
				href="/#projects"
				class="text-white/80 text-sm tracking-wide hover:text-white transition-colors duration-200"
			>
				Projects
			</a>
			<a
				href="/#profile"
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
