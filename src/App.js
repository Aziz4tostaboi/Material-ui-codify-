import './App.scss';
import Header from "./Components/Header";
import CardContainer from "./Components/Cards";
import SearchAppBar from "./Components/ Search";
import BasicPagination from "./Components/pagination";

function App() {
  return (
    <div>
        <Header/>
        <SearchAppBar/>
        <CardContainer/>
        <BasicPagination/>
    </div>
  );
}

export default App;
