class InfoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            buttonText: 'Expand',
            class: 'collapsed',
            height: this.props.defaultHeight
        };
        
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }
    
    toggleCollapse(e) {
        const contentHeight = $(e.target).closest('.card').find('.content-wrapper').height();
        const contentPadding = 42;
        const newHeight = contentHeight + contentPadding;
        
        this.setState({
            collapsed: !this.state.collapsed,
            buttonText: this.state.collapsed ? 'Collapse' : 'Expand',
            class: this.state.collapsed ? '' : 'collapsed',
            height: this.state.collapsed ? newHeight : this.props.defaultHeight
        });
    }
    
    render() {
        return (
            <div className="ui card">
                <div className="content header-content center aligned">
                    <div className="header">Public transport</div>
                    <div className="description">Some random description here.</div>
                    <i className="circular big bus icon"></i>
                </div>
                <div className={"content collapsible " + this.state.class} style={{height:this.state.height}}>
                    <div className="content-wrapper">
                        <p>{this.props.text}</p>
                        <ul>
                            <li>Bullet #1</li>
                            <li>Bullet #2</li>
                            <li>Bullet #3</li>
                            <li>Bullet #4</li>
                            <li>Bullet #5</li>
                            <li>Bullet #6</li>
                        </ul>
                    </div>
                </div>
                <div className="ui bottom attached button" onClick={this.toggleCollapse}>
                    <i className={"angle double icon " + (this.state.collapsed ? "down" : "up")}></i>
                    {this.state.buttonText}
                </div>
            </div>
        );
    }
};

const loremText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi blanditiis incidunt molestias similique ex sequi debitis illum dicta distinctio impedit quae nobis enim, at dolorum cum, architecto ducimus eius soluta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugit deleniti nulla voluptate illo sed rem reprehenderit aliquam quis quam, temporibus eveniet, ipsa nam, a, vitae! Accusantium voluptate, consectetur est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nisi nobis assumenda, repellendus, soluta repudiandae. Officia aspernatur accusantium aut porro eius tenetur perspiciatis debitis cum pariatur, at dolore nostrum, ipsum.";

ReactDOM.render(
  <InfoBox text={loremText} defaultHeight={135} />,
  document.getElementById('content')
);
