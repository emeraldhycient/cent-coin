import React from 'react'

function Transactions() {
    return (
        <div className="container">
            <div className="col-md-11 ml-auto mr-auto mt-auto mb-5 shadow bg-white pt-2">

                <h5 className="ml-2 text-dark">Transaction History</h5>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <th className="text-muted">Transaction id</th>
                            <th className="text-muted">Date</th>
                            <th className="text-muted">Type</th>
                            <th className="text-muted">Amount</th>
                            <th className="text-muted">Status</th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Transactions
