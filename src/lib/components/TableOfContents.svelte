<script lang="ts">
	interface TocEntry {
		id: string;
		text: string;
		level: number;
	}

	let { entries }: { entries: TocEntry[] } = $props();
</script>

<nav class="toc" aria-label="Table of Contents">
	<h4>On this page</h4>
	<ul>
		{#each entries as entry}
			<li class={`toc-level-${entry.level}`}>
				<a href={`#${entry.id}`}>{entry.text}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.toc {
		padding: 1rem 0;
	}

	.toc h4 {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-muted);
		margin-bottom: 0.75rem;
	}

	.toc ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.toc li {
		margin: 0;
	}

	.toc a {
		display: block;
		padding: 0.25rem 0;
		font-size: 0.8125rem;
		color: var(--text-secondary);
		text-decoration: none;
		border-left: 2px solid transparent;
		padding-left: 0.75rem;
		transition: color 0.2s, border-color 0.2s;
	}

	.toc a:hover {
		color: var(--primary);
		border-left-color: var(--primary);
	}

	.toc-level-3 a {
		padding-left: 1.5rem;
		font-size: 0.75rem;
	}
</style>
