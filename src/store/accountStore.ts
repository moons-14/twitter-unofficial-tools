import { Account } from '@/type/accountTypes';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export type AccountStore = {
    accounts: Account[],
    activeAccount: Account,
    addAccount: (account: Account) => void,
    removeAccount: (accountId: string) => void,
    changeActiveAccount: (accountId: string) => void,
}

const defaultAccount: Account = {
    id: "0",
    name: "Guest",
    guest: true,
    cookie: [],
    deleteProtected: true,
}

export const useAccountStore = create(persist<AccountStore>((set) => ({
    accounts: [
        defaultAccount
    ] as Account[],
    activeAccount: defaultAccount,
    addAccount: (account: Account) => set((state) => ({ ...state, accounts: [...state.accounts, account] })),
    removeAccount: (accountId: string) => set((state) => ({ ...state, accounts: state.accounts.filter((a) => a.id !== accountId || a.deleteProtected), activeAccount: state.activeAccount?.id === accountId && !state.activeAccount.deleteProtected ? defaultAccount : state.activeAccount })),
    changeActiveAccount: (accountId: string) => set((state) => ({ ...state, activeAccount: state.accounts.find((a) => a.id === accountId) ?? defaultAccount })),
}),
    {
        name: 'account-store',
    }))