import * as React from "react";

export default class LazyLoadModule extends React.Component {
  constructor() {
    super();
    this.state = {
      module: null
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: error });
  }

  async componentDidMount() {
    try {
      const { resolve } = this.props;
      const { default: module } = await resolve();
      this.setState({ module });
    } catch (error) {
      this.setState({ hasError: error });
    }
  }

  render() {
    const { module, hasError } = this.state;

    if (hasError) return <div>{hasError.message}</div>;
    if (!module) return <div>Loading module...</div>;

    if (module) return React.createElement(module);

    return <div>Module loaded</div>;
  }
}