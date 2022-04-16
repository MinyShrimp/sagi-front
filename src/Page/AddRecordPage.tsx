import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState }     from "../Store";
import { NowPageAction } from "../Store/nowpage";

import Creatable from "react-select/creatable";
import Select    from "react-select";

import { DummyRecord } from "../Interface/Record";
import { DummyPerpect, PERPECTS, PERPECT_CODE } from "../Interface/Perpect";

interface create_option {
    value: string, label: string
};

const AddRecordPage = () => {
    const seat = ["東", "南", "西", "北"];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const record = useSelector((state: RootState) => state.record);
    const perpects = useSelector((state: RootState) => state.perpects);

    const [p_index, setPIndex]  = useState<number>(0);
    const [options, setOptions] = useState<Array<create_option>>([]);

    useEffect(() => {
        const action: NowPageAction = {
            type: "nowpage/set",
            value: "addrecord"
        }; dispatch( action );

        getNamesByServer();
        dispatch({ type: "perpect/clean" });
        dispatch({ type: "record/clean" });
    }, []);
    
    const submit = async () => {
        console.log(record)
        console.log(perpects)
    }

    const getNamesByServer = async () => {
        setOptions([]);
    }

    const addOption = ( name: create_option ) => {
        const _tmp = [...options];
        _tmp.push(name);
        setOptions(_tmp);
    }

    const getNames = () => {
        return record.infos.map((value) => { 
            return { value: value.name, label: value.name }; 
        });
    }
    
    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
            <Row style={{ alignContent: "center", justifyContent: "center", maxWidth: "800px" }}>
                {record.infos.map((value, index) => {
                    return (
                        <Row className="mt-3" key={index} style={{ alignItems: "center" }}>
                            <Col className="mb-3" sm={1} style={{ textAlign: "center" }}>
                                <div><b> {seat[index]} </b></div>
                            </Col>
                            <Col className="mb-3" sm={4}>
                                <Creatable
                                    options={options}
                                    placeholder="이름"
                                    onChange={(e: any) => {
                                        const _value = { label: e.label, value: e.value };
                                        if( e.__isNew__ ) {
                                            addOption( _value );
                                        }
                                        var _tmp = {...DummyRecord}; _tmp.infos[index].name = _value.value;
                                        dispatch({ type: "record/setName", index: index, record: _tmp });
                                    }}
                                />
                            </Col>
                            <Col className="mb-3" sm={4}>
                                <div className="input-group">
                                    {
                                        value.isPlus ? 
                                        <Button 
                                            className="btn-info"
                                            onClick={() => { 
                                                var _tmp = {...DummyRecord}; _tmp.infos[index].isPlus = false;
                                                dispatch({ type: "record/setIsPlus", index: index, record: _tmp });
                                            }}
                                            style={{ zIndex: 0 }}
                                        >＋</Button> :
                                        <Button 
                                            className="btn-danger"
                                            onClick={() => { 
                                                var _tmp = {...DummyRecord}; _tmp.infos[index].isPlus = true;
                                                dispatch({ type: "record/setIsPlus", index: index, record: _tmp });
                                            }}
                                            style={{ zIndex: 0 }}
                                        >－</Button>
                                    }
                                    <input
                                        className="form-control"
                                        placeholder="점수"
                                        type="number"
                                        value = { 
                                            value.score === 0 ? '' : value.score
                                        }
                                        onChange={(e) => {
                                            var _tmp = {...DummyRecord}; 
                                            _tmp.infos[index].score = e.target.value === '' ? 0 : parseInt( e.target.value );
                                            dispatch({ type: "record/setScore", index: index, record: _tmp });
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col className="mb-3" sm={2}>
                                <input 
                                    className="form-control" 
                                    placeholder="별" 
                                    value = { 
                                        value.star === 0 ? '' : value.star
                                    }
                                    onChange={(e) => {
                                        var _tmp = {...DummyRecord}; 
                                        _tmp.infos[index].star = e.target.value === '' ? 0 : parseInt( e.target.value );
                                        dispatch({ type: "record/setStar", index: index, record: _tmp });
                                    }}
                                />
                            </Col>
                        </Row>
                    );
                })}
                { perpects.length === 0 ? null : <hr/> }
                {
                    perpects.map((value, index) => {
                        return (
                            <Row key={index} style={{ alignItems: "center" }}>
                                <Col className="mb-3" sm={1} style={{ textAlign: "center" }}> <b>滿</b> </Col>
                                <Col className="mb-3" sm={4}>
                                    <Select
                                        placeholder="이름"
                                        options={getNames()}
                                        onChange={(e: any) => {
                                            const _tmp = {...DummyPerpect}; _tmp.name = e.value;
                                            dispatch({ type: "perpect/setName", index: value.id, perpect: _tmp });
                                        }}
                                        value={ { label: value.name, value: value.name } }
                                    />
                                </Col>
                                <Col className="mb-3" sm={4}>
                                    <Select
                                        placeholder="역만"
                                        defaultValue={PERPECTS[0]}
                                        onChange={(e: any) => {
                                            const _tmp = {...DummyPerpect}; _tmp.index = e.value;
                                            dispatch({ type: "perpect/setPerpect", index: value.id, perpect: _tmp });
                                        }}
                                        options={PERPECTS}
                                        value={ { label: PERPECT_CODE[value.index], value: value.index } }
                                    />
                                </Col>
                                <Col className="mb-3" sm={2}>
                                    <Button
                                        className="btn-danger"
                                        style={{ width: "100%", boxShadow: "1px 1px 3px gray" }}
                                        onClick={() => {
                                            dispatch({ type: "perpect/remove", index: value.id, perpect: {} });
                                        }}
                                    >－</Button>
                                </Col>
                            </Row>
                        );
                    })
                }
                <hr/>
                <Row className="mb-3">
                    <Col className="mb-3" sm={4}>
                        <input
                            className="form-control"
                            type="number"
                            placeholder="공탁금"
                            value = {
                                record.deposit === 0 ? '' : record.deposit
                            }
                            onChange={(e) => {
                                var _tmp = {...DummyRecord}; 
                                _tmp.deposit = e.target.value === '' ? 0 : parseInt( e.target.value );
                                dispatch({ type: "record/setDeposit", index: 0, record: _tmp });
                            }}
                        />
                    </Col>
                    <Col className="mb-3" sm={4}>
                        <input
                            className="form-control"
                            placeholder="패보"
                            value = { record.url }
                            onChange={(e) => {
                                var _tmp = {...DummyRecord}; _tmp.url = e.target.value;
                                dispatch({ type: "record/setUrl", index: 0, record: _tmp });
                            }}
                        />
                    </Col>
                    <Col sm={2}>
                        <Button 
                            style={{ boxShadow: "1px 1px 3px gray", width: "100%" }}
                            onClick={() => {
                                var _tmp = {...DummyPerpect};
                                _tmp.id = p_index;
                                setPIndex( p_index + 1);
                                dispatch({ type: "perpect/add", perpect: _tmp });
                            }}
                        > 역만 </Button>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col style={{ textAlign: "right" }}>
                        <Button 
                            style={{ width: "50%", boxShadow: "1px 1px 3px gray" }}
                            onClick={submit}
                        > 등록 </Button>
                    </Col>
                    <Col style={{ textAlign: "left" }}>
                        <Button 
                            className="btn-danger"
                            style={{ width: "50%", boxShadow: "1px 1px 3px gray" }}
                            onClick={() => { navigate(-1) }}
                        > 취소 </Button>
                    </Col>
                </Row>
            </Row>
        </div>
    );
};

export default AddRecordPage;