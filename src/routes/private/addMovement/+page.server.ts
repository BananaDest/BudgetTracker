import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:BudgetType');
	const { data: BudgetTypes } = await supabase.from('BudgetType').select("*")
	return { budgetTypes: BudgetTypes ?? [] };
};
