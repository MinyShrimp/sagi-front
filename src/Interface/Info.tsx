
export interface Info {
    name:   string,
    score:  number,
    star:   number,
    seat:   number,
    isPlus: boolean
}

export interface InfosAction {
    type:   string,
    index:  number,
    value:  Info,
}

export const DummyInfo: Info = {
    name: "", score: 0, star: 0, seat: 0, isPlus: false
}