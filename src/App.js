import React, { Suspense, lazy } from "react";
import { connect } from 'react-redux';
import { clearErrors } from './store/actions';
import PropTypes from 'prop-types';

// components
import Loader from './components/common/loader/loader';
import Header from './components/header/header';
import Errors from './components/errors/errors';
const Wines = lazy(() => import('./components/wines/wines'));

const App = ({errors, clearErrors}) => (
    <Suspense fallback={<Loader />}>
        <Header />
        <Wines />
        {errors.length ? <Errors errors={errors} clearErrors={clearErrors}/> : ''}
    </Suspense>
);

Errors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string).isRequired,
    clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        errors: state.errorsStore.errors
    };
};

const mapDispatchToProps = {
    clearErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(App);