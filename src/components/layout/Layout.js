import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"

export const HomeLayout = () => {
    return (
        <div className="HomeLayout">
            <Header />
            <Container fluid>
                <Outlet />
            </Container>
        </div>
    )
}

export const DashboardLayout = () => {
    return (
        <div className="DashboardLayout">
            <Header />
            <Container fluid className="d-flex">
                <Sidebar />
                <Container fluid className="px-4 dashboard-layout">
                    <Outlet />
                </Container>
            </Container>
        </div>
    )
}