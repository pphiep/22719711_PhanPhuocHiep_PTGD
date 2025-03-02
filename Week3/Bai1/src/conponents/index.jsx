import Content from "./Content";
import Footer from "./footer";
import Menu from "./Menu";

export default function AppLoad() {
  return (
    <>
      <div className="container">
        <div className="header">
            <Menu/>    
        </div>
        <div className="menu">
        <aside class="filters">
            <h3>FILTERS</h3>
            <h4>Type</h4>
            <div class="filter-section" style={{display: "flex"}}>
                <div className="left" style={{width: "50%"}}>
                    <label><input type="checkbox"/> Pan-fried</label>
                    <label><input type="checkbox" checked/> Grilled</label>
                    <label><input type="checkbox"/> Sauteed</label>
                    <label><input type="checkbox"/> Steamed</label>
                </div>
                <div className="right" style={{width: "50%"}}>
                    <label><input type="checkbox"/> Stir-fried</label>
                    <label><input type="checkbox" checked/> Roasted</label>
                    <label><input type="checkbox"/> Backed</label>
                    <label><input type="checkbox" checked/> Stewed</label>
                </div>
            
            </div>
            <div class="filter-section">
                <h4>Time</h4>
                <input type="range" min="30" max="50"/>
            </div>
            <div class="filter-section">
                <h4>Rating</h4>
                <label><input type="checkbox"/> ⭐⭐⭐⭐⭐</label>
                <label><input type="checkbox" checked/> ⭐⭐⭐⭐</label>
                <label><input type="checkbox" checked/> ⭐⭐⭐</label>
            </div>
            <button class="apply-btn">Apply</button>
        </aside>
        </div>
        <div className="content">
            <Content/>
        </div>
        <Footer/>
      </div>
    </>
  );
}