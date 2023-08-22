import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Layout from "./Layout"
import Home from './home';
import Global from './global';
import Private from './private';

export default function Routes () {

    return (<>
        <ReactRoutes>
			<Route path="/" element={ <Layout /> } >
				<Route path="/" element={
					<Home />
				} />
				<Route path="/private" element={
					<Private />
				} />
				<Route path="/global" element={
					<Global />
				} />
			</Route>
		</ReactRoutes>
    </>)
}