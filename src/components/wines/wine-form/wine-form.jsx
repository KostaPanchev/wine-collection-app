import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './wine-form.module.scss';
import { winePropsShape } from '../../../models/prop-types-shapes';
import { filtersOptions } from '../../../config';

import TextInput from '../../common/inputs/text-input/text-input';
import SelectInput from '../../common/inputs/select/select-input';
import { WineBottle } from '../../../icons/icons';

class WineForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            formChanged: false,
            name: '',
            description: '',
            country: '',
            year: '',
            rating: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount(){
        if(this.props.editMode){
            this.setState(prevState => ({
                ...prevState,
                ...this.props.wine
            }));
        }
    }
    
    handleInputChange(event) {
        this.setState({formChanged: true});
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event){
        event.preventDefault();
        const wine = {
            name: this.state.name,
            description: this.state.description,
            country: this.state.country,
            year: this.state.year,
            rating: this.state.rating,

        };
        if(this.state.id){
            wine.id = this.state.id;
        }

        this.props.onSave(wine, this.props.editMode);
    }

    handleCancel(event){
        event.preventDefault();
        if(this.state.formChanged){
            if (window.confirm("You have made changes on the form. If you close it you will lose them")) { 
                this.props.onCancel();
            }
        } else {
            this.props.onCancel();
        }
    }

    render(){
        const {name, description, country, year, rating, formChanged} = this.state;
        const formClass = this.props.editMode ? 'formEdit' : 'formSave';
        return(
            <form className={styles[formClass]} onSubmit={this.handleSubmit}>
                <div className={styles.inner}>
                    <div className={styles.wineImage}>
                        <WineBottle />
                    </div>
                    <div className={styles.wineInfo}>
                        <TextInput value={name}
                            onChange={this.handleInputChange}
                            maxLength='50'
                            required name='name'
                            type='text'
                            label='Wine Name'/>
                        <div className={styles.productionInfo}>
                            <SelectInput className={styles.productionInfoSelect}
                                label='Country'
                                required
                                name='country'
                                value={country}
                                onChange={this.handleInputChange}
                                options={filtersOptions.country}/>
                            <SelectInput className={styles.productionInfoSelect}
                                label='Year'
                                required
                                name='year'
                                value={year}
                                onChange={this.handleInputChange}
                                options={filtersOptions.year}/>
                        </div>
                        <SelectInput className={styles.rating}
                            label='Rating'
                            required
                            name='rating'
                            value={rating}
                            onChange={this.handleInputChange}
                            options={filtersOptions.rating}/>
                        <TextInput className={styles.description}
                            value={description}
                            onChange={this.handleInputChange}
                            maxLength='400'
                            required name='description'
                            type='textarea'
                            label='Wine Description'/>
                    </div>
                </div>
                <div className={styles.buttons}>
                    {formChanged && <input className={styles.saveBtn} type="submit" value='save'/>}
                    <button className={styles.cancelBtn} onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>
        );
    }
}

WineForm.defaultProps = {
    editMode: false
};

WineForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    editMode: PropTypes.bool,
    wine: PropTypes.shape(winePropsShape)
};

export default WineForm;