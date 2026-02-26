<script lang="ts">
	import BlogLayout from '$lib/layouts/BlogLayout.svelte';

	let { data } = $props();
</script>

<BlogLayout
	title={data.content.title}
	description={data.content.description}
	slug={`/${data.locale}/blog/${data.slug}/`}
	lastUpdated={data.content.lastUpdated}
	locale={data.locale}
>
	{@html data.content.html}
</BlogLayout>
