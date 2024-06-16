<script lang="ts">
	import MdiPlus from '~icons/mdi/plus';
	import FaBars from '~icons/fa/bars';
	export let data;
	$: ({ supabase } = data);

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
	};
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start"></div>
	<div class="navbar-center">
		<a class="btn btn-ghost text-xl" href="/">Budget Tracker</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle">
			<a href="/private/addMovement"><MdiPlus /></a>
			
		</button>
		<details class="dropdown dropdown-bottom dropdown-left">
			<summary class="btn btn-ghost btn-circle">
				<FaBars />
			</summary>
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-jade-100 border-jade border-1 rounded-box w-52">

				<li><a href="/private">Homepage</a></li>
				<li><button on:click={logout}>Logout</button></li>
			</ul>
		</details>
	</div>
</div>
<main>
	<slot />
</main>
