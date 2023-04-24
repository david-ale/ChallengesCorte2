import { NavLink, Route, Routes } from "react-router-dom"
import { ProductsPage } from "./ProductsPage"
import {AboutPage} from "../pages/AboutPage"

export const UserRoutes = () =>{
    return(
        <>
            <NavLink to='/'>Index</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='products'>Products</NavLink>
            <NavLink to='search'>Search</NavLink>
            <NavLink to='Login'>Login</NavLink>

            <Routes>
                <Route path="products" element={<ProductsPage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="search" element={<SearchPage/>}/>
            </Routes>
        </>
    )
}