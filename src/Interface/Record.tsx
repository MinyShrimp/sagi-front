
import { Info, DummyInfo } from "./Info";

export interface Record {
    index:   number,
    deposit: number,
    url:     string,
    infos:   Array<Info>,
};

export interface RecordAction {
    type:   string,
    index:  number,
    record: Record,
}

export const DummyInfos: Array<Info> = [
    { name: "", score: 0, star: 0, seat: 0, isPlus: true },
    { name: "", score: 0, star: 0, seat: 1, isPlus: true },
    { name: "", score: 0, star: 0, seat: 2, isPlus: true },
    { name: "", score: 0, star: 0, seat: 3, isPlus: true },
];

export const getCleanInfos = () => {
    return DummyInfos.map(value => { return {...value}; });
}

export const DummyRecord: Record = {
    index: 0, deposit: 0, url: "",
    infos: getCleanInfos()
}