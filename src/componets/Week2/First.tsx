import React from 'react'
import { Button } from 'react-bootstrap';

export const First = () => {
    const balance = [
        { "acc_no": 123454, "acc_balance": 255000 },
        { "acc_no": 123423, "acc_balance": 257000 },
        { "acc_no": 123454, "acc_balance": 257000 },
        { "acc_no": 123455, "acc_balance": 257000 }
    ]
    return (
        <div>
            <table width="100%">
                <tr><th>Account number</th><th>Balance</th></tr>
                {
                    balance.map((balance) => {
                        return <tr><td>{balance.acc_no}</td><td>{balance.acc_balance}</td></tr>
                    })
                }

            </table>
            <Button variant="primary">Primary</Button>
            
        </div>

    )
}
