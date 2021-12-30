import TradingViewWidget, { Themes, IntervalTypes } from 'react-tradingview-widget';
import '../containers/App.css'

const App = () => (
  <div class="chartview">
    <TradingViewWidget
      symbol="NASDAQ:AAPL"
      theme={Themes.DARK}
      locale="fr"
      autosize
      symbol="BINANCE:BTCPERP"
      interval={IntervalTypes.D}
      timezone="Etc/UTC"
      style="1"
      locale="in"
      />
  </div>
);

export default App;
