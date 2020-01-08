export default class Wine {
    constructor(props){
        this.id = props.id || null;
        this.name = props.name || null;
        this.description = props.description || null;
        this.country = props.country || null;
        this.year = props.year || null;
        this.rating = props.rating || "0";
    }
}