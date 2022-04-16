import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NowPageAction } from "../Store/nowpage";

const UserPage = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "user"
        }; dispatch( action );
    }, []);

    return (
        <div className="table-lg">
            <table id="usr-table" className="table table-bordered table-light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>이름</th>
                        <th>우마</th>
                        <th>평우마</th>
                        <th>점수</th>
                        <th>평점</th>
                        <th>최고점</th>
                        <th>별</th>
                        <th>평별</th>
                        <th>국수</th>
                        <th>1등</th>
                        <th>2등</th>
                        <th>3등</th>
                        <th>4등</th>
                        <th>1위율</th>
                        <th>1,2위율</th>
                        <th>4위율</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserPage;
