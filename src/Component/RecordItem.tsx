import React, { useEffect } from "react";

const RecordItem = () => {
    return (
        <div className="table-lg mb-3" style={{ minWidth: "0" }}>
            <table className="table table-light table-bordered">
                <thead className="table-info">
                    <tr>
                        <th> 風 </th>
                        <th> 이름 </th>
                        <th> 순위 </th>
                        <th> 점수 </th>
                        <th> 우마 </th>
                        <th> 별 </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                    </tr>
                    <tr>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                    </tr>
                    <tr>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                    </tr>
                    <tr>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                        <td> # </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6}>
                            1 / 2022-04-15 22:33 / 패보
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default RecordItem;