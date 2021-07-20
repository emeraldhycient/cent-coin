import React from 'react'

function Transactions() {
    return (
        <div className="container">
            <div className="col-md-11 ml-auto mr-auto mt-auto mb-5 shadow bg-white pt-2">

                <h5 className="ml-2 text-dark">Transaction History</h5>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                <div className="table-responsive mt-3">
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <th className="text-dark">Transaction id</th>
                            <th className="text-dark">Date</th>
                            <th className="text-dark">Type</th>
                            <th className="text-dark">Amount</th>
                            <th className="text-dark">Status</th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Transactions
