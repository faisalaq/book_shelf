import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBook, updateBook, clearBook, deletePost } from '../../actions/index'


class EditBook extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
        }
    }

    handleInput = (event, name)=>{
        const newFormData = {
            ...this.state.formdata
        }
        newFormData[name] = event.target.value

        this.setState({
            formdata:newFormData
        })
    }

    submitForm = (e)=>{
        e.preventDefault()
        
        this.props.dispatch(updateBook(this.state.formdata))
    }


    componentWillMount(){
        this.props.dispatch(getBook(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        let book = nextProps.books.book
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                author:book.author,
                review:book.review,
                pages:book.pages,
                rating:book.rating,
                price:book.price
                 
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="rl_container_article">
                <form onSubmit={this.submitForm}>
                    <h2>Edit review</h2>

                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter name"
                            value={this.state.formdata.name}
                            onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter author"
                            value={this.state.formdata.author}
                            onChange={(event)=>this.handleInput(event,'author')}
                        />
                    </div>

                    <textarea 
                        value={this.state.formdata.review}
                        onChange={(event)=>this.handleInput(event,'review')}
                    />

                    <div className="form_element">
                        <input 
                            type="number"
                            placeholder="Enter pages"
                            value={this.state.formdata.pages}
                            onChange={(event)=>this.handleInput(event,'pages')}
                        />
                    </div>

                    <div className="form_element"> Rating
                        <select
                            value={this.state.formdata.rating}
                            onChange={(event)=>this.handleInput(event,'rating')}
                        >
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select> 
                    </div>

                    <div className="form_element">
                        <input 
                            type="number"
                            placeholder="Enter price"
                            value={this.state.formdata.price}
                            onChange={(event)=>this.handleInput(event,'price')}
                        />
                    </div>
                    
                    <button type="submit"> Edit review </button>
                    <div className="delete_post">
                        <div className="button">Delete review</div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(EditBook)