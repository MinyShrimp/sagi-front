import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store";
import BaseModal from "./BaseModal";
import Creatable from "react-select/creatable";
import Select from "react-select";
import { Button } from "react-bootstrap";
import { DummyRecord } from "../Interface/Record";
import { DummyPerpect, PERPECTS, PERPECT_CODE } from "../Interface/Perpect";

interface create_option {
    value: string, label: string
};

const AddRecordContents = () => {
    const seat = ["東", "南", "西", "北"];

    const dispatch = useDispatch();
    const record = useSelector((state: RootState) => state.record);
    const perpects = useSelector((state: RootState) => state.perpects);

    const [p_index, setPIndex]  = useState<number>(0);
    const [options, setOptions] = useState<Array<create_option>>([]);

    useEffect(() => {
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
        <>
            {record.infos.map((value, index) => {
                return (
                    <Row key={index} className="mb-3" style={{ alignItems: "center" }}>
                        <Col sm={1}>
                            <div>{seat[index]}</div>
                        </Col>
                        <Col>
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
                        <Col>
                            <div className="input-group">
                                {
                                    value.isPlus ? 
                                    <Button 
                                        className="btn-info"
                                        onClick={() => { 
                                            var _tmp = {...DummyRecord}; _tmp.infos[index].isPlus = false;
                                            dispatch({ type: "record/setIsPlus", index: index, record: _tmp });
                                        }}
                                    >＋</Button> :
                                    <Button 
                                        className="btn-danger"
                                        onClick={() => { 
                                            var _tmp = {...DummyRecord}; _tmp.infos[index].isPlus = true;
                                            dispatch({ type: "record/setIsPlus", index: index, record: _tmp });
                                        }}
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
                        <Col sm={2}>
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
                        <Row key={index} className="mb-3" style={{ alignItems: "center" }}>
                            <Col sm={1}> 滿 </Col>
                            <Col>
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
                            <Col>
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
                            <Col sm={2}>
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
                <Col>
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
                <Col>
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
            <Row>
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
                        onClick={() => { dispatch({ type: "addrecord/hide" }); }}
                    > 취소 </Button>
                </Col>
            </Row>
        </>
    );
};

const AddRecord = () => {
    const addrecord_show = useSelector(
        (state: RootState) => state.modal.addRecordModal
    );
    const dispatch = useDispatch();

    return (
        <BaseModal
            show={addrecord_show}
            onHide={() => {
                dispatch({ type: "addrecord/hide" });
            }}
            contents={<AddRecordContents />}
        />
    );
};

export default AddRecord;
