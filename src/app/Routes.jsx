import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Layout from "./Layout"
import Home from './home';

export default function Routes () {

    return (<>
        <ReactRoutes>
			<Route path="/" element={ <Layout /> } >
				<Route path="/" element={
					<Home />
				} />
			</Route>
		</ReactRoutes>
    </>)
}