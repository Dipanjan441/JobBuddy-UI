import { Suspense } from "react"
import RouteGuard from "./RouteGuard"
import type { AppRoute } from "./types"
import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./routes"

// Recursive function to render routes (handles nested children)
const renderRoutes = (routes: AppRoute[]) => {
    return routes.map((route)=>{
        const Component = route.component;
        const WrappedComponent = (
            <RouteGuard guardType={route.guard}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
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
