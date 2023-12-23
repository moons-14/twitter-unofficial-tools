export type Account = {
    id: string,
    name: string,
    guest: boolean,
    cookie: {
        name: string,
        value: string,
    }[],
    deleteProtected: boolean,
}