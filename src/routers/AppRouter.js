import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProfilePage from '../pages/ProfilePage';
import Navbar from '../components/Navbar';
import LoginPage from '../pages/LoginPages';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import PaymentsPage from '../pages/PaymentsPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import CategoriesRouter from './CategoriesRouter';

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/profile/:username" component={ProfilePage} />

                <Route path="/categories" component={CategoriesRouter} />

                <PublicRoute exact path="/login" component={LoginPage} />
                <PublicRoute exact path="/register" component={RegisterPage} />

                <PrivateRoute exact path="/dashboard" component={DashboardPage} />
                <PrivateRoute exact path="/payments" component={PaymentsPage} />

                <Route path="/404" component={NotFoundPage} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    );
}