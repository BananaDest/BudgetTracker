<script lang="ts">
	import BudgetCollapse from '$lib/BudgetCollapse.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ mappedBudgets } = data);
	let actualMoney = data.mappedBudgets.reduce((budgetSum, currentBudget)=>{
		return budgetSum + currentBudget.actual_budget;
	},0)
</script>

<div class="hero">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h3 class="tex-3xl">Dinero Actual</h3>
			<p class="text-5xl font-bold py-6">₡{actualMoney}</p>
		</div>
	</div>
</div>

<ul>
	{#each mappedBudgets as budget}
		<li>
			<BudgetCollapse {budget} />
		</li>
	{/each}
</ul>
