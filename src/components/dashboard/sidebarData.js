import { atom } from "jotai";

const sidebarData = atom([
    { name: 'Home', icon: 'fa fa-home mr-1', link: '/dashboard/', isActive: true },
    { name: 'Deposit', icon: 'fa fa-credit-card mr-1', link: '/dashboard/deposit', isActive: false },
    { name: 'Withdraw', icon: 'fa fa-university mr-1', link: '/dashboard/withdraw', isActive: false },
    { name: 'All Transactions', icon: 'fa fa-th-list mr-1', link: '/dashboard/All-transactions', isActive: false },
    { name: 'settings', icon: 'fa fa-gear mr-1 ', link: '/dashboard/settings', isActive: false },
])

const Admin_sidebardata = atom([
    { name: 'Home', icon: 'fa fa-home mr-1', link: '/admin/', isActive: true },
    { name: 'Members', icon: 'fa fa-users mr-1', link: '/admin/members', isActive: false },
    { name: 'Deposits', icon: 'fa fa-credit-card mr-1', link: '/admin/deposits', isActive: false },
    { name: 'Withdrawals', icon: 'fa fa-university mr-1', link: '/admin/withdrawals', isActive: false },
    { name: 'Packages', icon: 'fa fa-gift mr-1', link: '/admin/packages', isActive: false },
    { name: 'Payment Settings', icon: 'fa fa-paypal mr-1', link: '/admin/payment_settings', isActive: false },
    { name: 'All Transactions', icon: 'fa fa-th-list mr-1', link: '/admin/All-transactions', isActive: false },
    { name: 'Referrals', icon: 'fa fa-bullhorn mr-1', link: '/admin/Referrals', isActive: false },
    { name: 'Messages', icon: 'fa fa-comments mr-1', link: '/admin/messages', isActive: false },
    { name: 'Email', icon: 'fa fa-envelope mr-1', link: '/admin/Email', isActive: false },
    { name: 'settings', icon: 'fa fa-gear mr-1 ', link: '/admin/settings', isActive: false },
])

export { sidebarData, Admin_sidebardata }