import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component{
    state = {lists: [], loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 0833cd00ceaa2f49328fcbc65d3e5c640ca21c71'
        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false})
    }
    render()
    {   
        const listsApi = this.state.lists;
        return (
            <div>
                {/* <ListComponent listName={'Minha Lista'} />
                <ListComponent listName={'Minha Lista 2'} /> */}
                {listsApi.map(list => <ListComponent key={list.id} listName={list.name}/>)}
            </div>
        )
    }

}