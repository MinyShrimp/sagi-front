
export interface Perpect {
    id:    number,
    name:  string,
    index: number
};

export interface PerpectsAction {
    type:    string,
    index:   number,
    perpect: Perpect,
};

export const DummyPerpect: Perpect = {
    id: 0, name: "", index: 1
};

export const PERPECTS = [
    { value:  1, label: "헤아림 역만" },
    { value:  2, label: "천화" },
    { value:  3, label: "지화" },
    { value:  4, label: "사암각" },
    { value:  5, label: "사암각 단기" },
    { value:  6, label: "국사무쌍" },
    { value:  7, label: "국사무쌍 13면팅" },
    { value:  8, label: "구련보등" },
    { value:  9, label: "순정구련보등" },
    { value: 10, label: "녹일색" },
    { value: 11, label: "자일색" },
    { value: 12, label: "청노두" },
    { value: 13, label: "대삼원" },
    { value: 14, label: "소사희" },
    { value: 15, label: "청노두" },
    { value: 16, label: "대사희" },
    { value: 17, label: "사깡쯔" },
];

export const PERPECT_CODE: { [key: number]: string } = {
    1: "헤아림 역만",
    2: "천화",
    3: "지화",
    4: "사암각",
    5: "사암각 단기",
    6: "국사무쌍",
    7: "국사무쌍 13면팅",
    8: "구련보등",
    9: "순정구련보등",
   10: "녹일색",
   11: "자일색",
   12: "청노두",
   13: "대삼원",
   14: "소사희",
   15: "청노두",
   16: "대사희",
   17: "사깡쯔",
};