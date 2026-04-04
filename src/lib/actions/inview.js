/**
 * Svelte action: fires once when the element enters the viewport.
 * Dispatches a custom 'inview' DOM event and calls an optional callback.
 * Usage: <div use:inview={() => visible = true}>
 */
export function inview(node, callback) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				observer.unobserve(node);
				node.dispatchEvent(new CustomEvent('inview'));
				if (typeof callback === 'function') callback();
			}
		},
		{ threshold: 0.15 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
