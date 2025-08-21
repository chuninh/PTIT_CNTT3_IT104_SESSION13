import { Component } from 'react'

type name={
    name:string
}
export default class Exercises1 extends Component<{},name> {
    constructor(props:{}) {
        super(props);
        this.state={
            name:"chu van ninh"
        }
    }
    render() {
        return (
            <div>
                Exercises1
                <h1>ho va ten:{this.state.name}</h1>
            </div>
        )
    }
}
