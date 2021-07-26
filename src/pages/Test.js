import React from 'react'
import { Route } from 'react-router-dom'

const HomePage = () => (
    <div>
        <h1>Homepage</h1>
    </div>
)
const TopicsList = () => (
    <div>
        <h1>TopicsList</h1>
    </div>
)
const TopicDetail = (props) => (
    <div>
        <h1>Topic Detail: {props.match.params.topicId}</h1>
    </div>
)
const Test = () => {
    return (
        <div>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/topics' component={TopicsList}/>
            <Route path='/topics/:topicId' component={TopicDetail}/>
        </div>
    )
}

export default Test
