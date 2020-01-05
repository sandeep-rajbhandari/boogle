export interface ActionWithPayload<S extends string, T> {
    type: S
    payload: T
}

export interface ActionWithoutPayload<S extends string> {
    type: S
}


