import { atom } from "jotai";

const sidebarData = atom([
    { name: 'Home', icon: 'fa fa-home mr-1', link: '/dashboard/', isActive: true },
    { name: 'Deposit', icon: 'fa fa-credit-card mr-1', link: '/dashboard/deposit', isActive: false },
    { name: 'Withdraw', icon: 'fa fa-university mr-1', link: '/dashboard/withdraw', isActive: false },
    { name: 'All Transactions', icon: 'fa fa-th-list mr-1', link: '/dashboard/All-transactions', isActive: false },
    { name: 'settings', icon: 'fa fa-gear mr-1 ', link: '/dashboard/settings', isActive: false },
])

export default sidebarData