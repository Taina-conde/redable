import React from 'react';
import { connect } from 'react-redux'
import { BiLike, BiDislike, BiDotsHorizontalRounded } from 'react-icons/bi'
import {Dropdown} from 'react-bootstrap'
import CustomDropdownToggle from './CustomDropdownToggle'


class Comment extends React.Component{
    render(){
        const {comment} = this.props;
        return(
            <div className = 'container comment-box'>
                <div className = 'row flex-column '>
                    <div  className = 'col comment-author'>
                        {comment.author.charAt(0).toUpperCase() + comment.author.slice(1)} says: 
                    </div>
                    <div className = 'col comment-body'>
                        {comment.body}
                    </div>
                    
                </div>
                <div className = 'row mt-2 mb-2'>
                        
                    <div className = 'col '>

                        <button type = 'button' className = 'icon-btn mr-1'  onClick = {() => this.handleVote('downVote')}>
                            <BiDislike className = 'text-success' size = {20} />
                        </button>
                        
                        <span className = 'comment-vote'>{comment.voteScore}</span>
                        
                        <button type = 'button' className = 'icon-btn ml-1'  onClick = {() => this.handleVote('upVote')}>
                            <BiLike className = 'text-success ' size = {20}/>
                        </button>
                    </div>
                    <div className = 'col  text-right'>
                        <Dropdown >
                            <Dropdown.Toggle as={CustomDropdownToggle} id="dropdown-basic" >
                                <BiDotsHorizontalRounded className = 'text-success' size = {20}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/edit" onClick = {this.handleEdit}>
                                    Edit
                                </Dropdown.Item>
                                <Dropdown.Item href="#/delete" onClick = {this.handleDelete}>
                                    Delete
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps({comments}, {id}) {
    return {
        comment: comments[id]
    }
}
export default connect(mapStateToProps)(Comment)