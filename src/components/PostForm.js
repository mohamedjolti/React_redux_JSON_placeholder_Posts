import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            body:""

        }
             this.onChange=this.onChange.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const post={title:this.state.title,body:this.state.body}

        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(post),
    
        }).then(res=>res.json()).then(data=>console.log(data))

    }
    render() {
        return (
            <div>
                <h1>
                    Post form
                </h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                <input name="title"onChange={this.onChange} value={this.state.title} placeholder="title"/>
                <input name="body" onChange={this.onChange} value={this.state.body} placeholder="body"/>
                <button type="submit">Add post</button>
                </form>
            </div>

        )
    }
}

export default PostForm