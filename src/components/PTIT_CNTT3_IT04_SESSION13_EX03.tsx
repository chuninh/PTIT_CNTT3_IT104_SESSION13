import { Component } from "react";

type Student = {
    id: number;
    name: string;
    age: number;
};

type State = {
    users: Student[];
};

export default class Exercises3 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: "chu ninh",
                    age: 19,
                },
                {
                    id: 2,
                    name: "doan tu",
                    age: 19,
                },
                {
                    id: 3,
                    name: "nguyen binh",
                    age: 19,
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <h2>Exercises3</h2>
                <table border={1}>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                    </tr>
                    {this.state.users.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}
