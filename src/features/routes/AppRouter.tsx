import { Suspense } from "react"
import RouteGuard from "./RouteGuard"
import { LayoutType, type AppRoute } from "./types"
import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./routes"
import BlankLayout from "../layout/BlankLayout"
import MainLayout from "../layout/MainLayout"

// Helper to get the correct layout component
const getLayoutComponent = (type: LayoutType) => {
    switch (type) {
        case LayoutType.BLANK: return BlankLayout;
        case LayoutType.MAIN: return MainLayout;
        default: return MainLayout;
    }
};

// Recursive function to render routes (handles nested children)
const renderRoutes = (routes: AppRoute[]) => {
    return routes.map((route) => {
        const Component = route.component;
        //get the layout component
        const Layout = getLayoutComponent(route.layout || LayoutType.MAIN);
        const WrappedComponent = (
            <RouteGuard guardType={route.guard}>
                <Layout>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Component />
                    </Suspense>
                </Layout>
            </RouteGuard>
        )

        return (
            <Route key={route.path} path={route.path} element={WrappedComponent} >
                {route.children && renderRoutes(route.children)}
            </Route>
        )
    })
}

const AppRouter = () => {
    return (
        <Routes >
            {renderRoutes(ROUTES)}
        </Routes>
    )
}

export default AppRouter
