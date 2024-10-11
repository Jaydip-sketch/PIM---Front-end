import React from 'react';

const BaseTable = ({ columns, data }) => {
    return (
        <div className="table-responsive">
            <div className="grid-table-container">
                <table className="table table-bordered">
                    <thead>
                        <tr className="table-secondary">
                            {columns.map((column, index) => (
                                <th key={index} scope="col">{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="text-center table-light">
                                    No results found
                                </td>
                            </tr>
                        ) : (
                            data.map((item, index) => (
                                <tr className="table-light" key={index}>
                                    {columns.map((column, colIndex) => (
                                        <td key={colIndex}>{item[column]}</td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BaseTable;
