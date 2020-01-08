import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { winePropsShape } from '../../models/prop-types-shapes';
import { getWines, getSelectedWine, saveWine, updateWine, deleteWine } from '../../store/actions';
import styles from './wines.module.scss';
import { filtersOptions } from '../../config';

// components
import Filtering from './filtering/filtering';
import Sorting from './sorting/sorting';
import Loader from '../common/loader/loader';
import WineForm from './wine-form/wine-form';
import SmallWineCard from './wine/small-card/small-wine-card';
import BigWineCard from './wine/big-card/big-wine-card';
import Modal from '../common/modal/modal';

//icons
import { AddIcon } from '../../icons/icons';

class Wines extends Component {
    constructor(props){
        super(props);
        this.state = {
            newWineFormOpen: false,
            editMode: false,
            appliedFilters: {},
            sortingCategory: 'id',
            sortingOrder: 'desc'
        };

        this.closeModal = this.closeModal.bind(this);
        this.handleChnageFilter = this.handleChnageFilter.bind(this);
        this.handleSortingCategoryChange = this.handleSortingCategoryChange.bind(this);
        this.handleSortingOrderChange = this.handleSortingOrderChange.bind(this);
        this.handleOpenForm = this.handleOpenForm.bind(this);
        this.handleCloseForm = this.handleCloseForm.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleCancelForm = this.handleCancelForm.bind(this);
        this.handleEditModeOn = this.handleEditModeOn.bind(this);
        this.handleEditModeOff = this.handleEditModeOff.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const appliedFilters = {};
        Object.keys(filtersOptions).forEach(filter => appliedFilters[filter] = '');
        this.setState({appliedFilters});

        this.props.getWines();
    }

    updateWinesList(){
        const {appliedFilters, sortingCategory, sortingOrder} = this.state;
        const filter = Object.keys(appliedFilters).map(key => {
            return appliedFilters[key] ? `&${key}=${appliedFilters[key]}` : '';
        }).join('');
        const sorting = `_sort=${sortingCategory}&_order=${sortingOrder}`;
        this.props.getWines(sorting + filter);
    }

    closeModal(){
        this.props.getSelectedWine(null);
    }

    handleChnageFilter({target}){
        const { value, name } = target;

        const newFilter = {
            ...this.state.appliedFilters,
            [name]: value
        };

        this.setState(
            {appliedFilters: newFilter}, 
            () => this.updateWinesList()
        );
    }

    handleSortingCategoryChange(event){
        this.setState(
            {sortingCategory: event.target.value},
            () => this.updateWinesList()
        );
    }

    handleSortingOrderChange(event){
        this.setState(
            {sortingOrder: event.target.value},
            () => this.updateWinesList()
        );
    }

    handleOpenForm(){
        this.setState({newWineFormOpen: true});
    }

    handleCloseForm(){
        this.setState({newWineFormOpen: false});
    }

    handleSubmitForm(wine, editMode){
        if(editMode){
            this.setState({editMode: false});
            this.props.updateWine(wine);
        } else  {
            this.handleCloseForm();
            this.props.saveWine(wine);
        }
    }

    handleCancelForm(){
        this.handleCloseForm();
    }

    handleEditModeOn(){
        this.setState({editMode: true});
    }

    handleEditModeOff(){
        this.setState({editMode: false});
    }

    handleDelete(wineId){
        if(window.confirm('Are you sure you want to delete the selected product?')){
            this.props.deleteWine(wineId);
        }
    }

    render(){
        const {
            selectedWine,
            wines,
            getSelectedWine,
            fetchingWines,
        } = this.props;

        const {
            appliedFilters,
            sortingCategory,
            sortingOrder,
            editMode
        } = this.state;

        const winesList = wines.map(wine => <SmallWineCard key={wine.id} wine={wine} getSelectedWine={getSelectedWine}/>);
        return (
            <div className={styles.winesContainer}>
                <div className={styles.winesFilter}>
                    <div className='container'>
                        <h2 className={styles.title}>My collection</h2>
                        <Filtering onChangeFilter={this.handleChnageFilter} appliedFilters={appliedFilters}/>
                        <Sorting sortingCategory={sortingCategory}
                            sortingOrder={sortingOrder}
                            onSortingCategoryChange={this.handleSortingCategoryChange}
                            onSortingOrderChange={this.handleSortingOrderChange}
                        
                        />
                    </div>
                </div>
                <div className='container'>
                    <div className={styles.newFormWrapper}>
                        { this.state.newWineFormOpen ?
                            <WineForm onSave={this.handleSubmitForm} onCancel={this.handleCancelForm}/> :
                            <div className={styles.newCardBtnWrapper}>
                                <span className={styles.newCardBtn} onClick={this.handleOpenForm}>
                                    <AddIcon />
                                </span>
                                {fetchingWines && <Loader size='30px' border='4px' width='70px' />}
                            </div>
                        }
                        
                    </div>
                    {
                        wines.length > 0 &&
                            <ul className={styles.winesList}>
                                {winesList}
                            </ul>
                    }

                    {
                        selectedWine && 
                        <Modal controls={true} close={this.closeModal}>
                            <Fragment>
                                {
                                    editMode ? 
                                        <WineForm wine={selectedWine}
                                            onSave={this.handleSubmitForm}
                                            onCancel={this.handleEditModeOff}
                                            editMode={true} /> :
                                        <BigWineCard wine={selectedWine}
                                            onDelete={this.handleDelete}
                                            editModeOn={this.handleEditModeOn}
                                            fetchingWines={fetchingWines}/>
                                }
                            </Fragment>
                        </Modal>
                    }
                </div>

            </div>
        );
    }
}

Wines.propTypes = {
    getWines: PropTypes.func.isRequired,
    getSelectedWine: PropTypes.func.isRequired,
    saveWine: PropTypes.func.isRequired,
    updateWine: PropTypes.func.isRequired,
    deleteWine: PropTypes.func.isRequired,
    wines: PropTypes.arrayOf(PropTypes.shape(winePropsShape)).isRequired,
    fetchingWines: PropTypes.bool.isRequired,
    winesLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {
        wines: state.winesStore.wines,
        winesLoaded: state.winesStore.winesLoaded,
        fetchingWines: state.winesStore.fetchingWines,
        selectedWine: state.winesStore.selectedWine
    };
};

const mapDispatchToProps = {
    getWines,
    getSelectedWine,
    saveWine,
    updateWine,
    deleteWine
};

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
