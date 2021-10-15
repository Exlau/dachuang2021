import { lazy } from "react";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import Post from "../pages/Post";

const routes = [
    {
        selectedTab: '/index/home',
        title: 'HOME',
        key: 'HOME',
        // component: lazy(() => { import('../pages/Home') })
        component: Home
    },
    {
        selectedTab: '/index/search',
        title: 'SEARCH',
        key: 'SEARCH',
        // component: lazy(() => { import('../pages/Search') })
        component: Search
    },
    // {
    //     selectedTab: '/index/friend',
    //     title: 'FRIEND',
    //     key: 'FRIEND',
    //     component: lazy(() => { import('../pages/Friend') })
    // },
    {
        selectedTab: '/index/profile',
        title: 'PROFILE',
        key: 'PROFILE',
        // component: lazy(() => { import('../pages/Profile') })
        component: Profile
    },
    {
        selectedTab: '/index/post',
        title:'POST',
        key:'POST',
        component: Post
    }

]

export default routes;