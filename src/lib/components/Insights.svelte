<script>
	import { onMount } from 'svelte';

	const articles = [
		{
			category: 'World Affairs',
			title: 'The Geopolitics of AI Supremacy',
			teaser: 'How nation-states are racing to define the rules of artificial intelligence.'
		},
		{
			category: 'Market Analysis',
			title: 'Why M&A Activity Is Surging in Legal Tech',
			teaser: 'Capital is flowing into platforms that automate deal structuring and due diligence.'
		},
		{
			category: 'AI Trends',
			title: 'Agentic AI and the Future of Small Business',
			teaser: 'The next wave of AI isn\'t about chatbots — it\'s about autonomous workflows.'
		},
		{
			category: 'Legal Tech',
			title: 'How Regulation Will Shape the Next Decade of Fintech',
			teaser: 'A look at the regulatory frameworks quietly being drafted right now.'
		}
	];

	onMount(async () => {
		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		gsap.registerPlugin(ScrollTrigger);

		gsap.from('#insights-grid .insight-card', {
			scrollTrigger: {
				trigger: '#insights-grid',
				start: 'top 85%'
			},
			opacity: 0,
			y: 30,
			duration: 0.6,
			ease: 'power2.out',
			stagger: 0.15
		});
	});
</script>

<section id="insights" class="w-full py-24 bg-[#0A0F2C]">
	<div class="max-w-6xl mx-auto px-6 md:px-12">

		<!-- ── Section Header ── -->
		<div class="flex flex-col items-center text-center mb-16">
			<p class="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style="color: #C9A96E;">
				Perspectives
			</p>
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
				Insights
			</h2>
			<p class="text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
				Commentary on AI, law, markets, and the forces shaping the next decade.
			</p>
			<div class="mt-4" style="width: 60px; height: 1px; background: rgba(201,169,110,0.2);"></div>
		</div>

		<!-- ── Cards Grid ── -->
		<div
			id="insights-grid"
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
		>
			{#each articles as article}
				<div
					role="article"
					class="insight-card rounded-2xl p-8 flex flex-col transition-colors duration-300"
					style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
					onmouseenter={(e) => e.currentTarget.style.borderColor='rgba(201,169,110,0.4)'}
					onmouseleave={(e) => e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}
				>
					<span
						class="text-xs font-semibold uppercase tracking-[0.18em] mb-4 self-start"
						style="color: #C9A96E;"
					>
						{article.category}
					</span>

					<h3 class="text-lg font-bold text-white leading-snug mb-3">
						{article.title}
					</h3>

					<p class="text-sm text-white/55 leading-relaxed mb-6 flex-1">
						{article.teaser}
					</p>

					<a
						href="#"
						class="text-sm font-semibold transition-colors duration-200 self-start"
						style="color: #C9A96E;"
						onmouseenter={(e) => e.currentTarget.style.color='#fff'}
						onmouseleave={(e) => e.currentTarget.style.color='#C9A96E'}
					>
						Read more →
					</a>
				</div>
			{/each}
		</div>

	</div>
</section>
