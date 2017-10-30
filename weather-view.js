


export default class WeatherView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loc: null
        };
    }


    onSubmit(e) {
        // fetch location
        this.setState({ loc: newLocation });
    }

    render() {
        return (
            <View>
                <SubmitCity onSubmit={(e) => {
                    this.onSubmit(e);
                }} />
                <Location location={this.state.loc} />
            </View>
        );
    }
}
