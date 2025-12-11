import React, { Component } from 'react';

class ThemeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
  }

  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  toggle = () => {
    this.setState((prev) => ({
      theme: prev.theme === 'dark' ? 'light' : 'dark',
    }));
  };

  render() {
    const { theme } = this.state;
    return (
      <button className="Theme-toggle" onClick={this.toggle}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>
    );
  }
}

export default ThemeToggle;
