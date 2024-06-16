import type { PageServerLoad } from './$types';
import type { Transaction, MappedBudget, Movement } from '../../types/customSupabase';

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
	depends('supabase:db:Budget');
	depends('supabase:db:Transaction')

	const { data: Budget, error } = await supabase.from('Budget').select('*, BudgetType(description)');

	if (error) console.error(error)

	const { data: Transactions, error: transactionError } = await supabase.rpc('get_transactions_with_budget');


	if (transactionError) console.error(transactionError)
	const parsedBudget: MappedBudget[] | undefined = Budget?.map(budget => {
		return {
			description: budget.BudgetType.description,
			total_budget: budget.total_budget,
			actual_budget: budget.actual_budget,
			movements: Transactions?.reduce((matchingArr: Movement[], transaction: Transaction) => {
				if (transaction.budget_id === budget.id) {
					matchingArr.push({
						quantity: transaction.transaction_data.quantity,
						reason: transaction.transaction_data.description,
						created_at: transaction.transaction_data.created_at ?? "20-12-2024"
					})
				}
				return matchingArr;
			}, [])
		}
	})
	console.log(parsedBudget)
	return { mappedBudgets: parsedBudget ?? [] };
};
