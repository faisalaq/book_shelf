import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from  './components/Home/home'
import Layout from './hoc/layout'
import BookView from './components/Books/index'
import Login from './containers/Admin/login'
import Auth from './hoc/auth'
import User from './components/Admin/index'
import AddReview from './containers/Admin/add'
import UserPosts from './components/Admin/userPosts'
import EditReview from './containers/Admin/edit'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Auth(Home, null)}/>
                <Route path='/login' exact component={Auth(Login, false)}/>
                <Route path='/user' exact component={Auth(User, true)}/>
                <Route path='/user/add' exact component={Auth(AddReview)} />
                <Route path='/user/edit-post/:id' exact component={Auth(EditReview, true)} />
                <Route path="/books/:id" exact component={Auth(BookView)}/>
                <Route path='/user/user-reviews' exact component={Auth(UserPosts, true)}/>
            </Switch>
        </Layout>
    );
};


export default Routes;