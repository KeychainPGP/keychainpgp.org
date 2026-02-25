<script lang="ts">
	import DocsLayout from '$lib/layouts/DocsLayout.svelte';

	let { data } = $props();
</script>

<DocsLayout
	title={data.content.title}
	description={data.content.description}
	slug={`/${data.locale}/docs/${data.slug}/`}
	lastUpdated={data.content.lastUpdated}
	toc={data.content.toc}
	locale={data.locale}
>
	{@html data.content.html}
</DocsLayout>
