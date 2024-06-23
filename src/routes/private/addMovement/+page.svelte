<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { EventHandler } from 'svelte/elements';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ supabase, user, budgetTypes } = data);
	let handleSubmit: EventHandler<SubmitEvent, HTMLFormElement>;
	$: handleSubmit = async (evt) => {
		evt.preventDefault();
		if (!evt.target) return;

		const form = evt.target as HTMLFormElement;
		const transaction = {
			id_user: user?.id,
			quantity: (new FormData(form).get('quantity') ?? 0) as number,
			created_at: new Date().toISOString(),
			id_budget_type: (new FormData(form).get('budget_type') ?? '') as string,
			active: true,
			income_type: (new FormData(form).get('transaction_type') ?? '') as string,
			description: (new FormData(form).get('description') ?? '') as string
		};

		if (!transaction) return;

		const { error } = await supabase.from('Transaction').insert(transaction);
		if (error) console.error(error);

		invalidate('supabase:db:BudgetType');
		form.reset();
	};
</script>

<div class="hero">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h3 class="text-3xl">Añadir movimiento</h3>
		</div>
	</div>
</div>

<div class="card shrink-0 w-full shadow-2xl bg-base-100">
	<form on:submit={handleSubmit} class="card-body">
		<label class="form-control">
			Presupuesto
			<select name="budget_type" class="select select-bordered select-accent w-full my-2">
				<option disabled selected>Tipo de transacción</option>
				{#each budgetTypes as budget}
					<!-- content here -->
					<option value={budget.id}>{budget.description}</option>
				{/each}
			</select>
		</label>
		<label class="form-control">
			Descripción
			<input name="description" type="text" class="input input-bordered input-accent w-full my-2" />
		</label>
		<label class="form-control">
			Cantidad
			<input name="quantity" type="number" class="input input-bordered input-accent w-full my-2" />
		</label>
		<label class="form-control">
			Tipo de transacción
			<select name="transaction_type" class="select select-bordered select-accent w-full my-2">
				<option disabled selected>Tipo de transacción</option>
				<option>income</option>
				<option>expense</option>
			</select>
		</label>
		<div class="form-control mt-6">
			<button class="btn btn-outline btn-accent sm:btn-sm md:btn-md lg:btn-lg">Añadir</button>
		</div>
	</form>
</div>
