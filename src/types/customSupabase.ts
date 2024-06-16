import type { Tables } from './supabase';

export type Transaction = {
	transaction_id: string;
	transaction_data: Tables<'Transaction'>;
	budget_id: string;
}

export type MappedBudget = {
	description: string;
	total_budget: number;
	actual_budget: number;
	movements: Movement[];
}

export type Movement = {
	quantity: number;
	reason: string | null;
	created_at: string;
}
