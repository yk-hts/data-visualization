import React from "react";
import { Link, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Top } from "./pages/Top";

import { BarChartPage } from "./pages/BarChart";
import { ChordDiagramPage } from "./pages/ChordDiagram";
import { ChoroplethMapPage } from "./pages/ChoroplethMap";
import { DensityPlotPage } from "./pages/DensityPlot";
import { LineChartPage } from "./pages/LineChart";
import { NodeLinkDiagramPage } from "./pages/NodeLinkDiagram";
import { ScatterPlotPage } from "./pages/ScatterPlot";
import { TreemapPage } from "./pages/Treemap";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1>Data Visualization with React and D3</h1>
          </Link>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <Switch>
            <Route path="/" component={Top} exact />
            <Route path="/bar-chart" component={BarChartPage} />
            <Route path="/chord-diagram" component={ChordDiagramPage} />
            <Route path="/choropleth-map" component={ChoroplethMapPage} />
            <Route path="/density-plot" component={DensityPlotPage} />
            <Route path="/line-chart" component={LineChartPage} />
            <Route path="/node-link-diagram" component={NodeLinkDiagramPage} />
            <Route path="/scatter-plot" component={ScatterPlotPage} />
            <Route path="/treemap" component={TreemapPage} />
          </Switch>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>&copy; 2020 Yosuke Onoue</p>
        </div>
      </footer>
    </Router>
  );
};

export default App;