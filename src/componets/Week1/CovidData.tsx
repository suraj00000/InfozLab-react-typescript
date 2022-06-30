
import React, { useState, useEffect } from 'react'
type typeDate = {
    date: string
}
type typeObject = {
    dailyconfirmed: string
    dailydeceased: string
    dailyrecovered: string
    date: string
    dateymd: string
    totalconfirmed: string
    totaldeceased: string
    totalrecovered: string
}
type typeData = {
    cases_time_series: Array<typeObject>
    statewise: Array<object>
    tested: Array<object>

}


export const CovidData = () => {
    useEffect(() => {
        fetchData()
    }, []);

    const [date, setdate] = useState<typeDate>({ date: "2020-02-05" });
    const [data, setdata] = useState<typeData>();
    const [fetchedData, setfetchedData] = useState<typeObject>()

    const fetchData = async () => {
        const url = "https://data.covid19india.org/data.json"
        const response = await fetch(url)
        setdata(await response.json());
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data) {
            data.cases_time_series.forEach(element => {
                if (element.dateymd === date.date) {
                    setfetchedData(element);
                }
            });
        }

    }

    const onChange = (e: any) => {
        setdate({ date: e.target.value })

    }

    return (
        <>
            <h3>Enter a date in "yyyy-mm-dd" format</h3>
            <p>2020-01-30 to 2021-01-30</p>
            <form onSubmit={handleSubmit}>
                Enter a Date: <input type="text" name='date' onChange={onChange} />
                <button type='submit'>Click me</button>
            </form>
            {fetchedData ? (
                <table border={1} className="table mt-2">
                    <thead>
                        <tr>
                            <th scope='col'>Date</th>
                            <th scope='col'>Daily confirmed</th>
                            <th scope='col'>Daily deceased</th>
                            <th scope='col'>Daily recovered</th>
                            <th scope='col'>Total Confirmed</th>
                            <th scope='col'>Total Deceased</th>
                            <th scope='col'>Total Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{fetchedData ? fetchedData.dateymd : " "}</td>
                            <td>{fetchedData ? fetchedData.dailyconfirmed : " "}</td>
                            <td>{fetchedData ? fetchedData.dailydeceased : " "}</td>
                            <td className='table-success'>{fetchedData ? fetchedData.dailyrecovered : " "}</td>
                            <td>{fetchedData ? fetchedData.totalconfirmed : " "}</td>
                            <td className='table-danger'>{fetchedData ? fetchedData.totaldeceased : " "}</td>
                            <td className='table-success'>{fetchedData ? fetchedData.totalrecovered : " "}</td>
                        </tr>
                    </tbody>
                </table>

            ) : "Enter date first"}
        </>
    )
}
