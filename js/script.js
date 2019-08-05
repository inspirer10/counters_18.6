var Counter = React.createClass({

    getDefaultProps() {
        console.log('getDefaultProps - ustawia domyślne wartości propsów (które nie zostały przekazane do komponentu)');
    },

    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount() {
        console.log('componentWillMount - jest wywoływana zaraz przed wykonaniem metody RENDER, warto zaznaczyć, że ustawienie stanu w tej metodzie nie spowoduje przerenderowania komponentu.');
    },


    render: function () {
        return React.createElement('div', {
                className: 'box'
            },
            React.createElement('div', {
                className: 'counter'
            }, this.state.counter),
            React.createElement('button', {
                onClick: this.decrement
            }, '-'),
            React.createElement('button', {
                onClick: this.increment
            }, '+'),
        );
    },

    componentDidMount() {
        console.log('componentDidMount - ta metoda jest dobrym miejscem na przygotowanie dowolnych subskrypcji');
    },


    shouldComponentUpdate() {
        console.log('shouldComponentUpdate - jeśli zwróci wartość true, to natychmiast zostanie wywołana kolejna metoda: componentWillUpdate');
        return true;
    },

    componentWillUpdate() {
        console.log('componentWillUpdate - Powinna zostać wywoływana tylko do przygotowania na nadchodzące zmiany, nie wolno w tym miejscu modyfikować stanu - metoda setState tutaj nie działa');
    }

});


var element = React.createElement('div', {className: 'items'},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));