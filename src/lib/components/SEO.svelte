<script>
	let {
		title = 'Richard C. Bernard III — AI Founder & Future Corporate Lawyer',
		description = 'Co-founder of Aruon-AI. Incoming undergraduate. Pursuing corporate law with a focus on M&A, business, and financial regulations.',
		url = 'https://richardbernard2026.github.io/rb-portfolio-/',
		image = 'https://richardbernard2026.github.io/rb-portfolio-/Portrait.jpeg'
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Richard C. Bernard III" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
