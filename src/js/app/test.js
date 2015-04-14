var DistantHTML = React.createClass({
    getInitialState: function () {
        return {
            html: 'Chargement...'
        };
    },
    componentDidMount: function () {
        $.get(this.props.uri, function (result) {
            if (this.isMounted()) {
                this.setState({
                    html: result
                });
            }
        }.bind(this));
    },
    render: function () {
        markup = this.state.html;
        return (
            React.createElement('div', {dangerouslySetInnerHTML: {__html: markup}})
        );
    }
});

var DistantHTML2 = React.createClass({
    getInitialState: function () {
        return {
            html: 'Chargement...'
        };
    },
    componentDidMount: function () {
        $.get(this.props.uri, function (result) {
            console.log(result);
            if (this.isMounted()) {
                this.setState({
                    html: result
                });
            }
        }.bind(this));
    },
    render: function () {
        return this.state.html;
    }
});

var DirectHTML = React.createClass({
    render: function () {
        return (this.props.html);
    }
});

var DirectHTML2 = React.createClass({
    render: function () {
        return (
            React.createElement('div', {dangerouslySetInnerHTML: {__html: this.props.html}})
        );
    }
});


React.render(
        React.createElement(DistantHTML, {uri: "http://test.local.fr/data_to_display.html", color: "#FFCCCC"}),
        document.getElementById('container1')
        );

React.render(
        React.createElement(DirectHTML, {html: test, color: "#FFCCCC"}),
        document.getElementById('container2')
        );

React.render(
        React.createElement(DirectHTML2, {html: "<table><tr><td>bla bla</td><td>bli bli</td></tr><tr><td>bla bla</td><td>bli bli</td></tr><tr><td>bla bla</td><td>bli bli</td></tr><tr><td>bla bla</td><td>bli bli</td></tr></table>"}),
        document.getElementById('container2')
        );
//
React.render(
        React.createElement(DistantHTML, {uri: "http://test.local.fr/examples/react-tutorial/"}),
        document.getElementById('container3')
        );
//
React.render(
        React.createElement(DistantHTML, {uri: "http://test.local.fr"}),
        document.getElementById('container4')
        );
//
React.render(
        React.createElement(DistantHTML, {uri: "http://test.local.fr/pilote/page.html"}),
        document.getElementById('container5')
        );
//
React.render(
        React.createElement(DirectHTML, {html: <table><tr><td>bla bla</td><td>bli bli</td></tr><tr><td>bla bla</td><td>bli bli</td></tr><tr><td>bla bla</td><td>bli bli</td></tr><tr><td>bla bla</td><td>bli bli</td></tr></table>}),
        document.getElementById('container6')
        );

React.render(
        React.createElement(DistantHTML2, {uri: "http://test.local.fr/src/js/app/test.jsx", color: "#FFCCCC"}),
        document.getElementById('container7')
        );

//React.render(
//        React.createElement(DistantHTML2, {uri: "http://test.local.fr/data_to_display.html", color: "#FFCCCC"}),
//        document.getElementById('container7')
//        );
