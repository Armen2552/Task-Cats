import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Route,Switch} from 'react-router-dom'

//STYLES
import './App.scss';

//COMPONENTS
import Header from "../layout/header/Header.layout";
import NavBar from "../layout/nav-bar/NavBar.layout";
import Cats from "../pages/cats/Cats.page"

//ACTIONS
import {getDataCategories} from "../redux/common/common.action";
import ScrollBar from "../components/scroll-bar/ScrollBar.component";

const App = ()=> {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDataCategories())
    },[])


  return (
    <div className="app">
        <Header />
        <div className="container">
            <NavBar />
            <div className="content">
                <ScrollBar>
                    <Switch>
                        <Route exact path="/:category/:id" component={Cats}/>
                    </Switch>
                </ScrollBar>
            </div>
        </div>
    </div>
  );
}

export default App;
