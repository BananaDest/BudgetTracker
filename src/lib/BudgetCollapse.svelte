<script lang="ts">
	export let budget;
</script>

<div class="collapse collapse-open collapse-arrow bg-jade-100 border-jade border-2 m-4 w-11/12">
	<input type="checkbox" />
	<div class="collapse-title text-xl font-bold flex flex-row justify-between">
		<!-- titulo presupuesto -->
		<h1>{budget.description}</h1>
		<!-- total presupuesto -->
		<h1>₡{budget.total_budget}</h1>
	</div>
	<div class="collapse-content prose bg-jade-200">
		<!-- Actual presupuesto -->
		<div class="flex flex-row justify-between items-center mt-4">
			<p class="flex-grow self-center font-bold text-xl text-white">
				Actual: ₡{budget.actual_budget}
			</p>
			<button class="btn btn-success text-white">desglose</button>
		</div>
		<div class="divider my-2"></div>
		{#each budget.movements as movement}
			<div class="movimientos grid grid-cols-2">
				<div class="col-span-2 text-center">{movement.reason}</div>
				<div class="text-center">₡{movement.quantity}</div>
				<div class="text-center">{movement.created_at}</div>
			</div>
			<div class="divider my-2"></div>
		{/each}
	</div>
</div>
