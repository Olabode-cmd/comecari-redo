import { useState } from 'react';
import InvoiceStats from '../../components/InvoiceStats';
import invoices from '../../data/invoiceData.json';

const Invoice = () => {
    const [currentMonth] = useState(new Date().getMonth() + 1);
    const [currentYear] = useState(new Date().getFullYear());

    // Calculate metrics
    const totalInvoices = invoices.length;
    const invoicesThisMonth = invoices.filter(inv => {
        const invDate = new Date(inv.dateIssued);
        return invDate.getMonth() + 1 === currentMonth && invDate.getFullYear() === currentYear;
    }).length;
    const totalAmountThisMonth = invoices
        .filter(inv => {
            const invDate = new Date(inv.dateIssued);
            return invDate.getMonth() + 1 === currentMonth && invDate.getFullYear() === currentYear;
        })
        .reduce((sum, inv) => sum + inv.amount, 0);

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
                <InvoiceStats
                    primaryColor="text-blue-600"
                    value={totalInvoices}
                    title="Total Invoices"
                />
                <InvoiceStats
                    primaryColor="text-green-600"
                    value={invoicesThisMonth}
                    title="Invoices This Month"
                />
                <InvoiceStats
                    primaryColor="text-purple-600"
                    value={`₦${totalAmountThisMonth.toLocaleString()}`}
                    title="Amount This Month"
                />
            </div>

            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 sm:pb-4 mt-6">
                <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                    Recent Invoices
                </h4>
                <div className="flex flex-col">
                    <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium text-black dark:text-white">
                                Invoice ID
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium text-black dark:text-white">
                                Customer Name
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium text-black dark:text-white">
                                Amount
                            </h5>
                        </div>
                        <div className="hidden p-2.5 text-center sm:block xl:p-5">
                            <h5 className="text-sm font-medium text-black dark:text-white">
                                Status
                            </h5>
                        </div>
                        <div className="hidden p-2.5 text-center sm:block xl:p-5">
                            <h5 className="text-sm font-medium text-black dark:text-white">
                                Actions
                            </h5>
                        </div>
                    </div>

                    {invoices.map((invoice, key) => (
                        <div
                            className={`grid grid-cols-3 sm:grid-cols-5 ${
                                key === invoices.length - 1
                                    ? ""
                                    : "border-b border-stroke dark:border-strokedark"
                            }`}
                            key={invoice.id}
                        >
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{invoice.id}</p>
                            </div>

                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    {invoice.customerName}
                                </p>
                            </div>

                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    ₦{invoice.amount.toLocaleString()}
                                </p>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <p className={`inline-flex rounded-full capitalize bg-opacity-10 py-1 px-3 text-sm font-medium ${
                                    invoice.status === "paid"
                                        ? "text-success bg-success"
                                        : invoice.status === "pending"
                                        ? "text-warning bg-warning"
                                        : "text-danger bg-danger"
                                }`}>
                                    {invoice.status}
                                </p>
                            </div>

                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                                <button
                                    className="hover:text-primary"
                                    onClick={() => {
                                        // Download PDF logic will be implemented later
                                        console.log("Download PDF for", invoice.id);
                                    }}
                                >
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Invoice;