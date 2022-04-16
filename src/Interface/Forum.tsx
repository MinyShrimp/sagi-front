
export interface Forum {
    id:       number,
    name:     string,
    title:    string,
    date:     string,
    file:     File | undefined,
    contents: string,
};

export interface ForumAction {
    type:  string,
    forum: Forum,
};

export const DummyForum: Forum = {
    id: 0, name: "", title: "", date: "", file: undefined, contents: ""
};