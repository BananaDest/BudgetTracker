<script>
	import 'tailwindcss/tailwind.css';

	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (!newSession) {
				setTimeout(() => {
					goto('/', { invalidateAll: true });
				});
			}
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>


<slot class="bg-prussian-blue" />
