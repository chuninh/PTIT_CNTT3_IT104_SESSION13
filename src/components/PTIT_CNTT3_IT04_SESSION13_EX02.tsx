import { Component } from 'react'

type student = {
    id: number;
    name: string;
    date: string;
    address: string
}
export default class Exercises2 extends Component<{}, student> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: "chu ninh",
            date: "02/02/2006",
            address: "ha noi"
        }
    }
    render() {
        return (
            <div>
                Exercises2
                <h1>id:{this.state.id}</h1>
                <h1>ten:{this.state.name}</h1>
                <h1>ngay sinh:{this.state.date}</h1>
                <h1>dia chi:{this.state.address}</h1>
            </div>

        )
    }
}
